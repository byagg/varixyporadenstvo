const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

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
    text: "Aesculus hippocastanum, pagaštan konský, predstavuje sľubnú prírodnú alternatívu v liečbe kŕčových žíl. Jeho dlhá história používania v tradičnej medicíne, podporená modernými vedeckými výskumami, naznačuje, že môže byť účinným nástrojom v boji proti nepríjemným príznakom kŕčových žíl.",
  },
  {
    text: "Je však dôležité pamätať, že každý človek je jedinečný a čo funguje pre jedného, nemusí fungovať pre druhého. Pred začatím akejkoľvek novej liečby, vrátane prírodných prípravkov, je vždy najlepšie konzultovať s lekárom.",
  },
  {
    text: "Pagaštan konský nie je zázračným liekom, ale v kombinácii so zdravým životným štýlom môže významne prispieť k zlepšeniu zdravia vašich žíl a celkovej kvality života. Tak prečo nedať šancu tomuto prírodnému bojovníkovi proti kŕčovým žilám?",
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
    text: "Aescín",
    text_1:
      ": Hlavná účinná látka, ktorá je zodpovedná za väčšinu terapeutických účinkov pagaštanu konského. Aescín pomáha posilňovať steny žíl a zlepšovať ich pružnosť.",
  },
  {
    text: "Flavonoidy",
    text_1:
      ": Tieto silné antioxidanty chránia cievy pred poškodením voľnými radikálmi a zlepšujú mikrocirkuláciu.",
  },
  {
    text: "Proantokyanidíny",
    text_1:
      ": Podporujú zdravie spojivového tkaniva a pomáhajú udržiavať integritu cievnych stien.",
  },
  {
    text: "Taníny",
    text_1:
      ": Majú adstringentné účinky, ktoré môžu pomôcť zmierniť opuchy a zápal.",
  },
];

export const items4: ListItem2Props[] = [
  {
    text: "Posilnenie žilových stien",
    text_1:
      ": Aescín pomáha zvyšovať napätie v žilových stenách, čím zlepšuje ich schopnosť odolávať tlaku krvi. Je to ako by ste posilňovali múry hradu, aby lepšie odolávali útokom.",
  },
  {
    text: "Zlepšenie žilového návratu",
    text_1:
      ": Podporuje prácu žilových chlopní, čím zlepšuje návrat krvi k srdcu. Môžeme si to predstaviť ako opravu výťahu, ktorý efektívnejšie dopravuje krv nahor.",
  },
  {
    text: "Protizápalový účinok",
    text_1:
      ": Zmierňuje zápal v žilách a okolnom tkanive, čo môže pomôcť zmierniť bolesť a opuchy.",
  },
  {
    text: "Antioxidačný účinok",
    text_1:
      ": Chráni cievy pred poškodením voľnými radikálmi, čo môže spomaliť progresiu ochorenia.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Tablety a kapsuly",
    text_1:
      ": Najčastejšia forma užívania. Umožňujú presné dávkovanie a sú praktické pre každodenné užívanie.",
  },
  {
    text: "Gély a masti",
    text_1:
      ": Ideálne pre lokálnu aplikáciu pri bolesti a opuchoch nôh. Môžu poskytnúť rýchlu úľavu od príznakov.",
  },
  {
    text: "Čaje",
    text_1:
      ": Tradičná forma užívania, ktorá môže byť príjemnou súčasťou dennej rutiny.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Rutin",
    text_1:
      ": Flavonoid, ktorý podporuje pevnosť cievnych stien a zlepšuje mikrocirkuláciu.",
  },
  {
    text: "Diomín",
    text_1:
      ": Ďalší flavonoid, ktorý môže pomôcť znížiť zápal a opuchy v žilách.",
  },
  {
    text: "Hesperidín",
    text_1:
      ": Podporuje žilový návrat a môže zlepšiť príznaky chronickej žilovej insuficiencie.",
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
  { text: "Žalúdočné problémy", text_1: ": Nevoľnosť, podráždenosť žalúdka." },
  {
    text: "Svrbenie",
    text_1: ": Najmä pri lokálnej aplikácii gélov alebo mastí.",
  },
  { text: "Závrate", text_1: ": Zriedkavo, najmä pri vyšších dávkach." },
];

export const items9: ListItem2Props[] = [
  {
    text: "Ako dlho trvá, kým začnem pozorovať účinky pagaštanu konského na kŕčové žily?",
    text_1:
      " Individuálne reakcie môžu byť rôzne, no niektorí ľudia môžu cítiť úľavu po niekoľkých týždňoch pravidelného užívania. Plný účinok sa zvyčajne dostaví po 4-8 týždňoch konzistentného užívania.",
  },
  {
    text: "Existujú nežiaduce účinky pri užívaní pagaštanu konského?",
    text_1:
      " Niektorí ľudia môžu zažiť mierne žalúdočné ťažkosti alebo alergické reakcie. Je dôležité sledovať reakcie organizmu a v prípade pochybností vyhľadať odbornú pomoc.",
  },
  {
    text: "Môžem používať pagaštan konský spolu s inými liekmi?",
    text_1:
      " Pred začatím liečby je dôležité konzultovať s lekárom, aby sa predišlo možným interakciám s inými liekmi, najmä s antikoagulanciami.",
  },
  {
    text: "Aké iné prírodné metódy môžem použiť na zlepšenie ciev a krvného obehu?",
    text_1:
      " Okrem pagaštanu konského môžete vyskúšať rutin, diosmín, hesperidín alebo ginkgo biloba. Zdravá strava, pravidelná fyzická aktivita a užívanie doplnkov, ako je napríklad vitamín C, môžu tiež pozitívne ovplyvniť cievy.",
  },
  {
    text: "Môžem pagaštan konský používať aj po chirurgickom zákroku na kŕčové žily?",
    text_1:
      " Pred akýmkoľvek novým liečebným režimom po operácii je dôležité konzultovať s lekárom, aby sa predišlo možným komplikáciám počas rekonvalescencie.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zOumYE"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Aesculus hippocastanum: Prirodzená cesta k liečbe kŕčových žíl"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento komplexný článok poskytuje podrobný prehľad o využití Aesculus hippocastanum (pagaštan konský) v liečbe kŕčových žíl. Vysvetľuje mechanizmy účinku hlavnej účinnej látky aescínu na posilnenie žilových stien a zlepšenie cirkulácie, pričom sa opiera o aktuálne vedecké štúdie. Článok tiež pokrýva rôzne formy užívania pagaštanu konského, možné vedľajšie účinky a jeho kombináciu s ďalšími prírodnými látkami a životným štýlom pre optimálne výsledky pri liečbe varixov dolných končatín."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">7 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z71F7Y"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(8881px,auto)_1fr] max-lg:px-4 lg:min-h-[329.1875rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(4600px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zNNmit"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="aerial photography of flowers at daytime"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="aerial photography of flowers at daytime"
                  src="/external-assets/96b8a21b36b68827.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="aerial photography of flowers at daytime"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="aerial photography of flowers at daytime"
                  src="/external-assets/dbac16ec340e4a93.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
          >
            <div
              id="zInhc0"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V dnešnej dobe, keď sa čoraz viac ľudí obracia k prírode hľadajúc alternatívy k syntetickým liekom, sa do popredia dostáva Aesculus hippocastanum, známy aj ako pagaštan konský. Tento majestátny strom, pôvodom z Balkánskeho polostrova, nie je len okrasou parkov, ale skrýva v sebe potenciál pre liečbu rôznych cievnych ochorení, vrátane kŕčových žíl. Poďme sa bližšie pozrieť na to, ako môže tento prírodný zázrak pomôcť v boji proti nepríjemným príznakom kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú kŕčové žily a prečo vznikajú?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme do sveta pagaštanu konského, je dôležité pochopiť, proti čomu vlastne bojujeme. Kŕčové žily, odborne nazývané varixy, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne."
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
                {
                  "Aesculus hippocastanum: Prírodný bojovník proti kŕčovým žilám"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pagaštan konský je už stáročia známy svojimi liečivými účinkami. Jeho využitie v tradičnej medicíne siaha do dávnej minulosti, keď ho ľudia používali na liečbu rôznych ochorení, vrátane problémov s krvným obehom. Dnes, vďaka moderným vedeckým metódam, môžeme lepšie pochopiť, prečo je táto rastlina taká účinná."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Zloženie Aesculus hippocastanum"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kľúčom k pochopeniu účinkov pagaštanu konského je jeho bohaté chemické zloženie. Obsahuje množstvo biologicky aktívnych látok, ktoré pôsobia synergicky na zlepšenie zdravia ciev. Medzi najdôležitejšie patria:"
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
                      {"Vitamín C"}
                    </strong>
                    {
                      ": Silný antioxidant, ktorý je nevyhnutný pre tvorbu kolagénu, dôležitého proteínu pre zdravie ciev."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Účinky Aesculus hippocastanum na kŕčové žily"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pagaštan konský pôsobí na kŕčové žily viacerými mechanizmami:"
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
                      {"Zlepšenie mikrocirkulácie"}
                    </strong>
                    {
                      ": Podporuje prietok krvi v najmenších cievach, čo môže zmierniť príznaky ako je svrbenie a pálenie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Vedecké dôkazy účinnosti Aesculus hippocastanum"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Moderná veda poskytuje čoraz viac dôkazov o účinnosti pagaštanu konského v liečbe kŕčových žíl. Niekoľko klinických štúdií preukázalo jeho pozitívne účinky:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      'Systematický prehľad publikovaný v časopise "Global Advances in Health and Medicine" v roku 2019 zistil, že extrakt z pagaštanu konského významne zlepšil príznaky chronickej žilovej insuficiencie, vrátane opuchov a bolesti nôh.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      'Štúdia publikovaná v "Journal of Cardiovascular Pharmacology and Therapeutics" v roku 2017 ukázala, že aescín, hlavná účinná látka pagaštanu konského, môže byť účinný v liečbe žilových ochorení vďaka svojim protizápalovým a antioxidačným vlastnostiam.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      'Výskum uverejnený v "International Angiology" v roku 2018 zistil, že použitie gélu s extraktom z pagaštanu konského viedlo k významnému zlepšeniu príznakov kŕčových žíl v porovnaní s placebom.'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako užívať Aesculus hippocastanum"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pagaštan konský je dostupný v rôznych formách, každá s vlastnými výhodami:"
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
                      {"Tinktúry"}
                    </strong>
                    {
                      ": Koncentrovaná forma, ktorá sa zvyčajne riedi vodou pred užitím."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Dávkovanie a bezpečnosť</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci je pagaštan konský prírodný produkt, jeho užívanie by malo byť pod dohľadom lekára. Štandardné dávkovanie sa pohybuje okolo 300 mg extraktu dvakrát denne, ale môže sa líšiť v závislosti od konkrétneho prípravku a stavu pacienta."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je dôležité poznamenať, že surové časti rastliny (napríklad plody) môžu byť toxické, preto by sa nemali konzumovať. Vždy používajte štandardizované prípravky od dôveryhodných výrobcov."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Kombinovanie Aesculus hippocastanum s ďalšími prírodnými liečivami"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pagaštan konský môže byť ešte účinnejší v kombinácii s inými prírodnými látkami, ktoré podporujú zdravie ciev:"
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
                      {"Ginkgo biloba"}
                    </strong>
                    {
                      ": Zlepšuje periférnu cirkuláciu a môže pomôcť zmierniť opuchy nôh."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Životný štýl a Aesculus hippocastanum: Synergický prístup k liečbe kŕčových žíl"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci je pagaštan konský účinným prírodným liekom, najlepšie výsledky dosiahnete, ak ho skombinujete so zdravým životným štýlom:"
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
                  "Hoci je pagaštan konský všeobecne považovaný za bezpečný, môžu sa vyskytnúť niektoré vedľajšie účinky:"
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
                  "Pagaštan konský by nemali užívať tehotné a dojčiace ženy, ľudia s poruchami zrážanlivosti krvi, a osoby užívajúce antikoagulanciá bez konzultácie s lekárom."
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
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
