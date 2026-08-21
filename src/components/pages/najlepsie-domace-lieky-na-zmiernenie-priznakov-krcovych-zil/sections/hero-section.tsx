const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId najlepsie-domace-lieky-na-zmiernenie-priznakov-krcovych-zil-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  className: string;
  text: string;
  separator?: string;
};

function ListItem({ className, text, separator }: ListItemProps) {
  return (
    <>
      <span className={className}>{text}</span>
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
      <li className="text-black break-words">
        <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
          <span className="font-body break-words">{text}</span>
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem6Props = {
  descriptionClassName: string;
  text: string;
  separator?: string;
};

function ListItem6({ descriptionClassName, text, separator }: ListItem6Props) {
  return (
    <>
      <li className="text-black break-words">
        <p className={descriptionClassName}>
          <span className="font-body break-words">{text}</span>
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Predtým, ako sa ponoríme do sveta domácich liekov, pozrime sa bližšie na to, čo vlastne kŕčové žily sú.",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "Kŕčové žily",
  },
  {
    className: "font-body text-black break-words",
    text: ", odborne nazývané aj",
  },
  { className: "font-body text-black font-bold break-words", text: "varixy" },
  {
    className: "font-body text-black break-words",
    text: ", sú rozšírené a pokrútené žily, ktoré vystupujú nad povrch kože. Najčastejšie sa objavujú na nohách, ale môžu sa vyskytnúť kdekoľvek na tele.",
  },
];

export const bodyTextSegments: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Predstavte si vaše žily ako cesty, po ktorých prúdi krv späť k srdcu. Kŕčové žily sú ako tie cesty plné zápch, kde sa krv rozhodla, že si dá pauzu a zostane tam visieť. Nie je to len estetický problém - kŕčové žily môžu spôsobovať",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "bolesť nôh od kolien dolu",
  },
  {
    className: "font-body text-black break-words",
    text: ", opuchy, a v niektorých prípadoch aj vážnejšie zdravotné komplikácie.",
  },
];

export const items3: ListItem3Props[] = [
  { text: 'Genetika - Ďakujeme, mama a oco, za tento "krásny" dar!' },
  { text: "Vek - Čím viac sviečok na torte, tým väčšia šanca na žilnú párty." },
  {
    text: "Pohlavie - Dámy, máme to ťažšie. Príroda nám dala viac hormónov a s nimi aj väčšiu šancu na kŕčové žily.",
  },
  { text: "Obezita - Čím viac kilogramov, tým väčší tlak na naše úbohé žily." },
  {
    text: 'Sedavý životný štýl - Ak je vaša obľúbená športová disciplína "maratón seriálov na gauči", vaše žily sa môžu rozhodnúť protestovať.',
  },
];

export const bodyTextSegments2: ListItemProps[] = [
  {
    className: "font-body break-words",
    text: "Tehotenstvo - Ďalší dôvod, prečo je",
  },
  {
    className: "font-body font-bold break-words",
    text: "tehotenstvo a kŕčové žily",
  },
  { className: "font-body break-words", text: "často spojené." },
];

export const bodyTextSegments3: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Pravidelná fyzická aktivita je kľúčová pre zlepšenie prekrvenia a svalového tonusu. Skúste tieto",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "cviky na kŕčové žily",
  },
  { className: "font-body text-black break-words", text: ":" },
];

export const items6: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Chôdza - Jednoduchá, ale efektívna. Začnite s 30 minútami denne.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Plávanie - Skvelé pre celé telo a šetrné k vašim kĺbom.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Bicyklovanie - Či už vonku alebo na stacionárnom bicykli, vaše žily vám poďakujú.",
  },
];

export const items7: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Položiť vankúš pod nohy, keď sedíte alebo ležíte.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Ľahnúť si na zem a oprieť nohy o stenu.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Investovať do špeciálnej stoličky na zdvihnutie nôh.",
  },
];

export const items8: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Zabaliť ľad do uteráka a jemne ho priložiť na postihnutú oblasť na 10-15 minút.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Striedať studené a teplé obklady pre maximálny efekt.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Použiť zmrazené vrecko hrášku (bonus: po rozmrazení máte večeru!)",
  },
];

export const bodyTextSegments4: ListItemProps[] = [
  {
    className: "font-body text-black font-bold break-words",
    text: "Kompresné pančuchy",
  },
  {
    className: "font-body text-black break-words",
    text: "sú ako objatie pre vaše nohy. Pomáhajú zlepšovať krvný obeh a zmierňovať opuchy. Môžete si vybrať",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "kompresné pančuchy Dr. Max",
  },
  {
    className: "font-body text-black break-words",
    text: "alebo iné značky. Sú dostupné v rôznych stupňoch kompresie, od ľahkej po silnú.",
  },
];

export const items10: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Celozrnné produkty",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Ovocie a zeleninu",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Strukoviny",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Orechy a semená",
  },
];

export const items11: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Ginkgo biloba - zlepšuje krvný obeh",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Koňský gaštan - posilňuje žilové steny",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Rutin - pomáha znižovať opuchy",
  },
];

export const bodyTextSegments5: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Okrem týchto domácich liekov, je dôležité aj to, ako žijete. Tu je niekoľko tipov na",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "životný štýl a kŕčové žily",
  },
  { className: "font-body text-black break-words", text: ":" },
];

export const items13: ListItem3Props[] = [
  {
    text: "Udržujte zdravú hmotnosť - Každé kilo navyše je extra záťaž pre vaše žily.",
  },
  {
    text: "Vyhnite sa dlhému sedeniu alebo státiu - Ak musíte dlho sedieť alebo stáť, robte si pravidelné prestávky na pohyb.",
  },
  {
    text: "Noste pohodlné oblečenie - Vyhnite sa tesným nohaviciam a ponožkám, ktoré môžu obmedzovať cirkuláciu.",
  },
];

export const bodyTextSegments6: ListItemProps[] = [
  { className: "font-body break-words", text: "Prestaňte fajčiť -" },
  {
    className: "font-body font-bold break-words",
    text: "Fajčenie a kŕčové žily",
  },
  {
    className: "font-body break-words",
    text: "nejdú dobre dokopy. Fajčenie poškodzuje vaše cievy a zhoršuje cirkuláciu.",
  },
];

export const bodyTextSegments7: ListItemProps[] = [
  { className: "font-body break-words", text: "Obmedzte alkohol -" },
  {
    className: "font-body font-bold break-words",
    text: "Alkohol a kŕčové žily",
  },
  {
    className: "font-body break-words",
    text: "tiež nie sú najlepší priatelia. Alkohol rozširuje cievy a môže zhoršiť opuchy.",
  },
];

export const bodyTextSegments8: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Hoci domáce lieky môžu byť účinné pri miernych príznakoch, existujú situácie, kedy by ste mali vyhľadať lekársku pomoc. Navštívte",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "angiológa",
  },
  { className: "font-body text-black break-words", text: "alebo" },
  {
    className: "font-body text-black font-bold break-words",
    text: "cievneho chirurga",
  },
  { className: "font-body text-black break-words", text: ", ak:" },
];

export const items17: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Máte silné bolesti alebo opuchy",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Spozorujete zmeny farby kože na nohách",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Máte otvorené rany alebo vredy na nohách",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Kŕčové žily vám bránia v každodenných aktivitách",
  },
];

export const bodyTextSegments9: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Lekár môže odporučiť ďalšie možnosti liečby, ako je",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "sklerotizácia kŕčových žíl",
  },
  { className: "font-body text-black break-words", text: "," },
  {
    className: "font-body text-black font-bold break-words",
    text: "laserová operácia kŕčových žíl",
  },
  {
    className: "font-body text-black break-words",
    text: "alebo tradičná chirurgická liečba.",
  },
];

export const bodyTextSegments10: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Žiaľ, neexistuje žiadny",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "zázračný liek na kŕčové žily",
  },
  {
    className: "font-body text-black break-words",
    text: ". Liečba zvyčajne zahŕňa kombináciu životného štýlu, cvičenia a niekedy medicínskych zákrokov.",
  },
];

export const bodyTextSegments11: ListItemProps[] = [
  {
    className: "font-body text-black font-bold break-words",
    text: "Bolesť kŕčových žíl",
  },
  {
    className: "font-body text-black break-words",
    text: "môže byť rôzna. Niektorí ľudia popisujú ťažký pocit v nohách, iní pociťujú bodavú alebo pulzujúcu bolesť. Môže sa vyskytnúť aj",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "svrbenie nôh v noci",
  },
  { className: "font-body text-black break-words", text: "." },
];

export const bodyTextSegments12: ListItemProps[] = [
  {
    className: "font-body text-black break-words",
    text: "Áno, ale je dôležité dodržiavať niekoľko opatrení. Noste",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "kompresné pančuchy",
  },
  {
    className: "font-body text-black break-words",
    text: ", často sa prechádzajte počas letu a pite veľa vody. Ak ste nedávno podstúpili",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "operáciu kŕčových žíl",
  },
  {
    className: "font-body text-black break-words",
    text: ", poraďte sa s lekárom pred dlhým letom.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zSnsTp"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Najlepšie domáce lieky na zmiernenie príznakov kŕčových žíl"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte účinné domáce lieky na zmiernenie príznakov kŕčových žíl. Od cvičenia cez kompresné pančuchy až po bylinné pomocníky - tento komplexný sprievodca vám pomôže zvládnuť kŕčové žily prirodzeným spôsobom. Získajte praktické tipy pre zdravší životný štýl a zistite, kedy je čas navštíviť lekára."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] hidden mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zMC1VV"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(6338px,auto)_1fr] max-lg:px-4 lg:min-h-[235.6875rem] lg:max-w-[76.5rem] lg:grid-cols-[15.9314%_0.898693%_65.4412%_0.898693%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(3167px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-5">
            <div
              id="z5u24S"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="man cutting vegetables"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="man cutting vegetables"
                  src="https://images.unsplash.com/photo-1556911220-dabc1f02913a?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="man cutting vegetables"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="man cutting vegetables"
                  src="https://images.unsplash.com/photo-1556911220-dabc1f02913a?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-4">
            <div
              id="zPew8s"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Vitajte vo svete kŕčových žíl! Ak máte pocit, že vaše nohy vyzerajú ako mapa metra, ste na správnom mieste. Kŕčové žily môžu byť nepríjemným spoločníkom, ale nebojte sa - existuje množstvo domácich riešení, ktoré vám môžu pomôcť zmierniť príznaky a zlepšiť vaše pohodlie. Poďme sa spolu pozrieť na tieto cenovo dostupné a ľahko dostupné riešenia."
                  }
                </span>
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Čo sú vlastne kŕčové žily?"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Prečo vznikajú kŕčové žily?"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Existuje niekoľko dôvodov, prečo sa naše žily rozhodnú rebelovať:"
                  }
                </span>
              </p>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    {bodyTextSegments2.map((item, index) => (
                      <ListItem
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments2.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
              </ol>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Najlepšie domáce lieky na kŕčové žily"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Teraz, keď vieme, s čím bojujeme, poďme sa pozrieť na najlepšie domáce lieky, ktoré môžu pomôcť zmierniť príznaky kŕčových žíl:"
                  }
                </span>
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"1. Pohyb je kráľ"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments3.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments3.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ul className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem6
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Nezabudnite, že ak máte sedavé zamestnanie, je dôležité každú hodinu vstať a trochu sa prejsť. Vaše žily nie sú fanúšikmi dlhého sedenia!"
                  }
                </span>
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"2. Zdvihnutie nôh - gravitačná joga"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Keď sa cítite unavení a opuchnutí v oblasti nôh, skúste ich zdvihnúť nad úroveň srdca. Je to ako gravitačná joga pre vaše žily. Môžete si napríklad:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem6
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"3. Studené obklady - ľadová výzva pre vaše žily"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black font-bold break-words">
                  {"Studené obklady" + " "}
                </span>
                <span className="font-body text-black break-words">
                  {
                    "môžu byť účinné pri zmiernení opuchu a bolesti. Je to ako ľadová výzva pre vaše žily. Skúste:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem6
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"4. Kompresné pančuchy - objatie pre vaše nohy"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments4.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments4.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"5. Strava bohatá na vlákninu - palivo pre vaše žily"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Zdravá strava s vysokým obsahom vlákniny môže pomôcť zmierniť príznaky kŕčových žíl. Zahrňte do svojej stravy:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem6
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Vláknina pomáha udržiavať zdravú hmotnosť a zlepšuje trávenie, čo môže mať priaznivý vplyv na kŕčové žily."
                  }
                </span>
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"6. Hydratácia - voda je váš najlepší priateľ"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Predstavte si, že vaše telo je ako kvetina. Bez vody zvädne a scvrkne sa. To isté platí pre vaše žily. Pite dostatok vody počas dňa, aby ste podporili zdravý krvný obeh."
                  }
                </span>
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"7. Bylinné pomocníky"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Niektoré bylinky môžu pomôcť zmierniť príznaky kŕčových žíl. Skúste:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem6
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Vždy sa poraďte s lekárom pred užívaním akýchkoľvek bylinných doplnkov, najmä ak užívate iné lieky."
                  }
                </span>
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Životný štýl a kŕčové žily"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments5.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments5.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ol className="break-words my-0">
                {items13.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items13.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments6.map((item, index) => (
                      <ListItem
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments6.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    {bodyTextSegments7.map((item, index) => (
                      <ListItem
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments7.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
              </ol>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Kedy vyhľadať lekársku pomoc?"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments8.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments8.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ul className="break-words my-0">
                {items17.map((item, index) => (
                  <ListItem6
                    key={index}
                    {...item}
                    separator={index < items17.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments9.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments9.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Často kladené otázky"}
                </span>
              </h2>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Existuje zázračný liek na kŕčové žily?"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments10.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments10.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Ako bolia kŕčové žily?"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments11.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments11.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Môžem cestovať lietadlom s kŕčovými žilami?"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments12.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments12.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Záver"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Kŕčové žily môžu byť nepríjemným spoločníkom, ale s týmito domácimi liekmi a zmenami životného štýlu môžete výrazne zmierniť ich príznaky. Pamätajte, že prevencia je vždy lepšia ako liečba. Začnite s týmito zmenami dnes a vaše nohy vám poďakujú!"
                  }
                </span>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-0">
                <span className="font-body text-black break-words">
                  {
                    "A nezabudnite, aj keď kŕčové žily môžu byť frustrujúce, nie ste v tom sami. Milióny ľudí po celom svete bojujú s týmto problémom. S trochou trpezlivosti, vytrvalosti a možno aj humorom môžete tento boj vyhrať. Tak do toho, vaše zdravé a krásne nohy na vás čakajú!"
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
