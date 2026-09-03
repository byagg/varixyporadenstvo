const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

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
    text: "Zúženie prierezu žíl",
    text_1:
      ": Kompresia pomáha stlačiť rozšírené žily, čím zmenšuje ich priemer. To môže znieť kontraintuitívne, ale v skutočnosti to pomáha krvi lepšie prúdiť.",
  },
  {
    text: "Zlepšenie funkcie žilových chlopní",
    text_1:
      ": Keď sa žily zúžia, žilové chlopne sa môžu lepšie uzatvárať. To je kľúčové, pretože práve nefunkčné chlopne sú jednou z hlavných príčin vzniku kŕčových žíl.",
  },
  {
    text: "Zvýšenie rýchlosti prúdenia krvi",
    text_1:
      ": Vďaka kompresii sa krv v žilách pohybuje rýchlejšie, čo znižuje riziko jej hromadenia a tvorby krvných zrazenín.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Podporná trieda",
    text_1: " (70 DEN): Ideálna pre prevenciu a ľahké problémy so žilami.",
  },
  {
    text: "Prvá kompresívna trieda",
    text_1: " (140 DEN): Vhodná pre ľudí s miernymi príznakmi.",
  },
  {
    text: "Druhá kompresívna trieda",
    text_1:
      " (od 360 DEN): Najčastejšie predpisovaná lekármi pri stredne závažných problémoch.",
  },
];

export const items3: ListItemProps[] = [
  {
    text: "Konzultácia s lekárom",
    text_1:
      ": Ideálne by mal vaše žily posúdiť angiológ alebo cievny chirurg. Môže vám predpísať vhodnú kompresívnu triedu a typ pančúch.",
  },
  {
    text: "Presné meranie",
    text_1:
      ": Kompresívne pančuchy musia sedieť dokonale, aby plnili svoju funkciu. Preto je dôležité presné meranie obvodu nohy na viacerých miestach - od členka až po stehno, v závislosti od typu pančúch.",
  },
  {
    text: "Zváženie vašich potrieb",
    text_1:
      ": Ak trávite veľa času v sede alebo stoji, možno budete potrebovať silnejšiu kompresiu. Naopak, ak ste aktívni a potrebujete pančuchy len na prevenciu, môže vám stačiť nižšia trieda.",
  },
  {
    text: "Materiál a dizajn",
    text_1:
      ": Hoci je funkčnosť prvoradá, nezabúdajte ani na pohodlie a estetiku. Moderne kompresívne pančuchy sú dostupné v rôznych farbách a vzoroch.",
  },
];

export const items4: ListItemProps[] = [
  {
    text: "Obliekanie ráno",
    text_1:
      ": Pančuchy si obliekajte hneď ráno, keď vstanete z postele a vaše nohy ešte nie sú opuchnuté.",
  },
  {
    text: "Správna technika obliekania",
    text_1:
      ": Začnite od špičky nohy a postupne naťahujte pančuchu smerom nahor. Nerolujte ju ako bežné pančuchy.",
  },
  {
    text: "Celodenné nosenie",
    text_1:
      ": Pre najlepší účinok noste pančuchy celý deň, ale na noc ich vyzlečte.",
  },
  {
    text: "Pravidelná výmena",
    text_1:
      ": Kompresívne pančuchy časom strácajú svoju elasticitu. Odporúča sa vymeniť ich každých 3-6 mesiacov, v závislosti od frekvencie používania.",
  },
];

export const items5: ListItemProps[] = [
  {
    text: "Prevencii hlbokej žilovej trombózy",
    text_1: ": Obzvlášť dôležité pri dlhých letoch alebo po operácii.",
  },
  {
    text: "Liečbe lymfedému",
    text_1:
      ": Špeciálne kompresívne pančuchy môžu pomôcť pri odvodnení opuchnutých končatín.",
  },
  {
    text: "Zmiernení opuchov nôh v tehotenstve",
    text_1:
      ": Mnohé tehotné ženy ocenia úľavu, ktorú prinášajú kompresívne pančuchy.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zB0p8t"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Sťahovacia pančucha: Ako objať vaše žily pre zdravšie nohy"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte silu kompresívnych pančúch v boji proti kŕčovým žilám a žilovej nedostatočnosti. Zistite, ako fungujú, ako si vybrať správne a ako ich používať pre zdravšie a ľahšie nohy."
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
        id="zpiwpw"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zm6-qU"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="bathtub with water and flowers"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="bathtub with water and flowers"
                  src="/external-assets/dd6ebf6187488a1e.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="bathtub with water and flowers"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="bathtub with water and flowers"
                  src="/external-assets/75336294652346ea.jpg"
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
              id="zL0VTP"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že by ste mohli vaše unavené, opuchnuté nohy objať niečím, čo by im prinieslo úľavu a zároveň zlepšilo zdravie vašich žíl. Práve to dokážu kompresívne, alebo ako ich ľudovo nazývame, sťahovacie pančuchy. Tieto malé zázraky modernej medicíny nie sú len módnym doplnkom, ale skutočným terapeutickým nástrojom v boji proti kŕčovým žilám a žilovej nedostatočnosti."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ako funguje kompresia v boji proti kŕčovým žilám?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Kľúčom k účinku kompresívnych pančúch je ich schopnosť vytvárať odstupňovaný tlak na nohy. Predstavte si to ako jemné, ale cielené objatie vašich nôh, ktoré je najsilnejšie v oblasti členkov a postupne slabnúce smerom k stehnu. Tento "inteligentný stisk" má za následok niekoľko dôležitých efektov:'
                }
              </p>
              <ol className="break-words my-0">
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
                      {"Prevencia trombózy a embólie"}
                    </strong>
                    {
                      ": Rýchlejší tok krvi a lepšia funkcia žíl výrazne znižujú riziko vzniku krvných zrazenín, ktoré môžu viesť k nebezpečnej trombóze alebo embólii."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak by sme to mali prirovnať k niečomu každodennému, predstavte si, že vaše žily sú ako záhradná hadica. Keď ju stlačíte, voda (v tomto prípade krv) prúdi rýchlejšie. A presne to robia kompresívne pančuchy s vašimi žilami."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Typy kompresívnych pančúch: Ktoré sú pre vás tie pravé?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresívne pančuchy nie sú len jedného druhu. Existuje niekoľko typov, ktoré sa líšia nielen dĺžkou, ale aj silou kompresie. Pozrime sa na ne bližšie:"
                }
              </p>
              <h3 className={listItemClassName2}>Podľa dĺžky:</h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Lýtkové pančuchy (podkolienky)"}
                    </strong>
                    {
                      ": Tieto siahajú od členkov po kolená. Sú ideálne pre ľudí, ktorí majú problémy s žilami predovšetkým v oblasti lýtok."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Stehenné pančuchy"}
                    </strong>
                    {
                      ": Siahajú až po stehno a môžu byť ukončené čipkou alebo silikónovým pásikom, ktorý bráni ich zosúvaniu. Sú vhodné pre tých, ktorí majú problémy s žilami aj vo vyšších častiach nôh."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Pančuchové nohavice"}
                    </strong>
                    {
                      ": Pokrývajú celé nohy až po pás. Sú ideálne pre ľudí s rozsiahlymi problémami s žilami alebo pre tehotné ženy."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>Podľa sily kompresie:</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresívne pančuchy sa delia do niekoľkých tried podľa sily tlaku, ktorý vyvíjajú:"
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
                      {"Tretia a štvrtá kompresívna trieda"}
                    </strong>
                    {
                      ": Pre závažné prípady žilovej nedostatočnosti a lymfedému."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skratka DEN, ktorú ste možno už niekde videli, znamená silu vlákna a transparentnosť produktu. Čím vyššie číslo, tým silnejšia kompresia."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ako si vybrať správne kompresívne pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Výber správnych kompresívnych pančúch nie je len o tom, že si kúpite prvé, ktoré uvidíte v lekárni. Je to proces, ktorý by mal ideálne zahŕňať konzultáciu s odborníkom. Tu je niekoľko krokov, ktoré by ste mali zvážiť:"
                }
              </p>
              <ol className="break-words my-0">
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
                      {"Skúška"}
                    </strong>
                    {
                      ": Ak je to možné, vyskúšajte si pančuchy priamo v predajni zdravotníckych pomôcok. Personál vám môže poradiť s obliekaním a ukázať správnu techniku."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako správne používať kompresívne pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Správne používanie kompresívnych pančúch je kľúčové pre ich účinnosť. Tu je niekoľko tipov:"
                }
              </p>
              <ol className="break-words my-0">
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
                      {"Správna starostlivosť"}
                    </strong>
                    {
                      ": Perte pančuchy ručne v jemnom mydle a sušte ich prirodzene, nie na radiátore alebo v sušičke."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Časté otázky o kompresívnych pančuchách"}
              </h2>
              <h3 className={listItemClassName2}>
                {"Sú kompresívne pančuchy len pre ženy?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nie, kompresívne pančuchy sú určené pre oba pohlavia. Pre mužov sú k dispozícii špeciálne dizajny, ktoré vyzerajú ako bežné ponožky alebo podkolienky."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Môžem nosiť kompresívne pančuchy v lete?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, existujú špeciálne letné verzie kompresívnych pančúch vyrobené z ľahších a priedušnejších materiálov."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Ako dlho trvá, kým uvidím výsledky?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Mnohí ľudia pociťujú úľavu takmer okamžite, najmä čo sa týka únavy a ťažkosti v nohách. Viditeľné zlepšenie kŕčových žíl môže trvať niekoľko týždňov až mesiacov pravidelného nosenia."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Môžem nosiť kompresívne pančuchy, aj keď nemám kŕčové žily?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, kompresívne pančuchy sú vynikajúce aj na prevenciu. Sú obzvlášť užitočné pre ľudí, ktorí trávia veľa času v stoji alebo sede."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Kompresívne pančuchy: Viac než len liečba kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci sú kompresívne pančuchy najznámejšie svojou schopnosťou pomáhať pri kŕčových žilách, ich použitie je oveľa širšie. Môžu byť nápomocné pri:"
                }
              </p>
              <ul className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zlepšení výkonu športovcov"}
                    </strong>
                    {
                      ": Niektorí športovci nosia kompresívne pančuchy na zlepšenie cirkulácie a zníženie únavy svalov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Záver: Objatie pre vaše žily"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresívne pančuchy sú viac než len kus odevu - sú to sofistikované zdravotnícke pomôcky, ktoré môžu výrazne zlepšiť zdravie vašich nôh a kvalitu vášho života. Či už bojujete s kŕčovými žilami, máte ťažké nohy po celom dni v práci, alebo jednoducho chcete predchádzať problémom s žilami, kompresívne pančuchy môžu byť vaším spojencom."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pamätajte však, že výber a používanie kompresívnych pančúch by malo byť vždy konzultované s odborníkom. Každý človek je jedinečný a to, čo funguje pre jedného, nemusí byť ideálne pre druhého. S správnym výberom a používaním však môžu kompresívne pančuchy priniesť vašim nohám úľavu, ktorú si zaslúžia."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {"Tak čo poviete, nie je čas dať vašim žilám to správne objatie?" +
                  " "}
                <u className="break-words">
                  <a
                    href="https://varixyporadenstvo.com/liecba#pancuchy"
                    target="_self"
                    className="[color:inherit] break-words"
                  >
                    {"Link k pančuchám."}
                  </a>
                </u>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
