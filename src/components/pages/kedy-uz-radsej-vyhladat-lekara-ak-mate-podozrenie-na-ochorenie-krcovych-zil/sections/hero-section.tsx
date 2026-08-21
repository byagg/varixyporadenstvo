const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

/**
 * @ployComponent
 * @ployComponentId kedy-uz-radsej-vyhladat-lekara-ak-mate-podozrenie-na-ochorenie-krcovych-zil-hero-section
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

type ListItem6Props = {
  className: string;
  text: string;
};

function ListItem6({ className, text }: ListItem6Props) {
  return <p className={className}>{text}</p>;
}

type ListItem8Props = {
  text_1: string;
  text_3: string;
  separator?: string;
};

function ListItem8({ text_1, text_3, separator }: ListItem8Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          <strong className="[color:inherit] break-words">
            {"Mýtus" + " "}
          </strong>
          {text_1}
          <strong className="[color:inherit] break-words">
            {" " + "Fakt"}
          </strong>
          {text_3}
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  {
    text: "Viditeľné kŕčové žily",
    text_1:
      ': Toto je ten najočividnejší príznak. Ak vaše nohy začínajú pripomínať mapu Amazonky, je čas spozornieť. Tieto žily sú často vyčnievajúce a môžu mať modrú alebo fialovú farbu. Je to, akoby vaše žily chceli upútať pozornosť a kričali: "Hej, tu sme! Všimni si nás!"',
  },
  {
    text: "Bolestivé a unavené nohy",
    text_1:
      ": Ak vaše nohy po bežnej prechádzke protestujú, akoby ste práve zdolali Mont Everest, môže to byť signál problémov s kŕčovými žilami. Bolesť a únava v nohách počas bežných aktivít, ako je chôdza či státie, by nemali byť ignorované. Je to, ako keby vaše nohy držali štrajk a žiadali lepšie pracovné podmienky.",
  },
  {
    text: "Opuchy a pocit ťažkosti",
    text_1:
      ": Keď sa vaše nohy začnú správať ako balóny na párty a vy máte pocit, že ťaháte za sebou betónové kvádre, je to ďalší signál, že by ste mali vyhľadať odbornú pomoc. Tieto príznaky môžu byť výsledkom problémov s obehovým systémom. Je to, akoby vaše nohy zadržiavali vodu ako ťava pred dlhou cestou púšťou.",
  },
  {
    text: "Pocit pálenia alebo svrbenia",
    text_1:
      ': Ak máte pocit, že vaše nohy práve absolvovali kurz chôdze po žeravom uhlí, alebo že ste omylom vstúpili do mraveniska, môže to súvisieť s ochorením kŕčových žíl. Tieto nepríjemné pocity sú ako alarm vášho tela, ktorý vám hovorí: "Hej, tu sa niečo deje!"',
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Rodinná anamnéza",
    text_1:
      ": Ak vaši rodičia alebo starí rodičia mali kŕčové žily, môžete mať väčšie riziko ich vzniku. Je to, akoby vám vaši predkovia zanechali nechcené dedičstvo. Ale nebojte sa, nie je to rozsudok - len upozornenie, že by ste mali byť ostražitejší.",
  },
  {
    text: "Vek",
    text_1:
      ": S pribúdajúcimi rokmi sa zvyšuje pravdepodobnosť výskytu kŕčových žíl. Je to ako s autom - čím je staršie, tým väčšia je šanca, že bude potrebovať opravu. Ale pamätajte, že vek je len číslo a s proper starostlivosťou môžete udržať svoje žily v dobrej kondícii.",
  },
  {
    text: "Pohlavie",
    text_1:
      ": Ženy majú väčšie riziko vzniku kŕčových žíl ako muži. Je to spôsobené hormonálnymi zmenami, ktoré ovplyvňujú cievny systém. Dámy, neberte to osobne - je to len ďalší dôkaz, že ste zložitejšie a zaujímavejšie ako muži!",
  },
  {
    text: "Nadváha",
    text_1:
      ": Prebytočné kilogramy môžu narúšať krvný obeh a zvyšovať tlak na žily. Je to, akoby ste sa snažili pretlačiť cez preplnenú metro v špičke - čím viac ľudí, tým ťažšie sa pohybuje. Dobrá správa je, že zníženie hmotnosti môže výrazne pomôcť.",
  },
];

export const items3: ListItemProps[] = [
  {
    text: "Ak sa príznaky zhoršujú",
    text_1:
      ": Ak vaše nohy spievajú čoraz hlasnejšiu pieseň bolesti a nepohodlia, je čas navštíviť dirigenta orchestra - vášho lekára. Nezabudnite, že ignorovanie problému ho nevyrieši, môže ho len zhoršiť.",
  },
  {
    text: "Ak máte silnú bolesť",
    text_1:
      ": Ak bolesť v nohách pripomína skôr výstup na Everest ako prechádzku v parku, je čas na okamžitú konzultáciu s lekárom. Vaše telo vám môže kričať do ucha, že niečo nie je v poriadku.",
  },
  {
    text: "Ak sa vyskytnú komplikácie",
    text_1:
      ": Ak sa objavia komplikácie ako bolestivé opuchy, vredy, krvácanie alebo zápaly, je to ako keď sa rozsvieti červené svetlo na palubnej doske vášho auta - ignorovať to môže viesť k vážnym problémom. V takom prípade neváhajte a ihneď navštívte lekára.",
  },
];

export const items4: ListItemProps[] = [
  {
    text: "Skleroterapia",
    text_1:
      ": Pri tejto metóde sa do žíl vstrekuje špeciálny roztok, ktorý spôsobí ich zatvrdnutie a postupné vstrebanie. Je to ako keby ste poslali malú armádu do boja proti neposlušným žilám.",
  },
  {
    text: "Laserová terapia",
    text_1:
      ": Táto metóda používa silné záblesky svetla na uzavretie menších žíl. Je to ako keby ste použili svetelný meč na boj proti Sithom vo vašich žilách (prepáčte za nerdovskú narážku, nemohol som odolať).",
  },
  {
    text: "Rádiofrekvenčná ablácia",
    text_1:
      ": Táto metóda používa rádiové vlny na zahrievanie a uzatváranie väčších kŕčových žíl. Je to ako keby ste poslali mikrovlnné žiarenie do vašich žíl - ale nebojte sa, je to bezpečné a účinné.",
  },
];

export const items5: ListItemProps[] = [
  {
    text: "Hýbte sa",
    text_1:
      ": Pravidelný pohyb je ako WD-40 pre vaše žily. Pomáha udržiavať krvný obeh v dobrej kondícii. Nemusíte hneď behať maratóny - stačí pravidelná prechádzka alebo plávanie.",
  },
  {
    text: "Udržujte zdravú hmotnosť",
    text_1:
      ": Čím menej nadváhy, tým menší tlak na vaše žily. Je to ako keď odľahčíte náklad na nákladnom aute - hneď sa mu ľahšie jazdí.",
  },
  {
    text: "Noste pohodlné oblečenie",
    text_1:
      ": Tesné nohavice môžu byť štýlové, ale vašim žilám sa príliš nepáčia. Je to ako keby ste sa snažili pretlačiť cez úzku uličku v preplnenom autobuse - nie je to príjemné a môže to spôsobiť problémy.",
  },
  {
    text: "Dávajte si prestávky",
    text_1:
      ": Ak máte sedavé zamestnanie, snažte sa pravidelne vstávať a prechádzať sa. Je to ako keď reštartujete počítač - občas to potrebuje, aby všetko fungovalo hladko.",
  },
];

export const textSegments: ListItem6Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Kŕčové žily môžu byť nepríjemné, ale netreba sa ich báť. So správnou starostlivosťou, včasnou diagnózou a liečbou môžete udržať svoje žily (a nohy) v dobrej kondícii. Pamätajte, že vaše zdravie je dôležité a ak máte akékoľvek podozrenie na problémy s kŕčovými žilami, neváhajte navštíviť lekára.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
    text: "Dúfame, že tento článok vám poskytol užitočné informácie a pomohol vám lepšie porozumieť ochoreniu kŕčových žíl. Pamätajte, že vaše žily sú ako riečny systém vo vašom tele - potrebujú správnu starostlivosť, aby mohli plynulo tiecť. Tak sa o ne starajte a oni sa vám odvďačia zdravým a bezproblémovým tokom.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: 'A nezabudnite - aj keď vaše žily občas "vybočia z radu", stále sú súčasťou vášho úžasného tela, ktoré každý deň robí neuveriteľné veci. Tak im doprajte trochu lásky a pozornosti. Vaše nohy (a žily) vám poďakujú!',
  },
];

export const items7: ListItemProps[] = [
  {
    text: "Používajte kompresné pančuchy",
    text_1:
      ": Áno, viem, nie sú to práve najsexy kúsky oblečenia, ale verte mi, vaše žily vám budú vďačné. Je to ako dať vašim nohám poriadne objatie na celý deň.",
  },
  {
    text: "Zdvíhajte nohy",
    text_1:
      ": Keď máte možnosť, zdvihnite si nohy nad úroveň srdca. Je to ako dať vašim žilám malú dovolenku - nebudú musieť tak tvrdo pracovať proti gravitácii.",
  },
  {
    text: "Vyhýbajte sa dlhému státiu alebo sedeniu",
    text_1:
      ": Ak musíte dlho stáť alebo sedieť, snažte sa aspoň občas pohybovať nohami. Je to ako malé cvičenie pre vaše žily.",
  },
  {
    text: "Používajte chladné obklady",
    text_1:
      ": Ak máte opuchy alebo bolesť, chladné obklady môžu pomôcť. Je to ako dať vašim nohám osviežujúcu sprchu zvnútra.",
  },
];

export const items8: ListItem8Props[] = [
  {
    text_1: ": Kŕčové žily sú len kozmetický problém. ",
    text_3:
      ": Hoci kŕčové žily môžu byť esteticky nepríjemné, môžu tiež spôsobovať zdravotné problémy a mali by byť brané vážne.",
  },
  {
    text_1: ": Kŕčové žily postihujú len starších ľudí. ",
    text_3:
      ": Hoci riziko sa s vekom zvyšuje, kŕčové žily môžu postihnúť ľudí v akomkoľvek veku.",
  },
  {
    text_1: ": Cvičenie zhorší kŕčové žily. ",
    text_3:
      ": Naopak, správne cvičenie môže pomôcť zlepšiť cirkuláciu a zmierniť príznaky kŕčových žíl.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z_OFdH"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Kedy už radšej vyhľadať lekára, ak máte podozrenie na ochorenie kŕčových žíl?"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento komplexný článok sa zaoberá problematikou kŕčových žíl, ich príznakmi, diagnostikou a liečbou. Poskytuje odborné informácie o tom, kedy vyhľadať lekársku pomoc pri podozrení na ochorenie kŕčových žíl, a zároveň ponúka praktické rady pre prevenciu a život s týmto ochorením. Článok je určený pre širokú verejnosť a kombinuje medicínske poznatky s ľahko zrozumiteľným výkladom."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">9 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zgtTLq"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(10530px,auto)_1fr] max-lg:px-4 lg:min-h-[343.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_22.6307%_20.9967%_22.7124%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(4579px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zh9pnc"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a woman in a white coat"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a woman in a white coat"
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=328&h=439"
                  height="344"
                  width="257"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a woman in a white coat"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a woman in a white coat"
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=360&h=351"
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
              id="zO9YMw"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Vitajte, milí čitatelia! Dnes sa spolu ponoríme do fascinujúceho sveta našich žíl, konkrétne tých neposlušných, ktoré sa rady "nafukujú" a robia nám vrásky na čele (a opuchy na nohách). Áno, hovoríme o kŕčových žilách, tých malých rebeloch nášho cievneho systému. Ale nebojte sa, nie je to len o estetike - ide o vaše zdravie. Takže si pohodlne sadnite (ale nie na príliš dlho, lebo... však viete) a poďme sa pozrieť, kedy je čas prestať ignorovať tie "mapky" na vašich nohách a navštíviť odborníka.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú to vlastne kŕčové žily a prečo sa tvoria?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Najprv si urobme malý výlet do sveta anatómie." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kŕčové žily"}
                </strong>
                {", odborne nazývané" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "varixy"}
                </strong>
                {
                  ", sú rozšírené, pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Predstavte si ich ako riečne meandre na mape vašich nôh. Ale prečo sa vlastne tvoria?"
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Žily v našich nohách majú neľahkú úlohu - musia pumpovať krv späť k srdcu proti gravitácii. Je to ako snažiť sa vytlačiť vodu z podzemného parkoviska na strechu mrakodrapu pomocou starého vedra. Aby to zvládli, majú žily vo vnútri malé chlopne, ktoré fungujú ako jednosmerné ventily. Keď tieto chlopne zoslabnú alebo sa poškodia, krv sa začne hromadiť v žilách, čo vedie k ich rozšíreniu a vzniku kŕčových žíl."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príznaky ochorenia kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď už vieme, čo sú kŕčové žily, poďme sa pozrieť na príznaky, ktoré by ste nemali ignorovať. Je to ako detektívka - hľadáme stopy, ktoré nám naše telo zanecháva."
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
                      {"Zmeny v koži"}
                    </strong>
                    {
                      ": Ak sa koža na vašich nohách začne správať ako chameleón a mení farbu na žltú alebo hnedú, alebo sa objavia vredy či zápaly, je to vážny indikátor, že by ste mali vyhľadať lekára. Je to, akoby vaša koža písala S.O.S. správu, ktorú by ste rozhodne nemali ignorovať."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Rizikové faktory ochorenia kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď sme si prešli príznaky, poďme sa pozrieť na rizikové faktory. Je to ako v detektívke - hľadáme podozrivých, ktorí by mohli byť zodpovední za vznik kŕčových žíl."
                }
              </p>
              <ol className="break-words my-0">
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
                      {"Sedavý životný štýl"}
                    </strong>
                    {
                      ": Ak je vaše telo častejšie v horizontálnej polohe ako vertikálnej, môže to prispieť k tvorbe kŕčových žíl. Dlhodobé sedenie je ako dopravná zápcha pre vaše žily - krv sa hromadí a nemôže plynulo cirkulovať."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Kedy vyhľadať odbornú pomoc</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď sme si prešli príznaky a rizikové faktory, poďme sa pozrieť na to, kedy je ten správny čas zavolať S.O.S. a vyhľadať odbornú pomoc. Je to ako vedieť, kedy je čas zavolať hasičov, keď vám horí v kuchyni - niekedy stačí ventilácia, inokedy potrebujete profesionálnu pomoc."
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
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Ak máte problémy so spánkom"}
                    </strong>
                    {": Ak vás vaše nohy nenechajú v noci spať a máte pocit, že ste sa stali nedobrovoľným účastníkom nočného maratónu, môže to byť príznak" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "syndrómu nepokojných nôh"}
                    </strong>
                    {
                      ", ktorý často súvisí s problémami žilového systému. V takom prípade by ste mali navštíviť lekára, aby vám pomohol nájsť cestu späť do krajiny sladkých snov."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Ak sa objaví náhly opuch"}
                    </strong>
                    {": Ak sa vaša noha z ničoho nič rozhodne napodobniť balón a rýchlo opuchne, môže to byť príznak" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "hlbokej žilovej trombózy"}
                    </strong>
                    {
                      ". Toto je skutočne urgentný stav, ktorý vyžaduje okamžitú lekársku pozornosť. Je to ako keď zrazu začujete sirénu - neignorujte ju!"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Diagnostika a liečba kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Keď sa rozhodnete navštíviť lekára, čo vás čaká? Nebojte sa, nie je to ako výsluch u detektíva Colomba. Skôr si to predstavte ako detektívku, kde vy a váš lekár spoločne riešite záhadu vašich žíl."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Diagnostika"}
              </h3>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Fyzické vyšetrenie"}
                    </strong>
                    {
                      ": Lekár si najprv pozrie vaše nohy. Je to ako keď automechanik otvorí kapotu auta - snaží sa zistiť, čo sa deje pod povrchom."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Duplexná ultrasonografia"}
                    </strong>
                    {
                      ": Toto je ako röntgenové videnie pre vaše žily. Pomocou zvukových vĺn lekár môže vidieť, ako krv prúdi vašimi žilami. Je to ako sledovať dopravnú situáciu v reálnom čase."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Venografia"}
                    </strong>
                    {
                      ": V niektorých prípadoch môže byť potrebné použiť kontrastnú látku, aby sa žily lepšie zobrazili na röntgene. Je to ako keď pridáte farbu do rieky, aby ste lepšie videli jej tok."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Liečba"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje mnoho spôsobov, ako liečiť kŕčové žily. Od konzervatívnych metód až po chirurgické zákroky. Poďme si ich predstaviť:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresná terapia"}
                    </strong>
                    {": Toto je ako dať vašim žilám poriadne objatie." + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Kompresné pančuchy"}
                    </strong>{" "}
                    {
                      "pomáhajú tlačiť krv späť k srdcu. Je to ako keby ste dali vašim žilám malých pomocníkov, ktorí im pomáhajú s ich prácou."
                    }
                  </p>
                </li>
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
                      {"Chirurgická liečba"}
                    </strong>
                    {": V niektorých prípadoch môže byť potrebná operácia. Najčastejšie sa používa metóda" +
                      " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "strippingu"}
                    </strong>
                    {
                      ", pri ktorej sa poškodená žila odstráni. Je to ako keď vymieňate pokazenú súčiastku v aute."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Prevencia kŕčových žíl</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ako sa hovorí, prevencia je lepšia ako liečba. Tu je niekoľko tipov, ako môžete znížiť riziko vzniku kŕčových žíl:"
                }
              </p>
              <ol className="break-words my-0">
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
                      {"Jedzte zdravo"}
                    </strong>
                    {
                      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a podporiť zdravý krvný obeh. Je to ako keď dáte do svojho auta kvalitné palivo - všetko bude fungovať lepšie."
                    }
                  </p>
                  <h2 className={listItemClassName2}>
                    {"Život s kŕčovými žilami"}
                  </h2>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak už máte diagnostikované kŕčové žily, nebojte sa - nie je to koniec sveta. S proper starostlivosťou a dodržiavaním odporúčaní lekára môžete viesť plnohodnotný život. Tu je niekoľko tipov, ako si uľahčiť každodenný život s kŕčovými žilami:"
                    }
                  </p>
                  <ol className="break-words my-0">
                    {items7.map((item, index) => (
                      <ListItem
                        key={index}
                        {...item}
                        separator={index < items7.length - 1 ? "\n" : ""}
                      />
                    ))}
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                        <strong className="[color:inherit] break-words">
                          {"Buďte opatrní pri holení"}
                        </strong>
                        {
                          ": Ak máte kŕčové žily na nohách, buďte pri holení extra opatrní. Poranenie kŕčovej žily môže viesť k silnému krvácaniu. Je to ako snažiť sa oholiť balón - treba to robiť veľmi jemne a opatrne."
                        }
                      </p>
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                    </li>
                  </ol>
                  <h2 className={listItemClassName2}>
                    {"Mýty a fakty o kŕčových žilách"}
                  </h2>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Existuje mnoho mýtov o kŕčových žilách. Poďme si niektoré z nich vyjasniť:"
                    }
                  </p>
                  <ol className="break-words my-0">
                    {items8.map((item, index) => (
                      <ListItem8
                        key={index}
                        {...item}
                        separator={index < items8.length - 1 ? "\n" : ""}
                      />
                    ))}
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                        <strong className="[color:inherit] break-words">
                          {"Mýtus"}
                        </strong>
                        {": Kŕčové žily sú nevyliečiteľné." + " "}
                        <strong className="[color:inherit] break-words">
                          {" " + "Fakt"}
                        </strong>
                        {
                          ": Existuje mnoho účinných liečebných metód, od konzervatívnych až po chirurgické, ktoré môžu výrazne zlepšiť stav kŕčových žíl."
                        }
                      </p>
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                    </li>
                  </ol>
                  <h2 className={listItemClassName2}>Záver</h2>
                  {textSegments.map((item, index) => (
                    <ListItem6 key={index} {...item} />
                  ))}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
