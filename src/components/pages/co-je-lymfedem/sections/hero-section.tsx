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
    text: "Chirurgické zákroky:",
    text_1:
      " Operácie, najmä tie, ktoré zahŕňajú odstránenie lymfatických uzlín, ako napríklad pri liečbe rakoviny prsníka, môžu spôsobiť lymfedém.",
  },
  {
    text: "Rádioterapia:",
    text_1:
      " Ožarovanie lymfatických uzlín môže poškodiť lymfatický systém a spôsobiť lymfedém.",
  },
  {
    text: "Infekcie:",
    text_1:
      " Opakované infekcie môžu viesť k poškodeniu lymfatických ciest a uzlín.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Opuch končatín:",
    text_1:
      " Zvyčajne postihuje jednu alebo obe ruky či nohy, v závažnejších prípadoch aj oblasť trupu alebo genitálií.",
  },
  {
    text: "Pocit tiaže alebo nepohodlia:",
    text_1: " Postihnuté miesto môže byť ťažké a napnuté.",
  },
  {
    text: "Zmeny na koži:",
    text_1:
      " Koža môže byť tvrdá, hrubá a suchá, v niektorých prípadoch môže mať zhrubnuté vrásky alebo jazvy.",
  },
  {
    text: "Znížená pohyblivosť:",
    text_1:
      " Opuchnutá končatina môže byť stuhnutá a pohyb môže byť obmedzený.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zDUaS3"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Čo je lymfedém?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Lymfedém je chronické ochorenie spôsobené hromadením lymfy v tkanivách. Zistite viac o jeho príčinách, príznakoch a možnostiach liečby, vrátane kompresívnej terapie a cvičenia."
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
        id="z-ZtYz"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(5383px,auto)_1fr] max-lg:px-4 lg:min-h-[228.375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_8.41503%_49.5098%_8.41503%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3051px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zlXDFS"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="A group of question marks sitting next to each other"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="A group of question marks sitting next to each other"
                  src="/external-assets/f3de42a39e773dd8.jpg"
                  height="344"
                  width="606"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="A group of question marks sitting next to each other"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="A group of question marks sitting next to each other"
                  src="/external-assets/8d1ac2611106df95.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5"
          >
            <div
              id="zcfJng"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Lymfedém je chronické ochorenie lymfatického systému, ktoré vedie k opuchu tkanív, najčastejšie v končatinách. Tento opuch je spôsobený nahromadením lymfy, čírej tekutiny, ktorá cirkuluje v tele a obsahuje biele krvinky. Tieto bunky sú nevyhnutné na boj proti infekciám a udržiavanie zdravia tkanív. Keď je lymfatický systém poškodený alebo zablokovaný, lymfa sa hromadí v tkanivách a spôsobuje opuchy, ktoré môžu byť bolestivé a obmedzujúce."
                }
              </p>
              <h2 className={listItemClassName}>Príčiny Lymfedému</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Lymfedém môže vzniknúť z rôznych príčin. Rozdeľujeme ho na primárny a sekundárny lymfedém."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Primárny Lymfedém"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Primárny lymfedém je zriedkavý a vzniká v dôsledku vrodených chýb lymfatického systému. Môže sa prejaviť už v detstve, v puberte alebo až v dospelosti. Príčiny zahŕňajú:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Genetické poruchy:" + " "}
                    </strong>
                    {
                      "Poruchy v génoch, ktoré riadia vývoj lymfatických ciev, môžu viesť k slabému alebo nedostatočnému lymfatickému systému."
                    }
                  </p>
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Sekundárny Lymfedém"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Sekundárny lymfedém je častejší a vzniká v dôsledku poškodenia lymfatického systému počas života. Medzi hlavné príčiny patria:"
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
                      {"Poranenia:" + " "}
                    </strong>
                    {
                      "Fyzické zranenia, ktoré zasiahnu lymfatický systém, môžu byť príčinou vzniku lymfedému."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Príznaky Lymfedému</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Lymfedém sa najčastejšie prejavuje opuchom končatín, ale môže postihnúť aj iné časti tela. Medzi typické príznaky patria:"
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
                      {"Infekcie:" + " "}
                    </strong>
                    {
                      "Postihnutá oblasť je náchylnejšia na infekcie, ktoré môžu zhoršiť príznaky lymfedému."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Diagnóza Lymfedému</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Diagnóza lymfedému sa stanovuje na základe klinického vyšetrenia, anamnézy pacienta a doplňujúcich diagnostických metód. Lekár môže vykonať nasledujúce vyšetrenia:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Fyzikálne vyšetrenie:" + " "}
                    </strong>
                    {
                      "Lekár preskúma opuchnutú oblasť, aby zistil, či je opuch spôsobený lymfedémom alebo inou príčinou."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zobrazovacie metódy:" + " "}
                    </strong>
                    {
                      "Ultrazvuk, CT alebo MRI môžu byť použité na presnejšie zobrazenie lymfatických ciest a na identifikáciu prekážok v lymfatickom systéme."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Lymfoscintigrafia:" + " "}
                    </strong>
                    {
                      "Špeciálne zobrazovacie vyšetrenie, ktoré hodnotí stav lymfatického systému."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Liečba Lymfedému</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Lymfedém je chronické ochorenie, ale s vhodnou liečbou je možné zmierniť príznaky a zlepšiť kvalitu života pacienta. Liečba zvyčajne zahŕňa kombináciu viacerých prístupov:"
                }
              </p>
              <h3 className={listItemClassName2}>
                {"1." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kompresívna Terapia"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresívna terapia je základným pilierom liečby lymfedému. Zahŕňa nosenie kompresívnych pančúch, rukávov alebo bandáží, ktoré pomáhajú znižovať opuch a zlepšovať tok lymfy. Kompresívne obväzy musia byť nosené pravidelne, často počas celého dňa."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"2." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Manuálna Lymfodrenáž"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Manuálna lymfodrenáž je špeciálna technika masáže, ktorá stimuluje lymfatický tok a podporuje odvádzanie lymfy z opuchnutých oblastí. Tento postup by mal vykonávať kvalifikovaný terapeut, ktorý je vyškolený na prácu s pacientmi s lymfedémom."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"3." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Cvičenie"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Fyzická aktivita je dôležitou súčasťou liečby lymfedému. Špeciálne navrhnuté cvičenia môžu pomôcť zlepšiť lymfatický obeh a znížiť opuch. Medzi vhodné aktivity patria plávanie, chôdza, bicyklovanie a jóga. Je však dôležité cvičiť pod dohľadom lekára alebo fyzioterapeuta, aby sa predišlo zhoršeniu stavu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"4." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Starostlivosť o Kožu"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pri lymfedéme je koža náchylná na infekcie, preto je dôležité udržiavať ju čistú a hydratovanú. Vyhnite sa poraneniam kože, pretože môžu viesť k infekciám a zhoršeniu opuchu."
                }
              </p>
              <h3 className={listItemClassName2}>
                {"5." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Zmena Životného Štýlu"}
                </strong>
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Zdravý životný štýl môže výrazne ovplyvniť priebeh lymfedému. To zahŕňa:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zdravú stravu:" + " "}
                    </strong>
                    {
                      "Udržiavanie zdravej hmotnosti a vyhýbanie sa potravinám, ktoré podporujú zadržiavanie tekutín, ako je nadmerný príjem soli."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hydratáciu:" + " "}
                    </strong>
                    {
                      "Pitie dostatočného množstva vody na podporu správneho fungovania lymfatického systému."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Vyhýbanie sa fajčeniu a alkoholu:" + " "}
                    </strong>
                    {"Tieto návyky môžu zhoršiť stav lymfatického systému."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Prevencia Lymfedému</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia lymfedému je obzvlášť dôležitá pre ľudí, ktorí majú zvýšené riziko jeho vzniku, napríklad po chirurgickom zákroku alebo rádioterapii. Prevencia zahŕňa:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Starostlivosť o kožu a končatiny:" + " "}
                    </strong>
                    {
                      "Vyhýbanie sa zraneniam a infekciám, pravidelná starostlivosť o pokožku."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Monitorovanie opuchov:" + " "}
                    </strong>
                    {
                      "Skoré rozpoznanie príznakov lymfedému a včasná intervencia môžu zabrániť zhoršeniu stavu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Kompresívne pomôcky:" + " "}
                    </strong>
                    {
                      "Používanie kompresívnych rukávov alebo pančúch počas dlhých letov alebo pri zvýšenom riziku opuchov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Lymfedém je komplexné ochorenie, ktoré môže výrazne ovplyvniť kvalitu života. Aj keď neexistuje definitívna liečba, správna starostlivosť, cvičenie a zmeny v životnom štýle môžu výrazne zlepšiť priebeh ochorenia a znížiť jeho príznaky. Ak máte podozrenie na lymfedém alebo patríte do rizikovej skupiny, je dôležité konzultovať svoj stav s lekárom a dodržiavať všetky odporúčania týkajúce sa liečby a prevencie."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
