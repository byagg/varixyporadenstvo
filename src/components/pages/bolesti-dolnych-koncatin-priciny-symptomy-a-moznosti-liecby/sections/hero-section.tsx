const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

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

export const items: ListItemProps[] = [
  {
    text: "Bolesť a sťahovanie",
    text_1:
      ": Pocit napätia alebo bolestivosti v nohách, ktorý môže byť ostrý alebo tupý.",
  },
  {
    text: "Opuchy",
    text_1:
      ": Hromadenie tekutín v dolných končatinách, čo vedie k opuchu, najmä okolo členkov.",
  },
  {
    text: "Pálenie a brnenie",
    text_1:
      ": Pocit pálenia alebo mravčenia, často spojený s neuropatiou alebo preťažením svalov.",
  },
  {
    text: "Znecitlivenie",
    text_1:
      ": Strata citlivosti v určitých častiach dolných končatín, čo môže byť dôsledkom poškodenia nervov.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Pravidelné cvičenie",
    text_1:
      ": Posilňovanie svalov dolných končatín a udržiavanie flexibility môže pomôcť predchádzať zraneniam a bolesti.",
  },
  {
    text: "Zdravá hmotnosť",
    text_1: ": Udržiavanie zdravej hmotnosti znižuje zaťaženie kĺbov a svalov.",
  },
  {
    text: "Vyhýbanie sa dlhodobému státiu alebo sedeniu",
    text_1:
      ": Striedanie polôh a pravidelné prestávky môžu pomôcť predchádzať preťaženiu.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z5WOYE"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Bolesti dolných končatín: Príčiny, symptómy a možnosti liečby"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Bolesti dolných končatín môžu byť spôsobené rôznymi faktormi, od preťaženia až po vážne zdravotné problémy. Objavte príčiny, symptómy a možnosti liečby týchto bolestí a naučte sa, ako im predchádzať."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">4 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zhQEeD"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zK1trj"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person sitting on orange and blue area rug"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person sitting on orange and blue area rug"
                  src="/external-assets/c7815d64734a28a5.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person sitting on orange and blue area rug"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person sitting on orange and blue area rug"
                  src="/external-assets/3b2a9148b68de148.jpg"
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
              id="zrAv8r"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Bolesti dolných končatín sú bežným problémom, ktorý postihuje veľké množstvo ľudí. Či už ide o ostrú bolesť, tupú bolesť alebo pocit nepohodlia, môže to byť signálom rôznych zdravotných problémov. V tomto článku sa zameriame na najčastejšie príčiny, symptómy a možnosti liečby bolestí dolných končatín."
                }
              </p>
              <h2 className={listItemClassName}>
                {
                  "Prečo nás bolia nohy? Hlavné príčiny bolestí dolných končatín"
                }
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Príčiny bolestí dolných končatín môžu byť rôznorodé, ak sa vylúči úraz môže to byť od jednoduchého preťaženia až po vážne zdravotné problémy. Medzi najbežnejšie patria:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Svalové preťaženie a nadmerné zaťaženie"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak trávite veľa času na nohách alebo sa venujete intenzívnej fyzickej aktivite, môže dôjsť k preťaženiu svalov dolných končatín. To sa často stáva pri dlhodobom státí, behu, alebo pri ťažkých fyzických prácach. Svaly sa unavia, čo môže viesť k bolesti, svalovým kŕčom alebo dokonca k mikroskopickým trhlinám vo svalových vláknach."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Osteoartritída"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Osteoartritída je degeneratívne ochorenie kĺbov, ktoré vedie k opotrebovaniu chrupavky a následne k bolesti v kĺboch dolných končatín. Toto ochorenie sa najčastejšie vyskytuje u starších ľudí, ale môže postihnúť aj mladších, najmä ak sú geneticky predisponovaní alebo mali v minulosti zranenia kĺbov."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Žilová nedostatočnosť a kŕčové žily"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Žilová nedostatočnosť nastáva, keď žily nedokážu efektívne odvádzať krv z dolných končatín späť do srdca. To vedie k hromadeniu krvi v nohách, čo spôsobuje opuchy, bolesti a pocit ťažoby. Kŕčové žily sú viditeľným prejavom tohto stavu a môžu byť nielen bolestivé, ale aj esteticky nepríjemné."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Trombóza hlbokých žíl"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Trombóza hlbokých žíl je závažný stav, pri ktorom sa v hlbokých žilách, najčastejšie v nohách, vytvárajú krvné zrazeniny. Tento stav môže byť životu nebezpečný, ak sa krvná zrazenina uvoľní a putuje do pľúc, kde môže spôsobiť pľúcnu embóliu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"5." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Neuropatia"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Neuropatia je poškodenie nervov, ktoré môže byť spôsobené rôznymi faktormi, vrátane cukrovky, alkoholu, infekcií alebo nedostatku vitamínov. Bolesť spôsobená neuropatiou je často pálivá alebo bodavá a môže byť sprevádzaná zníženou citlivosťou alebo brnením v nohách."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ako sa bolesti dolných končatín prejavujú?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Symptómy bolestí dolných končatín môžu byť rôzne a závisia od konkrétnej príčiny. Medzi najčastejšie symptómy patria:"
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
                      {"Ťažkosti pri chôdzi"}
                    </strong>
                    {
                      ": Intenzívna bolesť alebo slabosť v nohách, ktorá môže sťažovať chôdzu alebo dokonca úplne znemožniť pohyb."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ako liečiť bolesti dolných končatín?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Liečba bolestí dolných končatín závisí od príčiny problému. Môže ísť o jednoduché domáce opatrenia alebo zložitejšie lekárske zákroky. Tu sú niektoré z možností:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Domáce opatrenia"}
                </strong>
              </h3>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Odpočinok"}
                    </strong>
                    {
                      ": Ak sú vaše nohy unavené alebo preťažené, odpočinok im môže pomôcť zotaviť sa. Skúste si nohy vyložiť do výšky, aby ste zlepšili cirkuláciu krvi."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Studené a teplé obklady"}
                    </strong>
                    {
                      ": Striedanie tepla a chladu môže pomôcť zmierniť zápal a bolesť. Teplé obklady uvoľňujú svaly, zatiaľ čo studené obklady znižujú opuchy."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy"}
                    </strong>
                    {
                      ": Tieto špeciálne pančuchy môžu pomôcť zlepšiť cirkuláciu krvi a znížiť opuchy, najmä ak máte problémy so žilovou nedostatočnosťou."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Fyzikálna terapia"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Fyzikálna terapia môže byť účinná pri zmierňovaní bolesti a zlepšovaní mobility. Môže zahŕňať:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Masáže"}
                    </strong>
                    {": Masáž môže pomôcť uvoľniť svaly a zmierniť napätie."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Ultrazvuková terapia"}
                    </strong>
                    {": Pomáha zmierniť zápal a podporiť hojenie tkanív."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Elektroterapia"}
                    </strong>
                    {
                      ": Používa elektrické impulzy na stimuláciu svalov a nervov, čím zmierňuje bolesť."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"3." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Lieky a farmakoterapia"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"V závislosti od príčiny môže byť potrebné užívať lieky:"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Analgetiká a protizápalové lieky"}
                    </strong>
                    {": Pomáhajú zmierniť bolesť a zápal."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Lieky na zlepšenie cirkulácie"}
                    </strong>
                    {
                      ": V prípade žilových problémov môžu byť predpísané lieky na zlepšenie prietoku krvi."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Antikoagulanciá"}
                    </strong>
                    {
                      ": V prípade trombózy sa používajú lieky na riedenie krvi, aby sa zabránilo tvorbe nových zrazenín."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"4." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Chirurgické zákroky"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V závažných prípadoch, keď iné metódy liečby zlyhajú, môže byť potrebná operácia:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Flebektómia"}
                    </strong>
                    {": Odstránenie postihnutých žíl v prípade kŕčových žíl."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Bypass alebo angioplastika"}
                    </strong>
                    {
                      ": Chirurgické zákroky na zlepšenie prietoku krvi v prípade závažných cievnych problémov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Prevencia bolestí dolných končatín"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia je najlepšou cestou, ako predchádzať bolestiam dolných končatín. Tu je niekoľko tipov, ako udržať vaše nohy zdravé:"
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
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Správna obuv"}
                    </strong>
                    {
                      ": Nosenie pohodlnej obuvi, ktorá poskytuje dostatočnú podporu, môže pomôcť predchádzať bolestiam spôsobeným nesprávnym držaním tela."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Bolesti dolných končatín môžu mať rôzne príčiny a môžu byť signálom rôznych zdravotných problémov. Preto je dôležité, aby ste svoje bolesti nepodceňovali a v prípade pretrvávajúcich ťažkostí vyhľadali lekársku pomoc. Správna diagnostika a liečba vám môžu pomôcť zmierniť bolesť a obnoviť vašu mobilitu, čo zlepší kvalitu vášho života. Nezanedbávajte svoje nohy – starostlivosť o ne je kľúčom k aktívnemu a bezbolestnému životu."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
