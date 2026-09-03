const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

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

export const heroSection: ListItemProps[] = [
  {
    text: "Nosenie kompresných pančúch",
    text_1:
      ": Kompresné pančuchy pomáhajú zlepšiť prietok krvi v nohách a zabraňujú tvorbe krvných zrazenín.",
  },
  {
    text: "Pravidelná fyzická aktivita",
    text_1:
      ": Chôdza a ľahké cvičenia pomáhajú zlepšiť cirkuláciu a urýchliť zotavenie.",
  },
  {
    text: "Vyhýbanie sa dlhému státiu či sedeniu",
    text_1:
      ": Zabránite tým nadmernému tlaku na žily, čo je kľúčové pre úspešné hojenie.",
  },
];

export default function HeroSection({
  items = heroSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <div className="flex flex-col grow">
      <section
        id="zNjanc"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Operácia varixov z pohľadu cievneho chirurga: Účinný zásah proti kŕčovým žilám"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Operácia varixov, známa tiež ako venózna chirurgia, predstavuje účinný zásah, ktorý rieši tento problém priamo u zdroja."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zSa4S8"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_7.92484%_50.4902%_7.92484%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zA_49M"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a man in a lab coat holding a toothbrush"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a man in a lab coat holding a toothbrush"
                  src="/external-assets/6740a099a5e12aa1.jpg"
                  height="344"
                  width="618"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a man in a lab coat holding a toothbrush"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a man in a lab coat holding a toothbrush"
                  src="/external-assets/732fbd9d36d6db8f.jpg"
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
              id="z64qCS"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily, alebo varixy, sú bežným ochorením, ktoré postihuje značnú časť populácie, najmä dospelých. Tento stav vzniká v dôsledku zlyhania venóznych chlopní, čo vedie k hromadeniu krvi v žilách dolných končatín. Okrem estetických problémov môžu kŕčové žily spôsobiť vážne zdravotné komplikácie, ako sú bolesti, opuchy, pocit ťažkých nôh, svrbenie pokožky a v najzávažnejších prípadoch dokonca trombózu. Operácia varixov je preto účinným riešením, ktoré eliminuje problém priamo pri jeho zdroji."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Dôležitosť včasnej diagnostiky a liečby"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Včasná diagnostika a správna liečba kŕčových žíl sú kľúčové pre prevenciu komplikácií a zabezpečenie optimálnej kvality života pacientov. Moderná medicína ponúka rôzne diagnostické metódy, ktoré umožňujú presne identifikovať postihnuté žily a naplánovať efektívnu liečbu. Medzi najčastejšie používané metódy patrí:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Duplexné ultrazvukové vyšetrenie"}
                    </strong>
                    {
                      ": Poskytuje detailný obraz o prietoku krvi v žilách a pomáha identifikovať miesta, kde chlopne nefungujú správne."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Venografia"}
                    </strong>
                    {
                      ": Kontrastné vyšetrenie žíl, ktoré umožňuje zobraziť venózny systém a zistiť prípadné blokády alebo rozšírenia žíl."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"MRI venóznych ciev"}
                    </strong>
                    {
                      ": Pokročilá technika na zobrazenie žilového systému v 3D, čo je užitočné pri zložitejších prípadoch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Spektrum možností liečby</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Operácia varixov môže byť vykonaná niekoľkými rôznymi technikami, v závislosti od individuálnych potrieb pacienta a závažnosti postihnutia žíl. Medzi najčastejšie metódy patrí:"
                }
              </p>
              <h3 className={listItemClassName2}>Stripping</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Stripping" + " "}
                </strong>
                {
                  "je tradičná staršia chirurgická metóda, pri ktorej sa postihnutá žila fyzicky odstráni z nohy. Tento postup sa obvykle vykonáva v celkovej anestézii a je vhodný pre pacientov s ťažkými formami kŕčových žíl. Výhodou tejto metódy je jej vysoká účinnosť, avšak doba rekonvalescencie môže byť dlhšia v porovnaní s modernými metódami."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Endovenózna laserová terapia (EVLT)"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Endovenózna laserová terapia (EVLT)" + " "}
                </strong>
                {
                  "je minimálne invazívny zákrok, pri ktorom cievny chirurg pomocou laserového lúča uzavrie postihnuté žily. Tento postup je menej bolestivý, vyžaduje len lokálnu anestéziu a má kratšiu dobu rekonvalescencie. Laserové vlákno sa zavádza priamo do žily, kde spôsobí jej uzavretie a postupné vstrebávanie telom."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Radiofrekvenčná ablácia (RFA)"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Radiofrekvenčná ablácia (RFA)" + " "}
                </strong>
                {
                  "funguje na podobnom princípe ako EVLT, ale namiesto laseru sa používa rádiofrekvenčná energia na ohriatie a uzavretie postihnutej žily. Tento postup je rovnako minimálne invazívny a ponúka výhody v podobe rýchleho zotavenia a minimálnej bolesti po zákroku."
                }
              </p>
              <h3 className={listItemClassName2}>Skleroterapia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Skleroterapia" + " "}
                </strong>
                {
                  "je neinvazívna injekčná metóda, pri ktorej cievny chirurg do postihnutej žily vstrekne špeciálnu látku, ktorá spôsobí jej zavretie a následnú degradáciu. Tento zákrok je ideálny pre menšie varixy a teleangiektázie (povrchové žilky). Skleroterapia sa často používa ako doplnková liečba po EVLT alebo RFA."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Pooperačná starostlivosť a rekonvalescencia"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po operácii je mimoriadne dôležitá správna pooperačná starostlivosť, ktorá podporuje hojenie a minimalizuje riziko recidívy. Kľúčové aspekty starostlivosti zahŕňajú:"
                }
              </p>
              <ul className="break-words my-0">
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dodržiavanie odporúčaní cievneho chirurga je nevyhnutné na zabezpečenie úspešnej rekonvalescencie a dlhodobého úspechu operácie."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Často kladené otázky o operácii varixov"}
              </h2>
              <h3 className={listItemClassName2}>
                {"1. Ako dlho trvá rekonvalescencia po operácii varixov?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Rekonvalescencia po operácii varixov sa líši v závislosti od použitej metódy a individuálneho zdravotného stavu pacienta. Pri minimálne invazívnych metódach, ako sú EVLT alebo RFA, môže byť pacient schopný vrátiť sa k bežným aktivitám už po 1-2 dňoch. Pri tradičných metódach, ako je stripping, môže trvať návrat k plnej aktivite 1 až 3 týždne."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Sú výsledky operácie varixov trvalé?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Väčšina pacientov zažíva dlhodobé zlepšenie po operácii varixov. Avšak, vzhľadom na to, že kŕčové žily sú často spôsobené genetickými faktormi a životným štýlom, existuje možnosť, že sa môžu objaviť nové varixy v budúcnosti. Dodržiavanie zdravého životného štýlu a preventívne opatrenia môžu pomôcť minimalizovať toto riziko."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3. Je operácia varixov bolestivá?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Operácia varixov sa vykonáva pod anestéziou, čo znamená, že počas samotného zákroku pacient necíti bolesť. Po operácii môže dôjsť k miernemu až stredne silnému nepohodliu, ktoré sa dá zvládnuť bežne dostupnými liekmi proti bolesti. Pri minimálne invazívnych metódach je nepohodlie zvyčajne minimálne."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4. Aké sú riziká operácie varixov?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ako pri každom chirurgickom zákroku, aj operácia varixov nesie určité riziká, ako sú infekcie, krvácanie, tvorba hematómov alebo mierne zmeny farby kože nad liečenými žilami. Riziko vážnych komplikácií, ako je flebotrombóza, je však nízke, najmä pri dôkladnom výbere pacienta a správnej pooperačnej starostlivosti."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"5. Ako sa môžem pripraviť na operáciu varixov?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pred operáciou je dôležité absolvovať všetky potrebné predoperačné vyšetrenia a konzultácie s cievnym chirurgom. Lekár vám poskytne špecifické inštrukcie týkajúce sa prípravy na operáciu, vrátane odporúčaní týkajúcich sa stravy, užívania liekov a fyzickej aktivity. Dodržiavanie týchto pokynov zabezpečí plynulý priebeh operácie a rekonvalescencie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"6. Aké alternatívy k operácii varixov existujú?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pre pacientov, ktorí hľadajú menej invazívne alternatívy alebo nie sú kandidátmi na chirurgickú liečbu, existuje niekoľko iných možností, ako sú skleroterapia, laserová terapia a rádiofrekvenčná ablácia. Tieto metódy môžu byť účinné pri liečbe menších varixov a v niektorých prípadoch ponúkajú rýchlejšiu rekonvalescenciu a menej vedľajších účinkov."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Operácia varixov je účinným riešením pre pacientov trpiacich kŕčovými žilami. Vďaka moderným technikám a individuálnemu prístupu k liečbe je možné dosiahnuť vynikajúce výsledky s minimálnym rizikom komplikácií. Dôležitou súčasťou liečby je aj edukácia pacientov o preventívnych opatreniach a zdravom životnom štýle, ktoré môžu výrazne prispieť k zlepšeniu ich zdravotného stavu a kvality života."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
