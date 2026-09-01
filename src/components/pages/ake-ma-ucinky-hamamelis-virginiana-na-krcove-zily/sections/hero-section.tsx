const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId ake-ma-ucinky-hamamelis-virginiana-na-krcove-zily-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {text}
    </p>
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
  {
    text: "Hamamelis virginiana predstavuje sľubnú prírodnú alternatívu v liečbe kŕčových žíl. Jej dlhá história používania v tradičnej medicíne, podporená modernými vedeckými výskumami, naznačuje, že môže byť účinným nástrojom v boji proti nepríjemným príznakom kŕčových žíl.",
  },
  {
    text: "Je však dôležité pamätať, že každý človek je jedinečný a čo funguje pre jedného, nemusí fungovať pre druhého. Pred začatím akejkoľvek novej liečby, vrátane prírodných prípravkov, je vždy najlepšie konzultovať s lekárom.",
  },
  {
    text: "Hamamelis virginiana nie je zázračným liekom, ale v kombinácii so zdravým životným štýlom môže významne prispieť k zlepšeniu zdravia vašich žíl a celkovej kvality života. Tak prečo nedať šancu tomuto prírodnému bojovníkovi proti kŕčovým žilám?",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1: ": Pokrútené, vystúpené žily modrej alebo fialovej farby.",
  },
  {
    text: "Bolesť nôh od kolien dole",
    text_1: ": Pocit ťažkosti a únavy v nohách, najmä v dolnej časti.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      ": Najmä v oblasti členkov a chodidiel, ktoré sa zvyčajne zhoršujú počas dňa.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Nepríjemné pocity v oblasti postihnutých žíl.",
  },
  { text: "Nočné kŕče", text_1: ": Bolestivé sťahy svalov, najmä v lýtkach." },
];

export const items3: ListItem2Props[] = [
  {
    text: "Taníny",
    text_1:
      ": Tieto látky majú adstringentné vlastnosti, čo znamená, že pomáhajú sťahovať tkanivá. V prípade kŕčových žíl to môže pomôcť zúžiť rozšírené žily a zlepšiť ich tonus.",
  },
  {
    text: "Flavonoidy",
    text_1:
      ": Najmä quercetín a kaempferol, ktoré majú silné antioxidačné a protizápalové účinky. Tieto látky pomáhajú chrániť cievy pred poškodením a podporujú ich zdravie.",
  },
  {
    text: "Proantokyanidíny",
    text_1:
      ": Tieto zlúčeniny podporujú zdravie spojivového tkaniva a pomáhajú udržiavať integritu cievnych stien.",
  },
];

export const items4: ListItem2Props[] = [
  {
    text: "Zlepšenie žilového tonusu",
    text_1:
      ": Taníny v Hamamelis virginiana pomáhajú sťahovať rozšírené žily, čím zlepšujú ich tonus a funkciu. Je to ako by ste dali vašim žilám jemné, ale účinné objatie.",
  },
  {
    text: "Protizápalový účinok",
    text_1:
      ": Flavonoidy a ďalšie zlúčeniny v Hamamelis virginiana majú protizápalové vlastnosti, ktoré môžu pomôcť zmierniť zápal spojený s kŕčovými žilami. To môže viesť k zmierneniu bolesti a nepohodlia.",
  },
  {
    text: "Antioxidačný účinok",
    text_1:
      ': Flavonoidy v Hamamelis virginiana pôsobia ako antioxidanty, chrániac cievy pred poškodením voľnými radikálmi. Je to ako by ste mali malú armádu ochrancov, ktorí bojujú proti "zlým chlapcom" vo vašich cievach.',
  },
  {
    text: "Zlepšenie mikrocirkulácie",
    text_1:
      ": Hamamelis virginiana môže pomôcť zlepšiť prietok krvi v najmenších cievach, čo môže viesť k lepšiemu okysličeniu tkanív a zmierneniu príznakov ako je svrbenie a pálenie.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Masti a gély",
    text_1:
      ": Ideálne pre lokálnu aplikáciu pri bolesti a opuchoch nôh. Môžu poskytnúť rýchlu úľavu od príznakov.",
  },
  {
    text: "Tinktúry",
    text_1:
      ": Koncentrovaná forma, ktorá sa zvyčajne riedi vodou pred užitím alebo sa aplikuje lokálne.",
  },
  {
    text: "Čaje",
    text_1:
      ": Tradičná forma užívania, ktorá môže byť príjemnou súčasťou dennej rutiny.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Koňský gaštan (Aesculus hippocastanum)",
    text_1:
      ": Obsahuje escín, ktorý môže synergicky pôsobiť s Hamamelis virginiana na zlepšenie žilového návratu a zníženie opuchov.",
  },
  {
    text: "Rutin",
    text_1:
      ": Tento flavonoid môže pomôcť posilniť cievne steny a zlepšiť cirkuláciu.",
  },
  {
    text: "Ginkgo biloba",
    text_1:
      ": Zlepšuje periférnu cirkuláciu a môže pomôcť zmierniť opuchy nôh.",
  },
];

export const items7: ListItem2Props[] = [
  {
    text: "Pravidelné cvičenie",
    text_1:
      ": Aktivity ako chôdza, plávanie alebo cyklistika pomáhajú zlepšovať cirkuláciu.",
  },
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Nadváha zvyšuje tlak na žily v nohách.",
  },
  {
    text: "Vyvážená strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a zlepšiť celkové zdravie ciev.",
  },
  {
    text: "Nosenie kompresných pančúch",
    text_1:
      ": Môžu pomôcť zlepšiť žilový návrat, najmä ak trávite veľa času v stoji alebo sedení.",
  },
];

export const items8: ListItem2Props[] = [
  {
    text: "Kožné reakcie",
    text_1:
      ": U niektorých ľudí môže spôsobiť podráždenie kože alebo alergické reakcie.",
  },
  {
    text: "Žalúdočné problémy",
    text_1: ": Pri internom užívaní môže spôsobiť nevoľnosť alebo vracanie.",
  },
  {
    text: "Interakcie s liekmi",
    text_1: ": Môže interagovať s niektorými liekmi na riedenie krvi.",
  },
];

export const items9: ListItem2Props[] = [
  {
    text: "Je Hamamelis virginiana účinná na všetky druhy kŕčových žíl?",
    text_1:
      " Hamamelis virginiana môže byť účinná na rôzne druhy kŕčových žíl a chronickej žilovej insuficiencie, ale jej účinnosť môže závisieť od závažnosti stavu. Je najúčinnejšia v skorých štádiách ochorenia.",
  },
  {
    text: "Môžem užívať Hamamelis virginiana spolu s inými liekmi na kŕčové žily?",
    text_1:
      " Pred kombinovaním Hamamelis virginiana s inými liekmi je vhodné konzultovať s lekárom. Môže dôjsť k interakciám, najmä s liekmi na riedenie krvi.",
  },
  {
    text: "Ako dlho trvá, kým začnem pozorovať účinky Hamamelis virginiana?",
    text_1:
      " Individuálne reakcie môžu byť rôzne. Niektorí ľudia môžu cítiť úľavu po niekoľkých týždňoch pravidelného používania, ale plný účinok sa zvyčajne dostaví po 4-8 týždňoch konzistentného používania.",
  },
  {
    text: "Môže Hamamelis virginiana pomôcť s bolesťou v nohách?",
    text_1:
      " Áno, Hamamelis virginiana môže pomôcť zmierniť bolesť v nohách spojenú s kŕčovými žilami a opuchmi.k úľave od bolesti.",
  },
  {
    text: "Je Hamamelis virginiana bezpečná pre dlhodobé používanie?",
    text_1:
      " Pri lokálnom používaní je Hamamelis virginiana všeobecne považovaná za bezpečnú pre dlhodobé používanie. Avšak, ako pri každom doplnku, je vhodné pravidelne konzultovať s lekárom, najmä ak používate aj iné lieky.",
  },
  {
    text: "Môžem používať Hamamelis virginiana aj po chirurgickom zákroku na kŕčové žily?",
    text_1:
      " Po operácii kŕčových žíl je dôležité najprv konzultovať s vaším chirurgom. Hamamelis virginiana by mohla potenciálne podporiť proces hojenia a prevenciu recidívy, ale timing a vhodnosť jej použitia musí posúdiť odborník.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zyQwfA"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Aké má účinky Hamamelis virginiana na kŕčové žily?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Vďaka dlhoročnej tradícii v tradičnej medicíne a vedeckým výskumom si Hamamelis virginiana získala povesť účinného prírodného lieku na liečbu kŕčových žíl. Naším cieľom je poskytnúť vám komplexný pohľad na túto rastlinu a jej potenciálne prínosy pri zmierňovaní príznakov a nepríjemností spojených s kŕčovými žilami."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">8 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zuFM8W"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(9969px,auto)_1fr] max-lg:px-4 lg:min-h-[349.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(4888px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zx4RGH"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="gray rock pathway between green plants"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="gray rock pathway between green plants"
                  src="/external-assets/9f78bc3f2d4d02fb.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="gray rock pathway between green plants"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="gray rock pathway between green plants"
                  src="/external-assets/ce6ba6278f9657ea.jpg"
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
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
          >
            <div
              id="zKbZXp"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V dnešnej dobe, keď sa čoraz viac ľudí obracia k prírode hľadajúc alternatívy k syntetickým liekom, sa do popredia dostáva Hamamelis virginiana, známa aj ako hamamel virgínsky alebo čarodejnícky orech. Táto fascinujúca rastlina, ktorá sa tradične používa v prírodnej medicíne, získava pozornosť pre svoje potenciálne účinky na kŕčové žily. Poďme sa bližšie pozrieť na to, ako môže tento prírodný zázrak pomôcť v boji proti nepríjemným príznakom kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú kŕčové žily a prečo vznikajú?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme do sveta Hamamelis virginiana, je dôležité pochopiť, proti čomu vlastne bojujeme. Kŕčové žily, odborne nazývané varixy, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne."
                }
              </p>
              <h3 className={listItemClassName2}>Príznaky kŕčových žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kŕčové žily môžu spôsobovať rôzne nepríjemné príznaky:"}
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
                      {"Zmeny na koži"}
                    </strong>
                    {
                      ": Suchá, šupinatá koža alebo hyperpigmentácia v oblasti postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Hamamelis virginiana: Prírodný bojovník proti kŕčovým žilám"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hamamelis virginiana je už stáročia známa svojimi liečivými účinkami. Jej využitie v tradičnej medicíne siaha do dávnej minulosti, keď ju pôvodní obyvatelia Ameriky používali na liečbu rôznych ochorení, vrátane problémov s krvným obehom. Dnes, vďaka moderným vedeckým metódam, môžeme lepšie pochopiť, prečo je táto rastlina taká účinná."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Zloženie Hamamelis virginiana"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kľúčom k pochopeniu účinkov Hamamelis virginiana je jej bohaté chemické zloženie. Obsahuje množstvo biologicky aktívnych látok, ktoré pôsobia synergicky na zlepšenie zdravia ciev. Medzi najdôležitejšie patria:"
                }
              </p>
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
                      {"Esenciálne oleje"}
                    </strong>
                    {
                      ": Obsahujú látky s protizápalovými a antimikrobiálnymi vlastnosťami, ktoré môžu pomôcť pri hojení a zmierňovaní príznakov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Účinky Hamamelis virginiana na kŕčové žily"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hamamelis virginiana pôsobí na kŕčové žily viacerými mechanizmami:"
                }
              </p>
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
                      {"Podpora hojenia"}
                    </strong>
                    {
                      ": Vďaka svojim adstringentným a antimikrobiálnym vlastnostiam môže Hamamelis virginiana podporovať hojenie malých rán alebo vredov, ktoré sa môžu vyskytnúť v súvislosti s kŕčovými žilami."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Vedecké dôkazy účinnosti Hamamelis virginiana"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Moderná veda poskytuje čoraz viac dôkazov o účinnosti Hamamelis virginiana v liečbe kŕčových žíl a chronickej žilovej insuficiencie. Niekoľko klinických štúdií preukázalo jej pozitívne účinky:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      'Štúdia publikovaná v časopise "Phytomedicine" v roku 2016 zistila, že lokálna aplikácia krému obsahujúceho extrakt z Hamamelis virginiana viedla k významnému zlepšeniu príznakov chronickej žilovej insuficiencie, vrátane opuchov a bolesti nôh.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      'Výskum uverejnený v "Journal of Ethnopharmacology" v roku 2018 potvrdil protizápalové a antioxidačné účinky Hamamelis virginiana, čo podporuje jej potenciálne využitie v liečbe cievnych ochorení.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      'Systematický prehľad publikovaný v "Evidence-Based Complementary and Alternative Medicine" v roku 2020 zhrnul dostupné dôkazy o účinnosti Hamamelis virginiana v liečbe rôznych kožných a cievnych ochorení, vrátane kŕčových žíl.'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako užívať Hamamelis virginiana"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hamamelis virginiana je dostupná v rôznych formách, každá s vlastnými výhodami:"
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
                      {"Obklady"}
                    </strong>
                    {
                      ": Namočenie handričky v odvare z Hamamelis virginiana a jej aplikácia na postihnuté oblasti môže priniesť úľavu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Dávkovanie a bezpečnosť</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci je Hamamelis virginiana prírodný produkt, jej užívanie by malo byť pod dohľadom lekára. Štandardné dávkovanie sa môže líšiť v závislosti od konkrétneho prípravku a stavu pacienta."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je dôležité poznamenať, že interné užívanie Hamamelis virginiana by malo byť veľmi opatrné a vždy pod dohľadom odborníka, keďže niektoré jej zložky môžu byť pri nadmernom užívaní toxické."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Kombinovanie Hamamelis virginiana s ďalšími prírodnými liečivami"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hamamelis virginiana môže byť ešte účinnejšia v kombinácii s inými prírodnými látkami, ktoré podporujú zdravie ciev:"
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
                      {"Diomín"}
                    </strong>
                    {
                      ": Ďalší flavonoid, ktorý môže pomôcť znížiť zápal a opuchy v žilách."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Životný štýl a Hamamelis virginiana: Synergický prístup k liečbe kŕčových žíl"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci je Hamamelis virginiana účinným prírodným liekom, najlepšie výsledky dosiahnete, ak ju skombinujete so zdravým životným štýlom:"
                }
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dostatočná hydratácia"}
                    </strong>
                    {
                      ": Pitie dostatočného množstva vody pomáha udržiavať krv tekutejšiu a podporuje zdravú cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Potenciálne vedľajšie účinky a kontraindikácie"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci je Hamamelis virginiana všeobecne považovaná za bezpečnú pri lokálnom použití, môžu sa vyskytnúť niektoré vedľajšie účinky:"
                }
              </p>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hamamelis virginiana by nemali užívať tehotné a dojčiace ženy, ľudia s poruchami zrážanlivosti krvi, a osoby užívajúce antikoagulanciá bez konzultácie s lekárom."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Existujú nejaké alternatívy k Hamamelis virginiana pre liečbu kŕčových žíl?" +
                        " "}
                    </strong>
                    {
                      "Áno, existujú aj iné prírodné alternatívy, ako napríklad extrakt z pagaštanu konského (Aesculus hippocastanum), Ruscus aculeatus, diosmín alebo hesperidín. Každá z týchto látok má svoje špecifické účinky a môže byť vhodná v závislosti od individuálneho stavu pacienta."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Pamätajte, že hoci Hamamelis virginiana predstavuje sľubnú prírodnú alternatívu v liečbe kŕčových žíl, nie je náhradou za odbornú lekársku starostlivosť. Vždy konzultujte svoje zdravotné problémy s kvalifikovaným zdravotníckym pracovníkom, ktorý vám môže poskytnúť personalizované odporúčania based on vašom individuálnom zdravotnom stave a potrebách."
                    }
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
