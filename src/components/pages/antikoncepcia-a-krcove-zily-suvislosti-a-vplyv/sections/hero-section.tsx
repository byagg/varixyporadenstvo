const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {text}
    </p>
  );
}

type ListItem2Props = {
  text: string;
  separator?: string;
};

function ListItem2({ text, separator }: ListItem2Props) {
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

type ListItem5Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem5({ text, text_1, separator }: ListItem5Props) {
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
    text: "Skôr než sa pustíme do skúmania vzťahu medzi antikoncepciou a kŕčovými žilami, je dôležité pochopiť, čo presne kŕčové žily sú a ako vznikajú.",
  },
  {
    text: 'Kŕčové žily, odborne nazývané aj varixy, sú rozšírené, často zvlnené a viditeľné žily, ktoré sa najčastejšie vyskytujú na nohách. Predstavte si ich ako malé riečky pod kožou, ktoré sa z nejakého dôvodu rozhodli zmeniť svoj tok a vytvorili malé "vodopády" alebo "meandre".',
  },
  {
    text: "Vznikajú, keď žilové chlopne, ktoré za normálnych okolností pomáhajú krvi prúdiť späť k srdcu proti gravitácii, prestanú správne fungovať. V dôsledku toho sa krv hromadí v žilách, čo vedie k ich rozšíreniu a vzniku charakteristického vzhľadu kŕčových žíl.",
  },
  { text: "Medzi hlavné príčiny vzniku kŕčových žíl patria:" },
];

export const items2: ListItem2Props[] = [
  { text: "Genetické predispozície" },
  { text: "Tehotenstvo" },
  { text: "Obezita" },
  { text: "Dlhodobé státie alebo sedenie" },
  { text: "Vek (riziko sa zvyšuje s pribúdajúcim vekom)" },
  { text: "Hormonálne zmeny" },
];

export const items3: ListItem2Props[] = [
  { text: "Zabrániť ovulácii" },
  { text: "Zhustiť cervikálny hlien, čím sťažujú prechod spermií" },
  {
    text: "Zmeniť výstelku maternice, čím sťažujú implantáciu oplodneného vajíčka",
  },
];

export const items4: ListItem2Props[] = [
  { text: "Viditeľné, zvlnené žily na nohách" },
  { text: "Pocit ťažkých nôh" },
  {
    text: "Bolesť alebo nepríjemný pocit v nohách, najmä po dlhom státí alebo sedení",
  },
  { text: "Opuch členkov a chodidiel" },
  { text: "Svrbenie alebo pálenie v oblasti postihnutých žíl" },
  { text: "Zmeny farby kože v okolí kŕčových žíl" },
];

export const items5: ListItem5Props[] = [
  {
    text: "Pravidelný pohyb",
    text_1:
      ": Cvičenie, najmä aktivity ako chôdza, plávanie alebo jazda na bicykli, pomáha zlepšovať krvný obeh.",
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Nadváha zvyšuje tlak na žily v nohách.",
  },
  {
    text: "Vyhýbanie sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne meniť polohu alebo sa prejsť.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Keď odpočívate, zdvihnite nohy nad úroveň srdca. Je to ako by ste pomáhali gravitácii pri jej práci.",
  },
  {
    text: "Nosenie kompresných pančúch",
    text_1:
      ": Tieto špeciálne pančuchy pomáhajú zlepšovať cirkuláciu krvi v nohách.",
  },
  {
    text: "Zdravá strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať kŕčovým žilám.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zN0_sR"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Antikoncepcia a kŕčové žily: Súvislosti a vplyv"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Kŕčové žily a antikoncepcia sú dve témy, ktoré na prvý pohľad nemusia mať veľa spoločného. No v skutočnosti existuje medzi nimi zaujímavé prepojenie, ktoré si zaslúži našu pozornosť. V tomto článku sa ponoríme hlbšie do tejto problematiky a preskúmame, ako môže antikoncepcia ovplyvniť zdravie našich žíl, konkrétne vznik a rozvoj kŕčových žíl."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">7 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z2zOUK"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(9806px,auto)_1fr] max-lg:px-4 lg:min-h-[387.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(5572px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zcTWD8"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="brown tablet blister pack"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="brown tablet blister pack"
                  src="/external-assets/c02f778d354a2a21.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="brown tablet blister pack"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="brown tablet blister pack"
                  src="/external-assets/523b6bb652b41215.jpg"
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
              id="znkZ7U"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si situáciu: Sedíte v čakárni u gynekológa a prezeráte si brožúrku o antikoncepcii. Zrazu vám padne zrak na malú poznámku o možných vedľajších účinkoch a medzi nimi zbadáte zmienku o kŕčových žilách. Zamyslíte sa - môže naozaj antikoncepcia ovplyvniť zdravie vašich žíl? Táto otázka je viac než oprávnená a v nasledujúcom článku sa na ňu pozrieme bližšie."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily a antikoncepcia sú dve témy, ktoré na prvý pohľad nemusia mať veľa spoločného. No v skutočnosti existuje medzi nimi zaujímavé prepojenie, ktoré si zaslúži našu pozornosť. V tomto článku sa ponoríme hlbšie do tejto problematiky a preskúmame, ako môže antikoncepcia ovplyvniť zdravie našich žíl, konkrétne vznik a rozvoj kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú kŕčové žily a ako vznikajú?"}
              </h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "A práve tu sa dostávame k našej hlavnej téme - hormonálnym zmenám a antikoncepcii."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Antikoncepcia a jej vplyv na organizmus"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Antikoncepcia, najmä hormonálna, funguje na princípe ovplyvňovania hormonálneho systému ženy. Väčšina hormonálnych antikoncepčných metód obsahuje kombináciu estrogénu a progestínu (syntetická forma progesterónu) alebo len samotný progestín."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Tieto hormóny majú za úlohu:"}
              </p>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Avšak, ako to už v medicíne býva, nič nie je bez vedľajších účinkov. A práve tu sa dostávame k možnému vplyvu antikoncepcie na naše žily."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Súvislosť medzi antikoncepciou a kŕčovými žilami"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko teórií a štúdií, ktoré naznačujú možnú súvislosť medzi užívaním hormonálnej antikoncepcie a vznikom kŕčových žíl. Pozrime sa na ne bližšie:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Vplyv estrogénu na krvnú zrážanlivosť"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Estrogén, ktorý je súčasťou mnohých antikoncepčných prípravkov, môže zvyšovať zrážanlivosť krvi. Je to ako keby ste do rieky pridali trochu škrobu - prúd sa spomalí a môže dôjsť k hromadeniu. V prípade našich žíl to môže viesť k zvýšenému riziku tvorby krvných zrazenín, čo môže prispieť k vzniku kŕčových žíl."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Zmeny v štruktúre žilovej steny"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hormóny v antikoncepcii môžu ovplyvniť aj samotnú štruktúru žilovej steny. Môžu spôsobiť, že žily sa stanú menej elastické a viac náchylné na rozšírenie. Je to podobné, ako keď dlho nosíte gumičku - postupne stráca svoju pružnosť."
                }
              </p>
              <h3 className={listItemClassName2}>3. Zadržiavanie tekutín</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Niektoré ženy môžu pri užívaní hormonálnej antikoncepcie pozorovať zvýšené zadržiavanie tekutín v tele. Toto môže viesť k zvýšenému tlaku na žily, najmä v dolných končatinách, čo môže prispieť k vzniku kŕčových žíl."
                }
              </p>
              <h3 className={listItemClassName2}>4. Genetické predispozície</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je dôležité poznamenať, že nie všetky ženy, ktoré užívajú antikoncepciu, budú mať problémy s kŕčovými žilami. Veľkú rolu tu hrajú genetické predispozície. Ak máte v rodine históriu kŕčových žíl, môžete byť viac náchylná na ich vznik pri užívaní hormonálnej antikoncepcie."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Typy antikoncepcie a ich vplyv na kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nie všetky formy antikoncepcie majú rovnaký vplyv na riziko vzniku kŕčových žíl. Pozrime sa na niektoré najčastejšie typy:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Kombinovaná hormonálna antikoncepcia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Toto sú klasické antikoncepčné pilulky obsahujúce estrogén a progestín. Tieto pilulky sú spojené s najvyšším rizikom vzniku kŕčových žíl, najmä u žien s predispozíciou k tomuto ochoreniu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Progestínová antikoncepcia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Antikoncepčné metódy obsahujúce iba progestín (ako napríklad minipilulky, injekcie alebo implantáty) majú nižšie riziko vzniku kŕčových žíl v porovnaní s kombinovanou antikoncepciou."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3. Nehormonálna antikoncepcia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Metódy ako medený intrauterinný systém (IUS) alebo bariérové metódy (kondómy, diafragma) nemajú priamy vplyv na riziko vzniku kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>Príznaky kŕčových žíl</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak užívate antikoncepciu a máte obavy z kŕčových žíl, je dôležité vedieť, na aké príznaky si dávať pozor. Medzi hlavné príznaky kŕčových žíl patria:"
                }
              </p>
              <ul className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak spozorujete ktorýkoľvek z týchto príznakov, je vhodné konzultovať to so svojím lekárom."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prevencia kŕčových žíl pri užívaní antikoncepcie"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak užívate antikoncepciu a máte obavy z kŕčových žíl, existuje niekoľko preventívnych opatrení, ktoré môžete prijať:"
                }
              </p>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem5
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Pitný režim"}
                    </strong>
                    {
                      ": Dostatočný príjem tekutín pomáha udržiavať správnu viskozitu krvi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Liečba kŕčových žíl</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sa u vás už kŕčové žily vyvinuli, existuje niekoľko možností liečby:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Konzervatívne metódy</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy"}
                    </strong>
                    {
                      ": Tieto špeciálne pančuchy pomáhajú zlepšovať cirkuláciu krvi v nohách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Cvičenie"}
                    </strong>
                    {
                      ": Pravidelný pohyb, najmä chôdza a plávanie, pomáha zlepšovať cirkuláciu krvi."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Elevácia nôh"}
                    </strong>
                    {
                      ": Zdvihnutie nôh nad úroveň srdca pomáha odľahčiť žily a zlepšiť prietok krvi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>2. Medikamentózna liečba</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Venofarmaká"}
                    </strong>
                    {
                      ": Lieky ako diosmín alebo hesperidín pomáhajú zlepšovať žilový tonus a zmierňovať príznaky."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Protizápalové lieky"}
                    </strong>
                    {
                      ": Na zmiernenie bolesti a zápalu môžu byť predpísané nesteroidné protizápalové lieky."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"3. Minimálne invazívne zákroky"}
              </h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Skleroterapia"}
                    </strong>
                    {
                      ": Pri tomto zákroku sa do postihnutých žíl vstrekuje roztok, ktorý spôsobí ich uzavretie a následné vstrebanie."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Rádiofrekvenčná ablácia"}
                    </strong>
                    {
                      ": Táto metóda využíva tepelnú energiu na uzavretie postihnutých žíl."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Laserová terapia"}
                    </strong>
                    {
                      ": Podobne ako rádiofrekvenčná ablácia, aj táto metóda využíva teplo, ale v tomto prípade z laserového lúča, na uzavretie postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>4. Chirurgická liečba</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Stripping"}
                    </strong>
                    {
                      ": Pri tomto zákroku sa chirurgicky odstránia postihnuté žily."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Flebektómia"}
                    </strong>
                    {
                      ": Ide o odstránenie menších kŕčových žíl cez malé rezy v koži."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <h3 className={listItemClassName2}>
                {
                  "Môžem užívať antikoncepciu, ak mám v rodine históriu kŕčových žíl?"
                }
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak máte v rodine históriu kŕčových žíl, neznamená to automaticky, že nemôžete užívať antikoncepciu. Je však dôležité konzultovať túto skutočnosť s vaším gynekológom. Môže vám odporučiť typ antikoncepcie s nižším rizikom, napríklad progestínovú antikoncepciu, alebo navrhnúť iné preventívne opatrenia."
                }
              </p>
              <h3 className={listItemClassName2}>
                {
                  "Aké sú alternatívy k hormonálnej antikoncepcii, ak sa obávam kŕčových žíl?"
                }
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko nehormonálnych metód antikoncepcie, ktoré nemajú vplyv na riziko vzniku kŕčových žíl:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Medený intrauterinný systém (IUS)"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Bariérové metódy (kondómy, diafragma)"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Prirodzené metódy plánovania rodičovstva (sledovanie plodných dní)"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"Môžem cvičiť, ak mám kŕčové žily?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, cvičenie je dokonca odporúčané pri prevencii a manažmente kŕčových žíl. Aktivity ako chôdza, plávanie alebo jazda na bicykli pomáhajú zlepšovať krvný obeh. Vyhýbajte sa však cvičeniam, ktoré zahŕňajú náhle pohyby alebo zdvíhanie ťažkých váh, pretože to môže zvýšiť tlak na žily."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Ako dlho trvá rekonvalescencia po operácii kŕčových žíl?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Rekonvalescencia po operácii kŕčových žíl závisí od typu zákroku a individuálneho prípadu. Vo všeobecnosti môže trvať od niekoľkých dní do niekoľkých týždňov. Po minimálne invazívnych zákrokoch, ako je skleroterapia alebo laserová ablácia, sa môžete vrátiť k bežným aktivitám pomerne rýchlo. Po chirurgickom zákroku môže byť potrebný dlhší čas na zotavenie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Môžu sa kŕčové žily vrátiť po liečbe?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, kŕčové žily sa môžu vrátiť aj po liečbe. Preto je dôležité dodržiavať preventívne opatrenia aj po úspešnej liečbe. To zahŕňa udržiavanie zdravej hmotnosti, pravidelné cvičenie, nosenie kompresných pančúch, ak je to odporúčané, a vyhýbanie sa dlhému státiu alebo sedeniu."
                }
              </p>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-7 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl">
                {"Záver"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Vzťah medzi antikoncepciou a kŕčovými žilami je komplexný a závisí od mnohých faktorov. Jednoznačne platí, že konečné slovo má v tejto problematike lekár."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
