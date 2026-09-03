import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  CATEGORISATION,
  MANUFACTURERS,
  STOCKING_GROUPS,
  type StockingGroup,
  type StockingItem,
} from "./data";

const euro = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
});

function formatPrice(value: number | null) {
  return value === null ? "—" : euro.format(value);
}

function manufacturerLabel(code: string | null) {
  if (!code) return "—";
  const name = MANUFACTURERS[code];
  return name ? `${code} · ${name}` : code;
}

function matches(item: StockingItem, query: string) {
  const haystack = [
    item.code,
    item.name,
    item.detail,
    item.manufacturer,
    item.country,
    item.note,
    ...item.prescription,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function ItemRow({ item }: { item: StockingItem }) {
  return (
    <tr className="border-t border-ploy-border-primary align-top">
      <td className="whitespace-nowrap px-4 py-3 font-heading text-sm font-bold text-ploy-accent-primary-700">
        {item.code}
      </td>
      <td className="min-w-[18rem] px-4 py-3 font-heading text-sm leading-6">
        {item.name}
        {item.detail ? (
          <span className="mt-1 block text-xs leading-5 text-ploy-text-secondary">
            {item.detail}
          </span>
        ) : null}
        {item.note ? (
          <span className="mt-1 block text-xs leading-5 text-ploy-accent-primary-700">
            {item.note}
          </span>
        ) : null}
      </td>
      <td className="whitespace-nowrap px-4 py-3 font-heading text-sm text-ploy-text-secondary">
        {manufacturerLabel(item.manufacturer)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 font-heading text-sm text-ploy-text-secondary">
        {item.country ?? "—"}
      </td>
      <td className="whitespace-nowrap px-4 py-3 font-heading text-sm text-ploy-text-secondary">
        {item.unit ?? "—"}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-right font-heading text-sm">
        {formatPrice(item.price)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-right font-heading text-sm">
        {formatPrice(item.covered)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-right font-heading text-sm font-bold">
        {formatPrice(item.copay)}
      </td>
      <td className="px-4 py-3 font-heading text-xs leading-5 text-ploy-text-secondary">
        {item.prescription.length ? item.prescription.join(", ") : "—"}
      </td>
    </tr>
  );
}

function GroupBlock({ group }: { group: StockingGroup }) {
  return (
    <section id={group.id} className="scroll-mt-24">
      <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
        <span className="text-ploy-accent-primary">{group.id}</span>{" "}
        {group.title}
      </h2>

      {group.subgroups.map((subgroup) => (
        <div key={subgroup.id} className="mt-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-heading text-lg font-bold">
              <span className="text-ploy-accent-primary">{subgroup.id}</span>{" "}
              {subgroup.title}
            </h3>
            {subgroup.limit !== null ? (
              <span className="font-heading text-sm text-ploy-text-secondary">
                najvyššia úhrada ZP {euro.format(subgroup.limit)}
              </span>
            ) : null}
          </div>

          <div className="mt-3 overflow-x-auto rounded-[1.1875rem] border border-ploy-border-primary bg-ploy-neutral-primary-s2">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-ploy-neutral-primary-s4">
                  <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider">
                    Kód
                  </th>
                  <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider">
                    Názov
                  </th>
                  <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider">
                    Výrobca
                  </th>
                  <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider">
                    Štát
                  </th>
                  <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider">
                    MJ
                  </th>
                  <th className="px-4 py-3 text-right font-heading text-xs font-bold uppercase tracking-wider">
                    Cena
                  </th>
                  <th className="px-4 py-3 text-right font-heading text-xs font-bold uppercase tracking-wider">
                    Úhrada
                  </th>
                  <th className="px-4 py-3 text-right font-heading text-xs font-bold uppercase tracking-wider">
                    Doplatok
                  </th>
                  <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider">
                    Preskripcia
                  </th>
                </tr>
              </thead>
              <tbody>
                {subgroup.items.map((item) => (
                  <ItemRow key={`${subgroup.id}-${item.code}`} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}

interface Props {
  heading?: string;
  description?: string;
  groups?: StockingGroup[];
}

export default function Page({
  heading = "Kódy kompresívnych pomôcok",
  description = "Celá kapitola G kategorizácie – pančuchy, ramenné návleky a rukavice, prístroje na kompresívnu liečbu aj pomôcky na liečbu lymfedému. Ku každému kódu úradná cena, úhrada zdravotnej poisťovne, doplatok pacienta a preskripčné obmedzenia.",
  groups = STOCKING_GROUPS,
}: Props) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) return groups;
    return groups
      .map((group) => ({
        ...group,
        subgroups: group.subgroups
          .map((subgroup) => ({
            ...subgroup,
            items: subgroup.items.filter((item) =>
              matches(item, normalizedQuery),
            ),
          }))
          .filter((subgroup) => subgroup.items.length > 0),
      }))
      .filter((group) => group.subgroups.length > 0);
  }, [groups, normalizedQuery]);

  const totalCount = useMemo(
    () =>
      groups.reduce(
        (sum, group) =>
          sum +
          group.subgroups.reduce((acc, sub) => acc + sub.items.length, 0),
        0,
      ),
    [groups],
  );

  const visibleCount = useMemo(
    () =>
      filteredGroups.reduce(
        (sum, group) =>
          sum +
          group.subgroups.reduce((acc, sub) => acc + sub.items.length, 0),
        0,
      ),
    [filteredGroups],
  );

  return (
    <main className="min-h-screen bg-ploy-background-primary">
      <header className="bg-ploy-background-inverse px-4 py-14 text-ploy-text-inverse lg:py-20">
        <div className="mx-auto max-w-[76.5rem]">
          <a
            href="/#prelekarov"
            className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary hover:underline"
          >
            ← Pre lekárov
          </a>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight lg:text-5xl">
            {heading}
          </h1>
          <p className="mt-5 max-w-3xl font-heading text-lg leading-8 text-ploy-text-inverse/80">
            {description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[76.5rem] px-4 py-12 lg:py-16">
        <div className="sticky top-0 z-10 -mx-4 bg-ploy-background-primary px-4 py-4">
          <label className="relative block max-w-xl">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ploy-text-secondary"
            />
            <span className="sr-only">Hľadať v zozname kódov</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Hľadať kód, názov, výrobcu alebo odbornosť…"
              className="w-full rounded-full border border-ploy-border-primary bg-ploy-neutral-primary-s4 py-3 pl-12 pr-12 font-heading text-base outline-none focus:border-ploy-accent-primary"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Vymazať vyhľadávanie"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-ploy-text-secondary hover:text-ploy-text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            ) : null}
          </label>
          <p className="mt-2 font-heading text-sm text-ploy-text-secondary">
            {normalizedQuery
              ? `Nájdených ${visibleCount} z ${totalCount} položiek`
              : `${totalCount} kategorizovaných položiek`}
          </p>
        </div>

        {filteredGroups.length ? (
          <div className="mt-8 space-y-14">
            {filteredGroups.map((group) => (
              <GroupBlock key={group.id} group={group} />
            ))}
          </div>
        ) : (
          <p className="mt-10 font-heading text-lg">
            Pre zadaný výraz sme nenašli žiadnu položku.
          </p>
        )}

        <div className="mt-16 rounded-[1.1875rem] border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-6">
          <h2 className="font-heading text-lg font-bold">
            Vysvetlivky a zdroj
          </h2>
          <p className="mt-3 font-heading text-sm leading-6 text-ploy-text-secondary">
            <strong className="text-ploy-text-primary">Cena</strong> je cena
            pomôcky vrátane DPH,{" "}
            <strong className="text-ploy-text-primary">úhrada</strong> je suma
            hradená zdravotnou poisťovňou a{" "}
            <strong className="text-ploy-text-primary">doplatok</strong> je
            rozdiel, ktorý platí pacient.{" "}
            <strong className="text-ploy-text-primary">Preskripcia</strong>{" "}
            uvádza skratky odborností s preskripčným oprávnením tak, ako sú
            uvedené v zdrojovom zozname.
          </p>
          <p className="mt-4 font-heading text-sm leading-6 text-ploy-text-secondary">
            Údaje sú prevzaté priamo zo{" "}
            <a
              href={CATEGORISATION.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ploy-accent-primary-700 underline"
            >
              Zoznamu kategorizovaných zdravotníckych pomôcok
            </a>{" "}
            Ministerstva zdravotníctva SR, ktorý platí pre obdobie{" "}
            <strong className="text-ploy-text-primary">
              {CATEGORISATION.label}
            </strong>
            . Kategorizácia sa mení každý štvrťrok – po jeho uplynutí si ceny
            overte v novom zozname.
          </p>
          <p className="mt-4 font-heading text-sm leading-6 text-ploy-text-secondary">
            Poznámky zvýraznené farebne (napríklad k navliekaniu alebo
            materiálu) nie sú súčasťou kategorizácie – ide o praktické
            skúsenosti z ambulancie.
          </p>
        </div>
      </div>
    </main>
  );
}
