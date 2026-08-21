const listItemClassName =
  "w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName3 =
  "self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[12.4688rem]";
const listItemClassName4 =
  "w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";

/**
 * @ployComponent
 * @ployComponentId ako-rozpoznat-priciny-opuchu-dolnych-koncatin-a-zvolit-vhodnu-terapiu-hero-section
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

type ListItem4Props = {
  text: string;
  text_1: string;
  text_2: string;
};

function ListItem4({ text, text_1, text_2 }: ListItem4Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
      {text}
      {text_1}
      {text_2}
    </p>
  );
}

type ListItem5Props = {
  text: string;
  separator?: string;
};

function ListItem5({ text, separator }: ListItem5Props) {
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
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Hodnotenie zahŕňa podrobnejšiu anamnézu a fyzikálne vyšetrenie žilového a lymfatického systému, ako aj duplexný ultrazvuk (DUS) dolných končatín. Hodnotenie žilového systému zahŕňa zobrazovanie pre reflux a obštrukciu. Duplexný ultrazvuk ponúka dobrú diferenciálnu diagnózu a môže odhaliť aj iné príčiny, ako sú cysty, nádory, hematómy, výpotky atď. Ak sa zistí žilová patológia, mala by sa vykonať správna klasifikácia chronického žilového ochorenia pacienta pomocou CEAP klasifikácie. Pacienti s pokročilým žilovým ochorením (chronická žilová nedostatočnosť alebo C3–C6) a opuchom zvyčajne trpia kombinovaným žilovým a lymfatickým ochorením. Dnes sa uznáva, že viac ako 90 % resorpcie filtrátu z kapilár sa uskutočňuje prostredníctvom lymfatického systému a nie prostredníctvom venulov. Zvýšené filtrovanie spôsobené žilovou hypertenziou môže preťažiť kapacitu lymfatického systému a viesť k opuchu. Ak tento stav pretrváva dlhú dobu, môže dôjsť k nezvratnému poškodeniu lymfatického systému a opuch, ktorý sa nezlepší po odstránení žilovej patológie, sa klinicky označuje ako flebolymfedém. Neukročená žilová hypertenzia zvyšuje filtráciu kapilár, čo môže nakoniec preťažiť transport lymfatickej tekutiny a viesť k klinickému flebolymfedému. Je uznávané, že žilové ochorenie týmto mechanizmom, a nie rakovina a jej terapie, je najčastejšou príčinou lymfedému na západe.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Ak sa príčina opuchu zjavne zakladá na žilovom ochorení, alebo ak žilová choroba nie je identifikovaná pri DUS dolných končatín alebo ak závažnosť žilových nálezov nevysvetľuje úplne stupeň opuchu, odporúča sa DUS žil panvových. DUS sa odporúča aj v prípade nedávno pomalého rozvoja jednostranného alebo obojstranného opuchu u starších pacientov, ktorý nie je inak vysvetlený, aby sa vylúčili retroperitoneálne hmoty, ktoré stláčajú IVC alebo iliacové žily v brušnej a panvovej oblasti.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Obezita môže funkčne spôsobiť obštrukciu iliacových žíl a IVC, čo vedie k opuchu so všetkými stigmami CVD bez identifikovanej žilovej choroby v infrainguinálnej oblasti. Hoci v prípade nedávno pomaly sa rozvíjajúceho opuchu môže byť potrebné vyšetrenie iliacových žíl DUS, CT alebo MR na vylúčenie hmoty, nález kompresie iliacovej žily iliacovou tepnou je pravdepodobne menej dôležitý ako morbídna obezita a táto by mala byť riešená ako príčina.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "U väčšiny pacientov s primárnym lymfedémom a lipedémom je zobrazovanie žíl normálne. Obe patológie sa väčšinou diagnostikujú na základe anamnézy a charakteristických rysov z fyzikálneho vyšetrenia. Je však dôležité si uvedomiť, že nie všetci pacienti majú tieto typické nálezy. Lymfatické zobrazovanie môže byť užitočné, keď typický vzhľad lymfedému chýba, alebo pri zvážení chirurgického zákroku u pacientov bez dôkazov o významnej žilovej chorobe. DUS môže pomôcť identifikovať pacientov s lymfedémom a lipedémom, keď vylúči významnú žilovú chorobu a ukáže subkutánny pretek a nadmerné nahromadenie tukového tkaniva, výmenou. Patrí aj správne štádirovanie týchto pacientov do hodnotenia a je užitočné pri ich liečbe a sledovaní progresie ochorenia.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-[1.375rem] max-[921px]:mb-8",
    text: "Diagnostické kroky by mali byť prispôsobené anamnéze a klinickému vyšetreniu pacienta, aby sa predišlo nadmernej diagnostike a dodržal nákladovo efektívny prístup. V dobe, keď sa často objednávajú viaceré testy bez riadnej anamnézy a klinického vyšetrenia, je dôležité znížiť náklady a primerané rozdeľovanie zdrojov. To platí najmä pre pacientov s opuchom nôh, pretože je to veľmi bežný nález v akútnom aj chronickom štádiu.",
  },
];

export const textSegments: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Ak sa podozrieva systémový problém, mali by sa vykonať príslušné laboratórne testy. Úplný krvný obraz, metabolický panel zahŕňajúci vyhodnotenie kreatinínu, močoviny, štítovej žľazy, atrioventrikulárneho peptidu, pečeňových enzýmov a hladiny albumínu môže odhaliť abnormality v závislosti od etiológie. Hladina D-diméru môže byť užitočná pri hodnotení možného akútneho DVT v príslušnom kontexte. Tieto testy zvyčajne môže vykonať praktický lekár alebo kardiológ súčasne s obrazovými štúdiami vaskulárneho špecialistu, ak je to potrebné.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Duplexný ultrazvuk (DUS) je prvý a často jediný obrazový test u pacientov s opuchnutými dolnými končatinami bez zjavného dôvodu na základe anamnézy, fyzikálneho a laboratórneho vyšetrenia, alebo keď je potrebné získať ďalšie informácie na terapeutické rozhodovanie. Tento neinvazívny a nákladovo efektívny test umožňuje skúmať končatiny z hľadiska cievnych aj necievnych príčin akútneho aj chronického opuchu a poskytuje reprodukovateľnú metódu na zobrazenie žilovej anatómie, funkcie chlopní a priechodnosti. S citlivosťou a špecificitou viac ako 90 % pre DVT, žilový reflux a necievne etiológie je opuch môže byť ľahko a spoľahlivo hodnotený.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "DUS môže tiež posúdiť žilovú anatómiu v bruchu a panve a hľadať trombózu alebo kompresiu susediacimi tepnami alebo hmotami. Zobrazenie panvovej anatómie môže byť ťažké pre menej skúsených operátorov, alebo kvôli plynmi naplneným črevným slučkám alebo obezite. Ak je po DUS potrebné ďalšie zobrazenie brucha alebo panvy, alternatívou sú kontrastne zlepšená venózna fázová počítačová tomografia (CT) alebo magnetická rezonancia (MR). Hmotnosť spôsobená nádorom alebo zväčšenými lymfatickými uzlinami, kompresia/obštrukcia iliakálnych žíl a všeobecná žilová anatómia môžu byť ľahko vizualizované. Okrem toho sa MR zobrazovanie môže použiť na hodnotenie muskuloskeletálnych alebo neurologických etiológií.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Venografia s intravaskulárnym ultrazvukom (IVUS) je ďalšia metóda, ktorá sa používa nielen na hodnotenie, ale aj na vedenie a stanovenie anatomických výsledkov endovaskulárneho ošetrenia abdominálnych/panvových žilových etiológií opuchu dolných končatín. Aj keď ide o invazívny prístup, žilové lézie, stenózy a kompresia sa môžu hodnotiť s citlivosťou vyššou ako 85 %. Venografia s IVUS by sa mala ponechať na príležitostné prípady, keď DUS, CT alebo MR obrazovanie nie sú jednoznačné, alebo ako súčasť postupu so zámerom endovaskulárneho ošetrenia žilovej obštrukcie.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-7 max-[921px]:mb-8",
    text: "Hoci lymfedém je zvyčajne klinická diagnóza, obrazové techniky sa môžu použiť na potvrdenie alebo plánovanie chirurgického zákroku. Priamo kontrastné lymfangiografie sa výrazne opustilo pri hodnotení opuchnutého končatia kvôli jej technickej zložitosti a komplikáciám. V súčasnosti je lymfoskintigráfia zlatým štandardom. Zvyčajne sa využíva Tc-99m radionuklidový sírový koloid, ktorý sa injikuje intradermálne do druhého a treťieho priestoru medzi prstami na nohách, s následným zobrazovaním pomocou scintigrafickej kamery na posúdenie lymfatického toku z nôh do hrudníka. Lymfografia s indocyanínom zeleným (IGD) sa stále častejšie používa na identifikáciu a štádirovanie lymfedému plastickými chirurgmi pred a po určitých typoch liečby, a tiež na objektívne štádirovanie a sledovanie po chirurgickom zákroku. MR lymfografia s alebo bez kontrastu je sľubnou metódou poskytujúcou dobré zobrazenie a plánovanie, ale chýba dôkladné posúdenie vyšetrenia, dostupnosti a odbornosti v interpretácii.",
  },
];

export const textSegments2: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Fyzikálne vyšetrenie je dôležitou súčasťou klinickej anamnézy pri určovaní príčiny opuchu. Okrem sťažnosti na opuch dolných končatín je dôležité posúdiť aj srdce, pľúca a brucho, aby sme mohli zistiť prípadné systémové príčiny alebo faktory, ktoré prispievajú k opuchu. Zvýšená viditeľnosť žilového hrbola na krku alebo šelesty v pľúcach môžu byť spôsobené srdcovým zlyhaním, opuchnuté brucho s ascites alebo žltačka skléry naznačujú pečeňové ochorenie a jazvy na bruchu môžu prezradiť predošlé chirurgické zákroky. Rozšírené žily v dolnom bruchu môžu byť príznakom uzáveru dolnej dutiny. Obézita s veľkým bruškom tiež môže prispieť k opuchu oboch dolných končatín.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Je dôležité posúdiť obidve dolné končatiny, aj keď je sťažnosť jednostranná. Často aj druhá končatina môže byť opuchnutá a môže poskytnúť náznaky príčiny opuchu v viac postihnutej končatine. Treba si všimnúť rozloženie opuchu. Fokálny opuch lýtkov môže naznačovať hlbokú žilovú trombózu (DVT), povrchovú tromboflebitídu (SVT), infekciu alebo zranenie, zatiaľ čo rozsiahly opuch celej končatiny alebo oboch končatín je pravdepodobnejšie spôsobený proximálnou patofyziológiou alebo systémovým procesom. Dôležité je tiež vyšetriť nohy. Pri lymfedéme sa zväčšenie týka predovšetkým hrebeňa nohy a spája sa s rovnými prstami, zmenou tvaru nechtov (ako u lyžiarskeho skoku) a zhrubnutím kože, ktoré sa prejavuje neschopnosťou zložiť kožný záhyb na hrebeňi druhého prsta (pozitívny Kaposi-Stemmerov príznak). V pokročilých štádiách sa koža stáva hrubou s bradavičnatými ložiskami, plakmi a uzlami. U pacientov s lipedémom sú nohy zvyčajne šetrné, ale opuch môže postihnúť oblasť od členkov po pás v porovnaní s hornou časťou tela, a rovnaký rozsah opuchu sa môže prejaviť aj v hornej končatine. Dôležité je tiež zaznamenať, či sa opuch vypĺňa pri stlačení, pričom v štádiách II a III lymfedému a pri lipedéme je obvykle vpichovanie absentujúce. Bolesť, rozsah pohybu a prítomnosť neurologických porúch môžu pomôcť identifikovať fokálne svalové a neurologické problémy, ako aj hlbokú žilovú trombózu (DVT).",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-7 max-[921px]:mb-8",
    text: "Pokožka dolných končatín by mala byť dôkladne vyšetrená. Infekcia a tromboflebitída môžu byť sprevádzané začervenaním a zvýšenou teplotou. Prítomnosť kŕčových žíl, najmä ak sú škvrny od železa v gatéroch, ekzémová dermatitída alebo blanovitá atrofia, naznačuje žilovú nedostatočnosť. Aktívne alebo hojace sa vredy, najmä v oblasti vnútornej hranice členku a zmeny kože charakteristické pre lipodermatosklerózu, naznačujú pokročilé žilové ochorenie. Endokrinné poruchy môžu sprevádzať tenkú a lesklú pokožku s bilaterálnym opuchom. Okrem toho, pretibiálny myxédém môže mať rôzne kožné prejavy, ako je hyperpigmentácia, plaky a/alebo uzlíky, ktoré môžu pripomínať lymfedém. Navyše, hoci je zriedkavé, aby sa vyskytol opuch pri artériovej nedostatočnosti v prípade absencie kritickej ischémiu končatín, malo by sa vykonať dôkladné vyšetrenie pulzácií na oboch dolných končatinách. Toto vyšetrenie môže pomôcť identifikovať pacientov so zmiešanými arteriálnymi a žilovými problémami, pacientov s periférnym artériovým ochorením so systémovými príčinami opuchu a tiež pre posúdenie vhodnosti kompresnej terapie. Ďalšou podmienkou, ktorá samostatne alebo v kombinácii s inými patológiami prispieva k vzniku opuchu, sú poruchy nôh, ktoré obmedzujú pacienta v používaní lýtkového svalového čerpadla pri chôdzi. Tento stav je často pozorovaný v klinickej praxi, ale len málo špecialistov ho skúma.",
  },
];

export const items4: ListItem4Props[] = [
  { text: "", text_1: "", text_2: "" },
  {
    text: "Jednostranný opuch nasvedčuje primárnym a sekundárnym príčinám žilovej alebo lymfatickej poruchy a obojstranný alebo celkový opuch naznačuje systémové etiológie, ako je uvedené v tabuľke 1. Obojstranné, ale asymetrické prípady môžu mať jednostranné príčiny na každej nohe s rôznymi etiológiou alebo rôznym stupňom závažnosti alebo jednostrannú príčinu prepojenú na pozadie systémového ochorenia. Lymfedém a žilový opuch môžu byť tiež obojstranné, ale nerovnomerné, hoci žilová etiológia je menej bežná pod úrovňou v. cava inferior, pretože ochorenie je často asymetrické v akomkoľvek okamihu.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Dôležité je posúdiť trvanie príznakov, pričom akútny opuch (",
    text_1: "<",
    text_2:
      "72 hodín) je charakteristický pre etiológie ako HVT (hlboká venózna trombóza), infekcia, trauma, zhoršenie zdravotného stavu ako srdcové zlyhanie alebo nedávne zmeny v liečbe. Chronický opuch môže byť spôsobený žilovou nedostatočnosťou, dysfunkciou lymfatického systému, statickými poruchami dolných končatín alebo dlhodobejšími zdravotnými etiológiami. Okrem toho sa opuch spôsobený žilovým ochorením zvyčajne zhoršuje so závislosťou počas dňa a zlepšuje sa zdvihnutím. Žilový opuch často sprevádza sťažnosti na bolesť, ťažobnosť alebo únava končatín. Fokálna bolesť môže naznačovať problém s pohybovým aparátom alebo kĺbom. Reflexný sympatický dystrofický syndróm (komplexný regionálny syndróm bolesti) musí byť tiež zohľadnený pri významne bolestivej a chronicky opuchnutej končatine. Lymfedém je zvyčajne bezbolestný a môže sa prejaviť klasickými príznakmi postihnutia chodidla a zmenami kože alebo len miernym opuchom, ktorý je vytlačiteľný.",
  },
  {
    text: "Lipedém je takmer vždy bilaterálny, nezasahuje do chodidiel a prejavuje sa neprimeranou bolesťou, bolesťou a tendenciou k ľahkému modreniu. Je dôležité si uvedomiť, že často spomínané klinické nálezy nie sú vždy pravidlom pri týchto ochoreniach.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Treba získať úplnú anamnézu žilových porúch, vrátane prítomnosti varixov, predchádzajúceho VTE (venózny tromboembolizmus) alebo predchádzajúcich udalostí, ktoré by mohli vyvolať VTE, a osobnú alebo rodinnú predispozíciu k zrážaniu krvi a históriu predchádzajúcich povrchných a hlbokých žilových intervencií. Zdravotné udalosti môžu byť trauma, dlhodobý odpočinok v posteli, predchádzajúce chirurgické zákroky na dolných končatinách vrátane náhrady kĺbov, arteriálnych intervencií alebo žilovej veny pre bypass srdca. Predchádzajúce operácie brušnej alebo panvovej dutiny, nádorové ochorenie alebo anamnéza rádiovej liečby je tiež dôležitá ako predchádzajúca príčina žilových a lymfatických etiológií opuchu.",
    text_1: "",
    text_2: "",
  },
  {
    text: "Je potrebné vykonať hodnotenie systémových ochorení, najmä u starších pacientov s viacerými súčasnými ochoreniami, ktoré by mohli prispieť k primárne bilaterálnemu opuchu dolných končatín. Novonastalé alebo zhoršenie srdcového, renálneho, pečeňového, endokrinného stavu môže byť príčinou. Prítomnosť nevysvetliteľného úbytku hmotnosti alebo lymfadenopatie by mohla naznačovať malignitu s kompresiou žíl.",
    text_1: "",
    text_2: "",
  },
];

export const items5: ListItem5Props[] = [
  {
    text: "Baumgartner I, Kucher N. Chronic venous insufficiency and venous ulcers. Lancet. 2003;361(9368):1984-1990. doi:10.1016/s0140-6736(03)13595-7",
  },
  {
    text: "Nelzen O. The evaluation and differential diagnosis of chronic leg edema. Acta Chir Scand Suppl. 1988;545:75-80.",
  },
  {
    text: "Muluk VS, Unni KK, Paupitz JA, Ehrenhaft JL, Phaneuf DJ, Rutherford RB. The spectrum of conditions causing chronic lower extremity lymphedema. Mayo Clin Proc. 1995;70(11):1050-1058. doi:10.4065/70.11.1050",
  },
  {
    text: "Wollina U, Knopf B, Hipler U-C, et al. Rare indications for microsurgery in chronic leg edema. Int J Low Extrem Wounds. 2010;9(3):115-120. doi:10.1177/1534734610372172",
  },
  {
    text: "Neglén P, Thrasher TL, Raju S. Venous outflow obstruction: an underestimated contributor to chronic venous disease. J Vasc Surg. 2003;38(5):879-885. doi:10.1016/s0741-5214(03)00619-7",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zdX2-i"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Ako rozpoznať príčiny opuchu dolných končatín a zvoliť vhodnú terapiu"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Odborný článok o príčinách a liečbe opuchu dolných končatín. Ponúka prehľad diagnostických metód a terapeutických možností pri riešení problémov s kŕčovými žilami, žilovou nedostatočnosťou a lymfedémom."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">15 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zNwArt"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-5 max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(13795px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_1fr] max-lg:px-4 lg:min-h-[412.3125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_24.4281%_4.33007%_16.0131%_5.55556%_16.0131%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(5835px,auto)_minmax(3px,auto)_minmax(122px,auto)_minmax(74px,auto)_minmax(3px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-7">
            <div
              id="zGlCbE"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person standing wearing white dress"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="person standing wearing white dress"
                  src="https://images.unsplash.com/photo-1469914449253-82de45589e53?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person standing wearing white dress"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person standing wearing white dress"
                  src="https://images.unsplash.com/photo-1469914449253-82de45589e53?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-5 lg:col-start-2 lg:col-end-7 lg:row-end-7">
            <div
              id="zb9rxH"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <h2 className={listItemClassName2}>Úvod</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-7 max-[921px]:mb-8">
                {"Opuch dolných končatín je častý a náročný diagnostický problém, ktorý má často významný vplyv. Definuje sa ako opuch spôsobený zvýšením intersticiálnej tekutiny, ktorá prekračuje kapacitu fyziologickej lymfatickej drenáže. V väčšine prípadov dochádza k hromadeniu tekutiny v podkožných tkanivách, čo vedie k zväčšeniu objemu, hoci prirodzené príčiny a lipedém môžu spôsobiť tvorbu nadmerného mäkkého tkaniva dolných končatín. Hromadenie tekutiny môže byť výsledkom mnohých etiológií, vrátane rôznych miestnych alebo systémových porúch, ako sú povrchový a hlboký žilový reflux infrainguinálnej časti, suprainguinálne a infrainguinálne obštrukcie hlbokých žíl, a primárne a sekundárne ochorenia lymfatického systému. Hoci" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " +
                    "najpravdepodobnejšou jedinou príčinou jednostranného opuchu dolnej končatiny u osôb starších ako 50 rokov je žilové ochorenie"}
                </strong>
                {
                  ", etiológia je často multifaktorová. Príznaky môžu byť obmedzujúce a následne ovplyvňovať kvalitu života s významnými nákladmi pre spoločnosť. Nedávne výskumy ukázali, že chronický opuch negatívne ovplyvňuje fyzické a psychické zdravie a znižuje kvalitu života. Preto v tomto článku predkladáme praktický diagnostický prístup, ktorým sa presne a efektívne určujú príčiny chronického opuchu u postihnutých pacientov a zavádza sa vhodná terapia."
                }
              </p>
              <h2 className={listItemClassName2}>História</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-2 max-[921px]:mb-8">
                {"Opuch dolných končatín sa môže prejaviť rôznymi spôsobmi. Je nevyhnutné získať kompletnú anamnézu pacienta, aby sa umožnila presná, efektívna a nákladovo efektívna diagnostická skúška a manažment. Treba posúdiť miesto opuchu a prípadné súvisiace prejavy, vrátane toho, či je jednostranný, obojstranný alebo asymetrický, ako aj aké zmeny sa vyskytujú s jeho závažnosťou v závislosti od polohy a času dňa. Opuch môže byť bez príznakov, ale môže sa spájať s prejavmi ako bolesť, ťažoba, charakteristické žilové alebo lymfatické zmeny kože alebo predchádzajúce alebo aktívne vredy dolných končatín. Pacienti môžu popisovať náhly nástup opuchu končatiny, postupný nástup alebo trvajúci stav. Základné príčiny opuchu nôh podľa akútnosti a jednostranného alebo obojstranného charakteru sú uvedené v tabuľke 1." +
                  " "}
                <em className="[color:inherit] break-words">
                  <a
                    title="tauľka diagnóz"
                    href="https://dfeb82360e.clvaw-cdnwnd.com/9d2925b1b64f642ad2ac80b22ecf5254/200000321-bf0f8bf0f9/Bez%20n%C3%A1zvu%201%201.jpeg?ph=dfeb82360e"
                    target="_blank"
                    className="[color:inherit] text-start break-words relative z-[1] overflow-hidden"
                  >
                    {"tabuľka diagnóz"}
                  </a>{" "}
                  {"- tab1."}
                </em>
              </p>
              {items4.map((item, index) => (
                <ListItem4 key={index} {...item} />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {"Taktiež je nevyhnutné podrobne preskúmať liekovú anamnézu pacienta. Zmeny v liečebných režimoch vrátane dávkovania môžu viesť k zmenám objemu krvi, ktorý môže viesť k opuchu dolných končatín. Systémové alebo lokálne aplikované kortikosteroidy, nesteroidné protizápalové lieky, estrogény, kalciumantagonisté alebo lieky, ktoré ovplyvňujú činnosť centrálnych mechanizmov životosprávy, môžu mať priamy vplyv na závažnosť opuchu alebo môžu byť dôvodom vzniku opuchu. Heparín a jeho deriváty môžu byť spojené s rozvojom autoimunitného lymfedému." +
                  " "}
                <em className="[color:inherit] break-words">
                  {" " + "lieky - tab2."}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8" />
              <h2 className={listItemClassName2}>Vyšetrenia</h2>
              <h3 className="font-heading text-ploy-neutral-inverse-500 font-bold break-words max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Laboratórne vyšetrenia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Laboratórne vyšetrenia by mali byť vykonané na vylúčenie systémových ochorení. Odporúča sa vykonať úplný krvný obraz s trombocytmémiou a funkciou pečene. Je dôležité poznamenať, že zvýšenie počtu bielych krviniek, erytrocytov a trombocytov môže naznačovať infekciu, zápal alebo systémové ochorenie. Funkčné parametre pečene môžu poskytnúť informácie o prítomnosti hepatálneho ochorenia, ktoré by mohlo byť príčinou opuchu dolných končatín. Hladina albumínu a celkový protein sa môžu zmeniť pri chronických pečeňových ochoreniach, nefrotickom syndróme alebo proteinúrii a môžu prispievať k rozvoju opuchu dolných končatín. Ak je klinicky naznačené, je možné vykonať zrážanie krvi alebo vyšetriť predispozíciu k zrážaniu krvi."
                }
              </p>
              <h3 className="font-heading text-ploy-neutral-inverse-500 font-bold break-words max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Obrazové vyšetrenia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-9 max-[921px]:mb-8">
                {
                  "Röntgenové vyšetrenie môže byť užitočné na vylúčenie zlomeniny alebo artritídy, ktoré môžu byť spojené s opuchom dolných končatín. Dopplerov ultrazvuk sa odporúča ako prvá línia diagnostiky žilovej etiológie opuchu dolných končatín. Vysoko rozlíšený duplexný ultrazvuk poskytuje informácie o povrchovej a hlbokých žilách a ventilovom systéme, ako aj o prítomnosti krvných zrazenín alebo iných patológií. Magnetická rezonancia angiografia môže byť užitočná na posúdenie žilovej a arteriálnej cirkulácie, najmä pri príznakoch zhoršenia cirkulácie a žiadnych objavených príčinách na duplexovom ultrazvuku. Posúdenie lymfatického systému je zvyčajne komplikované. Lymfatický uzol môže byť jednostranne opuchnutý alebo citlivý a môže byť spojený s bolesťou. Ultrazvuková elastografia a lymfoscintigrafia môžu byť užitočné pri hodnotení lymfatickej cirkulácie."
                }
              </p>
              <h2 className={listItemClassName2}>Fyzikálne vyšetrenie</h2>
              {textSegments2.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>Diagnostické testovanie</h2>
              {textSegments.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>
                {"Diagnostický algoritmus pre chronický opuch dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                {
                  "Praktický diagnostický prístup založený na vyššie diskutovaných konceptoch je znázornený na Obrázku 1. Ak nie sú identifikované žiadne systémové príčiny alebo ak neexistuje zlepšenie alebo len čiastočné zlepšenie po liečbe definovaných systémových príčin, podrobnejšie vyšetrenie primárnych alebo sekundárnych príčin je realizované na základe logiky opísanej v predchádzajúcich častiach. Diagnostické kroky by mali byť prispôsobené anamnéze pacienta, klinickému vyšetreniu a potenciálnym výhodám zákrokov, ktoré vyžadujú zobrazovanie, aby sa predišlo nadmernej diagnostike a dodržal nákladovo efektívny prístup. V dobe, keď sa často objednávajú viaceré testy bez riadnej anamnézy a klinického vyšetrenia, je dôležité znížiť náklady a primerané rozdeľovanie zdrojov. "
                }
                <span className="[color:inherit] break-words">
                  <em className="[color:inherit] break-words">
                    {
                      "Tab 3. - Navrhnutý diagnostický algoritmus pre chronický opuch dolných končatín."
                    }
                  </em>
                </span>
              </p>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName2}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-6 max-[921px]:mb-8">
                {
                  "Pri prístupe k opuchu dolných končatín je potrebné zvážiť rôzne etiológie. Dôkladná anamnéza a fyzikálne vyšetrenie sú nevyhnutné na diferenciálnu diagnostiku príčin a následný výber nákladovo efektívnych a vhodných diagnostických testov. Tento diferenciálny diagnostický postup umožňuje systematický prístup k pacientom s akútnym alebo chronickým opuchom dolných končatín v unilaterálnom alebo bilaterálnom zobrazení."
                }
              </p>
              <h2 className={listItemClassName2}>Referencie</h2>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem5
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words max-[921px]:mb-0 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl" />
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-8">
            <div id="zqXP1k" className={listItemClassName3}>
              <div
                rel="nofollow"
                title="tab 1"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="tab 1"
                  src="/migrated-assets/90561865df0bd80278cb.jpg"
                  height="199"
                  width="299"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="tab 1"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName4}
              >
                <img
                  alt="tab 1"
                  src="/migrated-assets/fd7deac4a5437597599c.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] row-end-9 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-8 lg:col-start-4 lg:col-end-5 lg:row-start-6">
            <div id="zsNa6v" className={listItemClassName3}>
              <div
                rel="nofollow"
                title="tab 2"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="tab 2"
                  src="/migrated-assets/623b3922db95f25ee1ff.jpg"
                  height="199"
                  width="196"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="tab 2"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName4}
              >
                <img
                  alt="tab 2"
                  src="/migrated-assets/23c44e6238eb75aa2ca4.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-10 max-lg:row-end-11 lg:col-start-6 lg:col-end-7 lg:row-start-6 lg:row-end-9">
            <div id="zXIj0A" className={listItemClassName3}>
              <div
                rel="nofollow"
                title="tab 3"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="tab 3"
                  src="/migrated-assets/a7ee80a5ccfca9734da3.jpg"
                  height="199"
                  width="196"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="tab 3"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName4}
              >
                <img
                  alt="tab 3"
                  src="/migrated-assets/68794679c7c88d78f544.jpg"
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
