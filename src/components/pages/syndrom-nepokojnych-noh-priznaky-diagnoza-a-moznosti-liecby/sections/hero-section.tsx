const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId syndrom-nepokojnych-noh-priznaky-diagnoza-a-moznosti-liecby-hero-section
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

export const heroSection: ListItemProps[] = [
  {
    text: "Masáže",
    text_1:
      ": Jemná masáž nôh môže pomôcť zmierniť napätie a nepríjemné pocity.",
  },
  {
    text: "Akupunktúra",
    text_1:
      ": Niektorí pacienti hlásia zlepšenie po sérii akupunktúrnych sedení.",
  },
  {
    text: "Teplé a studené obklady",
    text_1:
      ": Aplikácia teplých alebo studených obkladov môže priniesť dočasnú úľavu.",
  },
];

export default function HeroSection({
  items = heroSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <div className="flex flex-col grow">
      <section
        id="zb_52j"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Syndróm Nepokojných Nôh: Príznaky, Diagnóza a Možnosti Liečby"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Syndróm nepokojných nôh spôsobuje nepríjemné pocity v nohách, ktoré narúšajú spánok a pohodu. Zistite, ako spoznať príznaky, aké sú možnosti diagnostiky a liečby tohto neurologického ochorenia."
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
        id="zSAWXo"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(4612px,auto)_1fr] max-lg:px-4 lg:min-h-[185.25rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(2402px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z9hXQ6"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person's foot"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person's foot"
                  src="/external-assets/ae5ac90bf770fcfa.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person's foot"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person's foot"
                  src="/external-assets/63a8a86ca976e086.jpg"
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
              id="zP2srD"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm nepokojných nôh (SNN) je neurologické ochorenie, ktoré postihuje veľké množstvo ľudí po celom svete. Tento stav sa prejavuje nepríjemnými pocitmi v nohách, ktoré vedú k neodolateľnej potrebe pohybovať nimi. To môže vážne ovplyvniť kvalitu spánku a celkovú pohodu. Poďme sa teda pozrieť na to, čo tento syndróm vlastne je, ako ho spoznať a čo môžete urobiť, ak ním trpíte."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo je syndróm nepokojných nôh a ako sa prejavuje?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm nepokojných nôh je stav, pri ktorom cítite nepríjemné pocity v nohách, často opísané ako brnenie, pálenie, svrbenie alebo ťahanie. Tieto príznaky sa zvyčajne objavujú v pokoji, najčastejšie večer alebo v noci, a môžu spôsobiť, že máte neustálu potrebu hýbať nohami. Tieto pohyby môžu priniesť dočasnú úľavu, ale môžu tiež narušiť váš spánok a spôsobiť dennú únavu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "SNN je jedinečný v tom, že ho môže zažiť každý inak. Niektorí ľudia cítia mierne brnenie, zatiaľ čo iní zažívajú intenzívnu bolesť. Príznaky môžu byť jednostranné (postihovať len jednu nohu) alebo obojstranné (obe nohy), a niekedy sa môžu objaviť aj v rukách alebo iných častiach tela."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo sa syndróm nepokojných nôh vyskytuje?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príčina SNN nie je úplne pochopená, ale predpokladá sa, že za týmto stavom môžu stáť viaceré faktory. Medzi ne patrí genetika, nerovnováha dopamínu v mozgu alebo nedostatok železa. Tento syndróm môže byť tiež spojený s inými zdravotnými stavmi, ako sú chronické ochorenia obličiek, cukrovka, alebo Parkinsonova choroba. Niekedy môže byť SNN spustený tehotenstvom alebo určitými liekmi, ktoré môžu ovplyvňovať chemické látky v mozgu."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ako sa diagnostikuje syndróm nepokojných nôh?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnóza SNN sa zvyčajne zakladá na vašich príznakoch a podrobnom rozhovore s lekárom. Váš lekár bude chcieť vedieť, kedy a ako často sa príznaky objavujú, ako intenzívne sú, a ako ovplyvňujú váš spánok a dennú aktivitu. Na presnú diagnózu môže byť potrebné vylúčiť iné stavy, ako napríklad problémy so žilami, cievnym systémom alebo neuropatiou."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak máte príznaky SNN, je dôležité, aby ste sa obrátili na odborníka, ktorý vám môže pomôcť určiť, čo je ich príčinou. V niektorých prípadoch môže byť potrebné vykonať krvné testy na zistenie nedostatku železa alebo iných látok, ktoré by mohli prispievať k vašim problémom."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Možnosti liečby: Ako si uľaviť od syndrómu nepokojných nôh?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba SNN sa zameriava na zmiernenie príznakov a zlepšenie kvality života. Existuje niekoľko prístupov, ktoré môžu pomôcť:"
                }
              </p>
              <h3 className={listItemClassName2}>Zmena životného štýlu</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Jedným z prvých krokov pri liečbe SNN je zmena životného štýlu. Niektoré opatrenia môžu zahŕňať:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Pravidelné cvičenie"}
                    </strong>
                    {
                      ": Ľahká fyzická aktivita počas dňa môže pomôcť zmierniť príznaky v noci."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vyhýbanie sa stimulantov"}
                    </strong>
                    {
                      ": Kofeín, alkohol a nikotín môžu zhoršiť príznaky SNN, preto sa odporúča ich obmedzenie alebo úplné vylúčenie."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Udržiavanie pravidelného spánkového režimu"}
                    </strong>
                    {
                      ": Chodenie spať a vstávanie v rovnakom čase každý deň môže pomôcť vášmu telu zvyknúť si na pravidelný rytmus a zmierniť príznaky SNN."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>Farmakoterapia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V závažnejších prípadoch môže byť potrebné použiť lieky na zmiernenie príznakov. Medzi najčastejšie používané lieky patria:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Dopaminergné látky"}
                    </strong>
                    {
                      ": Tieto lieky pomáhajú zlepšiť rovnováhu dopamínu v mozgu a môžu výrazne zmierniť príznaky SNN."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Antikonvulzíva"}
                    </strong>
                    {
                      ": Používajú sa na liečbu nervovej bolesti a môžu pomôcť pri zmierňovaní príznakov SNN."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Opioidy"}
                    </strong>
                    {
                      ": V závažných prípadoch, keď iné lieky nefungujú, môžu byť predpísané opioidy. Sú však spojené s rizikom závislosti, preto sa používajú len v nevyhnutných prípadoch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>Alternatívne metódy liečby</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Niektorí ľudia nachádzajú úľavu v alternatívnych liečebných metódach, ako sú:"
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
                      {"Relaxácia a meditačné techniky"}
                    </strong>
                    {
                      ": Cvičenia na zníženie stresu a zlepšenie spánku môžu byť užitočné pri zvládaní príznakov SNN."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Záver: Ako žiť so syndrómom nepokojných nôh"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm nepokojných nôh môže byť frustrujúci a vyčerpávajúci, ale s včasnou diagnózou a vhodnou liečbou je možné zvládnuť jeho príznaky a zlepšiť kvalitu života. Ak cítite, že tento problém ovplyvňuje váš spánok a dennú pohodu, neváhajte vyhľadať lekársku pomoc. Každý človek je jedinečný, a preto môže byť potrebné vyskúšať rôzne prístupy, kým nájdete ten, ktorý vám najviac vyhovuje."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Nezabudnite, že zmena životného štýlu a dodržiavanie pravidelného spánkového režimu môžu mať veľký vplyv na zmiernenie príznakov. Ak je potrebné, farmakoterapia alebo alternatívne metódy liečby môžu poskytnúť ďalšiu úľavu. Vždy je dôležité konzultovať s odborníkom, aby ste získali najlepšiu možnú starostlivosť."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
