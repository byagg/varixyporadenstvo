const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";
const listItemClassName3 =
  "font-heading text-ploy-text-primary font-bold text-2xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight";

/**
 * @ployComponent
 * @ployComponentId operacia-krcovych-zil-ucinne-riesenie-pre-problemy-s-cievami-hero-section
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
    text: "Genetika",
    text_1:
      ": Ak vaši rodičia mali kŕčové žily, je veľká šanca, že sa s nimi stretnete aj vy.",
  },
  {
    text: "Sedavý životný štýl",
    text_1:
      ": Dlhé hodiny strávené sedením pri počítači alebo naopak státím môžu zvýšiť tlak na žily.",
  },
  {
    text: "Obezita",
    text_1: ": Nadbytočné kilá znamenajú väčšiu záťaž pre vaše nohy a žily.",
  },
  {
    text: "Tehotenstvo",
    text_1:
      ": Hormonálne zmeny a zvýšený objem krvi môžu prispieť k vzniku kŕčových žíl.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1:
      ": Modrasté alebo fialové žily, ktoré vystupujú nad povrch kože a sú hmatateľné.",
  },
  {
    text: "Bolesti nôh od kolien dolu",
    text_1:
      ": Pocit ťažkých a unavených nôh, pálenie alebo dokonca kŕče, ktoré sa zhoršujú po dlhšom státí.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      ": Najmä okolo členkov, čo je často spojené so stagnáciou krvi v dolných končatinách.",
  },
  {
    text: "Svrbenie a podráždenie kože",
    text_1: ": Suchá a podráždená koža okolo kŕčových žíl.",
  },
  {
    text: "Vredy predkolenia",
    text_1:
      ": V závažných prípadoch môžu vzniknúť vredy, ktoré sú ťažko hojiteľné a vyžadujú odbornú starostlivosť.",
  },
];

export const items3: ListItemProps[] = [
  {
    text: "Kompresné pančuchy",
    text_1:
      ": Tieto špeciálne pančuchy vytvárajú tlak na nohy, ktorý pomáha krvi prúdiť späť k srdcu. Takéto pančuchy môžu znížiť opuchy a bolesť.",
  },
  {
    text: "Zmena životného štýlu",
    text_1:
      ": Pravidelné cvičenie, zdravá strava a udržiavanie normálnej hmotnosti môžu pomôcť zmierniť príznaky kŕčových žíl.",
  },
  {
    text: "Lieky na zápal žíl",
    text_1:
      ": Protizápalové lieky môžu zmierniť bolesť a opuch. Patria sem aj venotoniká ako diosmín, ktoré zlepšujú funkciu žíl.",
  },
];

export const items4: ListItemProps[] = [
  {
    text: "Kompresné pančuchy",
    text_1:
      ": Po operácii vám môžu pomôcť kompresné pančuchy, ktoré zlepšujú krvný obeh a znižujú riziko vzniku nových kŕčových žíl.",
  },
  {
    text: "Chôdza",
    text_1:
      ": Krátke prechádzky pomôžu zlepšiť cirkuláciu krvi a urýchliť hojenie.",
  },
  {
    text: "Starostlivosť o rany",
    text_1:
      ": Dôležité je udržiavať miesta vpichov alebo rezov čisté a suché, aby sa predišlo infekciám.",
  },
];

export const items5: ListItemProps[] = [
  {
    text: "Zdravý životný štýl",
    text_1:
      ": Pravidelné cvičenie, vyvážená strava a udržiavanie zdravej hmotnosti sú kľúčové pre zdravé žily.",
  },
  {
    text: "Pravidelná fyzická aktivita",
    text_1:
      ": Krátke prechádzky a prestávky na natiahnutie nôh môžu byť veľmi užitočné.",
  },
  {
    text: "Kompresné pančuchy",
    text_1:
      ": Nosenie kompresných pančúch môže pomôcť predchádzať vzniku nových kŕčových žíl.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zf_EAL"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Operácia kŕčových žíl: Účinné riešenie pre problémy s cievami"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Článok sa zaoberá operáciou kŕčových žíl ako účinným riešením pre tých, ktorí trpia bolesťami a opuchmi spôsobenými týmto ochorením. Prečítajte si o rôznych chirurgických metódach, rekonvalescencii a dôležitosti prevencie."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zSzOWQ"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(7011px,auto)_1fr] max-lg:px-4 lg:min-h-[252.25rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3466px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zRiNT0"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="doctor performing operation"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="doctor performing operation"
                  src="/external-assets/58c97d8d0d301588.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="doctor performing operation"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="doctor performing operation"
                  src="/external-assets/b8887cfc2576f501.jpg"
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
              id="zvssFP"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú nielen estetickým problémom, ktorý môže pokaziť radosť z nosenia krátkych šiat či šortiek, ale aj zdravotným stavom, ktorý môže spôsobiť nepríjemné bolesti a opuchy. Tento stav postihuje mnoho ľudí a väčšinou sa objavuje na dolných končatinách. Ak vás tieto problémy trápia a cítite, že už je toho dosť, operácia kŕčových žíl môže byť tým pravým riešením, ako sa vrátiť k ľahším nohám."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú kŕčové žily a prečo nám kazia radosť z pohybu?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kŕčové žily, známe aj ako" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "varixy"}
                </strong>
                {
                  ", vznikajú, keď žily na nohách prestanú správne fungovať a krv sa začne hromadiť v dolných končatinách. Tento proces spôsobuje, že sa žily rozširujú, deformujú a stávajú sa viditeľnými pod kožou. Výsledkom sú typické hrboľaté, modrasté žily, ktoré poznáme pod názvom kŕčové žily. Prečo sa to deje?"
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
                      {"Starnutie"}
                    </strong>
                    {
                      ": Ako starneme, naše žily strácajú elasticitu, čo vedie k ich oslabeniu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ako spoznať kŕčové žily: Signály, ktoré vám nohy vysielajú"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sa môžu prejavovať rôznymi spôsobmi a niektoré príznaky môžu byť prekvapivo nenápadné. Čo si teda všímať?"
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
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sa tieto príznaky objavujú pravidelne, neváhajte navštíviť lekára, ktorý vám môže navrhnúť riešenie na mieru."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Ako sa liečia kŕčové žily: Od jednoduchých opatrení po operáciu"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba kŕčových žíl môže byť jednoduchá, ale niekedy je nevyhnutný chirurgický zásah. Výber metódy závisí od toho, aké závažné sú vaše problémy."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Jednoduché, ale účinné opatrenia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nie vždy je potrebné hneď siahať po skalpeli. Niekedy môžu pomôcť jednoduché zmeny:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Studené obklady"}
                    </strong>
                    {": Ak nohy opúchajú, studený obklad môže priniesť úľavu."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"Chirurgické a iné zákroky: Keď je čas zasiahnuť"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak jednoduché opatrenia nestačia, prichádzajú na rad chirurgické a nechirurgické metódy. Medzi najčastejšie patrí:"
                }
              </p>
              <h4 className={listItemClassName3}>Stripping s crossectomiou</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Stripping je chirurgický zákrok, pri ktorom sa odstráni dlhá časť poškodených kŕčových žíl. Zákrok začína crossectomiou, čo je prerušenie a podviazanie veľkej safénovej žily v mieste, kde ústi do hlbokej žily. Potom chirurg pomocou špeciálneho nástroja, tzv. stripperu, odstráni hlavnú povrchovú žilu po celej dĺžke. Tento postup je efektívny pri liečbe väčších a viac rozšírených kŕčových žíl a výsledky sú dlhodobé."
                }
              </p>
              <h4 className={listItemClassName3}>
                {"Flebektómia/Miniflebektómia"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Flebektómia je klasická operácia, pri ktorej sa kŕčové žily odstránia malými rezmi na koži. Tento postup je relatívne jednoduchý a efektívny. Chirurg vykoná niekoľko malých vpichov a pomocou špeciálneho nástroja odstráni kŕčové žily. Výhodou tohto zákroku je, že výsledky sú dlhodobé."
                }
              </p>
              <h4 className={listItemClassName3}>Endovaskulárna ablácia</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Endovaskulárna ablácia je moderná metóda, ktorá využíva teplo na uzavretie postihnutých žíl. Katéter sa zavedie do žily, kde vytvorí teplo, ktoré žilu poškodí a spôsobí jej zrútenie. Tento zákrok je menej invazívny a rekonvalescencia je rýchlejšia než pri tradičnej operácii."
                }
              </p>
              <h4 className={listItemClassName3}>Sklerotizácia</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Sklerotizácia je ďalšia populárna metóda, ktorá spočíva v injekcii špeciálnej látky priamo do žily. Táto látka spôsobí, že žila sa zrúti a postupne sa vstrebe. Sklerotizácia je ideálna pre menšie kŕčové žily a tzv. metličky na nohách."
                }
              </p>
              <h3 className={listItemClassName2}>Radiofrekvenčná ablácia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tento zákrok je podobný endovaskulárnej ablácie, ale namiesto lasera sa využívajú rádiové vlny. Je to veľmi účinný spôsob, ako uzavrieť kŕčové žily a má minimálne riziko komplikácií."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Rekonvalescencia po operácii kŕčových žíl: Ako rýchlo sa vrátite na nohy?"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po operácii kŕčových žíl sa treba postarať o to, aby sa nohy čo najrýchlejšie zotavili a vy ste sa mohli opäť pohybovať s ľahkosťou. Tu sú niektoré tipy:"
                }
              </p>
              <ul className="break-words my-0">
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
                      {"Vyhýbanie sa dlhodobému státiu alebo sedeniu"}
                    </strong>
                    {
                      ": Snažte sa pravidelne meniť polohu a vyhýbať sa dlhodobému státiu alebo sedeniu, čo by mohlo spomaliť hojenie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ako predísť návratu kŕčových žíl?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Operácia kŕčových žíl môže vyriešiť aktuálny problém, ale je dôležité nezabúdať na prevenciu, aby sa žily nevrátili. Ako na to?"
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
                      {"Pravidelné kontroly u lekára"}
                    </strong>
                    {
                      ": Ak máte zvýšené riziko vzniku kŕčových žíl, pravidelné kontroly môžu pomôcť včas odhaliť a liečiť prípadné problémy."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Ak vás trápia kŕčové žily, operácia môže byť vaším riešením, ako sa ich zbaviť a opäť si užívať pohyb bez bolesti. Nezabúdajte však, že dôležitá je aj následná starostlivosť a prevencia, aby ste sa vyhli ich návratu. Moderné metódy a skúsení lekári vám dnes ponúkajú bezpečné a efektívne riešenia, ako zlepšiť kvalitu vášho života a vrátiť vašim nohám krásu a zdravie."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
