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

type ListItem3Props = {
  text: string;
  separator?: string;
};

function ListItem3({ text, separator }: ListItem3Props) {
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

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Bolesti nôh od kolien dolu môžu mať mnoho príčin a môžu výrazne ovplyvniť kvalitu života. Od kŕčových žíl cez svalové preťaženie až po neurologické problémy - každá príčina si vyžaduje špecifický prístup k liečbe.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Dobrou správou je, že existuje mnoho spôsobov, ako zmierniť tieto bolesti a zlepšiť zdravie vašich nôh. Od jednoduchých domácich opatrení ako cvičenie a elevácia nôh, až po pokročilejšie lekárske zákroky - existuje riešenie pre každého.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Pamätajte, že vaše nohy sú dôležitou súčasťou vášho tela a zaslúžia si náležitú starostlivosť. Ak máte pretrvávajúce problémy s bolesťou nôh, nebojte sa vyhľadať odbornú pomoc. Lekár vám môže pomôcť nájsť presné príčiny vašich ťažkostí a navrhnúť najvhodnejší liečebný plán.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Kosti",
    text_1:
      ": Hlavné kosti dolnej končatiny sú stehnová kosť, píšťala a ihlica.",
  },
  {
    text: "Svaly",
    text_1:
      ": Hlavné svalové skupiny zahŕňajú štvorhlavý sval stehnový, hamstringy a lýtkové svaly.",
  },
  {
    text: "Kĺby",
    text_1: ": Kľúčové kĺby sú bedrový, kolenný a členkový kĺb.",
  },
  {
    text: "Žily a cievy",
    text_1:
      ": Komplexná sieť žíl a ciev zabezpečuje prívod krvi do tkanív a jej odvod späť k srdcu.",
  },
  {
    text: "Nervy",
    text_1: ": Periférne nervy prenášajú signály medzi mozgom a končatinami.",
  },
];

export const items3: ListItem3Props[] = [
  { text: "Viditeľné, vystúpené žily na nohách" },
  { text: "Bolesť a ťažkosť v nohách" },
  { text: "Opuchy nôh, najmä v oblasti členkov" },
  { text: "Svrbenie alebo pálenie v oblasti postihnutých žíl" },
  { text: "Nočné kŕče v lýtkach" },
];

export const items4: ListItem2Props[] = [
  {
    text: "Natiahnutie svalov",
    text_1: ": Môže sa vyskytnúť pri náhlom alebo nadmernom zaťažení svalov.",
  },
  {
    text: "Tendinitída",
    text_1:
      ": Zápal šliach, často spôsobený opakovaným pohybom alebo preťažením.",
  },
  {
    text: "Plantárna fasciitída",
    text_1: ": Zápal väzivového tkaniva na spodnej strane chodidla.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Chôdza",
    text_1: ": Jednoduchá, ale účinná forma cvičenia pre zlepšenie cirkulácie.",
  },
  {
    text: "Plávanie",
    text_1:
      ": Výborné cvičenie s nízkym dopadom, ktoré posilňuje svaly nôh bez nadmerného zaťaženia kĺbov.",
  },
  {
    text: "Cviky na kŕčové žily",
    text_1: ": Špecifické cviky zamerané na zlepšenie cirkulácie v nohách.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Potraviny bohaté na flavonoidy",
    text_1:
      ": Bobuľové ovocie, citrusy a tmavá čokoláda môžu pomôcť posilniť steny žíl.",
  },
  {
    text: "Potraviny s vysokým obsahom vlákniny",
    text_1:
      ": Pomáhajú udržiavať zdravú hmotnosť a podporujú dobrú cirkuláciu.",
  },
  {
    text: "Omega-3 mastné kyseliny",
    text_1: ": Nachádzajú sa v rybách a orechoch, majú protizápalové účinky.",
  },
];

export const items7: ListItem2Props[] = [
  {
    text: "Sklerotizácia",
    text_1:
      ": Injekčné podanie špeciálnej látky, ktorá spôsobí uzavretie postihnutej žily.",
  },
  {
    text: "Laserová liečba",
    text_1: ": Využíva laserovú energiu na uzavretie poškodených žíl.",
  },
  {
    text: "Rádiofrekvenčná ablácia",
    text_1: ": Tepelná energia sa používa na uzavretie postihnutej žily.",
  },
];

export const items8: ListItem2Props[] = [
  {
    text: "Nesteroidné protizápalové lieky (NSAID)",
    text_1: ": Môžu pomôcť zmierniť bolesť a zápal.",
  },
  {
    text: "Venofarmaká",
    text_1:
      ": Lieky ako diosmín alebo hesperidín môžu pomôcť pri liečbe žilovej nedostatočnosti.",
  },
  {
    text: "Antibiotiká",
    text_1: ": Môžu byť potrebné pri liečbe zápalu žíl (flebitídy).",
  },
];

export const items9: ListItem2Props[] = [
  {
    text: "Silná alebo pretrvávajúca bolesť",
    text_1:
      ": Ak bolesť pretrváva dlhšie ako niekoľko dní alebo je taká silná, že vás obmedzuje v bežných aktivitách.",
  },
  {
    text: "Náhly opuch",
    text_1:
      ": Najmä ak je opuch jednostranný a spojený s bolesťou a začervenaním - môže to byť príznak hlbokej žilovej trombózy.",
  },
  {
    text: "Zmeny farby kože",
    text_1: ": Ak sa koža na nohách sfarbí do modra alebo je výrazne bledá.",
  },
  {
    text: "Horúčka",
    text_1:
      ": Ak je bolesť nôh sprevádzaná horúčkou, môže to naznačovať infekciu.",
  },
  {
    text: "Strata citlivosti",
    text_1: ": Ak pociťujete stratu citlivosti alebo brnenie v nohách.",
  },
  {
    text: "Problémy s chôdzou",
    text_1: ": Ak máte problémy s chôdzou alebo udržaním rovnováhy.",
  },
  {
    text: "Vredy alebo rany, ktoré sa nehoja",
    text_1: ": Môže to byť príznak vážnejších cievnych problémov.",
  },
];

export const items10: ListItem2Props[] = [
  {
    text: "Udržiavajte zdravú hmotnosť",
    text_1: ": Nadváha zvyšuje tlak na nohy a môže viesť k bolestiam.",
  },
  {
    text: "Pravidelne cvičte",
    text_1:
      ": Zamerajte sa na cvičenia, ktoré posilňujú svaly nôh a zlepšujú cirkuláciu.",
  },
  {
    text: "Noste vhodnú obuv",
    text_1: ": Vyberajte si pohodlnú obuv, ktorá poskytuje dostatočnú oporu.",
  },
  {
    text: "Vyhýbajte sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne meniť polohu a robiť si krátke prestávky na prechádzku.",
  },
  {
    text: "Udržujte správnu hydratáciu",
    text_1:
      ": Pitie dostatočného množstva vody pomáha udržiavať zdravý krvný obeh.",
  },
  {
    text: "Prestaňte fajčiť",
    text_1: ": Fajčenie môže poškodiť cievy a zhoršiť cirkuláciu.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zHizG0"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Máte bolesti nôh od kolien dolu?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "V tomto článku sa zameriame na problematiku bolesti nôh od kolien dolu a poskytneme vám informácie a rady, ktoré vám môžu pomôcť zmierniť a predchádzať tomuto nepohodliu. Naším cieľom je poskytnúť vám kompletné informácie a odborné znalosti, ktoré vám umožnia nájsť účinné riešenia pre vaše zdravie."
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
        id="z1IkBo"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(10761px,auto)_1fr] max-lg:px-4 lg:min-h-[422.8125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_18.7092%_28.8399%_18.7908%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(6034px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="z7jXLJ"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person wearing orange and white cat tattoo"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person wearing orange and white cat tattoo"
                  src="/external-assets/26316d3a34f50af0.jpg"
                  height="344"
                  width="353"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person wearing orange and white cat tattoo"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person wearing orange and white cat tattoo"
                  src="/external-assets/f0842c90edcdd8fe.jpg"
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
              id="z4SuXH"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Bolesti nôh od kolien dolu sú častým problémom, ktorý môže výrazne ovplyvniť kvalitu života. V tomto komplexnom článku sa zameriame na príčiny, príznaky a možnosti liečby tohto nepríjemného stavu. Poskytneme vám odborné informácie a praktické rady, ktoré vám pomôžu lepšie porozumieť vašim ťažkostiam a nájsť účinné riešenia."
                }
              </p>
              <h2 className={listItemClassName}>Anatómia dolných končatín</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme do problematiky bolestí nôh, je dôležité pochopiť základnú anatómiu dolných končatín. Dolné končatiny sa skladajú z niekoľkých kľúčových komponentov:"
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
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Porozumenie tejto základnej anatómii nám pomôže lepšie pochopiť rôzne príčiny bolestí nôh."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo sa vyskytuje bolesť nôh od kolien dolu?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Bolesť nôh od kolien dolu môže mať mnoho príčin. Pozrime sa bližšie na najčastejšie z nich:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Kŕčové žily (Varixy dolných končatín)"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Príznaky kŕčových žíl zahŕňajú:"}
                </strong>
              </p>
              <ul className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily môžu spôsobovať bolesť nôh od kolien dolu v dôsledku zhoršeného krvného obehu a zvýšeného tlaku v žilách."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Svalová únava a preťaženie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dlhodobé státie, chôdza alebo intenzívne cvičenie môže viesť k svalovej únave a preťaženiu. To môže spôsobiť bolesti svalov dolných končatín, najmä v oblasti lýtok a chodidiel."
                }
              </p>
              <h3 className={listItemClassName2}>3. Zranenia a zápaly</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Rôzne zranenia a zápalové stavy môžu viesť k bolestiam nôh:"}
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
                    <strong className="[color:inherit] break-words">
                      {"Zápal žíl (Flebitída)"}
                    </strong>
                    {": Zápal žíl, ktorý môže byť povrchový alebo hlboký."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>4. Neurologické problémy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Niektoré neurologické stavy môžu spôsobovať bolesť nôh od kolien dolu:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Ischias"}
                    </strong>
                    {
                      ": Bolesť spôsobená stlačením alebo podráždením sedacieho nervu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Periférna neuropatia"}
                    </strong>
                    {
                      ": Poškodenie periférnych nervov, často spojené s cukrovkou."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Syndróm nepokojných nôh"}
                    </strong>
                    {
                      ": Neurologická porucha charakterizovaná nutkavou potrebou hýbať nohami."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>5. Cievne problémy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Okrem kŕčových žíl môžu bolesť nôh spôsobovať aj iné cievne problémy:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hlboká žilová trombóza"}
                    </strong>
                    {": Krvná zrazenina v hlbokých žilách nôh."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Periférne arteriálne ochorenie"}
                    </strong>
                    {": Zúženie tepien, ktoré obmedzuje prietok krvi do nôh."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"6. Kĺbové ochorenia a obezita"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nadváha a obezita môžu významne prispievať k bolestiam nôh. Nadmerná hmotnosť zvyšuje tlak na kĺby, svaly a žily v nohách, čo môže viesť k bolesti a ďalším komplikáciám."
                }
              </p>
              <h3 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"7. Artritída a iné kĺbové ochorenia"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Artritída je zápalové ochorenie kĺbov, ktoré môže spôsobovať bolesť nôh od kolien dolu. Existujú rôzne typy artritídy, pričom najbežnejšie sú osteoartritída a reumatoidná artritída."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Osteoartritída:" + " "}
                    </strong>
                    {
                      "Tento typ artritídy je spôsobený opotrebovaním chrupavky v kĺboch, čo vedie k bolesti, stuhnutosti a obmedzenej pohyblivosti. Často sa vyskytuje u starších ľudí a u osôb s nadváhou."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Reumatoidná artritída:" + " "}
                    </strong>
                    {
                      "Ide o autoimunitné ochorenie, pri ktorom imunitný systém napáda kĺby, čo vedie k zápalu, bolesti a opuchu. Tento typ artritídy môže postihovať aj mladších ľudí."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"8. Kompresné syndrómy"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tieto syndrómy vznikajú, keď dochádza k stlačeniu nervov, tepien alebo žíl v dolných končatinách napríklad vytvorením cysty v zákolennej jame (veľmi častá je Bakerova cysta). Medzi najčastejšie patrí kompartmentový syndróm, pri ktorom dochádza k zvýšenému tlaku v určitom oddelení svalov, čo vedie k bolesti a poškodeniu tkaniva."
                }
              </p>
              <h3 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"9. Kostné výrastky (osteofyty)"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Osteofyty, známe tiež ako kostné výrastky, sú malé výrastky, ktoré sa môžu tvoriť na okrajoch kostí, najčastejšie v kĺboch postihnutých artritídou. Tieto výrastky môžu dráždiť okolité tkanivá a nervy, čo vedie k bolesti, ktorá sa môže šíriť od kolien dolu do nôh."
                }
              </p>
              <h3 className={listItemClassName2}>
                <strong className="[color:inherit] break-words">
                  {"10. Diabetická neuropatia"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diabetická neuropatia je bežnou komplikáciou cukrovky, pri ktorej dochádza k poškodeniu nervov v dôsledku vysokých hladín cukru v krvi. Tento stav spôsobuje pálivú bolesť, brnenie a necitlivosť v dolných končatinách, často od kolien dolu. Bolesť môže byť intenzívna a často zhoršuje kvalitu života pacientov."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <h2 className={listItemClassName}>Ako zmierniť bolesti nôh?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje mnoho spôsobov, ako zmierniť bolesti nôh od kolien dolu. Niektoré z nich môžete vyskúšať sami doma, zatiaľ čo iné si môžu vyžadovať odbornú pomoc."
                }
              </p>
              <h3 className={listItemClassName2}>1. Cvičenie a pohyb</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pravidelné cvičenie je kľúčové pre zdravie nôh. Pomáha posilňovať svaly, zlepšuje cirkuláciu a môže zmierniť bolesti. Tu sú niektoré odporúčané cviky:"
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
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Strečing"}
                    </strong>
                    {
                      ": Pravidelné naťahovanie svalov môže pomôcť predchádzať svalovému napätiu a bolestiam."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>2. Elevácia nôh</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zdvíhanie nôh nad úroveň srdca môže významne pomôcť pri zlepšení cirkulácie a znížení opuchov. Skúste si niekoľkokrát denne na 15-20 minút zdvihnúť nohy."
                }
              </p>
              <h3 className={listItemClassName2}>3. Kompresné pančuchy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú špeciálne navrhnuté pančuchy, ktoré pomáhajú zlepšovať cirkuláciu krvi v nohách. Sú obzvlášť užitočné pri liečbe a prevencii kŕčových žíl."
                }
              </p>
              <h3 className={listItemClassName2}>4. Masáže</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pravidelné masáže nôh môžu pomôcť uvoľniť napätie v svaloch, zlepšiť cirkuláciu a zmierniť bolesť. Môžete si masírovať nohy sami alebo vyhľadať profesionálneho maséra."
                }
              </p>
              <h3 className={listItemClassName2}>5. Zdravá strava</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Strava hrá dôležitú úlohu v zdraví našich nôh. Zamerajte sa na:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Hydratácia"}
                    </strong>
                    {
                      ": Dostatočný príjem vody je kľúčový pre zdravie žíl a celkové zdravie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>6. Obklady</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Studené a teplé obklady môžu pomôcť zmierniť bolesť a opuchy:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Studené obklady"}
                    </strong>
                    {
                      ": Pomáhajú zmierniť zápal a opuch. Aplikujte na 15-20 minút niekoľkokrát denne."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Teplé obklady"}
                    </strong>
                    {
                      ": Môžu pomôcť uvoľniť napäté svaly. Používajte ich striedavo so studenými obkladmi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>7. Liečba kŕčových žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sú príčinou vašich bolestí kŕčové žily, existuje niekoľko možností liečby:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Chirurgické odstránenie"}
                    </strong>
                    {
                      ": V závažných prípadoch môže byť potrebné chirurgické odstránenie postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>8. Farmakologická liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V niektorých prípadoch môže byť potrebná farmakologická liečba na zmiernenie bolesti alebo liečbu základného ochorenia:"
                }
              </p>
              <ul className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vždy konzultujte s lekárom pred začatím akejkoľvek farmakologickej liečby."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Kedy vyhľadať lekársku pomoc?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď mnoho prípadov bolesti nôh od kolien dolu môže byť liečených doma, existujú situácie, kedy by ste mali vyhľadať lekársku pomoc:"
                }
              </p>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V týchto prípadoch je dôležité vyhľadať odbornú pomoc. Lekár môže vykonať potrebné vyšetrenia a navrhnúť vhodnú liečbu."
                }
              </p>
              <h2 className={listItemClassName}>Prevencia bolestí nôh</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je vždy lepšia ako liečba. Tu je niekoľko tipov, ako predchádzať bolestiam nôh od kolien dolu:"
                }
              </p>
              <ol className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Kontrolujte si krvný tlak a hladinu cholesterolu"}
                    </strong>
                    {
                      ": Vysoký krvný tlak a vysoká hladina cholesterolu môžu prispievať k cievnym problémom."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Záver</h2>
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
