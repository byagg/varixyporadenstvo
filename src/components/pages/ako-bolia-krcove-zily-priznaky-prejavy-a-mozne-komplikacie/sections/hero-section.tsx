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
};

function ListItem2({ text }: ListItem2Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {text}
    </p>
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

type ListItem5Props = {
  text: string;
  separator?: string;
};

function ListItem5({ text, separator }: ListItem5Props) {
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
    text: "Kŕčové žily môžu byť bolestivé a nepríjemné, ale s správnou starostlivosťou a liečbou je možné tento stav efektívne zvládnuť. Od konzervatívnych metód ako kompresné pančuchy a cvičenie, až po pokročilejšie zákroky ako skleroterapia alebo chirurgia - existuje množstvo možností, ako zmierniť príznaky a predchádzať komplikáciám.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Kľúčom je včasná diagnóza a správna liečba. Ak máte podozrenie na kŕčové žily alebo pociťujete bolesť či nepohodlie v nohách, neváhajte vyhľadať odbornú pomoc. Váš angiológ alebo cievny chirurg vám pomôže nájsť najvhodnejší plán liečby pre váš konkrétny prípad.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že zdravie vašich žíl je dôležitou súčasťou vášho celkového zdravia. S správnou starostlivosťou a pozornosťou môžete udržať svoje nohy zdravé, bezbolestné a krásne po celý život.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Chcete sa dozvedieť viac o starostlivosti o vaše žily? Neváhajte sa obrátiť na odborníka alebo navštíviť spoľahlivé online zdroje pre ďalšie informácie. Vaše nohy vám za to poďakujú!",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Žiť s kŕčovými žilami môže byť náročné, ale s správnou starostlivosťou a liečbou je možné minimalizovať bolesť a nepohodlie. Je dôležité pamätať, že každý prípad je jedinečný a to, čo funguje pre jedného, nemusí fungovať pre druhého.",
  },
  {
    text: "Ak máte kŕčové žily, nebojte sa hovoriť o svojich príznakoch s lekárom. Čím skôr začnete s liečbou, tým lepšie môžete predchádzať komplikáciám a zlepšiť kvalitu svojho života.",
  },
  {
    text: "Nezabúdajte, že vaše nohy vás nosia celý život - zaslúžia si tú najlepšiu starostlivosť!",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "Viditeľné rozšírené žily",
    text_1:
      ": Často majú modrú alebo purpurovú farbu a môžu vyzerať ako uzly alebo hrče pod kožou.",
  },
  {
    text: "Bolesť",
    text_1:
      ": Od mierneho nepohodlia až po intenzívnu bolesť, najmä po dlhšom státí alebo sedení.",
  },
  {
    text: "Pocit ťažkých nôh",
    text_1: ": Akoby ste mali na nohách pripevnené závažia.",
  },
  { text: "Opuch", text_1: ": Najmä v oblasti členkov a chodidiel." },
  {
    text: "Svrbenie",
    text_1: ": Okolo postihnutých žíl môže byť koža suchá a svrbivá.",
  },
  {
    text: "Zmeny farby kože",
    text_1:
      ": Môže sa objaviť hyperpigmentácia - tmavšie sfarbenie kože v okolí kŕčových žíl.",
  },
];

export const items4: ListItem3Props[] = [
  {
    text: "Tupú a ťahavú",
    text_1: ": Akoby niekto jemne, ale vytrvalo ťahal za vašu kožu.",
  },
  {
    text: "Pulzujúcu",
    text_1:
      ": Podobnú rytmickému búchaniu, ktoré môže byť synchronizované s vaším srdcovým tepom.",
  },
  { text: "Páliacu", text_1: ": Ako keby ste mali na nohách horúci obklad." },
];

export const items5: ListItem5Props[] = [
  { text: "Intenzívnu bolesť v postihnutej oblasti" },
  { text: "Začervenanie a teplo kože nad zapálenou žilou" },
  { text: "Opuch a citlivosť na dotyk" },
];

export const items6: ListItem3Props[] = [
  {
    text: "Udržiavajte zdravú hmotnosť",
    text_1: ": Nadváha zvyšuje tlak na žily v nohách.",
  },
  {
    text: "Buďte aktívni",
    text_1: ": Pravidelné cvičenie podporuje zdravý krvný obeh.",
  },
  {
    text: "Vyhýbajte sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, robte si pravidelné prestávky na pohyb.",
  },
  {
    text: "Noste voľné oblečenie",
    text_1: ": Tesné oblečenie môže obmedzovať cirkuláciu krvi.",
  },
  {
    text: "Zdvíhajte nohy",
    text_1: ": Keď odpočívate, zdvihnite nohy nad úroveň srdca.",
  },
  {
    text: "Noste kompresné pančuchy",
    text_1: ": Najmä ak máte predispozíciu na kŕčové žily.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zFHnD5"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako bolia kŕčové žily? Príznaky, prejavy a možné komplikácie"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte príznaky a liečbu kŕčových žíl. Od bolesti po komplikácie, tento článok vám poskytne komplexný prehľad o kŕčových žilách a ich manažmente."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">7 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zN59qf"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z-Egou"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="men's white dress shirt"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="men's white dress shirt"
                  src="/external-assets/15b62e2bd645b458.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="men's white dress shirt"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="men's white dress shirt"
                  src="/external-assets/6a4c5cf93c0de714.jpg"
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
              id="zVvDMo"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily, odborne nazývané aj varixy, sú nielen estetickým problémom, ale môžu spôsobovať aj značné nepohodlie a bolesti. Tento stav postihuje milióny ľudí po celom svete a často sa spája s ďalšími komplikáciami, ako je zápal žíl či trombóza. V tomto článku sa pozrieme na to, ako sa kŕčové žily prejavujú, aké bolesti môžu spôsobovať a aké komplikácie môžu nastať, ak sa neriešia včas. Taktiež vám predstavíme možnosti liečby a prevencie, aby ste mohli lepšie pochopiť a zvládnuť tento častý zdravotný problém."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú kŕčové žily a prečo vznikajú?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú rozšírené, často zvlnené a viditeľné žily, ktoré sa najčastejšie vyskytujú na nohách. Vznikajú, keď žilové chlopne, ktoré za normálnych okolností pomáhajú krvi prúdiť späť k srdcu proti gravitácii, prestanú správne fungovať. V dôsledku toho sa krv hromadí v žilách, čo vedie k ich rozšíreniu a vzniku charakteristického vzhľadu kŕčových žíl."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Predstavte si to ako fontánu s poruchou - namiesto toho, aby voda plynule prúdila nahor, začne sa hromadiť v spodnej časti a vytvárať "bubliny". Podobne sa správa aj krv v našich žilách, keď zlyhajú žilové chlopne.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príznaky a prejavy kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sa môžu prejavovať rôznymi spôsobmi. Niektorí ľudia môžu mať len viditeľné zmeny na koži, zatiaľ čo iní môžu pociťovať značné nepohodlie. Medzi najčastejšie príznaky a prejavy patria:"
                }
              </p>
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
                      {"Pocit pálenia alebo pulzovania"}
                    </strong>
                    {": V oblasti postihnutých žíl."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Ako bolia kŕčové žily?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Bolesť spojená s kŕčovými žilami môže mať rôzne podoby a intenzitu. Niektorí ľudia popisujú bolesť ako:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Kŕčovitú"}
                    </strong>
                    {": Náhle, ostré bolesti, ktoré môžu prísť a odísť."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Bolesť sa často zhoršuje po dlhom státí alebo sedení a môže sa zmierniť, keď zdvihnete nohy alebo sa pohybujete. Je to ako keď dlho sedíte v nepohodlnej polohe - keď sa konečne postavíte a ponaťahujete, cítite úľavu."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Komplikácie spojené s kŕčovými žilami"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sa kŕčové žily neriešia, môžu viesť k vážnejším zdravotným problémom. Medzi najčastejšie komplikácie patria:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Zápal žíl (flebitída)</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zápal žíl, odborne nazývaný flebitída, je jednou z najčastejších komplikácií kŕčových žíl. Vzniká, keď sa stena žily zapáli v dôsledku zhoršeného prietoku krvi. Príznaky flebitídy zahŕňajú:"
                }
              </p>
              <ul className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem5
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Možné zvýšenie telesnej teploty"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Flebitída môže postihnúť povrchové žily (povrchová flebitída) alebo hlboké žily (hlboká žilová trombóza). Hlboká žilová trombóza je vážnejší stav, ktorý môže viesť k život ohrozujúcim komplikáciám, ako je pľúcna embólia."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Krvné zrazeniny (trombóza)"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Krvné zrazeniny sú závažnou komplikáciou kŕčových žíl. Môžu sa tvoriť v rozšírených žilách, kde je prúdenie krvi spomalené. Ak sa zrazenina uvoľní a dostane sa do pľúc, môže spôsobiť pľúcnu embóliu - potenciálne život ohrozujúci stav."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si to ako upchatie vodovodného potrubia - ak sa niekde v systéme vytvorí prekážka, môže to mať vážne následky pre celý systém."
                }
              </p>
              <h3 className={listItemClassName2}>3. Vredy a rany</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dlhodobé kŕčové žily môžu viesť k vzniku vredov na koži, najmä v oblasti členkov. Tieto vredy, známe ako venózne vredy, sú bolestivé, ťažko sa hoja a môžu viesť k infekcii."
                }
              </p>
              <h3 className={listItemClassName2}>4. Krvácanie</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V niektorých prípadoch môžu kŕčové žily prasknúť a spôsobiť krvácanie. Hoci to zvyčajne nie je život ohrozujúce, môže to byť znepokojujúce a vyžaduje si okamžitú lekársku pozornosť."
                }
              </p>
              <h3 className={listItemClassName2}>5. Lymfedém</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Chronické kŕčové žily môžu narušiť lymfatický systém, čo vedie k hromadeniu lymfy v tkanivách a vzniku opuchu známeho ako lymfedém. Tento stav môže byť bolestivý a ťažko liečiteľný."
                }
              </p>
              <h2 className={listItemClassName}>Diagnostika kŕčových žíl</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak máte podozrenie na kŕčové žily, je dôležité navštíviť lekára, najlepšie angiológa alebo cievneho chirurga. Diagnostika zvyčajne zahŕňa:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Fyzické vyšetrenie"}
                    </strong>
                    {
                      ": Lekár prezrie vaše nohy, keď stojíte, aby videl, ako krv prúdi vašimi žilami."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Ultrazvuk"}
                    </strong>
                    {
                      ": Toto bezbolestné vyšetrenie používa zvukové vlny na zobrazenie prietoku krvi vo vašich žilách. Je to ako sonar na lodi, len namiesto rýb hľadáme problémy v žilách."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba kŕčových žíl a súvisiacej bolesti"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba kŕčových žíl závisí od závažnosti stavu a súvisiacich symptómov. Možnosti liečby zahŕňajú:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Konzervatívne metódy</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy"}
                    </strong>
                    {
                      ': Tieto špeciálne pančuchy pomáhajú zlepšovať cirkuláciu krvi v nohách. Sú ako "objatie" pre vaše nohy, ktoré pomáha krvi lepšie prúdiť.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Cvičenie"}
                    </strong>
                    {
                      ": Pravidelný pohyb, najmä chôdza a plávanie, pomáha zlepšovať cirkuláciu krvi."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Elevácia nôh"}
                    </strong>
                    {
                      ": Zdvihnutie nôh nad úroveň srdca pomáha odľahčiť žily a zlepšiť prietok krvi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>2. Medikamentózna liečba</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Venofarmaká"}
                    </strong>
                    {
                      ": Lieky ako diosmín alebo hesperidín pomáhaju zlepšovať žilový tonus a zmierňovať príznaky. Sem patrí napríklad Detralex."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8" />
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Pre nákup" + " "}
                    <span className="[color:inherit] font-bold break-words">
                      <strong className="[color:inherit] break-words">
                        {"Detralexu"}
                      </strong>
                    </span>{" "}
                    {"cez E-SHOP kliknite sem:" + " "}
                    <span className="[color:inherit] font-bold break-words">
                      <strong className="[color:inherit] break-words">
                        <u className="break-words">
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://etabletka.sk/obchod/detralex/?utm_source=dognet&a_aid=633942385be2f&a_bid=fe693712"
                            className="[color:inherit] break-words"
                          >
                            {"E-TABLETKA"}
                          </a>
                        </u>
                      </strong>
                    </span>
                    {"," + " "}
                    <span className="[color:inherit] font-bold break-words">
                      <strong className="[color:inherit] break-words">
                        <u className="break-words">
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.mojalekaren.sk/detralex-60-filmom-obalenych-tabliet/?cjdata=MXxZfDB8WXww&utm_source=cj&utm_medium=affiliate&utm_campaign=varixyporadenstvo&utm_content=100721030&cjevent=9363115c2a5d11f0826c00400a18b8fa"
                            className="[color:inherit] break-words"
                          >
                            {"Mojalekáreň"}
                          </a>
                        </u>
                      </strong>
                    </span>
                    {"."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Protizápalové lieky"}
                    </strong>
                    {
                      ": Na zmiernenie bolesti a zápalu môžu byť predpísané nesteroidné protizápalové lieky."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"3. Minimálne invazívne zákroky"}
              </h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Skleroterapia"}
                    </strong>
                    {
                      ': Pri tomto zákroku sa do postihnutých žíl vstrekuje roztok, ktorý spôsobí ich uzavretie a následné vstrebanie. Je to ako "zalepiť" problémové žily.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Rádiofrekvenčná ablácia"}
                    </strong>
                    {
                      ": Táto metóda využíva tepelnú energiu na uzavretie postihnutých žíl."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Laserová terapia"}
                    </strong>
                    {
                      ": Podobne ako rádiofrekvenčná ablácia, aj táto metóda využíva teplo, ale v tomto prípade z laserového lúča, na uzavretie postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>4. Chirurgická liečba</h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Stripping"}
                    </strong>
                    {
                      ': Pri tomto zákroku sa chirurgicky odstránia postihnuté žily. Je to ako "vytiahnuť" problémové žily z tela.'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Flebektómia"}
                    </strong>
                    {
                      ": Ide o odstránenie menších kŕčových žíl cez malé rezy v koži."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Prevencia kŕčových žíl a súvisiacej bolesti"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je kľúčová pri manažmente kŕčových žíl. Tu je niekoľko tipov, ako predchádzať vzniku kŕčových žíl alebo zhoršovaniu existujúcich:"
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
                      {"Jedzte vyváženú stravu"}
                    </strong>
                    {
                      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať kŕčovým žilám."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Život s kŕčovými žilami</h2>
              {items2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
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
