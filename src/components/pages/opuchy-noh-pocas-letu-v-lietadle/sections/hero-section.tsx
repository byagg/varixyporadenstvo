const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
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

export const items: ListItemProps[] = [
  {
    text: "Dlhodobé sedenie - Vaše svaly sa nehýbu, čo spomaľuje cirkuláciu krvi.",
  },
  {
    text: "Nízky tlak vzduchu v kabíne - Spôsobuje rozťahovanie ciev a hromadenie tekutín.",
  },
  {
    text: "Dehydratácia - Suchý vzduch v lietadle môže viesť k zadržiavaniu vody v tele.",
  },
  {
    text: "Gravitácia - Dlhé sedenie s nohami dolu sťažuje návrat krvi k srdcu.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Krúženie členkami: Predstavte si, že kreslíte kruh prstami na nohách. 10 kruhov v jednom smere, 10 v druhom.",
  },
  {
    text: "Flexia a extenzia chodidiel: Striedavo napínajte a uvoľňujte chodidlá, akoby ste chceli dotiahnuť prsty k holeni a potom zase od nej.",
  },
  {
    text: "Zdvíhanie piat: Zdvihnite päty zo zeme, držte 5 sekúnd, potom pomaly položte.",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "Cvičenia na kŕčové žily",
    text_1:
      ": Pravidelné cvičenie pomáha udržiavať zdravú cirkuláciu. Skúste plávanie, chôdzu alebo jogu.",
  },
  {
    text: "Prírodné protizápalové lieky",
    text_1:
      ": Niektoré bylinky, ako je ginkgo biloba alebo koňský gaštan, môžu pomôcť zlepšiť cirkuláciu.",
  },
  {
    text: "Masáž nôh pri kŕčových žilách",
    text_1: ": Jemná masáž môže pomôcť zlepšiť prietok krvi.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zVls2H"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Opuchy nôh počas letu v lietadle"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento článok poskytuje komplexný prehľad o príčinách a prevencii opuchov nôh počas letu v lietadle. Ponúka praktické tipy na zmiernenie opuchov, vrátane rád pre ľudí s kŕčovými žilami a inými cievnymi problémami. S humorným a prístupným tónom vysvetľuje zložité medicínske koncepty a poskytuje užitočné rady pre pohodlné cestovanie."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] hidden mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zK6TQO"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_16.8301%_32.6797%_16.8301%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zYOpUp"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person in brown and beige floral skirt standing on white table"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person in brown and beige floral skirt standing on white table"
                  src="/external-assets/593adb5e6c7a3240.jpg"
                  height="344"
                  width="400"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person in brown and beige floral skirt standing on white table"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person in brown and beige floral skirt standing on white table"
                  src="/external-assets/a0d87e4449e9d97f.jpg"
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
              id="zmy3HT"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ahoj, milí cestovatelia! Chystáte sa na dlhý let a obávate sa, že vaše nohy sa premenia na dva nafúknuté balóny? Nebojte sa, nie ste v tom sami. Opuchy nôh sú častým problémom pri dlhých letoch, ale s trochou prípravy a znalostí môžete tento nepríjemný jav minimalizovať. Poďme sa spolu pozrieť na to, prečo k opuchom dochádza a ako im môžeme predchádzať."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo vlastne nohy opúchajú v lietadle?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že vaše nohy sú ako špongie. Normálne, keď sa hýbete, tieto špongie sa pravidelne stláčajú a uvoľňujú, čo pomáha cirkulácii krvi. Ale počas letu? Vaše nohy sa menia na statické špongie, ktoré len nasávajú tekutinu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Hlavné dôvody opuchov nôh v lietadle sú:"}
              </p>
              <ol className="break-words my-0">
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Tieto faktory môžu viesť nielen k opuchom, ale v niektorých prípadoch aj k vážnejším problémom, ako je" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "hlboká žilová trombóza"}
                </strong>
                {". Preto je dôležité vedieť, ako sa chrániť."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <span className="[color:inherit] font-bold break-words">
                  <strong className="[color:inherit] break-words">
                    <u className="break-words">
                      <a
                        href="/#kalkulacky"
                        target="_self"
                        className="[color:inherit] break-words"
                      >
                        {
                          "KALKULAČKA NA VÝPOČET ODHADOVANÉHO RIZIKA PRI CESTE LIETADLOM"
                        }
                      </a>
                    </u>
                  </strong>
                </span>
              </p>
              <h2 className={listItemClassName}>
                {"Ako predchádzať opuchom nôh v lietadle?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nebojte sa, existuje mnoho spôsobov, ako môžete bojovať proti opuchom nôh. Tu je niekoľko tipov:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Pohyb je kľúč</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Predstavte si, že vaše nohy sú ako pumpy na vodu. Čím viac ich používate, tým lepšie fungujú. Pravidelný pohyb počas letu je kľúčový pre prevenciu opuchov. Tu je niekoľko jednoduchých" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "cvikov na kŕčové žily"}
                </strong>
                {", ktoré môžete robiť priamo v sedadle:"}
              </p>
              <ul className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak máte možnosť, každú hodinu alebo dve sa prejdite po uličke. Je to ako malá prechádzka v oblakoch!"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Hydratácia je vaša najlepšia kamarátka"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že vaše telo je ako kvetina. Bez vody zvädne a scvrkne sa. Počas letu je dôležité piť dostatok vody. Zabudnite na alkohol a kofeín - tie sú ako zlodeji vody pre vaše telo. Namiesto toho si doprajte pravidelné dúšky vody. Vaše nohy (a celé telo) vám poďakujú!"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3. Kompresné pančuchy - superhrdinovia pre vaše nohy"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Kompresné pančuchy" + " "}
                </strong>
                {"sú ako objatie pre vaše nohy. Pomáhajú udržiavať správnu cirkuláciu krvi a bránia opuchom. Môžete si vybrať" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kompresné pančuchy Dr. Max"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kompresné pančuchy Thuasne"}
                </strong>
                <span className="[color:inherit] break-words">
                  {" " + "alebo"}
                </span>
                {
                  "iné značky, je ich kopec na trhu. Sú dostupné v rôznych stupňoch kompresie, od ľahkej po silnú. Pre dlhé lety sa odporúča stredná (I.) až silná (II.) kompresia."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4. Pohodlné oblečenie a obuv"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zabudnite na módnu prehliadku. Pri dlhom lete je kľúčové pohodlie. Voľné, priedušné oblečenie a pohodlná obuv sú vaši najlepší spojenci. Vyhnite sa tesným nohaviciam alebo ponožkám, ktoré môžu obmedzovať cirkuláciu. A čo sa týka topánok? Predstavte si, že vaše nohy idú na dovolenku - doprajte im pohodlie!"
                }
              </p>
              <h3 className={listItemClassName2}>5. Zdvihnite nohy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak máte možnosť, zdvihnite si nohy počas letu. Môžete použiť batožinu alebo vankúš pod nohy. Je to ako malá joga pre vaše nohy - pomáha to zlepšiť cirkuláciu a znížiť opuchy."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo robiť, ak už máte opuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak ste napriek všetkej snahe skončili s opuchnutými nohami, nepanikárte. Tu je niekoľko" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "metód na zmiernenie opuchov"}
                </strong>
                {":"}
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Studený obklad na opuch"}
                    </strong>
                    {
                      ": Požiadajte letušku o ľad zabalený v uteráku a priložte ho na opuchnuté miesta."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Masáž: Jemne si masírujte nohy smerom k srdcu. Je to ako malé povzbudenie pre vašu cirkuláciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Elevácia: Ak je to možné, zdvihnite nohy nad úroveň srdca. Je to ako gravitačná joga pre vaše nohy."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Cviky na kŕčové žily"}
                    </strong>
                    {
                      ": Pokračujte v jednoduchých cvikoch, ktoré sme spomínali vyššie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Špeciálne situácie: Keď opuchy nie sú len o pohodlí"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pre niektorých ľudí môžu byť opuchy nôh viac než len nepríjemnosťou. Ak máte niektorý z nasledujúcich stavov, je dôležité konzultovať s lekárom pred dlhým letom:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kŕčové žily"}
                    </strong>
                    {": Ak máte" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "kŕčové žily na nohách"}
                    </strong>
                    {", ste vo vyššom riziku komplikácií." + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Liečba kŕčových žíl"}
                    </strong>{" "}
                    {"pred cestovaním môže byť nevyhnutná."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hlboká žilová trombóza"}
                    </strong>
                    {": Toto je vážny stav, pri ktorom sa tvoria krvné zrazeniny v hlbokých žilách. Ak ste mali v minulosti tento problém, poraďte sa s" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "angiológom"}
                    </strong>{" "}
                    {"pred cestovaním."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Tehotenstvo: Tehotné ženy sú vo vyššom riziku opuchov a žilových problémov." +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Tehotenstvo a kŕčové žily"}
                    </strong>{" "}
                    {"si vyžadujú špeciálnu pozornosť pri cestovaní."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Žilová nedostatočnosť"}
                    </strong>
                    {": Ak máte chronické problémy so žilami, dlhé lety môžu byť výzvou. Konzultujte s" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "cievnym chirurgom"}
                    </strong>{" "}
                    {"pred cestou."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Domáce tipy pre zdravé nohy</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď nie ste práve vo vzduchu, existuje mnoho vecí, ktoré môžete robiť pre zdravie vašich nôh:"
                }
              </p>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Stravovanie pri kŕčových žilách"}
                    </strong>
                    {
                      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <h3 className={listItemClassName2}>
                {"Existuje zázračný liek na kŕčové žily?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Žiaľ, neexistuje žiadny" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "zázračný liek na kŕčové žily"}
                </strong>
                {
                  ". Liečba zvyčajne zahŕňa kombináciu životného štýlu, cvičenia a niekedy medicínskych zákrokov. Ale nebojte sa, s správnou starostlivosťou môžete výrazne zlepšiť zdravie vašich žíl."
                }
              </p>
              <h3 className={listItemClassName2}>Ako bolia kŕčové žily?</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Bolesť kŕčových žíl" + " "}
                </strong>
                {"môže byť rôzna. Niektorí ľudia popisujú ťažký pocit v nohách, iní pociťujú bodavú alebo pulzujúcu bolesť. Môže sa vyskytnúť aj" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "svrbenie nôh v noci"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "bolesť nôh od kolien dolu"}
                </strong>
                {"."}
              </p>
              <h3 className={listItemClassName2}>
                {"Môžem cestovať lietadlom po operácii kŕčových žíl?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Rekonvalescencia po operácii" + " "}
                </strong>
                {"kŕčových žíl je individuálna. Väčšina lekárov odporúča počkať aspoň 2-4 týždne po" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "operácii kŕčových žíl"}
                </strong>
                {", kým sa vydáte na dlhý let. Vždy sa poraďte so svojím lekárom o" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "starostlivosti o nohy po operácii kŕčových žíl"}
                </strong>
                {"."}
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Opuchy nôh počas letu môžu byť nepríjemné, ale s správnymi opatreniami sa dajú minimalizovať. Pamätajte, že pohyb, hydratácia a správne oblečenie sú vaši najlepší spojenci pri boji proti opuchom. A ak máte chronické problémy so žilami, nezabudnite sa pred cestou poradiť s lekárom."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Tak čo, cítite sa pripravení na váš ďalší let? S týmito tipmi budú vaše nohy pripravené na dobrodružstvo vo výškach. Šťastnú cestu a nech vás opuchy obchádzajú!"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
