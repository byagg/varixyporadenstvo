const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId syndrom-panvovej-kongescie-hbkovy-pohlad-a-pokrocile-liecebne-moznosti-hero-section
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

export const heroSection: ListItemProps[] = [
  {
    text: "Chronická panvová bolesť",
    text_1:
      ": Bolesť v panvovej oblasti, ktorá je prítomná dlhodobo a zhoršuje sa pri státí alebo po fyzickej aktivite.",
  },
  {
    text: "Dyspareunia",
    text_1:
      ": Bolestivý pohlavný styk, ktorý môže byť spojený s kongesciou panvových žíl.",
  },
  {
    text: "Varikokéla u mužov",
    text_1: ": Rozšírenie žíl v miešku, ktoré môže byť prejavom SPK.",
  },
];

export default function HeroSection({
  items = heroSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <div className="flex flex-col grow">
      <section
        id="zDurl0"
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
                "Syndróm panvovej kongescie: Hĺbkový pohľad a pokročilé liečebné možnosti"
              }
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Syndróm panvovej kongescie (SPK) predstavuje významný medicínsky a sociálny problém, ktorý môže výrazne ovplyvniť kvalitu života postihnutých jedincov. Jeho diagnostika a liečba si vyžadujú multidisciplinárny prístup a hlboké porozumenie podstate ochorenia. Tento článok sa zameriava na detailný prehľad aktuálnych poznatkov, diagnostických postupov a liečebných stratégií pri SPK."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">4 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zyT0vX"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(5359px,auto)_1fr] max-lg:px-4 lg:min-h-[208.5625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_21.6503%_22.9575%_21.732%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(2830px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zJO_op"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a black and white photo of a person wearing a tie"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a black and white photo of a person wearing a tie"
                  src="https://images.unsplash.com/photo-1632680340848-31cf23637d0d?auto=format&fit=crop&w=328&h=402"
                  height="344"
                  width="281"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a black and white photo of a person wearing a tie"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a black and white photo of a person wearing a tie"
                  src="https://images.unsplash.com/photo-1632680340848-31cf23637d0d?auto=format&fit=crop&w=360&h=351"
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
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5"
          >
            <div
              id="zqy5FU"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm panvovej kongescie (SPK) je stav, ktorý môže mať významný dopad na kvalitu života postihnutých jedincov, najmä žien. Tento komplexný problém zahŕňa rozšírenie panvových žíl, čo vedie k bolestiam a iným nepríjemným symptómom, ktoré sú často prehliadané alebo nesprávne diagnostikované. V tomto článku sa zameriame na diagnostiku, príznaky a najmodernejšie možnosti liečby SPK, pričom zdôrazníme význam multidisciplinárneho prístupu."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Diagnostika SPK: Komplexný prístup"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnostika syndrómu panvovej kongescie si vyžaduje dôkladné hodnotenie, ktoré kombinuje zobrazovacie technológie s klinickými vyšetreniami. Tento komplexný prístup umožňuje presné určenie rozsahu a závažnosti stavu, čo je kľúčové pre výber správnej liečebnej stratégie."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Ultrasonografia a magnetická rezonancia"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Ultrasonografia (USG)" + " "}
                </strong>
                {
                  "je často prvým krokom v diagnostike SPK. U žien je preferovaná transvaginálna ultrasonografia, ktorá umožňuje detailné zobrazenie panvových venóznych štruktúr. U mužov sa zvyčajne používa transabdominálna ultrasonografia, ktorá poskytuje hodnotné informácie o venóznom systéme bez potreby invazívneho zásahu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Magnetická rezonancia (MR)"}
                </strong>
                {
                  ", konkrétne MR venografia, je ďalšou kľúčovou metódou v diagnostike SPK. Táto technológia ponúka detailné zobrazenie anatómie a hemodynamiky panvových žíl, čo je nevyhnutné pre komplexné hodnotenie pacienta. MR môže tiež odhaliť prítomnosť varikóznych žíl, ktoré sú častým sprievodným javom pri SPK."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"Doplnkové diagnostické metódy"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"V niektorých prípadoch môže byť potrebné doplniť diagnostiku o" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "počítačovú tomografiu (CT)"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "venografiu"}
                </strong>
                {
                  ", najmä ak sú výsledky ultrasonografie a MR nejednoznačné. Tieto metódy poskytujú ďalšie informácie o stave žíl a môžu pomôcť pri rozhodovaní o liečbe."
                }
              </p>
              <h2 className={listItemClassName}>Kľúčové symptómy SPK</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm panvovej kongescie sa často prejavuje ako súbor symptómov, ktoré môžu byť mätúce a často sú zamieňané s inými zdravotnými problémami. Medzi hlavné príznaky patria:"
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
                      {"Varikózne žily v dolných končatinách"}
                    </strong>
                    {
                      ": Tieto môžu byť prejavom zvýšeného tlaku v panvových žilách, ktorý sa prenáša na žily dolných končatín."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Liečebné možnosti SPK</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba syndrómu panvovej kongescie je zameraná na zmiernenie symptómov a prevenciu ďalších komplikácií. Liečebný plán musí byť prispôsobený individuálnym potrebám pacienta a často vyžaduje kombináciu rôznych terapeutických prístupov."
                }
              </p>
              <h3 className={listItemClassName2}>Konzervatívna terapia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Konzervatívna liečba" + " "}
                </strong>
                {"SPK zahŕňa použitie" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kompresívnej terapie"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "medikamentóznej podpory"}
                </strong>
                {". Kompresívne pančuchy, ktoré podporujú venózny návrat, môžu zmierniť symptómy ako bolesť a opuchy. Lieky, ako sú venotoniká (napr." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "diosmín"}
                </strong>
                {
                  "), pomáhajú zlepšiť tonus žíl a znížiť kongesciu. Protizápalové lieky sú tiež často súčasťou liečby, najmä ak je prítomný zápal žíl ( "
                }
                <strong className="[color:inherit] break-words">
                  {"flebitída"}
                </strong>
                {")."}
              </p>
              <h3 className={listItemClassName2}>Intervenčné metódy</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"V prípade, že konzervatívna terapia neprináša úľavu, môžu byť potrebné pokročilé intervencie. Medzi najčastejšie používané metódy patria" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "skleroterapia"}
                </strong>{" "}
                {"a" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "embolizácia"}
                </strong>
                {"."}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Skleroterapia"}
                    </strong>
                    {
                      ": Tento postup spočíva v aplikácii sklerotizujúceho roztoku do postihnutých žíl, čo vedie k ich zjazveniu a uzavretiu. Táto metóda je účinná pri liečbe varikóznych žíl spojených so SPK."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Embolizácia"}
                    </strong>
                    {
                      ": Tento pokročilý zákrok zahŕňa uzavretie postihnutých žíl pomocou embolizačných materiálov, ako sú mikrospirály. Embolizácia je obzvlášť účinná pri liečbe závažných foriem SPK, ako je varikokéla u mužov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>Chirurgická liečba</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"V prípadoch, kde intervenčné metódy neprinášajú požadovaný výsledok, môže byť potrebná" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "chirurgická liečba"}
                </strong>
                {
                  ". Tento prístup zahŕňa odstránenie alebo ligáciu postihnutých žíl a je rezervovaný pre pacientov so závažnými prejavmi SPK, kde iné liečebné metódy zlyhali."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Multidisciplinárny prístup: Kľúč k úspechu"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba syndrómu panvovej kongescie si vyžaduje spoluprácu odborníkov z rôznych medicínskych odborov. Spolupráca medzi flebológmi, gynekológmi, urológmi a psychológmi je nevyhnutná na komplexné riešenie tohto ochorenia. Multidisciplinárny prístup umožňuje zohľadniť nielen fyzické, ale aj psychosociálne aspekty ochorenia, čo je kľúčové pre dosiahnutie najlepších liečebných výsledkov."
                }
              </p>
              <h2 className={listItemClassName}>Psychosociálny dopad SPK</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Syndróm panvovej kongescie má nielen fyzické, ale aj významné psychosociálne dôsledky. Pacienti často trpia chronickou bolesťou, ktorá ovplyvňuje ich každodenný život, vrátane pracovného výkonu, rodinných vzťahov a sexuálneho života. Psychologická podpora a liečba sú preto neoddeliteľnou súčasťou komplexného prístupu k liečbe SPK."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Pokročilé výskumy a budúce perspektívy"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Napriek tomu, že súčasné liečebné možnosti ponúkajú významnú úľavu, výskum v oblasti syndrómu panvovej kongescie pokračuje. Nové technológie, ako sú pokročilé zobrazovacie metódy a cielené liečebné postupy, majú potenciál zlepšiť diagnostiku a liečbu tohto zložitého ochorenia. Budúce štúdie sa budú pravdepodobne zameriavať na identifikáciu genetických faktorov, ktoré prispievajú k rozvoju SPK, a na vývoj nových liekov, ktoré môžu ponúknuť ešte lepšie výsledky."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Syndróm panvovej kongescie je komplexné ochorenie, ktoré si vyžaduje detailné diagnostické a terapeutické postupy. Kombinácia konzervatívnej terapie, pokročilých intervenčných metód a multidisciplinárneho prístupu ponúka nádej na zlepšenie kvality života pacientov. Aj keď súčasné liečebné možnosti poskytujú významnú úľavu, pokračujúci výskum a spolupráca medzi odborníkmi sú nevyhnutné pre ďalšie zlepšenie liečebných výsledkov."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
