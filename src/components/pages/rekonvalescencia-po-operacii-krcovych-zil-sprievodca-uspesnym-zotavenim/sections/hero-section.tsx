const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId rekonvalescencia-po-operacii-krcovych-zil-sprievodca-uspesnym-zotavenim-hero-section
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
  { text: "Viditeľné, vystúpené žily na nohách" },
  { text: "Bolesť nôh od kolien dole" },
  { text: "Opuchy nôh, najmä v oblasti členkov" },
  { text: "Pocit ťažkých nôh" },
  { text: "Svrbenie alebo pálenie v oblasti postihnutých žíl" },
];

export const items2: ListItem2Props[] = [
  {
    text: "Konzultácia s lekárom",
    text_1:
      ": Dôkladne prediskutujte s vaším lekárom (angiológom alebo cievnym chirurgom) všetky aspekty operácie, vrátane očakávaného priebehu rekonvalescencie.",
  },
  {
    text: "Predoperačné vyšetrenia",
    text_1:
      ": Absolvujte všetky potrebné predoperačné vyšetrenia, ktoré vám lekár nariadi (interné predoperačné vyšetrenie, hematologické a podobne)",
  },
  {
    text: "Úprava medikácie",
    text_1:
      ": Informujte lekára o všetkých liekoch, ktoré užívate. Môže byť potrebné upraviť alebo dočasne vysadiť niektoré lieky pred operáciou (Aspirin, Trombex, Warfarin)",
  },
  {
    text: "Príprava domáceho prostredia",
    text_1:
      ": Pripravte si doma pohodlné miesto na odpočinok s vyvýšenou polohou pre nohy.",
  },
  {
    text: "Zabezpečenie podpory",
    text_1:
      ": Dohodnite si pomoc rodinných príslušníkov alebo priateľov na prvé dni po operácii.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Klasická operácia (stripping, crossectomia, flebektómia)",
    text_1: ": Táto metóda zahŕňa odstránenie postihnutej žily cez malé rezy.",
  },
  {
    text: "Rádiofrekvenčná ablácia (RFA)",
    text_1:
      ": Pri tejto metóde sa používa tepelná energia na uzavretie postihnutej žily.",
  },
  {
    text: "Laserová operácia (EVLT)",
    text_1: ": Podobne ako RFA, ale využíva laserovú energiu.",
  },
];

export const items4: ListItem2Props[] = [
  {
    text: "Udržiavanie zdravej hmotnosti",
    text_1: ": Nadváha zvyšuje tlak na žily v nohách.",
  },
  {
    text: "Pravidelné cvičenie",
    text_1:
      ": Aktivity ako chôdza, plávanie alebo cyklistika pomáhajú zlepšovať cirkuláciu.",
  },
  {
    text: "Vyvážená strava",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a zlepšiť celkové zdravie ciev.",
  },
  {
    text: "Obmedzenie dlhého státia alebo sedenia",
    text_1:
      ": Ak máte sedavé zamestnanie, snažte sa pravidelne vstávať a prechádzať sa.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Aké sú možné komplikácie po operácii kŕčových žíl?",
    text_1:
      " Komplikácie môžu zahŕňať infekcie, krvácanie, tvorbu krvných zrazenín (trombóza), alebo poškodenie nervov. Dôležité je sledovať príznaky a okamžite kontaktovať lekára, ak sa objavia problémy.",
  },
  {
    text: "Kedy môžem začať cvičiť po operácii kŕčových žíl?",
    text_1:
      " Ľahké cvičenie, ako krátke prechádzky, môžete začať už pár dní po operácii. Intenzívnejšie cvičenie by ste mali odložiť na 4-6 týždňov a vždy sa poraďte s lekárom.",
  },
  {
    text: "Ako dlho trvá rekonvalescencia po operácii kŕčových žíl?",
    text_1:
      " Dĺžka rekonvalescencie sa líši v závislosti od typu operácie a individuálnych faktorov pacienta. Väčšinou sa pohybuje medzi 2-6 týždňami pre bežné aktivity, ale úplné zotavenie môže trvať niekoľko mesiacov.",
  },
  {
    text: "Ako sa môžem vyhnúť kŕčovým žilám v budúcnosti?",
    text_1:
      " Prevencia kŕčových žíl zahŕňa dodržiavanie zdravého životného štýlu, pravidelné cvičenie, vyhýbanie sa dlhému státiu alebo sedeniu, a nosenie kompresných pančúch, ak je to odporúčané.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z51VEI"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Rekonvalescencia po operácii krčových žíl: Sprievodca úspešným zotavením"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Operácia krčových žíl je zákrokom, ktorý si vyžaduje dôkladnú starostlivosť po jeho vykonaní. Správna rekonvalescencia je kľúčová pre úspešné zotavenie a minimalizáciu komplikácií. V tomto článku sa pozrieme na to, čo môžete očakávať po operácii krčových žíl a aké kroky môžete podniknúť na dosiahnutie rýchlejšieho a bezproblémového zotavenia."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">6 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zQrlOK"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(9016px,auto)_minmax(16px,auto)_minmax(200px,auto)_1fr] max-lg:px-4 lg:min-h-[340.25rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_16.8301%_3.51307%_25.6536%_3.51307%_16.8301%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(2708px,auto)_minmax(475px,auto)_minmax(1683px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-4 lg:col-end-5">
            <div
              id="z52hGr"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a man sitting on a yoga mat in a living room"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a man sitting on a yoga mat in a living room"
                  src="/external-assets/b3d49b6557f17146.jpg"
                  height="344"
                  width="314"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a man sitting on a yoga mat in a living room"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a man sitting on a yoga mat in a living room"
                  src="/external-assets/307109334dc62786.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-left w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-5 lg:col-start-2 lg:col-end-7 lg:row-end-7">
            <div
              id="zeec2y"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Operácia kŕčových žíl je významným zákrokom, ktorý si vyžaduje dôkladnú starostlivosť a trpezlivosť počas procesu zotavovania. Správna rekonvalescencia je kľúčová pre úspešné zotavenie a minimalizáciu komplikácií. V tomto komplexnom sprievodcovi sa pozrieme na to, čo môžete očakávať po operácii kŕčových žíl a aké kroky môžete podniknúť na dosiahnutie rýchlejšieho a bezproblémového zotavenia."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Úvod do problematiky kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily, odborne nazývané varixy dolných končatín, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne. Tento stav môže spôsobovať rôzne príznaky, od kozmetických problémov až po vážne zdravotné komplikácie."
                }
              </p>
              <h3 className={listItemClassName2}>Príznaky kŕčových žíl</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Medzi hlavné príznaky kŕčových žíl patria:"}
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
                    {"Nočné kŕče v lýtkach"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V pokročilých štádiách môžu kŕčové žily viesť k vážnejším komplikáciám, ako je žilová nedostatočnosť, vred predkolenia alebo dokonca hlboká žilová trombóza."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príprava na operáciu kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príprava na operáciu kŕčových žíl je kľúčová pre úspešný priebeh zákroku a následné zotavenie. Tu sú niektoré dôležité kroky, ktoré by ste mali podniknúť:"
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
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Nákup kompresných pančúch"}
                    </strong>
                    {
                      ": Zaobstarajte si kvalitné kompresné pančuchy podľa odporúčania lekára."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Priebeh operácie kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko metód operácie kŕčových žíl. Medzi najčastejšie patria:"
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
                      {"(Sklerotizácia)"}
                    </strong>
                    {
                      ": Injekčné podanie špeciálnej látky, ktorá spôsobí uzavretie žily - nie je priamo operáciou, nevykonáva sa na operačnej sále, ale v ambulancii"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Váš lekár vyberie najvhodnejšiu metódu založenú na vašom individuálnom stave."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Bezprostredná starostlivosť po operácii"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prvé hodiny a dni po operácii sú kľúčové pre úspešné zotavenie. Tu sú hlavné body, na ktoré by ste sa mali zamerať:"
                }
              </p>
              <h3 className={listItemClassName2}>Manažment bolesti</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po operácii môžete pociťovať určitú mieru bolesti a nepohodlia. To je normálne a váš lekár vám predpíše vhodné lieky na zmiernenie bolesti. Dodržiavajte presne pokyny ohľadom dávkovania."
                }
              </p>
              <h3 className={listItemClassName2}>Starostlivosť o rany</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vaše nohy budú po operácii zabalené do obväzov (bandáž) alebo budete mať nasadené kompresné pančuchy. Je kľúčové udržiavať rany čisté a suché, aby sa minimalizovalo riziko infekcie. Dodržiavajte pokyny lekára ohľadom hygieny rán a výmeny obväzov."
                }
              </p>
              <h3 className={listItemClassName2}>Elevácia nôh</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zdvíhanie nôh nad úroveň srdca je dôležité pre zníženie opuchov a zlepšenie cirkulácie. Snažte sa tráviť čo najviac času s vyvýšenými nohami, najmä počas prvých dní po operácii. Dôležitá je aj hydratácia."
                }
              </p>
              <h3 className={listItemClassName2}>Pohybový režim</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď je dôležitý odpočinok, rovnako dôležitý je aj pohyb. Krátke prechádzky po dome môžu pomôcť zlepšiť cirkuláciu a znížiť riziko krvných zrazenín. Vyhnite sa však dlhému státiu alebo sedeniu."
                }
              </p>
              <h2 className={listItemClassName}>Dlhodobá rekonvalescencia</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-7 max-[921px]:mb-8">
                {
                  "Rekonvalescencia po operácii kŕčových žíl je proces, ktorý môže trvať niekoľko týždňov až mesiacov, závisí od typu operácie (stripping - dlhšie). Tu sú kľúčové aspekty dlhodobej rekonvalescencie:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Nosenie kompresných pančúch a úžívanie diosmínu"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú neoddeliteľnou súčasťou liečby po operácii kŕčových žíl. Pomáhajú zlepšovať cirkuláciu, znižujú opuchy a podporujú hojenie. Váš lekár vám povie, ako dlho a kedy ich máte nosiť. Po operácii sa odporúča užívať lieky s obsahom diosmínu a hesperidínu (Detralex, Fluxoven)."
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
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <span className="[color:inherit] font-bold break-words">
                  <strong className="[color:inherit] break-words">
                    {"Pre nákup Detralexu 500 mg cez E-SHOP kliknite:" + " "}
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
                    {"," + " "}
                    <u className="break-words">
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="https://www.mojalekaren.sk/detralex-60-filmom-obalenych-tabliet/?cjdata=MXxZfDB8WXww&utm_source=cj&utm_medium=affiliate&utm_campaign=varixyporadenstvo&utm_content=100721030&cjevent=fc5a77fc2a5c11f081ac00410a18b8f7"
                        className="[color:inherit] break-words"
                      >
                        {"MOJALEKÁREŇ"}
                      </a>
                    </u>
                    {"."}
                  </strong>
                </span>
              </p>
              <h3 className={listItemClassName2}>
                {"Postupný návrat k aktivitám"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Postupne zvyšujte úroveň svojej fyzickej aktivity. Začnite s krátkymi prechádzkami a postupne predlžujte vzdialenosť a čas. Vyhnite sa náročným cvičeniam alebo zdvíhaniu ťažkých predmetov, kým vám to lekár nepovolí."
                }
              </p>
              <h3 className={listItemClassName2}>Starostlivosť o pokožku</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Udržiavajte pokožku na nohách hydratovanú, aby ste predišli svrbeniu a suchosti. Vyhnite sa však nanášaniu krémov priamo na rany, kým sa úplne nezahoja."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Sledovanie príznakov komplikácií"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Buďte pozorní k akýmkoľvek nezvyčajným príznakom, ako je zvýšená bolesť, začervenanie, opuch alebo horúčka. Tieto môžu byť známkami infekcie alebo iných komplikácií a vyžadujú si okamžitú lekársku pozornosť."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Životný štýl a prevencia recidívy"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po úspešnej operácii a rekonvalescencii je dôležité udržiavať zdravý životný štýl, aby ste predišli opätovnému výskytu kŕčových žíl:"
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
                      {"Nosenie kompresných pančúch"}
                    </strong>
                    {
                      ": Aj po zotavení môže byť vhodné nosiť kompresné pančuchy, najmä pri dlhom státí alebo sedení."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
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
                      {"Môžem sa vrátiť do práce hneď po operácii?" + " "}
                    </strong>
                    {
                      "To závisí od typu práce a odporúčaní lekára. Väčšinou sa odporúča minimálne týždeň odpočinku a postupné vrátenie do pracovných povinností. Sedavé zamestnania môžu vyžadovať kratšiu rekonvalescenciu než fyzicky náročné práce."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Rekonvalescencia po operácii kŕčových žíl je dôležitým obdobím, ktoré si vyžaduje trpezlivosť, starostlivosť a pozitívny postoj. Dodržiavajte pokyny lekára, vyhľadávajte podporu od blízkych a postupne sa vráťte k bežnému životu. Pamätajte, že každý pacient je individuálny a zotavovanie môže prebiehať v rôznych fázach."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Správnou starostlivosťou a dodržiavaním zdravého životného štýlu môžete nielen úspešne zvládnuť rekonvalescenciu, ale aj výrazne znížiť riziko opätovného výskytu kŕčových žíl v budúcnosti. Vaše nohy vám za to poďakujú lepšou funkčnosťou, vzhľadom a celkovým pocitom pohody."
                }
              </p>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-3 lg:col-end-6 lg:row-start-5 lg:row-end-6">
            <div
              id="zAska0"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.jdoqocy.com/click-100810134-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fdetralex-1000-mg-peroralna-suspenzia-vo-vrecku-30-kusov%2F&cjsku=459157" target="_top"><img src="/external-assets/c3140789896a5116.jpg" border="0" alt="DETRALEX 1000 mg peror�lna suspenzia vo vrecku 30 kusov"></a><img src="/external-assets/914f78a89b87889a.gif" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
