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
    text: "Sklerotizácia kŕčových žíl je účinná a minimálne invazívna procedúra, ktorá môže pomôcť zlepšiť stav a vzhľad vašich nôh. Ak sa u vás vyskytujú príznaky kŕčových žíl a váš lekár vám odporučil sklerotizáciu, neváhajte sa poradiť s odborníkom a zistiť, či je táto liečebná metóda vhodná pre vás.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, že každý prípad je jedinečný a čo funguje pre jedného, nemusí fungovať pre druhého. Je dôležité diskutovať o všetkých možnostiach so svojim lekárom a vybrať si tú najvhodnejšiu pre vás.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Takže, milí čitatelia, ak ste doteraz považovali svoje kŕčové žily za nepriateľov, možno je čas zmeniť perspektívu. S správnou starostlivosťou a liečbou môžu byť vaše žily opäť vašimi spojencami v boji za zdravé a krásne nohy. Koniec koncov, život je príliš krátky na to, aby sme sa trápili kvôli mape na našich nohách, no nie?",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: 'Nech už sa rozhodnete pre akúkoľvek liečbu, pamätajte, že vaše zdravie je na prvom mieste. A kto vie? Možno už budúce leto budete s hrdosťou ukazovať svoje nohy na pláži, bez obáv z "riečnych máp". Tak do toho, dajte svojim žilám šancu na nový začiatok!',
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Po sklerotizácii žíl sa proces hojenia líši od jednotlivca k jednotlivcovi. Je to ako keď sa každý človek zotavuje z maratónu iným tempom. Vo väčšine prípadov sa pacienti môžu vrátiť do normálneho režimu činnosti do niekoľkých dní po zákroku.",
  },
  {
    text: "Je dôležité mať na pamäti, že konečné výsledky môžu trvať niekoľko týždňov alebo mesiacov, pretože postihnuté žily sa postupne zatvárajú a miznú. Je to ako keď sa staré cesty postupne uzatvárajú a zarastajú trávou - chvíľu to trvá, ale výsledok stojí za to.",
  },
  { text: "Počas obdobia hojenia môžete očakávať:" },
];

export const items3: ListItem3Props[] = [
  {
    text: "Viditeľné modré alebo fialové žily na nohách",
    text_1:
      ": Ak vaše nohy začínajú pripomínať mapu riečnej delty, je čas spozornieť.",
  },
  {
    text: "Opuchy a bolesti nôh",
    text_1:
      ": Ak máte pocit, že vaše nohy sú ako nafúknuté balóny na konci dňa, môže to byť signál kŕčových žíl.",
  },
  {
    text: "Ťažkosť pri chôdzi alebo státí dlhšiu dobu",
    text_1:
      ": Ak sa cítite, akoby ste mali na nohách betónové topánky, môže to byť príznak problémov so žilami.",
  },
  {
    text: "Svrbivá pokožka v oblasti žíl",
    text_1:
      ": Ak máte pocit, že vaše nohy práve absolvovali kurz chôdze cez pole žihľavy, môže to súvisieť s kŕčovými žilami.",
  },
];

export const items4: ListItem3Props[] = [
  {
    text: "Pokročilý stupeň kŕčových žíl",
    text_1:
      ": Ak vaše žily vyzerajú ako mapa londýnskeho metra v špičke, je čas zvážiť sklerotizáciu. Tento postup sa často odporúča pacientom s výraznými žilami, ktoré spôsobujú bolesti, ťažkosti alebo ovplyvňujú kvalitu života.",
  },
  {
    text: "Opakované ťažkosti s kŕčovými žilami",
    text_1:
      ": Ak ste už vyskúšali iné metódy liečby, ako napríklad kompresnú terapiu, a problém sa stále vracia ako neželaný návštevník, sklerotizácia môže byť vaším ďalším krokom.",
  },
  {
    text: "Estetické dôvody",
    text_1:
      ': Ak sa vám nepáči vzhľad vašich "riečnych máp" na nohách a chcete dosiahnuť hladšie a prirodzenejšie nohy, sklerotizácia môže byť vhodnou možnosťou. Koniec koncov, kto povedal, že nemôžete byť zdraví a zároveň sexy?',
  },
  {
    text: "Bolesti nôh od kolien dolu",
    text_1:
      ": Ak pociťujete bolesť v dolnej časti nôh, ktorá súvisí s kŕčovými žilami, sklerotizácia môže priniesť úľavu.",
  },
  {
    text: "Žilová nedostatočnosť",
    text_1:
      ": Pri chronickej žilovej nedostatočnosti, keď žily nedokážu efektívne pumpovať krv späť k srdcu, môže byť sklerotizácia účinnou liečbou.",
  },
];

export const items5: ListItem5Props[] = [
  {
    text: "Lekár najprv identifikuje problémové žily - je to ako hľadanie nepriateľských základní na mape.",
  },
  {
    text: "Potom sa do postihnutej žily vpichne tenká ihla - predstavte si to ako miniatúrnu raketovú strelu.",
  },
  {
    text: "Cez túto ihlu sa vstrekuje sklerotizačná látka - naši špeciálni agenti sú vyslaní do akcie!",
  },
  {
    text: "Táto látka spôsobuje zrážanie krvi v žile a jej postupné zatváranie - agenti uzatvárajú nepotrebné cesty.",
  },
];

export const items6: ListItem5Props[] = [
  {
    text: "Namiesto tekutej látky sa používa pena - je to ako poslať do akcie celý tím špeciálnych agentov naraz.",
  },
  {
    text: "Pena je zmesou sklerotizačnej látky a vzduchu - predstavte si to ako špeciálny výbušný koktail.",
  },
  {
    text: "Táto pena sa lepšie rozprestrie v žile a priľne k jej stenám - naši agenti sa dostanú do každého kúta!",
  },
];

export const items7: ListItem3Props[] = [
  {
    text: "Minimálne invazívny postup",
    text_1:
      ": Žiadne veľké rezy alebo jazvy. Je to ako tajná misia - nikto ani nezbadá, že sa niečo dialo!",
  },
  {
    text: "Rýchle zotavenie",
    text_1:
      ": Môžete sa vrátiť k bežným aktivitám takmer okamžite. Je to ako superschopnosť rýchleho hojenia!",
  },
  {
    text: "Nízka miera bolesti",
    text_1:
      ": Väčšina pacientov pociťuje len mierne nepohodlie. Je to ako keď vás štipne komár - trochu to zaštípe, ale rýchlo to prejde.",
  },
  {
    text: "Cielená liečba",
    text_1:
      ": Môže sa zamerať na konkrétne problémové žily. Je to ako presný chirurgický zásah namiesto plošného bombardovania.",
  },
  {
    text: "Estetické výhody",
    text_1:
      ": Zlepšuje vzhľad nôh. Vaše nohy budú vyzerať ako z reklamy na krém na nohy!",
  },
];

export const items8: ListItem3Props[] = [
  {
    text: "Dočasný pocit pálenia alebo štipľavosti",
    text_1: ": Je to, akoby vaše žily dostali malú dávku pálivej papriky.",
  },
  {
    text: "Malé modriny alebo škvrny na koži",
    text_1: ": Vaše nohy môžu chvíľu vyzerať ako abstraktné umelecké dielo.",
  },
  {
    text: "Príležitostné alergické reakcie",
    text_1:
      ": Vaše telo môže reagovať na sklerotizačnú látku ako na nepriateľského votrelca.",
  },
  {
    text: "Hyperpigmentácia",
    text_1:
      ": Môžu sa objaviť tmavšie škvrny na koži. Je to ako keby vaša koža chcela mať vlastný štýl.",
  },
  {
    text: "Malá krvná zrazenina",
    text_1:
      ": V zriedkavých prípadoch sa môže vytvoriť malá krvná zrazenina. Je to ako keď sa dopravný systém vo vašich žilách na chvíľu zasekne.",
  },
];

export const items9: ListItem3Props[] = [
  {
    text: "Noste kompresný pančuchový systém",
    text_1:
      ": Áno, tie sexy pančuchy sú späť! Noste ich počas odporúčaného obdobia. Je to ako dať vašim žilám pevné objatie na podporu.",
  },
  {
    text: "Vyhnite sa horúčave",
    text_1:
      ": Žiadne horúce kúpele, sauny alebo opaľovanie počas prvého týždňa. Vaše žily potrebujú čas na ochladenie po horúcej akcii!",
  },
  {
    text: "Hýbte sa",
    text_1:
      ": Vykonávajte ľahké cvičenie a chôdzu. Je to ako keď sa po misii musíte vrátiť do formy.",
  },
  {
    text: "Zdvíhajte nohy",
    text_1:
      ": Keď odpočívate, zdvíhajte nohy nad úroveň srdca. Je to ako dať vašim žilám malú dovolenku.",
  },
  {
    text: "Hydratujte sa",
    text_1:
      ": Pite veľa vody. Pomáha to vášmu telu zotaviť sa rýchlejšie. Je to ako dať vášmu vnútornému hasičskému systému extra vodu.",
  },
  {
    text: "Vyhnite sa dlhému státiu alebo sedeniu",
    text_1:
      ": Pravidelne sa hýbte. Je to ako keď musíte pravidelne natáčať kľúčom v starých hodinách, aby neprestali tikať.",
  },
];

export const items10: ListItem3Props[] = [
  {
    text: "Postupné zmiznutie viditeľných žíl",
    text_1:
      ": Vaše žily sa budú pomaly vytrácať, akoby ich niekto gumoval z vašej kože.",
  },
  {
    text: "Zmiernenie príznakov",
    text_1:
      ": Bolesť, ťažkosť a opuchy by sa mali postupne zmierňovať. Je to ako keď sa vzduch pomaly vypúšťa z nafúknutého balóna.",
  },
  {
    text: "Zlepšenie cirkulácie",
    text_1:
      ': Budete cítiť, že vaše nohy sú "ľahšie" a energickejšie. Je to ako keď vymeníte starý, upchatý filter v aute za nový.',
  },
  {
    text: "Estetické zlepšenie",
    text_1:
      ": Vaše nohy budú vyzerať hladšie a mladistvejšie. Pripravte sa na komplimenty!",
  },
];

export const items11: ListItem3Props[] = [
  {
    text: "Kompresná terapia",
    text_1:
      ": Nosenie kompresných pančúch môže pomôcť zlepšiť cirkuláciu. Je to ako dať vašim žilám stály objím.",
  },
  {
    text: "Rádiofrekvenčná ablácia",
    text_1:
      ": Táto metóda používa teplo na uzavretie postihnutých žíl. Je to ako použiť mini-žehličku na vaše žily.",
  },
  {
    text: "Laserová operácia kŕčových žíl",
    text_1:
      ": Používa sa silné svetlo na uzavretie menších žíl. Je to ako použiť svetelný meč na boj proti Sithom vo vašich žilách.",
  },
  {
    text: "Chirurgické odstránenie (stripping)",
    text_1:
      ": Pri tejto metóde sa poškodená žila fyzicky odstráni. Je to ako keď vymieňate pokazenú súčiastku v aute.",
  },
];

export const items12: ListItem3Props[] = [
  {
    text: "Hýbte sa",
    text_1:
      ": Pravidelný pohyb je ako WD-40 pre vaše žily. Pomáha udržiavať krvný obeh v dobrej kondícii.",
  },
  {
    text: "Udržujte zdravú hmotnosť",
    text_1:
      ": Čím menej nadváhy, tým menší tlak na vaše žily. Je to ako keď odľahčíte náklad na nákladnom aute.",
  },
  {
    text: "Noste pohodlné oblečenie",
    text_1:
      ": Tesné nohavice môžu byť štýlové, ale vašim žilám sa príliš nepáčia.",
  },
  {
    text: "Dávajte si prestávky",
    text_1:
      ": Ak máte sedavé zamestnanie, snažte sa pravidelne vstávať a prechádzať sa.",
  },
  {
    text: "Jedzte zdravo",
    text_1:
      ": Strava bohatá na vlákninu a nízka na soľ môže pomôcť predchádzať opuchom a podporiť zdravý krvný obeh.",
  },
];

export const items13: ListItem3Props[] = [
  {
    text: "Je sklerotizácia bolestivá?",
    text_1:
      " Sklerotizácia sa zvyčajne vykonáva s minimálnym nepríjemným pocitom. Niektorí pacienti môžu pociťovať mierny pocit pálenia alebo štipľavosti v mieste vpichu. Je to ako keď vás štipne malý, ale odhodlaný mravec.",
  },
  {
    text: "Ako dlho trvá jedno sedenie sklerotizácie?",
    text_1:
      " Dĺžka sedenia sklerotizácie sa môže líšiť v závislosti od rozsahu liečby a počtu postihnutých žíl. Zvyčajne trvá približne 30 minút až 1 hodinu.",
  },
  {
    text: "Kedy môžem očakávať výsledky po sklerotizácii?",
    text_1:
      " Viditeľné výsledky sa zvyčajne prejavujú postupne počas niekoľkých týždňov alebo mesiacov, keď sa postihnuté žily postupne zatvárajú a miznú. Je to ako sledovať, ako sa stará cesta pomaly mení na zelenú lúku.",
  },
  {
    text: "Koľko sedení sklerotizácie je potrebných?",
    text_1:
      " Počet sedení sa líši v závislosti od závažnosti kŕčových žíl a individuálnych potrieb každého pacienta. V niektorých prípadoch môže byť potrebných viacero sedení.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="znmfal"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Kedy podstúpiť sklerotizáciu kŕčových žíl?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento komplexný článok sa venuje téme sklerotizácie kŕčových žíl, vysvetľuje príčiny vzniku kŕčových žíl, príznaky, priebeh sklerotizácie a jej výhody. Poskytuje odborné medicínske informácie o sklerotizácii ako liečebnej metóde kŕčových žíl, zároveň ponúka praktické rady pre pacientov zvažujúcich tento zákrok. Článok je napísaný prístupným štýlom s prvkami humoru, pričom zachováva odbornú presnosť a relevantnosť pre pacientov s kŕčovými žilami."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">11 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zpE8XT"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zOmhNi"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a person holding a light saber"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a person holding a light saber"
                  src="/external-assets/c0e11deaabb51a13.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a person holding a light saber"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a person holding a light saber"
                  src="/external-assets/6b4b705c83553a64.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
          >
            <div
              id="zG3wxd"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Milí čitatelia, vitajte vo fascinujúcom svete žíl a ciev! Dnes sa ponoríme do témy, ktorá trápi mnoho z nás - kŕčové žily. Ak ste niekedy mali pocit, že vaše nohy pripomínajú mapu metra v hlavnom meste, tento článok je práve pre vás. Budeme hovoriť o sklerotizácii kŕčových žíl, zákroku, ktorý by mohol byť riešením vašich problémov. Takže si pohodlne sadnite (ale nie na príliš dlho, lebo... však viete) a poďme na to!"
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú to vlastne tie kŕčové žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Predtým, než sa pustíme do sklerotizácie, poďme si najprv objasniť, s čím vlastne bojujeme." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kŕčové žily"}
                </strong>
                {", odborne nazývané" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "varixy"}
                </strong>
                {
                  ", sú rozšírené, pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Je to, akoby sa vaše žily rozhodli ísť na divokú jazdu na horskej dráhe - točia sa, krútia a nafukujú sa na miestach, kde by nemali."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne. Je to ako keď sa pokazí spätná klapka vo vašom umývadle - voda (alebo v tomto prípade krv) sa hromadí tam, kde by nemala."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príznaky kŕčových žíl: Keď vaše nohy kričia o pomoc"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď vieme, čo sú kŕčové žily, poďme sa pozrieť na príznaky, ktoré by ste nemali ignorovať. Je to ako detektívka - hľadáme stopy, ktoré nám naše telo zanecháva:"
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
                      {"Svalové kŕče alebo nepríjemné pocity v nohách"}
                    </strong>
                    {
                      ": Ak vaše nohy v noci tancujú sambu bez vášho vedomia, môže to byť príznak kŕčových žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Čo je sklerotizácia kŕčových žíl?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "A teraz sa dostávame k jadru nášho príbehu - sklerotizácii kŕčových žíl. Predstavte si, že sklerotizácia je ako superhrdina, ktorý prichádza zachrániť vaše žily pred chaotickým dopravným systémom, ktorý si vytvorili."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Sklerotizácia kŕčových žíl" + " "}
                </strong>
                {
                  "je minimálne invazívny postup, ktorý sa používa na liečbu kŕčových žíl. Cieľom je zatvoriť postihnuté žily a zlepšiť obeh krvi v nohách. Pri sklerotizácii sa do postihnutej žily vstrekne špeciálna látka, ktorá spôsobuje zrážanie a znefunkčnenie vnútorných stien žíl."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Je to, akoby ste poslali malú armádu špeciálnych agentov (sklerotizačnú látku) do vašich žíl, aby uzavreli nepotrebné cesty a presmerovali dopravu na hlavné tepny. Tieto agenti spôsobia, že steny žíl sa "zlepia" a žila sa postupne uzavrie. Krv sa potom presmeruje do zdravších žíl, čo vedie k zlepšeniu celkového obehu.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Kedy sa odporúča sklerotizácia?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď už vieme, čo je sklerotizácia, poďme sa pozrieť na to, kedy je ten správny čas zavolať našich špeciálnych agentov na pomoc. Tu sú niektoré situácie, kedy lekári zvyčajne odporúčajú sklerotizáciu:"
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
                      {"Vnútorné kŕčové žily"}
                    </strong>
                    {
                      ": Aj keď nie sú viditeľné na povrchu, vnútorné kŕčové žily môžu spôsobovať problémy a môžu byť liečené sklerotizáciou."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Ako prebieha sklerotizácia?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď už viete, kedy je vhodné podstúpiť sklerotizáciu, poďme sa pozrieť, ako tento zákrok vlastne prebieha. Je to trochu ako špeciálna misia v akcii:"
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Injekčná sklerotizácia"}
              </h3>
              <ol className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem5
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Po zákroku sa môže na mieste vpichu umiestniť obväz alebo kompresný pančuchový systém - to je ako zabezpečenie miesta akcie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Penová sklerotizácia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Penová sklerotizácia je ako pokročilejšia verzia našej špeciálnej misie:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem5
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "To zvyšuje efektivitu a účinnosť liečby - misia má väčšiu šancu na úspech."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Aké sú výhody sklerotizácie?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Sklerotizácia má niekoľko výhod oproti iným liečebným metódam kŕčových žíl. Je to ako švajčiarsky armádny nôž v oblasti liečby žíl:"
                }
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Možnosť opakovania"}
                    </strong>
                    {
                      ": Ak sa problém vráti, procedúru je možné zopakovať. Je to ako mať neobmedzený počet životov vo videohre!"
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Možné vedľajšie účinky a riziká"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď je sklerotizácia obecne považovaná za bezpečný postup, ako každá misia, aj táto má svoje riziká. Tu sú niektoré možné vedľajšie účinky:"
                }
              </p>
              <ol className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je dôležité konzultovať s lekárom o týchto možných vedľajších účinkoch a zvážiť ich v prospech očakávaných výsledkov. Pamätajte, že každá misia má svoje riziká, ale správny tím špecialistov ich vie minimalizovať!"
                }
              </p>
              <h2 className={listItemClassName}>
                {"Dôležité poúrazové opatrenia"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po sklerotizácii je dôležité dodržiavať poúrazové opatrenia, aby sa minimalizovalo riziko komplikácií a zlepšilo sa hojenie. Je to ako starostlivosť o rastlinu po presadení - potrebuje extra pozornosť, aby sa uchytila. Tu sú niektoré dôležité opatrenia:"
                }
              </p>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dodržiavanie týchto opatrení vám pomôže dosiahnuť lepšie výsledky a minimalizovať riziko komplikácií. Je to ako dodržiavať tajný kód špeciálneho agenta - pomáha to misii byť úspešnou!"
                }
              </p>
              <h2 className={listItemClassName}>
                {"Proces obnovy a očakávané výsledky"}
              </h2>
              {items2.map((item, index) => (
                <ListItem2 key={index} {...item} />
              ))}
              <ol className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <span className="[color:inherit] font-bold break-words">
                      <strong className="[color:inherit] break-words">
                        {"Pozor:"}
                      </strong>
                    </span>
                    {
                      " Prechodne môžu niekedy počas doby hojenia (mesiace) tieto žily vyzerať ešte horšie. Môžu vytvoriť hnedé sfarbenie alebo drobné jemné metličky! Treba byť však trpezlivý!"
                    }
                  </p>
                </li>
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Je dôležité dodržiavať pokyny lekára a pravidelne sa kontrolovať, aby sa zabezpečilo správne hojenie a dosiahnutie požadovaných výsledkov."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Alternatívne metódy liečby kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci je sklerotizácia účinnou metódou liečby kŕčových žíl, nie je to jediná možnosť. Existuje niekoľko alternatívnych metód, ktoré môžu byť vhodné v závislosti od závažnosti vášho stavu:"
                }
              </p>
              <ol className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Lifestyle zmeny"}
                    </strong>
                    {
                      ": Cvičenie, zdravá strava a udržiavanie zdravej hmotnosti môžu pomôcť zmierniť príznaky a predchádzať zhoršeniu stavu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {
                  "Prevencia kŕčových žíl: Ako udržať vaše žily v dobrej kondícii"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je vždy lepšia ako liečba. Tu je niekoľko tipov, ako môžete znížiť riziko vzniku kŕčových žíl:"
                }
              </p>
              <ol className="break-words my-0">
                {items12.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items12.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zdvíhajte nohy"}
                    </strong>
                    {
                      ": Keď odpočívate, zdvíhajte nohy nad úroveň srdca. Je to ako dať vašim žilám malú dovolenku."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Časté otázky (FAQs)</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na záver si zodpovieme niekoľko často kladených otázok o sklerotizácii kŕčových žíl:"
                }
              </p>
              <ol className="break-words my-0">
                {items13.map((item, index) => (
                  <ListItem3
                    key={index}
                    {...item}
                    separator={index < items13.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Je sklerotizácia vhodná pre každého?" + " "}
                    </strong>
                    {
                      "Sklerotizácia nie je vhodná pre všetkých pacientov. Napríklad, nie je odporúčaná pre tehotné ženy alebo ľudí s určitými ochoreniami krvi. Je dôležité konzultovať s lekárom a zvážiť individuálne potreby a možnosti liečby."
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
