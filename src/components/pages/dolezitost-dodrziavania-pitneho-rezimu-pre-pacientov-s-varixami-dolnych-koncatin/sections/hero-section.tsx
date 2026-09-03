const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-lg";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

type ListItemProps = {
  className: string;
  text: string;
};

function ListItem({ className, text }: ListItemProps) {
  return (
    <p className={className}>
      <span className="font-body text-black break-words">{text}</span>
    </p>
  );
}

type ListItem2Props = {
  className: string;
  text: string;
  separator?: string;
};

function ListItem2({ className, text, separator }: ListItem2Props) {
  return (
    <>
      <span className={className}>{text}</span>
      {separator}
    </>
  );
}

type ListItem4Props = {
  descriptionClassName: string;
  textClassName: string;
  text: string;
  separator?: string;
};

function ListItem4({
  descriptionClassName,
  textClassName,
  text,
  separator,
}: ListItem4Props) {
  return (
    <>
      <li className="text-black break-words">
        <p className={descriptionClassName}>
          <span className={textClassName}>{text}</span>
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem6Props = {
  descriptionClassName: string;
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem6({
  descriptionClassName,
  text,
  text_1,
  separator,
}: ListItem6Props) {
  return (
    <>
      <li className="text-black break-words">
        <p className={descriptionClassName}>
          <span className="font-body break-words">{text}</span>
          <span className="font-body font-bold break-words">{text_1}</span>
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem8Props = {
  descriptionClassName: string;
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem8({
  descriptionClassName,
  text,
  text_1,
  separator,
}: ListItem8Props) {
  return (
    <>
      <li className="text-black break-words">
        <p className={descriptionClassName}>
          <span className="font-body font-bold break-words">{text}</span>
          <span className="font-body break-words">{text_1}</span>
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem9Props = {
  descriptionClassName: string;
  text: string;
  separator?: string;
};

function ListItem9({ descriptionClassName, text, separator }: ListItem9Props) {
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
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8",
    text: "Pravidelná hydratácia, spolu s ďalšími opatreniami ako nosenie kompresných pančúch, cvičenie a udržiavanie zdravej váhy, môže výrazne zmierniť príznaky a zlepšiť kvalitu života. V prípade pretrvávajúcich problémov alebo zhoršenia stavu je vždy dôležité konzultovať s odborníkom, ktorý môže navrhnúť personalizovaný plán liečby.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8",
    text: "Pamätajte, že každý prípad je individuálny a to, čo funguje pre jedného pacienta, nemusí byť ideálne pre iného. Preto je dôležité pracovať v úzkej spolupráci s vaším lekárom a prispôsobiť liečbu vašim špecifickým potrebám a životnému štýlu.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "S správnym prístupom a starostlivosťou je možné účinne manažovať varixy a kŕčové žily a viesť aktívny, zdravý život bez obmedzení.",
  },
];

export const bodyTextSegments: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "Varixy a kŕčové žily na nohách sú časté ochorenia žíl, ktoré spôsobujú",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "bolesti nôh od kolien dolu",
  },
  {
    className: "font-body text-black break-words",
    text: ", opuchy nôh a viditeľné žily na nohách. Tieto problémy môžu výrazne ovplyvniť kvalitu života pacientov, spôsobujúc nielen fyzické ťažkosti, ale aj psychické problémy súvisiace s estetickým vzhľadom nôh. Pacienti často hľadajú",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "zázračný liek na kŕčové žily",
  },
  {
    className: "font-body text-black break-words",
    text: ", ale účinná liečba zahŕňa komplexný prístup vrátane dodržiavania pitného režimu.",
  },
];

export const bodyTextSegments2: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "Predtým, než sa ponoríme do významu pitného režimu, je dôležité pochopiť, čo sú to varixy a kŕčové žily.",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "Kŕčové žily",
  },
  {
    className: "font-body text-black break-words",
    text: "sú rozšírené, pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách a chodidlách. Vznikajú, keď žilové chlopne, ktoré normálne bránia spätnému toku krvi, prestanú správne fungovať.",
  },
];

export const items4: ListItem4Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    textClassName: "font-body font-bold break-words",
    text: "Bolesť nôh od kolien dole",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    textClassName: "font-body break-words",
    text: "Opuchy nôh",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    textClassName: "font-body break-words",
    text: "Ťažké nohy",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    textClassName: "font-body break-words",
    text: "Svrbenie nôh v noci",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    textClassName: "font-body break-words",
    text: "Viditeľné, vystupujúce žily na nohách",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    textClassName: "font-body break-words",
    text: "Zmeny farby kože (hyperpigmentácia na nohách)",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    textClassName: "font-body break-words",
    text: "Pocit napätia v lýtkach",
  },
];

export const bodyTextSegments3: ListItem2Props[] = [
  { className: "font-body break-words", text: "Pomáha predchádzať" },
  { className: "font-body font-bold break-words", text: "žilovej trombóze" },
  { className: "font-body break-words", text: "a" },
  {
    className: "font-body font-bold break-words",
    text: "hlbokej žilovej trombóze",
  },
];

export const items6: ListItem6Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Redukuje sa",
    text_1: "opuch dolných končatín",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Zmierňuje sa",
    text_1: "bolesť nôh od kolien dole",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Zlepšuje sa lymfatická drenáž, čo môže pomôcť pri",
    text_1: "liečbe lymfedému",
  },
];

export const bodyTextSegments4: ListItem2Props[] = [
  { className: "font-body break-words", text: "Znižuje riziko" },
  { className: "font-body font-bold break-words", text: "zápalu žíl" },
  { className: "font-body break-words", text: "(flebitídy)" },
];

export const items8: ListItem8Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Pite aspoň 8 pohárov vody denne",
    text_1:
      ": Toto je minimálne množstvo, ktoré by ste mali vypiť. V závislosti od vašej aktivity a klímy môžete potrebovať aj viac.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Konzumujte potraviny bohaté na vodu",
    text_1:
      ": Ovocie a zelenina s vysokým obsahom vody, ako sú uhorky, melóny, jahody či šalát, môžu prispieť k vašej celkovej hydratácii.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Obmedzte príjem kofeínu a alkoholu",
    text_1:
      ": Tieto látky majú diuretický účinok a môžu prispievať k dehydratácii.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Používajte aplikácie na sledovanie pitného režimu",
    text_1:
      ": Existuje mnoho užitočných aplikácií, ktoré vám môžu pomôcť sledovať váš príjem tekutín a pripomínať vám, kedy je čas na ďalší pohár vody.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Pite pravidelne počas dňa",
    text_1:
      ": Namiesto toho, aby ste vypili veľké množstvo vody naraz, snažte sa piť menšie množstvá pravidelne počas celého dňa.",
  },
];

export const items9: ListItem9Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Zlepšovať cirkuláciu krvi",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Znižovať opuchy",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Zmierňovať bolesti a ťažké nohy",
  },
];

export const bodyTextSegments5: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "Existujú rôzne typy kompresných pančúch, vrátane",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "sťahovacích pančúch na kŕčové žily",
  },
  {
    className: "font-body text-black break-words",
    text: ". Je dôležité vybrať správny typ a veľkosť podľa odporúčania lekára.",
  },
];

export const items11: ListItem9Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Zmierniť bolesť",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Redukovať opuch",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Zlepšiť cirkuláciu",
  },
];

export const items12: ListItem9Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Chôdza",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Plávanie",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Cvičenia na posilnenie lýtkových svalov",
  },
];

export const bodyTextSegments6: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "Mnohí pacienti sa zaujímajú o",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "prírodné protizápalové lieky",
  },
  {
    className: "font-body text-black break-words",
    text: "a alternatívne prístupy:",
  },
];

export const items14: ListItem9Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Používanie bylinných mastí a gélov",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Konzumácia potravín s protizápalovými vlastnosťami",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Aromaterapia",
  },
];

export const bodyTextSegments7: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "V niektorých prípadoch môže lekár predpísať lieky, ako je",
  },
  { className: "font-body text-black font-bold break-words", text: "diosmín" },
  {
    className: "font-body text-black break-words",
    text: ", ktorý pomáha zlepšovať žilový tonus a zmierňovať príznaky.",
  },
];

export const items16: ListItem8Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Sklerotizácia kŕčových žíl",
    text_1:
      ": injekčné podanie látky, ktorá spôsobí zjazvenie a uzavretie postihnutej žily",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Rádiofrekvenčná ablácia varixov",
    text_1: ": použitie rádiofrekvenčnej energie na uzavretie postihnutej žily",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Laserová operácia kŕčových žíl",
    text_1: ": použitie laserového lúča na uzavretie postihnutej žily",
  },
];

export const bodyTextSegments8: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "V prípade závažných príznakov alebo ak konzervatívna liečba neprináša úľavu, je dôležité navštíviť odborníka.",
  },
  { className: "font-body text-black font-bold break-words", text: "Angiológ" },
  { className: "font-body text-black break-words", text: "alebo" },
  {
    className: "font-body text-black font-bold break-words",
    text: "cievny chirurg",
  },
  { className: "font-body text-black break-words", text: "môžu:" },
];

export const bodyTextSegments9: ListItem2Props[] = [
  {
    className: "font-body text-black break-words",
    text: "Ak podstúpite operáciu, je dôležitá správna",
  },
  {
    className: "font-body text-black font-bold break-words",
    text: "starostlivosť o nohy po operácii kŕčových žíl",
  },
  { className: "font-body text-black break-words", text: ":" },
];

export const bodyTextSegments10: ListItem2Props[] = [
  { className: "font-body break-words", text: "Noste" },
  {
    className: "font-body font-bold break-words",
    text: "kompresívne pančuchy",
  },
  { className: "font-body break-words", text: "podľa odporúčania" },
];

export const bodyTextSegments11: ListItem2Props[] = [
  { className: "font-body break-words", text: "Sledujte príznaky ako" },
  {
    className: "font-body font-bold break-words",
    text: "svrbenie rany po operácii",
  },
  { className: "font-body break-words", text: "alebo známky infekcie" },
];

export const items21: ListItem8Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Udržiavajte zdravú váhu",
    text_1: ": Obezita zvyšuje tlak na žily v nohách",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Vyhýbajte sa dlhému státiu alebo sedeniu",
    text_1: ": Pravidelne meňte polohu a robte si prestávky na pohyb",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Pravidelne cvičte",
    text_1:
      ": Najmä chôdza a plávanie sú vynikajúce pre podporu žilovej cirkulácie",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Stravujte sa zdravo",
    text_1: ": Konzumujte potraviny bohaté na vlákninu a antioxidanty",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Obmedzte alkohol a fajčenie",
    text_1: ": Tieto návyky môžu zhoršovať stav žíl",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Zvládajte stres",
    text_1: ": Chronický stres môže prispievať k zhoršeniu žilových problémov",
  },
];

export const bodyTextSegments12: ListItem2Props[] = [
  { className: "font-body text-black break-words", text: "Hoci neexistuje" },
  {
    className: "font-body text-black font-bold break-words",
    text: "zázračný liek na kŕčové žily",
  },
  {
    className: "font-body text-black break-words",
    text: ", kombinácia správnej hydratácie, zdravého životného štýlu a odbornej starostlivosti môže významne zlepšiť stav pacientov s varixami a kŕčovými žilami. Nezabúdajte na dôležitosť pitného režimu v boji proti tomuto ochoreniu žíl a ciev na nohách.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zEwJT8"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Dôležitosť dodržiavania pitného režimu pre pacientov s varixami dolných končatín"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Pitný režim hrá dôležitú úlohu pri liečbe varixov a kŕčových žíl, čo môže byť často prehliadaný aspekt starostlivosti o tieto stavy. Dôležitosť hydratácie spočíva v jej vplyve na cirkuláciu krvi, znižovanie opuchov, podporu zdravia pokožky a prevenciu komplikácií spojených s týmito ochoreniami."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name">
                  {"VP team"}
                </p>
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">{"15. 7. 2025" + " "}</span>
                  <span className="[color:inherit] before:content-['_·_'] before:text-ploy-text-primary">
                    {" " + "6 min čítania"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zIGbo4"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(7519px,auto)_1fr] max-lg:px-4 lg:min-h-[271.125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3719px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zUlbs1"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="water droplets"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="water droplets"
                  src="/external-assets/bd7bffbadce57831.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="water droplets"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="water droplets"
                  src="/external-assets/6c39ebea3e816a38.jpg"
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
              id="zmroCe"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-2xl">
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Porozumenie varixom a kŕčovým žilám"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments2.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black font-bold break-words">
                  {"Varixy dolných končatín" + " "}
                </span>
                <span className="font-body text-black break-words">
                  {
                    "sú podobným problémom, často považovaným za synonymum kŕčových žíl. Ide o rozšírené povrchové žily, ktoré môžu byť viditeľné pod kožou a spôsobovať rôzne príznaky."
                  }
                </span>
              </p>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"Príznaky varixov a kŕčových žíl zahŕňajú:"}
                </span>
              </h3>
              <ul className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-2xl">
                <span className="font-body text-black break-words lg:text-2xl">
                  {
                    "Prečo je hydratácia kľúčová pre pacientov s varixami dolných končatín?"
                  }
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Správna hydratácia hrá kľúčovú úlohu v manažmente varixov a kŕčových žíl. Tu sú hlavné dôvody, prečo je pitný režim taký dôležitý:"
                  }
                </span>
              </p>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"1. Zlepšuje cirkuláciu krvi"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Dostatočný príjem tekutín znižuje viskozitu krvi, čo znamená, že krv sa stáva redšou a ľahšie preteká žilami. To je mimoriadne dôležité pre pacientov s varixami, pretože:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments3.map((item, index) => (
                      <ListItem2
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments3.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Znižuje zaťaženie už oslabených žíl"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Podporuje celkovú cirkuláciu v tele"}
                    </span>
                  </p>
                </li>
              </ul>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"2. Zmierňuje opuchy nôh"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Hydratácia hrá kľúčovú úlohu v regulácii tekutín v tele. Pri dostatočnom príjme vody:"
                  }
                </span>
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
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"3. Podporuje zdravie pokožky"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Hydratácia zvnútra je kľúčová pre zdravie pokožky, čo je obzvlášť dôležité pre pacientov s varixami:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Pomáha predchádzať problémom ako" + " "}
                    </span>
                    <span className="font-body font-bold break-words">
                      {"vred predkolenia"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Znižuje riziko vzniku" + " "}
                    </span>
                    <span className="font-body font-bold break-words">
                      {"hyperpigmentácie na nohách"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Zlepšuje celkový vzhľad a elasticitu pokožky"}
                    </span>
                  </p>
                </li>
              </ul>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"4. Prevencia komplikácií"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Správna hydratácia môže pomôcť predchádzať rôznym komplikáciám spojeným s varixami:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments4.map((item, index) => (
                      <ListItem2
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments4.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Môže znížiť potrebu" + " "}
                    </span>
                    <span className="font-body font-bold break-words">
                      {"antibiotík na zápal žíl"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Pomáha predchádzať vzniku krvných zrazenín"}
                    </span>
                  </p>
                </li>
              </ul>
              <h2 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Tipy pre efektívnu hydratáciu pri varixoch"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Aby ste maximalizovali prínos hydratácie pre vaše žily, tu je niekoľko užitočných tipov:"
                  }
                </span>
              </p>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem8
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <h2 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Komplexná starostlivosť o kŕčové žily"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Hoci je hydratácia kľúčová, efektívna liečba varixov a kŕčových žíl vyžaduje komplexný prístup. Tu sú ďalšie dôležité aspekty starostlivosti:"
                  }
                </span>
              </p>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"1. Kompresná terapia"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black font-bold break-words">
                  {"Kompresné pančuchy na kŕčové žily" + " "}
                </span>
                <span className="font-body text-black break-words">
                  {"sú základom konzervatívnej liečby. Pomáhajú:"}
                </span>
              </p>
              <ul className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments5.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments5.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"2. Aplikácia studených obkladov"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black font-bold break-words">
                  {"Studené obklady na opuch" + " "}
                </span>
                <span className="font-body text-black break-words">
                  {"môžu pomôcť:"}
                </span>
              </p>
              <ul className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"3. Cvičenie"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black font-bold break-words">
                  {"Cviky na kŕčové žily" + " "}
                </span>
                <span className="font-body text-black break-words">
                  {
                    "sú dôležitou súčasťou manažmentu ochorenia. Medzi odporúčané aktivity patria:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items12.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items12.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"4. Prírodná liečba"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments6.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments6.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ul className="break-words my-0">
                {items14.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items14.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"5. Medikamentózna liečba"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments7.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments7.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <h3 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"6. Invazívne metódy"}
                </span>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Pri závažnejších prípadoch môže byť potrebná invazívna liečba:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items16.map((item, index) => (
                  <ListItem8
                    key={index}
                    {...item}
                    separator={index < items16.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h2 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Kedy navštíviť lekára"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments8.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments8.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Vykonať podrobné vyšetrenie"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Diagnostikovať presný rozsah problému"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Odporučiť najvhodnejšiu formu liečby, ktorá môže zahŕňať" +
                        " "}
                    </span>
                    <span className="font-body font-bold break-words">
                      {"operáciu kŕčových žíl"}
                    </span>
                  </p>
                </li>
              </ul>
              <h2 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Rekonvalescencia po operácii kŕčových žíl"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments9.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments9.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Dodržiavajte pokyny lekára ohľadom aktivity a starostlivosti o ranu"
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments10.map((item, index) => (
                      <ListItem2
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments10.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments11.map((item, index) => (
                      <ListItem2
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments11.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {"Pomaly zvyšujte aktivitu podľa pokynov lekára"}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Pokračujte v dostatočnej hydratácii pre podporu hojenia"
                      }
                    </span>
                  </p>
                </li>
              </ul>
              <h2 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Prevencia a životný štýl"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Prevencia je kľúčová v boji proti varixom a kŕčovým žilám. Tu sú niektoré dôležité aspekty životného štýlu:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items21.map((item, index) => (
                  <ListItem8
                    key={index}
                    {...item}
                    separator={index < items21.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h2 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-3xl">
                  {"Záver"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments12.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments12.length - 1 ? " " : ""}
                  />
                ))}
              </p>
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
