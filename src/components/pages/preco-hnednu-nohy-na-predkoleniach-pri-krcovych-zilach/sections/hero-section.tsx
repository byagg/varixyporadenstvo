const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          {text}
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem2Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem2({ text, text_1, separator }: ListItem2Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          <strong className="[color:inherit] break-words">{text}</strong>
          {text_1}
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  { text: "Viditeľné, nafúknuté žily na nohách" },
  { text: "Bolesť alebo ťažký pocit v nohách" },
  { text: "Opuch nôh a členkov" },
  { text: "Svrbenie alebo pálenie v postihnutej oblasti" },
];

export const items2: ListItem2Props[] = [
  {
    text: "Kompresné pančuchy",
    text_1:
      ' - Tieto "oblečky" pre vaše nohy pomáhajú stlačiť žily a podporujú prúdenie krvi späť k srdcu.',
  },
  {
    text: "Skleroterapia",
    text_1:
      ' - Pri tejto metóde lekár vstrekne do postihnutých žíl špeciálny roztok, ktorý spôsobí, že sa žily "scvrknú" a postupne zmiznú. Je to ako keby ste upchali dieru v prasknutej hadici.',
  },
  {
    text: "Rádiofrekvenčná ablácia",
    text_1:
      ' - Táto metóda využíva teplo na "zapečatenie" problémových žíl. Predstavte si to ako zváranie vašich žíl zvnútra.',
  },
  {
    text: "Laserová liečba",
    text_1:
      " - Laser môže byť použitý na uzatvorenie menších žíl. Je to ako keby ste použili lúč svetla na vymazanie nechcených čiar na papieri.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Cvičenie",
    text_1:
      ' - Pravidelný pohyb je ako "olejovanie" pre vaše žily. Chôdza, plávanie alebo cyklistika sú vynikajúce možnosti.',
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1:
      " - Predstavte si, že vaše žily sú ako nosné stĺpy. Čím menej váhy musia niesť, tým lepšie sa im darí.",
  },
  {
    text: "Vyhýbanie sa dlhodobému státiu alebo sedeniu",
    text_1:
      " - Vaše žily potrebujú pohyb, aby mohli efektívne pumpovať krv. Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne hýbať nohami.",
  },
  {
    text: "Zdravá strava",
    text_1:
      " - Strava bohatá na vlákninu a nízka v soli môže pomôcť predchádzať opuchom a podporiť celkové zdravie žíl.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z4AoQj"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Prečo hnednú nohy na predkoleniach pri kŕčových žilách?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Máte obavy, že sa vaše nohy sfarbujú do červenohnedej farby? S pribúdajúcim vekom je normálne, že sa naša pokožka stenčuje, vysychá a stráca pružnosť. Väčšie obavy však môže vzbudzovať, keď si všimnete nezvyčajné zmeny farby a štruktúry na kolenách, nohách alebo členkoch. Ak si všimnete hnedé sfarbenie na dolných končatinách, môže to poukazovať na problém s vašimi žilami."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">4 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z_0d9p"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zJFBdp"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="red and black abstract painting"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="red and black abstract painting"
                  src="/external-assets/18db9d4b85e1e5b6.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="red and black abstract painting"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="red and black abstract painting"
                  src="/external-assets/ad8e910fff2396f5.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zx3H_o"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Mnohí z nás si všímajú zmeny na svojom tele s pribúdajúcim vekom. Jedným z takýchto znepokojujúcich príznakov môže byť hnednutie pokožky na predkoleniach, najmä v súvislosti s kŕčovými žilami. Tento jav, odborne nazývaný hemosiderínové sfarbenie, môže byť nielen estetickým problémom, ale aj signálom závažnejších zdravotných ťažkostí. Poďme sa na túto problematiku pozrieť bližšie a "rozpitvať" ju ako skutočný dedinský doktor, ktorý sa snaží svojim pacientom všetko vysvetliť jednoducho a zrozumiteľne.'
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  'Hemosiderínové sfarbenie - keď sa železo rozhodne "vymaľovať" vašu kožu'
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Predstavte si, že vaše červené krvinky sú ako malé loďky plné železného nákladu. Normálne tieto loďky plávajú pokojne vo vašich žilách. Ale čo sa stane, keď sa žily "rozbúria" a loďky sa prevrátia? Presne tak - ich náklad sa vysype a zanechá na brehu (v tomto prípade na vašej koži, respektíve v podkoží) hnedé stopy. Toto je zjednodušene podstata hemosiderínového sfarbenia.'
                }
              </p>
              <h3 className={listItemClassName2}>Prečo sa to deje?</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Chronické ochorenie žíl" + " "}
                    </strong>
                    {
                      '- Vaše žily sú ako diaľnice pre krv. Ak sa na nich vytvoria "zápchy" (kŕčové žily), krv sa začne hromadiť a môže "pretiecť" cez steny žíl.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vysoký krvný tlak" + " "}
                    </strong>
                    {
                      "- Predstavte si, že vaše žily sú ako záhradná hadica. Ak je tlak príliš vysoký, voda (v tomto prípade krv) môže presakovať cez drobné trhliny."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Žilové vredy" + " "}
                    </strong>
                    {
                      '- Tieto "diery" v systéme umožňujú krvi unikať priamo do okolitého podkožného tkaniva.'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Kŕčové žily - nie len kozmetický problém"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Kŕčové žily nie sú len estetickou záležitosťou, hoci mnohí si to myslia. Sú to vlastne rozšírené, pokrútené žily, ktoré sa najčastejšie objavujú na nohách a chodidlách. Predstavte si ich ako "preťažené rieky", ktoré sa vyliali zo svojich brehov.'
                }
              </p>
              <h3 className={listItemClassName2}>Príznaky kŕčových žíl:</h3>
              <ul className="break-words my-0">
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      'Zmeny farby kože, vrátane nášho "hnedého priateľa" - hemosiderínového sfarbenia'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Diagnostika - keď lekár hrá detektíva"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Ak si všimnete hnedé škvrny na nohách, najmä v súvislosti s viditeľnými žilami, je čas navštíviť odborníka. Angiológ alebo cievny chirurg sú tí praví "detektívi", ktorí dokážu odhaliť príčinu vašich problémov.'
                }
              </p>
              <h3 className={listItemClassName2}>Diagnostické metódy:</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Fyzické vyšetrenie" + " "}
                    </strong>
                    {
                      "- Lekár si prezrie vaše nohy a môže vás požiadať, aby ste sa postavili alebo prechádzali."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Duplexný ultrazvuk" + " "}
                    </strong>
                    {
                      '- Tento "podvodný sonar" umožňuje lekárovi vidieť, ako krv prúdi vašimi žilami.'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {'Liečba - boj s "hnedým nepriateľom"'}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba hemosiderínového sfarbenia a súvisiacich žilových problémov môže zahŕňať rôzne prístupy:"
                }
              </p>
              <ol className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Operácia" + " "}
                    </strong>
                    {
                      "- V závažnejších prípadoch môže byť potrebná chirurgická liečba na odstránenie problémových žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {'Prevencia - ako predísť "hnedému maliarovi"'}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď nemôžeme úplne zabrániť všetkým žilovým problémom, existuje niekoľko spôsobov, ako znížiť riziko:"
                }
              </p>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Elevácia nôh" + " "}
                    </strong>
                    {
                      "- Zdvihnutie nôh nad úroveň srdca pomáha gravitácii pri návrate krvi späť k srdcu. Je to ako keby ste nechali vodu tiecť dolu kopcom namiesto toho, aby ste ju tlačili hore."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Záver - vaše nohy si zaslúžia pozornosť"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8">
                {
                  "Hnednutie nôh na predkoleniach pri kŕčových žilách môže byť viac než len kozmetický problém. Je to signál, že vaše žily potrebujú pomoc. Neváhajte vyhľadať lekársku pomoc, ak spozorujete tieto zmeny. Pamätajte, že včasná diagnostika a liečba môžu zabrániť ďalším komplikáciám a pomôcť vám udržať si zdravé a krásne nohy."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  'Starostlivosť o vaše žily je ako starostlivosť o záhradu - vyžaduje si pravidelné úsilie, ale výsledky stoja za to. S správnou starostlivosťou môžete predísť tomu, aby sa vaše nohy stali "plátnom" pre nechcené hnedé škvrny a udržať ich zdravé a krásne po celý život.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
