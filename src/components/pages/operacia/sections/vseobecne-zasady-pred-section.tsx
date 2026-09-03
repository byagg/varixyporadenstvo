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
  text_2: string;
};

function ListItem2({ text, text_1, text_2 }: ListItem2Props) {
  return (
    <p className="font-heading text-ploy-text-inverse text-lg break-words mb-8 max-[921px]:mb-8">
      {text}
      <span className="[color:inherit] font-bold break-words">
        <strong className="[color:inherit] break-words">{text_1}</strong>
      </span>
      {text_2}
    </p>
  );
}

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-inverse text-lg break-words mb-8 max-[921px]:mb-8",
    text: "7. pokiaľ je to možné cennosti, šperky a veľký objem peňazí si nechajte doma.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse text-lg break-words mb-8 max-[921px]:mb-8",
    text: "8. líčenie a skrášľovacie procesy vynechajte alebo zredukujte na minimum. Nenatierajte si pokožku krémami alebo olejmi. Ráno pred výkonom sa osprchujte. Ak máte nezhojený vred predkolenia (ulcus cruris) tento si ráno previažte.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse text-lg break-words mb-8 max-[921px]:mb-8",
    text: "9. ráno pred operáciou už nefajčite.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse text-lg break-words max-[921px]:mb-0",
    text: "10. večer sa dobre vyspite, ak treba užite aj svoje lieky na spanie prípadne na ukľudnenie.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "1. pridržiavať sa pokynov, ktoré ste dostali od lekára vrámci predoperačného obdobia, kde patrí napríklad : realizácia",
    text_1: "interného predoperačného vyšetrenia",
    text_2:
      " spolu s odbermi krvi, RTG, EKG, prípadne iných špecializovaných vyšetrení (hematologické, kožné, pľúcne, kardiologické atď.), priniesť si potrebnú dokumentáciu prípadne aj lieky, kompresné pančuchy.",
  },
  {
    text: "2. ",
    text_1: "vyholiť si celú operovanú končatinu",
    text_2:
      " vrátane slabiny, aspoň 24-48 hod pred výkonom, (muži najlepšie strojčekom) aby nedošlo k podráždeniu alebo poraneniu kože v deň operácie.",
  },
  {
    text: "3. užiť ráno v deň operácie Vaše bežné ",
    text_1: "dlhodobé lieky",
    text_2: " - nevynechávajte lieky pokiaľ Vám to vyslovene lekár neurčí!",
  },
  {
    text: "4. deň pred operáciou ",
    text_1: "piť dostatok čírych tekutín",
    text_2: " (minerálka).",
  },
];

export default function VseobecneZasadyPredSection() {
  return (
    <section
      id="zQK1yT"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/0a5c5bd11dad1f40650c.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        
        alt=""/>
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-70 left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(24px,auto)_minmax(187px,auto)_minmax(13px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(59px,auto)_minmax(125px,auto)_minmax(32px,auto)_minmax(968px,auto)_1fr] lg:px-0">
        <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
          <div
            id="z9Yk3i"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl" />
            {items2.map((item, index) => (
              <ListItem2 key={index} {...item} />
            ))}
            <p className="font-heading text-ploy-text-inverse text-lg break-words mb-8 max-[921px]:mb-8">
              {
                "5. v deň operácie prísť nalačno - pokiaľ bude výkon v celkovej alebo spinálnej anestézii, častokrát však ide o výkon v lokálnej alebo tumescentnej anestézii (RFA, EVLA) a vtedy sa môžete pokojne napiť prípadne si dať ľahké raňajky. tekutiny si zoberte so sebou, aby ste mohli pokračovať v hydratácii aj hneď po výkone."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse text-lg break-words mb-8 max-[921px]:mb-8">
              {"6. informujte lekára o" + " "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"zmene zdravotného stavu"}
                </strong>
              </span>{" "}
              {
                "(menzes, horúčka, kašeľ, nádcha, chrípka, herpes, kožný zápal, hnačka, užívanie antibiotík, požitie alkoholu atď.), aby vedel zaujať stanovisko a prípadne výkon odložiť."
              }
            </p>
            {items.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="text-center w-full h-full relative z-[2] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
          <div
            id="zjXkGq"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
              <strong className="[color:inherit] break-words">
                {"všeobecné zásady pred operáciou varixov"}
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
