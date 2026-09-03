import { ArrowUpRight, MoveRight } from "lucide-react";

interface ProfessionalResource {
  label: string;
  description: string;
  href: string;
  /** Zdroj zobrazený na karte — doména alebo názov materiálu. */
  source: string;
}

const PROFESSIONAL_RESOURCES: ProfessionalResource[] = [
  {
    label: "MKCH-10",
    description: "Medzinárodná klasifikácia diagnóz",
    href: "https://mediately.co/sk/icd",
    source: "mediately.co",
  },
  {
    label: "Kódy pančúch",
    description: "Aktualizovaný zoznam kompresných pomôcok",
    href: "/kody-pancuch",
    source: "na tejto stránke",
  },
  {
    label: "Trombofilné stavy",
    description: "Diagnostika a odborný manažment",
    href: "/odborne-zdroje/trombofilne-stavy",
    source: "na tejto stránke",
  },
  {
    label: "Klasifikácie",
    description: "CEAP a ďalšie klasifikácie cievnych ochorení",
    href: "/odborne-zdroje/ceap-klasifikacia",
    source: "na tejto stránke",
  },
  {
    label: "DRG výkony",
    description: "Vyhľadávanie zdravotných výkonov",
    href: "https://www.cksdrg.sk/sk/definicna-prirucka/vykony",
    source: "cksdrg.sk",
  },
  {
    label: "Dotazník pančuchy",
    description: "Pomoc pri výbere kompresívnej pomôcky",
    href: "https://yxuemnnzg0c.typeform.com/to/fN9LMkNN",
    source: "dotazník",
  },
  {
    label: "Vaskulitídy",
    description: "Prehľad klinických znakov a liečby",
    href: "/odborne-zdroje/vaskulitidy",
    source: "na tejto stránke",
  },
  {
    label: "Testy na TOS",
    description: "Testy syndrómu hornej hrudnej apertúry",
    href: "/odborne-zdroje/testy-tos",
    source: "na tejto stránke",
  },
  {
    label: "ADC číselník",
    description: "Databáza liekov a zdravotníckych produktov",
    href: "https://www.adc.sk/",
    source: "adc.sk",
  },
  {
    label: "Opuchy končatín",
    description: "Diferenciálna diagnostika opuchov",
    href: "/odborne-zdroje/opuchy-koncatin",
    source: "na tejto stránke",
  },
  {
    label: "Vazoneurózy",
    description: "Raynaudov fenomén a ďalšie stavy",
    href: "/odborne-zdroje/vazoneurozy",
    source: "na tejto stránke",
  },
  {
    label: "Liečba HŽT",
    description: "Manažment hlbokej žilovej trombózy",
    href: "/#tromboza",
    source: "na tejto stránke",
  },
  {
    label: "BMI kalkulačka",
    description: "Pomocný výpočet indexu telesnej hmotnosti",
    href: "/#kalkulacky",
    source: "na tejto stránke",
  },
  {
    label: "Komplikácie",
    description: "Komplikácie sklerotizácie a ďalších výkonov",
    href: "/odborne-zdroje/komplikacie-sklerotizacie",
    source: "na tejto stránke",
  },
  {
    label: "Prekladač diagnóz",
    description: "Pomôcka na orientáciu v diagnózach",
    href: "https://www.edusan.sk/diagnozy/diagnozy_uvod.html",
    source: "edusan.sk",
  },
  {
    label: "CCH kódy VšZP",
    description: "Revízne pravidlá cievnej chirurgie",
    href: "https://www.vszp.sk/files/poskytovatelia/zdravotna-starostlivost/revizne-pravidla/068-reviznepravidla-cievnachirurgia.pdf",
    source: "vszp.sk (PDF)",
  },
  {
    label: "Zoznam KZT",
    description: "Zoznam kategorizovaných zdravotníckych pomôcok",
    href: "https://www.health.gov.sk/Clanok?zkzp-202607",
    source: "health.gov.sk",
  },
];

interface Props {
  eyebrow?: string;
  heading?: string;
  description?: string;
  resources?: ProfessionalResource[];
}

export default function PreLekarovSection({
  eyebrow = "Odborné zdroje",
  heading = "Pre lekárov",
  description = "Praktický rozcestník ku klasifikáciám, výkonom a odborným materiálom pre diagnostiku a liečbu cievnych ochorení.",
  resources = PROFESSIONAL_RESOURCES,
}: Props) {
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
            {eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-ploy-text-inverse lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 font-heading text-lg leading-8 text-ploy-text-inverse/80">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const isExternal = resource.href.startsWith("http");

            return (
              <a
                key={resource.label}
                href={resource.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="pre-lekarov__resource group flex flex-col rounded-[1.1875rem] border border-ploy-border-inverse bg-ploy-neutral-inverse-s2/60 p-5 transition duration-200 hover:-translate-y-1 hover:bg-ploy-background-accent-primary hover:text-black"
              >
                <strong className="block font-heading text-xl">
                  {resource.label}
                </strong>
                <span className="mt-2 block font-heading text-sm leading-6 opacity-75 group-hover:opacity-100">
                  {resource.description}
                </span>
                <span className="mt-4 flex items-center gap-1.5 font-heading text-xs uppercase tracking-[0.12em] opacity-60 group-hover:opacity-100">
                  {isExternal ? (
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  ) : (
                    <MoveRight aria-hidden="true" className="h-3.5 w-3.5" />
                  )}
                  {resource.source}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
