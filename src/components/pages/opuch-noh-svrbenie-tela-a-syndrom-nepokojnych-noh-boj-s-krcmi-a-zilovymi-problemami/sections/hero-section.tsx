const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

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

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Chronická žilová insuficiencia a jej príznaky môžu výrazne ovplyvniť kvalitu života. Pochopenie tohto stavu, jeho príznakov a možností liečby je prvým krokom k zlepšeniu zdravia vašich žíl. Pamätajte, že včasná intervencia môže predísť závažnejším komplikáciám.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Ak pociťujete príznaky žilových problémov, neváhajte konzultovať svoj stav s odborníkom. Vaše žily sú dôležitou súčasťou vášho kardiovaskulárneho systému a zaslúžia si vašu pozornosť a starostlivosť. S správnym prístupom a liečbou môžete výrazne zlepšiť zdravie svojich žíl a kvalitu svojho života.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: 'Koniec koncov, zdravé žily sú základom pre "plynulú dopravu" vo vašom tele. Tak sa o ne starajte, aby ste mohli kráčať životom s ľahkosťou a bez zbytočných zastávok na "opravy"!',
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Elevácia končatín",
    text_1:
      ": Zdvihnutie nôh nad úroveň srdca pomáha gravitácii pracovať vo váš prospech.",
  },
  {
    text: "Kompresná terapia",
    text_1:
      ": Kompresné pančuchy poskytujú graduovaný tlak na nohy, čo podporuje žilový návrat.",
  },
  {
    text: "Pohybová aktivita",
    text_1:
      ": Pravidelný pohyb, najmä chôdza, aktivuje svalovú pumpu lýtka, ktorá pomáha pri prečerpávaní krvi späť k srdcu.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Hydratácia pokožky",
    text_1:
      ": Používanie emoliencií pomáha udržať pokožku hydratovanú a menej náchylnú na svrbenie.",
  },
  {
    text: "Lokálne kortikosteroidy",
    text_1:
      ": V prípade výrazného zápalu môže lekár predpísať lokálne kortikosteroidy na krátkodobé použitie.",
  },
  {
    text: "Antihistaminiká",
    text_1:
      ": Systémové antihistaminiká môžu pomôcť zmierniť svrbenie, najmä ak je sprevádzané alergickou reakciou.",
  },
];

export const items4: ListItem2Props[] = [
  {
    text: "Úprava životného štýlu",
    text_1:
      ": Pravidelné cvičenie, obmedzenie kofeínu a alkoholu, a dodržiavanie pravidelného spánkového režimu môžu pomôcť.",
  },
  {
    text: "Masáž a strečing",
    text_1:
      ": Jemná masáž nôh a strečingové cvičenia pred spaním môžu zmierniť príznaky.",
  },
  {
    text: "Farmakologická liečba",
    text_1:
      ": V závažných prípadoch môže lekár predpísať lieky, ako sú dopamínergné látky alebo gabapentin.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Klinické vyšetrenie",
    text_1:
      ": Angiológ alebo cievny chirurg vykoná dôkladné fyzikálne vyšetrenie a odoberie anamnézu.",
  },
  {
    text: "Duplexná ultrasonografia",
    text_1:
      ": Táto neinvazívna metóda využíva zvukové vlny na zobrazenie štruktúry žíl a prietoku krvi. Je to ako GPS navigácia pre váš žilový systém.",
  },
  {
    text: "Pletyzmografia",
    text_1:
      ": Meria zmeny objemu končatiny v reakcii na rôzne polohy, čo pomáha posúdiť funkciu žilových chlopní.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Nadváha zvyšuje tlak na žily dolných končatín.",
  },
  {
    text: "Pravidelné cvičenie",
    text_1: ": Podporuje cirkuláciu a posilňuje svalovú pumpu.",
  },
  {
    text: "Vyvážená strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom.",
  },
  {
    text: "Vyhýbanie sa dlhodobému státiu alebo sedeniu",
    text_1: ": Ak je to nevyhnutné, robte pravidelné prestávky na pohyb.",
  },
  {
    text: "Nosenie voľného oblečenia",
    text_1: ": Tesné oblečenie môže obmedzovať cirkuláciu.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zE-y54"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Opuch nôh, svrbenie tela a syndróm nepokojných nôh: Boj s kŕčmi a žilovými problémami"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Komplexný pohľad na chronickú žilovú insuficienciu, jej príznaky ako opuch nôh, svrbenie a syndróm nepokojných nôh. Odborné informácie o diagnostike, liečbe a prevencii žilových problémov, podané zrozumiteľným spôsobom pre širokú verejnosť."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">6 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zLtvht"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(8549px,auto)_1fr] max-lg:px-4 lg:min-h-[332.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[13.5621%_3.26797%_63.0719%_3.26797%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(4520px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-5">
            <div
              id="zO1UzK"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="pair of brown leather boots"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="pair of brown leather boots"
                  src="/external-assets/5662805b18cd2a93.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="pair of brown leather boots"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="pair of brown leather boots"
                  src="/external-assets/bdde99fa8685ca36.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-4"
          >
            <div
              id="zjHhgo"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Chronická žilová insuficiencia, ktorej najviditeľnejším prejavom sú varikózne (kŕčové) žily, je komplexné ochorenie s množstvom nepríjemných symptómov. Medzi tie najvýraznejšie patria opuch nôh, svrbenie tela a syndróm nepokojných nôh. Tieto príznaky nielen znižujú kvalitu života, ale môžu signalizovať aj závažnejšie problémy s krvným obehom."
                }
              </p>
              <h2 className={listItemClassName}>Patofyziológia kŕčových žíl</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Kŕčové žily vznikajú, keď dôjde k poruche funkcie žilových chlopní. Tieto chlopne za normálnych okolností zabezpečujú jednosmerný tok krvi smerom k srdcu. Keď zlyhajú, krv sa hromadí v žilách dolných končatín, čo vedie k ich rozšíreniu a vzniku charakteristických "uzlíkov" pod kožou.'
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je to, akoby sa dopravný systém vášho tela rozhodol ignorovať všetky jednosmerky, čím vzniká dopravná zápcha v uliciach vašich nôh."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Opuch nôh: Keď sa tekutina rozhodne zostať na návšteve"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Opuch nôh, odborne nazývaný edém, je jedným z najčastejších príznakov kŕčových žíl. Vzniká, keď zvýšený tlak v žilách spôsobí presun tekutiny z krvného riečiska do okolitých tkanív."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Prečo dochádza k opuchu nôh?"}
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zvýšený hydrostatický tlak"}
                    </strong>
                    {
                      ": Keď žilové chlopne nefungujú správne, krv sa hromadí v dolných častiach nôh, čo zvyšuje tlak v žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zmeny v kapilárnej permeabilite"}
                    </strong>
                    {
                      ": Chronicky zvýšený tlak v žilách môže viesť k zmenám v štruktúre kapilár, čo umožňuje väčší únik tekutiny do tkanív."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Gravitácia"}
                    </strong>
                    {
                      ": Dlhodobé státie alebo sedenie zhoršuje opuch, keďže gravitácia sťažuje návrat krvi k srdcu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Ako bojovať s opuchom nôh?</h3>
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
                      {"Lymfodrenáž"}
                    </strong>
                    {
                      ": Manuálna lymfodrenáž môže pomôcť pri odvádzaní prebytočnej tekutiny z tkanív."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Svrbenie tela: Keď vaša pokožka protestuje"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Svrbenie, najmä v oblasti dolných končatín, je častým, aj keď menej známym príznakom chronickej žilovej insuficiencie."
                }
              </p>
              <h3 className={listItemClassName2}>Prečo dochádza k svrbeniu?</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Žilová stáza"}
                    </strong>
                    {
                      ": Stagnácia krvi v žilách vedie k zápalu a podráždeniu okolitých tkanív."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zmeny v mikrocirkulácii"}
                    </strong>
                    {
                      ": Narušený krvný obeh môže viesť k nedostatočnému zásobovaniu pokožky kyslíkom a živinami."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dermatitída"}
                    </strong>
                    {
                      ": Chronická žilová insuficiencia môže viesť k vzniku stázovej dermatitídy, ktorá sa prejavuje svrbením a začervenaním kože."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Ako zmierniť svrbenie?</h3>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Chladné obklady"}
                    </strong>
                    {
                      ": Aplikácia studených obkladov môže poskytnúť dočasnú úľavu od svrbenia."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Syndróm nepokojných nôh: Nočný tanec vašich končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm nepokojných nôh (Restless Legs Syndrome - RLS) je neurologické ochorenie, ktoré sa často vyskytuje u pacientov s chronickou žilovou insuficienciou."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Čo spôsobuje syndróm nepokojných nôh?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Presná príčina RLS nie je známa, ale existuje niekoľko teórií:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Narušená cirkulácia"}
                    </strong>
                    {
                      ": Zhoršený krvný obeh môže viesť k nedostatočnému zásobovaniu nervov kyslíkom a živinami."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Nedostatok železa"}
                    </strong>
                    {
                      ": Nízke hladiny železa v mozgu môžu prispieť k vzniku RLS."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dysfunkcia dopamínergného systému"}
                    </strong>
                    {
                      ": Niektoré štúdie naznačujú, že RLS môže byť spojený s poruchou dopamínergného systému v mozgu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Ako zvládnuť syndróm nepokojných nôh?"}
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
                      {"Liečba základného ochorenia"}
                    </strong>
                    {
                      ": Ak je RLS spojený s chronickou žilovou insuficienciou, liečba tohto stavu môže pomôcť zmierniť príznaky RLS."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Diagnostika: Detektívka v žilovom systéme"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Správna diagnostika je kľúčová pre efektívnu liečbu žilových problémov. Medzi hlavné diagnostické metódy patria:"
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
                      {"CT venografia alebo MR venografia"}
                    </strong>
                    {
                      ": Tieto pokročilé zobrazovacie metódy sa používajú v komplexných prípadoch na detailné zobrazenie žilového systému."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba: Od konzervatívnych metód po chirurgické zákroky"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba chronickej žilovej insuficiencie a jej príznakov zahŕňa široké spektrum možností:"
                }
              </p>
              <h3 className={listItemClassName2}>Konzervatívne metódy</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresná terapia"}
                    </strong>
                    {
                      ": Kompresné pančuchy alebo bandáže poskytujú graduovaný tlak na nohy, čo podporuje žilový návrat. Je to ako jemné objatie pre vaše nohy, ktoré im pomáha efektívnejšie pracovať."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Cvičenie"}
                    </strong>
                    {
                      ": Pravidelná fyzická aktivita, najmä chôdza, plávanie alebo cyklistika, aktivuje svalovú pumpu a zlepšuje žilový návrat. Vaše lýtkové svaly sú ako prirodzené čerpadlá pre vaše žily."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Elevácia končatín"}
                    </strong>
                    {
                      ": Zdvihnutie nôh nad úroveň srdca niekoľkokrát denne pomáha gravitácii pracovať vo váš prospech."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Farmakologická liečba</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Venofarmaká"}
                    </strong>
                    {
                      ": Lieky ako diosmín alebo hesperidín pomáhajú posilniť žilové steny a zlepšiť mikrocirkuláciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Diuretiká"}
                    </strong>
                    {
                      ": V prípade výrazných opuchov môže lekár predpísať diuretiká na odstránenie prebytočnej tekutiny."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Antikoagulanciá"}
                    </strong>
                    {
                      ": Pri riziku trombózy môžu byť potrebné lieky na riedenie krvi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Minimálne invazívne postupy"}
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Sklerotizácia"}
                    </strong>
                    {
                      ": Do postihnutých žíl sa vstrekne špeciálny roztok, ktorý spôsobí ich uzavretie a postupné vstrebanie. Je to ako malá chemická revolúcia vo vašich žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Rádiofrekvenčná ablácia"}
                    </strong>
                    {
                      ': Táto metóda využíva tepelnú energiu na uzavretie problémových žíl. Predstavte si to ako precízne cielený "žehličku" pre vaše žily.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Laserová terapia"}
                    </strong>
                    {
                      ": Laserové lúče sa používajú na uzavretie menších varikóznych žíl. Je to ako svetelná show, ktorá prináša úľavu vašim nohám."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Chirurgická liečba</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Stripping"}
                    </strong>
                    {
                      ": Pri tomto zákroku sa odstránia dlhé úseky postihnutých žíl. Je to ako veľké upratovanie vo vašom žilovom systéme."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Flebektómia"}
                    </strong>
                    {
                      ": Odstránenie menších varikóznych žíl cez malé rezy v koži. Chirurg v tomto prípade pracuje s presnosťou šperká"
                    }
                  </p>
                </li>
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"ra."}
              </p>
              <h2 className={listItemClassName}>
                {"Prevencia: Udržiavanie zdravia vašich žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je kľúčová v boji proti žilovým problémom. Tu je niekoľko stratégií:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dostatočná hydratácia"}
                    </strong>
                    {
                      ": Pomáha udržiavať krv tekutú a podporuje celkovú cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Záver: Vaše žily, vaše zdravie"}
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
