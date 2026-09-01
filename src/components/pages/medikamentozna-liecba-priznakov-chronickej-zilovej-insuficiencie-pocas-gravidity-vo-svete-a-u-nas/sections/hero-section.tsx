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

type ListItem4Props = {
  text: string;
  separator?: string;
};

function ListItem4({ text, separator }: ListItem4Props) {
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
    text: "Medikamentózna liečba príznakov chronickej žilovej insuficiencie počas gravidity je komplexnou témou, ktorá vyžaduje individuálny prístup. Zatiaľ čo vo svete i na Slovensku existujú účinné lieky na zmiernenie príznakov, ich použitie počas tehotenstva musí byť starostlivo zvážené.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Kľúčom k úspešnej liečbe je kombinácia medikamentóznej terapie s nefarmakologickými prístupmi, ako je kompresná terapia, cvičenie a úprava životného štýlu. Je to ako skladanie puzzle - každý kúsok má svoje miesto v celkovom obraze zdravia tehotnej ženy.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Vždy je dôležité konzultovať s odborníkom a dodržiavať jeho odporúčania. Lekár môže najlepšie posúdiť individuálne riziko.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Kŕčové žily (varixy)",
    text_1:
      ": Rozšírené, pokrútené žily, ktoré sú viditeľné pod povrchom kože.",
  },
  {
    text: "Opuchy (edémy)",
    text_1:
      ": Najmä v oblasti členkov a nôh, ktoré sa zvyčajne zhoršujú počas dňa.",
  },
  {
    text: "Bolesť a ťažkosť v nohách",
    text_1: ": Pocit, akoby vaše nohy boli vyrobené z olova.",
  },
  {
    text: "Unavené nohy",
    text_1: ": Pocit únavy v nohách, ktorý sa zhoršuje počas dňa.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Nepríjemné pocity v oblasti postihnutých žíl.",
  },
  { text: "Nočné kŕče", text_1: ": Bolestivé sťahy svalov, najmä v lýtkach." },
];

export const items3: ListItem2Props[] = [
  {
    text: "Diosmín",
    text_1:
      ": Tento flavonoid sa často používa v kombinácii s hesperidínom. Pomáha znižovať zápal a opuch v žilách.",
  },
  {
    text: "Hesperidín",
    text_1:
      ": Ďalší flavonoid, ktorý sa často kombinuje s diosmínom. Spoločne tvoria účinnú kombináciu na zlepšenie žilového tonusu.",
  },
  {
    text: "Oxerutín",
    text_1:
      ": Tento syntetický derivát rutínu pomáha znižovať priepustnosť kapilár a zlepšuje mikrocirkuláciu.",
  },
  {
    text: "Troxerutín",
    text_1:
      ": Podobne ako oxerutín, aj tento liek pomáha znižovať priepustnosť kapilár a zmierňovať opuchy.",
  },
];

export const items4: ListItem4Props[] = [
  { text: "Zlepšujú prietok krvi v žilách" },
  { text: "Posilňujú žilové steny" },
  { text: "Znižujú zápal a opuch" },
  { text: "Zmierňujú bolesti a ťažkosť v nohách" },
];

export const items5: ListItem2Props[] = [
  {
    text: "Kompresná terapia",
    text_1:
      ": Nosenie kompresných pančúch alebo ponožiek môže významne zlepšiť cirkuláciu a zmierniť opuchy. Je to, akoby ste dali vašim žilám jemné, ale účinné objatie.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Pravidelné zdvíhanie nôh nad úroveň srdca môže pomôcť zlepšiť žilový návrat. Predstavte si to ako gravitačnú pomoc pre vaše žily.",
  },
  {
    text: "Cvičenie",
    text_1:
      ": Mierne cvičenie, ako je chôdza alebo plávanie, môže pomôcť zlepšiť cirkuláciu. Je to ako dať vašim žilám jemný, ale účinný workout.",
  },
  {
    text: "Úprava životného štýlu",
    text_1:
      ": Vyhýbanie sa dlhému státiu alebo sedeniu, udržiavanie zdravej hmotnosti a nosenie pohodlného oblečenia môže pomôcť zmierniť príznaky.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Nedostatok výskumu",
    text_1:
      ": Existuje obmedzené množstvo výskumov o dlhodobých účinkoch flebotoník na plod. Je to ako plávať v neznámych vodách - musíme byť opatrní.",
  },
  {
    text: "Potenciálne nežiaduce účinky",
    text_1:
      ": Aj keď sú zriedkavé, môžu sa vyskytnúť nežiaduce účinky ako nevoľnosť, bolesť hlavy alebo kožné reakcie.",
  },
  {
    text: "Interakcie s inými liekmi",
    text_1:
      ": Flebotoniká môžu interagovať s inými liekmi, ktoré tehotná žena užíva. Je to ako miešanie rôznych ingrediencií v kuchyni - nie všetky kombinácie sú vhodné.",
  },
  {
    text: "Individuálne rozdiely",
    text_1:
      ": Každé tehotenstvo je jedinečné a to, čo funguje pre jednu ženu, nemusí fungovať pre druhú.",
  },
];

export const items7: ListItem2Props[] = [
  {
    text: "Nové flebotoniká",
    text_1:
      ": Vývoj nových liekov s lepším bezpečnostným profilom pre tehotné ženy.",
  },
  {
    text: "Kombinované terapie",
    text_1: ": Skúmanie synergických účinkov rôznych liečebných metód.",
  },
  {
    text: "Personalizovaná medicína",
    text_1:
      ": Prispôsobenie liečby individuálnym potrebám a genetickému profilu každej pacientky.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zpAlts"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Medikamentózna liečba príznakov chronickej žilovej insuficiencie počas gravidity vo svete a u nás"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento odborný článok sa venuje medikamentóznej liečbe chronickej žilovej insuficiencie počas tehotenstva, porovnávajúc prístupy vo svete a na Slovensku. Poskytuje komplexný prehľad o flebotonikách, ich účinkoch a bezpečnosti v tehotenstve, ako aj o alternatívnych metódach liečby. Článok zdôrazňuje dôležitosť individuálneho prístupu a konzultácie s lekárom pri liečbe chronickej žilovej insuficiencie v gravidite."
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
        id="z681L3"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(8145px,auto)_1fr] max-lg:px-4 lg:min-h-[303.75rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(4355px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zJstt7"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="pregnant woman near tree"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="pregnant woman near tree"
                  src="/external-assets/96774afdd5cb9621.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="pregnant woman near tree"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="pregnant woman near tree"
                  src="/external-assets/752ff32914a6260b.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
          >
            <div
              id="zeucfG"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Gravidita (tehotenstvo) je obdobie plné zmien a nových výziev pre ženské telo. Jednou z týchto výziev môže byť aj chronická žilová insuficiencia, stav, ktorý môže významne ovplyvniť kvalitu života budúcej matky. V tomto článku sa zameriame na medikamentóznu liečbu príznakov tohto ochorenia počas tehotenstva, pričom porovnáme prístupy vo svete a na Slovensku."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Chronická žilová insuficiencia v tehotenstve: Keď žily potrebujú extra podporu"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Chronická žilová insuficiencia (CVI) je stav, pri ktorom žily v dolných končatinách nedokážu efektívne pumpovať krv späť k srdcu. Počas tehotenstva sa riziko vzniku alebo zhoršenia tohto stavu zvyšuje. Je to akoby ste sa snažili vytlačiť vodu z podzemného parkoviska na strechu mrakodrapu pomocou starého vedra, a zrazu by sa objem vody zdvojnásobil."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Príznaky chronickej žilovej insuficiencie počas gravidity"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "CVI sa môže prejavovať rôznymi spôsobmi, pričom tehotenstvo môže tieto príznaky ešte zvýrazniť:"
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
                  "Tieto príznaky môžu byť zvýraznené počas gravidity kvôli hormonálnym a fyziologickým zmenám v tele ženy. Zvýšený objem krvi, rastúca maternica a hormonálne zmeny všetky prispievajú k zvýšenému tlaku na žily v dolných končatinách."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Medikamentózna liečba vo svete: Globálny prístup k problému"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vo svete sa na liečbu príznakov CVI počas tehotenstva používajú rôzne lieky. Najčastejšie ide o skupinu liekov nazývanú flebotoniká."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Flebotoniká: Spojenci v boji proti žilovej insuficiencii"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Flebotoniká sú lieky, ktoré zlepšujú prietok krvi v žilách a posilňujú žilové steny. Môžeme si ich predstaviť ako malých pomocníkov, ktorí posilňujú steny našich žíl a pomáhajú im efektívnejšie pumpovať krv."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Medzi najčastejšie používané flebotoniká patria:"}
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
              <h3 className={listItemClassName2}>
                {"Účinnosť a bezpečnosť flebotoník v tehotenstve"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Medikamentózna liečba príznakov CVI počas gravidity sa ukázala ako účinná pri zmiernení príznakov, ako sú opuchy a bolesti v nohách. Je to, akoby ste dali vašim žilám extra pár rúk na pomoc pri pumpovaní krvi."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Avšak bezpečnosť týchto liekov v tehotenstve je kľúčovou otázkou. Niektoré štúdie naznačujú, že používanie flebotoník v tehotenstve môže byť bezpečné, ale je nevyhnutné konzultovať s lekárom pred začatím akéhokoľvek liečebného režimu. Je to ako keď si chcete kúpiť nové auto - potrebujete odborný názor pred tým, ako urobíte rozhodnutie."
                }
              </p>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-2xl">
                {
                  "Medikamentózna liečba na Slovensku: Domáci prístup k problému"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na Slovensku je prístup k medikamentóznej liečbe CVI počas tehotenstva podobný ako vo svete, ale s určitými špecifikami."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Prístup a dostupnosť liečby"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na Slovensku existuje viacero možností pre medikamentóznu liečbu príznakov CVI počas gravidity. Lekári môžu predpisovať rôzne flebotoniká, ktoré sú dostupné na lekársky predpis."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Najčastejšie používaným liekom je kombinácia diosmínu a hesperidínu, známa pod obchodným názvom Detralex. Tento liek je široko dostupný a často predpisovaný na liečbu príznakov CVI."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Používané lieky a ich účinky"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V rámci medikamentóznej liečby na Slovensku sa používajú podobné lieky ako vo svete. Flebotoniká, ako napríklad diosmín a hesperidín, sú často predpisované na zmiernenie príznakov CVI počas gravidity."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Tieto lieky majú podobné účinky ako ich globálne náprotivky:"}
              </p>
              <ul className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je to, akoby ste dali vašim žilám posilňovací tréning a zároveň im poskytli extra podporu pri ich každodennej práci."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Porovnanie medikamentóznej liečby vo svete a na Slovensku"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Medikamentózna liečba príznakov CVI počas gravidity sa v mnohých aspektoch podobá vo svete i na Slovensku. Používané lieky sú podobné a majú rovnaké ciele - zmierniť príznaky a zlepšiť kvalitu života tehotných žien."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hlavné rozdiely môžu byť v dostupnosti niektorých konkrétnych liekov a v prístupe k ich predpisovaniu. Zatiaľ čo v niektorých krajinách môžu byť k dispozícii širšie možnosti liečby, na Slovensku sa často spolieha na osvedčené a dobre známe lieky, ako je Detralex."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Alternatívne a doplnkové metódy liečby"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Okrem medikamentóznej liečby existuje niekoľko alternatívnych a doplnkových metód, ktoré môžu pomôcť zmierniť príznaky CVI počas tehotenstva:"
                }
              </p>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Diéta"}
                    </strong>
                    {
                      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť znížiť opuchy a podporiť zdravý krvný obeh."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Bezpečnosť a riziká medikamentóznej liečby v tehotenstve"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Bezpečnosť je prvoradá pri akejkoľvek liečbe počas tehotenstva. Pri používaní flebotoník v tehotenstve existujú určité obavy a riziká, ktoré je potrebné zvážiť:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Preto je nevyhnutné, aby akékoľvek rozhodnutie o medikamentóznej liečbe CVI počas tehotenstva bolo urobené po dôkladnej konzultácii s lekárom."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Budúcnosť liečby CVI v tehotenstve"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Výskum v oblasti liečby CVI počas tehotenstva neustále napreduje. Vedci skúmajú nové lieky a terapeutické prístupy, ktoré by mohli byť ešte účinnejšie a bezpečnejšie."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Niektoré sľubné oblasti výskumu zahŕňajú:"}
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Nové aplikačné metódy"}
                    </strong>
                    {
                      ": Vývoj nových spôsobov podávania liekov, ktoré by mohli byť účinnejšie a s menším rizikom systémových účinkov."
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
