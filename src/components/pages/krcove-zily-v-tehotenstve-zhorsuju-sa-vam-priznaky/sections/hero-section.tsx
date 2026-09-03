const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

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

type ListItem4Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem4({ text, text_1, separator }: ListItem4Props) {
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
    text: "Kŕčové žily v tehotenstve môžu byť nepríjemné, ale so správnou starostlivosťou a prevenciou môžete zmierniť ich príznaky a minimalizovať ich vplyv na vaše pohodlie. Pamätajte, že každé tehotenstvo je jedinečné, a to, čo funguje pre jednu ženu, nemusí fungovať pre druhú.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Najdôležitejšie je počúvať svoje telo a konzultovať akékoľvek obavy s vaším lekárom. Koniec koncov, vaše zdravie a pohodlie sú kľúčové pre zdravé a šťastné tehotenstvo.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "A nezabudnite, že aj keď vaše žily momentálne robia trochu rozruchu, robíte úžasnú prácu pri vytváraní nového života. Tak si to užite, budúce mamičky! Vaše telo robí niečo neuveriteľné, a ak pri tom vznikne pár kŕčových žíl, no a čo? Berte to ako malé suveníry z vašej cesty materstvom.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Nech už vaše žily robia čokoľvek, vy ste superhrdinky!",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Väčšina foriem liečby kŕčových žíl, ako je skleroterapia alebo laserová terapia, sa neodporúča počas tehotenstva. Je to, akoby ste chceli prerobiť vodovodnú sieť, keď je dom plný hostí - nie je to najlepší nápad.",
  },
  {
    text: "Je dôležité konzultovať s odborníkom na žilové ochorenia alebo gynekológom pred akýmkoľvek liečebným postupom v tehotenstve. Liečba kŕčových žíl v tehotenstve je zameraná na zmiernenie príznakov a zlepšenie pohodlia.",
  },
  { text: "Niektoré bezpečné možnosti liečby počas tehotenstva zahŕňajú:" },
];

export const items3: ListItem3Props[] = [
  { text: "Dedičnosť (ďakujeme, mamička!)" },
  { text: "Obezita (ten extra cheesecake nebol dobrý nápad)" },
  {
    text: "Sedavý životný štýl (áno, sledovanie celej série vášho obľúbeného seriálu v kuse sa počíta)",
  },
];

export const items4: ListItem4Props[] = [
  {
    text: "Väčšia únava a opuchy",
    text_1:
      ": Vaše nohy môžu mať pocit, že práve absolvovali maratón, aj keď ste len išli do kuchyne po ďalšiu porciu zmrzliny.",
  },
  {
    text: "Intenzívnejšie nepohodlie",
    text_1:
      ': Ťažkosť a bolesť v nohách sa môžu zhoršiť po dlhšom období státia alebo chôdze. Je to, akoby vaše nohy kričali: "Hej, dajte nám prestávku!"',
  },
  {
    text: "Svrbenie a pálenie",
    text_1:
      ": Oblasť kŕčových žíl môže svrbieť a páliť intenzívnejšie. Môže to byť také nepríjemné, že budete mať chuť tancovať makarenu uprostred obývačky.",
  },
  {
    text: "Viditeľnejšie žily",
    text_1:
      ': Vaše žily môžu byť výraznejšie viditeľné, akoby chceli všetkým oznámiť: "Pozrite sa na nás, sme tu!"',
  },
];

export const items5: ListItem4Props[] = [
  {
    text: "Noste kompresné pančuchy",
    text_1:
      ": Kompresné pančuchy alebo obväzy môžu pomôcť zlepšiť prietok krvi v nohách a zmierniť opuchy a bolesť. Je to, akoby ste dali vašim žilám jemné objatie.",
  },
  {
    text: "Vyhnite sa dlhému státiu alebo sedeniu",
    text_1:
      ": Pravidelné prestávky na pohyb a zdvíhanie nôh môžu pomôcť udržiavať cirkuláciu krvi a zmierniť nepohodlie. Skúste si predstaviť, že ste baletka - trochu sa pohýbte a potom elegantne zdvihnite nohy.",
  },
  {
    text: "Zdvíhajte nohy",
    text_1:
      ": Keď sedíte alebo ležíte, zdvíhajte nohy nad úroveň srdca, aby sa zlepšil obeh krvi. Je to, akoby ste svojim nohám dávali mini dovolenku.",
  },
  {
    text: "Vykonávajte pravidelné cvičenie",
    text_1:
      ': Špeciálne cvičenia na posilnenie nohových svalov a zlepšenie obehovej sústavy môžu pomôcť zmierniť príznaky. Môžete si predstaviť, že ste dirigent orchestra vašich žíl - každý pohyb pomáha zlepšiť ich "melódiu".',
  },
  {
    text: "Používajte studené obklady",
    text_1:
      ": Studené obklady môžu pomôcť zmierniť opuch a bolesť. Je to ako dať vašim žilám osviežujúcu sprchu zvnútra.",
  },
  {
    text: "Doprajte si masáž",
    text_1:
      ": Jemná masáž nôh môže pomôcť zlepšiť cirkuláciu. Len sa uistite, že masér vie o vašom tehotenstve a kŕčových žilách.",
  },
];

export const items6: ListItem4Props[] = [
  {
    text: "Kompresná terapia",
    text_1:
      ": Nosenie kompresných pančúch alebo ponožiek môže pomôcť zlepšiť cirkuláciu a zmierniť príznaky.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Pravidelné zdvíhanie nôh nad úroveň srdca môže pomôcť zlepšiť cirkuláciu.",
  },
  {
    text: "Cvičenie",
    text_1:
      ": Mierne cvičenie, ako je chôdza alebo plávanie, môže pomôcť zlepšiť cirkuláciu.",
  },
];

export const items7: ListItem4Props[] = [
  {
    text: "Cvičte pravidelne",
    text_1:
      ": Mierne cvičenie, ako chôdza alebo plávanie, môže pomôcť udržiavať zdravý obeh krvi. Predstavte si, že ste dirigent orchestra vašich žíl - každý pohyb pomáha udržiavať ich v harmónii.",
  },
  {
    text: "Uniknite sedavému životnému štýlu",
    text_1:
      ": Vyhnite sa dlhému sedeniu alebo státiu. Pravidelne oddychujte a zdvíhajte nohy. Je to, akoby ste dávali vašim žilám malé prestávky na kávu.",
  },
  {
    text: "Noste kompresné pančuchy",
    text_1:
      ": Kompresné pančuchy môžu pomôcť podporiť správny obeh krvi a zmierniť príznaky. Áno, možno sa nebudete cítiť ako modelka na móle, ale vaše žily vám poďakujú.",
  },
  {
    text: "Zdravá strava",
    text_1:
      ": Zahrňte do svojho jedálnička potraviny bohaté na vlákninu a vitamíny C a E, ktoré pomáhajú udržiavať zdravé cievy. Je to ako dať vašim žilám superpotraviny!",
  },
  {
    text: "Udržujte zdravú hmotnosť",
    text_1:
      ": Nadmerná hmotnosť môže zvýšiť tlak na vaše žily. Pamätajte, že tehotenstvo nie je súťaž v jedení za dvoch!",
  },
  {
    text: "Spite na ľavom boku",
    text_1:
      ": Táto poloha môže pomôcť znížiť tlak na veľkú žilu na pravej strane vášho tela (vena cava), čo môže zlepšiť celkovú cirkuláciu.",
  },
];

export const items8: ListItem4Props[] = [
  {
    text: "Žily na rukách",
    text_1:
      ": Aj keď sú raritné, varixy sa môžu objaviť aj na rukách. Môžu byť viditeľné ako modré alebo fialové zvlnené línie pod kožou.",
  },
  {
    text: "Vulvárne varixy",
    text_1:
      ": Tieto sa môžu vyvinúť v oblasti vulvy (vonkajších pohlavných orgánov ženy) a môžu byť obzvlášť nepríjemné. Našťastie, zvyčajne zmiznú po pôrode.",
  },
  {
    text: "Hemoroidy v oblasti konečníka",
    text_1:
      ": Hoci technicky nie sú kŕčovými žilami, hemoroidy sú podobným typom žilového problému, ktorý sa často vyskytuje počas tehotenstva.",
  },
];

export const items9: ListItem4Props[] = [
  {
    text: "Hlboká žilová trombóza (HŽT)",
    text_1:
      ": Toto je vážny stav, pri ktorom sa v hlbokých žilách vytvorí krvná zrazenina. Príznaky zahŕňajú náhly opuch nohy, bolesť, začervenanie a teplo v postihnutej oblasti.",
  },
  {
    text: "Povrchová tromboflebitída",
    text_1:
      ": Ide o zápal povrchových žíl, ktorý môže byť bolestivý a spôsobiť začervenanie a opuch.",
  },
  {
    text: "Krvácanie",
    text_1:
      ": Ak kŕčová žila praskne a začne krvácať, môže to viesť k významnej strate krvi. Našťastie, toto je zriedkavé.",
  },
  {
    text: "Ulcerácie",
    text_1:
      ": V niektorých prípadoch môžu kŕčové žily viesť k tvorbe vredov na koži, najmä v oblasti členkov.",
  },
  {
    text: "Infekcia",
    text_1: ": Ak sa koža nad kŕčovou žilou poškodí, môže to viesť k infekcii.",
  },
];

export const items10: ListItem4Props[] = [
  {
    text: "Postupné zlepšenie",
    text_1:
      ': Väčšina žien zaznamená značné zlepšenie v priebehu niekoľkých mesiacov po pôrode. Je to ako keď sa vaše telo pomaly vracia do "normálneho režimu".',
  },
  {
    text: "Pretrvávajúce príznaky",
    text_1:
      ": U niektorých žien môžu kŕčové žily pretrvávať aj po tehotenstve. V takom prípade môže byť potrebná ďalšia liečba.",
  },
  {
    text: "Opakované výskyty",
    text_1:
      ": Pri ďalších tehotenstvách sa kŕčové žily môžu vrátiť alebo zhoršiť. Je to ako nechcený návrat nepozvaného hosťa.",
  },
];

export const items11: ListItem4Props[] = [
  {
    text: "Môžem podstúpiť liečbu kŕčových žíl v tehotenstve?",
    text_1:
      " Väčšina invazívnych liečebných postupov sa v tehotenstve neodporúča. Liečba je zameraná hlavne na zmiernenie príznakov a prevenciu komplikácií.",
  },
  {
    text: "Ako dlho trvá zotavenie sa po liečbe kŕčových žíl po tehotenstve?",
    text_1:
      " Dĺžka zotavenia závisí od typu zákroku a individuálnych faktorov. Môže trvať od niekoľkých dní do niekoľkých týždňov.",
  },
  {
    text: "Môže prevencia kŕčových žíl v tehotenstve zabrániť ich vzniku?",
    text_1:
      " Prevencia môže pomôcť znížiť riziko ich vzniku, ale nemôže im úplne zabrániť, najmä ak máte genetické predispozície.",
  },
  {
    text: "Kedy by som mala vyhľadať lekára, ak sa príznaky kŕčových žíl v tehotenstve zhoršujú?",
    text_1:
      " Ak máte silnú bolesť, opuch, začervenanie alebo teplo v nohe, alebo ak máte akékoľvek obavy, vždy je lepšie konzultovať s lekárom.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zjNgOJ"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Kŕčové žily v tehotenstve: Zhoršujú sa vám príznaky?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento rozsiahly článok sa venuje problematike kŕčových žíl počas tehotenstva, ich príčinám, príznakom a možnostiam liečby. Poskytuje odborné medicínske informácie o kŕčových žilách a ich vplyve na tehotné ženy, zároveň ponúka praktické rady pre prevenciu a manažment príznakov. Článok je napísaný prístupným štýlom s prvkami humoru, pričom zachováva odbornú presnosť a relevantnosť pre tehotné ženy s kŕčovými žilami."
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
        id="zWzVHI"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(10701px,auto)_1fr] max-lg:px-4 lg:min-h-[378.125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(5350px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z3hvEb"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="woman in pink panty and bra"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="woman in pink panty and bra"
                  src="/external-assets/5e76deac2d5700db.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="woman in pink panty and bra"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="woman in pink panty and bra"
                  src="/external-assets/f3b0bb566dfd349c.jpg"
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
              id="zWTkAa"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Milé budúce mamičky, vitajte v úžasnom svete tehotenstva! Je to čas plný zmien, očakávaní a... no, priznajme si to, aj niekoľkých nepríjemností. Jednou z nich môžu byť kŕčové žily. Možno ste si všimli, že vaše nohy začínajú pripomínať mapu riečnej delty Mississippi. Nebojte sa, nie ste v tom samy! Poďme sa spolu pozrieť na to, čo sa to vlastne deje s vašimi žilami počas tehotenstva a či sa príznaky naozaj zhoršujú."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Kŕčové žily: Krátky prehľad pre zaneprázdnené mamičky"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme hlbšie do vôd tehotenstva (áno, to bol pokus o vtip), poďme si najprv objasniť, čo to tie kŕčové žily vlastne sú."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Kŕčové žily"}
                </strong>
                {", odborne nazývané" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "varixy"}
                </strong>
                {
                  ", sú žilové cievy, ktoré sa rozširujú a vytvárajú viditeľné modré alebo fialové uzlíky na nohách. Je to, akoby sa vaše žily rozhodli ísť na dovolenku a nafúkli sa ako balóny. Príznaky kŕčových žíl zahŕňajú ťažké a unavené nohy, opuchy, svrbenie a bolesť."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Medzi faktory, ktoré prispievajú k vzniku kŕčových žíl, patria:"
                }
              </p>
              <ul className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Hormonálne zmeny (zdravíme vás, tehotenské hormóny!)"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {
                  'Vplyv tehotenstva na kŕčové žily: Keď sa vaše telo rozhodne prestavať svoju "vodovodnú sieť"'
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Tehotenstvo spôsobuje zvýšenie objemu krvi v tele a hormonálne zmeny, ktoré môžu ovplyvniť žilový systém. Je to, akoby vaše telo dostalo nápad prestavať celú svoju "vodovodnú sieť" bez toho, aby vám dalo vedieť. Tieto zmeny môžu viesť k zhoršeniu príznakov kŕčových žíl u niektorých tehotných žien.'
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V dôsledku nárastu objemu maternice sa zvyšuje tlak na žily v panve, čo môže spomaliť prietok krvi a prispieť k tvorbe kŕčových žíl. Je to, akoby niekto položil veľký balvan na vašu záhradnú hadicu - voda síce preteká, ale nie tak ľahko ako predtým."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Zhoršenie príznakov kŕčových žíl v tehotenstve: Keď vaše nohy začnú protestovať"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príznaky kŕčových žíl sa môžu počas tehotenstva zhoršiť. Tu sú niektoré z vecí, ktoré môžete očakávať:"
                }
              </p>
              <ol className="break-words my-0">
                {items4.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items4.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Nočné kŕče"}
                    </strong>
                    {
                      ": Môžete zažívať častejšie nočné kŕče v nohách, akoby vaše lýtka chceli cvičiť, keď vy chcete spať."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Možnosti zmiernenia príznakov: Ako upokojiť vaše rozbúrené žily"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sa príznaky kŕčových žíl v tehotenstve zhoršujú a sťažujú vám pohodlie, existuje niekoľko opatrení, ktoré môžu pomôcť. Tu je niekoľko tipov, ako upokojiť vaše rozbúrené žily:"
                }
              </p>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Spite na ľavom boku"}
                    </strong>
                    {
                      ": Táto poloha môže pomôcť znížiť tlak na veľkú žilu na pravej strane vášho tela (vena cava), čo môže zlepšiť celkovú cirkuláciu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba kŕčových žíl v tehotenstve: Čo áno a čo nie"}
              </h2>
              {items2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Úprava životného štýlu"}
                    </strong>
                    {
                      ": Vyhýbanie sa dlhému státiu alebo sedeniu, udržiavanie zdravej hmotnosti a nosenie pohodlného oblečenia môže pomôcť zmierniť príznaky."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {
                  "Prevencia kŕčových žíl počas tehotenstva: Ako byť o krok vpred pred vašimi žilami"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci nie je možné úplne zabrániť vzniku kŕčových žíl v tehotenstve (žiaľ, nemáme čarovný prútik), existujú niektoré opatrenia, ktoré môžete prijať na ich prevenciu:"
                }
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Vyhnite sa tesným odevom"}
                    </strong>
                    {
                      ": Tesné oblečenie môže obmedziť cirkuláciu. Dajte prednosť pohodlnému, voľnému oblečeniu, najmä okolo pása a nôh."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Kŕčové žily na iných miestach: Nie len nohy môžu byť postihnuté"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď sa kŕčové žily najčastejšie vyskytujú na nohách, môžu sa objaviť aj na iných miestach tela, najmä počas tehotenstva. Tu sú niektoré ďalšie oblasti, kde sa môžu vyskytnúť kŕčové žily:"
                }
              </p>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Varixy pažeráka"}
                    </strong>
                    {
                      ": Tieto sú zriedkavé, ale môžu sa vyskytnúť, najmä u žien s existujúcimi problémami s pečeňou."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Komplikácie kŕčových žíl v tehotenstve: Keď sa žily rozhodnú robiť problémy"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Väčšina kŕčových žíl v tehotenstve je skôr nepríjemná ako nebezpečná. Avšak v niektorých prípadoch môžu viesť ku komplikáciám. Tu sú niektoré situácie, kedy by ste mali kontaktovať svojho lekára:"
                }
              </p>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak spozorujete ktorýkoľvek z týchto príznakov, neváhajte a kontaktujte svojho lekára. Je lepšie byť opatrný ako ľutovať!"
                }
              </p>
              <h2 className={listItemClassName}>
                {"Život s kŕčovými žilami po tehotenstve: Čo môžete očakávať"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dobrá správa je, že mnoho žien zažije zlepšenie stavu kŕčových žíl po pôrode.Avšak, nie všetky kŕčové žily zmiznú ako mávnutím čarovného prútika. Tu je, čo môžete očakávať:"
                }
              </p>
              <ol className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Možnosti liečby"}
                    </strong>
                    {
                      ": Po tehotenstve a období dojčenia sa otvára viac možností liečby, ktoré neboli vhodné počas tehotenstva. Môžete prebrať tieto možnosti s cievnym chirurgom alebo angiológom."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Často kladené otázky (FAQs)</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na záver si zodpovieme niekoľko často kladených otázok o kŕčových žilách v tehotenstve:"
                }
              </p>
              <ol className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Je možné zabrániť vzniku kŕčových žíl po pôrode?" + " "}
                    </strong>
                    {
                      "Hoci nie je možné úplne zabrániť ich vzniku, zdravý životný štýl, pravidelné cvičenie a nosenie kompresných pančúch môžu pomôcť znížiť riziko."
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
