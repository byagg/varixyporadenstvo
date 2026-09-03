const listItemClassName =
  "font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl";

type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
      {text}
    </p>
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
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          <span className="[color:inherit] font-bold break-words">
            <strong className="[color:inherit] break-words">{text}</strong>
          </span>
          {text_1}
        </p>
      </li>
      {separator}
    </>
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
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
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
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          {text}
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  { text: "" },
  {
    text: "prírodná lekáreň ponúka širokú škálu bylín, ktoré môžu pomôcť pri liečbe kŕčových žíl a kardiovaskulárnych ochorení. tieto bylinky môžu slúžiť ako doplnok k tradičnej liečbe alebo ako alternatíva pre tých, ktorí hľadajú prírodnejšie riešenie.",
  },
  { text: "pamätajte však, že:" },
];

export const items2: ListItem2Props[] = [
  {
    text: "menej vedľajších účinkov:",
    text_1:
      "prírodné protizápalové lieky sú pre pacienta zvyčajne menej zaťažujúce.",
  },
  {
    text: "komplexný účinok:",
    text_1:
      "mnohé bylinky majú vazoprotektívnu aktivitu, znižujú krvný tlak a posilňujú srdce.",
  },
  {
    text: "dostupnosť:",
    text_1: " rastú čoraz populárnejšie obchody s bylinkami a biosupermarkety.",
  },
];

export const items3: ListItem3Props[] = [
  {
    text: "účinky",
    text_1:
      ": Účinná na bolestivé varixy citlivé na únavu, pôsobí ako vazoprotektor.",
  },
  {
    text: "použitie",
    text_1:
      ": Liečba bolestivých kŕčových žíl, akútnych hemoroidov, ochrana tepien.",
  },
  { text: "forma", text_1: ": Masť alebo gél na lokálne použitie." },
];

export const items4: ListItem4Props[] = [
  {
    text: "pred začatím akejkoľvek bylinnej liečby sa poraďte s lekárom, lekárnikom alebo certifikovaným bylinkárom",
  },
  {
    text: "bylinky môžu mať interakcie s inými liekmi alebo zdravotnými stavmi",
  },
  {
    text: "v prípade závažných ochorení srdca alebo obehového systému by liečba mala vždy prebiehať pod dohľadom odborného lekára - kardiológa/angiológa",
  },
  {
    text: "bylinná liečba by mala byť súčasťou komplexného prístupu, ktorý zahŕňa zdravú stravu, pravidelné cvičenie a ďalšie režimové zmeny",
  },
];

export default function PrirodnaLekarenSection() {
  return (
    <section
      id="prirodnalekaren"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/75a3e429c3c276481229.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        
        alt=""/>
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-75 left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_54.3301%_37.2549%] lg:grid-rows-[minmax(39px,auto)_auto_1fr] lg:px-0">
        <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
          <div
            id="zy5EJk"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
              {"prírodná lekáreň"}
            </h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "kŕčové žily na nohách a kardiovaskulárne ochorenia sú často spojené s bolesťami nôh od kolien dolu, opuchmi nôh a ďalšími nepríjemnými príznakmi. Hoci existujú rôzne moderné metódy liečby, ako je operácia kŕčových žíl alebo rádiofrekvenčná ablácia varixov, mnohí pacienti hľadajú alternatívne a prírodné spôsoby liečby. v tomto článku sa pozrieme na účinné bylinky, ktoré môžu pomôcť pri liečbe kŕčových žíl a zlepšení kardiovaskulárneho zdravia."
              }
            </p>
            <h4 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:text-2xl lg:leading-tight lg:text-3xl">
              {"prečo sa obrátiť k prírode?"}
            </h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "v posledných rokoch sa čoraz častejšie používajú rastlinné prípravky na liečbu kŕčových žíl a žilovej nedostatočnosti. dôvodov je niekoľko:"
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
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"alternatíva k syntetickým liekom:"}
                    </strong>
                  </span>{" "}
                  {
                    "Pre pacientov, ktorí bojujú s vedľajšími účinkami syntetických liekov."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h4 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:text-2xl lg:leading-tight lg:text-3xl">
              {"účinné bylinky na liečbu kŕčových žíl"}
            </h4>
            <h6 className={listItemClassName}>
              {"1." + " "}
              <u className="break-words">
                <a
                  href="/aesculus-hippocastanum-prirodzena-cesta-k-liecbe-krcovych-zil"
                  className="[color:inherit] break-words"
                >
                  {"Pagaštan konský"}
                </a>
              </u>{" "}
              {"(Aesculus hippocastanum)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Protizápalové vlastnosti, znižuje opuchy, zlepšuje krvný obeh, posilňuje stenu ciev."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {
                    ": Tradične sa používa na liečbu kŕčových žíl a varixov dolných končatín."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Extrakt zo semien, gél alebo krém na krčové žily."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"2." + " "}
              <u className="break-words">
                <a
                  href="/ake-ma-ucinky-ruscus-aculeatus-na-krcove-zily"
                  className="[color:inherit] break-words"
                >
                  {"Listnatec tŕnitý"}
                </a>
              </u>{" "}
              {"(Ruscus aculeatus)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Zlepšuje krvný obeh, zmierňuje opuchy a bolesť, sťahuje cievy, znižuje zápal."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {
                    ": Účinný pri liečbe žilovej nedostatočnosti a kŕčových žíl."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Extrakt z koreňa, často v kombinácii s inými bylinkami."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"3." + " "}
              <u className="break-words">
                <a
                  href="/ake-ma-ucinky-hamamelis-virginiana-na-krcove-zily"
                  className="[color:inherit] break-words"
                >
                  {"Hamamel virgínsky"}
                </a>
              </u>{" "}
              {"(Hamamelis virginiana)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Znižuje zápal a opuch, posilňuje cievy, zmenšuje priesvit žíl."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {": Lokálne na zníženie zápalu a opuchu pri kŕčových žilách."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Masť alebo obklady na kŕčové žily."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"4. brusnica čučoriedková (Vaccinium myrtillus)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Zlepšuje krvný obeh, zmierňuje zápaly, posilňuje steny ciev, zlepšuje nočné videnie."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {": Podporná liečba kŕčových žíl a žilovej nedostatočnosti."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Čerstvé alebo sušené plody, extrakt."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"5. Ginko dvojlaločné (Ginkgo biloba)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Zlepšuje krvný obeh, znižuje zápal, zmierňuje bolesť a opuchy nôh."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {": Účinné pri liečbe kŕčových žíl a zlepšení cirkulácie."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Extrakt z listov, často v tabletách alebo kapsulách."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"6. Rebríček obyčajný (Achillea millefolium)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Prírodný adstringent, znižuje zápal a opuch, zlepšuje krvný obeh, posilňuje steny ciev."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {": Podporná liečba kŕčových žíl a žilovej nedostatočnosti."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Čaj, tinktúra alebo obklady."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"7. Pupočník ázijský (Centella asiatica)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Posilňuje steny ciev, zlepšuje krvný obeh, má antioxidačné a protizápalové vlastnosti."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {
                    ": Tradične sa používa na liečbu kŕčových žíl a zlepšenie cirkulácie."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Extrakt, často v krémoch alebo mastiach."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"8. Nechtík lekársky (Calendula officinalis)"}
            </h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Znižuje zápal a opuch, má sťahujúce a protizápalové vlastnosti."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {
                    ": Lokálne na zníženie zápalu a opuchu spojeného s kŕčovými žilami."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Masť alebo olej na lokálne použitie."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>9. Hloh (Crataegus spp.)</h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"účinky"}
                  </strong>
                  {
                    ": Posilňuje cievy, zlepšuje krvný obeh, má antioxidačné a protizápalové vlastnosti."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"použitie"}
                  </strong>
                  {
                    ": Podporná liečba kardiovaskulárnych ochorení a kŕčových žíl."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">forma</strong>
                  {": Čaj, tinktúra alebo extrakt."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName}>
              {"10. Arnika horská (Arnica montana)"}
            </h6>
            <ul className="break-words my-0">
              {items3.map((item, index) => (
                <ListItem3
                  key={index}
                  {...item}
                  separator={index < items3.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
            {items.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
            <ul className="break-words my-0">
              {items4.map((item, index) => (
                <ListItem4
                  key={index}
                  {...item}
                  separator={index < items4.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
