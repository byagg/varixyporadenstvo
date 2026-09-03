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
  separator?: string;
};

function ListItem3({ text, text_1, separator }: ListItem3Props) {
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
    text: "Kŕčové žily a s nimi spojené svrbenie môžu byť nepríjemné, ale nie sú neprekonateľným problémom. S správnou starostlivosťou, trpezlivosťou a možno trochou humoru môžete tento stav zvládnuť a udržať si zdravé, šťastné nohy.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že každý človek je jedinečný a to, čo funguje pre jedného, nemusí fungovať pre druhého. Preto je dôležité konzultovať svoj stav s lekárom a vytvoriť personalizovaný plán starostlivosti.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: 'Tak, milí čitatelia, dúfam, že tento článok vám pomohol lepšie pochopiť svet kŕčových žíl a svrbenia. Nezabudnite, že vaše nohy vás nosia celý život - zaslúžia si vašu pozornosť a starostlivosť. A kto vie? Možno sa stanete expertom na "žilológiu" a budete rozdávať rady priateľom a rodine!',
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: 'Nech vás vaše nohy nesú ľahko a bez svrbenia! A pamätajte, ak vaše nohy začnú "rozprávať", počúvajte ich - môžu vám povedať dôležité veci o vašom zdraví.',
  },
];

export const items2: ListItem2Props[] = [
  { text: "Viditeľné rozšírené, pokrútené žily na nohách" },
  { text: "Bolesť nôh, najmä po dlhom státí alebo sedení" },
  { text: "Pocit ťažkých nôh" },
  { text: "Opuchy nôh, najmä v oblasti členkov" },
  { text: "Svrbenie alebo pálenie kože v oblasti postihnutých žíl" },
  {
    text: "Zmeny farby kože - môže sa objaviť červená alebo hnedá pigmentácia",
  },
  {
    text: "V pokročilých štádiách sa môžu objaviť vredy na koži, najmä v oblasti členkov",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "Pohyb je život",
    text_1:
      ": Pravidelné cvičenie, najmä chôdza, plávanie alebo cyklistika, pomáha zlepšiť cirkuláciu krvi v nohách. Je to ako keď rozhýbete stojatú vodu - všetko začne lepšie prúdiť.",
  },
  {
    text: "Zdvihnite nohy",
    text_1:
      ": Častým zdvíhaním nôh nad úroveň srdca pomôžete žilám lepšie odvádzať krv. Predstavte si to ako gravitačný výťah pre vašu krv.",
  },
  {
    text: "Zbohom, tesné oblečenie",
    text_1:
      ": Vyhýbajte sa príliš tesnému oblečeniu, najmä na nohách. Vaše žily potrebujú priestor na dýchanie, nie korzet!",
  },
];

export const items4: ListItem3Props[] = [
  {
    text: "Sklerotizácia",
    text_1:
      ": Pri tomto zákroku sa do postihnutej žily vstrekne roztok, ktorý spôsobí jej zatvrdnutie a následné vstrebanie. Je to ako keď upcháte dieru v potruví - problematická časť sa jednoducho vylúči z obehu.",
  },
  {
    text: "Laserová terapia",
    text_1:
      ': Používa sa silné svetlo na uzatvorenie menších kŕčových žíl. Je to ako keď použijete lúč svetla na vypálenie nechceného tetovanie - len v tomto prípade je tým "tetovaním" problematická žila.',
  },
  {
    text: "Rádiofrekvenčná ablácia",
    text_1:
      ': Pri tejto metóde sa používa rádiofrekvenčná energia na zahriatie a uzatvorenie väčších kŕčových žíl. Je to ako keď používate mikrovlnnú rúru na zohrievanie jedla - len v tomto prípade "zohrievate" problematickú žilu, až kým sa neuzavrie.',
  },
];

export const items5: ListItem3Props[] = [
  {
    text: "Hýbte sa",
    text_1:
      ": Pravidelný pohyb je kľúčový pre zdravý obeh krvi. Nemusíte hneď behať maratóny - stačí pravidelná chôdza alebo plávanie.",
  },
  {
    text: "Kontrolujte svoju hmotnosť",
    text_1:
      ": Nadváha zvyšuje tlak na žily v nohách. Udržiavanie zdravej hmotnosti je dobré nielen pre vaše žily, ale pre celkové zdravie.",
  },
  {
    text: "Vyvarujte sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, snažte sa pravidelne hýbať nohami. Napríklad, pri sedení môžete krúžiť členkami alebo sa občas prejsť. Je to ako keď pretriasate fľašu so sedimentom - pohyb pomáha udržiavať všetko v obehu.",
  },
  {
    text: "Noste vhodné oblečenie",
    text_1:
      ": Vyhnite sa príliš tesnému oblečeniu, najmä v oblasti pása, stehien a lýtok. Vaše žily potrebujú voľnosť, nie väzenie!",
  },
  {
    text: "Zdvíhajte nohy",
    text_1:
      ": Keď odpočívate, snažte sa zdvihnúť nohy nad úroveň srdca. Je to ako gravitačná pomoc pre vaše žily - pomáha im posielať krv späť k srdcu.",
  },
  {
    text: "Studená sprcha",
    text_1:
      ": Občasné osprchovanie nôh studenou vodou môže pomôcť stimulovať cirkuláciu. Je to ako ranný budíček pre vaše žily!",
  },
];

export const items6: ListItem3Props[] = [
  {
    text: "Nepodceňujte kompresné pančuchy",
    text_1:
      ": Áno, možno nie sú najsexi kúskom vášho šatníka, ale môžu výrazne zlepšiť váš komfort. Považujte ich za wellness oblek pre vaše nohy!",
  },
  {
    text: "Plánujte svoje aktivity",
    text_1:
      ": Ak viete, že budete musieť dlho stáť, naplánujte si pravidelné prestávky na sedenie alebo chôdzu. Je to ako strategické plánovanie pre vaše nohy.",
  },
  {
    text: "Investujte do pohodlnej obuvi",
    text_1:
      ": Vysoké podpätky môžu vyzerať úžasne, ale vaše žily ich nemilujú. Striedajte ich s pohodlnou, podpornou obuvou. Vaše nohy vám poďakujú!",
  },
  {
    text: "Buďte aktívni, ale s mierou",
    text_1:
      ": Cvičenie je dobré, ale extrémne náročné aktivity môžu zhoršiť príznaky. Nájdite zlatú strednú cestu - možno plávanie namiesto maratónu?",
  },
  {
    text: "Nezanedbávajte starostlivosť o pokožku",
    text_1:
      ': Hydratovaná, zdravá pokožka je menej náchylná na svrbenie a podráždenie. Doprajte svojim nohám pravidelné "spa dni" s hydratačnými krémami.',
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z1Y8Kg"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Kŕčové žily a svrbenie"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Komplexný pohľad na kŕčové žily a súvisiace svrbenie. Článok poskytuje odborné informácie o príčinách, diagnostike a liečbe, vrátane praktických tipov pre každodenný život s týmto stavom. Nevynecháva ani prevenciu a rady pre udržanie kvality života."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">9 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zf9VWv"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zMLA2E"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a woman in a swimsuit in a pool"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a woman in a swimsuit in a pool"
                  src="/external-assets/ccc548d63fb51ff8.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a woman in a swimsuit in a pool"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a woman in a swimsuit in a pool"
                  src="/external-assets/f3347d103e6e9fd0.jpg"
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
              id="zYmzfc"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Milí čitatelia, vitajte pri článku, ktorý vám pomôže lepšie pochopiť, prečo vaše nohy niekedy "kričia o pomoc". Dnes sa pozrieme na fascinujúci, hoci nie veľmi príjemný svet kŕčových žíl a s nimi spojeného svrbenia. Pripravte sa na cestu plnú medicínskych poznatkov, ale nebojte sa - budeme to brať s ľahkosťou a humorom. Koniec koncov, aj keď sú kŕčové žily vážnou záležitosťou, neznamená to, že sa o nich musíme baviť so zamračenou tvárou!'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú to vlastne tie kŕčové žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Začnime od základov. Kŕčové žily, odborne nazývané aj varixy, sú rozšírené, pokrútené žily, ktoré sú viditeľné pod povrchom kože. Najčastejšie sa vyskytujú na nohách, konkrétne od kolien dolu. Predstavte si to ako rieku, ktorá sa vyleje z koryta a začne sa kľukatiť krajinou. Len v tomto prípade je tou krajinou vaša noha a riekou je krv."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily nie sú len kozmetický problém, hoci mnohí ľudia ich tak vnímajú. Môžu spôsobovať rôzne nepríjemné príznaky, vrátane bolesti, ťažkosti v nohách a áno, aj toho otravného svrbenia, o ktorom budeme hovoriť."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo vlastne vznikajú kŕčové žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Aby sme pochopili, prečo vznikajú kŕčové žily, musíme sa na chvíľu stať "žilovými detektívmi". V zdravých žilách fungujú malé ventily - chlopne, ktoré pomáhajú krvi prúdiť správnym smerom, teda smerom k srdcu. Keď sa tieto chlopne oslabia alebo poškodia, krv začne stagnovať a hromadiť sa v žilách. Je to ako keď sa pokazí výťah v paneláku - ľudia sa hromadia v prízemí a nevedia sa dostať hore.'
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tento proces vedie k zvýšenému tlaku v žilách, ktoré sa následne rozširujú a krútia. A voilà - máme tu kŕčové žily! Tento stav sa odborne nazýva žilová nedostatočnosť a je kľúčovým faktorom pri vzniku kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Svrbenie - nepríjemný spoločník kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Teraz sa dostávame k hlavnej téme nášho článku - svrbeniu. Možno si kladiete otázku: "Prečo, preboha, ma tie kŕčové žily tak svrbia?" No, milí čitatelia, nie je to len vaša predstavivosť. Svrbenie je skutočne častým sprievodným javom kŕčových žíl a má svoje medicínske vysvetlenie.'
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Zápal - hlavný vinník svrbenia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Jedným z hlavných dôvodov svrbenia pri kŕčových žilách je zápal. Keď sa krv hromadí v rozšírených žilách, môže to vyvolať zápalovú reakciu. Je to ako keď máte príliš veľa hostí na malej párty - skôr či neskôr niekto začne robiť problémy."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Táto zápalová reakcia vedie k uvoľňovaniu rôznych látok, ktoré stimulujú nervové zakončenia v koži. A čo robia podráždené nervové zakončenia? Správne - vysielajú signály, ktoré vnímame ako svrbenie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Žilová nedostatočnosť a jej vplyv na kožu"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Žilová nedostatočnosť, ktorá je základom problému kŕčových žíl, má tiež priamy vplyv na stav kože. Keď žily nefungujú správne, dochádza k hromadeniu tekutín v tkanivách, čo môže viesť k opuchom nôh. Tieto opuchy môžu spôsobiť napínanie kože, čo môže vyvolávať pocit svrbenia."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Navyše, pri žilovej nedostatočnosti sa zhoršuje zásobovanie kože kyslíkom a živinami. To môže viesť k suchosti kože, jej stenčeniu a zvýšenej citlivosti. A hádajte čo? Áno, suchá a citlivá koža je oveľa náchylnejšia na svrbenie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Toxíny a odpadové látky - nechcení návštevníci"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Keď krv stagnuje v žilách, hromadia sa v nej rôzne odpadové látky a toxíny. Je to ako keď zabudnete vyniesť smeti - skôr či neskôr začnú zapáchať a robiť problémy. Tieto látky môžu dráždiť okolité tkanivá a kožu, čo opäť vedie k svrbeniu."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Diagnostika kŕčových žíl - ako zistiť, či ich máte?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď už vieme, prečo kŕčové žily svrbia, pozrime sa na to, ako zistiť, či ich vôbec máte. Samozrejme, viditeľné rozšírené žily na nohách sú jasným znakom, ale existujú aj iné príznaky, ktoré by ste nemali prehliadať."
                }
              </p>
              <h3 className={listItemClassName2}>Príznaky kŕčových žíl</h3>
              <ul className="break-words my-0">
                {items2.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak spozorujete niektoré z týchto príznakov, je čas navštíviť lekára. Nemusíte sa báť - lekár nie je strašiak, ale váš spojenec v boji proti kŕčovým žilám!"
                }
              </p>
              <h3 className={listItemClassName2}>Ako prebieha diagnostika?</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnóza kŕčových žíl zvyčajne začína fyzickým vyšetrením. Lekár si prezrie vaše nohy, všimne si viditeľné žily a môže vás požiadať, aby ste sa postavili alebo sadli, aby mohol sledovať, ako sa mení prietok krvi."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Okrem toho môže lekár odporučiť ďalšie vyšetrenia:"}
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Duplexná ultrasonografia"}
                    </strong>
                    {
                      ": Toto vyšetrenie používa zvukové vlny na vytvorenie obrazu žíl vo vašich nohách. Je to ako sonar na lodi, len namiesto rýb hľadá problémy vo vašich žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Venografia"}
                    </strong>
                    {
                      ": Pri tomto vyšetrení sa do žíl vpravuje kontrastná látka a potom sa robia röntgenové snímky. Je to ako keď detektív používa UV svetlo na odhalenie skrytých stôp - kontrastná látka pomáha zviditeľniť problémy v žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"CT alebo MRI"}
                    </strong>
                    {
                      ": V niektorých prípadoch môže lekár odporučiť počítačovú tomografiu (CT) alebo magnetickú rezonanciu (MRI) na získanie detailnejšieho obrazu vašich žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba kŕčových žíl a svrbenia - cesta k úľave"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď už vieme, čo sú kŕčové žily a prečo svrbia, poďme sa pozrieť na to, ako ich môžeme liečiť. Nemusíte sa báť - existuje mnoho možností, od jednoduchých zmien životného štýlu až po pokročilé medicínske postupy."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Zmeny životného štýlu - prvý krok k zlepšeniu"}
              </h3>
              <ol className="break-words my-0">
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
                      {"Udržujte zdravú hmotnosť"}
                    </strong>
                    {
                      ": Nadváha zvyšuje tlak na žily v nohách. Predstavte si, že vaše žily sú ako hadice - čím viac na ne tlačíte, tým ťažšie nimi prúdi voda (v tomto prípade krv)."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Kompresná terapia - objatie pre vaše nohy"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú ako pevné objatie pre vaše nohy. Pomáhajú stláčať žily a podporujú tok krvi smerom k srdcu. Existujú rôzne typy a stupne kompresie, od ľahkých podporných pančúch až po silné medicínske kompresívne pančuchy."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Mnohí pacienti hovoria o pozitívnych skúsenostiach s kompresnými pančuchami. Niektorí dokonca tvrdia, že im to zmenilo život! Samozrejme, na začiatku môže byť trochu nepohodlné navliecť si ich, ale výsledky stoja za to."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Medikamentózna liečba - keď životný štýl nestačí"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak zmeny životného štýlu a kompresná terapia neprinesú dostatočnú úľavu, lekár môže odporučiť lieky. Najčastejšie sa používajú:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Diosmín"}
                    </strong>
                    {
                      ": Tento liek pomáha posilňovať žilové steny a zlepšuje cirkuláciu. Je to ako výživový doplnok pre vaše žily."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Protizápalové lieky"}
                    </strong>
                    {
                      ": Môžu pomôcť zmierniť zápal a s ním spojené svrbenie. Je to ako hasiči, ktorí prídu uhasiť požiar vo vašich žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Antihistaminiká"}
                    </strong>
                    {
                      ": Tieto lieky môžu pomôcť zmierniť svrbenie. Fungujú ako tlmič pre vaše nervové zakončenia, ktoré spôsobujú svrbenie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Lokálna liečba - priamy útok na svrbenie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na zmiernenie svrbenia môžete použiť rôzne lokálne prípravky:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hydratačné krémy"}
                    </strong>
                    {
                      ": Udržujú pokožku hydratovanú a menej náchylnú na svrbenie. Je to ako polievanie suchej záhrady - všetko sa upokojí."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kortikosteroidné krémy"}
                    </strong>
                    {
                      ": Tieto krémy môžu pomôcť zmierniť zápal a svrbenie. Používajte ich však opatrne a len podľa pokynov lekára."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Chladivé gély"}
                    </strong>
                    {
                      ": Môžu poskytnúť okamžitú úľavu od svrbenia. Je to ako keď dáte horúci hrniec do studenej vody - všetko sa okamžite ochladí a upokojí."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Invazívne metódy - keď treba zasiahnuť razantnejšie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V niektorých prípadoch môže byť potrebná invazívnejšia liečba. Medzi možnosti patrí:"
                }
              </p>
              <ol className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Chirurgické odstránenie (stripping)"}
                    </strong>
                    {
                      ": V najzávažnejších prípadoch môže byť potrebné chirurgické odstránenie postihnutých žíl. Je to ako keď odstránite pokazenú časť potrubia - niekedy je jednoduchšie ju úplne vymeniť."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-2xl">
                {"Prevencia kŕčových žíl - lepšie predchádzať než liečiť"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ako vždy platí, že prevencia je lepšia ako liečba. Tu je niekoľko tipov, ako predchádzať vzniku kŕčových žíl:"
                }
              </p>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zdravá strava"}
                    </strong>
                    {
                      ': Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať zápche a opuchom, ktoré môžu zhoršovať kŕčové žily. Predstavte si to ako preventívnu údržbu vášho "žilového systému".'
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Život s kŕčovými žilami - ako si udržať kvalitu života"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily môžu byť nepríjemné, ale nemusí to znamenať koniec aktívneho a plnohodnotného života. Tu je niekoľko tipov, ako žiť s kŕčovými žilami:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Buďte trpezliví"}
                    </strong>
                    {
                      ": Liečba kŕčových žíl a zmiernenie svrbenia môže trvať. Nestrácajte nádej a držte sa liečebného plánu. Pamätajte, Rím nepostavili za deň a vaše žily sa tiež neuzdravila cez noc!"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Záver: Vaše nohy, vaša zodpovednosť"}
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
