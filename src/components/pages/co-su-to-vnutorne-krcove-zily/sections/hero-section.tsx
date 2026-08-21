const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId co-su-to-vnutorne-krcove-zily-hero-section
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
    text: "Genetické faktory",
    text_1:
      ": Ak máte v rodine niekoho s kŕčovými žilami, je pravdepodobné, že aj vy budete náchylnejší na tento problém.",
  },
  {
    text: "Tehotenstvo",
    text_1:
      ": Hormonálne zmeny a zvýšený tlak na žily počas tehotenstva môžu prispieť k vzniku kŕčových žíl.",
  },
  {
    text: "Obezita",
    text_1:
      ": Nadmerná hmotnosť zvyšuje tlak na žily v dolných končatinách, čo môže viesť k ich oslabeniu.",
  },
  {
    text: "Dlhodobé státie alebo sedenie",
    text_1:
      ": Nedostatok pohybu môže zhoršiť prietok krvi a prispieť k vzniku kŕčových žíl.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Ťažkosti v nohách",
    text_1: ": Pocit ťažkosti, najmä po dlhom státí alebo sedení.",
  },
  {
    text: "Opuchy",
    text_1:
      ": Najmä v oblasti členkov a chodidiel, ktoré sa zhoršujú počas dňa.",
  },
  {
    text: "Bolesť",
    text_1:
      ": Môže sa prejavovať ako tupá bolesť alebo kŕče, často zhoršené fyzickou aktivitou.",
  },
  {
    text: "Pocit pálenia alebo svrbenie",
    text_1: ": Tento pocit môže byť lokalizovaný v oblasti postihnutých žíl.",
  },
];

export const items3: ListItemProps[] = [
  {
    text: "Skleroterapia",
    text_1:
      ": Tento postup zahŕňa injekciu sklerotizačného roztoku priamo do postihnutej žily, čo spôsobí jej zlepenie a následné vstrebávanie telom.",
  },
  {
    text: "Laserová terapia",
    text_1:
      ": Laserové svetlo sa používa na uzavretie postihnutých žíl, čo vedie k ich postupnému vymiznutiu.",
  },
  {
    text: "Rádiofrekvenčná ablácia (RFA)",
    text_1:
      ": Pri tejto technike sa využíva rádiofrekvenčná energia na uzavretie postihnutých žíl. Tento postup je menej invazívny a často sa používa na liečbu vnútorných kŕčových žíl.",
  },
];

export const items4: ListItemProps[] = [
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Zníženie tlaku na žily dolných končatín.",
  },
  {
    text: "Pravidelná fyzická aktivita",
    text_1:
      ": Cvičenie, ako je chôdza, plávanie alebo cyklistika, pomáha zlepšiť cirkuláciu krvi.",
  },
  {
    text: "Vyhýbanie sa dlhodobému státiu alebo sedeniu",
    text_1:
      ": Ak musíte sedieť alebo stáť dlhšie, pravidelne sa pohybujte a naťahujte nohy, aby ste podporili prietok krvi.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zmHtwL"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {'Čo sú to "vnútorné kŕčové žily" ?'}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                'Kŕčové žily predstavujú zdravotný problém, ktorý postihuje mnohých ľudí. Hoci niektoré kŕčové žily sú viditeľné na povrchu kože, existuje kategória, ktorá zostáva skrytá pred našimi očami a je medzi ľuďmi známa ako "vnútorné kŕčové žily". Ide o varixy, ktoré nie sú viditeľné voľným okom, ale môžu byť identifikované pomocou diagnostických metód ako ultrazvuk.'
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z4etar"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(6318px,auto)_1fr] max-lg:px-4 lg:min-h-[241.125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3191px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z5Knur"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="macro photography of green leaf"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="macro photography of green leaf"
                  src="https://images.unsplash.com/photo-1542128033-f2b47387887d?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="macro photography of green leaf"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="macro photography of green leaf"
                  src="https://images.unsplash.com/photo-1542128033-f2b47387887d?auto=format&fit=crop&w=360&h=351"
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
              id="zxM1uX"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Kŕčové žily, známe tiež ako varixy, sú častým problémom, ktorý postihuje mnoho ľudí. Zatiaľ čo väčšina ľudí je oboznámená s viditeľnými kŕčovými žilami, ktoré sa objavujú ako vyvýšené, modré alebo fialové žily na povrchu kože, existuje aj menej známa kategória kŕčových žíl, ktorá zostáva skrytá pred zrakom – tzv. "vnútorné kŕčové žily". Tieto žily nie sú viditeľné voľným okom, ale môžu spôsobovať rovnaké, ak nie závažnejšie, príznaky ako povrchové kŕčové žily. V tomto článku sa pozrieme na to, čo vnútorné kŕčové žily sú, ako vznikajú, ako ich rozpoznať a aké možnosti liečby sú k dispozícii.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Základné informácie o kŕčových žilách"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú spôsobené zlyhaním venóznych chlopní, ktoré sú zodpovedné za jednosmerný prietok krvi smerom k srdcu. Keď tieto chlopne nefungujú správne, krv sa začína hromadiť v žilách, čo vedie k ich rozšíreniu a skrúteniu. Tento stav môže spôsobiť rôzne symptómy, vrátane bolesti, ťažkosti v nohách, opuchov a dokonca aj kožných zmien."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Rozlišovanie typov kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Povrchové kŕčové žily sú najčastejším typom a sú ľahko rozpoznateľné na povrchu kože. Vnútorné kŕčové žily, na druhej strane, sa nachádzajú hlbšie pod kožou a nie sú viditeľné bez použitia špecializovaných diagnostických nástrojov. Tieto žily môžu byť rovnako, ak nie viac, problematické, pretože ich prítomnosť môže zostať dlho nerozpoznaná, čo môže viesť k komplikáciám."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo spôsobuje vznik vnútorných kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príčiny vzniku vnútorných kŕčových žíl sú podobné ako pri povrchových varixoch:"
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
                    <strong className="[color:inherit] break-words">
                      {"Hormonálne zmeny"}
                    </strong>
                    {
                      ": Hormonálna terapia alebo antikoncepcia môžu tiež zvýšiť riziko vzniku varixov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ako spoznať vnútorné kŕčové žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci vnútorné kŕčové žily nie sú viditeľné voľným okom, môžu sa prejaviť rôznymi príznakmi:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Nočné kŕče"}
                    </strong>
                    {": Bolestivé kŕče v lýtkach, ktoré narušujú spánok."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Diagnostika vnútorných kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Pretože vnútorné kŕčové žily nie sú viditeľné na povrchu, ich diagnostika si vyžaduje použitie špecializovaných diagnostických metód. Najčastejšie sa používa" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "ultrazvukové vyšetrenie"}
                </strong>
                {
                  ", ktoré umožňuje lekárom vidieť štruktúru a funkciu žíl, identifikovať miesta zlyhania chlopní a určiť rozsah postihnutia."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Dopplerovská ultrasonografia"}
                    </strong>
                    {
                      ": Táto technika využíva zvukové vlny na vizualizáciu prietoku krvi a zistenie prípadných problémov v žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Magnetická rezonancia (MR)"}
                    </strong>
                    {
                      ": V niektorých prípadoch môže byť MR venografia použitá na získanie podrobného obrazu žilového systému, čo je užitočné najmä v zložitejších prípadoch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Možnosti liečby vnútorných kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba vnútorných kŕčových žíl môže byť rôznorodá, od konzervatívnych metód až po invazívne zákroky, v závislosti od závažnosti stavu."
                }
              </p>
              <h3 className={listItemClassName2}>Konzervatívna liečba</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresívne oblečenie"}
                    </strong>
                    {
                      ": Nosenie kompresných pančúch môže pomôcť zlepšiť prietok krvi a zmierniť príznaky spojené s vnútornými kŕčovými žilami."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zmeny životného štýlu"}
                    </strong>
                    {
                      ": Udržiavanie zdravej hmotnosti, pravidelná fyzická aktivita a vyhýbanie sa dlhodobému státiu alebo sedeniu môžu pomôcť zmierniť príznaky a predchádzať zhoršeniu stavu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"Minimálne invazívne postupy"}
              </h3>
              <ul className="break-words my-0">
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
                      {"Endovenózna laserová terapia (EVLT)"}
                    </strong>
                    {
                      ": Ide o minimálne invazívny zákrok, pri ktorom sa do žily vloží laserové vlákno, ktoré spôsobí jej uzavretie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>Chirurgická liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V závažných prípadoch, keď iné metódy zlyhajú, môže byť potrebná chirurgická intervencia:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Stripping/Venektómia/Flebektómia/Miniflebektómia"}
                    </strong>
                    {
                      ": Chirurgické odstránenie postihnutej žily. Tento postup sa zvyčajne vykonáva v prípadoch, keď sú kŕčové žily rozsiahle a spôsobujú značné problémy."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-9 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl">
                {"Prevencia vnútorných kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je kľúčová, najmä ak máte genetickú predispozíciu na vznik kŕčových žíl. Niekoľko jednoduchých opatrení môže významne znížiť riziko vzniku vnútorných kŕčových žíl:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Používanie kompresného oblečenia"}
                    </strong>
                    {
                      ": Najmä ak ste vystavení dlhodobému státiu alebo cestovaniu, kompresné pančuchy môžu pomôcť znížiť tlak v žilách."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Odporúčania pre každodenný život"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Jednoduché zmeny v životnom štýle môžu významne prispieť k zmierneniu symptómov a zlepšeniu kvality života. Pravidelné zdvíhanie nôh, používanie chladivých gélov alebo masáže môžu poskytnúť úľavu od symptómov spojených s vnútornými kŕčovými žilami. Okrem toho, zdravá strava a dostatočná hydratácia hrajú dôležitú úlohu pri udržiavaní zdravého venózneho systému."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Vnútorné kŕčové žily predstavujú skrytý, ale významný zdravotný problém, ktorý si vyžaduje primeranú pozornosť a liečbu. Správna diagnóza a účinné terapeutické prístupy môžu výrazne zlepšiť kvalitu života tých, ktorí nimi trpia. Ak máte podozrenie na vnútorné kŕčové žily, neváhajte sa poradiť s lekárom, ktorý vám pomôže zvoliť najlepšiu liečebnú stratégiu."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
