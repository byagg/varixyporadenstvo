const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold text-3xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight";
const listItemClassName3 =
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
  separator?: string;
};

function ListItem2({ text, separator }: ListItem2Props) {
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
  text_2: string;
  text_3: string;
  separator?: string;
};

function ListItem3({
  text,
  text_1,
  text_2,
  text_3,
  separator,
}: ListItem3Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          <strong className="[color:inherit] break-words">{text}</strong>
          {text_1}
          <strong className="[color:inherit] break-words">{text_2}</strong>
          {text_3}
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  {
    text: "Teraz sa dostávame k jadru veci. Ako tieto zázračné pančuchy vlastne fungujú? Je to jednoduché - tlak!",
  },
  {
    text: "Kompresné pančuchy vyvíjajú kontrolovaný tlak na vaše nohy. Tento tlak je najsilnejší v oblasti členkov a postupne sa znižuje smerom k stehnám. Je to ako keby ste mali na nohách jemné masážne ruky, ktoré neustále pracujú.",
  },
  { text: "Tento odstupňovaný tlak pomáha:" },
];

export const items2: ListItem2Props[] = [
  {
    text: 'Zlepšiť cirkuláciu krvi - vaša krv dostane "kopanec" na cestu späť k srdcu',
  },
  { text: "Znížiť opuchy - prebytočná tekutina nemá šancu sa hromadiť" },
  {
    text: "Zmierniť únavu a bolesť nôh - vaše nohy sa budú cítiť ľahšie a sviežejšie",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "Máte sedavé zamestnanie",
    text_1:
      " - Ak trávite väčšinu dňa sedením, vaše nohy potrebujú extra podporu. Kompresné pančuchy môžu pomôcť predchádzať ",
    text_2: "bolestiam nôh od kolien dolu",
    text_3: ".",
  },
  {
    text: "Ste tehotná",
    text_1: " - ",
    text_2: "Tehotenstvo a kŕčové žily",
    text_3:
      " často idú ruka v ruke. Kompresné pančuchy môžu pomôcť zmierniť nepríjemné príznaky.",
  },
  {
    text: "Cestujete lietadlom",
    text_1: " - Dlhé lety môžu byť rizikové pre vznik ",
    text_2: "žilovej trombózy",
    text_3: ". Kompresné pančuchy sú ako poistka pre vaše nohy počas letu.",
  },
];

export const items4: ListItem2Props[] = [
  { text: "8-15 mmHg: Ľahká kompresia - pre prevenciu a úľavu od únavy nôh" },
  { text: "15-20 mmHg: Stredná kompresia - pre mierne kŕčové žily a opuchy" },
  { text: "20-30 mmHg: Silná kompresia - pre výrazné kŕčové žily a opuchy" },
];

export const items5: ListItem2Props[] = [
  { text: "Nylon - odolný a priedušný" },
  { text: "Bavlna - mäkká a príjemná na dotyk" },
  { text: "Mikrovlákno - luxusný pocit na pokožke" },
];

export const items6: ListItem2Props[] = [
  { text: "Natiahnite pančuchu na ruku ako rukavicu" },
  { text: "Prehnite hornú časť pančuchy cez pätu" },
  { text: "Nasuňte pančuchu na nohu, začnite od prstov" },
  { text: "Postupne vyťahujte pančuchu hore, vyhlaďte všetky záhyby" },
];

export const items7: ListItem2Props[] = [
  { text: "Perte ich každý deň (áno, každý deň!)" },
  { text: "Použite jemný prací prostriedok a vlažnú vodu" },
  { text: "Nesušte ich na priamom slnku alebo na radiátore" },
  { text: "Nepoužívajte aviváž - môže poškodiť elastické vlákna" },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zITED3"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako fungujú kompresné pančuchy?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte svet kompresných pančúch a ich účinok na zdravie vašich nôh. Tento článok vysvetľuje, ako fungujú kompresné pančuchy, prečo ich nosiť a ako vybrať tie správne. Od zmiernenia príznakov kŕčových žíl až po prevenciu opuchov - zistite, ako môžu kompresné pančuchy zlepšiť cirkuláciu a komfort vašich nôh."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">{"15. 7. 2025" + " "}</span>
                  <span className="[color:inherit] before:content-['_·_'] before:text-ploy-text-primary">
                    {" " + "5 min čítania"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zwIlVh"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(6675px,auto)_1fr] max-lg:px-4 lg:min-h-[272.75rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3825px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z14KLj"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a broken egg sitting on top of a blue object"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a broken egg sitting on top of a blue object"
                  src="/external-assets/4be99fcffdf4dcd4.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a broken egg sitting on top of a blue object"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a broken egg sitting on top of a blue object"
                  src="/external-assets/1f529ca5d1bf1fb6.jpg"
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
              id="zkVpCn"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitajte vo svete kompresných pančúch! Ak ste niekedy mali pocit, že vaše nohy potrebujú objatie, ste na správnom mieste. V tomto článku sa pozrieme na to, čo sú kompresné pančuchy, prečo by ste ich mali nosiť, ako vybrať správne a ako ich používať. Pripravte sa na cestu za zdravými a šťastnými nohami!"
                }
              </p>
              <h2 className={listItemClassName}>Čo sú kompresné pančuchy?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že vaše nohy majú na sebe super-hrdinský oblek. To sú kompresné pančuchy! Tieto špeciálne navrhnuté pančuchy poskytujú tlakovú kompresiu na vaše nohy a dolné končatiny. Sú ako osobný tréner pre vaše žily, ktorý ich motivuje k lepšiemu výkonu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Kompresné pančuchy" + " "}
                </strong>
                {"nie sú len módny doplnok (aj keď môžu byť štýlové). Sú to medicínske pomôcky, ktoré pomáhajú zlepšovať prietok krvi a lymfy. Môžu byť vaším tajným spojencom v boji proti" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "žilovej nedostatočnosti"}
                </strong>
                {", opuchom nôh a dokonca aj proti hrozivej" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "hlbokej žilovej trombóze"}
                </strong>
                {"."}
              </p>
              <h3 className={listItemClassName2}>Typy kompresných pančúch</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {'Kompresné pančuchy prichádzajú v rôznych "príchutiach":'}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Lýtkové pančuchy - pre tých, ktorí chcú podporiť len lýtka"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Stehenné pančuchy - pre extra podporu až po stehná"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Pančuchové nohavice - pre tých, ktorí chcú komplexnú starostlivosť od prstov na nohách až po pás"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ako fungujú kompresné pančuchy?"}
              </h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ol className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Predstavte si to ako fontánu. Kompresné pančuchy pomáhajú "pumpovať" krv nahor, proti gravitácii, podobne ako fontána pumpuje vodu.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo nosiť kompresné pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Možno si myslíte: "Prečo by som mal nosiť tieto špeciálne pančuchy?" No, tu je niekoľko dôvodov:'
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Máte kŕčové žily" + " "}
                    </strong>
                    {"- Kompresné pančuchy sú ako osobný strážca pre vaše" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "žily na nohách"}
                    </strong>
                    {". Pomáhajú zmierniť príznaky" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "kŕčových žíl"}
                    </strong>{" "}
                    {"a môžu dokonca pomôcť predchádzať ich vzniku."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Trpíte opuchmi nôh" + " "}
                    </strong>
                    {
                      "- Ak vaše nohy na konci dňa vyzerajú ako balóny, kompresné pančuchy môžu byť vaším novým najlepším priateľom."
                    }
                  </p>
                </li>
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
                      {"Ste športovec" + " "}
                    </strong>
                    {
                      "- Kompresné pančuchy môžu zlepšiť výkon a urýchliť regeneráciu po tréningu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako vybrať správne kompresné pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vybrať správne kompresné pančuchy môže byť niekedy náročnejšie ako vybrať správny pár topánok. Tu je niekoľko tipov:"
                }
              </p>
              <h3 className={listItemClassName3}>Veľkosť a tlak</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Veľkosť je kľúčová! Príliš malé pančuchy vás budú škrtiť, príliš veľké nebudú fungovať. Potrebujete niečo "akurát". Zmerajte si obvod lýtka, členka a dĺžku nohy.'
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tlak sa meria v jednotkách mmHg (milimetre ortuťového stĺpca). Čím vyššie číslo, tým silnejší tlak:"
                }
              </p>
              <ul className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "30-40 mmHg: Extra silná kompresia - pre závažné žilové problémy"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName3}>Materiál a dizajn</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy nie sú len o funkcii, ale aj o štýle! Môžete si vybrať z rôznych materiálov:"
                }
              </p>
              <ul className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "A farby? Od klasickej čiernej cez telovú až po odvážne vzory. Vaše nohy môžu vyzerať štýlovo, aj keď pracujú na plný výkon!"
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ako správne používať kompresné pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Správne používanie kompresných pančúch je kľúčom k ich účinnosti. Tu je niekoľko tipov:"
                }
              </p>
              <h3 className={listItemClassName2}>Nosenie a odoberanie</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Obliekanie kompresných pančúch môže byť niekedy ako malé ranné cvičenie. Tu je návod:"
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
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pri vyzliekaní postupujte opačne. Buďte jemní, aby ste nepoškodili pančuchu alebo svoju pokožku."
                }
              </p>
              <h3 className={listItemClassName2}>Čistenie a údržba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Vaše kompresné pančuchy si zaslúžia starostlivosť:"}
              </p>
              <ul className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "S dobrou starostlivosťou vám kompresné pančuchy vydržia dlhšie a budú efektívnejšie."
                }
              </p>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <h3 className={listItemClassName3}>
                {"Môžem nosiť kompresné pančuchy celý deň?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, môžete! Vlastne, pre najlepšie výsledky by ste ich mali nosiť počas celého dňa. Ale nezabudnite ich na noc vyzliecť - vaše nohy si zaslúžia oddych."
                }
              </p>
              <h3 className={listItemClassName3}>
                {"Sú kompresné pančuchy vhodné pre každého?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Vo väčšine prípadov áno, ale vždy je dobré poradiť sa s lekárom, najmä ak máte nejaké zdravotné problémy." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Angiológ"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "cievny chirurg"}
                </strong>{" "}
                {"vám môže najlepšie poradiť."}
              </p>
              <h3 className={listItemClassName3}>
                {
                  "Existuje rozdiel medzi kompresnými pančuchami a sťahovacími pančuchami?"
                }
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Áno, je to ako rozdiel medzi trénerom a módnym návrhárom." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Sťahovacie pančuchy"}
                </strong>{" "}
                {
                  "sú primárne kozmetické, zatiaľ čo kompresné pančuchy majú medicínsky účel."
                }
              </p>
              <h3 className={listItemClassName3}>
                {"Kde môžem kúpiť kvalitné kompresné pančuchy?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kvalitné kompresné pančuchy nájdete v lekárňach, zdravotníckych potrebách alebo u špecializovaných predajcov. Napríklad" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kompresné pančuchy Thuasne"}
                </strong>{" "}
                {"sú populárnou voľbou."}
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {"Kompresné pančuchy sú viac než len kus oblečenia - sú to vaši spojenci v boji za zdravé a krásne nohy. Či už máte" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kŕčové žily"}
                </strong>
                {
                  ", trpíte opuchmi nôh, alebo jednoducho chcete dopriať svojim nohám extra starostlivosť, kompresné pančuchy môžu byť riešením. Pamätajte, že výber správnych kompresných pančúch a ich správne používanie je kľúčom k úspech"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
