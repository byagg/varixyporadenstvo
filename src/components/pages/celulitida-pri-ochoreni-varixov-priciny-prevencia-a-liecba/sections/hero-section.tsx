const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-lg";

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
  text_1: string;
  text_2: string;
};

function ListItem2({ text_1, text_2 }: ListItem2Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {"-" + " "}
      <span className="[color:inherit] font-bold break-words">
        <strong className="[color:inherit] break-words">{text_1}</strong>
      </span>
      {text_2}
    </p>
  );
}

export const items: ListItemProps[] = [
  {
    text: "- Pravidelne navštevujte lekára pre monitorovanie stavu varixov a prevenciu recidívy celulitídy.",
  },
  {
    text: "- Naučte sa rozpoznávať príznaky celulitídy a včas vyhľadajte lekársku pomoc.",
  },
  {
    text: "- Zvážte skleroterapiu, laserové ošetrenie alebo chirurgický zákrok pre manažment varixov.",
  },
  {
    text: "- Urobte dlhodobé zmeny v životnom štýle pre zníženie rizika recidívy celulitídy aj progresie varixov.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text_1: "Poruchy cirkulácie:",
    text_2:
      " Znížený prietok krvi v oblasti varixov oslabuje obranyschopnosť tela proti infekcii.",
  },
  {
    text_1: "Edém:",
    text_2:
      " Zadržiavanie tekutín v tkanivach vytvára prostredie priaznivé pre rast baktérií.",
  },
  {
    text_1: "Poškodenie kože:",
    text_2:
      "Škrabanie alebo drobné poranenia v oblasti varixov môžu vytvoriť vstupnú bránu pre baktérie.",
  },
  {
    text_1: "Oslabená imunita:",
    text_2: " Chronické žilové ochorenie môže lokálne znížiť imunitnú odpoveď.",
  },
  {
    text_1: "Diabetes:",
    text_2:
      " Pacienti s diabetom a varixami majú zvýšené riziko celulitídy kvôli zníženej schopnosti hojenia rán.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zq2MR6"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Celulitída pri ochorení varixov: Príčiny, prevencia a liečba"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Zistite, ako súvisí celulitída s varixami, aké sú rizikové faktory a ako predchádzať a liečiť toto závažné zápalové ochorenie kože. Komplexný sprievodca pre pacientov s kŕčovými žilami."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] hidden mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">3 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zdktZz"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(5403px,auto)_1fr] max-lg:px-4 lg:min-h-[227.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_16.585%_33.1699%_16.585%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3171px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zj-f0D"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="red letters neon light"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="red letters neon light"
                  src="/external-assets/2bbda2a2e13d7635.jpg"
                  height="344"
                  width="406"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="red letters neon light"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="red letters neon light"
                  src="/external-assets/6a257f80d7e4fe75.jpg"
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
              id="zP0Mal"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-12 max-[921px]:mb-12 max-lg:leading-[3.25rem] max-lg:text-[2.5rem] lg:leading-tight lg:text-2xl">
                <strong className="[color:inherit] break-words">
                  {"Čo je celulitída a ako súvisí s varixami?"}
                </strong>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Celulitída je vážne bakteriálne zápalové ochorenie kože a podkožného tkaniva, ktoré môže byť obzvlášť nebezpečné u pacientov s varixami dolných končatín. Varixy, charakterizované rozšírenými a pokrútenými žilami, často vedú k poruchám krvného obehu, čo zvyšuje riziko vzniku a komplikácií celulitídy."
                }
              </p>
              <h2 className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Prečo sú pacienti s varixami náchylnejší na celulitídu?"}
                </strong>
              </h2>
              {items2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <h2 className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Ako predchádzať celulitíde pri varixoch?"}
                </strong>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"1. Starostlivosť o pokožku"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pravidelne hydratujte pokožku, opatrne ošetrujte akékoľvek rany a vyhýbajte sa dráždivým látkam, ktoré môžu poškodiť pokožku."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"2. Manažment varixov"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Noste kompresívne pančuchy, pravidelne dvíhajte nohy a konzultujte možnosti liečby varixov s lekárom."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"3. Zdravý životný štýl"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Udržujte zdravú hmotnosť, pravidelne cvičte (chôdza, plávanie) a vyhýbajte sa dlhému státiu alebo sedeniu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"4. Dôsledná hygiena"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dbajte na dôkladnú hygienu nôh a pravidelne kontrolujte prítomnosť poranení. Pri zvýšenom riziku používajte antibakteriálne mydlá."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"5. Manažment chronických ochorení"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dôsledne kontrolujte diabetes a iné chronické ochorenia. Pravidelne navštevujte lekára pre monitorovanie stavu varixov."
                }
              </p>
              <h2 className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Liečba celulitídy pri varixoch"}
                </strong>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"1. Antibiotická liečba"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Včasné nasadenie antibiotík je kľúčové. Voľba antibiotík závisí od závažnosti infekcie a celkového zdravotného stavu pacienta."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"2. Elevácia končatiny"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zdvihnutie postihnutej končatiny nad úroveň srdca pomáha znížiť opuch a zlepšiť cirkuláciu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"3. Kompresívna terapia"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po ústupe akútnych príznakov môže byť indikované nosenie kompresívnych pančúch."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"4. Manažment bolesti a lokálna starostlivosť"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Analgetiká môžu zmierniť bolesť. Aplikácia chladných obkladov pomáha zmierniť zápal. Dôsledne čistite a ošetrujte postihnutú oblasť."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"5. Hospitalizácia"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V závažných prípadoch môže byť potrebná hospitalizácia pre intravenóznu antibiotickú liečbu a intenzívne monitorovanie."
                }
              </p>
              <h2 className={listItemClassName}>
                <strong className="[color:inherit] break-words">
                  {"Dlhodobý manažment celulitídy pri varixoch"}
                </strong>
              </h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName}>
                <strong className="[color:inherit] break-words">Záver</strong>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Celulitída pri ochorení varixov je závažný zdravotný problém vyžadujúci komplexný prístup. Dôsledná starostlivosť o pokožku, manažment varixov a zdravý životný štýl môžu významne znížiť riziko vzniku celulitídy. Pri príznakoch celulitídy okamžite vyhľadajte lekársku pomoc. Správny manažment a pravidelné sledovanie umožňujú účinne kontrolovať toto ochorenie a zlepšiť kvalitu života pacientov s varixami."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-lg">
                <strong className="[color:inherit] break-words">
                  {"Často kladené otázky (FAQ)"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"Aké sú prvé príznaky celulitídy pri varixoch?"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Medzi prvé príznaky patria začervenanie, opuch, teplo a bolesť v postihnutej oblasti. Môže sa vyskytnúť aj horúčka a celková nevoľnosť."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"Je celulitída pri varixoch nebezpečná?"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, celulitída môže byť nebezpečná, najmä u pacientov s varixami. Bez liečby sa môže rýchlo šíriť a viesť k vážnym komplikáciám."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"Ako dlho trvá liečba celulitídy pri varixoch?"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba zvyčajne trvá 7-14 dní, ale môže sa predĺžiť v závislosti od závažnosti infekcie a celkového zdravotného stavu pacienta."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <em className="[color:inherit] break-words">
                  {"Môžem cvičiť, ak mám celulitídu pri varixoch?"}
                </em>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Počas akútnej fázy celulitídy sa odporúča odpočinok a elevácia končatiny. Po zlepšení stavu konzultujte vhodné cvičenia s lekárom."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                <em className="[color:inherit] break-words">
                  {
                    "Tento článok slúži len na informatívne účely a nenahrádza odbornú lekársku konzultáciu. Pri podozrení na celulitídu alebo akékoľvek komplikácie varixov vždy kontaktujte svojho lekára."
                  }
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
