const listItemClassName =
  "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8";
const listItemClassName2 =
  "font-heading text-ploy-text-on-accent-primary font-bold break-words mb-2 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]";
const listItemClassName3 =
  "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-10 max-[921px]:mb-8";

/**
 * @ployComponent
 * @ployComponentId kliniky-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  className: string;
  text: string;
};

function ListItem({ className, text }: ListItemProps) {
  return (
    <p className={className}>
      <strong className="[color:inherit] break-words">{text}</strong>
    </p>
  );
}

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Medicínsko-cievne centrum, ZA (O. Vincze)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Kl. cievnej chirurgie, ÚVN Ružomberok, RK",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words max-[921px]:mb-0",
    text: "Revena, MT (R. Talábková)",
  },
];

export const textSegments: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Agel clinic, Handlová (V. Výrostko)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Venasum, TN (M. Šumaj)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-10 max-[921px]:mb-8",
    text: "ASM TN, TN (M. Širila)",
  },
];

export const textSegments2: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Cievna Klinika IMEA, KE (N. Torma, M. Frankovičová, T. Granda)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Mamkrcovezily.sk, KE (P. Staško, M. Kubíková)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-10 max-[921px]:mb-8",
    text: "VUSCH Košice",
  },
];

export const textSegments3: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Agel clinic, BA (A. Gaži)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Blumental clinic, BA (V. Kovács, Zs. Zsemlye, L. Bajužiková)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Cinre, BA (E. Marton, S. Kissová, R. Slyško)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Concept clinic, BA (S. Kissová, A. Gaži)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Dr. Zernovicky clinic, BA (F. Žernovický)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Hipcentrum, PN (M. Ondruška, J. Lévay)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Interklinik, BA (T. Molčan)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Klinika cievnej chirurgie NÚSCH, BA",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Klinika Yes visage, BA (T. Molčan, J. Bafrnec, P. Baláž)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Life-Med Clinic, PK (A. Smola)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Nemocnica Malacky, MA (M. Osuský)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Odd. cievnej chirurgie, UNB Antolská, BA",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "ProCare, BA (V. Šefránek)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Proktovena, BA (P. Ištok)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Rodinný doktor, MA (Zs. Zsemlye)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Expertmed, BA (L. Schillerová, B. Bajčíková, Š. Smoter)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-10 max-[921px]:mb-8",
    text: "Revive, BA (J. Muranský)",
  },
];

export const textSegments4: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Kl. transplantačnej chirurgie SZU/cievna chirurgia, FNsP FDR, BB",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Medicentrum, ZV (Š. Munka)",
  },
  {
    className:
      "font-heading text-ploy-text-on-accent-primary leading-6 break-words mb-10 max-[921px]:mb-8",
    text: "Zdravomed, BB (A. Smola)",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zOQdVO"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-65-m7V80VXEXqSD2O08.jpeg"
            width="100vw"
            loading="eager"
            className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
          />
          <div className="bg-ploy-background-primary w-full h-full absolute z-[2] opacity-[0.83] left-0 top-0 block-background__overlay text-ploy-text-primary" />
        </div>
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(2394px,auto)_minmax(16px,auto)_minmax(208px,auto)_1fr] max-lg:px-4 lg:min-h-[155.5rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_4.16667%_57.9248%_4.24837%_16.8301%] lg:grid-rows-[minmax(64px,auto)_minmax(250px,auto)_minmax(100px,auto)_minmax(2033px,auto)_1fr] lg:px-0">
          <div
            data-ploy-animation-fx-hint="fade-in"
            className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-2 max-lg:row-end-3 lg:col-start-2 lg:col-end-5 lg:row-start-4 lg:row-end-5"
          >
            <div
              id="zRAN3L"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <h2 className="font-heading text-ploy-text-on-accent-primary font-bold break-words mb-3.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]">
                <strong className="[color:inherit] break-words">
                  {"BANSKOBYSTRICKÝ KRAJ"}
                </strong>
              </h2>
              <p className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"DL-clinic, BB (M. Vávra "}
                  <a
                    href="https://dlclinic.sk/sluzby/jednodnova-chirurgia/chirurgia/"
                    target="_blank"
                    className="break-words transition-[color,border,text-decoration-color] duration-200 ease-[ease-in-out]"
                  >
                    {")"}
                  </a>
                </strong>
              </p>
              {textSegments4.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"BRATISLAVSKÝ KRAJ"}
                </strong>
              </h2>
              {textSegments3.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className="font-heading text-ploy-text-on-accent-primary font-bold break-words mb-3 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]">
                <strong className="[color:inherit] break-words">
                  {"KOŠICKÝ KRAJ"}
                </strong>
              </h2>
              {textSegments2.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className="font-heading text-ploy-text-on-accent-primary font-bold break-words mb-3 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]">
                <strong className="[color:inherit] break-words">
                  {"NITRIANSKY KRAJ"}
                </strong>
              </h2>
              <p className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Avelane, NR (P. Mondek)"}
                </strong>
              </p>
              <p className={listItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"Odd.cievnej chirurgie, FN Nitra, NR"}
                </strong>
              </p>
              <h2 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"PREŠOVSKÝ KRAJ"}
                </strong>
              </h2>
              <p className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Odd.cievnej chirurgie, FNsP Prešov, PO"}
                </strong>
              </p>
              <p className={listItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"Chirurg. odd., Nemocnica Sp.N.Ves, SN (J. Javiľáková)"}
                </strong>
              </p>
              <h2 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"TRNAVSKÝ KRAJ"}
                </strong>
              </h2>
              <p className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Euroclinic, TT (A. Smola)"}
                </strong>
              </p>
              <p className={listItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"FN Trnava, TT (T. Molčan)"}
                </strong>
              </p>
              <h2 className="font-heading text-ploy-text-on-accent-primary font-bold break-words mb-2.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]">
                <strong className="[color:inherit] break-words">
                  {"TRENČIANSKY KRAJ"}
                </strong>
              </h2>
              {textSegments.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>ŽILINSKÝ KRAJ</h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div
            data-ploy-animation-fx-hint="fade-in"
            className="text-center w-full h-full relative z-[2] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3"
          >
            <div
              id="zjENLr"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <h1 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-[3.25rem] max-lg:text-[2.5rem] lg:leading-[5.2rem] lg:text-[4rem]">
                <span className="text-ploy-text-on-accent-primary break-words lg:text-[4rem]">
                  {"kliniky poskytujúce výkony na žilách v SR"}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
