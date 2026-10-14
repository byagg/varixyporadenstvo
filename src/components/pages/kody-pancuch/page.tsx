import { useMemo, useState } from "react";
import {
  Search,
  X,
  Copy,
  Check,
  Table as TableIcon,
  LayoutGrid,
} from "lucide-react";
import {
  CATEGORISATION,
  MANUFACTURERS,
  STOCKING_GROUPS,
  type StockingGroup,
  type StockingItem,
  type StockingSubgroup,
} from "./data";

const euro = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
});

function formatPrice(value: number | null) {
  return value === null ? "—" : euro.format(value);
}

function getManufacturerName(code: string | null) {
  if (!code) return "";
  return MANUFACTURERS[code] ?? code;
}

function manufacturerLabel(code: string | null) {
  if (!code) return "—";
  const name = MANUFACTURERS[code];
  return name ? `${code} · ${name}` : code;
}

/** Určí, či je pomôcka od výrobcu Thuasne (má prioritu na začiatku zoznamu). */
function isThuasne(item: StockingItem): boolean {
  if (item.manufacturer === "TLP" || item.manufacturer === "THU") return true;
  const mName = getManufacturerName(item.manufacturer).toLowerCase();
  if (mName.includes("thuasne")) return true;
  const pName = item.name.toLowerCase();
  if (
    pName.includes("venoflex") ||
    pName.includes("thuasne") ||
    pName.includes("mobiderm") ||
    pName.includes("biflex")
  ) {
    return true;
  }
  return false;
}

/** Komparátor: 1. Thuasne prvý, 2. ostatní podľa abecedy výrobcu, 3. názov, 4. kód. */
function compareStockingItems(a: StockingItem, b: StockingItem): number {
  const aThu = isThuasne(a);
  const bThu = isThuasne(b);
  if (aThu && !bThu) return -1;
  if (!aThu && bThu) return 1;

  const mA = getManufacturerName(a.manufacturer);
  const mB = getManufacturerName(b.manufacturer);
  const mCmp = mA.localeCompare(mB, "sk", { sensitivity: "base" });
  if (mCmp !== 0) return mCmp;

  const nCmp = a.name.localeCompare(b.name, "sk", { sensitivity: "base" });
  if (nCmp !== 0) return nCmp;

  return a.code.localeCompare(b.code, "sk");
}

function matches(item: StockingItem, query: string) {
  const haystack = [
    item.code,
    item.name,
    item.detail,
    item.manufacturer,
    item.manufacturer ? MANUFACTURERS[item.manufacturer] : null,
    item.country,
    item.note,
    ...item.prescription,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Kopírovať kód ${code}`}
      aria-label={`Kopírovať kód ${code}`}
      className="group/btn inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-sm font-bold text-ploy-accent-primary-700 hover:bg-ploy-accent-primary-50 transition"
    >
      <span>{code}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-600" />
      ) : (
        <Copy className="h-3 w-3 opacity-30 group-hover/btn:opacity-100 transition-opacity" />
      )}
    </button>
  );
}

/** Kompaktný riadok tabuľky – 4 stĺpce, optimalizovaný pre stĺpcové zobrazenie vedľa seba. */
function CompactItemRow({ item }: { item: StockingItem }) {
  const thuasne = isThuasne(item);
  const mName = item.manufacturer
    ? MANUFACTURERS[item.manufacturer] ?? item.manufacturer
    : "";

  return (
    <tr
      className={`border-t border-ploy-border-primary/60 align-top transition hover:bg-ploy-neutral-primary-s3/40 ${
        thuasne ? "bg-ploy-accent-primary-50/20" : ""
      }`}
    >
      {/* Kód a Výrobca */}
      <td className="whitespace-nowrap px-3 py-2.5">
        <div className="flex flex-col items-start gap-0.5">
          <CopyCodeButton code={item.code} />
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[0.75rem] font-semibold text-ploy-text-secondary">
              {mName || "—"}
            </span>
            {item.country ? (
              <span className="text-[0.6875rem] text-ploy-text-secondary/70">
                ({item.country})
              </span>
            ) : null}
            {thuasne ? (
              <span className="rounded-full bg-ploy-accent-primary/15 px-1.5 py-0.2 text-[0.625rem] font-bold uppercase tracking-wider text-ploy-accent-primary-700">
                Thuasne
              </span>
            ) : null}
          </div>
        </div>
      </td>

      {/* Názov a Detaily */}
      <td className="px-3 py-2.5 min-w-[11rem]">
        <div className="font-heading text-sm font-semibold leading-snug text-ploy-text-primary">
          {item.name}
        </div>
        {item.detail ? (
          <div className="mt-0.5 text-[0.75rem] leading-4 text-ploy-text-secondary">
            {item.detail}
          </div>
        ) : null}
        {item.note ? (
          <div className="mt-1 rounded bg-ploy-accent-primary-50/70 px-2 py-0.5 text-[0.75rem] font-medium leading-4 text-ploy-accent-primary-700 border border-ploy-accent-primary/20">
            {item.note}
          </div>
        ) : null}
      </td>

      {/* Doplatok a Úhrada */}
      <td className="whitespace-nowrap px-3 py-2.5 text-right">
        <div>
          {item.copay === 0 ? (
            <span className="inline-flex items-center rounded bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              0,00 €
            </span>
          ) : (
            <span className="font-heading text-sm font-bold text-ploy-text-primary">
              {formatPrice(item.copay)}
            </span>
          )}
        </div>
        <div className="mt-0.5 text-[0.7rem] leading-3 text-ploy-text-secondary">
          Úhr: {formatPrice(item.covered)}
        </div>
        <div className="text-[0.7rem] leading-3 text-ploy-text-secondary/70">
          Cena: {formatPrice(item.price)}
        </div>
      </td>

      {/* Preskripcia */}
      <td className="px-3 py-2.5">
        <div className="flex flex-wrap gap-1 max-w-[7.5rem]">
          {item.prescription.length
            ? item.prescription.map((spec) => (
                <span
                  key={spec}
                  className="rounded bg-ploy-neutral-primary-s4 px-1.5 py-0.5 text-[0.6875rem] font-mono font-medium text-ploy-text-secondary"
                >
                  {spec}
                </span>
              ))
            : "—"}
        </div>
      </td>
    </tr>
  );
}

/** Pôvodný riadok s kompletnými 9 stĺpcami pre detailný režim. */
function FullItemRow({ item }: { item: StockingItem }) {
  const thuasne = isThuasne(item);

  return (
    <tr
      className={`border-t border-ploy-border-primary align-top hover:bg-ploy-neutral-primary-s3/30 ${
        thuasne ? "bg-ploy-accent-primary-50/20" : ""
      }`}
    >
      <td className="whitespace-nowrap px-4 py-3">
        <CopyCodeButton code={item.code} />
      </td>
      <td className="min-w-[16rem] px-4 py-3 font-heading text-sm leading-6">
        <div className="font-semibold text-ploy-text-primary">{item.name}</div>
        {item.detail ? (
          <span className="mt-1 block text-[0.8125rem] leading-5 text-ploy-text-secondary">
            {item.detail}
          </span>
        ) : null}
        {item.note ? (
          <span className="mt-1 block rounded bg-ploy-accent-primary-50/80 px-2 py-0.5 text-[0.8125rem] font-medium leading-5 text-ploy-accent-primary-700">
            {item.note}
          </span>
        ) : null}
      </td>
      <td className="whitespace-nowrap px-4 py-3 font-heading text-sm text-ploy-text-secondary">
        <div className="flex items-center gap-1.5">
          <span>{manufacturerLabel(item.manufacturer)}</span>
          {thuasne ? (
            <span className="rounded-full bg-ploy-accent-primary/15 px-1.5 py-0.2 text-[0.625rem] font-bold uppercase text-ploy-accent-primary-700">
              Thuasne
            </span>
          ) : null}
        </div>
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
        {item.copay === 0 ? (
          <span className="rounded bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 text-xs text-emerald-800 dark:text-emerald-300">
            0,00 €
          </span>
        ) : (
          formatPrice(item.copay)
        )}
      </td>
      <td className="px-4 py-3 font-heading text-[0.8125rem] leading-5 text-ploy-text-secondary">
        {item.prescription.length ? item.prescription.join(", ") : "—"}
      </td>
    </tr>
  );
}

/** Komponent pre zobrazenie jednej podskupiny (napr. G1.1). */
function SubgroupBlock({
  subgroup,
  compact,
}: {
  subgroup: StockingSubgroup;
  compact: boolean;
}) {
  return (
    <div className="mt-6 first:mt-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 pb-1.5">
        <h4 className="font-heading text-sm font-bold text-ploy-text-primary">
          <span className="text-ploy-accent-primary">{subgroup.id}</span>{" "}
          {subgroup.title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-ploy-text-secondary">
          {subgroup.limit !== null ? (
            <span>Úhrada ZP do {euro.format(subgroup.limit)}</span>
          ) : null}
          <span className="rounded-full bg-ploy-neutral-primary-s4 px-2 py-0.2 text-[0.6875rem] font-semibold">
            {subgroup.items.length} ks
          </span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-ploy-border-primary bg-ploy-neutral-primary-s2 shadow-xs">
        <table className="w-full border-collapse text-left">
          {compact ? (
            <>
              <thead>
                <tr className="bg-ploy-neutral-primary-s4 border-b border-ploy-border-primary text-ploy-text-secondary">
                  <th className="px-3 py-2 font-heading text-[0.7rem] font-bold uppercase tracking-wider">
                    Kód / Výrobca
                  </th>
                  <th className="px-3 py-2 font-heading text-[0.7rem] font-bold uppercase tracking-wider">
                    Názov a špecifikácia
                  </th>
                  <th className="px-3 py-2 text-right font-heading text-[0.7rem] font-bold uppercase tracking-wider">
                    Doplatok
                  </th>
                  <th className="px-3 py-2 font-heading text-[0.7rem] font-bold uppercase tracking-wider">
                    Preskripcia
                  </th>
                </tr>
              </thead>
              <tbody>
                {subgroup.items.map((item) => (
                  <CompactItemRow
                    key={`${subgroup.id}-${item.code}`}
                    item={item}
                  />
                ))}
              </tbody>
            </>
          ) : (
            <>
              <thead>
                <tr className="bg-ploy-neutral-primary-s4 border-b border-ploy-border-primary text-ploy-text-secondary">
                  <th className="px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider">
                    Kód
                  </th>
                  <th className="px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider">
                    Názov
                  </th>
                  <th className="px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider">
                    Výrobca
                  </th>
                  <th className="px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider">
                    Štát
                  </th>
                  <th className="px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider">
                    MJ
                  </th>
                  <th className="px-4 py-2.5 text-right font-heading text-xs font-bold uppercase tracking-wider">
                    Cena
                  </th>
                  <th className="px-4 py-2.5 text-right font-heading text-xs font-bold uppercase tracking-wider">
                    Úhrada
                  </th>
                  <th className="px-4 py-2.5 text-right font-heading text-xs font-bold uppercase tracking-wider">
                    Doplatok
                  </th>
                  <th className="px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider">
                    Preskripcia
                  </th>
                </tr>
              </thead>
              <tbody>
                {subgroup.items.map((item) => (
                  <FullItemRow
                    key={`${subgroup.id}-${item.code}`}
                    item={item}
                  />
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
}

/** Zobrazenie celého bloku kategórie (napr. G1, G3 alebo iné sekcie). */
function CategoryCard({
  group,
  compact,
}: {
  group: StockingGroup;
  compact: boolean;
}) {
  const totalSubgroupItems = group.subgroups.reduce(
    (acc, sub) => acc + sub.items.length,
    0,
  );

  return (
    <section id={group.id.toLowerCase()} className="scroll-mt-28">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ploy-border-primary pb-3">
        <h3 className="font-heading text-xl font-bold leading-tight lg:text-2xl text-ploy-text-primary">
          <span className="text-ploy-accent-primary">{group.id}</span>{" "}
          {group.title}
        </h3>
        <span className="font-heading text-xs font-semibold text-ploy-text-secondary bg-ploy-neutral-primary-s3 px-2.5 py-1 rounded-full">
          {totalSubgroupItems} položiek
        </span>
      </div>

      <div className="space-y-4">
        {group.subgroups.map((subgroup) => (
          <SubgroupBlock
            key={subgroup.id}
            subgroup={subgroup}
            compact={compact}
          />
        ))}
      </div>
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
  description = "Oficiálny zoznam kategorizovaných pomôcok na kompresívnu liečbu (kapitola G). Prehľadné usporiadanie: najčastejšie predpisované lýtkové pančuchy vľavo, stehenné pančuchy vpravo a ostatné druhy v sekciách nižšie. Výrobca Thuasne zaradený na prvom mieste, ostatné podľa abecedy.",
  groups = STOCKING_GROUPS,
}: Props) {
  const [query, setQuery] = useState("");
  const [isCompact, setIsCompact] = useState(true);

  const normalizedQuery = query.trim().toLowerCase();

  // Usporiadanie položiek: Thuasne prvý, potom ostatní podľa abecedy výrobcu a názvu
  const sortedAndFilteredGroups = useMemo(() => {
    return groups
      .map((group) => ({
        ...group,
        subgroups: group.subgroups
          .map((subgroup) => {
            const filteredItems = normalizedQuery
              ? subgroup.items.filter((item) => matches(item, normalizedQuery))
              : subgroup.items;
            return {
              ...subgroup,
              items: [...filteredItems].sort(compareStockingItems),
            };
          })
          .filter((subgroup) => subgroup.items.length > 0),
      }))
      .filter((group) => group.subgroups.length > 0);
  }, [groups, normalizedQuery]);

  // Rozdelenie na lýtkové (G1), stehenné (G3) a ostatné druhy (G2, G4, G5, G6, G8)
  const g1Group = useMemo(
    () => sortedAndFilteredGroups.find((g) => g.id === "G1"),
    [sortedAndFilteredGroups],
  );

  const g3Group = useMemo(
    () => sortedAndFilteredGroups.find((g) => g.id === "G3"),
    [sortedAndFilteredGroups],
  );

  const otherGroups = useMemo(
    () => sortedAndFilteredGroups.filter((g) => g.id !== "G1" && g.id !== "G3"),
    [sortedAndFilteredGroups],
  );

  const totalCount = useMemo(
    () =>
      groups.reduce(
        (sum, group) =>
          sum + group.subgroups.reduce((acc, sub) => acc + sub.items.length, 0),
        0,
      ),
    [groups],
  );

  const visibleCount = useMemo(
    () =>
      sortedAndFilteredGroups.reduce(
        (sum, group) =>
          sum + group.subgroups.reduce((acc, sub) => acc + sub.items.length, 0),
        0,
      ),
    [sortedAndFilteredGroups],
  );

  const navCategories = [
    { id: "g1", label: "Lýtkové (G1)" },
    { id: "g3", label: "Stehenné (G3)" },
    { id: "g2", label: "Polostehenné (G2)" },
    { id: "g4", label: "Stehenné s pásom (G4)" },
    { id: "g5", label: "Pančuchové nohavice (G5)" },
    { id: "g6", label: "Ramenné návleky a rukavice (G6)" },
    { id: "g8", label: "Prístroje a lymfedém (G8)" },
  ];

  return (
    <main className="min-h-screen bg-ploy-background-primary">
      {/* Hlavička */}
      <header className="bg-ploy-background-inverse px-4 py-12 text-ploy-text-inverse lg:py-16">
        <div className="mx-auto max-w-[82rem]">
          <a
            href="/#prelekarov"
            className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary hover:underline"
          >
            ← Pre lekárov
          </a>
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-[3.5rem] lg:leading-[1.15]">
            {heading}
          </h1>
          <p className="mt-4 max-w-3xl font-heading text-base leading-7 text-ploy-text-inverse/85 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </header>

      {/* Ovládací panel a vyhľadávanie */}
      <div className="mx-auto max-w-[82rem] px-4 py-8 lg:py-12">
        <div className="sticky top-0 z-20 -mx-4 border-b border-ploy-border-primary/80 bg-ploy-background-primary/95 backdrop-blur-md px-4 py-4 shadow-xs">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Vyhľadávacie pole */}
            <label className="relative block w-full max-w-xl">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ploy-text-secondary"
              />
              <span className="sr-only">Hľadať v zozname kódov</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Hľadať kód (napr. G72320), názov, výrobcu (Thuasne, Maxis…) alebo lekára…"
                className="w-full rounded-full border border-ploy-border-primary bg-ploy-neutral-primary-s4 py-2.5 pl-11 pr-11 font-heading text-sm outline-none focus:border-ploy-accent-primary transition sm:text-base"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Vymazať vyhľadávanie"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-ploy-text-secondary hover:text-ploy-text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </label>

            {/* Prepínač zobrazenia: Kompaktný prehľad vs Detailná tabuľka */}
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-lg border border-ploy-border-primary bg-ploy-neutral-primary-s3 p-1">
                <button
                  type="button"
                  onClick={() => setIsCompact(true)}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                    isCompact
                      ? "bg-ploy-background-primary text-ploy-text-primary shadow-xs"
                      : "text-ploy-text-secondary hover:text-ploy-text-primary"
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span>Kompaktný prehľad</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsCompact(false)}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                    !isCompact
                      ? "bg-ploy-background-primary text-ploy-text-primary shadow-xs"
                      : "text-ploy-text-secondary hover:text-ploy-text-primary"
                  }`}
                >
                  <TableIcon className="h-3.5 w-3.5" />
                  <span>Detailná tabuľka</span>
                </button>
              </div>
            </div>
          </div>

          {/* Rýchle navigačné tlačidlá a počet položiek */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-ploy-border-primary/40 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-ploy-text-secondary mr-1">
                Rýchly skok:
              </span>
              {navCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-full border border-ploy-border-primary/80 bg-ploy-neutral-primary-s2 px-2.5 py-1 font-medium text-ploy-text-primary hover:border-ploy-accent-primary hover:text-ploy-accent-primary transition"
                >
                  {cat.label}
                </a>
              ))}
            </div>

            <p className="font-heading font-medium text-ploy-text-secondary">
              {normalizedQuery
                ? `Nájdených ${visibleCount} z ${totalCount} položiek`
                : `Celkovo ${totalCount} položiek`}
            </p>
          </div>
        </div>

        {/* Hlavný obsah */}
        {sortedAndFilteredGroups.length > 0 ? (
          <div className="mt-10 space-y-16">
            {/* HORNÝ HLAVNÝ BLOK: 2 stĺpce vedľa seba (Lýtkové vľavo, Stehenné vpravo) */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-ploy-text-primary sm:text-3xl">
                    Hlavné kompresívne pančuchy
                  </h2>
                  <p className="mt-1 text-sm text-ploy-text-secondary">
                    Dva najčastejšie predpisované typy usporiadané do stĺpcov pre
                    rýchle porovnanie.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                {/* ĽAVÝ STĹPEC: Lýtkové pančuchy (G1) */}
                <div className="rounded-2xl border border-ploy-border-primary/80 bg-ploy-neutral-primary-s1 p-4 sm:p-6 shadow-xs">
                  {g1Group ? (
                    <CategoryCard group={g1Group} compact={isCompact} />
                  ) : (
                    <p className="py-6 text-sm text-ploy-text-secondary italic">
                      Pre zadané vyhľadávanie sa v kategórii Lýtkové pančuchy (G1)
                      nenachádza žiadna položka.
                    </p>
                  )}
                </div>

                {/* PRAVÝ STĹPEC: Stehenné pančuchy (G3) */}
                <div className="rounded-2xl border border-ploy-border-primary/80 bg-ploy-neutral-primary-s1 p-4 sm:p-6 shadow-xs">
                  {g3Group ? (
                    <CategoryCard group={g3Group} compact={isCompact} />
                  ) : (
                    <p className="py-6 text-sm text-ploy-text-secondary italic">
                      Pre zadané vyhľadávanie sa v kategórii Stehenné pančuchy
                      (G3) nenachádza žiadna položka.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SPODNÝ BLOK: Sekcie s ostatnými druhmi pančúch */}
            {otherGroups.length > 0 ? (
              <div className="pt-10 border-t border-ploy-border-primary">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-ploy-text-primary sm:text-3xl">
                    Ostatné druhy kompresívnych pomôcok
                  </h2>
                  <p className="mt-1 text-sm text-ploy-text-secondary max-w-3xl">
                    Polostehenné pančuchy, pančuchy s uchytením v páse,
                    pančuchové nohavice, ramenné návleky s rukavicami a prístroje
                    na kompresívnu liečbu.
                  </p>
                </div>

                <div className="space-y-12">
                  {otherGroups.map((group) => (
                    <div
                      key={group.id}
                      className="rounded-2xl border border-ploy-border-primary/80 bg-ploy-neutral-primary-s1 p-4 sm:p-6 shadow-xs"
                    >
                      <CategoryCard group={group} compact={isCompact} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-12 text-center">
            <p className="font-heading text-lg font-semibold text-ploy-text-primary">
              Pre výraz &ldquo;{query}&rdquo; sme nenašli žiadnu pomôcku.
            </p>
            <p className="mt-2 text-sm text-ploy-text-secondary">
              Skúste skontrolovať preklep, hľadať podľa kódu (napr. G72320)
              alebo podľa výrobcu (napr. Thuasne, Maxis, Avicenum).
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-5 inline-flex items-center rounded-full bg-ploy-accent-primary px-5 py-2 text-sm font-semibold text-ploy-button-primary-text hover:opacity-90 transition"
            >
              Zobraziť všetky pomôcky
            </button>
          </div>
        )}

        {/* Vysvetlivky a zdroj */}
        <div className="mt-20 rounded-2xl border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-6 sm:p-8">
          <h2 className="font-heading text-lg font-bold text-ploy-text-primary">
            Vysvetlivky a zdroj údajov
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 text-sm leading-6 text-ploy-text-secondary md:grid-cols-2">
            <div>
              <p>
                <strong className="text-ploy-text-primary">Cena:</strong> Úradne
                určená predajná cena pomôcky vrátane DPH v lekárni / výdajni ZP.
              </p>
              <p className="mt-2">
                <strong className="text-ploy-text-primary">Úhrada:</strong> Suma,
                ktorú hradí zdravotná poisťovňa (ÚZP) do výšky úhradového limitu
                danej podskupiny.
              </p>
              <p className="mt-2">
                <strong className="text-ploy-text-primary">Doplatok:</strong>{" "}
                Rozdiel, ktorý dopláca pacient. Pri položkách s doplatkom 0,00 €
                je pomôcka plne hradená poisťovňou.
              </p>
            </div>
            <div>
              <p>
                <strong className="text-ploy-text-primary">Preskripcia (RL):</strong>{" "}
                Skratky lekárskych odborností s oprávnením predpisovať danú
                pomôcku (ANG = angiológ, CCH = cievny chirurg, DER = dermatológ,
                CHI = chirurg, INT = internista, ORT = ortopéd, RHB = rehabilitačný lekár).
              </p>
              <p className="mt-2">
                Údaje sú prevzaté z oficiálneho{" "}
                <a
                  href={CATEGORISATION.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-ploy-accent-primary-700 underline"
                >
                  Zoznamu kategorizovaných ZP MZ SR
                </a>{" "}
                pre obdobie{" "}
                <strong className="text-ploy-text-primary">
                  {CATEGORISATION.label}
                </strong>
                .
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-ploy-text-secondary border-t border-ploy-border-primary/60 pt-4">
            Poznámky zvýraznené farbou (informácie k lemu, navliekaniu či materiálu)
            pochádzajú z praktických skúseností z ambulancie cievnej chirurgie a
            nie sú súčasťou legislatívneho textu.
          </p>
        </div>
      </div>
    </main>
  );
}
