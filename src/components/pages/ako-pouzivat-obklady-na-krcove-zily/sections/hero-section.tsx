const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

/**
 * @ployComponent
 * @ployComponentId ako-pouzivat-obklady-na-krcove-zily-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem({ text, text_1, separator }: ListItemProps) {
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

type ListItem4Props = {
  text: string;
  text_2: string;
  text_3: string;
  text_4: string;
  separator?: string;
};

function ListItem4({
  text,
  text_2,
  text_3,
  text_4,
  separator,
}: ListItem4Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
          <strong className="[color:inherit] break-words">{text}</strong>
          {":"}
        </p>
        <ul className="break-words my-0">
          <li className="[color:inherit] break-words">
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
              {text_2}
            </p>
          </li>
          <li className="[color:inherit] break-words">
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
              {text_3}
            </p>
          </li>
          <li className="[color:inherit] break-words">
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
              {text_4}
            </p>
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
          </li>
        </ul>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1: ": Pokrútené, vystúpené žily modrej alebo fialovej farby.",
  },
  {
    text: "Bolesť nôh od kolien dole",
    text_1: ": Pocit ťažkosti a únavy v nohách, najmä v dolnej časti.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      ": Najmä v oblasti členkov a chodidiel, ktoré sa zvyčajne zhoršujú počas dňa.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Nepríjemné pocity v oblasti postihnutých žíl.",
  },
  { text: "Nočné kŕče", text_1: ": Bolestivé sťahy svalov, najmä v lýtkach." },
];

export const items2: ListItemProps[] = [
  {
    text: "Zúženie žíl",
    text_1:
      ": Studené obklady môžu pomôcť zúžiť rozšírené žily, čo môže zlepšiť krvný obeh.",
  },
  {
    text: "Zníženie opuchov",
    text_1:
      ": Chlad pomáha zmierniť opuchy tým, že znižuje prietok krvi v postihnutej oblasti.",
  },
  {
    text: "Úľava od bolesti",
    text_1:
      ": Aplikácia chladu alebo tepla môže zmierniť bolesť a nepohodlie spojené s kŕčovými žilami.",
  },
  {
    text: "Zlepšenie cirkulácie",
    text_1:
      ": Striedanie teplých a studených obkladov môže stimulovať krvný obeh.",
  },
];

export const items3: ListItemProps[] = [
  {
    text: "Studené obklady",
    text_1:
      ": Tieto sú najčastejšie používané a sú zvlášť účinné pri akútnych príznakoch, ako sú opuchy a bolesť.",
  },
  {
    text: "Teplé obklady",
    text_1:
      ": Môžu pomôcť uvoľniť napätie v svaloch a zlepšiť cirkuláciu. Sú vhodné najmä pri chronickom diskomforte.",
  },
  {
    text: "Striedavé obklady",
    text_1:
      ": Striedanie teplých a studených obkladov môže byť obzvlášť účinné pri zlepšovaní cirkulácie.",
  },
];

export const items4: ListItem4Props[] = [
  {
    text: "Príprava obkladu",
    text_2:
      "Pre studený obklad: Zabaľte ľad alebo mrazený gélový balíček do mäkkej handričky.",
    text_3:
      "Pre teplý obklad: Namočte čistý uterák do teplej (nie horúcej) vody.",
    text_4:
      "Pre bylinný obklad: Pripravte silný odvar z vybranej byliny a namočte doň čistú handričku.",
  },
  {
    text: "Aplikácia obkladu",
    text_2:
      "Ľahnite si a zdvihnite nohy nad úroveň srdca. Toto pomáha zlepšiť žilový návrat.",
    text_3:
      "Aplikujte obklad na postihnutú oblasť. Uistite sa, že pokrýva všetky viditeľné kŕčové žily.",
    text_4:
      "Jemne pritlačte obklad, ale nie tak silno, aby to bolo nepríjemné.",
  },
  {
    text: "Trvanie aplikácie",
    text_2: "Studené obklady: Držte 15-20 minút.",
    text_3: "Teplé obklady: Držte 10-15 minút.",
    text_4:
      "Striedavé obklady: Začnite s teplým obkladom na 3-5 minút, potom aplikujte studený na 1 minútu. Opakujte 3-krát, vždy končiac studeným obkladom.",
  },
];

export const items5: ListItemProps[] = [
  {
    text: "Úľava od bolesti",
    text_1:
      ": Obklady môžu zmierniť bolesť a nepohodlie spojené s kŕčovými žilami. Je to ako by ste dali vašim unaveným nohám relaxačnú masáž.",
  },
  {
    text: "Zníženie opuchov",
    text_1:
      ": Studené obklady pomáhajú znížiť opuchy tým, že zužujú cievy a znižujú prietok krvi v postihnutej oblasti.",
  },
  {
    text: "Zlepšenie cirkulácie",
    text_1:
      ": Pravidelné používanie obkladov, najmä striedavých, môže stimulovať krvný obeh v nohách. Je to ako by ste dali vašim žilám malé kardio cvičenie.",
  },
  {
    text: "Prevencia komplikácií",
    text_1:
      ": Správna starostlivosť o kŕčové žily, vrátane používania obkladov, môže pomôcť predchádzať komplikáciám ako je zápal žíl (flebitída) alebo vred predkolenia.",
  },
  {
    text: "Neinvazívna metóda",
    text_1:
      ": Na rozdiel od chirurgických zákrokov, obklady sú neinvazívnou metódou bez rizika závažných vedľajších účinkov.",
  },
];

export const items6: ListItemProps[] = [
  {
    text: "Kompresné pančuchy",
    text_1:
      ": Nosenie kompresných pančúch po aplikácii obkladov môže pomôcť udržať dosiahnuté zlepšenie cirkulácie.",
  },
  {
    text: "Cvičenie",
    text_1:
      ": Pravidelné cvičenie, najmä cviky na kŕčové žily, môže významne zlepšiť cirkuláciu v nohách.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Zdvíhanie nôh nad úroveň srdca niekoľkokrát denne môže pomôcť zlepšiť žilový návrat.",
  },
  {
    text: "Zdravá strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a zlepšiť celkové zdravie ciev.",
  },
];

export const items7: ListItemProps[] = [
  {
    text: "Neaplikujte priamo na kožu",
    text_1:
      ": Vždy zabaľte ľad alebo teplý obklad do handričky, aby ste predišli poškodeniu kože.",
  },
  {
    text: "Pozor na teplotu",
    text_1:
      ": Príliš horúce alebo príliš studené obklady môžu poškodiť kožu. Vždy skontrolujte teplotu pred aplikáciou.",
  },
  {
    text: "Neprekračujte odporúčanú dobu aplikácie",
    text_1: ": Príliš dlhá aplikácia môže viesť k poškodeniu tkanív.",
  },
  {
    text: "Buďte opatrní pri diabete alebo problémoch s cirkuláciou",
    text_1:
      ": Ak máte diabetes alebo iné problémy s cirkuláciou, poraďte sa s lekárom pred použitím obkladov.",
  },
];

export const items8: ListItemProps[] = [
  {
    text: "Môžem používať obklady aj keď nemám viditeľné kŕčové žily?",
    text_1:
      " Áno, obklady môžu byť prospešné aj pri prevencii kŕčových žíl alebo pri zmiernení príznakov žilovej nedostatočnosti.",
  },
  {
    text: "Ako často by som mal používať obklady?",
    text_1:
      " Vo všeobecnosti sa odporúča používať obklady 2-3 krát denne, ale vždy sa riaďte odporúčaniami vášho lekára.",
  },
  {
    text: "Sú obklady účinné pri liečbe vnútorných kŕčových žíl?",
    text_1:
      " Obklady môžu pomôcť zmierniť príznaky vnútorných kŕčových žíl, ale nemôžu ich úplne vyliečiť. Pre komplexnú liečbu je potrebná konzultácia s lekárom.",
  },
  {
    text: "Môžem používať obklady počas tehotenstva?",
    text_1:
      " Áno, obklady sú všeobecne bezpečné počas tehotenstva, ale vždy je dobré poradiť sa s vaším lekárom.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zUj5t0"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako používať obklady na kŕčové žily?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "V tomto návode sa budeme zaoberať praktickými radami, ktoré vám pomôžu správne používať obklady a získať úľavu od nepríjemných príznakov kŕčových žíl. Budeme sa venovať nielen správnemu spôsobu aplikácie obkladov, ale aj výhodám a účinkom, ktoré môžete očakávať. Dúfame, že tento článok vám poskytne hodnotné informácie a pomôže vám zlepšiť kvalitu vášho života."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">6 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zKk1UR"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(7947px,auto)_1fr] max-lg:px-4 lg:min-h-[311.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(4022px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zVcwFw"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person sitting on grass field"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person sitting on grass field"
                  src="/external-assets/f72e33e1596ad9da.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person sitting on grass field"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person sitting on grass field"
                  src="/external-assets/6c8b64c0a4f97547.jpg"
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
              id="ziHFhy"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú bežným problémom, ktorý trápi mnohých ľudí, najmä vo vyššom veku. Jednou z účinných metód na zmiernenie príznakov sú obklady. V tomto komplexnom návode sa pozrieme na to, ako správne používať obklady na kŕčové žily, aké sú ich výhody a čo môžete od tejto liečby očakávať."
                }
              </p>
              <h2 className={listItemClassName}>Čo sú kŕčové žily?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme do detailov o obkladoch, je dôležité pochopiť, čo vlastne kŕčové žily sú. Kŕčové žily, odborne nazývané varixy, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Príznaky kŕčových žíl"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kŕčové žily môžu spôsobovať rôzne nepríjemné príznaky:"}
              </p>
              <ol className="break-words my-0">
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zmeny na koži"}
                    </strong>
                    {
                      ": Suchá, šupinatá koža alebo hyperpigmentácia v oblasti postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako fungujú obklady na kŕčové žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Obklady sú jednoduchou, ale účinnou formou liečby kŕčových žíl. Ich princíp spočíva v aplikácii chladu alebo tepla (v závislosti od typu obkladu) na postihnuté miesto. Toto môže priniesť niekoľko pozitívnych účinkov:"
                }
              </p>
              <ol className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Je to ako keby ste dali vašim žilám malú "fitnes lekciu" - striedavým rozširovaním a zužovaním im pomáhate zlepšiť ich tonus a funkciu.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Typy obkladov na kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko typov obkladov, ktoré môžete použiť na kŕčové žily:"
                }
              </p>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Bylinné obklady"}
                    </strong>
                    {
                      ": Niektoré byliny, ako je hamamel virgínsky (Hamamelis virginiana) alebo gaštan konský (Aesculus hippocastanum), môžu mať priaznivé účinky na kŕčové žily."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako správne používať obklady na kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Správne použitie obkladov je kľúčové pre dosiahnutie optimálnych výsledkov. Tu je podrobný postup:"
                }
              </p>
              <ol className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Frekvencia"}
                    </strong>
                    {":"}
                  </p>
                  <ul className="break-words my-0">
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                        {
                          "Aplikujte obklady 2-3 krát denne, alebo podľa odporúčania vášho lekára."
                        }
                      </p>
                    </li>
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                        {
                          "Pri akútnych príznakoch môžete aplikovať častejšie, ale vždy s prestávkami medzi aplikáciami."
                        }
                      </p>
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                    </li>
                  </ul>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Po aplikácii"}
                    </strong>
                    {":"}
                  </p>
                  <ul className="break-words my-0">
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                        {
                          "Jemne osušte oblasť a aplikujte hydratačný krém, aby ste predišli vysušeniu pokožky."
                        }
                      </p>
                    </li>
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                        {
                          "Ak používate kompresné pančuchy, nasaďte si ich ihneď po aplikácii obkladu."
                        }
                      </p>
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                    </li>
                  </ul>
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Výhody používania obkladov na kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Pravidelné používanie obkladov môže priniesť mnoho výhod:"}
              </p>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Cenovo dostupné"}
                    </strong>
                    {
                      ": V porovnaní s inými metódami liečby kŕčových žíl sú obklady relatívne lacné a ľahko dostupné."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Kombinácia obkladov s inými metódami liečby kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Obklady môžu byť ešte účinnejšie, ak ich kombinujete s inými metódami liečby kŕčových žíl:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Hydratácia"}
                    </strong>
                    {
                      ": Dostatočný príjem tekutín pomáha udržiavať krv tekutejšiu, čo môže zlepšiť cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Upozornenia pri používaní obkladov"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď sú obklady všeobecne bezpečné, existuje niekoľko upozornení:"
                }
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Nepoužívajte na otvorené rany"}
                    </strong>
                    {
                      ": Ak máte otvorené rany alebo vred predkolenia, nepoužívajte obklady bez konzultácie s lekárom."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Existuje nejaký domáci liek na zápal žíl, ktorý by som mohol kombinovať s obkladmi?" +
                        " "}
                    </strong>
                    {
                      "Niektoré bylinné prípravky, ako napríklad gél z aloe vera alebo obklady z hamamelu, môžu pomôcť pri zápale žíl. Vždy však konzultujte s lekárom pred použitím akýchkoľvek domácich liekov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Obklady predstavujú jednoduchú, ale účinnú metódu na zmiernenie príznakov kŕčových žíl. Pravidelné a správne používanie obkladov môže priniesť úľavu od bolesti, znížiť opuchy a zlepšiť celkový stav vašich nôh. Je to ako by ste dali vašim žilám dennú dávku starostlivosti a pozornosti."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Pamätajte však, že obklady nie sú zázračným liekom. Sú súčasťou komplexnej starostlivosti o zdravie vašich žíl, ktorá by mala zahŕňať aj zdravý životný štýl, pravidelné cvičenie a v prípade potreby aj ďalšie liečebné metódy odporúčané lekárom."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
