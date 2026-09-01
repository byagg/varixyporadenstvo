#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse
import html
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
SITE = "https://varixyporadenstvo.com"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.title_parts: list[str] = []
        self.in_title = False
        self.meta: list[dict[str, str]] = []
        self.links: list[str] = []
        self.sources: list[str] = []
        self.ids: set[str] = set()
        self.h1_count = 0
        self.images_without_alt = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key.lower(): value or "" for key, value in attrs}
        if values.get("id"):
            self.ids.add(values["id"])
        if tag == "title":
            self.in_title = True
        elif tag == "meta":
            self.meta.append(values)
        elif tag == "a" and values.get("href"):
            self.links.append(values["href"])
        elif tag in {"img", "iframe", "script", "source"} and values.get("src"):
            self.sources.append(values["src"])
            if tag == "img" and "alt" not in values:
                self.images_without_alt += 1
        elif tag == "h1":
            self.h1_count += 1

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)

    @property
    def title(self) -> str:
        return " ".join("".join(self.title_parts).split())

    def meta_values(self, *, name: str | None = None, prop: str | None = None) -> list[str]:
        key, expected = ("name", name) if name else ("property", prop)
        return [item.get("content", "") for item in self.meta if item.get(key, "").lower() == (expected or "").lower()]


def output_file(path: str) -> Path:
    return DIST / ("index.html" if path == "/" else f"{path.lstrip('/')}.html")


def parse_page(path: str) -> PageParser:
    parser = PageParser()
    parser.feed(output_file(path).read_text(encoding="utf-8"))
    return parser


def escape_cell(value: str) -> str:
    return value.replace("|", "\\|").replace("\n", " ").strip()


def main() -> int:
    sitemap = (DIST / "sitemap.xml").read_text(encoding="utf-8")
    urls = [html.unescape(item) for item in re.findall(r"<loc>(.*?)</loc>", sitemap)]
    paths = [urlparse(url).path or "/" for url in urls]
    pages = {path: parse_page(path) for path in paths}
    failures: list[str] = []
    title_counts = Counter(page.title for page in pages.values())
    descriptions: dict[str, str] = {}
    canonicals: dict[str, str] = {}

    for path, page in pages.items():
        descriptions_found = page.meta_values(name="description")
        canonicals_found = []
        source = output_file(path).read_text(encoding="utf-8")
        canonicals_found = re.findall(
            r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)',
            source,
            re.I,
        ) or re.findall(
            r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\']canonical["\']',
            source,
            re.I,
        )
        expected = new_url = urljoin(f"{SITE}/", path.lstrip("/"))
        if path == "/":
            expected = f"{SITE}/"
        descriptions[path] = descriptions_found[0] if descriptions_found else ""
        canonicals[path] = canonicals_found[0] if canonicals_found else ""

        if not page.title:
            failures.append(f"{path}: chýba title")
        if title_counts[page.title] > 1:
            failures.append(f"{path}: title nie je unikátny")
        if len(descriptions_found) != 1 or not descriptions_found[0]:
            failures.append(f"{path}: meta description počet={len(descriptions_found)}")
        if len(canonicals_found) != 1 or canonicals_found[0] != expected:
            failures.append(f"{path}: canonical {canonicals_found!r}, očakávané {expected}")
        for prop in ["og:title", "og:description", "og:url", "og:site_name"]:
            values = page.meta_values(prop=prop)
            if len(values) != 1 or not values[0]:
                failures.append(f"{path}: {prop} počet={len(values)}")
        if page.meta_values(prop="og:url") != [expected]:
            failures.append(f"{path}: og:url nesedí s canonical")
        if page.h1_count != 1:
            failures.append(f"{path}: počet H1={page.h1_count}")
        if page.images_without_alt:
            failures.append(f"{path}: obrázky bez alt={page.images_without_alt}")

    checked_links = 0
    checked_sources = 0
    for path, page in pages.items():
        page_url = urljoin(f"{SITE}/", path.lstrip("/"))
        for href in page.links:
            absolute = urljoin(page_url, href)
            parsed = urlparse(absolute)
            if parsed.netloc != urlparse(SITE).netloc:
                continue
            checked_links += 1
            target_path = parsed.path.rstrip("/") or "/"
            if target_path not in pages:
                failures.append(f"{path}: neexistujúci interný odkaz {href}")
                continue
            if parsed.fragment and parsed.fragment not in pages[target_path].ids:
                failures.append(f"{path}: neexistujúci fragment {href}")
        for src in page.sources:
            parsed = urlparse(urljoin(page_url, src))
            if parsed.netloc and parsed.netloc != urlparse(SITE).netloc:
                continue
            checked_sources += 1
            local = DIST / parsed.path.lstrip("/")
            if not local.exists():
                failures.append(f"{path}: chýbajúci lokálny src {src}")

    manifest = [
        "# Migration Manifest",
        "",
        f"- Kontrolovaný origin: `{SITE}`",
        f"- Indexovateľné URL v sitemap: **{len(paths)}**",
        f"- Interné odkazy skontrolované: **{checked_links}**",
        f"- Lokálne `src` súbory skontrolované: **{checked_sources}**",
        f"- Technické nálezy: **{len(failures)}**",
        "",
        "| URL | Title | Meta description | Canonical | Stav |",
        "|---|---|---|---|---|",
    ]
    for path in paths:
        status = "PASS" if not any(item.startswith(f"{path}:") for item in failures) else "CHECK"
        manifest.append(
            "| {url} | {title} | {description} | {canonical} | {status} |".format(
                url=escape_cell(path),
                title=escape_cell(pages[path].title),
                description=escape_cell(descriptions[path]),
                canonical=escape_cell(canonicals[path]),
                status=status,
            )
        )
    manifest.extend(["", "## Nálezy", ""])
    manifest.extend([f"- {item}" for item in failures] or ["- Žiadne."])
    (ROOT / "MIGRATION-MANIFEST.md").write_text("\n".join(manifest) + "\n", encoding="utf-8")

    print(f"URLS={len(paths)}")
    print(f"INTERNAL_LINKS={checked_links}")
    print(f"LOCAL_SOURCES={checked_sources}")
    print(f"FAILURES={len(failures)}")
    for item in failures:
        print(f"FAIL {item}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
