const listItemClassName =
  "font-heading text-ploy-text-inverse font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId liecba-dieta-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: diéta
 */
type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
  return (
    <>
      <li className="break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          {text}
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem3Props = {
  text: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  separator?: string;
};

function ListItem3({
  text,
  text_1,
  text_2,
  text_3,
  text_4,
  separator,
}: ListItem3Props) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
          <strong className="[color:inherit] break-words">{text}</strong>
          {text_1}
        </p>
        <ul className="break-words my-0">
          <li className="break-words">
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              {text_2}
            </p>
          </li>
          <li className="break-words">
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              {text_3}
            </p>
          </li>
          <li className="break-words">
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
              {text_4}
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
          </li>
        </ul>
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

type ListItem5Props = {
  text: string;
  separator?: string;
};

function ListItem5({ text, separator }: ListItem5Props) {
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
  { text: "bobuľové ovocie (čučoriedky, maliny, černice)" },
  { text: "citrusové ovocie" },
  { text: "tmavá listovú zelenina (špenát, kel)" },
  { text: "paradajky" },
];

export const items2: ListItemProps[] = [
  { text: "citrusové ovocie" },
  { text: "kiwi" },
  { text: "paprika" },
];

export const items3: ListItem3Props[] = [
  {
    text: "potraviny s vysokým obsahom soli",
    text_1:
      ": nadmerný príjem soli môže viesť k zadržiavaniu vody v tele, čo môže zhoršiť opuchy nôh.",
    text_2: "spracované potraviny",
    text_3: "slané pochutiny",
    text_4: "konzervy",
  },
  {
    text: "rafinované cukry",
    text_1:
      ": vysoký príjem rafinovaných cukrov môže viesť k zápalu v tele, čo môže negatívne ovplyvniť zdravie žíl.",
    text_2: "sladké nápoje",
    text_3: "cukrovinky",
    text_4: "spracované sladkosti",
  },
  {
    text: "trans tuky",
    text_1:
      ": tieto nezdravé tuky môžu prispievať k zápalu a negatívne ovplyvňovať funkciu žíl.",
    text_2: "vyprážané jedlá",
    text_3: "niektorých pečivá a zákusky",
    text_4: "margaríny",
  },
];

export const items4: ListItem4Props[] = [
  {
    text: "extrakt z pagaštanu konského",
    text_1:
      ": eosahuje látku aescín, ktorá môže zlepšiť žilový tonus a znížiť opuch a zápal spojený s kŕčovými žilami.",
  },
  {
    text: "diosmín a hesperidín",
    text_1:
      ": tieto flavonoidy odvodené z citrusových plodov majú venotonické vlastnosti a často sa používajú na zlepšenie žilového obehu.",
  },
  {
    text: "extrakt z hroznovych jadierok",
    text_1:
      ": bohatý na antioxidanty, môže posilniť krvné cievy a znížiť priepustnosť kapilár.",
  },
  {
    text: "vitamín C",
    text_1:
      ": ako antioxidant podporuje tvorbu kolagénu, ktorý je kľúčový pre udržanie zdravých stien krvných ciev.",
  },
  {
    text: "vitamín E",
    text_1:
      ": ďalší antioxidant, ktorý môže pomôcť znížiť zápal a podporiť krvný obeh.",
  },
  {
    text: "omega-3 mastné kyseliny",
    text_1:
      ": nájdené v rybom oleji, majú protizápalové vlastnosti, ktoré môžu pomôcť zlepšiť zdravie ciev.",
  },
  {
    text: "extrakt z čučoriedok",
    text_1:
      ": obsahuje antokyány, ktoré môžu pomôcť posilniť krvné cievy a zlepšiť krvný obeh.",
  },
  {
    text: "Listnatec tŕnitý (Ruscus aculeatus)",
    text_1:
      ": tradične sa používa na podporu cievneho zdravia a zníženie príznakov kŕčových žíl.",
  },
  {
    text: "Pupočník ázijský (Centella asiatica)",
    text_1:
      ": táto bylina môže pomôcť zlepšiť žilový obeh a podporiť spojivové tkanivá okolo žíl.",
  },
  {
    text: "zinok",
    text_1:
      ": hrá úlohu v syntéze kolagénu a je dôležitý pre udržanie integrity krvných ciev.",
  },
];

export const items5: ListItem5Props[] = [
  { text: "omega-3 mastné kyseliny" },
  { text: "vitamín D" },
  { text: "multivitamíny (voliteľné, ak sú v strave medzery v živinách)" },
  { text: "probiotiká (voliteľné, pre zdravie čriev)" },
  { text: "horčík" },
];

export default function DietaSection() {
  return (
    <section
      id="dieta"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/1587b1969dd154c99787.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.64] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[334.5625rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[12.5%_75%_12.5%] max-lg:grid-rows-[minmax(16px,auto)_minmax(4976px,auto)_minmax(48px,auto)_minmax(240px,auto)_1fr] max-lg:px-4 lg:min-h-[184.3125rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_22.0588%_3.18627%_57.9248%_8.41503%] lg:grid-rows-[minmax(29px,auto)_minmax(11px,auto)_minmax(304px,auto)_minmax(2514px,auto)_1fr] lg:px-0">
        <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-2 max-lg:row-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-5">
          <div
            id="zE0EAv"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
              {"diéta"}
            </h3>
            <h5 className={listItemClassName}>
              {"potraviny prospešné pre zdravie žíl"}
            </h5>
            <ol className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"potraviny bohaté na flavonoidy"}
                  </strong>
                  {
                    ": flavonoidy sú zlúčeniny nachádzajúce sa v mnohých ovociach a zelenine, ktoré môžu posilniť žily a zlepšiť krvný obeh."
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
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"čokoláda s vysokým obsahom kakaa"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"potraviny bohaté na vlákninu"}
                  </strong>
                  {
                    ": vláknina pomáha predchádzať zápche, ktorá môže zhoršovať príznaky kŕčových žíl."
                  }
                </p>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"celozrnné výrobky"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"strukoviny"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"ovocie a zelenina"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"potraviny bohaté na omega-3 mastné kyseliny"}
                  </strong>
                  {
                    ": tieto zdravé tuky môžu pomôcť znížiť zápal a zlepšiť krvný obeh."
                  }
                </p>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"mastné ryby (losos, makrela, sardinky)"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"ľanové semenáh"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"vlašské orechy"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"potraviny bohaté na vitamín C"}
                  </strong>
                  {
                    ": vitamín C je dôležitý pre tvorbu kolagénu, ktorý pomáha udržiavať pevnosť žilových stien."
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
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"brokolica"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"potraviny bohaté na vitamín E"}
                  </strong>
                  {": tento antioxidant môže pomôcť zlepšiť krvný obeh."}
                </p>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"orechy a semená"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"avokádo"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"olivový olej"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
            </ol>
            <h5 className={listItemClassName}>
              {"potraviny, ktorým sa treba vyhnúť"}
            </h5>
            <ol className="break-words my-0">
              {items3.map((item, index) => (
                <ListItem3
                  key={index}
                  {...item}
                  separator={index < items3.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"kofeín a alkohol"}
                  </strong>
                  {
                    ": nadmerná konzumácia kofeínu a alkoholu môže viesť k dehydratácii a zhoršeniu príznakov žilovej nedostatočnosti. konzumujte ich s mierou."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"červené mäso"}
                  </strong>
                  {
                    ": hoci štíhle kúsky červeného mäsa môžu byť súčasťou vyváženej stravy, nadmerná konzumácia nemusí byť vhodná pre zdravie žíl. zvážte rastlinné zdroje bielkovín."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h5 className={listItemClassName}>
              {"výživové doplnky prospešné pre žily"}
            </h5>
            <ol className="break-words my-0">
              {items4.map((item, index) => (
                <ListItem4
                  key={index}
                  {...item}
                  separator={index < items4.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"kvercetín"}
                  </strong>
                  {
                    ": flavonoid s protizápalovými vlastnosťami, ktorý môže prospieť cievnemu zdraviu."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h5 className={listItemClassName}>
              {"odporúčania pre rôzne vekové skupiny"}
            </h5>
            <h6 className={listItemClassName2}>v 20-tke a 30-tke:</h6>
            <ul className="break-words my-0">
              {items5.map((item, index) => (
                <ListItem5
                  key={index}
                  {...item}
                  separator={index < items5.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"vitamín B komplex"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName2}>v 40-tke a 50-tke:</h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"všetky vyššie uvedené"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"kolagén (pre zdravie kĺbov a pokožky)"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h6 className={listItemClassName2}>v 60-tke a starších:</h6>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"všetky vyššie uvedené"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"vápnik (pre zdravie kostí)"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              {"je dôležité pamätať, že každý človek je iný a to, čo funguje pre jedného, nemusí fungovať pre druhého. pred začatím akéhokoľvek nového stravovacieho režimu alebo užívaním výživových doplnkov sa vždy" +
                " "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {
                    "poraďte so svojim lekárom alebo kvalifikovaným výživovým poradcom"
                  }
                </strong>
              </span>
              {". okrem správnej výživy nezabudnite na ďalšie dôležité aspekty manažmentu kŕčových žíl, ako je" +
                " "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"pravidelné cvičenie"}
                </strong>
              </span>
              {
                ", udržiavanie zdravej hmotnosti, nosenie kompresných pančúch a vyhýbanie sa dlhodobému státiu alebo sedeniu. s komplexným prístupom môžete výrazne zlepšiť zdravie svojich žíl a kvalitu života."
              }
            </p>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] col-start-2 col-end-3 max-lg:row-start-4 max-lg:row-end-5 lg:row-start-2 lg:row-end-4">
          <div
            id="zzZ1KM"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-60 lg:max-h-[19.7188rem]"
          >
            <div
              rel="nofollow"
              title="a man in a hospital room with a nurse"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
            >
              <img
                alt="a man in a hospital room with a nurse"
                src="/migrated-assets/b73622cfc645898fdf9d.jpg"
                height="315"
                width="270"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a man in a hospital room with a nurse"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
            >
              <img
                alt="a man in a hospital room with a nurse"
                src="/migrated-assets/c0ca5c7d01911e433044.jpg"
                height="240"
                width="246"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
