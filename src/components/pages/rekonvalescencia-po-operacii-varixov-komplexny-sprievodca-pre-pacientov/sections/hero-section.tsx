const listItemClassName =
  "w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:text-2xl lg:leading-[3.25rem] lg:text-[2.5rem]";
const listItemClassName3 =
  "font-heading text-ploy-text-primary font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl";
const listItemClassName4 =
  "w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";

/**
 * @ployComponent
 * @ployComponentId rekonvalescencia-po-operacii-varixov-komplexny-sprievodca-pre-pacientov-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
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
  { text: "Rany je možné umývať po 48 hodinách vlažnou vodou." },
  { text: "Používajte jemné mydlo a mäkký uterák." },
  { text: "Steri-strip pásiky sa nechávajú na koži, kým samy neodpadnú." },
];

export const items2: ListItemProps[] = [
  { text: "Náhle zhoršenie bolesti." },
  { text: "Výrazné začervenanie alebo teplota v oblasti rán." },
  { text: "Hlboký opuch jednej nohy." },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zNMJ2Q"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Rekonvalescencia po operácii varixov: Komplexný sprievodca pre pacientov"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "V tomto článku sa zameriame na odborné odporúčania pre zotavenie, podložené zahraničnými štúdiami."
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
        id="zTvQAg"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(7433px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(200px,auto)_minmax(16px,auto)_minmax(200px,auto)_1fr] max-lg:px-4 lg:min-h-[414.1875rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_8.90523%_4.65686%_3.26797%_32.6797%_3.26797%_4.65686%_8.90523%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(304px,auto)_minmax(480px,auto)_minmax(560px,auto)_minmax(320px,auto)_minmax(600px,auto)_minmax(320px,auto)_minmax(611px,auto)_minmax(445px,auto)_minmax(800px,auto)_minmax(476px,auto)_minmax(960px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-8">
            <div
              id="zwmspl"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a person with a bruised leg and a wound on their arm"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="a person with a bruised leg and a wound on their arm"
                  src="/migrated-assets/082d5484c3c327e96a3e.jpg"
                  height="344"
                  width="594"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a person with a bruised leg and a wound on their arm"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a person with a bruised leg and a wound on their arm"
                  src="/migrated-assets/4a40a25f38b7a8b690a9.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-5 lg:col-start-2 lg:col-end-9 lg:row-end-[15]">
            <div
              id="zq9aCV"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Operácia kŕčových žíl (varixov) je dôležitým krokom v liečbe žilovej insuficiencie. Úspešná rekonvalescencia po zákroku – či už ide o klasickú chirurgiu, endovenóznu laserovú terapiu (EVLT), rádiofrekvenčnú abláciu (RFA) alebo skleroterapiu – zohráva rozhodujúcu úlohu pri predchádzaní komplikáciám a udržaní dlhodobého efektu liečby. V tomto článku sa zameriame na odborné odporúčania pre zotavenie, podložené zahraničnými štúdiami."
                }
              </p>
              <h4 className={listItemClassName2}>
                {"Kompresná terapia: Základ úspešného zotavenia"}
              </h4>
              {Array.from({
                length: 10,
              }).map((_, index) => (
                <p
                  key={index}
                  className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8"
                />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kompresné pančuchy sú neoddeliteľnou súčasťou pooperačnej starostlivosti. Podľa štúdií publikovaných v" +
                  " "}
                <em className="[color:inherit] break-words">
                  {" " +
                    "Journal of Vascular Surgery: Venous and Lymphatic Disorders"}
                </em>
                {
                  ", kompresia po operácii významne znižuje opuchy, riziko hematómov a subjektívnu bolesť pacientov​."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Odporúčané nosenie:"}
                </strong>
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"0–2 dni po zákroku"}
                    </strong>
                    {
                      ": Nepretržité nosenie kompresných pančúch (vrátane spánku)."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"3–14 dní"}
                    </strong>
                    {": Pančuchy sa nosia počas dňa, v noci sa môžu zložiť."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"2–6 týždňov"}
                    </strong>
                    {": Pokračovanie denného nosenia podľa odporúčania lekára."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dôležitý je aj správny výber veľkosti a kompresnej triedy (zvyčajne II. trieda), aby bol efekt maximálny."
                }
              </p>
              <h4 className={listItemClassName2}>
                {"Fyzická aktivita: Základ prevencie komplikácií"}
              </h4>
              {Array.from({
                length: 8,
              }).map((_, index) => (
                <p
                  key={index}
                  className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8"
                />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Mnohé zahraničné zdroje, vrátane" + " "}
                <em className="[color:inherit] break-words">
                  {" " + "National Health Service (NHS)"}
                </em>
                {
                  ", odporúčajú začať s ľahkou fyzickou aktivitou už 24 hodín po operácii. Krátke prechádzky každé 2–3 hodiny podporujú cirkuláciu a znižujú riziko trombózy."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Čo je vhodné:"}
                </strong>
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Krátke chôdze (5–10 minút každú hodinu)."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Jemné rozcvičky nôh v sede alebo ľahu."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Po 7–10 dňoch: stacionárny bicykel, plávanie."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Čomu sa vyhnúť:"}
                </strong>
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Zdvíhanie ťažkých bremien."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Intenzívne kardio cvičenia."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Beh a posilňovanie nôh (najmä po klasickej operácii)."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h4 className={listItemClassName2}>
                {"Starostlivosť o rany a hygiena"}
              </h4>
              {Array.from({
                length: 7,
              }).map((_, index) => (
                <p
                  key={index}
                  className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8"
                />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Správna hygiena je kľúčová pre prevenciu infekcie. Podľa odporúčaní z" +
                  " "}
                <em className="[color:inherit] break-words">
                  {" " + "American College of Phlebology"}
                </em>
                {":"}
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
                    {
                      "V prípade začervenania, horúčkovitosti alebo výtoku z rany kontaktujte lekára."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h4 className={listItemClassName2}>
                {"Spánkový režim a poloha nôh"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po operácii sa odporúča spať s vyvýšenými nohami – aspoň 10–15 cm nad úrovňou srdca. To zlepšuje návrat krvi a minimalizuje opuchy. Vhodné je používať vankúš pod kolená alebo špeciálnu klinovú podložku."
                }
              </p>
              <h4 className={listItemClassName2}>Strava a hydratácia</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vyvážená strava s dostatkom vlákniny pomáha predchádzať zápche, ktorá môže zvyšovať tlak v žilách. Dôležitý je aj pitný režim – odporúča sa minimálne 2 litre vody denne. Vyhýbajte sa alkoholu a nadmernému príjmu soli. Veľmi vhodné je užívanie bioflavonoidov ako Detralex (Fluxoven)."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <h4 className={listItemClassName2}>
                {"Návrat do práce a bežného života"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Čas návratu do zamestnania závisí od typu zákroku a povahy práce:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kancelárska práca"}
                    </strong>
                    {
                      ": 2–3 dni po EVLT alebo RFA, 7–10 dní po klasickej operácii."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Fyzická práca"}
                    </strong>
                    {": 2–4 týždne."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Šoférovanie"}
                    </strong>
                    {": Po 48 hodinách, ak pacient nemá bolesť ani opuch."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h4 className={listItemClassName2}>
                {"Psychologické aspekty a očakávania"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Niektorí pacienti môžu pociťovať únavu, frustráciu alebo úzkosť z pomalého hojenia. Je dôležité si uvedomiť, že opuchy a modriny môžu pretrvávať 2–4 týždne, čo je prirodzené. Podpora rodiny, dôvera k ošetrujúcemu lekárovi a pravidelné kontroly uľahčujú rekonvalescenciu."
                }
              </p>
              <h4 className={listItemClassName2}>Kedy vyhľadať lekára</h4>
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
                    {"Horúčka nad 38°C."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Tieto príznaky môžu signalizovať infekciu alebo trombózu."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <h4 className={listItemClassName2}>Často kladené otázky (FAQ)</h4>
              <h5 className={listItemClassName3}>1. Kedy môžem opäť cvičiť?</h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Základný pohyb (chôdza) sa odporúča ihneď, intenzívne športy po 3–6 týždňoch podľa typu zákroku."
                }
              </p>
              <h5 className={listItemClassName3}>
                {"2. Musím nosiť kompresné pančuchy každý deň?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, minimálne počas prvých 2–3 týždňov, potom podľa pokynov lekára."
                }
              </p>
              <h5 className={listItemClassName3}>
                {"3. Je normálne, že mám modriny?"}
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, po operácii môžu pretrvať 2–4 týždne. Ak sa zhoršujú, navštívte lekára."
                }
              </p>
              <h5 className={listItemClassName3}>4. Ako spoznám infekciu?</h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Začervenanie, výtok, bolesť a zvýšená teplota sú typické príznaky infekcie."
                }
              </p>
              <h5 className={listItemClassName3}>
                {
                  "5. Ktorá metóda odstránenia varixov má najkratšiu rekonvalescenciu?"
                }
              </h5>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Najkratší čas zotavenia sa pozoruje po EVLT a RFA – často už po 3–5 dňoch."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                {"Záver"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Rekonvalescencia po operácii varixov si vyžaduje dôsledný prístup. Dodržiavanie odporúčaní pre kompresiu, fyzickú aktivitu, hygienu a životosprávu významne ovplyvňuje dĺžku hojenia a celkový výsledok. Či už ste podstúpili laserový zákrok, rádiofrekvenčnú abláciu alebo klasickú operáciu, kľúčom k úspechu je informovanosť a spolupráca s lekárom."
                }
              </p>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-4 lg:col-end-7 lg:row-start-5 lg:row-end-6">
            <div
              id="zZWO7H"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[30.0313rem]"
            >
              <div
                rel="nofollow"
                title="a woman's legs with a pair of knee high heel boots"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="a woman's legs with a pair of knee high heel boots"
                  src="/migrated-assets/fe90e6668e36f2602187.jpg"
                  height="480"
                  width="480"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a woman's legs with a pair of knee high heel boots"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName4}
              >
                <img
                  alt="a woman's legs with a pair of knee high heel boots"
                  src="/migrated-assets/23af73c8512c452fd5df.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-8 max-lg:row-end-9 lg:col-start-4 lg:col-end-7 lg:row-start-7 lg:row-end-8">
            <div
              id="zlGFHp"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-80"
            >
              <div
                rel="nofollow"
                title="a woman is doing a physical exercise on a table"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="a woman is doing a physical exercise on a table"
                  src="/migrated-assets/f3fe02e1dfef022f07fc.jpg"
                  height="320"
                  width="480"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a woman is doing a physical exercise on a table"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName4}
              >
                <img
                  alt="a woman is doing a physical exercise on a table"
                  src="/migrated-assets/68f669987da4c1563d17.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-10 max-lg:row-end-11 lg:col-start-4 lg:col-end-7 lg:row-start-9 lg:row-end-10">
            <div
              id="zXPOH9"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-80"
            >
              <div
                rel="nofollow"
                title="a person in a gloved gloved hand holding a pair of scissors and a"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName}
              >
                <img
                  alt="a person in a gloved gloved hand holding a pair of scissors and a"
                  src="/migrated-assets/1b1e4f4939736c6fbc58.jpg"
                  height="320"
                  width="480"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a person in a gloved gloved hand holding a pair of scissors and a"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className={listItemClassName4}
              >
                <img
                  alt="a person in a gloved gloved hand holding a pair of scissors and a"
                  src="/migrated-assets/222d55df79612c3bc50b.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[6] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-12 max-lg:row-end-13 lg:col-start-5 lg:col-end-6 lg:row-start-11 lg:row-end-12">
            <div
              id="z5TVAC"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.dpbolvw.net/click-100810134-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Ffluxoven-500-mg-60-tabliet%2F&cjsku=495784" target="_top"><img src="https://mojalekarensk.vshcdn.net/upload/fl/ux/fluxoven-500-mg-60-tabliet-2460106-1000x1000-square.jpg" border="0" alt="FLUXOVEN 500 mg 60 tabliet"></a><img src="https://www.lduhtrp.net/image-100810134-13484074" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[7] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[14] max-lg:row-end-[15] lg:col-start-5 lg:col-end-6 lg:row-start-13 lg:row-end-[14]">
            <div
              id="zJqpbL"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.anrdoezrs.net/click-100810134-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fdetralex-1000-mg-peroralna-suspenzia-vo-vrecku-30-kusov%2F&cjsku=459157" target="_top"><img src="https://mojalekarensk.vshcdn.net/upload/de/tr/detralex-1000-mg-peroralna-suspenzia-vo-vrecku-30-kusov-2516382-1000x1000-square.jpg" border="0" alt="DETRALEX 1000 mg peror�lna suspenzia vo vrecku 30 kusov"></a><img src="https://www.awltovhc.com/image-100810134-13484074" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
