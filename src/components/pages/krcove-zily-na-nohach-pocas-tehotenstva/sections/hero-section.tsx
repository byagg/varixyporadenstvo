const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
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
  { text: "Pocit ťažkých nôh" },
  { text: "Svrbenie v okolí žíl" },
  { text: "Kŕče v nohách, najmä v noci" },
  { text: "Bolesť, pálenie alebo pulzovanie v dolných končatinách" },
  { text: "Opuchy nôh a členkov" },
];

export const items2: ListItem2Props[] = [
  {
    text: "Hormonálne zmeny:",
    text_1:
      " Počas tehotenstva stúpa hladina hormónu progesterónu, ktorý znižuje napätie cievnych stien a tým znižuje ich schopnosť efektívne prepravovať krv. To môže viesť k vzniku kŕčových žíl.",
  },
  {
    text: "Zvýšený objem krvi:",
    text_1:
      " Počas tehotenstva sa objem krvi v tele ženy zvyšuje, aby zabezpečil výživu pre rastúce dieťa. Tento zvýšený objem môže spôsobiť väčší tlak na žily.",
  },
  {
    text: "Zväčšenie maternice:",
    text_1:
      " Ako dieťa rastie, maternica vyvíja tlak na cievy v panve, čo môže spôsobiť zhoršenie odtoku krvi z dolných končatín.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Kompresné pančuchy:",
    text_1:
      " Tieto pančuchy pomáhajú zlepšiť cirkuláciu krvi a zmierniť opuchy. Odporúča sa ich nosiť počas celého dňa, najmä pri dlhodobom státí alebo sedení.",
  },
  {
    text: "Zmeny životného štýlu:",
    text_1:
      " Vyhnite sa dlhému státiu alebo sedeniu na jednom mieste, pravidelne cvičte (po konzultácii s lekárom) a obmedzte príjem sodíka v strave.",
  },
  {
    text: "Zdvihnutie nôh:",
    text_1:
      " Pravidelné zdvíhanie nôh nad úroveň srdca môže pomôcť zlepšiť odtok krvi z dolných končatín.",
  },
  {
    text: "Spánok na ľavom boku:",
    text_1:
      " Táto poloha znižuje tlak na dolnú dutú žilu, čo môže zmierniť príznaky.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z6myN0"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Kŕčové žily na nohách počas tehotenstva"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Kŕčové žily počas tehotenstva môžu byť nepríjemné, ale s vhodnými opatreniami môžete minimalizovať ich vplyv. Zistite viac o príznakoch, liečbe a prevencii kŕčových žíl počas gravidity."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">{"7/15/2025" + " "}</span>
                  <span className="[color:inherit] before:content-['_·_'] before:text-ploy-text-primary">
                    {" " + "4 min read"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zIp7Qi"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(5652px,auto)_1fr] max-lg:px-4 lg:min-h-[202.3125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(2644px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="z09r8y"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="person picking a black wet stone"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="person picking a black wet stone"
                  src="/external-assets/c30679a6d1575260.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="person picking a black wet stone"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="person picking a black wet stone"
                  src="/external-assets/bbc1bb54a14e99b2.jpg"
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
              id="z0ynDX"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tehotenstvo je obdobím významných zmien v ženskom tele, ktoré sa prejavujú na rôznych úrovniach. Jedným z problémov, ktoré môžu ženy počas gravidity postihnúť, sú kŕčové žily na nohách. Tieto rozšírené, spletité a často bolestivé žily môžu byť pre nastávajúce mamičky nielen estetickým, ale aj zdravotným problémom. Pochopenie príčin a možností liečby kŕčových žíl počas tehotenstva je kľúčové pre udržanie zdravia matky a pohodlia počas celého tehotenstva."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Príznaky kŕčových žíl počas gravidity"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Počas tehotenstva sa kŕčové žily môžu objaviť náhle alebo sa môžu zhoršiť, ak už predtým existovali." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Príznaky"}
                </strong>{" "}
                {"zahŕňajú:"}
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
                    {"Zhoršenie existujúcich hemoroidov"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Tieto symptómy môžu byť rôznej intenzity a môžu sa líšiť v závislosti od jednotlivca. Niektoré ženy môžu pociťovať len mierne nepohodlie, zatiaľ čo iné môžu trpieť silnou bolesťou a obmedzenou pohyblivosťou."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo spôsobuje varixy počas tehotenstva?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Počas tehotenstva prechádza ženské telo mnohými zmenami, ktoré môžu prispieť k vzniku kŕčových žíl. Medzi hlavné" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "príčiny"}
                </strong>{" "}
                {"patria:"}
              </p>
              <ul className="break-words my-0">
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
                      {"Zápcha:" + " "}
                    </strong>
                    {
                      "Tehotenstvo môže zhoršiť alebo spôsobiť zápchu, ktorá môže zvyšovať tlak na žily v konečníku a viesť k vzniku hemoroidov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Rizikové faktory kŕčových žíl počas tehotenstva"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Riziko vzniku kŕčových žíl počas tehotenstva môže zvyšovať viacero" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "faktorov"}
                </strong>
                {", medzi ktoré patria:"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Genetika:" + " "}
                    </strong>
                    {
                      "Ak mali kŕčové žily vaša matka alebo stará mama, existuje vyššia pravdepodobnosť, že sa u vás počas tehotenstva objavia."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hmotnosť:" + " "}
                    </strong>
                    {
                      "Nadváha alebo obezita zvyšuje tlak na žily dolných končatín, čo môže prispieť k vzniku kŕčových žíl."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Strava:" + " "}
                    </strong>
                    {
                      "Príliš vysoký príjem sodíka môže spôsobiť zadržiavanie tekutín v tele, čo môže zhoršiť opuchy a zvyšovať riziko kŕčových žíl. Nedostatok vlákniny a vody môže zhoršiť zápchu, čím sa zvyšuje riziko hemoroidov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Diagnostika kŕčových žíl počas gravidity"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Diagnostika kŕčových žíl počas tehotenstva sa zvyčajne začína" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "fyzickým vyšetrením"}
                </strong>{" "}
                {"dolných končatín. Ak sú príznaky výrazné alebo ak existuje podozrenie na komplikácie, lekár môže odporučiť" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "ultrazvukové vyšetrenie"}
                </strong>
                {
                  ", ktoré umožňuje zmerať prietok krvi v povrchových a hlbokých žilách. Toto vyšetrenie pomáha identifikovať prípadné zablokovania alebo miesta, kde chlopne nefungujú správne."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ultrazvuk je neinvazívna a bezpečná metóda, ktorá je vhodná aj počas tehotenstva. V niektorých prípadoch, ak existuje podozrenie na hlbokú žilovú trombózu (HŽT), ktorá môže spôsobiť vážne komplikácie vrátane pľúcnej embólie, môže byť potrebné ďalšie špecializované vyšetrenie."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Liečba kŕčových žíl počas tehotenstva"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Kŕčové žily počas tehotenstva sú zvyčajne neškodné a často sa zlepšia po pôrode." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Liečba"}
                </strong>{" "}
                {
                  "sa zvyčajne sústreďuje na zmiernenie symptómov a prevenciu zhoršenia stavu. Konzervatívne prístupy zahŕňajú:"
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
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak kŕčové žily po pôrode nezmiznú, môžu sa s lekárom prediskutovať rôzne možnosti liečby, ako sú" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "sklerotizácia"}
                </strong>
                {"," + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "radiofrekvenčná ablácia (RFA)"}
                </strong>
                {"," + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "laserová terapia"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "chirurgické zákroky"}
                </strong>
                {"."}
              </p>
              <h2 className={listItemClassName}>
                {"Prevencia kŕčových žíl počas tehotenstva"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Prevencia kŕčových žíl počas tehotenstva môže zahŕňať niekoľko jednoduchých opatrení:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Pravidelná fyzická aktivita:" + " "}
                    </strong>
                    {
                      "Cvičenia, ako je chôdza alebo plávanie, môžu zlepšiť krvný obeh a znížiť riziko vzniku kŕčových žíl."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      <u className="break-words">
                        <a
                          href="https://varixyporadenstvo.com/liecba#dieta"
                          target="_self"
                          className="[color:inherit] break-words"
                        >
                          {"Zdravá strava:"}
                        </a>
                      </u>
                    </strong>{" "}
                    {
                      "Strava bohatá na vlákninu a dostatočný príjem tekutín pomáhajú predchádzať zápche a znižujú tlak na žily."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Správne obutie:" + " "}
                    </strong>
                    {
                      "Pohodlné topánky s nízkym podpätkom znižujú tlak na žily dolných končatín."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Kedy vyhľadať lekársku pomoc"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak sa u vás počas tehotenstva objavia príznaky ako" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "silná bolesť"}
                </strong>
                {"," + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "výrazný opuch"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "začervenanie nôh"}
                </strong>
                {
                  ", je dôležité okamžite vyhľadať lekársku pomoc. Tieto príznaky môžu naznačovať komplikácie, ako je hlboká žilová trombóza, ktorá vyžaduje okamžitú liečbu."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Kŕčové žily na nohách počas tehotenstva môžu byť nepríjemným sprievodným javom, ale s vhodnými opatreniami sa dá minimalizovať ich vplyv na každodenný život. Správna diagnostika, konzervatívna liečba a preventívne opatrenia sú kľúčové pre udržanie pohodlia a zdravia počas celého tehotenstva. Ak príznaky pretrvávajú aj po pôrode, poraďte sa s odborníkom o ďalších možnostiach liečby."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
