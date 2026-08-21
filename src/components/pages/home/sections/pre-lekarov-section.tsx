const PROFESSIONAL_RESOURCES = [
  {
    label: "MKCH-10",
    description: "Klasifikácia diagnóz",
    href: "https://mediately.co/sk/icd",
  },
  {
    label: "DRG výkony",
    description: "Vyhľadávanie zdravotných výkonov",
    href: "https://www.cksdrg.sk/sk/drgsearchers/vykony",
  },
  {
    label: "ADC databáza",
    description: "Lieky a zdravotnícke produkty",
    href: "https://www.adc.sk/",
  },
  {
    label: "Cievna chirurgia VšZP",
    description: "Revízne pravidlá a kódy výkonov",
    href: "https://www.vszp.sk/files/poskytovatelia/zdravotna-starostlivost/revizne-pravidla/068-reviznepravidla-cievnachirurgia.pdf",
  },
  {
    label: "Kompresné pančuchy",
    description: "Pôvodný odborný zoznam pomôcok",
    href: "https://varixyporadenstvo.com/#listpancuchy",
  },
  {
    label: "Vaskulitídy",
    description: "Prehľad klinických znakov a liečby",
    href: "https://varixyporadenstvo.com/#vaskulitidy",
  },
  {
    label: "Vazoneurózy",
    description: "Raynaudov fenomén a ďalšie stavy",
    href: "https://varixyporadenstvo.com/#vazoneurozy",
  },
  {
    label: "Trombofilné stavy",
    description: "Diagnostika a odborný manažment",
    href: "https://varixyporadenstvo.com/#trombofilnestavy",
  },
  {
    label: "Klasifikácie",
    description: "CEAP a ďalšie klasifikácie cievnych ochorení",
    href: "https://varixyporadenstvo.com/#klasifikacie",
  },
] as const;

/**
 * @ployComponent
 * @ployComponentId pre-lekarov-section
 * @ployComponentType section
 * @ployComponentPattern resource-directory
 * @ployComponentDescription Compact professional-resource directory replacing unsupported Hostinger iframe embeds.
 * @ployComponentStatus stable
 */
export default function PreLekarovSection() {
  return (
    <section
      id="prelekarov"
      className="pre-lekarov relative isolate overflow-hidden bg-ploy-background-inverse px-4 py-20 text-ploy-text-inverse lg:py-28"
    >
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-74-AGBMKBEPKZI3x237.jpeg"
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL_RESOURCES.map((resource) => (
            <a
              key={resource.label}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pre-lekarov__resource group rounded-[1.1875rem] border border-ploy-border-inverse bg-ploy-neutral-inverse-s2/60 p-5 transition duration-200 hover:-translate-y-1 hover:bg-ploy-background-accent-primary hover:text-black"
            >
              <strong className="block font-heading text-xl">
                {resource.label}
              </strong>
              <span className="mt-2 block font-heading text-sm leading-6 opacity-75 group-hover:opacity-100">
                {resource.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
