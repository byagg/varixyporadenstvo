const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId syndrom-panvovej-venovej-kongescie-svpk-priciny-priznaky-a-liecba-hero-section
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

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Syndróm panvovej vénovej kongescie je vážnym a často prehliadaným ochorením, ktoré môže významne zasiahnuť do života postihnutých žien. Aj keď je SVPK častejší u žien vo veku 30 až 35 rokov, môže sa vyskytnúť aj u mladších alebo starších žien, pričom riziko rastie s počtom tehotenstiev a hormonálnymi zmenami. Chronická bolesť, nepohodlie a ďalšie príznaky, ktoré toto ochorenie sprevádzajú, si vyžadujú pozornosť odborníkov a správnu liečbu.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Dôležitým krokom k úspešnej liečbe SVPK je jeho správna a včasná diagnostika. Rôzne diagnostické metódy, ako ultrazvuk, magnetická rezonancia a iné zobrazovacie techniky, pomáhajú presne určiť príčinu príznakov a zvoliť najlepší postup liečby. Liečebné možnosti sú rozmanité a zahŕňajú ako neinvazívne prístupy, tak aj invazívne metódy, ktoré poskytujú úľavu od príznakov a pomáhajú obnoviť zdravie ciev.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Prevencia zohráva kľúčovú úlohu v znižovaní rizika rozvoja SVPK. Zdravý životný štýl, správna výživa, pravidelná fyzická aktivita a vyhýbanie sa fajčeniu sú základom pre udržanie zdravých ciev a predchádzanie chronickým žilovým ochoreniam. Aj po liečbe SVPK je dôležité pokračovať v prevencii, aby sa predišlo opätovnému vzniku problémov a zabezpečilo sa dlhodobé zdravie žíl.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Význam SVPK je čoraz viac uznávaný v zdravotníckej komunite a zlepšená diagnostika a liečba umožňujú ženám s týmto ochorením viesť plnohodnotný život. Vďaka informovanosti a prístupu k novým liečebným metódam majú pacientky so syndrómom panvovej vénovej kongescie možnosť získať úľavu od symptómov a opäť si užívať každodenný život bez obmedzení.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Prekážky v panvových žilách:",
    text_1:
      " K prekážkam môže dôjsť v dôsledku vrodených anomálií alebo zmien v cievnom systéme, ktoré zabraňujú plynulému prietoku krvi. Prekážka spôsobuje nahromadenie krvi v žilách, čo vedie k zvýšenému tlaku a bolestivým symptómom. V niektorých prípadoch môže byť prekážka spôsobená abnormálnou štruktúrou panvových ciev alebo inými zdravotnými stavmi, ktoré obmedzujú prietok krvi.",
  },
  {
    text: "Spätný tok krvi (reflux):",
    text_1:
      " Reflux v žilách panvy je ďalšou významnou príčinou SVPK. Keď krv v žilách prúdi nesprávnym smerom, vzniká zvýšený tlak, ktorý zaťažuje žilové steny. Tento jav sa často vyskytuje u ľudí, ktorým nefungujú chlopne v žilách správne. Pri normálnom prietoku sa krv vracia k srdcu, ale pri refluxe dochádza k jej návratu späť do žíl panvy. Spätný tok krvi sa často spája so zväčšením žíl a znížením pružnosti ich stien.",
  },
  {
    text: "Opakované tehotenstvá:",
    text_1:
      " Tehotenstvo predstavuje značnú záťaž pre ženský cievny systém, najmä v panvovej oblasti. Počas tehotenstva dochádza k zvýšenému objemu krvi, čo kladie väčší nápor na žily panvy. U žien, ktoré prekonali viacero tehotenstiev, sa riziko vzniku SVPK zvyšuje, pretože žily môžu stratiť svoju pružnosť a schopnosť efektívne odvádzať krv. Tento jav je často sprevádzaný ďalšími zmenami, ako je oslabenie svalov a cievnych stien.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Bolesť panvy:",
    text_1:
      " Jedným z najčastejších príznakov SVPK je bolesť v panvovej oblasti, ktorá môže byť tupá, pichavá alebo intenzívna. Bolesť často pretrváva dlhodobo a môže sa zhoršovať počas menštruácie, tehotenstva alebo po pohlavnom styku. U niektorých žien sa bolesť zhoršuje pri dlhodobom státí alebo sedení, pri fyzickej námahe alebo emocionálnom strese.",
  },
  {
    text: "Nepohodlie v oblasti hrádze:",
    text_1:
      " Ženy s SVPK často pociťujú tlak alebo nepríjemné pocity v oblasti hrádze. Tento pocit môže byť podobný tlaku alebo tiaži, ktorý sa zosilňuje pri určitých činnostiach, ako je napríklad dlhodobé sedenie alebo státie.",
  },
  {
    text: "Časté nutkanie na močenie:",
    text_1:
      " Prítomnosť tlaku na močový mechúr spôsobená rozšírenými žilami môže vyvolať časté nutkanie na močenie, dokonca aj keď močový mechúr nie je úplne naplnený. To môže spôsobovať nepohodlie a znižovať kvalitu života pacienta, najmä ak sa tento príznak objavuje v noci alebo v situáciách, kde je obmedzený prístup k toalete.",
  },
];

export const items4: ListItem2Props[] = [
  {
    text: "Anamnéza a rozhovor s pacientom:",
    text_1:
      " Lekár sa pacienta opýta na všetky príznaky a dôležité udalosti v jeho zdravotnej histórii. Na základe informácií môže lekár začať podozrievať na SVPK a vykonať ďalšie potrebné vyšetrenia.",
  },
  {
    text: "Fyzické vyšetrenie:",
    text_1:
      " Fyzické vyšetrenie zahŕňa pozorovanie a vyšetrenie postihnutých oblastí vrátane hrádze a dolných končatín, aby sa zistili opuchy alebo zväčšené žily. Lekár môže použiť rôzne techniky, aby zistil, či sa v postihnutých žilách nachádza prekážka alebo iné abnormality.",
  },
  {
    text: "Ultrazvukové vyšetrenie:",
    text_1:
      " Ultrazvuk je základný nástroj na diagnostiku SVPK, pretože umožňuje lekárom vidieť prietok krvi v žilách panvy. Ultrazvuk dokáže odhaliť prítomnosť prekážok, spätného toku krvi alebo iných problémov, ktoré môžu spôsobovať bolesť a iné príznaky.",
  },
  {
    text: "Magnetická rezonancia (MRI):",
    text_1:
      " MRI poskytuje podrobnejšie informácie o stave žíl a okolitého tkaniva. Táto zobrazovacia technika je presná a pomáha lekárom zistiť rozsah poškodenia žíl a identifikovať možné príčiny problému.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Zdravý životný štýl:",
    text_1:
      " Pacientom sa odporúča vyhýbať sa dlhému státiu alebo sedeniu, pretože tieto činnosti môžu zvýšiť tlak na panvové žily. Pravidelný pohyb pomáha zlepšovať prietok krvi a môže zmierniť príznaky SVPK. Vhodné je zaradiť do každodenného režimu cvičenie, ako je chôdza alebo plávanie, ktoré posilňuje svalstvo a podporuje zdravie ciev.",
  },
  {
    text: "Nefajčiť:",
    text_1:
      " Fajčenie má negatívny dopad na zdravie žíl a môže zhoršiť stav pacientov so SVPK. Fajčenie oslabuje cievne steny a prispieva k vyššiemu riziku vzniku komplikácií. Preto je dôležité prestať fajčiť, aby sa zlepšila celková kondícia ciev.",
  },
  {
    text: "Zdravá výživa:",
    text_1:
      " Zdravá strava je nevyhnutná pre udržanie zdravých žíl. Strava s nízkym obsahom soli, cukru a nasýtených tukov podporuje zdravie cievneho systému a pomáha udržiavať žilový tlak pod kontrolou. Jedlá bohaté na vitamíny a minerály môžu pomôcť zlepšiť pružnosť ciev a znížiť riziko zhoršenia príznakov.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Skleroterapia:",
    text_1:
      " Tento postup zahŕňa injekciu látky priamo do postihnutých žíl, čo spôsobuje ich zatvorenie a následnú absorpciu telom.",
  },
  {
    text: "Embolizácia žíl:",
    text_1:
      " Pri tejto metóde sa blokujú problematické žily pomocou špeciálnych materiálov, ktoré zabraňujú spätnému toku krvi a zmierňujú tlak na okolité tkanivá.",
  },
  {
    text: "Chirurgické odstránenie žíl:",
    text_1:
      " V závažných prípadoch môže byť potrebné chirurgicky odstrániť postihnuté žily, aby sa znížil tlak a zlepšil celkový prietok krvi v panve.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zI0ijn"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {
                "Syndróm panvovej vénovej kongescie (SVPK): Príčiny, Príznaky a Liečba"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Syndróm panvovej vénovej kongescie, často označovaný ako SVPK, je závažný a bolestivý zdravotný stav, ktorý ovplyvňuje oblasť panvy, dolných končatín a v niektorých prípadoch aj ďalšie časti tela."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name">
                  {"VP team"}
                </p>
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">{"7/15/2025" + " "}</span>
                  <span className="[color:inherit] before:content-['_·_'] before:text-ploy-text-primary">
                    {" " + "12 min read"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zHTzS6"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(15737px,auto)_1fr] max-lg:px-4 lg:min-h-[454.375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(6794px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zzRi6n"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="topless woman with skin condition"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="topless woman with skin condition"
                  src="https://images.unsplash.com/photo-1583966821154-ba58ea660f69?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="topless woman with skin condition"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="topless woman with skin condition"
                  src="https://images.unsplash.com/photo-1583966821154-ba58ea660f69?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            data-ploy-animation-fx-hint="fade-in"
            className="text-center w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
          >
            <div
              id="zS3BDc"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <u className="break-words">
                  <a
                    href="https://varixyporadenstvo.com/syndrom-panvovej-kongescie-pcs-casty-ale-malo-rozpoznany-problem-u-zien"
                    className="[color:inherit] break-words"
                  >
                    {"Syndróm panvovej vénovej kongescie"}
                  </a>
                </u>
                {
                  ", často označovaný ako SVPK, je závažný a bolestivý zdravotný stav, ktorý ovplyvňuje oblasť panvy, dolných končatín a v niektorých prípadoch aj ďalšie časti tela. Ide o žilové ochorenie, ktoré postihuje najmä ženy v produktívnom veku, pričom najčastejšie sa vyskytuje u žien vo veku 30 až 35 rokov. Syndróm spôsobuje rad nepríjemných a dlhodobých príznakov, ktoré môžu významne znižovať kvalitu života a ovplyvňovať každodenné aktivity postihnutých žien."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prečo je syndróm panvovej vénovej kongescie (SVPK) tak závažný? Pretože je často neodhalený alebo diagnostikovaný až v neskorých štádiách, keď už príznaky spôsobujú výrazné obmedzenia. Tento článok prináša podrobný prehľad príčin, príznakov, diagnostiky a rôznych metód liečby SVPK, ktoré môžu pacientkam pomôcť zvládnuť príznaky a zlepšiť ich zdravotný stav."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <u className="break-words">
                  <a
                    href="https://varixyporadenstvo.com/#kalkulacky"
                    target="_self"
                    className="[color:inherit] break-words"
                  >
                    {
                      "KALKULAČKA PRE ZHODNOTENIE RIZIKA SYNDRÓMU VENÓZNEJ PANVOVEJ KONGESCIE"
                    }
                  </a>
                </u>
              </p>
              <h2 className={listItemClassName}>
                {"Čo je syndróm panvovej vénovej kongescie?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Syndróm panvovej vénovej kongescie (SVPK) predstavuje špecifickú formu chronického žilového ochorenia, pri ktorom dochádza k problémom s prietokom krvi v žilách panvy. Tento stav sa vyskytuje v dôsledku vysokého tlaku v žilách spôsobeného prekážkou alebo spätným tokom krvi. Namiesto toho, aby krv prúdila správne smerom k srdcu, dochádza v niektorých prípadoch k jej hromadeniu v panvových žilách, čo spôsobuje" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "bolesť a nepríjemné pocity"}
                </strong>
                {"."}
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Nedostatočný prietok krvi v panvových žilách vedie k ich nadmernému rozšíreniu, čo spôsobuje zvýšený tlak na okolité tkanivá a vyvoláva rad nepríjemných príznakov. U žien môže tento stav zahŕňať aj viditeľné žilové opuchy v oblasti genitálií alebo dolných končatín. V dôsledku toho, že panvové žily tvoria dôležitú časť cievneho systému, ktorý zabezpečuje prietok krvi v spodnej časti tela, má SVPK často negatívny dopad na zdravie celého cievneho systému, vrátane dolných končatín."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Zvýšený tlak v žilách panvy môže spôsobovať" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "chronickú panvovú bolesť"}
                </strong>
                {
                  ", ktorá výrazne zasahuje do každodenného života žien. Mnohé z nich prežívajú dlhodobé nepríjemné pocity, ktoré ich obmedzujú nielen v práci, ale aj v rodinnom a spoločenskom živote. Je dôležité si uvedomiť, že tento stav môže mať širokú škálu príznakov, preto je jeho diagnostika často zložitá a vyžaduje si odborné vyšetrenia a precízny prístup."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Príčiny syndrómu panvovej vénovej kongescie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príčiny SVPK sú rôznorodé a môžu zahŕňať viaceré faktory, ktoré ovplyvňujú prietok krvi v panvovej oblasti. Hlavnými príčinami syndrómu panvovej vénovej kongescie sú:"
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
                      {"Hormonálne faktory:" + " "}
                    </strong>
                    {
                      "Hormonálne zmeny, najmä počas menštruácie, tehotenstva alebo pri užívaní hormonálnej antikoncepcie, môžu spôsobiť zvýšené rozšírenie žíl. Hormóny ovplyvňujú žily tak, že oslabujú ich steny, čo prispieva k zvýšeniu tlaku a vzniku SVPK. Vysoké hladiny estrogénov, ktoré sú typické pre ženy v plodnom veku, môžu mať za následok zvýšenú priepustnosť ciev a narušenie normálneho prietoku krvi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName2}>
                {"Príznaky syndrómu panvovej vénovej kongescie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príznaky SVPK sú rôznorodé a môžu sa líšiť od pacienta k pacientovi, čo robí diagnostiku náročnou. Niektoré z najbežnejších príznakov, ktoré sprevádzajú tento stav, sú nasledovné:"
                }
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
                      {"Viditeľné opuchy a zväčšené žily:" + " "}
                    </strong>
                    {
                      "V niektorých prípadoch sa u pacientok môžu objaviť opuchy alebo rozšírené žily v oblasti genitálií, hrádze alebo dolných končatín. Zväčšené žily môžu byť na pohľad viditeľné a často spôsobujú bolesť alebo iné nepríjemné pocity. Tento stav je často znakom závažnejšieho štádia SVPK a vyžaduje si lekársku starostlivosť."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Diagnostika syndrómu panvovej vénovej kongescie"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnostika SVPK je zložitá, pretože príznaky môžu byť podobné iným zdravotným stavom. Je nevyhnutné absolvovať dôkladné vyšetrenie, aby sa zistila príčina problémov a stanovila správna liečba. Medzi hlavné diagnostické kroky patrí:"
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
                      {"Flebotomografia a ďalšie zobrazovacie techniky:" + " "}
                    </strong>
                    {
                      "V niektorých prípadoch môže byť potrebné vykonať ďalšie vyšetrenia, ako je flebotomografia, ktoré umožňujú presnejšie analyzovať prietok krvi a identifikovať problematické oblasti."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Liečba syndrómu panvovej vénovej kongescie"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba SVPK sa líši v závislosti od závažnosti príznakov a celkového zdravotného stavu pacienta. Cieľom liečby je zlepšiť prietok krvi, znížiť tlak v panvových žilách a zmierniť príznaky, aby sa pacientky mohli vrátiť k bežnému životu."
                }
              </p>
              <h3 className={listItemClassName2}>Neinvazívna liečba SVPK</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pri liečbe SVPK sa často odporúča začať s neinvazívnymi metódami, ktoré môžu priniesť úľavu od bolesti a zlepšiť celkový stav pacienta. Medzi základné neinvazívne metódy patria:"
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
                      {"Pravidelný pohyb:" + " "}
                    </strong>
                    {
                      "Pravidelný pohyb je kľúčový pre zlepšenie prietoku krvi v žilách panvy. Pohyb ako chôdza alebo plávanie je ideálny pre pacientov so SVPK, pretože zvyšuje krvný obeh a podporuje správne fungovanie cievneho systému."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>Kompresívna terapia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú často prvou voľbou pri liečbe SVPK. Tieto pančuchy poskytujú oporu žilám a zlepšujú prietok krvi. Kompresia pomáha znižovať tlak v žilách a zmierňuje opuchy a bolesť. Pre mnohé ženy je kompresívna terapia účinným spôsobom, ako zlepšiť kvalitu života a zvládnuť príznaky."
                }
              </p>
              <h3 className={listItemClassName2}>Farmakoterapia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Farmakoterapia sa využíva na zmiernenie príznakov SVPK, no nezbaví pacienta rozšírených žíl. Lieky, ako sú venotoniká alebo lieky podporujúce zdravie ciev, pomáhajú zmierniť bolesť a nepohodlie, no nie sú schopné vyriešiť základný problém. Lekári ich často predpisujú ako podpornú terapiu pre pacientov, ktorí potrebujú úľavu od symptómov."
                }
              </p>
              <h2 className={listItemClassName}>Invazívna liečba SVPK</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak neinvazívne metódy neprinášajú dostatočnú úľavu, lekári môžu odporučiť invazívne zákroky. Tieto postupy sú navrhnuté tak, aby odstránili alebo blokovali problematické žily a znížili tlak v panvovej oblasti. Medzi najčastejšie invazívne metódy patrí:"
                }
              </p>
              <ol className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "SVPK je komplexný stav, ktorý si vyžaduje odbornú starostlivosť. Včasná diagnostika a vhodná liečba môžu pomôcť zvládnuť príznaky a obnoviť kvalitu života pacientok."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prevencia syndrómu panvovej vénovej kongescie"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia SVPK je obzvlášť dôležitá pre ženy, ktoré majú vysoké riziko rozvoja tohto ochorenia, napríklad kvôli opakovaným tehotenstvám, genetickej predispozícii či hormonálnym zmenám. Udržiavať zdravý životný štýl a predchádzať rizikovým faktorom môže pomôcť znížiť pravdepodobnosť vzniku tohto syndrómu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1. Zdravý životný štýl ako základ prevencie SVPK"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Životný štýl hrá dôležitú úlohu v prevencii mnohých zdravotných problémov, a to vrátane chronických žilových ochorení, akým je aj SVPK. Zdravý životný štýl zahŕňa pravidelnú fyzickú aktivitu, vyhýbanie sa sedavému spôsobu života, správne stravovacie návyky a v neposlednom rade nefajčenie. Zdravý životný štýl znižuje zaťaženie cievneho systému, posilňuje žilové steny a zlepšuje celkovú kondíciu ciev, čím znižuje riziko vzniku syndrómu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2. Pravidelný pohyb a správne cvičenie"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Jedným z najdôležitejších aspektov prevencie SVPK je pravidelný pohyb. Fyzická aktivita, ako je chôdza, plávanie, joga alebo bicyklovanie, pomáha udržiavať dobrý krvný obeh a podporuje svalstvo, ktoré zlepšuje funkciu žilovej pumpy. Tým, že svaly nôh a panvy podporujú prietok krvi smerom nahor, pomáhajú žilám v ich úlohe odvádzať krv späť do srdca."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na druhej strane, pre ženy, ktoré trávia veľa času sedením alebo státím (napr. kvôli pracovným povinnostiam), sa odporúča pravidelne prerušovať tieto pozície a cvičiť. Stačí krátka prestávka každú hodinu, pri ktorej sa postavia, spravia pár krokov alebo jednoduché cviky na pretiahnutie nôh a panvy."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3. Výživa, ktorá podporuje zdravie ciev"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Správna výživa je ďalším kľúčom k udržaniu zdravých žíl a predchádzaniu SVPK. Strava by mala byť bohatá na vlákninu, vitamíny (najmä vitamíny C a E), antioxidanty a minerály. Vláknina, obsiahnutá v zelenine, ovocí, celozrnných výrobkoch a strukovinách, podporuje dobré trávenie a pomáha predchádzať zápche, ktorá môže zvyšovať tlak na panvové žily. Vitamín C je dôležitý pre tvorbu kolagénu, ktorý posilňuje steny ciev, zatiaľ čo vitamín E pôsobí ako antioxidant, ktorý chráni cievy pred poškodením."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Stravovanie s nízkym obsahom soli je tiež dôležité, pretože nadbytok soli vedie k zadržiavaniu vody v tele, čo zvyšuje tlak na cievny systém. Dopĺňanie jedál o zdravé tuky (napríklad olivový olej, ryby bohaté na omega-3 mastné kyseliny) môže zlepšiť cirkuláciu a podporiť zdravie ciev."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4. Nefajčenie a jeho dôležitosť pre zdravie ciev"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Fajčenie má na zdravie cievneho systému extrémne negatívny vplyv. Cigarety obsahujú množstvo škodlivých chemikálií, ktoré poškodzujú vnútorné steny žíl, znižujú ich pružnosť a zvyšujú riziko zápalu. U žien, ktoré fajčia, je pravdepodobnosť vzniku SVPK oveľa vyššia než u nefajčiarok, pretože cievy oslabené fajčením sú náchylnejšie na poškodenie a zhoršenie prietoku krvi. Fajčenie tiež zvyšuje riziko krvných zrazenín, ktoré môžu spôsobiť vážne komplikácie v cievnom systéme."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Dlhodobá Starostlivosť o Zdravie Žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj po liečbe SVPK je potrebné dodržiavať určitú rutinu na udržanie zdravia žíl a predchádzanie ďalším problémom. Ženy, ktoré prekonali SVPK, by mali byť pravidelne sledované odborníkmi a mali by dodržiavať zásady zdravého životného štýlu, ktoré sú uvedené vyššie. Dlhodobá starostlivosť zahŕňa nielen fyzickú aktivitu a výživu, ale aj pravidelné lekárske kontroly a preventívne opatrenia, aby sa predišlo opätovnému vzniku príznakov."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pravidelné kontroly u odborníka, ako je angiológ alebo flebológ, sú dôležité, pretože pomáhajú monitorovať stav ciev a identifikovať prípadné nové problémy ešte predtým, než sa prejavia príznakmi. Týmto spôsobom je možné začať s liečbou včas a predísť zhoršeniu stavu."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Význam skorej diagnostiky a liečby syndrómu panvovej vénovej kongescie"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "SVPK je komplexné ochorenie, ktoré si vyžaduje špeciálny prístup k diagnostike a liečbe. Skorá diagnostika je kľúčová, pretože pomáha identifikovať problém ešte v raných štádiách, keď sa príznaky ešte dajú efektívne zvládnuť. Na to, aby bola diagnostika úspešná, je však dôležité, aby pacientky otvorene hovorili o všetkých svojich príznakoch a obavách. Mnohé ženy sa môžu cítiť nepríjemne hovoriť o bolestiach panvy alebo problémoch s močením, ale otvorená komunikácia s lekárom je rozhodujúca pre správnu diagnostiku."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba SVPK je často komplexná a môže zahŕňať kombináciu rôznych prístupov, vrátane neinvazívnych opatrení, farmakoterapie a v niektorých prípadoch aj invazívnych zákrokov. Úspešná liečba umožňuje pacientkam zlepšiť kvalitu života a vrátiť sa k bežným aktivitám bez obmedzení. V prípade chronického žilového ochorenia, akým je SVPK, môže byť potrebné pravidelné sledovanie a úprava liečby, aby sa predišlo recidíve."
                }
              </p>
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
