const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId prevencia-a-liecba-trombozy-povrchovych-zil-dolnych-koncatin-vsetko-co-potrebujete-vediet-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text_1: string;
  text_2: string;
};

function ListItem({ text_1, text_2 }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {"- "}
      <strong className="[color:inherit] break-words">{text_1}</strong>
      {text_2}
    </p>
  );
}

type ListItem3Props = {
  text: string;
  text_1: string;
  text_2: string;
};

function ListItem3({ text, text_1, text_2 }: ListItem3Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {text}
      <strong className="[color:inherit] break-words">{text_1}</strong>
      {text_2}
    </p>
  );
}

export const items: ListItemProps[] = [
  {
    text_1: "Náhla dýchavičnosť a bolesť na hrudi",
    text_2: " – Môže naznačovať pľúcnu embóliu.",
  },
  {
    text_1: "Intenzívna bolesť a opuch celej nohy",
    text_2: " – Môže ísť o príznaky hlbokej žilovej trombózy.",
  },
  {
    text_1: "Infekcia so sekréciou",
    text_2: " – Pri výtoku z miesta trombu je potrebná urgentná liečba.",
  },
];

export const items2: ListItemProps[] = [
  {
    text_1: "Pravidelný pohyb a cvičenie",
    text_2: " – Aj krátke prechádzky a cvičenia pomáhajú zlepšiť cirkuláciu.",
  },
  {
    text_1: "Kompresné pančuchy",
    text_2:
      " – Môžu byť užitočné ako preventívne opatrenie, ak máte predispozíciu k trombóze.",
  },
  {
    text_1: "Zdravá strava a hydratácia",
    text_2: " – Podporujú krvný obeh a znižujú riziko zrážania krvi.",
  },
  {
    text_1: "Obmedzenie dlhodobého sedenia alebo státia",
    text_2:
      " – Každú hodinu je dobré si spraviť krátku prestávku, najmä počas dlhého cestovania.",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "- ",
    text_1: "Bolestivé opuchy a začervenanie",
    text_2: " pozdĺž postihnutej žily.",
  },
  {
    text: "- ",
    text_1: "Stvrdnutie alebo citlivosť",
    text_2: " pri dotyku žily.",
  },
  {
    text: "- ",
    text_1: "Viditeľná zapálená žila",
    text_2: ", ktorá môže byť červená alebo mierne opuchnutá.",
  },
  {
    text: "- ",
    text_1: "Hmatateľná zrazenina",
    text_2:
      " (niekedy ako uzlovitý pruh), najmä pri postihnutí povrchových žíl na lýtku.",
  },
  {
    text: "Ak sa trombus rozšíri do hlbšieho žilového systému, príznaky sa môžu zhoršiť a vyžadujú ",
    text_1: "rýchlu lekársku intervenciu",
    text_2: ".",
  },
];

export const items4: ListItem3Props[] = [
  {
    text: "1. ",
    text_1: "Varixy",
    text_2: " – Kŕčové žily zvyšujú riziko trombózy povrchových žíl.",
  },
  {
    text: "2. ",
    text_1: "Nehybný životný štýl",
    text_2:
      " – Sedavý spôsob života alebo dlhé obdobia nehybnosti (napr. pri cestovaní alebo po operácii) znižujú prietok krvi v nohách.",
  },
  {
    text: "3. ",
    text_1: "Tehotenstvo a hormóny",
    text_2: " – Hormonálne zmeny zvyšujú riziko zrážanlivosti krvi.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z2pGCN"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Prevencia a liečba trombózy povrchových žíl dolných končatín: Všetko, čo potrebujete vedieť"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Povrchová flebitída postihuje žily blízko povrchu kože. Je bolestivá, ale zvyčajne menej nebezpečná."
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
        id="z6lhVr"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(8460px,auto)_1fr] max-lg:px-4 lg:min-h-[337.75rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_17.8922%_30.6373%_17.8105%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(4887px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zVcaCe"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a planet and a half moon"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a planet and a half moon"
                  src="https://images.unsplash.com/photo-1663465376645-aca0b7c8227a?auto=format&fit=crop&w=375&h=344"
                  height="344"
                  width="375"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a planet and a half moon"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a planet and a half moon"
                  src="https://images.unsplash.com/photo-1663465376645-aca0b7c8227a?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            data-ploy-animation-fx-hint="fade-in"
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5"
          >
            <div
              id="zUGKES"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Trombóza povrchových žíl dolných končatín"}
                </strong>
                {", ktorá zahŕňa vznik krvnej zrazeniny a zápal v povrchových žilách nôh, patrí medzi" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "relatívne časté zdravotné komplikácie"}
                </strong>
                {". Aj keď je táto porucha často" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "neškodná"}
                </strong>
                {", v určitých prípadoch môže viesť k vážnym problémom, ako sú" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "hlboká žilová trombóza (HŽT)"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "pľúcna embólia"}
                </strong>
                {". Tento článok podrobne popisuje" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "prevenciu, príznaky"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "liečbu trombózy povrchových žíl"}
                </strong>
                {
                  ", aby ste mohli lepšie rozpoznať rizikové faktory a správne sa rozhodovať o liečbe."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>
                {"Čo je trombóza povrchových žíl?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Trombóza povrchových žíl je stav, pri ktorom sa v" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "povrchových žilách dolných končatín"}
                </strong>{" "}
                {"vytvorí" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "krvná zrazenina (trombus)"}
                </strong>
                {". Tento stav môže byť spojený so" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "zápalom žily"}
                </strong>
                {", čo sa označuje ako" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "tromboflebitída"}
                </strong>
                {". Ak prebieha zápal bez prítomnosti trombu, hovoríme o" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "flebitíde"}
                </strong>
                {"."}
              </p>
              <h3 className={listItemClassName2}>Typy trombózy žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Rozlišujeme niekoľko typov trombózy podľa postihnutých žíl a prítomných príznakov:"
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Povrchová flebitída"}
                </strong>{" "}
                {"– Zápal žily bez prítomnosti trombu."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Povrchová tromboflebitída"}
                </strong>{" "}
                {
                  "– Zápal a trombóza v menších povrchových žilách, ktoré nie sú súčasťou hlbokého žilového systému."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Povrchová žilová trombóza (SVT)"}
                </strong>{" "}
                {"– Trombóza v hlavných povrchových žilách nôh, ako sú" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "vena saphena magna"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "vena saphena parva"}
                </strong>
                {", ktoré majú prepojenie s hlbokým žilovým systémom."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>
                {"Rizikové faktory trombózy povrchových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Príčiny trombózy povrchových žíl môžu byť rôzne a často súvisia s faktormi, ktoré zvyšujú" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "riziko zrážania krvi"}
                </strong>
                {"," + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "spomalenie prietoku krvi"}
                </strong>{" "}
                {"alebo poškodenie žíl. Medzi hlavné rizikové faktory patria:"}
              </p>
              {items4.map((item, index) => (
                <ListItem3 key={index} {...item} />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"4." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Ochorenia žilového systému"}
                </strong>{" "}
                {"– Choroby ako" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "chronická venózna insuficiencia"}
                </strong>{" "}
                {"(nedostatočná činnosť žíl) spôsobujú žilovú hypertenziu."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"5." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Nadváha a obezita"}
                </strong>{" "}
                {"– Zvyšujú tlak na žily v dolných končatinách."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"6." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Vek a genetika"}
                </strong>{" "}
                {
                  "– S vekom sa znižuje pružnosť žíl a môžu sa objaviť genetické predispozície k zrážanlivosti."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>
                {"Príznaky a diagnostika trombózy povrchových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Trombóza povrchových žíl sa môže prejaviť rôznymi príznakmi, od jemného diskomfortu až po" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "akútne bolesti"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "opuchy"}
                </strong>
                {". Typické príznaky zahŕňajú:"}
              </p>
              {items3.map((item, index) => (
                <ListItem3 key={index} {...item} />
              ))}
              <h3 className={listItemClassName2}>Diagnostické postupy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Pre stanovenie diagnózy sa využívajú rôzne metódy, najčastejšie však lekár začne s fyzikálnym vyšetrením a ultrasonografiou." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Duplexná ultrasonografia"}
                </strong>{" "}
                {
                  "je najbežnejším a najpresnejším spôsobom potvrdenia trombózy a umožňuje posúdiť prítomnosť a rozsah trombu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h3 className={listItemClassName2}>
                {"Liečba trombózy povrchových žíl"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Liečba trombózy povrchových žíl sa zameriava na" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "zmiernenie príznakov"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "prevenciu komplikácií"}
                </strong>
                {
                  ", najmä šírenia trombu do hlbokých žíl. Spôsoby liečby sa líšia v závislosti od závažnosti stavu a môžu zahŕňať:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Podporné metódy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "NSAID (nesteroidné protizápalové lieky)"}
                </strong>{" "}
                {"– Tieto lieky, ako je" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "ibuprofén"}
                </strong>
                {", môžu zmierniť bolesť a zápal. Treba však zvážiť" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "riziko krvácania"}
                </strong>
                {", najmä ak sa plánuje antikoagulačná liečba."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kompresné pančuchy"}
                </strong>{" "}
                {
                  "– Nosia sa na zníženie opuchu a zlepšenie prietoku krvi. Kompresné pančuchy triedy II alebo vyššie môžu byť zvlášť vhodné pre ľudí s opakujúcimi sa problémami s povrchovými žilami."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Zvýšenie nohy"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "aplikácia chladu"}
                </strong>{" "}
                {"môžu tiež pomôcť znižovať zápal a opuch."}
              </p>
              <h3 className={listItemClassName2}>2. Antikoagulačná liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Antikoagulanciá (lieky na zníženie zrážanlivosti krvi) sú často používané pri liečbe trombózy hlavných povrchových žíl, aby sa zabránilo" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "rozšíreniu trombu do hlbokého žilového systému"}
                </strong>
                {". Medzi najbežnejšie antikoagulanciá patrí" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "heparín"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "nízkomolekulový heparín (LMWH)"}
                </strong>
                {", ktorý sa podáva injekčne."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Dávkovanie a trvanie"}
                </strong>{" "}
                {
                  "antikoagulačnej liečby závisí od veľkosti a polohy trombu. Pri menších, nekomplikovaných trombozách môže postačiť profylaktická dávka na 45 dní."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"-" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Pacienti s vysokým rizikom"}
                </strong>{" "}
                {
                  "komplikácií (napr. tí, ktorí majú trombus blízko hlbokého žilového systému) môžu vyžadovať terapeutickú dávku antikoagulantov."
                }
              </p>
              <h3 className={listItemClassName2}>3. Chirurgický zákrok</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"V závažných prípadoch, najmä ak je trombus blízko dôležitých spojení s hlbokými žilami alebo je prítomný zápal so sekréciou, môže byť potrebný" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "chirurgický zákrok"}
                </strong>
                {
                  ". Najčastejšie sa chirurgický zákrok vykonáva pri komplikovaných príznakoch, ktoré neodpovedajú na bežnú liečbu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>
                {"Prevencia trombózy povrchových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Prevencia" + " "}
                </strong>
                {"je kľúčová pre osoby s vyšším rizikom vzniku trombózy, najmä ak už majú diagnostikované" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "varixy"}
                </strong>{" "}
                {
                  "alebo iné žilové ochorenia. Medzi najlepšie preventívne opatrenia patrí:"
                }
              </p>
              {items2.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>
                {"Možné komplikácie trombózy povrchových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak sa" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "povrchová žilová trombóza"}
                </strong>{" "}
                {
                  "nelieči, môže viesť k vážnym zdravotným problémom. Medzi najčastejšie komplikácie patrí:"
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Hlboká žilová trombóza (HŽT)"}
                </strong>{" "}
                {"– Zrazenina sa"}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "môže rozšíriť do hlbokého žilového systému, čo je omnoho závažnejší stav."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Pľúcna embólia"}
                </strong>{" "}
                {
                  "– Zrazenina sa môže dostať do pľúc a spôsobiť vážne problémy s dýchaním, čo je stav, ktorý si vyžaduje okamžitú lekársku pomoc."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"3." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Chronická žilová insuficiencia"}
                </strong>{" "}
                {
                  "– Neliečená trombóza môže viesť k poškodeniu žilových chlopní, čo spôsobuje trvalé problémy s prietokom krvi a opuchom nôh."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>Kedy vyhľadať lekára?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak pociťujete" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "pretrvávajúce bolesti, opuch"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "začervenanie"}
                </strong>{" "}
                {
                  "v dolných končatinách, mali by ste navštíviť lekára. Trombóza povrchových žíl síce často prebieha bez závažných komplikácií, no odborné vyšetrenie pomôže minimalizovať riziká."
                }
              </p>
              <h3 className={listItemClassName2}>Varovné príznaky</h3>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"---"}
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Trombóza povrchových žíl dolných končatín je" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "častým a liečiteľným stavom"}
                </strong>
                {", avšak vyžaduje pozornosť a vhodnú starostlivosť, aby sa predišlo komplikáciám. Prevencia prostredníctvom" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "pohybu, zdravej výživy a kompresných pančúch"}
                </strong>
                {
                  ", spolu s vedomím rizikových faktorov, vám môže pomôcť chrániť sa pred týmto ochorením."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {"Pamätajte, že v prípade, že sa u vás prejavia" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "príznaky zápalu"}
                </strong>{" "}
                {"či" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "zrazeniny v žilách"}
                </strong>
                {", konzultácia s lekárom je vždy správnym krokom. Rýchla diagnostika a liečba môže výrazne znížiť riziko vzniku" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "hlbokých žilových problémov"}
                </strong>{" "}
                {"alebo dokonca" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "pľúcnej embólie"}
                </strong>
                {"."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
