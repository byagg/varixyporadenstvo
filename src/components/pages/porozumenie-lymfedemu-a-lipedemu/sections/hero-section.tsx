const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId porozumenie-lymfedemu-a-lipedemu-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  className: string;
  text: string;
};

function ListItem({ className, text }: ListItemProps) {
  return <p className={className}>{text}</p>;
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

type ListItem4Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem4({ text, text_1, separator }: ListItem4Props) {
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
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Lymfedém a lipedém sú komplexné stavy, ktoré si vyžadujú trpezlivosť, pochopenie a odbornú starostlivosť. Aj keď môžu predstavovať výzvu, existuje mnoho spôsobov, ako ich zvládať a viesť plnohodnotný život.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že každý pacient je jedinečný a to, čo funguje pre jedného, nemusí fungovať pre druhého. Preto je dôležité úzko spolupracovať s vašim lekárskym tímom a nájsť prístup, ktorý najlepšie vyhovuje vašim individuálnym potrebám.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "S pokrokom v medicíne a výskume sa otvárajú nové možnosti liečby a managementu týchto stavov. Budúcnosť prináša nádej na ešte efektívnejšie riešenia a lepšiu kvalitu života pre ľudí žijúcich s lymfedémom a lipedémom.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Nezabúdajte, že nie ste v tom sami. Existujú podporné skupiny a komunity, kde môžete zdieľať svoje skúsenosti a získať cenné rady od ľudí, ktorí prechádzajú podobnými výzvami. Spoločne môžeme budovať povedomie o týchto stavoch a podporovať výskum, ktorý prinesie nové riešenia.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Vaše telo je ako záhrada - s správnou starostlivosťou, trpezlivosťou a odhodlaním môže naďalej kvitnúť, aj keď čelí výzvam. Tak sa nevzdávajte a pokračujte v svojej ceste za zdravím a pohodou!",
  },
];

export const items2: ListItem2Props[] = [
  { text: "Opuch končatiny, najčastejšie nohy alebo ruky" },
  { text: "Pocit ťažkosti alebo napätia v postihnutej oblasti" },
  { text: "Obmedzená pohyblivosť kĺbov" },
];

export const items3: ListItem2Props[] = [
  { text: "Symetrické ukladanie tuku, často od bokov nadol" },
  { text: "Bolestivosť a citlivosť postihnutých oblastí" },
  { text: "Ľahká tvorba modrín" },
];

export const items4: ListItem4Props[] = [
  {
    text: "Klinické vyšetrenie",
    text_1:
      ": Lekár si prezrie a ohmatá postihnuté oblasti. Pri lymfedéme môže byť prítomný tzv. Stemmerov znak - neschopnosť uchopiť kožnú riasu na druhom prste nohy.",
  },
  {
    text: "Bioimpedančná spektroskopia",
    text_1:
      ": Táto metóda meria elektrický odpor tkanív. Je to ako keby ste merali, koľko vody je v špongii.",
  },
  {
    text: "Lymfoscintigrafia",
    text_1:
      ": Pri tejto metóde sa do tkaniva vpichne rádioaktívna látka a sleduje sa jej pohyb lymfatickým systémom. Je to ako sledovať cestu kvapky atramentu v rieke.",
  },
];

export const items5: ListItem4Props[] = [
  {
    text: "Manuálna lymfatická drenáž (MLD)",
    text_1:
      ': Je to špeciálna masážna technika, ktorá pomáha odvádzať nahromadenú lymfu. Predstavte si to ako jemné "vytláčanie" prebytočnej vody zo špongie.',
  },
  {
    text: "Kompresná terapia",
    text_1:
      ": Používanie kompresných pančúch alebo bandáží pomáha udržiavať opuch pod kontrolou. Je to ako keby ste dali postihnutej oblasti pevné objatie, ktoré jej pomáha udržať správny tvar.",
  },
  {
    text: "Cvičenie",
    text_1:
      ": Pohyb je kľúčový pre stimuláciu lymfatického systému. Je to ako keby ste pravidelne preplachovali odtokové potrubie, aby zostalo čisté a funkčné.",
  },
];

export const items6: ListItem4Props[] = [
  {
    text: "Noste správne odevy",
    text_1:
      ': Voľné, pohodlné oblečenie môže pomôcť zmierniť tlak na postihnuté oblasti. Je to ako dať svojim nohám a rukám "dýchať".',
  },
  {
    text: "Udržujte zdravú hmotnosť",
    text_1:
      ": Aj malý úbytok hmotnosti môže mať veľký vplyv na symptómy. Je to ako odľahčiť náklad, ktorý vaše telo musí niesť.",
  },
  {
    text: "Buďte aktívni",
    text_1:
      ': Pravidelné cvičenie, najmä plávanie a chôdza, môže pomôcť stimulovať lymfatický systém a zlepšiť cirkuláciu. Je to ako pravidelná údržba vášho "vnútorného čerpadla".',
  },
  {
    text: "Používajte kompresné odevy",
    text_1:
      ": Kvalitné kompresné pančuchy alebo rukávy môžu výrazne zmierniť opuchy a bolesti. Je to ako mať osobného asistenta, ktorý vám celý deň jemne masíruje končatiny.",
  },
  {
    text: "Vyhýbajte sa extrémnym teplotám",
    text_1:
      ": Horúčava môže zhoršiť opuchy, takže sa vyhýbajte horúcim kúpeľom a saunám. Naopak, studené obklady môžu priniesť úľavu. Je to ako nájsť tú správnu teplotu pre vaše telo.",
  },
];

export const items7: ListItem4Props[] = [
  {
    text: "Genetický výskum",
    text_1:
      ": Vedci skúmajú genetické faktory, ktoré môžu prispievať k vzniku týchto stavov. Je to ako hľadanie chybného kódu v počítačovom programe vášho tela.",
  },
  {
    text: "Inovatívne chirurgické techniky",
    text_1:
      ': Vyvíjajú sa nové mikrochirurgické postupy, ktoré môžu pomôcť obnoviť funkciu lymfatického systému. Je to ako oprava a vylepšenie vášho vnútorného "vodovodného systému".',
  },
  {
    text: "Farmakologická liečba",
    text_1:
      ': Skúmajú sa nové lieky, ktoré by mohli pomôcť zmierniť zápal a stimulovať lymfatický tok. Je to ako hľadanie "zázračného oleja" pre vaše telo.',
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z59Lrh"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Porozumenie lymfedému a lipedému"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte komplexný pohľad na lymfedém a lipedém, ich príčiny, príznaky a moderné prístupy k liečbe. Získajte cenné rady pre každodenný život s týmito stavmi a nádej na budúce inovácie v ich managemente."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zIiELa"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(7964px,auto)_1fr] max-lg:px-4 lg:min-h-[275.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_24.5098%_17.3203%_24.5098%_16.8301%] lg:grid-rows-[minmax(56px,auto)_minmax(344px,auto)_minmax(40px,auto)_minmax(3649px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zGl29z"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="woman in black tank top and blue denim jeans sitting on ground surrounded by trees during"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="woman in black tank top and blue denim jeans sitting on ground surrounded by trees during"
                  src="/external-assets/4e7779f7930090e0.jpg"
                  height="344"
                  width="212"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="woman in black tank top and blue denim jeans sitting on ground surrounded by trees during"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="woman in black tank top and blue denim jeans sitting on ground surrounded by trees during"
                  src="/external-assets/a19529e6ff17179f.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
            <div
              id="zHy9ew"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Milí čitatelia, dnes sa spoločne pozrieme na dve často zamieňané, no významne odlišné ochorenia - lymfedém a lipedém. Tieto stavy môžu výrazne ovplyvniť kvalitu života pacientov, a preto je dôležité im dobre porozumieť. Poďme sa na ne pozrieť bližšie, akoby sme sedeli pri šálke kávy a diskutovali o zdraví našich nôh."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Lymfedém: Keď lymfa nemá kam tiecť"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si lymfatický systém ako sieť kanálov, ktoré odvádzajú prebytočnú tekutinu z tkanív. Lymfedém nastáva, keď tieto kanály nefungujú správne. Je to akoby ste mali upchatý odtok v umývadle - voda (v tomto prípade lymfa) sa hromadí a spôsobuje opuch."
                }
              </p>
              <h3 className={listItemClassName2}>Príčiny lymfedému:</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Primárny lymfedém"}
                    </strong>
                    {
                      ": Je to ako keby ste sa narodili s chybným odtokovým systémom. Je spôsobený genetickými faktormi."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Sekundárny lymfedém"}
                    </strong>
                    {
                      ": Tento typ vzniká, keď je lymfatický systém poškodený, napríklad pri liečbe rakoviny alebo po úraze. Je to ako keby niekto poškodil vaše vodovodné potrubie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>Príznaky lymfedému:</h3>
              <ul className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Zhrubnutie a stvrdnutie kože"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Lipedém: Keď tuk má vlastnú hlavu"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Lipedém je ako neposlušný obyvateľ tuku vo vašom tele. Namiesto toho, aby sa rozložil rovnomerne, sa rozhodne usadiť sa najmä na nohách a rukách, pričom vynechá chodidlá a dlane. Je to akoby niekto nafúkol balóny pod vašou kožou, ale len na určitých miestach."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Kľúčové charakteristiky lipedému:"}
              </h3>
              <ul className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Chladná koža v postihnutých oblastiach"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Diagnostika: Detektívka v lekárskej ordinácii"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnostikovať lymfedém a lipedém môže byť náročné, pretože tieto stavy sa môžu prekrývať. Je to ako riešiť zložitú detektívku, kde každý symptóm je stopou."
                }
              </p>
              <h3 className={listItemClassName2}>Diagnostické metódy:</h3>
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
                      {"MRI alebo CT"}
                    </strong>
                    {
                      ": Tieto zobrazovacie metódy môžu pomôcť rozlíšiť medzi tekutinou a tukovým tkanivom"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba: Boj na viacerých frontoch"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba lymfedému a lipedému vyžaduje komplexný prístup. Je to ako by ste sa snažili udržať záhradu v dobrom stave - potrebujete rôzne nástroje a techniky."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold text-3xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight">
                {"Komplexná dekongestívna terapia (KDT):"}
              </h3>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Starostlivosť o pokožku"}
                    </strong>
                    {
                      ': Udržiavanie kože čistej a hydratovanej je dôležité pre prevenciu infekcií. Je to ako pravidelná údržba vášho "vonkajšieho obalu".'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Špecifické prístupy pre lipedém:"}
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Liposukcia"}
                    </strong>
                    {
                      ": V niektorých prípadoch môže byť vhodná špeciálna forma liposukcie nazývaná tumescenčná liposukcia. Je to ako vysávanie neposlušného tuku, ale vyžaduje si to veľkú opatrnosť a skúseného chirurga."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Diéta a výživa"}
                    </strong>
                    {
                      ": Hoci lipedém nie je spôsobený obezitou, zdravá strava môže pomôcť zmierniť príznaky. Je to ako keby ste dávali svojmu telu to najlepšie palivo."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Psychologická podpora"}
                    </strong>
                    {
                      ": Lipedém môže mať významný vplyv na sebavedomie a duševné zdravie. Rozhovor s odborníkom môže byť ako balzam pre dušu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Život s lymfedémom a lipedémom: Každodenné výzvy a víťazstvá"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Žiť s týmito stavmi môže byť náročné, ale s správnym prístupom a podporou je možné viesť plnohodnotný život. Tu je niekoľko tipov:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Hydratujte sa"}
                    </strong>
                    {
                      ': Pitie dostatočného množstva vody pomáha udržiavať lymfatický systém v chode. Je to ako pravidelne preplachovať váš vnútorný "odvodňovací systém".'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Nové horizonty v liečbe</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Výskum v oblasti lymfedému a lipedému neustále napreduje. Tu sú niektoré sľubné smery:"
                }
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Regeneratívna medicína"}
                    </strong>
                    {
                      ": Výskum kmeňových buniek ponúka nádej na regeneráciu poškodených lymfatických ciev. Je to ako pestovanie nových rastlín vo vašej vnútornej záhrade."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Záver: Nádej a odhodlanie</h2>
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
