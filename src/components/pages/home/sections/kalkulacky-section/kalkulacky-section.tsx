const CALCULATORS = [
  {
    title: "Riziko kŕčových žíl",
    description: "Orientačné vyhodnotenie rizikových faktorov varixov.",
  },
  {
    title: "Riziko trombózy",
    description: "Pre ľudí s varixami a ďalšími rizikovými faktormi.",
  },
  {
    title: "Riziko pri lete lietadlom",
    description: "Posúdenie faktorov súvisiacich s dlhším cestovaním.",
  },
  {
    title: "Progresia varixov",
    description: "Orientačný prehľad faktorov zhoršovania ochorenia.",
  },
  {
    title: "Panvová venózna kongescia",
    description: "Prehľad rizikových faktorov a typických príznakov.",
  },
  {
    title: "BMI kalkulačka",
    description: "Pomocný výpočet indexu telesnej hmotnosti.",
  },
] as const;

/**
 * @ployComponent
 * @ployComponentId kalkulacky-section
 * @ployComponentType section
 * @ployComponentPattern calculator-directory
 * @ployComponentDescription Compact directory replacing unsupported Hostinger calculator iframe embeds while preserving access to the original tools.
 * @ployComponentStatus stable
 */
export default function KalkulackySection() {
  return (
    <section
      id="kalkulacky"
      className="kalkulacky relative isolate overflow-hidden bg-ploy-background-inverse px-4 py-20 text-ploy-text-inverse lg:py-28"
    >
      <img
        src="/migrated-assets/26e26ce182062a54f718.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ploy-background-inverse/90" />

      <div className="mx-auto max-w-[76.5rem]">
        <div className="max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary">
            Orientačné nástroje
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight lg:text-5xl">
            Kalkulačky rizika
          </h2>
          <p className="mt-5 font-heading text-lg leading-8 text-ploy-text-inverse/80">
            Pôvodné kalkulačky používajú vlastný kód, ktorý Hostinger neumožnil
            spoľahlivo preniesť. Do ich prestavby zostávajú dostupné na pôvodnom
            webe.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CALCULATORS.map((calculator) => (
            <a
              key={calculator.title}
              href="/#kalkulacky"
              target="_blank"
              rel="noopener noreferrer"
              className="kalkulacky__card group rounded-[1.1875rem] border border-ploy-border-inverse bg-ploy-neutral-inverse-s2/60 p-6 transition duration-200 hover:-translate-y-1 hover:bg-ploy-background-accent-primary hover:text-black"
            >
              <strong className="block font-heading text-xl">
                {calculator.title}
              </strong>
              <span className="mt-2 block font-heading text-sm leading-6 opacity-75 group-hover:opacity-100">
                {calculator.description}
              </span>
              <span className="mt-5 block font-heading text-sm font-bold uppercase tracking-wide">
                Otvoriť kalkulačku →
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 max-w-3xl font-heading text-sm leading-6 text-ploy-text-inverse/70">
          Výsledky sú iba orientačné a nenahrádzajú lekárske vyšetrenie ani
          odbornú diagnostiku.
        </p>
      </div>
    </section>
  );
}
