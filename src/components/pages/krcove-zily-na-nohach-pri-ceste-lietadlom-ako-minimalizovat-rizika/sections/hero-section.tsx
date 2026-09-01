const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";
const listItemClassName3 =
  "font-heading text-ploy-text-primary font-bold break-words mb-2 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId krcove-zily-na-nohach-pri-ceste-lietadlom-ako-minimalizovat-rizika-hero-section
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
    text: "Viditeľné žily na nohách",
    text_1: ": Pokrútené, vystúpené žily modrej alebo fialovej farby.",
  },
  {
    text: "Bolesť a ťažkosť v nohách",
    text_1: ": Pocit, akoby vaše nohy boli vyrobené z olova.",
  },
  {
    text: "Opuchy",
    text_1:
      ": Najmä v oblasti členkov a nôh, ktoré sa zvyčajne zhoršujú počas dňa.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Nepríjemné pocity v oblasti postihnutých žíl.",
  },
  { text: "Nočné kŕče", text_1: ": Bolestivé sťahy svalov, najmä v lýtkach." },
];

export const items2: ListItemProps[] = [
  {
    text: "Riziko trombózy",
    text_1:
      ": Dlhodobé sedenie a obmedzený pohyb môžu prispieť k tvorbe krvných zrazenín v nohách. Toto riziko sa zvyšuje pri letoch dlhších ako 4 hodiny.",
  },
  {
    text: "Hlboká žilová trombóza (HŽT)",
    text_1:
      ": Ide o závažný stav, pri ktorom sa v hlbokých žilách vytvorí krvná zrazenina. Príznaky zahŕňajú náhly opuch nohy, bolesť, začervenanie a teplo v postihnutej oblasti.",
  },
  {
    text: "Pľúcna embólia",
    text_1:
      ": Ak sa krvná zrazenina odtrhne a dostane sa do pľúc, môže spôsobiť život ohrozujúci stav nazývaný pľúcna embólia.",
  },
  {
    text: "Zhoršenie príznakov kŕčových žíl",
    text_1:
      ": Dlhodobé sedenie počas letu môže spôsobiť stagnáciu krvi v nohách a zhoršenie príznakov kŕčových žíl.",
  },
];

export const items3: ListItemProps[] = [
  {
    text: "Prechádzka",
    text_1:
      ": Po prílete sa snažte čo najskôr prejsť. Prechádzka pomôže rozprúdiť krv v nohách.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Ak máte možnosť, po príchode do hotela alebo domov si na chvíľu ľahnite a zdvihnite nohy nad úroveň srdca.",
  },
  {
    text: "Sprcha",
    text_1:
      ": Striedavá teplá a studená sprcha na nohy môže pomôcť stimulovať cirkuláciu.",
  },
  {
    text: "Kompresné pančuchy",
    text_1:
      ": Pokračujte v nosení kompresných pančúch ešte niekoľko hodín po lete.",
  },
  {
    text: "Hydratácia",
    text_1: ": Pokračujte v dostatočnom príjme tekutín aj po lete.",
  },
];

export const items4: ListItemProps[] = [
  {
    text: "Pravidelné cvičenie",
    text_1:
      ": Aktivity ako chôdza, plávanie alebo cyklistika pomáhajú zlepšovať cirkuláciu.",
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Nadváha zvyšuje tlak na žily v nohách.",
  },
  {
    text: "Vyvážená strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a zlepšiť celkové zdravie ciev.",
  },
  {
    text: "Vyhýbanie sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne meniť polohu a robiť jednoduché cviky.",
  },
  {
    text: "Nosenie voľného oblečenia",
    text_1:
      ": Tesné oblečenie, najmä v oblasti pása a nôh, môže obmedzovať cirkuláciu.",
  },
];

export const items5: ListItemProps[] = [
  {
    text: "Aké preventívne opatrenia môžem prijať pri cestovaní lietadlom s kŕčovými žilami?",
    text_1:
      " Kľúčové opatrenia zahŕňajú pohyb počas letu, nosenie kompresných pančúch, dostatočnú hydratáciu, zvládanie stresu a konzultáciu s lekárom pred cestou.",
  },
  {
    text: "Ako fungujú kompresné pančuchy?",
    text_1:
      " Kompresné pančuchy vytvárajú tlak na nohy, ktorý pomáha zlepšovať krvný obeh, znižovať opuchy a minimalizovať riziko vzniku krvnej zrazeniny. Fungujú na princípe gradovanej kompresie - najsilnejšej v oblasti členka, postupne slabnúcej smerom k stehnu.",
  },
  {
    text: "Môže stres ovplyvniť moje kŕčové žily?",
    text_1:
      " Áno, stres môže zhoršiť symptómy kŕčových žíl a zvýšiť riziko vzniku krvnej zrazeniny. Stres zvyšuje krvný tlak a môže viesť k zhoršeniu cirkulácie.",
  },
  {
    text: "Kedy by som mal konzultovať s lekárom pred cestovaním lietadlom?",
    text_1:
      " Ak máte kŕčové žily a plánujete dlhý let (viac ako 4 hodiny), je vhodné sa poradiť s lekárom. Rovnako ak ste v minulosti mali problémy s trombózou alebo máte iné zdravotné problémy, ktoré by mohli zvýšiť riziko komplikácií.",
  },
  {
    text: "Sú kŕčové žily nebezpečné pri cestovaní lietadlom?",
    text_1:
      " Samotné kŕčové žily nie sú nebezpečné, ale môžu zvýšiť riziko vzniku hlbokej žilovej trombózy počas dlhých letov. S proper preventívnymi opatreniami je toto riziko výrazne znížené.",
  },
  {
    text: "Ako často by som mal cvičiť počas letu?",
    text_1:
      " Odporúča sa vstať a prejsť sa každú 1-2 hodiny, ak je to možné. Ak nemôžete vstať, robte jednoduché cviky na sedadle každých 30 minút.",
  },
  {
    text: "Môžem piť alkohol počas letu, ak mám kŕčové žily?",
    text_1:
      " Odporúča sa vyhnúť sa alkoholu počas letu, najmä ak máte kŕčové žily. Alkohol môže spôsobiť dehydratáciu a zhoršiť cirkuláciu krvi.",
  },
  {
    text: "Aké sú príznaky hlbokej žilovej trombózy, na ktoré by som si mal dávať pozor?",
    text_1:
      " Príznaky hlbokej žilovej trombózy zahŕňajú náhly opuch jednej nohy, bolesť alebo citlivosť v nohe, začervenanie alebo zmenu farby kože na nohe a teplo v postihnutej oblasti.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zbSqSl"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Kŕčové žily na nohách pri ceste lietadlom: Ako minimalizovať riziká?"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento komplexný článok poskytuje detailný prehľad o rizikách a preventívnych opatreniach spojených s cestovaním lietadlom pre ľudí s kŕčovými žilami. Vysvetľuje anatomiu kŕčových žíl, riziká ako hlboká žilová trombóza, a poskytuje praktické rady pre minimalizáciu týchto rizík, vrátane používania kompresných pančúch a pravidelného pohybu počas letu. Článok je cenným zdrojom informácií pre pacientov s kŕčovými žilami, ktorí plánujú cestovať lietadlom."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">8 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zpqj5D"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(12836px,auto)_1fr] max-lg:px-4 lg:min-h-[419.1875rem] lg:max-w-[76.5rem] lg:grid-cols-[16.1765%_0.653595%_66.3399%_0.735294%_16.0948%] lg:grid-rows-[minmax(64px,auto)_minmax(320px,auto)_minmax(56px,auto)_minmax(5819px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
            <div
              id="zg2wr9"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-80"
            >
              <div
                rel="nofollow"
                title="airplane on sky during golden hour"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="airplane on sky during golden hour"
                  src="/external-assets/8db144974a59b8d4.jpg"
                  height="320"
                  width="829"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="airplane on sky during golden hour"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="airplane on sky during golden hour"
                  src="/external-assets/cb18bf7192f2cbca.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zQmFiC"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Cestovanie lietadlom sa stalo bežnou súčasťou nášho života, či už ide o služobné cesty alebo dovolenky. Pre väčšinu ľudí je to bezproblémová záležitosť, ale pre tých, ktorí trpia kŕčovými žilami, môže dlhý let predstavovať zdravotné riziko. V tomto článku sa pozrieme na to, ako môžu ľudia s kŕčovými žilami minimalizovať riziká spojené s leteckou dopravou a užiť si cestu bez komplikácií."
                }
              </p>
              <h2 className={listItemClassName}>
                {'Porozumenie kŕčovým žilám: Keď sa žily "vzbúria"'}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pred tým, ako sa ponoríme do špecifík cestovania lietadlom, je dôležité pochopiť, čo sú to vlastne kŕčové žily. Odborne nazývané varixy, sú to rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách."
                }
              </p>
              <h3 className={listItemClassName2}>Anatómia kŕčových žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne. Je to, ako keď sa pokazí spätná klapka vo vašom umývadle - voda (alebo v tomto prípade krv) sa hromadí tam, kde by nemala. Toto vedie k zväčšeniu a deformácii žíl."
                }
              </p>
              <h3 className={listItemClassName2}>Príznaky kŕčových žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily môžu byť nielen estetickým problémom, ale môžu spôsobovať aj rôzne nepríjemné príznaky:"
                }
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
                      ": Suchá, šupinatá koža alebo zmeny farby kože v oblasti postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8" />
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <span className="[color:inherit] font-bold break-words">
                      <strong className="[color:inherit] break-words">
                        <u className="break-words">
                          <a
                            href="/#kalkulacky"
                            target="_self"
                            className="[color:inherit] break-words"
                          >
                            {
                              "KALKULAČKA PRE VÝPOČET ODHADOVANÉHO RIZIKA PRI CESTE LIETADLOM"
                            }
                          </a>
                        </u>
                      </strong>
                    </span>
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Riziká letu s kŕčovými žilami: Keď sa nebo stáva nepriateľom"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Cestovanie lietadlom môže mať negatívny vplyv na kŕčové žily a zvýšiť riziko vzniku komplikácií. Je to ako keby ste nútili už aj tak preťažený dopravný systém fungovať v extrémnych podmienkach."
                }
              </p>
              <h3 className={listItemClassName2}>Hlavné riziká zahŕňajú:</h3>
              <ol className="break-words my-0">
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
                      {"Opuch dolných končatín"}
                    </strong>
                    {
                      ": Zmeny tlaku v kabíne lietadla môžu prispieť k zadržiavaniu tekutín v nohách, čo vedie k opuchom."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Preventívne opatrenia: Vaša stratégia pre bezpečný let"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Našťastie existuje niekoľko účinných stratégií, ako minimalizovať riziká spojené s cestovaním lietadlom, ak máte kŕčové žily. Tu je niekoľko kľúčových odporúčaní:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Pohybujte sa: Rozprúďte krv v žilách"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pohyb je kľúčový pri prevencii komplikácií spojených s kŕčovými žilami počas letu. Je to, ako keby ste pravidelne pretrepávali fľašu s usadeným obsahom - udržujete všetko v pohybe."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Prechádzajte sa po uličke"}
                    </strong>
                    {": Každú hodinu alebo dve sa prejdite po uličke lietadla."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Cviky na sedadle"}
                    </strong>
                    {
                      ": Aj keď nemôžete vstať, môžete robiť jednoduché cviky ako krúženie členkami, napínanie a uvoľňovanie lýtkových svalov."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Strečing"}
                    </strong>
                    {
                      ": Pravidelne naťahujte nohy, aby ste podporili cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {
                  "2. Noste kompresné pančuchy: Vaši spojenci v boji proti gravitácii"
                }
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú ako externý podporný systém pre vaše žily. Pomáhajú zlepšovať krvný obeh a redukovať opuchy."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Správna veľkosť"}
                    </strong>
                    {
                      ": Je kľúčové vybrať si správnu veľkosť kompresných pančúch. Príliš tesné môžu byť kontraproduktívne."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Gradovaná kompresia"}
                    </strong>
                    {
                      ": Hľadajte pančuchy s gradovanou kompresiou, ktoré sú najsilnejšie na členku a postupne slabnú smerom k stehnu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Včasné nasadenie"}
                    </strong>
                    {
                      ": Nasaďte si kompresné pančuchy ešte pred odletom a noste ich počas celého letu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {'3. Hydratujte sa: Udržujte svoj "vnútorný oceán" v rovnováhe'}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dostatočné množstvo tekutín je kľúčové pre udržanie tekutej krvi a minimalizovanie rizika vzniku krvnej zrazeniny."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Pite vodu"}
                    </strong>
                    {": Snažte sa vypiť aspoň 2-3 dcl vody každú hodinu letu."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vyhýbajte sa alkoholu a kofeínu"}
                    </strong>
                    {": Tieto nápoje môžu spôsobovať dehydratáciu."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Jedzte vodnaté ovocie"}
                    </strong>
                    {
                      ": Ovocie ako jablká alebo hrozno môže pomôcť s hydratáciou."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"4. Zvládajte stres: Udržujte svoje telo a myseľ v pokoji"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Stres môže zhoršiť symptómy kŕčových žíl a zvýšiť riziko vzniku krvnej zrazeniny. Je to, ako keby ste pridali ďalšiu prekážku do už aj tak zložitej dopravnej situácie."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Relaxačné techniky"}
                    </strong>
                    {": Skúste jednoduché dychové cvičenia alebo meditáciu."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zábava"}
                    </strong>
                    {
                      ": Pripravte si knihu, hudbu alebo film, ktoré vás rozptýlia."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Pohodlné oblečenie"}
                    </strong>
                    {
                      ": Noste voľné, pohodlné oblečenie, ktoré nebude obmedzovať cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"5. Porozprávajte sa s lekárom: Váš osobný navigátor zdravia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pred dlhým letom je vždy dobré konzultovať s lekárom, najmä ak máte závažné kŕčové žily alebo ste v minulosti mali problémy s trombózou."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Lieky"}
                    </strong>
                    {
                      ": Lekár vám môže predpísať lieky na riedenie krvi pre dlhé lety."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Individuálne odporúčania"}
                    </strong>
                    {
                      ": Môže vám poskytnúť špecifické rady based on vašom zdravotnom stave."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Posúdenie rizika"}
                    </strong>
                    {": Pomôže vám zhodnotiť, či je pre vás let bezpečný."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Dodatočné tipy pre komfortné cestovanie s kŕčovými žilami"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Okrem hlavných preventívnych opatrení existuje niekoľko ďalších tipov, ktoré môžu pomôcť ľuďom s kŕčovými žilami cestovať pohodlnejšie:"
                }
              </p>
              <h3 className={listItemClassName3}>
                {"1. Výber sedadla: Strategické plánovanie"}
              </h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Sedadlo pri uličke"}
                    </strong>
                    {": Umožňuje ľahšie vstávanie a prechádzanie sa."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Extra priestor na nohy"}
                    </strong>
                    {
                      ": Ak je to možné, rezervujte si sedadlo s väčším priestorom na nohy."
                    }
                  </p>
                </li>
              </ul>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-2 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                <span className="[color:inherit] leading-[3.9rem] text-2xl break-words">
                  {"2. Úprava stravy pred a počas letu"}
                </span>
              </h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Nízky príjem soli"}
                    </strong>
                    {
                      ": Obmedzenie soli môže pomôcť znížiť zadržiavanie vody v tele."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Vláknina"}
                    </strong>
                    {
                      ": Konzumácia potravín bohatých na vlákninu môže pomôcť predchádzať zápche, ktorá môže zhoršiť príznaky kŕčových žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName3}>
                {"3. Použitie studených obkladov"}
              </h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Studené obklady"}
                    </strong>
                    {
                      ": Aplikácia studených obkladov na nohy počas letu môže pomôcť zmierniť opuch a bolesť."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName3}>4. Elevácia nôh</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zdvihnutie nôh"}
                    </strong>
                    {
                      ": Ak je to možné, snažte sa počas letu zdvihnúť nohy. Môžete na to využiť batožinu uloženú pod sedadlom pred vami."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName3}>5. Masáž nôh</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Jemná masáž"}
                    </strong>
                    {
                      ": Jemné masírovanie nôh môže pomôcť stimulovať cirkuláciu. Začnite od chodidiel a postupujte smerom nahor."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Čo robiť po prílete: Starostlivosť o nohy pokračuje"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vaša starostlivosť o kŕčové žily nekončí pristátím lietadla. Tu sú niektoré odporúčania pre obdobie bezprostredne po lete:"
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
                      {"Sledovanie príznakov"}
                    </strong>
                    {
                      ": Buďte pozorní k akýmkoľvek neobvyklým príznakom, ako je náhly opuch jednej nohy, silná bolesť alebo ťažkosti s dýchaním."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Dlhodobá starostlivosť o kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zatiaľ čo špeciálne opatrenia počas letu sú dôležité, rovnako dôležitá je aj dlhodobá starostlivosť o vaše kŕčové žily. Tu je niekoľko odporúčaní pre každodenný život:"
                }
              </p>
              <ol className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Pravidelné kontroly u lekára"}
                    </strong>
                    {
                      ": Pravidelné návštevy angiológa alebo cievneho chirurga môžu pomôcť včas odhaliť a riešiť prípadné komplikácie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Záver: Bezpečné cestovanie s kŕčovými žilami je možné"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily nemusia byť prekážkou v cestovaní lietadlom. S proper prípravou a dodržiavaním preventívnych opatrení môžete minimalizovať riziká a užiť si cestu bez komplikácií. Pamätajte, že kľúčom je pohyb, hydratácia, kompresné pančuchy a konzultácia s lekárom."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Cestovanie rozširuje obzory a prináša nové zážitky. Nenechajte si tieto príležitosti ujsť kvôli obavám z kŕčových žíl. Namiesto toho využite tieto vedomosti na to, aby ste cestovali bezpečne a pohodlne. Vaše nohy vám poďakujú a vy si budete môcť naplno užiť svoje dobrodružstvá."
                }
              </p>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Môže cestovanie lietadlom zhoršiť moje kŕčové žily?" +
                        " "}
                    </strong>
                    {
                      "Áno, dlhodobé sedenie počas letu a obmedzený pohyb môžu zhoršiť príznaky kŕčových žíl a zvýšiť riziko vzniku krvnej zrazeniny. Preto je dôležité dodržiavať preventívne opatrenia "
                    }
                    <strong className="[color:inherit] break-words">.</strong>
                  </p>
                </li>
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
                      {"Môžem použiť lieky na riedenie krvi pred letom?" + " "}
                    </strong>
                    {
                      "Použitie liekov na riedenie krvi by malo byť vždy konzultované s lekárom. V niektorých prípadoch môže lekár odporučiť preventívne použitie nízkomolekulárneho heparínu pred dlhým letom, ale toto rozhodnutie závisí od individuálneho zdravotného stavu pacienta."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Pamätajte, že každý človek je iný a čo funguje pre jedného, nemusí fungovať pre druhého. Vždy je najlepšie konzultovať svoj konkrétny prípad s lekárom a prispôsobiť tieto odporúčania vašim individuálnym potrebám a zdravotnému stavu."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
