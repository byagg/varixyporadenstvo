const PROFESSIONAL_RESOURCES = [
  {
    label: "MKCH-10",
    description: "Medzinárodná klasifikácia diagnóz",
    href: "https://mediately.co/sk/icd",
  },
  {
    label: "Kódy pančúch",
    description: "Aktualizovaný zoznam kompresných pomôcok",
    href: null,
  },
  {
    label: "Trombofilné stavy",
    description: "Diagnostika a odborný manažment",
    href: null,
  },
  {
    label: "Klasifikácie",
    description: "CEAP a ďalšie klasifikácie cievnych ochorení",
    href: null,
  },
  {
    label: "DRG výkony",
    description: "Vyhľadávanie zdravotných výkonov",
    href: "https://www.cksdrg.sk/sk/drgsearchers/vykony",
  },
  {
    label: "Dotazník pančuchy",
    description: "Pomoc pri výbere kompresívnej pomôcky",
    href: "https://yxuemnnzg0c.typeform.com/to/fN9LMkNN",
  },
  {
    label: "Vaskulitídy",
    description: "Prehľad klinických znakov a liečby",
    href: null,
  },
  {
    label: "Testy na TOS",
    description: "Testy syndrómu hornej hrudnej apertúry",
    href: null,
  },
  {
    label: "ADC číselník",
    description: "Databáza liekov a zdravotníckych produktov",
    href: "https://www.adc.sk/",
  },
  {
    label: "Opuchy končatín",
    description: "Diferenciálna diagnostika opuchov",
    href: null,
  },
  {
    label: "Vazoneurózy",
    description: "Raynaudov fenomén a ďalšie stavy",
    href: null,
  },
  {
    label: "Liečba HŽT",
    description: "Manažment hlbokej žilovej trombózy",
    href: "/#tromboza",
  },
  {
    label: "BMI kalkulačka",
    description: "Pomocný výpočet indexu telesnej hmotnosti",
    href: "/#kalkulacky",
  },
  {
    label: "Komplikácie",
    description: "Komplikácie sklerotizácie a ďalších výkonov",
    href: null,
  },
  {
    label: "Prekladač diagnóz",
    description: "Pomôcka na orientáciu v diagnózach",
    href: null,
  },
  {
    label: "CCH kódy VšZP",
    description: "Revízne pravidlá cievnej chirurgie",
    href: "https://www.vszp.sk/files/poskytovatelia/zdravotna-starostlivost/revizne-pravidla/068-reviznepravidla-cievnachirurgia.pdf",
  },
  {
    label: "Zoznam KZT",
    description: "Zoznam kategorizovaných zdravotníckych pomôcok",
    href: "https://www.health.gov.sk/Clanok?zkzp-202504",
  },
] as const;

export default function PreLekarovSection() {
  return (
    <section
      id="prelekarov"
      className="pre-lekarov relative isolate overflow-hidden bg-ploy-background-inverse px-4 py-20 text-ploy-text-inverse lg:py-28"
    >
      <img
        src="/migrated-assets/264216885f5a9c9fcf9e.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ploy-background-inverse/90" />
      <div className="mx-auto max-w-[76.5rem]">
        <div className="max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary">
            Odborné zdroje
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-ploy-text-inverse lg:text-5xl">
            Pre lekárov
          </h2>
          <p className="mt-5 font-heading text-lg leading-8 text-ploy-text-inverse/80">
            Praktický rozcestník ku klasifikáciám, výkonom a odborným materiálom
            pre diagnostiku a liečbu cievnych ochorení.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSIONAL_RESOURCES.map((resource) => {
            const content = (
              <>
                <strong className="block font-heading text-xl">
                  {resource.label}
                </strong>
                <span className="mt-2 block font-heading text-sm leading-6 opacity-75 group-hover:opacity-100">
                  {resource.description}
                </span>
              </>
            );
            const className =
              "pre-lekarov__resource group rounded-[1.1875rem] border border-ploy-border-inverse bg-ploy-neutral-inverse-s2/60 p-5 transition duration-200 last:lg:col-start-2 last:lg:col-span-2";

            return resource.href ? (
              <a
                key={resource.label}
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  resource.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`${className} hover:-translate-y-1 hover:bg-ploy-background-accent-primary hover:text-black`}
              >
                {content}
              </a>
            ) : (
              <div key={resource.label} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
