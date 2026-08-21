const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-2xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-lg";

/**
 * @ployComponent
 * @ployComponentId ako-sklerotizacia-varixov-moze-zmiernit-priznaky-krcovych-zil-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
      <span className="font-body text-black break-words">{text}</span>
    </p>
  );
}

type ListItem2Props = {
  descriptionClassName: string;
  text: string;
  separator?: string;
};

function ListItem2({ descriptionClassName, text, separator }: ListItem2Props) {
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

type ListItem3Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem3({ text, text_1, separator }: ListItem3Props) {
  return (
    <>
      <li className="text-black break-words">
        <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
          <span className="font-body font-bold break-words">{text}</span>
          <span className="font-body break-words">{text_1}</span>
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem4Props = {
  className: string;
  text: string;
  separator?: string;
};

function ListItem4({ className, text, separator }: ListItem4Props) {
  return (
    <>
      <span className={className}>{text}</span>
      {separator}
    </>
  );
}

type ListItem10Props = {
  descriptionClassName: string;
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem10({
  descriptionClassName,
  text,
  text_1,
  separator,
}: ListItem10Props) {
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

export const items: ListItemProps[] = [
  {
    text: "Kŕčové žily sú bežným problémom, ktorý môže výrazne ovplyvniť kvalitu života. Dobrou správou je, že existuje mnoho možností liečby a prevencie. Od jednoduchých zmien životného štýlu až po pokročilé chirurgické zákroky - vždy existuje riešenie.",
  },
  {
    text: "Pamätajte, že každý prípad je individuálny. To, čo funguje pre vášho suseda, nemusí byť najlepšie pre vás. Preto je dôležité konzultovať svoj stav s odborníkom a nájsť riešenie, ktoré bude vyhovovať práve vám.",
  },
  {
    text: "Tak čo, cítite sa už ako expert na kŕčové žily? Nezabudnite, že prevencia je vždy lepšia ako liečba. Tak sa hýbte, pite dostatok vody a majte sa radi - vaše nohy vám poďakujú!",
  },
];

export const items2: ListItem2Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Genetika - Ak vaši rodičia mali kŕčové žily, je vyššia šanca, že ich budete mať aj vy. Ďakujeme, evolúcia!",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Vek - S pribúdajúcimi rokmi sa riziko zvyšuje. Starnutie nie je pre slabochov!",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Pohlavie - Ženy sú náchylnejšie na kŕčové žily, najmä počas tehotenstva. Dámy, máme to ťažšie.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Obezita - Nadváha zvyšuje tlak na žily v nohách. Ďalší dôvod na prechádzku, však?",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Sedavý životný štýl - Dlhé sedenie alebo státie sťažuje návrat krvi k srdcu. Áno, to zahŕňa aj maratóny seriálov na gauči.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Hormóny - Tehotenstvo, menopauza alebo hormonálna antikoncepcia môžu ovplyvniť žily.",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1:
      "- Vystúpené, modrasté alebo fialové žily. Nie, nie je to nová módna ozdoba.",
  },
  {
    text: "Bolesť nôh od kolien dolu",
    text_1:
      "- Často popisovaná ako ťažoba alebo únava v nohách. Akoby ste celý deň nosili betónové topánky.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      "- Najmä v oblasti členkov a chodidiel. Ak vaše ponožky zanechávajú hlboké odtlačky, máme problém.",
  },
];

export const bodyTextSegments: ListItem4Props[] = [
  { className: "font-body font-bold break-words", text: "Svrbenie nôh" },
  { className: "font-body break-words", text: "- Môže sa vyskytnúť aj" },
  { className: "font-body font-bold break-words", text: "svrbenie nôh v noci" },
  {
    className: "font-body break-words",
    text: ". Vítajte v klube nočných škrabkáčov!",
  },
];

export const bodyTextSegments2: ListItem4Props[] = [
  {
    className: "font-body break-words",
    text: "Zmeny farby kože - Môže sa objaviť",
  },
  {
    className: "font-body font-bold break-words",
    text: "hyperpigmentácia na nohách",
  },
  {
    className: "font-body break-words",
    text: ". Nie, nie je to nový trend v tetovaní.",
  },
];

export const bodyTextSegments3: ListItem4Props[] = [
  {
    className: "font-body text-black break-words",
    text: "Ak máte podozrenie na kŕčové žily, je čas navštíviť odborníka.",
  },
  { className: "font-body text-black font-bold break-words", text: "Angiológ" },
  { className: "font-body text-black break-words", text: "alebo" },
  {
    className: "font-body text-black font-bold break-words",
    text: "cievny chirurg",
  },
  {
    className: "font-body text-black break-words",
    text: "vám môže pomôcť s diagnostikou a liečbou. Diagnostický proces zvyčajne zahŕňa:",
  },
];

export const items7: ListItem2Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Fyzické vyšetrenie - Lekár si prezrie vaše nohy a opýta sa na príznaky.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Ultrazvukové vyšetrenie - Pomáha zhodnotiť prietok krvi v žilách. Je to ako dopravné spravodajstvo pre vaše žily.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Venografia - Röntgenové vyšetrenie žíl s použitím kontrastnej látky (menej časté).",
  },
];

export const bodyTextSegments4: ListItem4Props[] = [
  {
    className: "font-body break-words",
    text: "Cvičenie - Pravidelný pohyb podporuje cirkuláciu. Skúste",
  },
  {
    className: "font-body font-bold break-words",
    text: "cviky na kŕčové žily",
  },
  { className: "font-body break-words", text: "." },
];

export const bodyTextSegments5: ListItem4Props[] = [
  {
    className: "font-body font-bold break-words",
    text: "Lieky na kŕčové žily",
  },
  { className: "font-body break-words", text: "- Napríklad" },
  { className: "font-body font-bold break-words", text: "diosmín" },
  { className: "font-body break-words", text: "alebo iné venofarmaká." },
];

export const items10: ListItem10Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Sklerotizácia kŕčových žíl",
    text_1: "- Vpichnutie špeciálnej látky do žily, ktorá ju uzavrie.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Laserová operácia kŕčových žíl",
    text_1: "- Použitie laserového lúča na uzavretie postihnutých žíl.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Rádiofrekvenčná ablácia varixov",
    text_1: "- Využitie tepelnej energie na uzavretie žíl.",
  },
];

export const bodyTextSegments6: ListItem4Props[] = [
  { className: "font-body break-words", text: "Noste" },
  { className: "font-body font-bold break-words", text: "kompresné pančuchy" },
  {
    className: "font-body break-words",
    text: "podľa pokynov lekára. Áno, aj v lete.",
  },
];

export const bodyTextSegments7: ListItem4Props[] = [
  {
    className: "font-body break-words",
    text: "Sledujte príznaky možných komplikácií, ako je",
  },
  {
    className: "font-body font-bold break-words",
    text: "svrbenie rany po operácii",
  },
  { className: "font-body break-words", text: "alebo nadmerná bolesť." },
];

export const items13: ListItem2Props[] = [
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Pravidelné cvičenie - Chôdza, plávanie alebo joga sú výborné pre cirkuláciu.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words max-[921px]:mb-0",
    text: "Zdravá strava - Vláknina a dostatok tekutín pomáhajú predchádzať zápche, ktorá môže zhoršovať kŕčové žily.",
  },
  {
    descriptionClassName:
      "font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0",
    text: "Vyhýbanie sa tesným šatám - Najmä v oblasti pásu a nôh. Doprajte svojim žilám trochu voľnosti!",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="znW8-Y"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako sklerotizácia varixov môže zmierniť príznaky kŕčových žíl"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento článok poskytuje komplexný prehľad o kŕčových žilách, ich príčinách a príznakoch. Vysvetľuje rôzne možnosti diagnostiky a liečby, od konzervatívnych metód až po chirurgické zákroky. Ponúka tiež praktické rady pre domácu starostlivosť a prevenciu, pričom kombinuje odborné informácie s ľahko zrozumiteľným jazykom a trochou humoru."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] hidden mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">4 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z2wvL0"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(4944px,auto)_1fr] max-lg:px-4 lg:min-h-[175.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_16.585%_33.1699%_16.585%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(2248px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zb6Peh"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person in white pants and white shirt holding clear glass tube"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person in white pants and white shirt holding clear glass tube"
                  src="https://images.unsplash.com/photo-1623682687826-fe06bf64e6d8?auto=format&fit=crop&w=406&h=344"
                  height="344"
                  width="406"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person in white pants and white shirt holding clear glass tube"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person in white pants and white shirt holding clear glass tube"
                  src="https://images.unsplash.com/photo-1623682687826-fe06bf64e6d8?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
            <div
              id="zuf_8V"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Vitajte vo svete kŕčových žíl! Ak ste niekedy mali pocit, že vaše nohy sú ťažké ako olovo, alebo ste si všimli, že vaše žily začínajú pripomínať mapu, ste na správnom mieste. Poďme sa spolu pozrieť na tento častý problém a zistiť, čo s ním môžeme robiť."
                  }
                </span>
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Čo sú vlastne kŕčové žily?"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Kŕčové žily, odborne nazývané varixy, sú rozšírené a pokrútené žily, ktoré vystupujú nad povrch kože. Najčastejšie sa objavujú na nohách, ale môžu sa vyskytnúť kdekoľvek na tele."
                  }
                </span>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    'Predstavte si žily ako cesty, po ktorých prúdi krv späť k srdcu. Keď tieto cesty začnú mať "zápchy", krv sa v nich hromadí a vytvára tie nepekné hrče, ktoré vidíme na koži.'
                  }
                </span>
              </p>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Prečo vznikajú kŕčové žily?"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Existuje viacero faktorov, ktoré prispievajú k vzniku kŕčových žíl:"
                  }
                </span>
              </p>
              <ol className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Príznaky kŕčových žíl"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Ako zistíte, že máte kŕčové žily? Tu je niekoľko typických príznakov:"
                  }
                </span>
              </p>
              <ul className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments.map((item, index) => (
                      <ListItem4
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Kŕče v nohách - Najmä v noci alebo po dlhom sedení či státí."
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    {bodyTextSegments2.map((item, index) => (
                      <ListItem4
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments2.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
              </ul>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Diagnostika kŕčových žíl"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                {bodyTextSegments3.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < bodyTextSegments3.length - 1 ? " " : ""}
                  />
                ))}
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Liečba kŕčových žíl"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Existuje mnoho spôsobov, ako liečiť kŕčové žily. Výber závisí od závažnosti vášho stavu:"
                  }
                </span>
              </p>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"1. Konzervatívna liečba"}
                </span>
              </h3>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body font-bold break-words">
                      {"Kompresné pančuchy" + " "}
                    </span>
                    <span className="font-body break-words">
                      {
                        "- Pomáhajú zlepšiť cirkuláciu krvi. Sú ako objatie pre vaše nohy."
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments4.map((item, index) => (
                      <ListItem4
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
                      {
                        "Elevácia nôh - Zdvíhanie nôh nad úroveň srdca pomáha odtoku krvi."
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Úprava životného štýlu - Zníženie hmotnosti, vyhýbanie sa dlhému státiu alebo sedeniu."
                      }
                    </span>
                  </p>
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"2. Medikamentózna liečba"}
                </span>
              </h3>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments5.map((item, index) => (
                      <ListItem4
                        key={index}
                        {...item}
                        separator={
                          index < bodyTextSegments5.length - 1 ? " " : ""
                        }
                      />
                    ))}
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body font-bold break-words">
                      {"Prírodné protizápalové lieky" + " "}
                    </span>
                    <span className="font-body break-words">
                      {"- Niektoré bylinky môžu pomôcť zmierniť príznaky."}
                    </span>
                  </p>
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                <span className="font-body text-black break-words lg:text-lg">
                  {"3. Minimálne invazívne zákroky"}
                </span>
              </h3>
              <ul className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-1.5 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                <span className="font-body text-black break-words lg:text-2xl">
                  {"4. Chirurgická liečba"}
                </span>
              </h3>
              <ul className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Stripping - Odstránenie postihnutej žily cez malé rezy."
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Flebektómia - Odstránenie menších kŕčových žíl cez drobné vpichy."
                      }
                    </span>
                  </p>
                </li>
              </ul>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Rekonvalescencia po operácii kŕčových žíl"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black font-bold break-words">
                  {"Starostlivosť o nohy po operácii kŕčových žíl" + " "}
                </span>
                <span className="font-body text-black break-words">
                  {"je kľúčová pre úspešné zotavenie:"}
                </span>
              </p>
              <ol className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    {bodyTextSegments6.map((item, index) => (
                      <ListItem4
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
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Pravidelne sa hýbte, ale vyhýbajte sa namáhavým aktivitám. Žiadne maratóny hneď po operácii!"
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body break-words">
                      {
                        "Zdvíhajte nohy nad úroveň srdca, keď odpočívate. Dajte svojim nohám pocit, že sú hviezdami."
                      }
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words mb-4 max-[921px]:mb-0">
                    {bodyTextSegments7.map((item, index) => (
                      <ListItem4
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
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Domáca starostlivosť a prevencia"}
                </span>
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-4 max-[921px]:mb-8">
                <span className="font-body text-black break-words">
                  {
                    "Existuje mnoho vecí, ktoré môžete robiť doma na zmiernenie príznakov a prevenciu kŕčových žíl:"
                  }
                </span>
              </p>
              <ol className="break-words my-0">
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body font-bold break-words">
                      {"Obklady na kŕčové žily" + " "}
                    </span>
                    <span className="font-body break-words">
                      {"- Studené obklady môžu zmierniť opuch a bolesť."}
                    </span>
                  </p>
                </li>
                <li className="text-black break-words">
                  <p className="font-heading text-black leading-6 break-words max-[921px]:mb-0">
                    <span className="font-body font-bold break-words">
                      {"Domáci liek na zápal žíl" + " "}
                    </span>
                    <span className="font-body break-words">
                      {"- Napríklad gél z aloe vera alebo jablčný ocot."}
                    </span>
                  </p>
                </li>
                {items13.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items13.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <h2 className={listItemClassName}>
                <span className="font-body text-black break-words lg:text-2xl">
                  {"Záver"}
                </span>
              </h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
