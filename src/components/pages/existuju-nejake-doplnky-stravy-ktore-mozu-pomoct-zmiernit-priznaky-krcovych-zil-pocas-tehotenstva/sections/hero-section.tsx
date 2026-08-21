const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId existuju-nejake-doplnky-stravy-ktore-mozu-pomoct-zmiernit-priznaky-krcovych-zil-pocas-tehotenstva-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
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

type ListItem3Props = {
  text: string;
  separator?: string;
};

function ListItem3({ text, separator }: ListItem3Props) {
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
  className: string;
};

function ListItem5({ className }: ListItem5Props) {
  return <p className={className} />;
}

export const items: ListItemProps[] = [
  {
    text: "Existuje niekoľko doplnkov stravy a prírodných prostriedkov, ktoré môžu byť užitočné pri zmiernení príznakov kŕčových žíl počas tehotenstva. Prenatálne vitamíny, vitamín C, vitamín E, flavonoidy, omega-3 mastné kyseliny a zinok sú niektoré z možností, ktoré by ste mohli zvážiť.",
  },
  {
    text: "Je však dôležité pamätať, že doplnky stravy nie sú zázračným liekom na kŕčové žily a mali by byť používané v kombinácii s ďalšími opatreniami, ako je nosenie kompresných pančúch, pravidelné cvičenie a udržiavanie zdravého životného štýlu.",
  },
  {
    text: "Vždy je nevyhnutné konzultovať s lekárom pred začatím užívania akýchkoľvek doplnkov stravy, najmä počas tehotenstva. Váš lekár vám môže poskytnúť personalizované rady a usmernenia, ktoré zohľadnia váš individuálny zdravotný stav a potreby.",
  },
  {
    text: "Kŕčové žily, hoci môžu byť nepríjemné, sú bežným javom počas tehotenstva a vo väčšine prípadov sa po pôrode zlepšia. So správnou starostlivosťou a podporou môžete zmierniť príznaky a užiť si zdravé a pohodlné tehotenstvo.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Zvýšený objem krvi",
    text_1:
      ": Tehotenstvo spôsobuje zvýšenie objemu krvi v tele, čo zvyšuje tlak na žily.",
  },
  {
    text: "Hormonálne zmeny",
    text_1:
      ": Hormóny produkované počas tehotenstva môžu spôsobiť uvoľnenie žilových stien.",
  },
  {
    text: "Rastúca maternica",
    text_1:
      ": S rastúcou maternicou sa zvyšuje tlak na žily v panvovej oblasti a dolných končatinách.",
  },
  {
    text: "Zvýšená hmotnosť",
    text_1:
      ": Prirodzený prírastok hmotnosti počas tehotenstva môže zvýšiť tlak na žily v nohách.",
  },
];

export const items3: ListItem3Props[] = [
  { text: "Citrusové ovocie (pomaranče, grapefruity)" },
  { text: "Jahody" },
  { text: "Kiwi" },
  { text: "Paprika" },
  { text: "Brokolica" },
];

export const items4: ListItem3Props[] = [
  { text: "Orechy (najmä mandle)" },
  { text: "Semienka (slnečnicové, tekvicové)" },
  { text: "Rastlinné oleje (slnečnicový, olivový)" },
  { text: "Avokádo" },
];

export const items5: ListItem5Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
  },
];

export const items6: ListItem3Props[] = [
  { text: "Mastné ryby (losos, makrela, sardinky)" },
  { text: "Ľanové semienka" },
  { text: "Chia semienka" },
];

export const items7: ListItem3Props[] = [
  { text: "Mäso (hovädzie, jahňacie)" },
  { text: "Morské plody (ustrice, kraby)" },
  { text: "Strukoviny" },
];

export const items8: ListItem3Props[] = [
  { text: "Vňať pohánky" },
  { text: "List ostružiny" },
  { text: "Koreň kostihoja" },
];

export const items9: ListItem2Props[] = [
  {
    text: "Kompresné pančuchy",
    text_1:
      ": Nosenie kompresných pančúch môže pomôcť zlepšiť cirkuláciu a znížiť opuchy. Existujú špeciálne kompresné pančuchy pre tehotné ženy.",
  },
  {
    text: "Pravidelné cvičenie",
    text_1:
      ": Mierne cvičenie, ako je chôdza alebo plávanie, môže pomôcť zlepšiť cirkuláciu. Cviky na kŕčové žily môžu byť obzvlášť prospešné.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Pravidelné dvíhanie nôh nad úroveň srdca môže pomôcť zlepšiť žilový návrat a znížiť opuchy.",
  },
  {
    text: "Vyhýbanie sa dlhému státiu alebo sedeniu",
    text_1: ": Častá zmena polohy môže pomôcť podporiť cirkuláciu.",
  },
  {
    text: "Správna výživa",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať zápche a znížiť opuchy.",
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Nadmerná hmotnosť môže zvýšiť tlak na žily v nohách.",
  },
];

export const items10: ListItem2Props[] = [
  {
    text: "Aké sú možné vedľajšie účinky užívania doplnkov stravy počas tehotenstva?",
    text_1:
      " Vedľajšie účinky môžu byť individuálne a závisia od konkrétneho doplnku stravy. Môžu zahŕňať žalúdočné ťažkosti, nevoľnosť, alebo alergické reakcie. Je dôležité informovať lekára o všetkých užívaných doplnkoch a sledovať prípadné nežiaduce účinky.",
  },
  {
    text: "Môžem kombinovať viacero doplnkov stravy naraz?",
    text_1:
      " Kombinovanie doplnkov stravy by malo byť vykonávané pod dohľadom lekára. Niektoré látky sa môžu navzájom ovplyvňovať a je dôležité dodržiavať odporúčané dávky a kombinácie.",
  },
  {
    text: "Ak sa rozhodnem pre doplnky stravy, ako dlho by som ich mala užívať?",
    text_1:
      " Dĺžka užívania doplnkov stravy závisí od konkrétneho prípadu a odporúčaní lekára. Môže sa líšiť podľa individuálnych potrieb a účinkov doplnkov. Dôležité je sledovať priebeh a konzultovať s lekárom ohľadom trvania užívania.",
  },
  {
    text: "Sú prírodné doplnky stravy bezpečnejšie ako syntetické?",
    text_1:
      " Nie vždy. Aj prírodné doplnky môžu mať vedľajšie účinky alebo interakcie s liekmi. Bezpečnosť doplnku nezávisí len od toho, či je prírodný alebo syntetický, ale aj od jeho kvality, čistoty a vhodnosti pre vaše individuálne potreby.",
  },
  {
    text: "Môžu doplnky stravy nahradiť vyváženú stravu?",
    text_1:
      " Nie, doplnky stravy by nemali nahrádzať vyváženú stravu. Sú určené na doplnenie výživy, nie na jej nahradenie. Vyvážená strava bohatá na ovocie, zeleninu, celozrnné produkty a zdravé bielkoviny je stále základom zdravého tehotenstva.",
  },
  {
    text: "Existujú nejaké doplnky stravy, ktorým by som sa mala počas tehotenstva vyhnúť?",
    text_1:
      " Áno, niektoré doplnky môžu byť počas tehotenstva nebezpečné. Napríklad, vysoké dávky vitamínu A môžu byť škodlivé pre plod. Vždy konzultujte s lekárom pred užívaním akýchkoľvek doplnkov.",
  },
  {
    text: "Môžu doplnky stravy pomôcť aj pri prevencii kŕčových žíl?",
    text_1:
      " Niektoré doplnky stravy, najmä tie, ktoré podporujú zdravie ciev a cirkuláciu, môžu pomôcť pri prevencii kŕčových žíl. Avšak, nemôžu zaručiť, že sa kŕčové žily nevyvinú, najmä ak máte genetickú predispozíciu.",
  },
  {
    text: "Ako môžem vedieť, či doplnky stravy skutočne fungujú?",
    text_1:
      " Účinky doplnkov stravy môžu byť subjektívne a môžu sa líšiť od osoby k osobe. Môžete sledovať, či sa zmierňujú vaše príznaky, ako sú opuchy alebo bolesť. Pravidelné konzultácie s lekárom vám tiež môžu pomôcť vyhodnotiť účinnosť doplnkov.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z5NlqD"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Existujú nejaké doplnky stravy, ktoré môžu pomôcť zmierniť príznaky kŕčových žíl počas tehotenstva?"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento komplexný článok sa zaoberá možnosťami využitia doplnkov stravy pri zmiernení príznakov kŕčových žíl počas tehotenstva. Poskytuje detailný prehľad rôznych vitamínov, minerálov a prírodných látok, ktoré môžu byť prospešné pre zdravie žíl, vrátane prenatálnych vitamínov, vitamínu C, flavonoidov a omega-3 mastných kyselín. Článok zdôrazňuje dôležitosť konzultácie s lekárom pred užívaním akýchkoľvek doplnkov a poskytuje aj ďalšie odporúčania pre manažment kŕčových žíl v tehotenstve."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">9 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zcHhNA"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(13244px,auto)_minmax(16px,auto)_minmax(200px,auto)_minmax(16px,auto)_minmax(200px,auto)_1fr] max-lg:px-4 lg:min-h-[514.75rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_16.585%_0.245098%_32.6797%_0.245098%_2.12418%_14.4608%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(2064px,auto)_minmax(426px,auto)_minmax(458px,auto)_minmax(476px,auto)_minmax(4196px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-6">
            <div
              id="zsCjjA"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="assorted sliced citrus fruits on brown wooden chopping board"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="assorted sliced citrus fruits on brown wooden chopping board"
                  src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=406&h=344"
                  height="344"
                  width="406"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="assorted sliced citrus fruits on brown wooden chopping board"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="assorted sliced citrus fruits on brown wooden chopping board"
                  src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-5 lg:col-start-2 lg:col-end-8 lg:row-end-9">
            <div
              id="zyeGKq"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tehotenstvo je obdobie plné zmien a výziev pre ženské telo. Jednou z týchto výziev môžu byť kŕčové žily, ktoré sa často objavujú alebo zhoršujú počas gravidity. V tomto článku sa zameriame na doplnky stravy, ktoré môžu pomôcť zmierniť príznaky kŕčových žíl počas tehotenstva, a poskytneme vám komplexný pohľad na túto problematiku."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Kŕčové žily v tehotenstve: Prečo sa objavujú?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pred tým, ako sa ponoríme do sveta doplnkov stravy, je dôležité pochopiť, prečo sa kŕčové žily v tehotenstve objavujú častejšie. Kŕčové žily, odborne nazývané varixy, sú rozšírené, pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Počas tehotenstva sa riziko vzniku kŕčových žíl zvyšuje z niekoľkých dôvodov:"
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
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tieto faktory môžu viesť k vzniku alebo zhoršeniu kŕčových žíl, ktoré sa môžu prejavovať ako bolesti nôh od kolien dolu, opuchy nôh, či viditeľné žily na nohách."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Doplnky stravy: Možné riešenie pre kŕčové žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Doplnky stravy môžu zohrávať dôležitú úlohu pri zmiernení príznakov kŕčových žíl počas tehotenstva. Je však dôležité poznamenať, že nie sú zázračným liekom na kŕčové žily a mali by byť používané v kombinácii s inými liečebnými metódami a pod dohľadom lekára."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pozrime sa bližšie na niektoré doplnky stravy, ktoré môžu byť prospešné:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Prenatálne vitamíny</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prenatálne vitamíny sú základom zdravého tehotenstva. Obsahujú dôležité živiny ako železo, vápnik a kyselinu listovú, ktoré sú nevyhnutné pre správny rast a vývoj plodu. Okrem toho môžu tiež pomáhať podporovať zdravé krvné cievy."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Železo"}
                    </strong>
                    {
                      ": Pomáha pri tvorbe červených krviniek, ktoré prenášajú kyslík v tele."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vápnik"}
                    </strong>
                    {
                      ": Podporuje zdravie kostí a svalov, vrátane svalov v stenách žíl."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Kyselina listová"}
                    </strong>
                    {
                      ": Dôležitá pre vývoj plodu a môže tiež podporovať zdravie ciev."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>2. Vitamín C</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitamín C je nevyhnutný pre udržanie zdravia krvných ciev a môže pomôcť aj pri prevencii kŕčových žíl počas tehotenstva. Tento vitamín je kľúčový pre tvorbu kolagénu, proteínu, ktorý je dôležitý pre zdravie žíl a ciev."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Dobré zdroje vitamínu C zahŕňajú:"}
              </p>
              <ul className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitamín C môže pomôcť podporovať zdravý prietok krvi a udržiavať cievnu elasticitu, čo môže zmierniť príznaky kŕčových žíl, ako je bolesť nôh od kolien dole alebo opuchy nôh."
                }
              </p>
              <h3 className={listItemClassName2}>3. Vitamín E</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitamín E je antioxidant, ktorý môže pomôcť chrániť bunky pred poškodením a podporovať zdravie ciev. Môže tiež pomôcť zlepšiť cirkuláciu krvi, čo je obzvlášť dôležité pri prevencii a manažmente kŕčových žíl."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Dobré zdroje vitamínu E zahŕňajú:"}
              </p>
              <ul className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitamín E môže pomôcť zmierniť príznaky ako bolesť kŕčových žíl alebo opuchanie nôh tým, že podporuje zdravú cirkuláciu."
                }
              </p>
              <h3 className={listItemClassName2}>4. Flavonoidy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Flavonoidy sú skupina rastlinných zlúčenín, ktoré majú antioxidačné a protizápalové vlastnosti. Môžu pomôcť posilniť steny žíl a zlepšiť cirkuláciu krvi."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Medzi flavonoidy, ktoré môžu byť obzvlášť prospešné pre zdravie žíl, patria:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Diosmín"}
                    </strong>
                    {
                      ": Tento flavonoid sa často používa na liečbu chronickej žilovej nedostatočnosti a hemoroidov. Môže pomôcť zlepšiť žilový tonus a znížiť zápal."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hesperidín"}
                    </strong>
                    {
                      ": Často sa používa v kombinácii s diosmínom. Môže pomôcť znížiť priepustnosť kapilár a zlepšiť mikrocirkuláciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Rutín"}
                    </strong>
                    {
                      ": Tento flavonoid môže pomôcť posilniť steny krvných ciev a zlepšiť cirkuláciu."
                    }
                  </p>
                  {items5.map((item, index) => (
                    <ListItem5 key={index} {...item} />
                  ))}
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tieto flavonoidy sa nachádzajú v mnohých ovociach a zelenine, ale môžu byť tiež dostupné ako doplnky stravy. Vždy konzultujte s lekárom pred začatím užívania akýchkoľvek doplnkov, najmä počas tehotenstva."
                }
              </p>
              <h3 className={listItemClassName2}>5. Omega-3 mastné kyseliny</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Omega-3 mastné kyseliny sú typ polynenasýtených tukov, ktoré sú dôležité pre mnohé funkcie v tele, vrátane podpory zdravia srdca a ciev. Môžu pomôcť zlepšiť obeh a zmierniť zápal, čo môže byť prospešné pri manažmente príznakov kŕčových žíl."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Dobré zdroje omega-3 mastných kyselín zahŕňajú:"}
              </p>
              <ul className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Vlašské orechy"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Omega-3 môžu pomôcť zmierniť príznaky ako bolesť v nohách alebo opuchy nôh tým, že podporujú zdravú cirkuláciu a znižujú zápal."
                }
              </p>
              <h3 className={listItemClassName2}>6. Zinok</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zinok je minerál, ktorý hrá dôležitú úlohu v mnohých telesných funkciách, vrátane hojenia rán a podpory imunitného systému. Môže tiež pomôcť podporovať zdravie ciev a zlepšovať cirkuláciu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Dobré zdroje zinku zahŕňajú:"}
              </p>
              <ul className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Tekvicové semienka"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zinok môže pomôcť pri manažmente príznakov kŕčových žíl tým, že podporuje celkové zdravie ciev a pomáha pri hojení."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Ďalšie prírodné prostriedky na zmiernenie príznakov kŕčových žíl"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Okrem doplnkov stravy existujú aj ďalšie prírodné prostriedky, ktoré môžu pomôcť zmierniť príznaky kŕčových žíl počas tehotenstva:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Kurkuma a zázvor</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kurkuma a zázvor sú korenia s protizápalovými vlastnosťami, ktoré môžu pomôcť zmierniť opuchy a zápal spojený s kŕčovými žilami. Môžu sa pridávať do jedál alebo užívať vo forme čaju."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Extrakt z gaštana konského"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Extrakt z gaštana konského obsahuje látky, ktoré môžu pomôcť posilniť steny žíl a zlepšiť cirkuláciu. Môže byť užitočný pri zmierňovaní príznakov ako bolesť nôh od kolien dolu alebo opuchy nôh."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3. Extrakt z listov ginkga biloba"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ginkgo biloba je známe svojimi účinkami na zlepšenie cirkulácie. Môže pomôcť zmierniť príznaky kŕčových žíl tým, že podporuje zdravý prietok krvi."
                }
              </p>
              <h3 className={listItemClassName2}>4. Bylinné čaje</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Niektoré bylinné čaje môžu pomôcť podporiť zdravie ciev a zlepšiť cirkuláciu. Medzi užitočné byliny patria:"
                }
              </p>
              <ul className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"List brezy"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vždy konzultujte s lekárom pred užívaním akýchkoľvek bylinných prípravkov počas tehotenstva!"
                }
              </p>
              <h2 className={listItemClassName}>Dôležité upozornenie</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je kľúčové si uvedomiť, že doplnky stravy by mali byť užívané pod dohľadom zdravotníckeho pracovníka a nie sú náhradou za vyváženú stravu alebo lekársku starostlivosť. Počas tehotenstva je obzvlášť dôležité konzultovať s lekárom pred začatím užívania akéhokoľvek nového doplnku stravy."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Niektoré doplnky stravy môžu mať vedľajšie účinky alebo interakcie s inými liekmi. Navyše, nie všetky doplnky stravy sú dôkladne testované na bezpečnosť počas tehotenstva."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ďalšie opatrenia na zmiernenie príznakov kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Okrem doplnkov stravy existuje niekoľko ďalších opatrení, ktoré môžu pomôcť zmierniť príznaky kŕčových žíl počas tehotenstva:"
                }
              </p>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Studené obklady"}
                    </strong>
                    {
                      ": Aplikácia studených obkladov na postihnuté oblasti môže pomôcť zmierniť bolesť a opuch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Záver</h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Môžu doplnky stravy úplne vyliečiť kŕčové žily počas tehotenstva?" +
                        " "}
                    </strong>
                    {
                      "Doplnky stravy môžu pomôcť zmierniť príznaky, ale nemajú schopnosť úplne vyliečiť kŕčové žily. Sú skôr podporným prostriedkom v komplexnej starostlivosti o zdravie žíl počas tehotenstva. "
                    }
                    <strong className="[color:inherit] break-words">
                      {"Kedy je najlepší čas na začatie užívania doplnkov stravy počas tehotenstva?" +
                        " "}
                    </strong>
                    {
                      "Je vhodné konzultovať s lekárom a začať užívanie doplnkov stravy ideálne už pred počatím alebo v prvom trimestri tehotenstva. Lekár môže vyhodnotiť váš zdravotný stav a poskytnúť vám vhodné usmernenia."
                    }
                  </p>
                </li>
                {items10.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Pamätajte, že každé tehotenstvo je jedinečné a to, čo funguje pre jednu ženu, nemusí fungovať pre druhú. Vždy je najlepšie konzultovať s vaším lekárom alebo pôrodnou asistentkou o najvhodnejšom prístupe k manažmentu kŕčových žíl počas vášho tehotenstva."
                }
              </p>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-4 lg:col-end-5 lg:row-start-7 lg:row-end-8">
            <div
              id="z3MsDD"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.jdoqocy.com/click-100810134-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fdetralex-1000-mg-peroralna-suspenzia-vo-vrecku-30-kusov%2F&cjsku=459157" target="_top"><img src="https://mojalekarensk.vshcdn.net/upload/de/tr/detralex-1000-mg-peroralna-suspenzia-vo-vrecku-30-kusov-2516382-1000x1000-square.jpg" border="0" alt="DETRALEX 1000 mg peror�lna suspenzia vo vrecku 30 kusov"></a><img src="https://www.tqlkg.com/image-100810134-13484074" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-8 max-lg:row-end-9 lg:col-start-4 lg:col-end-7 lg:row-start-5 lg:row-end-6">
            <div
              id="zNe9rc"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.tkqlhce.com/click-100810134-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Ffluxoven-500-mg-60-tabliet%2F&cjsku=495784" target="_top"><img src="https://mojalekarensk.vshcdn.net/upload/fl/ux/fluxoven-500-mg-60-tabliet-2460106-1000x1000-square.jpg" border="0" alt="FLUXOVEN 500 mg 60 tabliet"></a><img src="https://www.ftjcfx.com/image-100810134-13484074" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
