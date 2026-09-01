const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId ake-su-dlhodobe-prinosy-liecby-krcovych-zil-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
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

type ListItem4Props = {
  text: string;
  separator?: string;
};

function ListItem4({ text, separator }: ListItem4Props) {
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
    text: "So správnou liečbou a starostlivosťou môžete opäť získať zdravé a krásne nohy. Vaše nohy vám poďakujú - a možno si konečne budete môcť užiť dlhú prechádzku bez toho, aby ste sa cítili, akoby ste mali na nohách betónové topánky.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že liečba kŕčových žíl nie je jednorazová záležitosť, ale skôr dlhodobý proces. Vyžaduje si trpezlivosť, odhodlanie a spoluprácu s vaším lekárom. Ale výsledky stoja za to! Či už ide o úľavu od bolesti, zlepšenie vzhľadu vašich nôh, alebo prevenciu vážnych zdravotných komplikácií, investícia do liečby kŕčových žíl sa vám mnohonásobne vráti.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Takže nabudúce, keď sa pozriete na svoje nohy a uvidíte mapu metra, nezúfajte. Namiesto toho si predstavte, aké by to bolo, keby ste mohli opäť nosiť krátke nohavice s hrdosťou, prechádzať sa po pláži bez únavy, alebo tancovať celú noc bez bolesti. To všetko je možné s správnou liečbou kŕčových žíl.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Nezabudnite, že vaše zdravie je to najcennejšie, čo máte. Tak prečo nedať vašim nohám šancu znova žiariť? Začnite svoju cestu k zdravším nohám dnes - vaše budúce ja vám poďakuje!",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: 'A kto vie? Možno sa stanete takou inšpiráciou pre ostatných, že budete musieť založiť fanklub "Bývalých majiteľov kŕčových žíl". Len si predstavte tie tričká: "Moje žily boli kŕčové, ale ja som bol tvrdohlavejší!"',
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Tak do toho, dajte svojim žilám poriadnu lekciu a užite si všetky dlhodobé prínosy, ktoré liečba kŕčových žíl prináša. Vaše nohy sú pripravené na nové dobrodružstvá!",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Sedavé zamestnanie a kŕčové žily",
    text_1:
      ' - Ak je vaša obľúbená športová disciplína "maratón za počítačom", vaše žily môžu protestovať.',
  },
  {
    text: "Tehotenstvo a kŕčové žily",
    text_1: ' - Ďalší "bonus" tehotenstva, o ktorom vám možno zabudli povedať.',
  },
  {
    text: "Obezita a kŕčové žily",
    text_1: " - Extra kilá znamenajú extra tlak na vaše úbohé žily.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1: " - Ak vaše nohy začínajú pripomínať mapu Amazónie, máme problém.",
  },
  {
    text: "Bolesť nôh od kolien dolu",
    text_1: " - Akoby ste celý deň nosili betónové topánky.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      " - Ak vaše členky vyzerajú ako nafúknuté balóny, nie je to dobré znamenie.",
  },
  {
    text: "Svrbenie nôh v noci",
    text_1: " - Vítajte v klube nočných škrabkáčov!",
  },
  {
    text: "Bolesti svalov dolných končatín",
    text_1: " - Akoby vaše lýtka chceli vytvoriť vlastnú rockovú kapelu.",
  },
];

export const items4: ListItem4Props[] = [
  { text: "Menej viditeľné žily" },
  { text: "Rovnomernejšiu farbu pokožky" },
  { text: "Celkovo mladší vzhľad nôh" },
];

export const items5: ListItem4Props[] = [
  { text: "Väčšiu chuť k pohybu" },
  { text: "Lepšiu vytrvalosť pri chôdzi alebo státí" },
  { text: "Zvýšenú energiu a vitalitu" },
];

export const items6: ListItem4Props[] = [
  {
    text: "Vyhnite sa dlhému státiu alebo sedeniu - Ak musíte dlho stáť alebo sedieť, robte si pravidelné prestávky na pohyb.",
  },
  {
    text: "Noste pohodlnú obuv - Vaše nohy nie sú Popoluškine, nemusia sa vtesnať do sklenenej črievičky.",
  },
  {
    text: "Zdvíhajte nohy - Keď odpočívate, zdvihnite nohy nad úroveň srdca. Je to ako gravitačná joga pre vaše žily.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zLLSR4"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Aké sú dlhodobé prínosy liečby kŕčových žíl?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte dlhodobé prínosy liečby kŕčových žíl v tomto komplexnom sprievodcovi. Od úľavy od bolesti cez zlepšenie cievnej funkcie až po prevenciu komplikácií - zistite, ako liečba kŕčových žíl môže výrazne zlepšiť kvalitu vášho života. Získajte informácie o rôznych možnostiach liečby, starostlivosti po zákroku a prevencii návratu kŕčových žíl."
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
        id="zJU_iA"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(10368px,auto)_1fr] max-lg:px-4 lg:min-h-[422.1875rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(6024px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zhtSZG"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a man laying in a large pool of water"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a man laying in a large pool of water"
                  src="/external-assets/308d01d71952907c.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a man laying in a large pool of water"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a man laying in a large pool of water"
                  src="/external-assets/d75462d4587ced42.jpg"
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
              id="z6o8Vd"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Vitajte vo svete kŕčových žíl, kde naše nohy občas pripomínajú mapu metra! Ak ste niekedy mali pocit, že vaše" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "žily na nohách"}
                </strong>{" "}
                {
                  "sa rozhodli ísť na dobrodružnú výpravu, ste na správnom mieste. Dnes sa pozrieme na to, prečo sa oplatí dať svojim neposlušným žilám poriadnu lekciu a aké dlhodobé výhody z toho môžete vyťažiť."
                }
              </p>
              <h2 className={listItemClassName}>Čo sú vlastne kŕčové žily?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Predtým, ako sa ponoríme do sveta liečby, poďme si najprv vysvetliť, čo sú to tie záhadné" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kŕčové žily na nohách"}
                </strong>
                {". Predstavte si, že vaše žily sú ako vodné potrubie vo vašom tele." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kŕčové žily"}
                </strong>
                {", odborne nazývané" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "varixy"}
                </strong>
                {
                  ", sú ako tie úseky potrubia, ktoré sa rozhodli, že gravitácia je len odporúčanie a krv v nich začne stagnovať. Výsledok? Vystúpené, kľukaté žily, ktoré môžu spôsobovať viac problémov, ako len estetické obavy."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Prečo vznikajú kŕčové žily?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko dôvodov, prečo sa naše žily rozhodnú rebelovať:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      'Genetika - Áno, môžete "poďakovať" svojim rodičom aj za toto dedičstvo!'
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Vek - Čím viac sviečok na torte, tým väčšia šanca na žilnú párty."
                    }
                  </p>
                </li>
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
                      {"Životný štýl a kŕčové žily" + " "}
                    </strong>
                    {
                      "- Fajčenie, nadmerná konzumácia alkoholu a nedostatok pohybu sú ako pozvánka na žilnú párty."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Príznaky kŕčových žíl</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ako zistíte, že máte kŕčové žily? Tu je niekoľko príznakov:"}
              </p>
              <ul className="break-words my-0">
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
                      {"Hyperpigmentácia na nohách" + " "}
                    </strong>
                    {
                      "- Ak sa vaše nohy rozhodli experimentovať s novými odtieňmi, môže ísť o príznak pokročilého štádia kŕčových žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Dlhodobé prínosy liečby kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď vieme, s čím máme do činenia, poďme sa pozrieť na to, prečo sa oplatí investovať do liečby kŕčových žíl. Spoiler alert: nie je to len o tom, aby ste mohli opäť nosiť krátke nohavice bez obáv!"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Úľava od bolesti a nepohodlia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Prvým a najzrejmejším prínosom liečby kŕčových žíl je úľava od bolesti a nepohodlia." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Bolesť kŕčových žíl"}
                </strong>{" "}
                {"môže byť únavná a obmedzujúca. Liečba môže výrazne zmierniť:"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Bolesť nôh od kolien dole"}
                    </strong>
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Pocit ťažkých nôh"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Svrbenie nôh"}
                    </strong>
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Opuchanie nôh"}
                    </strong>
                  </p>
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že by ste sa mohli opäť venovať svojim obľúbeným aktivitám bez toho, aby vás nohy brzdili. Znie to ako sen, však?"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Zlepšenie cievnej funkcie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba kŕčových žíl nie je len o kozmetických úpravách. Ide o zlepšenie celkovej funkcie vašich žíl. Je to ako generálka vášho žilového systému. Výsledkom je:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Lepší krvný obeh"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Znížené riziko" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "žilovej trombózy"}
                    </strong>
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Prevencia vzniku" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "vredu predkolenia"}
                    </strong>
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>3. Prevencia komplikácií</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily nie sú len estetický problém. Ak sa neliečia, môžu viesť k vážnym komplikáciám. Liečba pomáha predchádzať:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zápalu žíl" + " "}
                    </strong>
                    {"(flebitída)"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hlbokej žilovej trombóze"}
                    </strong>
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Krvácaniu"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vredu predkolenia"}
                    </strong>
                  </p>
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je to ako poistka pre vaše nohy - investujete teraz, aby ste predišli väčším problémom v budúcnosti."
                }
              </p>
              <h3 className={listItemClassName2}>4. Estetické zlepšenie</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Priznajme si, že aj keď zdravie je prvoradé, nie je na škodu, ak naše nohy vyzerajú dobre. Liečba kŕčových žíl môže výrazne zlepšiť vzhľad vašich nôh. Môžete sa tešiť na:"
                }
              </p>
              <ul className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Budete môcť opäť s hrdosťou nosiť krátke nohavice alebo sukne!"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"5. Zlepšenie pohyblivosti a kvality života"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily môžu výrazne obmedziť vašu pohyblivosť a ovplyvniť kvalitu života. Liečba môže priniesť:"
                }
              </p>
              <ul className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že by ste mohli celý deň chodiť po meste bez toho, aby vás nohy boleli. Alebo si užiť dlhú prechádzku v prírode bez obáv z opuchnutých členkov. To všetko je možné s správnou liečbou kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Možnosti liečby kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď vieme, prečo sa oplatí liečiť kŕčové žily, poďme sa pozrieť na to, aké možnosti máme k dispozícii:"
                }
              </p>
              <h3 className={listItemClassName2}>1. Konzervatívna liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Táto metóda je ako jemné presviedčanie vašich žíl, aby sa správali slušne:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy" + " "}
                    </strong>
                    {"- Sú ako objatie pre vaše nohy. Pomáhajú zlepšovať cirkuláciu a zmierňovať opuchy. Môžete si vybrať" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "kompresné pančuchy Dr. Max"}
                    </strong>{" "}
                    {"alebo iné značky."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Cviky na kŕčové žily" + " "}
                    </strong>
                    {
                      "- Pravidelné cvičenie pomáha zlepšovať cirkuláciu. Skúste chôdzu, plávanie alebo jogu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Elevácia nôh - Dajte svojim nohám šancu odpočinúť si nad úrovňou srdca."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>2. Medikamentózna liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Niekedy potrebujú vaše žily trochu farmakologickej podpory:"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Lieky na kŕčové žily" + " "}
                    </strong>
                    {
                      "- Existujú rôzne lieky, ktoré môžu pomôcť posilniť žilové steny a zlepšiť cirkuláciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Diosmín" + " "}
                    </strong>
                    {
                      "- Tento flavonoid je často používaný na zlepšenie žilového zdravia."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"3. Minimálne invazívne zákroky"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Keď konzervatívna liečba nestačí, máme v zálohe sofistikovanejšie metódy:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Sklerotizácia kŕčových žíl" + " "}
                    </strong>
                    {
                      "- Vpichnutie špeciálnej látky do žily, ktorá ju uzavrie. Je to ako poslať vaše kŕčové žily na nútený dôchodok."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Laserová operácia kŕčových žíl" + " "}
                    </strong>
                    {
                      "- Použitie laseru na uzavretie postihnutých žíl. Je to ako sci-fi film, ale pre vaše nohy!"
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Rádiofrekvenčná ablácia varixov" + " "}
                    </strong>
                    {
                      "- Využitie tepelnej energie na uzavretie kŕčových žíl. Je to ako miniatúrna sauna pre vaše žily."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>4. Chirurgická liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"V najzávažnejších prípadoch môže byť potrebná operácia:"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Odstránenie kŕčových žíl" + " "}
                    </strong>
                    {"- Chirurgické odstránenie postihnutých žíl."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Stripping - Odstránenie dlhého úseku postihnutej žily."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Starostlivosť po liečbe kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Rekonvalescencia po operácii" + " "}
                </strong>
                {
                  "kŕčových žíl je kľúčová pre dlhodobý úspech liečby. Tu je niekoľko tipov:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Noste" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "kompresné pančuchy"}
                    </strong>{" "}
                    {"podľa pokynov lekára."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Postupne zvyšujte svoju aktivitu, ale vyhnite sa namáhavým činnostiam."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Zdvíhajte nohy nad úroveň srdca, keď odpočívate."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Sledujte príznaky možných komplikácií, ako je" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "svrbenie rany po operácii"}
                    </strong>{" "}
                    {"alebo nadmerná bolesť."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Dodržiavajte všetky pokyny vášho lekára ohľadom" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "starostlivosti o nohy po operácii kŕčových žíl"}
                    </strong>
                    {"."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Prevencia návratu kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aby ste si udržali dlhodobé výhody liečby kŕčových žíl, je dôležité dodržiavať niekoľko preventívnych opatrení:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Udržujte zdravú hmotnosť - Každé kilo navyše je extra záťaž pre vaše žily."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {"Buďte aktívni - Pravidelný pohyb je kľúčový pre zdravie vašich žíl." +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Chôdza a kŕčové žily"}
                    </strong>{" "}
                    {"sú prirodzení nepriatelia!"}
                  </p>
                </li>
                {items6.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Sledujte svoj životný štýl -" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Fajčenie a kŕčové žily"}
                    </strong>
                    {"," + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "alkohol a kŕčové žily"}
                    </strong>
                    {", či" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "stres a kŕčové žily"}
                    </strong>{" "}
                    {"nie sú dobrí kamaráti."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <h3 className={listItemClassName2}>
                {"Môžu sa kŕčové žily vrátiť po liečbe?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Áno, existuje možnosť, že sa kŕčové žily vrátia aj po liečbe. Preto je dôležité dodržiavať preventívne opatrenia a pravidelne navštevovať svojho lekára."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Ako dlho trvá zotavenie po operácii kŕčových žíl?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Doba zotavenia závisí od typu zákroku a individuálnych faktorov. Vo všeobecnosti môže trvať od niekoľkých dní do niekoľkých týždňov. Váš lekár vám poskytne podrobné pokyny pre" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "rekonvalescenciu po operácii"}
                </strong>
                {"."}
              </p>
              <h3 className={listItemClassName2}>
                {"Sú výsledky liečby kŕčových žíl trvalé?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Výsledky liečby môžu byť dlhodobé, ale nie sú nevyhnutne trvalé. Pravidelná starostlivosť a prevencia sú kľúčové pre udržanie dobrých výsledkov."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Môžem cvičiť s kŕčovými žilami?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Áno, cvičenie je vlastne odporúčané pre ľudí s kŕčovými žilami. Aktivity ako" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "plávanie a kŕčové žily"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "joga pre kŕčové žily"}
                </strong>{" "}
                {
                  "môžu byť veľmi prospešné. Vždy sa však poraďte so svojím lekárom o vhodnom cvičebnom režime."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba kŕčových žíl nie je len o kozmetických úpravách. Je to investícia do vášho dlhodobého zdravia a pohody. Od úľavy od bolesti cez zlepšenie cievnej funkcie až po prevenciu vážnych komplikácií - prínosy sú mnohostranné a významné."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Pamätajte, že každý prípad je individuálny. To, čo funguje pre vášho suseda, nemusí byť najlepšie pre vás. Preto je dôležité konzultovať svoj stav s" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "angiológom"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "cievnym chirurgom"}
                </strong>{" "}
                {"a nájsť riešenie, ktoré bude vyhovovať práve vám."}
              </p>
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
