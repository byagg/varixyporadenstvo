const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId varixy-a-ich-vplyv-na-krvny-obeh-pomoc-od-cievneho-chirurga-pri-krcoch-v-nohach-hero-section
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
};

function ListItem2({ text, text_1 }: ListItem2Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      <strong className="[color:inherit] break-words">{text}</strong>
      {text_1}
    </p>
  );
}

type ListItem3Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem3({ text, text_1, separator }: ListItem3Props) {
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

type ListItem6Props = {
  text: string;
  separator?: string;
};

function ListItem6({ text, separator }: ListItem6Props) {
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
    text: "Varixy môžu byť viac než len kozmetický problém - môžu výrazne ovplyvniť kvalitu vášho života. Ale s pomocou cievneho chirurga a správnou starostlivosťou môžete znovu získať kontrolu nad zdravím vašich žíl.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že včasná diagnóza a vhodná liečba sú kľúčové. Neignorujte príznaky a nebojte sa vyhľadať pomoc. Váš cievny chirurg je tu, aby vám pomohol nájsť najlepšie riešenie pre vaše jedinečné potreby.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Veď koniec koncov, vaše nohy vás nosia celý život. Zaslúžia si tú najlepšiu starostlivosť, ktorú im môžete poskytnúť. Tak prečo nezačať už dnes?",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Otázka: Sú varixy len kozmetický problém?",
    text_1:
      " Odpoveď: Nie, varixy môžu byť viac než len estetický problém. Môžu spôsobovať bolesť, opuchy a v niektorých prípadoch viesť k vážnejším zdravotným komplikáciám.",
  },
  {
    text: "Otázka: Môžu varixy vzniknúť aj u mladých ľudí?",
    text_1:
      " Odpoveď: Áno, aj keď sú častejšie u starších ľudí, varixy sa môžu vyskytnúť v akomkoľvek veku, dokonca aj u teenagerov.",
  },
  {
    text: "Otázka: Je operácia varixov bolestivá?",
    text_1:
      " Odpoveď: Moderné chirurgické techniky sú minimálne invazívne a väčšina pacientov pociťuje len mierne nepohodlie po zákroku.",
  },
  {
    text: "Otázka: Ako dlho trvá rekonvalescencia po operácii varixov?",
    text_1:
      " Odpoveď: Závisí od typu zákroku, ale väčšina pacientov sa môže vrátiť k bežným aktivitám v priebehu 1-2 týždňov.",
  },
  {
    text: "Otázka: Môžu sa varixy vrátiť po liečbe?",
    text_1:
      " Odpoveď: Áno, existuje možnosť, že sa varixy časom vrátia, ale pravidelné sledovanie a dodržiavanie preventívnych opatrení môže pomôcť minimalizovať toto riziko.",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "Ťažké a unavené nohy",
    text_1: " - akoby ste celý deň nosili na nohách závažia",
  },
  { text: "Opuchy", text_1: " - najmä v oblasti členkov a lýtok" },
  {
    text: "Bolesti",
    text_1: " - od mierneho nepohodlia až po intenzívne bolesti",
  },
  { text: "Kŕče", text_1: " - najmä v noci, keď sa snažíte relaxovať" },
  {
    text: "Svrbenie a pálenie",
    text_1: " - akoby vám po nohách liezli mravce",
  },
  {
    text: "Zmeny farby kože",
    text_1: " - môže sa objaviť začervenanie alebo tmavé škvrny",
  },
];

export const items4: ListItem3Props[] = [
  {
    text: "Genetika",
    text_1: " - Áno, môžete za to čiastočne viniť svojich rodičov!",
  },
  { text: "Vek", text_1: " - S pribúdajúcimi rokmi sa riziko zvyšuje" },
  { text: "Pohlavie", text_1: " - Ženy sú náchylnejšie na vznik varixov" },
  {
    text: "Tehotenstvo",
    text_1: " - Hormóny a zvýšený tlak v panve robia svoje",
  },
  { text: "Nadváha", text_1: " - Extra kilogramy = extra tlak na žily" },
  {
    text: "Sedavé zamestnanie",
    text_1: " - Dlhé sedenie nie je pre vaše žily žiadna výhra",
  },
];

export const items5: ListItem3Props[] = [
  {
    text: "Podrobná anamnéza",
    text_1:
      " - Lekár sa vás bude pýtať na vaše príznaky, životný štýl a rodinnú históriu",
  },
  {
    text: "Fyzické vyšetrenie",
    text_1:
      " - Pozrie sa na vaše nohy a môže vás požiadať, aby ste sa postavili alebo prešli",
  },
  {
    text: "Duplexná ultrasonografia",
    text_1:
      ' - Ide o neinvazívne vyšetrenie, ktoré umožňuje lekárovi "vidieť" prúdenie krvi vo vašich žilách',
  },
];

export const items6: ListItem6Props[] = [
  { text: "Pravidelné cvičenie (najmä chôdza a plávanie)" },
  { text: "Udržiavanie zdravej hmotnosti" },
  { text: "Vyhýbanie sa dlhému státiu alebo sedeniu" },
  { text: "Zdvíhanie nôh, keď odpočívate" },
];

export const items7: ListItem3Props[] = [
  {
    text: "Skleroterapia",
    text_1:
      ' - Predstavte si to ako "zacementovanie" problémových úsekov. Do varixov sa vstrekne roztok, ktorý spôsobí ich zmenšenie a odumretie.',
  },
  {
    text: "Rádiofrekvenčná ablácia",
    text_1:
      ' - Ide o "tepelné uzavretie" problémových žíl pomocou rádiových vĺn.',
  },
  {
    text: "Laserová ablácia",
    text_1:
      " - Podobná metóda ako rádiofrekvenčná ablácia, ale využíva laserové svetlo.",
  },
  {
    text: "Flebektómia",
    text_1:
      " - Chirurgické odstránenie varixov. Je to ako odstránenie problémového úseku cesty.",
  },
];

export const items8: ListItem3Props[] = [
  {
    text: "Vredy na nohách",
    text_1: " - Predstavte si to ako jamy na ceste, ktoré sa ťažko hoja.",
  },
  {
    text: "Trombóza",
    text_1:
      " - To je ako veľká dopravná zápcha vo vašich žilách, ktorá môže byť nebezpečná.",
  },
  {
    text: "Krvácanie",
    text_1: " - Ak sa varix praskne, môže to viesť k významnému krvácaniu.",
  },
];

export const items9: ListItem3Props[] = [
  {
    text: "Noste kompresívne pančuchy",
    text_1:
      " - Áno, možno nie sú najsexy kúskom vášho šatníka, ale vaše nohy vám poďakujú.",
  },
  {
    text: "Hýbte sa",
    text_1:
      " - Pravidelná chôdza je ako masáž pre vaše žily. Aspoň 30 minút denne môže urobiť zázraky.",
  },
  {
    text: "Zdvíhajte nohy",
    text_1:
      " - Keď odpočívate, zdvihnite nohy nad úroveň srdca. Je to ako dať vašim žilám malú prestávku.",
  },
  {
    text: "Vyhýbajte sa prílišnému teplu",
    text_1: " - Horúce kúpele a sauna môžu zhoršiť opuchy.",
  },
  {
    text: "Používajte chladné obklady",
    text_1:
      " - Ak cítite bolesť alebo ťažobu v nohách, skúste studený obklad. Je to ako osviežujúci nápoj pre vaše nohy.",
  },
  {
    text: "Noste pohodlnú obuv",
    text_1:
      " - Vysoké podpätky sú pre vaše žily ako prekážková dráha. Doprajte si pohodlné topánky s nízkou podrážkou.",
  },
  {
    text: "Udržujte zdravú hmotnosť",
    text_1: " - Každé kilo navyše je ako extra záťaž pre vaše žily.",
  },
];

export const items10: ListItem3Props[] = [
  {
    text: "Pravidelné cvičenie",
    text_1:
      " - Najmä aktivity, ktoré posilňujú lýtkové svaly, ako je chôdza, beh alebo cyklistika.",
  },
  {
    text: "Zdravá strava",
    text_1:
      " - Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom.",
  },
  {
    text: "Kontrola hmotnosti",
    text_1: " - Udržiavanie zdravej hmotnosti znižuje tlak na vaše žily.",
  },
  {
    text: "Vyhýbajte sa dlhému státiu alebo sedeniu",
    text_1:
      " - Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne hýbať nohami.",
  },
  {
    text: "Noste voľné oblečenie",
    text_1:
      " - Tesné oblečenie, najmä v oblasti pása a nôh, môže obmedzovať krvný obeh.",
  },
  {
    text: "Zdvíhajte nohy",
    text_1:
      " - Keď odpočívate, zdvihnite nohy nad úroveň srdca na 15 minút niekoľkokrát denne.",
  },
  {
    text: "Vyhýbajte sa vysokým podpätkom",
    text_1: " - Ak ich musíte nosiť, striedajte ich s pohodlnou obuvou.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zQ2KcF"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Varixy a ich vplyv na krvný obeh: Pomoc od cievneho chirurga pri kŕčoch v nohách"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte komplexný pohľad na varixy, ich vplyv na krvný obeh a možnosti liečby od cievneho chirurga. Dozviete sa o príznakoch, prevencii a moderných liečebných metódach kŕčových žíl. Získajte cenné rady pre každodenný život s varixmi a zlepšite zdravie vašich nôh."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">{"7/15/2025" + " "}</span>
                  <span className="[color:inherit] before:content-['_·_'] before:text-ploy-text-primary">
                    {" " + "6 min read"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zpKeKw"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(8708px,auto)_1fr] max-lg:px-4 lg:min-h-[330.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(4582px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z4ncaF"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="people in white shirt holding clear drinking glasses"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="people in white shirt holding clear drinking glasses"
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="people in white shirt holding clear drinking glasses"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="people in white shirt holding clear drinking glasses"
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=360&h=351"
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
              id="zQSV2k"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Predstavte si, že vaše nohy sú ako diaľnice plné áut. Normálne všetko plynie hladko, ale čo ak sa zrazu objavia zápchy a obchádzky? Presne to sa deje, keď sa vo vašich žilách vytvoria varixy. Poďme sa spolu pozrieť na túto "dopravnú situáciu" vo vašich nohách a zistíme, ako vám môže pomôcť "dopravný inžinier" - cievny chirurg.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú to vlastne varixy a prečo by vás mali zaujímať?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Varixy, známe aj ako kŕčové žily, sú ako neposlušné rieky, ktoré sa rozhodli tiecť, kadiaľ sa im zachce. Sú to rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách. Môžete si ich predstaviť ako malé hady pod kožou, ktoré sa vinú a vytvárajú viditeľné hrbolčeky."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ale prečo by vás mali zaujímať? No, predstavte si, že máte v dome pokazené potrubie. Voda netečie tam, kam by mala, a začína sa hromadiť na nesprávnych miestach. Podobne je to aj s varixmi - krv sa hromadí v žilách, čo môže viesť k rôznym nepríjemným symptómom a komplikáciám."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Príznaky, ktoré by ste nemali ignorovať"}
              </h3>
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
                  "Ak sa vám zdá, že vaše nohy sa zmenili na nepríjemné spoločníčky, je čas konať!"
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo sa varixy vôbec tvoria?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si žily ako sériu jednosmerných ulíc s množstvom malých závor. Tieto závory (v skutočnosti sú to ventily) majú za úlohu zabezpečiť, aby krv prúdila len jedným smerom - nahor, proti gravitácii. Ale čo sa stane, keď tieto závory prestanú fungovať?"
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Presne tak - vznikne chaos. Krv začne prúdiť späť a hromadiť sa v žilách. Je to ako keď sa na diaľnici vytvorí zápcha - autá (v tomto prípade krv) sa hromadia, vytvárajú tlak a spôsobujú problémy."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Faktory, ktoré zvyšujú riziko vzniku varixov"}
              </h3>
              <ol className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dlhé státie" + " "}
                    </strong>
                    {"- Ani neustále státie nie je ideálne"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Kedy je čas vyhľadať pomoc cievneho chirurga?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Ak ste si všimli niektoré z vyššie uvedených príznakov, je najvyšší čas navštíviť odborníka. Cievny chirurg je ako vrchný dopravný inžinier pre vaše žily. Vie presne, ako funguje "dopravný systém" vo vašom tele a ako ho opraviť, keď sa niečo pokazí.'
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Čo môžete očakávať od návštevy u cievneho chirurga?"}
              </h3>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Diskusia o možnostiach liečby" + " "}
                    </strong>
                    {
                      "- Na základe výsledkov vám lekár navrhne najvhodnejší postup liečby"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Liečba varixov: Od konzervatívnych metód po chirurgické zákroky"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Liečba varixov je ako rekonštrukcia cesty - niekedy stačí len malá oprava, inokedy je potrebná komplexná prestavba. Cievny chirurg má k dispozícii celú škálu možností, od jemných úprav až po rozsiahle "stavebné práce".'
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Konzervatívne metódy: Prvá línia obrany"}
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresívne pančuchy" + " "}
                    </strong>
                    {
                      "- Sú ako podporné stĺpy pre vaše žily. Pomáhajú tlačiť krv nahor a zmierňujú opuchy."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zmena životného štýlu" + " "}
                    </strong>
                    {'- Tu ide o "údržbu ciest". Zahŕňa:'}
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
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Cvičenia na posilnenie svalov nohy" + " "}
                    </strong>
                    {
                      "- Silné svaly sú ako efektívne čerpadlá, ktoré pomáhajú tlačiť krv nahor."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {'Invazívne metódy: Keď je potrebná väčšia "rekonštrukcia"'}
              </h3>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Stripping" + " "}
                    </strong>
                    {
                      "- Komplexnejší chirurgický zákrok, pri ktorom sa odstraňuje dlhší úsek poškodenej žily."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Prečo by ste nemali varixy ignorovať?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ignorovanie varixov je ako ignorovanie diery na ceste - časom sa to len zhorší. Bez primeranej starostlivosti môžu varixy viesť k vážnym komplikáciám:"
                }
              </p>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Lipodermatorskleróza" + " "}
                    </strong>
                    {
                      "- Zmeny na koži a podkožnom tkanive, ktoré môžu byť bolestivé a esteticky nepríjemné."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Život s varixmi: Tipy a triky pre každodenný život"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Život s varixmi nemusí byť prechádzka ružovou záhradou, ale s týmito tipmi to môže byť o niečo ľahšie:"
                }
              </p>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Pozor na dlhé cestovanie" + " "}
                    </strong>
                    {
                      "- Pri dlhých cestách autom alebo lietadlom robte časté prestávky na prechádzku a rozhýbanie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Prevencia: Lepšie predchádzať než liečiť"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia varixov je ako pravidelná údržba ciest - je lepšie predchádzať problémom, než ich potom riešiť. Tu sú niektoré preventívne opatrenia:"
                }
              </p>
              <ol className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Prestaňte fajčiť" + " "}
                    </strong>
                    {
                      "- Fajčenie môže prispieť k vzniku varixov tým, že poškodzuje cievy."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Často kladené otázky o varixoch"}
              </h2>
              {items2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <h2 className={listItemClassName}>
                {"Záver: Vaše žily si zaslúžia pozornosť"}
              </h2>
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
