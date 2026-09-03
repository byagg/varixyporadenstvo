const listItemClassName =
  "font-heading text-ploy-neutral-inverse-500 font-bold break-words max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

type ListItemProps = {
  text: string;
  text_1: string;
  text_2: string;
};

function ListItem({ text, text_1, text_2 }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
      {text}
      {text_1}
      {text_2}
    </p>
  );
}

type ListItem2Props = {
  className: string;
  text: string;
};

function ListItem2({ className, text }: ListItem2Props) {
  return <p className={className}>{text}</p>;
}

type ListItem4Props = {
  text: string;
};

function ListItem4({ text }: ListItem4Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
      {text}
    </p>
  );
}

type ListItem5Props = {
  text: string;
  text_1: string;
  text_2: string;
  separator?: string;
};

function ListItem5({ text, text_1, text_2, separator }: ListItem5Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          {text}
          {text_1}
          {text_2}
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  { text: "", text_1: "", text_2: "" },
  {
    text: 'Okrem konkrétnych hodnôt ABPI, ktoré určujú úroveň kompresie, existuje hojne literatúry opisujúcej druhy kompresných materiálov a spôsob, akým sa kompresia aplikuje. Pôvodne sa verilo, že "gradovaná kompresia" (s najvyšším tlakom aplikovaným na členok a postupne sa znižujúcim tlakom kolenom, ako sa obvod končatiny zväčšuje ku lýtku) je správnou metódou aplikácie kompresie na základe Laplaceovho zákona, ktorý definuje tlaky pôsobiace na zakrivených povrchoch. Však práce Schurena a Mohra s použitím umelých nôh a tlakových snímačov ukázali, že použitie Laplaceovho zákona na výpočet týchto hodnôt nepresne predpovedá tlaky pod obväzom. Žiadny z testovaných obväzov nemohol poskytnúť spoľahlivú gradovanú kompresiu. Široko rozšírený názor, že správne aplikovaná kompresia by mala poskytovať tlak 40 mmHg na členku a 17 mmHg pod kolenom postupne, sa zakladá iba na teoretických matematických rovnicách, ale nie je podložený výsledkami experimentálnych štúdií.',
    text_1: "",
    text_2: "",
  },
  {
    text: "Schuren a Mohr neskôr preukázali, že dynamika účinného kompresného ošetrenia je vysvetlená Pascalovým zákonom: keď sa tlak aplikuje na tekutinu (sval alebo svalovú skupinu) v uzatvorenom nádobe (svalová fascia a kompresný obväz), dochádza k rovnakému zvýšeniu na každom ďalšom mieste v nádobe. Publikácie iných autorov neskôr podporili tieto koncepty a vyvrátili dogmy a kontroverzie v oblasti kompresnej terapie. Teraz sa verí, že progresívna kompresia (kde sa aplikuje nižší tlak na členok ako na lýtko) sa môže použiť na zlepšenie funkcie žilového čerpadla pri liečbe žilových vredov, aspoň u pohyblivých pacientov, a že je rovnako účinná ako tradičná gradovaná kompresia a dobre tolerovaná v prítomnosti periférnej artériovej choroby.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Aj keď je k dispozícii množstvo produktov, kompresné obväzy sa im v podstate delia na dva typy: elastické a neelastické. Elastické obväzy sa natiahnu a následne sa vrátia do svojej pôvodnej dĺžky, vyvíjajúc trvalý tlak na tkanivá. Preto vyvíjajú vysoký tlak v klude, ale nízky tlak pri cvičení, pretože sa natiahnu spolu s rozťahom lýtkového svalu. Naopak, neelastické obväzy vytvárajú po aplikácii tuhý rukáv a vyvíjajú nízky tlak v klude, pretože ďalej nekompresujú nohu, keď je tento tuhý rukáv vytvorený. Počas cvičenia však tuhý rukáv poskytuje odpor rozťahu lýtkového svalu a vytvára vysoký pracovný tlak.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Neelastická kompresia je účinnejšia pri znížení žilovej reflukcie a zlepšení funkcie žilového čerpadla, a v klude je lepšie tolerovaná. Neelastické materiály alebo krátkonatiahnuté viaczložkové obväzy vytvárajú veľké rozdiely medzi odpočinkovým a pracovným tlakom a vysoké tlakové špičky. Tieto obväzy sú pohodlné pri odpočinku a účinnejšie zlepšujú žilovú hemodynamiku v stoji a počas cvičenia svalov oproti elastickým obväzom alebo kompresným pančuchám.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Celkovo existuje dôkaz, že hojivé výsledky sú lepšie s kompresiou ako bez nej a že viaczložkové systémy sú účinnejšie ako systémy s jedným komponentom. Súhlasnými absolútnymi kontraindikáciami sú arteriálna okluzívna choroba, zlyhanie srdca a ABPI",
    text_1: " < ",
    text_2:
      "0,5. Nežiaduce udalosti spojené s kompresiou sú veľmi zriedkavé, ak sa kompresia používa správne a berú sa do úvahy kontraindikácie. Kompresia však nerieši etiológiu a súčasne je k dispozícii endovaskulárne ošetrenie na zlepšenie dlhodobého udržiavania tým, že spomaľuje progresiu ochorenia a znižuje opakovania. K dispozícii sú tiež venoaktívne lieky (flebotoniká), ako je pentoxifylín, mikronizovaná purifikovaná frakcia flavonoidov (detralex) a sulodexid, ktoré zlepšujú žilový tonus/kontraktilitu a mikrocirkuláciu a znižujú edém a zápal.",
  },
  { text: "", text_1: "", text_2: "" },
];

export const textSegments: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Rôzne diagnostické nástroje používané pri vyšetrení na hodnotenie chronických žilových ochorení boli podrobne popísané v literatúrnych prehľadoch na túto tému a v rámci tejto štúdie nie je v našom záujme opisovať všetky testovacie metódy. Všeobecným princípom je, že venózny a artériový systém musia byť posúdené na potvrdenie diagnózy a výber vhodnej liečby. Ak je prítomný trvalý edém, lymfatický systém bude pracovať na absorpcii nahromadených tekutín a s časom sa môže poškodiť v dôsledku chronického zápalu sprevádzajúceho chronické žilové ochorenie. Preto sa v takýchto prípadoch môže odporúčať posúdenie priechodnosti lymfatického systému.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Klasifikácia lymfedému je podrobne popísaná v nedávnom kapitole knihy od Magnana a Niezgody. Bežné príznaky a príznaky postihnutia lymfatického systému sú edém, ktorý sa rozširuje nad kolenom, a predchádzajúca anamnéza (napríklad operácia, ožiarenie, nádor, trauma). Ak je žiadané potvrdenie alebo plánovanie chirurgického zákroku pomocou zobrazovacích metód, lymfoscintigrafia je momentálne metódou zlatého štandardu. Pre chronické opuchy dolných končatín bol navrhnutý špecifický diagnostický algoritmus Gasparisom a spol., ktorý zahŕňa aj lymfedém. Skúmanie žilového systému je možné pomocou žilovej dopplerovej ultrasonografie, colordopplerovej ultrasonografie, vzduchovej pletyzmografie alebo venografie.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-5 max-[921px]:mb-8",
    text: "Skúmanie artériového systému zahŕňa preskúmanie mikro- a makrocirkulácie. Mikrocirkulácia je hodnotená pomocou merania transkutánneho tlaku kyslíka (TcPO2), laserovej doplerovej flowmetrie a merania transkutánneho tlaku oxidu uhličitého (TcPCO2) a kapilaroskopie. Hodnotenie makrocirkulácie zahŕňa hodnotenie ABPI a tlaku na prstoch, doplerovské vlny arteriálneho prúdu, duplexnú ultrasonografiu, angiografiu a magnetickú rezonanciu.",
  },
];

export const textSegments2: ListItem2Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Kompresná terapia je považovaná za kľúčovú súčasť štandardnej starostlivosti o vredy na dolných končatinách, avšak malá časť prípadov na ňu nereaguje. Prvý algoritmus, s ktorým sme sa stretli vo výsledkoch našej literárnej štúdie, bol publikovaný Korstanjou v roku 1995 a bol navrhnutý ako usmernenie na výber najlepšej terapeutickej možnosti pre vredy na dolných končatinách, ktoré sú rezistentné voči kompresnej terapii (podľa autora ide o menej ako 10% prípadov). Autor zdôrazňuje, že chirurgický alebo medicínsky manažment je len paliatívny (neexistuje skutočné liečenie žilového zlyhania), preto by sa tieto možnosti mali stále vykonávať spolu s kompresiou. Možné sú niekoľko zásahov: skleroterapia, ligácia povrchového žilového kmene, stripping dlhého povrchového žilového kmeňa, kožné špongie, podfasciálna ligácia hlbokých perforantových žíl a žilová rekonštrukcia. Jednoduché výkony by sa mali vždy vykonávať pred pokusmi o zložitejšie a algoritmus môže slúžiť ako usmernenie pri výbere najvhodnejšej možnosti.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Ďalší algoritmus bol publikovaný neskôr v roku 23 vo štúdii zameranej na overenie klinickej účinnosti a nákladovej efektívnosti usmernení pre vredy na dolných končatinách vo Spojených štátoch a Spojenom kráľovstve. Táto štúdia ukázala, že zavedenie usmernení na diagnózu a liečbu vredov na dolných končatinách viedlo k zlepšeniu diagnózy, skráteniu doby hojenia a zvýšeniu hojivosti, čo viedlo k nižším nákladom. Neskôr navrhnutý algoritmus od Thomasa z roku 2013 sa zameriava na posúdenie prítomnosti artériového ochorenia pred aplikáciou kompresie a uvádza, že približne polovica pacientov s klinickými príznakmi chronického žilového zlyhania má nejakú formu artériovej poruchy.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: 'V roku 2014 Vowden a Vowden zverejnili "preferovanú liečebnú cestu", pri ktorej sa používa členkovo-brachiálny index (ABPI) na určenie úrovne kompresie (po potvrdení žilového ochorenia), potom sa používa žilová duplexná ultrasonografia na určenie potreby chirurgického zákroku / ablácie a ak je žilové ochorenie opraviteľné, chirurgia sa vykonáva na základe zlepšenia vredu, tzn. pred hojením, ak sa vred nezlepšuje, alebo sa odkladá, ak je vred hojivý iba s kompresiou.',
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "V roku 2014 ponúkli Eberhardt a Raffetto zjednodušený prehľad pre diagnostiku a liečbu chronického žilového zlyhania na základe patofyziologického mechanizmu, ktorý sa používa, keď sa prejavujú príznaky a príznaky chronického žilového zlyhania (nie je nutné čakať na vredy). Prístup spočíva vo využívaní konzervatívnej liečby s kompresnou terapiou a pokračovaní v testovaní, ak odpoveď nie je uspokojivá alebo ochorenie pokračuje. Neinvazívne testy (duplex a/alebo vzduchová pletyzmografia) umožňujú určiť, či je prítomná obštrukcia, reflux alebo dysfunkcia svalového čerpadla a následne viesť ďalšiu liečbu.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: 'V roku 2015 publikovala skupina expertov pracujúcich na podporu širšieho využívania kompresnej terapie konsenzusový dokument, ktorý navrhol algoritmus, ktorý posudzuje etiológiu vredov a rozlišuje medzi "jednoduchými" a "komplexnými" vredmi na dolných končatinách so zmiešanou etiológiou. Tento algoritmus potom pomáha určiť ciele hojenia (jednoduché vredy sa očakávajú hojiť do 12 týždňov, komplexné vredy sa očakávajú hojiť do 18 týždňov, a doba hojenia zmiešaných vredov závisí od základnej etiológie, sprievodných ochorení a životného štýlu).',
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Publikácia od Wittensa a kol. z roku 2015, podobne ako publikácia od Eberhardta a Raffetta z predchádzajúceho roka, ponúkla algoritmus pre manažment všetkých štádií chronického žilového zlyhania (vrátane predúrazového štádia): testy sa používajú, keď pacient prejavuje symptómy, aby sa rozlíšilo medzi povrchovou a hlbokou žilovou patológiou. Následne sa určuje lokalizácia a presná povaha problému, aby sa vybrala správna intervenčná metóda. Ďalší algoritmus z roku 2015 od Hedayatiho a kol. sa špecificky zaoberá vredmi s miešanou etiológiou; článok tiež diskutuje možné zákroky na riešenie artériovej choroby a refluxu žíl.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "V roku 2016 Wound, Ostomy and Continence Nurses Society (WOCN) vymenovala pracovnú skupinu (20 expertov z konsenzusového panelu a 21 expertov na validáciu obsahu), ktorá vypracovala algoritmus pre kompresiu pre primárnu prevenciu, liečbu a prevenciu opakujúcich sa vredov na dolných končatinách u pacientov s chronickým žilovým zlyhaním. Táto práca zahŕňala literárne hľadanie z obdobia 2005 až 2015 na identifikáciu klinických usmernení založených na dôkazoch pre prevenciu a manažment vredov na dolných končatinách a chronického žilového zlyhania; osem usmernení spĺňalo kritériá zahrnutia a bolo použitých na zostavenie algoritmu. Odkazuje aj na predchádzajúcu publikáciu (Wittens a kol.) a správy, ktoré sa týkajú diagnózy a manažmentu žilových vredov.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-6 max-[921px]:mb-8",
    text: "Okrem týchto publikovaných algoritmov boli tiež uvedené štúdie, ktoré sa zaoberali konkrétnymi aspektmi manažmentu vredov na dolných končatinách. Štúdia z roku 2014 od Saha a col. sa zaoberala účinnosťou kompresnej terapie a porovnávala účinok dvoch rôznych metód kompresie na hojenie vredov. Ďalšia štúdia od Héberta a col. z roku 2016 sa zamerala na hodnotenie účinnosti a bezpečnosti kompresie s použitím dvoch rôznych typov kompresných pančúch. Tieto štúdie prispievajú k poznaniu o tom, ako rôzne spôsoby kompresie ovplyvňujú hojenie vredov a poskytujú praktické usmernenia pre klinický manažment.",
  },
];

export const items4: ListItem4Props[] = [
  {
    text: "Algoritmus je sada pokynov určených na vykonanie konkrétnej úlohy a zvyčajne je prezentovaný vo forme rozhodovacích bodov postupne. Liečebné algoritmy umožňujú rozložiť zložitý proces rozhodovania na sekvenciu krokov a poskytujú usmernenie počas celého postupu. V priebehu rokov bolo publikovaných niekoľko algoritmov týkajúcich sa diagnostiky a/alebo liečby vredov na dolných končatinách (vrátane vredov s miešanou artériovou zložkou) a v tejto štúdii popisujeme túto literatúru. Okrem článkov, ktoré popisujú algoritmy, boli tiež publikované niekoľko dokumentov s usmerneniami a konsenzusových odporúčaní od vládnych agentúr alebo odborných spoločností týkajúcich sa vredov na dolných končatinách (niektoré z nich obsahujú aj algoritmy). Nižšie tiež prehľadáme tieto dokumenty.",
  },
  {
    text: "Medzi všetkými analyzovanými článkami sme identifikovali celkovo 26 článkov, ktoré predstavovali buď klasifikačný systém (diskutovaný v časti Background), algoritmus týkajúci sa liečby rán na dolných končatinách (vrátane opisu CEAP klasifikácie uvedenej vyššie) alebo odporúčania/ konsenzusové dokumenty. Sedem článkov poskytovalo podrobné opisy klasifikačných systémov, jedenásť článkov navrhovalo algoritmy a dvanásť bolo pôvodnými usmerneniami, sumarizujúcimi usmerneniami, konsenzusovými dokumentmi alebo článkami diskutujúcimi alebo sumarizujúcimi usmernenia alebo konsenzusové dokumenty.",
  },
  {
    text: "Veľký počet publikácií v tejto oblasti zameranej na pokyny a usmernenia odráža zložitosť a komplexnosť liečby vredov na dolných končatinách. Odborníci sa všeobecne zhodujú na tom, že v praxi existuje značné rozmanitosť a že kompresia je nedostatočne využívaná, napriek tomu, že je považovaná za terapiu zlatého štandardu.",
  },
  { text: "" },
];

export const items5: ListItem5Props[] = [
  {
    text: "Implementácia smernice pre liečbu vredov na dolných končatinách vedie k zlepšeniu rýchlosti hojenia.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Správna diagnóza je nevyhnutná pre výber vhodnej liečby pri vredoch na dolných končatinách a pri prítomnosti zmiešaných etiológií je potrebný multidisciplinárny tím.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Kompresia je základným pilierom terapie pri CVD a pri vredoch na dolných končatinách; najúčinnejšie sú viaczložkové, neelastické systémy.",
    text_1: "",
    text_2: "",
  },
  {
    text: "V literatúre sa uvádzajú tri absolútne kontraindikácie kompresie: prítomnosť artériovej okluzívnej choroby, srdcové zlyhanie alebo ABPI",
    text_1: " <",
    text_2:
      "0,5. Avšak v klinickej praxi môžu byť pacienti so srdcovým zlyhaním a dobrou ejekčnou frakciou liečení kompresiou. Tiež môže byť ABPI stále nízke aj po vložení stentu na obnovenie primeranej prietokovej kapacity. Preto je rozhodujúce individuálne hodnotenie pacienta a pre špecifické zložité prípady je potrebný klinický úsudok a komplexný multidisciplinárny prístup k liečbe.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zjtYiN"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako pristupovať k vredu predkolenia?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {"Medicínsky pohľad na vred predkolenia."}
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">13 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zs8uo8"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(13007px,auto)_minmax(16px,auto)_minmax(320px,auto)_1fr] max-lg:px-4 lg:min-h-[392.5rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_12.6634%_35.2124%_18.4641%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(5520px,auto)_minmax(166px,auto)_minmax(121px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
            <div
              id="z6qAaf"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="forest trees marked with question marks"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="forest trees marked with question marks"
                  src="/external-assets/864d589a1c7faa1c.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="forest trees marked with question marks"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="forest trees marked with question marks"
                  src="/external-assets/fa376494495ee9e0.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-5 lg:col-start-2 lg:col-end-5 lg:row-end-6"
          >
            <div
              id="zcR4uv"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              {items4.map((item, index) => (
                <ListItem4 key={index} {...item} />
              ))}
              <h3 className={listItemClassName}>
                {
                  "Publikované algoritmy pre klinický manažment vredov na dolných končatinách a chronického žilového zlyhania"
                }
              </h3>
              {textSegments2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>
                {"Zhrnutie algoritmov a usmernení"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "V tejto štúdii sme zhrnuli viacero publikovaných algoritmov a usmernení týkajúcich sa diagnostiky a liečby vredov na dolných končatinách. Tieto algoritmy a usmernenia majú za cieľ pomôcť lekárom pri rozhodovaní o najvhodnejšej liečbe a manažmente pacientov s touto diagnózou. Zohľadňujú rôzne aspekty, ako je hodnotenie artériovej ochorenia, výber kompresnej terapie a potreba chirurgického zákroku. Práca zameraná na vývoj a aktualizáciu týchto algoritmov je dôležitá, aby sa zabezpečila najlepšia možná starostlivosť a dosiahli sa optimálne výsledky u pacientov s vredmi na dolných končatinách."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8" />
              <h2 className={listItemClassName2}>Diagnosticke metódy</h2>
              {textSegments.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>Liečba</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Kompresia je uznávaná ako základná liečba vredov na dolných končatinách (VLUs), ale často sa nedostatočne využíva z obavy z komplikácií u pacientov s súčasnou artériovou chorobou. Niekoľko článkov opisujúcich algoritmy a konsenzusové dokumenty poskytuje usmernenia týkajúce sa kompresie na základe merania ABPI. Tieto zdroje však nie sú úplne zhodné, pokiaľ ide o presné hodnoty prahu ABPI."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  'Iní autori tvrdia, že absolútne hodnoty tlaku na členku sú relevantnejšie ako ABPI, pretože záleží na tom, že kompresný tlak nepresahuje miestny perfúzny tlak artérií. Napríklad výrok z konsenzusového dokumentu navrhuje, aby sa "upravená kompresia aplikovala u pacientov s miernejšou artériovou chorobou, t. j. ABPI'
                }
                {">"}
                {"0,5 alebo absolútny tlak na členku" + " "}
                {">"}
                {'60 mmHg." Absolútna hodnota systolického tlaku na členku má v praxi väčší význam ako ABPI, pretože charakterizuje perfúzny tlak dolnej časti nohy nezávisle od systémovej krvného tlaku. Napríklad ABPI môže byť výsledkom tlaku na členku 50 mmHg a tlaku na ramene 100 mmHg, alebo tlaku na členku 90 mmHg a tlaku na ramene 180 mmHg. Kompresný tlak 40 mmHg by bol nebezpečný v prvom príklade, ale bezpečný v druhom prípade.' +
                  " "}
                <em className="[color:inherit] break-words">
                  {" " + "Odporúčania pre liečbu tab 1"}
                </em>
              </p>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"BUDÚCE SMERY"}
                </strong>
              </h2>
              <h3 className={listItemClassName}>
                {"Spoločné rysy medzi algoritmami"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Zhrnutie spoločných rysov algoritmov pre diagnostiku a liečbu vredov na dolných končatinách (VLUs) možno zhrnúť nasledovne: Potvrďte žilovú etiológiu a posúďte vredy v kontexte závažnosti chronického ochorenia. Posúďte možnú artériovú zložku (zmiešanú etiológiu), aby ste videli, či je potrebné upraviť kompresiu (na miernejšiu kompresiu) alebo ju vyhnúť a či je potrebné odkázať na špecialistu. Na túto rozhodnutie sa zvyčajne používa ABPI. Anatomicky lokalizujte miesto (miesta) poruchy a zvážte operačné ošetrenie s cieľom odstrániť žilový reflux alebo obštrukciu. Poskytujte ošetrenie rán a kompresnú terapiu pomocou viaczložkového systému."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Medzi dôležité dodatočné úvahy uvedené v nedávnych publikáciách patrí použitie klasifikácie CEAP na určenie závažnosti chronického žilového nedostatočnosti (CVI) a pridanie absolutného tlaku na členku na správne posúdenie potenciálneho arteriálneho ochorenia spolu s informáciami o ABPI, ako aj tlaku na prstoch u pacientov s cukrovkou."
                }
              </p>
              <h2 className={listItemClassName2}>Odporúčania pre prax</h2>
              <h3 className={listItemClassName}>Potvrďte artériový prietok:</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Uistite sa, že artériový prietok je dostatočný, pretože ak je ohrozený, kompresia môže byť nebezpečná a škodlivá. Dodržiavajte pokyny výrobcu kompresného produktu (ABPI) a klinický úsudok (hodnotenie pulzu; konzultácia s cévnym chirurgom, ak je potrebné ďalšie testy). Vyberte viaczložkový kompresný systém: Pre veľmi aktívnych pacientov alebo pre tých, ktorí majú krehkejší artériový prísun, je správnou voľbou systém so skráteným natiahnutím (neelastický). Pre menej aktívnych pacientov je viaczložkový systém so zväčšeným natiahnutím (elastický) vhodnejší."
                }
              </p>
              <h3 className={listItemClassName}>Aplikujte kompresný systém:</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Toto by mal vykonávať zdravotnícky profesionál, ktorý má odbornú prípravu na aplikáciu konkrétneho používaného produktu (na základe kompetencií)."
                }
              </p>
              <h3 className={listItemClassName}>
                {"Zachovajte multidisciplinárny prístup:"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-7 max-[921px]:mb-8">
                {
                  "Najideálnejšie je zapojiť tímový prístup, vrátane poskytovateľa ošetrenia rán, cévneho chirurga, ošetrovateľstva a fyzioterapie, aby sa vytvoril individuálny plán liečby, ktorý je najúčinnejší pre každého jednotlivého pacienta."
                }
              </p>
              <h2 className={listItemClassName2}>ZÁVEREČNÉ POZNÁMKY</h2>
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
                    {
                      "Kompresia sama osebe nevyrieši základné ochorenie a môže byť nevyhnutné vykonať intervenčné zákroky na jeho korekciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName2}>ZHRNUTIE</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Vredy na dolných končatinách môžu súvisieť s rôznymi základnými patológiami (žilová nedostatočnosť, arteriálna choroba, diabetes) alebo ich kombináciou. Správna hodnotiaca diagnóza je dôležitá pre výber vhodného liečebného postupu. Pri podozrení na žilové ochorenie by sa mali použiť Dopplerov a duplexný sken, aby sa zhodnotili žilový a artériový obeh a potvrdila diagnóza."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Kompresia je základom liečby pre symptomatické CVD a pre žilové vredy. Je však nedostatočne využívaná kvôli nedostatku informácií u zdravotníckych pracovníkov, nejasným odkazovým cestám, miestnej nedostupnosti kompresie a neochote pacientov prijať kompresiu. Strach z nežiaducich účinkov môže byť ďalším dôvodom nedostatočného využitia, ale tieto účinky sú veľmi zriedkavé, ak sa kompresia používa správne a berú sa do úvahy kontraindikácie. Kompresia však nie je sama o sebe dlhodobým riešením a možnosť intervenčnej korekcie by sa mala ponúknuť čo najskôr, aby sa predišlo alebo spomalilo pokročenie ochorenia a znížilo sa riziko opakovania."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                <br className="break-words" />
              </p>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] row-end-7 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 lg:col-start-3 lg:col-end-4 lg:row-start-5">
            <div
              id="zT5Sna"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-72"
            >
              <div
                rel="nofollow"
                title="tab 1"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="tab 1"
                  src="/migrated-assets/cb4a84704df30066447f.jpg"
                  height="287"
                  width="431"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="tab 1"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
              >
                <img
                  alt="tab 1"
                  src="/migrated-assets/22baf1fd6a31ff2533af.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
