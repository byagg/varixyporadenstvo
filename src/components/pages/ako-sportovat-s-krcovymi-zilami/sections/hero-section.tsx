const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId ako-sportovat-s-krcovymi-zilami-hero-section
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

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Športovanie s kŕčovými žilami nie je len možné, ale môže byť kľúčom k zlepšeniu vášho stavu a celkového zdravia. Kľúčom je výber vhodných aktivít, dodržiavanie bezpečnostných opatrení a počúvanie vášho tela. Plávanie, chôdza, cyklistika, joga a aqua aerobik sú vynikajúce možnosti, ktoré môžu pomôcť zlepšiť cirkuláciu, znížiť opuchy a zmierniť bolesť.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že každý človek je jedinečný a čo funguje pre jedného, nemusí fungovať pre druhého. Vždy je najlepšie konzultovať svoj cvičebný plán s lekárom alebo fyzioterapeutom, ktorý pozná váš zdravotný stav.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Nenechajte kŕčové žily stáť v ceste vášmu aktívnemu životnému štýlu. S proper opatreniami a vhodne zvoleným cvičením môžete nielen zmierniť príznaky, ale aj zlepšiť svoje celkové zdravie a pohodu. Tak šup do toho - vaše žily vám poďakujú!",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1: ": Pokrútené, vystúpené žily modrej alebo fialovej farby.",
  },
  {
    text: "Bolesť nôh od kolien dole",
    text_1: ": Pocit ťažkosti a únavy v nohách, najmä v dolnej časti.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      ": Najmä v oblasti členkov a chodidiel, ktoré sa zvyčajne zhoršujú počas dňa.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Nepríjemné pocity v oblasti postihnutých žíl.",
  },
  { text: "Nočné kŕče", text_1: ": Bolestivé sťahy svalov, najmä v lýtkach." },
];

export const items3: ListItem3Props[] = [
  { text: "Hydrostatický tlak vody pomáha zlepšovať žilový návrat" },
  { text: "Nízky dopad na kĺby" },
  { text: "Zapája celé telo, zlepšuje celkovú cirkuláciu" },
  { text: "Chladivý efekt vody môže zmierniť opuchy a bolesť" },
];

export const items4: ListItem3Props[] = [
  { text: "Nízky dopad na kĺby" },
  { text: "Podporuje prácu svalovej pumpy v lýtkach" },
  { text: "Pomáha udržiavať zdravú hmotnosť" },
  { text: "Môže sa ľahko zaradiť do každodenného života" },
];

export const items5: ListItem3Props[] = [
  { text: "Nízky dopad na kĺby" },
  { text: "Zlepšuje cirkuláciu v nohách" },
  { text: "Posilňuje svaly nôh, ktoré pomáhajú pri žilovom návrate" },
  { text: "Môže byť vykonávaná vonku alebo na stacionárnom bicykli" },
];

export const items6: ListItem3Props[] = [
  { text: "Zlepšuje flexibilitu a silu" },
  { text: "Niektoré pozície podporujú žilový návrat" },
  { text: "Pomáha znižovať stres, ktorý môže zhoršovať príznaky kŕčových žíl" },
  { text: "Zlepšuje celkovú cirkuláciu v tele" },
];

export const items7: ListItem3Props[] = [
  { text: "Hydrostatický tlak vody podporuje žilový návrat" },
  { text: "Nízky dopad na kĺby" },
  { text: "Odpor vody poskytuje jemnú formu posilňovania" },
  { text: "Chladivý efekt vody zmierňuje opuchy a bolesť" },
];

export const items8: ListItem2Props[] = [
  {
    text: "Zlepšenie cirkulácie",
    text_1:
      ": Cvičenie podporuje prácu svalovej pumpy, ktorá pomáha tlačiť krv späť k srdcu.",
  },
  {
    text: "Zníženie opuchov",
    text_1: ": Pohyb pomáha redukovať zadržiavanie tekutín v nohách.",
  },
  {
    text: "Kontrola hmotnosti",
    text_1: ": Nadváha zvyšuje tlak na žily v nohách.",
  },
  {
    text: "Zlepšenie nálady",
    text_1:
      ": Cvičenie uvoľňuje endorfíny, ktoré môžu zmierniť bolesť a zlepšiť celkovú pohodu.",
  },
];

export const items9: ListItem2Props[] = [
  {
    text: "Môžem cvičiť s kŕčovými žilami?",
    text_1:
      " Áno, môžete cvičiť s kŕčovými žilami. Dôležité je zvoliť si vhodnú formu športu a dodržiavať odporúčania pre bezpečné športovanie.",
  },
  {
    text: "Je možné, že športovanie zhorší moje kŕčové žily?",
    text_1:
      " Pri správnom výbere aktivity a dodržiavaní rád od odborníkov je riziko zhoršenia minimálne. Naopak, vhodné cvičenie môže príznaky zmierniť.",
  },
  {
    text: "Môžem športovať s kompresnými pančuchami?",
    text_1:
      " Áno, športovanie s kompresnými pančuchami je nielen možné, ale často aj odporúčané. Pomáhajú podporovať cirkuláciu počas cvičenia.",
  },
  {
    text: "Aké formy cvičenia sú najvhodnejšie pre kŕčové žily?",
    text_1:
      " Plávanie, chôdza, cyklistika, joga a aqua aerobik patria medzi najvhodnejšie formy cvičenia pre ľudí s kŕčovými žilami.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zwhcMz"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako športovať s kŕčovými žilami?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Článok poskytuje odborný pohľad na bezpečné a efektívne športovanie s kŕčovými žilami. Zahŕňa vysvetlenie príčin a príznakov kŕčových žíl, odporúčané formy cvičenia ako plávanie, chôdza a cyklistika, a dôležité rady pre minimalizáciu rizík pri športovaní. Článok zdôrazňuje význam kompresných pančúch, správnej hydratácie a vhodného výberu aktivít pre ľudí s kŕčovými žilami na nohách."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">7 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zzHdj2"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(9685px,auto)_1fr] max-lg:px-4 lg:min-h-[399.625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(5662px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zOnjzD"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="group of people running on stadium"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="group of people running on stadium"
                  src="/external-assets/8028539a389f7f6f.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="group of people running on stadium"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="group of people running on stadium"
                  src="/external-assets/2c9ea2a898dc9405.jpg"
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
              id="zdfGoq"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú nielen estetickým problémom, ale môžu výrazne ovplyvniť kvalitu života človeka. Mnoho ľudí s týmto ochorením sa obáva, že športovanie môže ich stav zhoršiť. V skutočnosti však správne zvolená fyzická aktivita môže byť kľúčom k zlepšeniu príznakov a celkového zdravia. V tomto článku sa pozrieme na to, ako bezpečne a efektívne športovať s kŕčovými žilami."
                }
              </p>
              <h2 className={listItemClassName}>Čo sú kŕčové žily?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily, odborne nazývané varixy, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne. Je to, akoby sa pokazila spätná klapka vo vašom umývadle - voda (alebo v tomto prípade krv) sa hromadí tam, kde by nemala."
                }
              </p>
              <h3 className={listItemClassName2}>Príznaky kŕčových žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kŕčové žily môžu spôsobovať rôzne nepríjemné príznaky:"}
              </p>
              <ol className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zmeny na koži"}
                    </strong>
                    {
                      ": Suchá, šupinatá koža alebo hyperpigmentácia v oblasti postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Vplyv kŕčových žíl na športovanie"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Mnoho ľudí s kŕčovými žilami sa obáva, že športovanie môže zhoršiť ich stav. Tieto obavy nie sú úplne neopodstatnené, pretože niektoré formy cvičenia môžu skutočne zvýšiť tlak v žilách a potenciálne zhoršiť príznaky. Avšak, s dostatočným porozumením a správnymi opatreniami, športovanie môže mať výrazne pozitívny vplyv na žilový systém a zlepšiť symptómy kŕčových žíl."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Potenciálne riziká športovania s kŕčovými žilami"}
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zvýšený tlak v žilách"}
                    </strong>
                    {
                      ": Niektoré cvičenia, najmä tie s vysokým dopadom, môžu zvýšiť tlak v žilách dolných končatín."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zhoršenie opuchov"}
                    </strong>
                    {
                      ": Nevhodne zvolená aktivita môže viesť k zhoršeniu opuchov nôh."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zvýšené riziko poranenia"}
                    </strong>
                    {
                      ": Oslabené žily môžu byť náchylnejšie na poranenie pri niektorých športoch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Bezpečné a účinné formy športu pre kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Našťastie existuje mnoho foriem cvičenia, ktoré sú nielen bezpečné, ale môžu aktívne pomôcť pri manažmente kŕčových žíl. Tu je niekoľko odporúčaných aktivít:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Plávanie: Váš najlepší priateľ v boji proti kŕčovým žilám"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Plávanie je považované za jednu z najlepších foriem cvičenia pre ľudí s kŕčovými žilami. Je to ako by ste dali svojim žilám malú dovolenku od gravitácie."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Výhody plávania"}
                </strong>
                {":"}
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
                <strong className="[color:inherit] break-words">Tip</strong>
                {
                  ": Začnite s krátkymi intervalmi plávania a postupne zvyšujte dĺžku a intenzitu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Chôdza: Jednoduchá, ale účinná"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Chôdza je ako jemná masáž pre vaše žily. Pravidelné prechádzky môžu výrazne zlepšiť cirkuláciu v nohách."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Výhody chôdze"}
                </strong>
                {":"}
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
                <strong className="[color:inherit] break-words">Tip</strong>
                {
                  ": Snažte sa chodiť aspoň 30 minút denne. Môžete to rozdeliť na kratšie intervaly počas dňa."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3. Cyklistika: Krúžte pedálmi pre zdravé žily"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Cyklistika je vynikajúcou voľbou pre ľudí s kŕčovými žilami. Je to ako by ste dali svojim nohám jemnú, ale účinnú masáž."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Výhody cyklistiky"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">Tip</strong>
                {
                  ": Začnite s kratšími jazdami a postupne zvyšujte vzdialenosť a intenzitu. Dbajte na správne nastavenie bicykla."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4. Joga: Flexibilita a cirkulácia v jednom"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Joga nie je len o flexibilite - môže výrazne zlepšiť cirkuláciu a zmierniť príznaky kŕčových žíl."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Výhody jogy"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">Tip</strong>
                {
                  ": Vyhýbajte sa pozíciám, ktoré vyžadujú dlhodobé státie alebo nadmerné napínanie nôh."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"5. Aqua aerobik: Cvičenie vo vode pre maximálny efekt"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Aqua aerobik kombinuje výhody plávania s cieleným cvičením."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Výhody aqua aerobiku"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">Tip</strong>
                {
                  ": Hľadajte kurzy aqua aerobiku špeciálne zamerané na ľudí s cievnymi problémami."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Rady a tipy pre športovanie s kŕčovými žilami"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aby ste maximalizovali výhody cvičenia a minimalizovali riziká, tu je niekoľko dôležitých rád:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {
                  "1. Nosenie kompresných pančúch: Vaši spojenci v boji proti gravitácii"
                }
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú ako externý podporný systém pre vaše žily. Pomáhajú zlepšovať krvný obeh a redukovať opuchy."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Tipy pre používanie kompresných pančúch"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Nasaďte si ich pred cvičením"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Vyberte si správnu veľkosť a úroveň kompresie (konzultujte s lekárom)"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Noste ich aj po cvičení, najmä ak máte sedavé zamestnanie"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"2. Správne zahrievanie a chladenie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si svoje žily ako elastické gumičky. Pred natiahnutím ich potrebujete zahriať, aby sa nepoškodili."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Tipy pre zahrievanie a chladenie"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Začnite s 5-10 minútami ľahkého kardio cvičenia"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Postupne zvyšujte intenzitu"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Po cvičení venujte čas postupnému znižovaniu intenzity a strečingu"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"3. Pravidelné prestávky a odpočinok"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Vaše žily potrebujú čas na regeneráciu, rovnako ako svaly."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Tipy pre odpočinok"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Počas cvičenia si doprajte krátke prestávky"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Zdvihnite nohy nad úroveň srdca počas odpočinku"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Doprajte si dostatočný spánok pre celkovú regeneráciu tela"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {
                  '4. Správna hydratácia: Udržujte svoj "vnútorný oceán" v rovnováhe'
                }
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dostatočné množstvo tekutín je kľúčové pre udržanie tekutej krvi a minimalizovanie rizika vzniku krvnej zrazeniny."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Tipy pre hydratáciu"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Pite vodu pred, počas a po cvičení"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Vyhnite sa alkoholu a nadmernému množstvu kofeínu"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Sledujte farbu moču - svetlá farba indikuje dobrú hydratáciu"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"5. Vyhýbanie sa nadmernému namáhaniu"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Vaše telo vám povie, kedy je toho príliš. Počúvajte ho."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Tipy pre vyhýbanie sa nadmernému namáhaniu"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Začnite pomaly a postupne zvyšujte intenzitu"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Vyhnite sa cvičeniam s vysokým dopadom, ako je beh alebo skoky"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak cítite bolesť alebo nepohodlie, prestaňte cvičiť a odpočívajte"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Výhody športovania pre kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pravidelné cvičenie môže priniesť mnoho výhod pre ľudí s kŕčovými žilami:"
                }
              </p>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Prevencia ďalšieho rozvoja kŕčových žíl"}
                    </strong>
                    {
                      ": Silnejšie svaly a lepšia cirkulácia môžu pomôcť predchádzať vzniku nových kŕčových žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
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
                      {"Ako často by som mal cvičiť s kŕčovými žilami?" + " "}
                    </strong>
                    {
                      "Odporúča sa cvičiť pravidelne, ideálne 30 minút denne, 5 dní v týždni. Vždy však konzultujte frekvenciu a intenzitu cvičenia s vaším lekárom."
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
