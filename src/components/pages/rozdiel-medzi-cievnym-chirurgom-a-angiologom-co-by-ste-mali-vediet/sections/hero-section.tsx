const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

type ListItemProps = {
  className: string;
  text: string;
};

function ListItem({ className, text }: ListItemProps) {
  return <p className={className}>{text}</p>;
}

type ListItem2Props = {
  className: string;
  text: string;
  text_1: string;
};

function ListItem2({ className, text, text_1 }: ListItem2Props) {
  return (
    <p className={className}>
      <strong className="[color:inherit] break-words">{text}</strong>
      {text_1}
    </p>
  );
}

type ListItem7Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem7({ text, text_1, separator }: ListItem7Props) {
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

type ListItem9Props = {
  text: string;
  separator?: string;
};

function ListItem9({ text, separator }: ListItem9Props) {
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

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Rozdiel medzi cievnym chirurgom a angiológom spočíva v ich špecializácii a prístupe k liečbe. Zatiaľ čo cievny chirurg sa zameriava na chirurgické riešenia akútnych a závažných cievnych problémov, angiológ sa špecializuje na konzervatívnu liečbu a dlhodobý manažment cievnych ochorení.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Obaja špecialisti zohrávajú kľúčovú úlohu v starostlivosti o pacientov s cievnymi problémami. Ich spolupráca je často nevyhnutná pre poskytnutie komplexnej a efektívnej liečby. Pri výbere správneho špecialistu je dôležité zvážiť povahu a závažnosť vášho cievneho problému.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že prevencia je vždy lepšia ako liečba. Dodržiavanie zdravého životného štýlu, pravidelné cvičenie a kontroly u lekára môžu výrazne znížiť riziko vzniku cievnych ochorení. Ak máte akékoľvek obavy týkajúce sa vášho cievneho zdravia, neváhajte konzultovať s vaším lekárom, ktorý vás v prípade potreby nasmeruje na správneho špecialistu.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Či už vás cesta za cievnym zdravím zavedie k angiológovi alebo cievnemu chirurgovi, môžete si byť istí, že ste v rukách odborníkov, ktorí sú oddaní zlepšovaniu kvality vášho života a udržiavaniu vášho cievneho systému v najlepšom možnom stave.",
  },
];

export const textSegments: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Čo to je",
    text_1: ": Opuch spôsobený poruchou lymfatického systému.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Príznaky",
    text_1: ": Chronický opuch končatiny, pocit ťažkosti, obmedzenie pohybu.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Liečba",
    text_1: ":",
  },
];

export const textSegments2: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Čo to je",
    text_1: ": Rozšírenie steny tepny, najčastejšie v brušnej aorte.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Príznaky",
    text_1:
      ": Často asymptomatické, môže spôsobiť bolesť v bruchu alebo chrbte.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Liečba",
    text_1: ":",
  },
];

export const textSegments3: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Čo to je",
    text_1:
      ": Zúženie tepien, najčastejšie v nohách, spôsobené aterosklerózou.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Príznaky",
    text_1:
      ": Bolesť v nohách pri chôdzi (klaudikácia), studené končatiny, slabý pulz.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Liečba",
    text_1: ":",
  },
];

export const textSegments4: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Čo to je",
    text_1: ": Krvná zrazenina v hlbokých žilách, najčastejšie v nohách.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Príznaky",
    text_1: ": Opuch, bolesť, začervenanie a teplo v postihnutej oblasti.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Liečba",
    text_1: ":",
  },
];

export const textSegments5: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Čo to je",
    text_1: ": Rozšírené, pokrútené žily, najčastejšie na nohách.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "Príznaky",
    text_1: ": Viditeľné žily na nohách, ťažké nohy, opuchy, bolesť.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Liečba",
    text_1: ":",
  },
];

export const items7: ListItem7Props[] = [
  {
    text: "Tepny (artérie)",
    text_1:
      ": Tieto sú ako hlavné diaľnice, ktoré prenášajú okysličenú krv od srdca k orgánom a tkanivám.",
  },
  {
    text: "Žily",
    text_1:
      ": Predstavte si ich ako spiatočné cesty, ktoré vedú krv späť k srdcu.",
  },
  {
    text: "Kapiláry",
    text_1:
      ": Najmenšie cievy, ktoré spájajú tepny a žily, umožňujúc výmenu živín a odpadových látok.",
  },
];

export const items8: ListItem7Props[] = [
  {
    text: "Diagnostika",
    text_1:
      ": Využíva rôzne zobrazovacie metódy na identifikáciu problémov v cievnom systéme (USG na ambulancii).",
  },
  {
    text: "Chirurgická liečba",
    text_1: ": Vykonáva zložité operácie na tepnách a žilách.",
  },
  {
    text: "Obnova prietoku krvi",
    text_1:
      ': Dokáže "odblokovať" upchaté tepny a žily pomocou katétrov, bypassov alebo angioplastiky.',
  },
  {
    text: "Liečba aneuryziem",
    text_1: ": Opravuje alebo nahrádza oslabené časti cievnej steny.",
  },
  {
    text: "Odstraňovanie krvných zrazenín",
    text_1: ": Chirurgicky odstraňuje nebezpečné zrazeniny z ciev.",
  },
];

export const items9: ListItem9Props[] = [
  {
    text: "Ak máte diagnostikovanú závažnú aterosklerózu s ochorením periférnych tepien (kôrnatenie tepien)",
  },
  { text: "Pri podozrení na cievnu aneuryzmu (výduť)" },
  {
    text: "V prípade závažnej hlbokej žilovej trombózy, ktorú predtým posúdil angiológ",
  },
  {
    text: "Pri závažných komplikáciách kŕčových žíl, ktoré sú vhodné na zákrok",
  },
];

export const items10: ListItem7Props[] = [
  {
    text: "Diagnostika",
    text_1: ": Využíva neinvazívne metódy na zhodnotenie stavu ciev.",
  },
  {
    text: "Konzervatívna liečba",
    text_1: ": Zameriava sa na nechirurgické metódy liečby cievnych ochorení.",
  },
  {
    text: "Skleroterapia",
    text_1:
      ": Špecializuje sa na nechirurgickú liečbu kŕčových žíl a metličiek.",
  },
  {
    text: "Prevencia",
    text_1: ": Poskytuje rady o životnom štýle a prevencii cievnych ochorení.",
  },
];

export const items11: ListItem9Props[] = [
  { text: "Ak máte viditeľné žily na nohách alebo rukách" },
  { text: "Pri pocite ťažkých nôh alebo opuchoch" },
  { text: "Ak máte bolesti v nohách pri chôdzi" },
  { text: "Pri podozrení na žilovú nedostatočnosť" },
];

export const items12: ListItem7Props[] = [
  {
    text: "Kompresívna terapia",
    text_1:
      ": Používanie kompresných pančúch alebo bandáží na zlepšenie žilového návratu. Je to ako dať vašim žilám jemné, ale účinné objatie.",
  },
  {
    text: "Farmakoterapia",
    text_1:
      ": Používanie liekov na zlepšenie cievneho zdravia. Napríklad, venofarmaká ako diosmín môžu pomôcť pri chronickej žilovej insuficiencii.",
  },
  {
    text: "Skleroterapia",
    text_1:
      ': Injekčné podávanie špeciálnej látky do kŕčových žíl, čo vedie k ich uzavretiu. Je to ako "zalepiť" problémové úseky vašej cievnej siete.',
  },
];

export const items13: ListItem7Props[] = [
  {
    text: "Endarterektómia",
    text_1:
      ": Odstránenie aterosklerotických plátov z vnútra tepny. Je to ako vyčistiť upchatú diaľnicu.",
  },
  {
    text: "Bypass",
    text_1:
      ": Vytvorenie obchádzky okolo zablokovanej časti cievy. Predstavte si to ako vybudovanie novej cesty okolo zablokovaného úseku diaľnice.",
  },
  {
    text: "Angioplastika a stenting",
    text_1:
      ": Rozšírenie zúženej cievy balónikom a následné vloženie stentu na udržanie jej priechodnosti. Je to ako rozšíriť úzku cestu a potom ju podporiť, aby zostala široká.",
  },
  {
    text: "Operácia varixov",
    text_1:
      ': Chirurgické odstránenie kŕčových žíl. Toto je ako odstrániť problémové "vedľajšie cesty" z vašej cievnej siete.',
  },
];

export const items14: ListItem7Props[] = [
  {
    text: "Pravidelné cvičenie",
    text_1: ": Pomáha zlepšiť cirkuláciu a udržiavať zdravú hmotnosť.",
  },
  {
    text: "Zdravá strava",
    text_1:
      ": Diéta bohatá na vlákninu a nízka na nasýtené tuky môže pomôcť predchádzať ateroskleróze.",
  },
  {
    text: "Nefajčenie",
    text_1: ": Fajčenie výrazne zvyšuje riziko cievnych ochorení.",
  },
  {
    text: "Kontrola krvného tlaku a hladiny cholesterolu",
    text_1: ": Pravidelné kontroly môžu pomôcť včas odhaliť rizikové faktory.",
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Obezita zvyšuje riziko mnohých cievnych ochorení.",
  },
  {
    text: "Manažment stresu",
    text_1: ": Chronický stres môže negatívne ovplyvniť cievne zdravie.",
  },
];

export const items15: ListItem7Props[] = [
  {
    text: "Minimálne invazívne techniky",
    text_1:
      ": Vývoj nových endovaskulárnych postupov umožňuje liečiť mnohé cievne problémy bez potreby rozsiahleho chirurgického zákroku.",
  },
  {
    text: "Personalizovaná medicína",
    text_1:
      ": Genetické testovanie môže pomôcť identifikovať pacientov s vyšším rizikom cievnych ochorení a prispôsobiť liečbu ich individuálnym potrebám.",
  },
  {
    text: "Bioaktívne stenty",
    text_1:
      ": Vývoj stentov, ktoré uvoľňujú lieky alebo podporujú hojenie, môže zlepšiť dlhodobé výsledky angioplastiky.",
  },
  {
    text: "Regeneratívna medicína",
    text_1:
      ": Výskum kmeňových buniek a tkanivového inžinierstva môže v budúcnosti umožniť regeneráciu poškodených ciev.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z5Oob6"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Rozdiel medzi cievnym chirurgom a angiológom: Čo by ste mali vedieť?"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento komplexný článok poskytuje podrobný prehľad o rozdieloch medzi cievnym chirurgom a angiológom, ich špecializáciách a prístupoch k liečbe cievnych ochorení. Vysvetľuje najčastejšie cievne problémy, diagnostické a liečebné metódy, a zdôrazňuje dôležitosť prevencie a spolupráce medzi špecialistami. Článok je cenným zdrojom informácií pre pacientov s kŕčovými žilami, žilovou trombózou a inými cievnymi ochoreniami."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">8 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zI7vMK"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(12280px,auto)_1fr] max-lg:px-4 lg:min-h-[467.375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_18.219%_29.902%_18.219%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(6588px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zE7kIU"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="man in green shirt and blue knit cap sitting on floor"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="man in green shirt and blue knit cap sitting on floor"
                  src="/external-assets/bd85ce1e2c235023.jpg"
                  height="344"
                  width="366"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="man in green shirt and blue knit cap sitting on floor"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="man in green shirt and blue knit cap sitting on floor"
                  src="/external-assets/27a3eff4a765b9fb.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5"
          >
            <div
              id="zvFqd1"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'V labyrintovom svete medicíny sa občas môže zdať, že každý špecialista hovorí vlastným jazykom. Keď príde reč na cievne problémy, často sa stretávame s dvoma hlavnými postavami: cievnym chirurgom a angiológom. Aj keď oboch možno nazvať "cievnym lekárom", ich úlohy a prístupy k liečbe sa výrazne líšia. Poďme sa bližšie pozrieť na tieto dva odbory a objasniť si, kedy by ste mali navštíviť ktorého špecialistu.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Cievny systém: Zložitá sieť života"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pred tým, ako sa ponoríme do rozdielov medzi cievnym chirurgom a angiológom, je dôležité pochopiť, s čím vlastne pracujú. Cievny systém je ako komplexná dopravná sieť v našom tele. Predstavte si ho ako sieť diaľnic (tepny), vedľajších ciest (žily) a úzkych uličiek (kapiláry), ktoré zabezpečujú, že každá bunka v našom tele dostane potrebné živiny a kyslík."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Hlavné komponenty cievneho systému:"}
              </h3>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Keď sa v tomto systéme vyskytne problém, či už ide o upchatú "diaľnicu" (ateroskleróza), prasknutú "cestu" (aneuryzma) alebo preťažené "vedľajšie cesty" (kŕčové žily), prichádzajú na rad naši špecialisti.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Cievny chirurg: Majster operačnej sály"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Cievny chirurg, odborne nazývaný aj angiochirurg, je ako skúsený inžinier, ktorý dokáže opraviť a prestavať aj tie najzložitejšie úseky cievnej "dopravnej siete".'
                }
              </p>
              <h3 className={listItemClassName2}>Čo robí cievny chirurg?</h3>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Liečba kŕčových žíl"}
                    </strong>
                    {
                      ": Aj keď sa to nepovažuje za prvú voľbu, môže chirurgicky odstrániť závažné kŕčové žily."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Kedy navštíviť cievneho chirurga?"}
              </h3>
              <ul className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak máte ochorenie periférnych artérií (kôrnatenie tepien)"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Cievny chirurg je expert na riešenie akútnych a život ohrozujúcich stavov súvisiacich s cievnym systémom. Je to ako mať po ruke záchranný tím pre vašu vnútornú "diaľničnú sieť".'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Angiológ: Strážca cievneho zdravia"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Angiológ je ako skúsený dopravný inšpektor, ktorý sleduje stav vašej vnútornej "dopravnej siete" a snaží sa predchádzať problémom predtým, než sa stanú kritickými.'
                }
              </p>
              <h3 className={listItemClassName2}>Čo robí angiológ?</h3>
              <ol className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Manažment chronických ochorení"}
                    </strong>
                    {": Pomáha pacientom zvládať dlhodobé cievne problémy."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Kedy navštíviť angiológa?</h3>
              <ul className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak máte rizikové faktory pre cievne ochorenia (obezita, fajčenie, diabetes)"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Angiológ je váš partner v dlhodobej starostlivosti o cievne zdravie. Je to ako mať osobného trénera pre vaše cievy, ktorý vám pomôže udržať ich v top forme."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Spolupráca cievneho chirurga a angiológa"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V praxi často dochádza k situáciám, kedy pacienti potrebujú oboch odborníkov. Je to ako keď potrebujete aj dopravného inžiniera, aj dopravného inšpektora, aby ste vyriešili komplexný problém na diaľnici."
                }
              </p>
              <h3 className={listItemClassName2}>Príklady spolupráce:</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Predoperačné zhodnotenie"}
                    </strong>
                    {
                      ": Angiológ môže vykonať podrobné vyšetrenie pred chirurgickým zákrokom."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Pooperačná starostlivosť"}
                    </strong>
                    {
                      ": Po operácii vykonanej cievnym chirurgom môže angiológ zabezpečiť dlhodobú starostlivosť a sledovanie."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Komplexná liečba"}
                    </strong>
                    {
                      ": Pri niektorých ochoreniach, ako je chronická žilová insuficiencia, môže byť potrebná kombinácia chirurgických a konzervatívnych metód."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Diagnostické metódy v angiológii a cievnej chirurgii"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aby sme lepšie pochopili prácu týchto špecialistov, pozrime sa na niektoré diagnostické metódy, ktoré používajú:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Duplexná ultrasonografia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Táto metóda je ako mať röntgenové oči pre vaše cievy. Používa zvukové vlny na vytvorenie obrazu ciev a prietoku krvi. Je to nebolestivá a neinvazívna metóda, ktorú často používajú obaja špecialisti."
                }
              </p>
              <h3 className={listItemClassName2}>2. Angiografia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Toto je ako detailná mapa vašej cievnej siete. Lekár vstrekne kontrastnú látku do ciev a potom použije röntgen na vytvorenie obrazu. Táto metóda sa často používa pred chirurgickým zákrokom."
                }
              </p>
              <h3 className={listItemClassName2}>3. CT/MR angiografia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si to ako 3D mapu vašich ciev. Táto metóda kombinuje MR/CT skener s kontrastnou látkou na vytvorenie detailného obrazu cievneho systému."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Liečebné metódy: Od konzervatívnych po chirurgické"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď sme si objasnili diagnostické metódy, poďme sa pozrieť na rôzne liečebné prístupy, ktoré títo špecialisti používajú:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Konzervatívne metódy (často používané angiológmi):"}
              </h3>
              <ol className="break-words my-0">
                {items12.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items12.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Lifestyle modifikácia"}
                    </strong>
                    {
                      ": Odporúčania týkajúce sa cvičenia, stravy a ďalších faktorov životného štýlu. Je to ako dať vašim cievam pravidelný servis a údržbu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Chirurgické metódy (vykonávané cievnymi chirurgmi):"}
              </h3>
              <ol className="break-words my-0">
                {items13.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items13.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Embolektómia"}
                    </strong>
                    {
                      ': Chirurgické odstránenie krvnej zrazeniny. Je to ako odstrániť veľkú prekážku z vašej cievnej "diaľnice".'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Najčastejšie cievne ochorenia a ich manažment"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď sme si objasnili rôzne diagnostické a liečebné metódy, pozrime sa na niektoré najčastejšie cievne ochorenia a ako sa s nimi vyrovnávajú naši špecialisti:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Kŕčové žily (Varixy)</h3>
              {textSegments5.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Angiológ: Skleroterapia, kompresívna terapia, lifestyle modifikácia"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Cievny chirurg: Chirurgické odstránenie v závažných prípadoch"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"2. Hlboká žilová trombóza (HŽT)"}
              </h3>
              {textSegments4.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Angiológ: Takmer vždy antikoagulačná liečba, kompresívna terapia"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Cievny chirurg: Trombektómia len vo veľmi závažných život-ohrozujúcich prípadoch"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"3. Periférne arteriálne ochorenie (PAO)"}
              </h3>
              {textSegments3.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Angiológ: Manažment rizikových faktorov, farmakoterapia"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Cievny chirurg: Angioplastika, bypass, endarterektómia"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>4. Aneuryzma</h3>
              {textSegments2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Angiológ: Monitorovanie malých aneuryziem"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Cievny chirurg: Chirurgická oprava alebo endovaskulárna liečba"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>5. Lymfedém</h3>
              {textSegments.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Angiológ: Komplexná dekongestívna terapia, kompresívna liečba"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Cievny chirurg: Chirurgické zákroky v špecifických prípadoch"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Prevencia cievnych ochorení</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Obaja špecialisti sa zhodujú, že prevencia je kľúčová pri udržiavaní zdravého cievneho systému. Tu sú niektoré odporúčania:"
                }
              </p>
              <ol className="break-words my-0">
                {items14.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items14.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dostatočná hydratácia"}
                    </strong>
                    {
                      ":Pomáha udržiavať správnu viskozitu krvi a podporuje zdravú cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Budúcnosť cievnej medicíny</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Oblasť cievnej medicíny sa neustále vyvíja. Nové technológie a postupy prinášajú nádej pre pacientov s cievnymi ochoreniami:"
                }
              </p>
              <ol className="break-words my-0">
                {items15.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items15.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Telemedicína"}
                    </strong>
                    {
                      ": Vzdialené monitorovanie pacientov s cievnymi ochoreniami môže zlepšiť dlhodobú starostlivosť a včasné odhalenie komplikácií."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Záver</h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
