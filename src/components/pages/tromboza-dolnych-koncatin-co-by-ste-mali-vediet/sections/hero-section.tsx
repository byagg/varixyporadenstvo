const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId tromboza-dolnych-koncatin-co-by-ste-mali-vediet-hero-section
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
    text: "Bolesť a opuch:",
    text_1:
      " Postihnutá noha môže byť bolestivá a opuchnutá, najmä v oblasti lýtka alebo členka.",
  },
  {
    text: "Začervenanie:",
    text_1: " Koža na postihnutej nohe môže byť začervenaná a horúca na dotyk.",
  },
  {
    text: "Pocit tiaže alebo napätia:",
    text_1: " Postihnutá noha môže byť napnutá a ťažká.",
  },
  {
    text: "Zmeny farby kože:",
    text_1:
      " V niektorých prípadoch môže koža nad postihnutou oblasťou zmodrieť alebo získať fialový odtieň.",
  },
  {
    text: "Kŕče:",
    text_1: " Mnohí pacienti pociťujú nepríjemné kŕče, najmä v oblasti lýtok.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Pravidelný pohyb:",
    text_1:
      " Ak musíte dlhodobo sedieť, napríklad počas dlhých ciest, snažte sa každú hodinu prejsť alebo vykonávať jednoduché cvičenia na nohy.",
  },
  {
    text: "Zdravá strava a udržiavanie hmotnosti:",
    text_1:
      " Zdravý životný štýl, vrátane vyváženej stravy a pravidelného cvičenia, môže pomôcť znížiť riziko trombózy.",
  },
  {
    text: "Vyhýbanie sa fajčeniu:",
    text_1:
      " Ak fajčíte, zvážte odvykanie, pretože fajčenie výrazne zvyšuje riziko trombózy.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zHmAvT"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Trombóza dolných končatín: Čo by ste mali vedieť"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Trombóza dolných končatín je závažný stav, ktorý môže viesť k vážnym komplikáciám, ako je pľúcna embólia. Objavte príznaky, rizikové faktory a spôsoby prevencie a liečby tejto nebezpečnej poruchy."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">4 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zz6noe"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(5999px,auto)_1fr] max-lg:px-4 lg:min-h-[223rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3062px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zv3ekV"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person sitting showing arms"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person sitting showing arms"
                  src="https://images.unsplash.com/photo-1511009041488-e840170253f2?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person sitting showing arms"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person sitting showing arms"
                  src="https://images.unsplash.com/photo-1511009041488-e840170253f2?auto=format&fit=crop&w=360&h=351"
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
              id="z2VhNh"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Trombóza žíl dolných končatín je závažné ochorenie, ktoré sa prejavuje tvorbou krvnej zrazeniny (trombusu) v žilách nôh. Tento stav môže spôsobiť rôzne komplikácie, vrátane bolesti, opuchu a dokonca aj život ohrozujúcich stavov, ako je pľúcna embólia. Prečo je tento problém taký vážny? Ako ho rozpoznať a čo robiť, ak sa objavia príznaky? V tomto článku sa pozrieme na všetko, čo by ste mali vedieť o trombóze dolných končatín."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo je trombóza žíl dolných končatín?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Trombóza žíl dolných končatín je stav, pri ktorom sa krvná zrazenina vytvorí v hlbokých žilách nôh. Táto zrazenina môže čiastočne alebo úplne zablokovať prietok krvi v žile, čo vedie k rôznym symptómom. Najväčším rizikom však je, že sa zrazenina môže odtrhnúť a cestovať cez krvný obeh do pľúc, kde môže spôsobiť pľúcnu embóliu – stav, ktorý môže byť smrteľný."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príznaky trombózy žíl dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Trombóza žíl dolných končatín sa často prejavuje náhle a môže byť veľmi bolestivá. Typické príznaky zahŕňajú:"
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
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sa tieto príznaky objavia, je dôležité ihneď vyhľadať lekársku pomoc. Trombóza nie je stav, ktorý by sa dal ignorovať alebo liečiť domácimi prostriedkami bez konzultácie s odborníkom."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príčiny a rizikové faktory trombózy žíl dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko rizikových faktorov, ktoré môžu zvýšiť pravdepodobnosť vzniku trombózy. Patria medzi ne:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Dlhodobá nehybnosť (imobilizácia)"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dlhodobé sedenie alebo ležanie, napríklad počas dlhých letov, cestovania autom alebo po chirurgických zákrokoch, môže spomaliť prietok krvi v žilách, čo zvyšuje riziko tvorby zrazenín."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Obezita"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nadváha zvyšuje tlak na žily dolných končatín, čo môže viesť k tvorbe trombov."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Fajčenie"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Fajčenie má negatívny vplyv na cievy a zvyšuje riziko tvorby zrazenín."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Hormonálne Zmeny"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hormonálna antikoncepcia alebo hormonálna terapia môže zvýšiť riziko vzniku trombózy, najmä u žien s ďalšími rizikovými faktormi, ako je fajčenie alebo nadváha."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"5." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Vek a Rodinná Anamnéza"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ľudia nad 60 rokov a tí, ktorí majú v rodine históriu trombózy, sú viac náchylní na toto ochorenie."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Diagnostika trombózy žíl dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnostika trombózy žíl dolných končatín zahŕňa niekoľko krokov. Lekár najprv vykoná fyzické vyšetrenie a vezme podrobnú anamnézu. Potom môže použiť rôzne zobrazovacie techniky na potvrdenie diagnózy, ako sú:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Ultrazvuk:" + " "}
                    </strong>
                    {
                      "Tento neinvazívny test je najčastejšou metódou na zistenie prítomnosti zrazeniny v žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"CT alebo MRI:" + " "}
                    </strong>
                    {
                      "V niektorých prípadoch môže byť potrebné vykonať podrobnejšie zobrazovacie vyšetrenia, ako je počítačová tomografia (CT) alebo magnetická rezonancia (MRI), najmä ak je podozrenie na komplikácie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Liečba trombózy žíl dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba trombózy žíl dolných končatín sa zameriava na zabránenie rastu trombu, jeho rozpúšťanie a prevenciu ďalších trombóz. Hlavné metódy liečby zahŕňajú:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Lieky na riedenie krvi"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Antikoagulačné lieky, známe aj ako riedidlá krvi, znižujú schopnosť krvi tvoriť zrazeniny a pomáhajú predchádzať ďalším trombózam. Patria sem napríklad warfarín alebo moderné lieky ako apixaban alebo rivaroxaban."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kompresné pančuchy"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tieto špeciálne pančuchy pomáhajú zlepšiť prietok krvi v žilách a znižujú riziko opätovného vzniku trombózy. Zároveň pomáhajú zmierniť opuchy a nepohodlie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Chirurgický zákrok"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V prípade závažných prípadov, keď lieky na riedenie krvi nie sú dostatočné alebo existuje riziko pľúcnej embólie, môže byť potrebný chirurgický zákrok na odstránenie trombu."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prevencia trombózy žíl dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia trombózy je kľúčová, najmä pre tých, ktorí majú zvýšené riziko vzniku tohto ochorenia. Tu sú niektoré preventívne opatrenia:"
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
                      {"Používanie kompresných pančúch:" + " "}
                    </strong>
                    {
                      "Ak máte vysoké riziko trombózy, konzultujte s lekárom možnosť nosenia kompresných pančúch, najmä počas dlhších období nečinnosti."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Trombóza žíl dolných končatín je vážny stav, ktorý vyžaduje včasnú diagnostiku a liečbu, aby sa predišlo vážnym komplikáciám, ako je pľúcna embólia. Ak máte podozrenie na trombózu alebo máte rizikové faktory, je dôležité okamžite vyhľadať lekársku pomoc. Vďaka moderným diagnostickým a liečebným metódam je však možné tento stav úspešne zvládať a znížiť riziko ďalších komplikácií."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
