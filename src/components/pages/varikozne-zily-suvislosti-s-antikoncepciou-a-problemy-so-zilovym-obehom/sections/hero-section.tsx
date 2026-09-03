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

export const items: ListItemProps[] = [
  { text: 'Genetika (áno, môžete ďakovať svojim rodičom za tento "darček")' },
  { text: "Vek (s pribúdajúcimi rokmi žily strácajú svoju elasticitu)" },
  { text: "Nadváha (extra kilá znamenajú extra tlak na vaše žily)" },
  { text: "Sedavý životný štýl (vaše žily milujú pohyb!)" },
];

export const items2: ListItem2Props[] = [
  {
    text: "Opuch nôh",
    text_1: ": Vaše nohy sa môžu cítiť ako nafukovacie balóny na konci dňa.",
  },
  {
    text: "Bolesť a ťažkosť v nohách",
    text_1: ": Akoby ste mali na nohách priviazané závažia.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Vaša pokožka sa môže cítiť, akoby ste na ňu vysypali mravce.",
  },
  {
    text: "Kŕče v nohách",
    text_1:
      ": Nočné kŕče môžu byť také intenzívne, že by ste mohli vyhrať súťaž v modernom tanci.",
  },
];

export const items3: ListItemProps[] = [
  { text: "Náhly opuch nohy" },
  { text: "Bolesť alebo citlivosť v lýtku" },
  { text: "Začervenanie alebo zmena farby kože na nohe" },
];

export const items4: ListItem2Props[] = [
  {
    text: "Kompresné pančuchy",
    text_1:
      ': Tieto "superhrdinské" pančuchy pomáhajú stlačiť vaše žily a podporujú správny tok krvi. Sú ako objatie pre vaše nohy!',
  },
  {
    text: "Cvičenie",
    text_1:
      ": Pravidelný pohyb, najmä chôdza, plávanie alebo cyklistika, môže výrazne zlepšiť cirkuláciu. Predstavte si, že vaše svaly sú ako malé pumpičky, ktoré pomáhajú tlačiť krv späť k srdcu.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Zdvihnutie nôh nad úroveň srdca pomáha gravitácii pracovať vo váš prospech. Je to ako malá joga pre vaše žily!",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Hýbte sa",
    text_1:
      ": Pravidelné cvičenie je kľúčové pre zdravý krvný obeh. Vaše žily milujú pohyb!",
  },
  {
    text: "Udržujte zdravú hmotnosť",
    text_1: ": Extra kilá znamenajú extra tlak na vaše žily.",
  },
  {
    text: "Noste pohodlnú obuv",
    text_1:
      ": Vysoké podpätky môžu byť štýlové, ale vaše žily ich nemajú rady.",
  },
  {
    text: "Vyhýbajte sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne hýbať nohami.",
  },
  {
    text: "Zdravá strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a podporiť zdravý krvný obeh.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zsMTBR"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Varikózne žily: Súvislosti s antikoncepciou a problémy so žilovým obehom"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte svet varikóznych žíl - od príčin cez príznaky až po liečbu. Naučte sa, ako udržať vaše žily zdravé a predchádzať komplikáciám. Praktické rady a humorný pohľad na tento bežný zdravotný problém."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">6 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z6tA1K"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(7466px,auto)_1fr] max-lg:px-4 lg:min-h-[288.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3924px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zL3UIK"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person holding white cigarette stick"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person holding white cigarette stick"
                  src="/external-assets/70c8456f8f104ef8.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person holding white cigarette stick"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person holding white cigarette stick"
                  src="/external-assets/70645aac1d35bb0f.jpg"
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
              id="zlo6aS"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Predstavte si, že vaše žily sú ako riečne kanály vo vašom tele. Normálne tečú pokojne a usporiadane, ale niekedy sa rozhodnú ísť "proti prúdu" a vytvoria si vlastné diaľnice pod vašou pokožkou. Vitajte vo svete varikóznych žíl, tiež známych ako kŕčové žily! Tento fascinujúci (aj keď nie vždy príjemný) fenomén postihuje mnoho ľudí a môže spôsobiť viac problémov, než len estetické obavy. Poďme sa pozrieť na to, čo sa deje, keď sa vaše žily rozhodnú "rebellovať".'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú to vlastne tie varikózne žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Varikózne žily, ľudovo nazývané kŕčové žily, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách. Predstavte si ich ako malé riečky, ktoré sa rozhodli zmeniť na divoké prúdy. Tieto žily sa roztiahnu a vystúpia nad povrch kože, čím vytvárajú viditeľné, často modrasté alebo fialové línie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {'Prečo sa vaše žily rozhodnú "rebelovať"?'}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje mnoho dôvodov, prečo sa vaše žily môžu rozhodnúť ísť proti prúdu. Medzi hlavné faktory patria:"
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
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Tehotenstvo (malý človiečik v brušku môže spôsobiť veľké zmeny vo vašom krvnom obehu)"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Príznaky: Keď vaše nohy kričia o pomoc"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Varikózne žily nie sú len kozmetický problém. Môžu spôsobiť rôzne nepríjemné príznaky, ktoré vám dajú vedieť, že vaše žily potrebujú pozornosť. Medzi najčastejšie príznaky patria:"
                }
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
                      {"Zmeny farby pokožky"}
                    </strong>
                    {
                      ": Vaše nohy môžu začať pripomínať mapu s rôznymi odtieňmi modrej a fialovej."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Komplikácie: Keď sa žilová rebélia vymkne kontrole"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak necháte varikózne žily bez povšimnutia, môžu viesť k vážnejším problémom. Tu sú niektoré komplikácie, ktorým by ste mali venovať pozornosť:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Trombóza v nohe: Keď sa krv rozhodne urobiť si párty"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hlboká žilová trombóza je vážny stav, pri ktorom sa v hlbokých žilách vytvorí krvná zrazenina. Je to ako dopravná zápcha vo vašich žilách, ktorá môže viesť k nebezpečným komplikáciám. Príznaky zahŕňajú:"
                }
              </p>
              <ul className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak spozorujete tieto príznaky, neváhajte a navštívte lekára. Trombóza nie je žart a môže viesť k život ohrozujúcim stavom, ako je pľúcna embólia."
                }
              </p>
              <h3 className={listItemClassName2}>
                {'Vred predkolenia: Keď vaša koža povie "Dosť!"'}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Chronická žilová nedostatočnosť môže viesť k vzniku vredov na nohách, najmä v oblasti predkolenia. Tieto vredy sú ako malé krátery na vašej koži, ktoré sa ťažko hoja. Sú bolestivé, môžu sa infikovať a výrazne ovplyvniť kvalitu vášho života."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Krvácanie: Keď vaše žily sú prilíš pod povrchom"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Varikózne žily sú krehké a môžu ľahko prasknúť pri náraze alebo poranení. Aj malé poranenie môže viesť k značnému krvácaniu, ktoré môže byť ťažké zastaviť."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Diagnostika: Keď váš lekár musí nájsť príčinu"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak máte podozrenie na varikózne žily, je čas navštíviť angiológa alebo cievneho chirurga. Tí použijú rôzne metódy na zistenie rozsahu vášho problému:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Fyzikálne vyšetrenie"}
                    </strong>
                    {
                      ": Lekár si prezrie vaše nohy a môže vás požiadať, aby ste stáli alebo sedeli s visiacimi nohami."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Ultrazvuk"}
                    </strong>
                    {
                      ": Tento bezbolestný test používa zvukové vlny na vytvorenie obrazu vašich žíl. Je to ako podmorský sonar, ale pre vaše nohy!"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Venografia"}
                    </strong>
                    {
                      ": Pri tomto teste sa do žíl vstrekne kontrastná látka a potom sa urobia röntgenové snímky. Je to ako malá exkurzia do vašich žíl!"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba: Záchranná misia pre vaše žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje mnoho možností liečby varikóznych žíl, od konzervatívnych metód až po chirurgické zákroky. Poďme sa pozrieť na niektoré z nich:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Konzervatívne metódy: Prvá pomoc pre vaše žily"}
              </h3>
              <ol className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Úprava životného štýlu"}
                    </strong>
                    {
                      ": Udržiavanie zdravej hmotnosti, vyhýbanie sa dlhému státiu alebo sedeniu a nosenie pohodlnej obuvi môžu urobiť veľký rozdiel."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Medikamentózna liečba: Keď vaše žily potrebujú malú pomoc"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existujú lieky, ktoré môžu pomôcť zmierniť príznaky varikóznych žíl. Napríklad:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Diosmín"}
                    </strong>
                    {
                      ": Tento liek pomáha posilniť žilové steny a zlepšuje cirkuláciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Venofarmaká"}
                    </strong>
                    {
                      ": Tieto lieky pomáhajú zlepšiť tonus žíl a znižujú opuch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {
                  "Minimálne invazívne postupy: Keď vaše žily potrebujú trochu viac než len objatie"
                }
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Sklerotizácia"}
                    </strong>
                    {
                      ": Pri tomto postupe sa do postihnutých žíl vstrekne roztok, ktorý spôsobí ich zatvrdnutie a postupné vstrebanie. Je to ako malá chemická vojna proti vašim problémovým žilám!"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Rádiofrekvenčná ablácia"}
                    </strong>
                    {
                      ": Táto metóda používa teplo na uzavretie problémových žíl. Je to ako mikrovlnka pre vaše žily (ale nebojte sa, nebudete sa cítiť ako popcorn!)."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Laserová terapia"}
                    </strong>
                    {
                      ": Laser sa používa na uzavretie menších varikóznych žíl. Je to ako malá svetelná show vo vašich žilách!"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Chirurgická liečba: Keď je potrebná veľká záchranná akcia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V niektorých prípadoch môže byť potrebná chirurgická liečba. Medzi chirurgické možnosti patria:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Stripping"}
                    </strong>
                    {
                      ": Pri tomto zákroku sa odstránia dlhé úseky postihnutých žíl. Je to ako malá upratovacia akcia vo vašom žilovom systéme."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Flebektómia"}
                    </strong>
                    {
                      ": Toto je odstránenie menších varikóznych žíl cez malé rezy v koži. Predstavte si to ako vyberanie hrozienok z koláča."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Prevencia: Ako udržať vaše žily v dobrej nálade"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je vždy lepšia ako liečba. Tu je niekoľko tipov, ako udržať vaše žily šťastné a zdravé:"
                }
              </p>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Hydratácia"}
                    </strong>
                    {
                      ": Pite dostatok vody, aby ste udržali svoju krv tekutú a žily zdravé."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Záver: Vaše žily, vaša zodpovednosť"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Varikózne žily môžu byť nepríjemné, ale s správnou starostlivosťou a liečbou sa dajú zvládnuť. Pamätajte, že vaše žily sú dôležitou súčasťou vášho tela a zaslúžia si vašu pozornosť a starostlivosť. Ak máte obavy o zdravie vašich žíl, neváhajte a konzultujte to s odborníkom. Koniec koncov, zdravé žily = šťastné nohy = šťastný vy!"
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  'Takže, nabudúce keď sa pozriete na svoje nohy, poďakujte svojim žilám za ich tvrdú prácu. A ak uvidíte nejaké tie "riečky" vystupovať nad povrch, vedzte, že existuje mnoho spôsobov, ako im pomôcť vrátiť sa späť do svojho koryta. Pamätajte, že v prípade žíl platí: lepšie prúdiť ako stáť!'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
