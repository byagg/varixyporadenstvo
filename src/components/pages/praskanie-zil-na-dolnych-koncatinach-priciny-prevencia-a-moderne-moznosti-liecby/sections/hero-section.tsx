const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:text-2xl lg:leading-[3.25rem] lg:text-[2.5rem]";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl";

/**
 * @ployComponent
 * @ployComponentId praskanie-zil-na-dolnych-koncatinach-priciny-prevencia-a-moderne-moznosti-liecby-hero-section
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

export const items: ListItemProps[] = [
  {
    text: "Genetická predispozícia",
    text_1:
      ": Dedičnosť hrá významnú úlohu; ak mali vaši rodičia problémy s kŕčovými žilami, riziko ich výskytu u vás sa zvyšuje.​",
  },
  {
    text: "Hormonálne zmeny",
    text_1:
      ": Tehotenstvo, menopauza alebo užívanie hormonálnej antikoncepcie môžu ovplyvniť elasticitu cievnych stien.​",
  },
  {
    text: "Starnutie",
    text_1:
      ": S pribúdajúcim vekom sa cievy stávajú krehkejšími a náchylnejšími na poškodenie.​",
  },
  {
    text: "Dlhodobé státie alebo sedenie",
    text_1:
      ": Profesie vyžadujúce dlhé státie alebo sedenie zvyšujú tlak v dolných končatinách, čo môže viesť k poškodeniu ciev.​",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Pravidelná fyzická aktivita",
    text_1:
      ": Chôdza, plávanie alebo jazda na bicykli podporujú krvný obeh a posilňujú svaly dolných končatín.​",
  },
  {
    text: "Vyhýbanie sa dlhodobému státiu alebo sedeniu",
    text_1:
      ": Ak je to možné, pravidelne meníte polohu a robte krátke prestávky na pohyb.​",
  },
  {
    text: "Nosenie kompresných pančúch",
    text_1:
      ": Tieto pančuchy podporujú žilový návrat a znižujú tlak v dolných končatinách.​",
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Zníženie nadváhy znižuje tlak na žilový systém.​",
  },
  {
    text: "Zdravá strava",
    text_1:
      ": Strava bohatá na vlákninu a nízky obsah soli pomáha predchádzať zápche a znižuje tlak na žily.​",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zQ-t7n"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "„Praskanie“ žíl na dolných končatinách: Príčiny, prevencia a moderné možnosti liečby"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "„Praskanie“ žíl na dolných končatinách je problém, ktorý sa týka mnohých ľudí – najmä žien po 30. roku života."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] hidden mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">4 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z7lf8H"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(5116px,auto)_1fr] max-lg:px-4 lg:min-h-[226.8125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3153px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zmKPnu"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a woman with a varix on her leg"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a woman with a varix on her leg"
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=434,fit=crop/ALpBQyXKnqhOakP5/img_0957-dJoBoEZ9e5IpwkKW.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a woman with a varix on her leg"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a woman with a varix on her leg"
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/img_0957-dJoBoEZ9e5IpwkKW.jpg"
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
              id="zJHU-8"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"„Praskanie“ žíl na nohách je bežný estetický aj zdravotný problém, ktorý sa prejavuje ako jemné červené, modré alebo fialové žilky na povrchu kože. V skutočnosti však nejde o doslovné prasknutie cievy, ale o" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "teleangiektázie"}
                </strong>
                {", známe aj ako" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "metličkovité žilky"}
                </strong>
                {
                  ". Tieto drobné rozšírené kapiláry môžu signalizovať poruchy žilovej cirkulácie a vyžadujú si odbornú pozornosť.​"
                }
              </p>
              <h4 className={listItemClassName}>Príčiny „praskania“ žíl</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"„Praskanie“ žíl môže byť dôsledkom viacerých faktorov:​"}
              </p>
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
                    <strong className="[color:inherit] break-words">
                      {"Obezita"}
                    </strong>
                    {
                      ": Nadmerná hmotnosť zvyšuje tlak na žilový systém dolných končatín.​"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tieto faktory môžu viesť k oslabeniu cievnych stien, čo spôsobuje ich rozšírenie a prasknutie, čím vznikajú viditeľné pavúčie žily.​"
                }
              </p>
              <h4 className={listItemClassName}>Prevencia „praskania“ žíl</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je nápomocná pri minimalizovaní rizika vzniku prasknutých žíl:​"
                }
              </p>
              <ul className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Vyhýbanie sa vysokým podpätkom a tesnému oblečeniu"}
                    </strong>
                    {
                      ": Tieto môžu obmedzovať krvný obeh v dolných končatinách.​"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h4 className={listItemClassName}>
                {"Moderné možnosti liečby „prasknutých“ žíl"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Existuje niekoľko metód liečby prasknutých žíl:​"}
              </p>
              <h5 className={listItemClassName2}>Skleroterapia</h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skleroterapia je najbežnejšou metódou liečby pavúčích žíl. Spočíva v injekčnom podaní roztoku do postihnutej žily, čo spôsobí jej zlepenie a následné vstrebávanie organizmom. Tento postup je minimálne invazívny a nevyžaduje anestéziu.​"
                }
              </p>
              <h5 className={listItemClassName2}>Diatermia</h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diatermia využíva vysokofrekvenčné elektrické prúdy na generovanie tepla v tkanivách, čo vedie k uzavretiu postihnutých ciev. Je to neinvazívna metóda, ktorá môže byť účinná pri liečbe menších žiliek.​"
                }
              </p>
              <h5 className={listItemClassName2}>Laserová terapia</h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Laserová terapia využíva intenzívne svetelné lúče na uzavretie malých povrchových žíl. Je vhodná najmä pre menšie pavúčie žily a je obľúbená pre svoju neinvazívnosť a rýchle zotavenie."
                }
              </p>
              <h4 className={listItemClassName}>Často kladené otázky (FAQ)</h4>
              <h5 className={listItemClassName2}>
                {"Je „praskanie“ žíl bolestivé?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vo väčšine prípadov nie. „Prasknuté“ žilky, teda teleangiektázie, sú vizuálnym problémom bez fyzickej bolesti. Niekedy sa však môže vyskytnúť mierne pnutie alebo pocit tepla v danej oblasti. Ak sa objaví výrazná bolesť, opuch alebo začervenanie, môže to byť známkou iného ochorenia žilového systému."
                }
              </p>
              <h5 className={listItemClassName2}>
                {"Môžu sa „prasknuté“ žily samé zahojiť?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Metličkovité žilky sa samé nevstrebú a ani nezmiznú. Ich počet sa môže postupne zvyšovať, najmä ak sa nezmenia rizikové faktory (napr. sedavý spôsob života). Ich odstránenie si vyžaduje cielenú odbornú liečbu, najčastejšie sklerotizáciu alebo laserovú terapiu."
                }
              </p>
              <h5 className={listItemClassName2}>
                {"Môže „praskanie“ žíl súvisieť s vyšším krvným tlakom?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zvýšený tlak v žilovom systéme – najmä v dolných končatinách – je častým spúšťačom tvorby pavúčích žíl. Arteriálna hypertenzia (vysoký tlak v tepnách) však s týmto problémom priamo nesúvisí. Dôležitejším faktorom je chronická žilová nedostatočnosť a porucha venózneho návratu."
                }
              </p>
              <h5 className={listItemClassName2}>
                {"Aká liečba je najlepšia pre tenké metličkové žilky?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Najúčinnejšou a zároveň najšetrnejšou metódou býva" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "laserová terapia"}
                </strong>{" "}
                {"– najmä pri veľmi drobných a povrchových žilkách. U väčších metličiek sa odporúča" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "skleroterapia"}
                </strong>
                {
                  ". V niektorých prípadoch sa obe metódy kombinujú. Výber vhodnej liečby závisí od rozsahu a typu žíl."
                }
              </p>
              <h5 className={listItemClassName2}>
                {"Ako často je potrebné procedúru opakovať?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Väčšina pacientov potrebuje viacero ošetrení na dosiahnutie optimálneho výsledku. Bežne sú potrebné 2–4 sedenia. Žiaľ, ani po úspešnom zákroku nie je vylúčené, že sa časom objavia nové žilky – hlavne ak pretrvávajú rizikové faktory. Preto je dôležitá" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "dlhodobá prevencia"}
                </strong>
                {"."}
              </p>
              <h4 className={listItemClassName}>Záver</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"„Praskanie“ žíl na dolných končatinách je problém, ktorý sa týka mnohých ľudí – najmä žien po 30. roku života. Aj keď ide v mnohých prípadoch o kozmetickú záležitosť, tieto metličky môžu byť" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "prvým príznakom vážnejších žilových ochorení"}
                </strong>
                {"."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Našťastie, dnešná medicína ponúka účinné, bezpečné a minimálne invazívne riešenia –" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "sklerotizáciu, laser a diatermiu"}
                </strong>
                {". Najlepšou ochranou pred zhoršovaním stavu je" + " "}
                <strong className="[color:inherit] break-words">
                  {" " +
                    "kombinácia prevencie, včasnej diagnostiky a odborného zákroku"}
                </strong>
                {"."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Starajte sa o svoje nohy – sú základom vášho pohybu, zdravia aj kvality života."
                }
              </p>
              <h5 className={listItemClassName2}>Tip pre čitateľov</h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zaujíma vás, ktorá metóda odstránenia žiliek by bola najvhodnejšia pre vás? Obráťte sa na certifikovanú cievnu ambulanciu (MUDr. A. Gaži) alebo estetickú kliniku, kde vám na základe vyšetrenia odporučia individuálny plán terapie."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
