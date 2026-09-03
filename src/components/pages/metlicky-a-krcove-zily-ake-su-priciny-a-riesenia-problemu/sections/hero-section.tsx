const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl";

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
    text: "Metličky a kŕčové žily nie sú len estetický problém. Môžu výrazne ovplyvniť kvalitu vášho života. Ale s trochou starostlivosti, správnymi návykmi a prípadnou pomocou odborníkov sa dajú zvládnuť.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "Pamätajte, každý prípad je jedinečný. Čo funguje vášmu susedovi, nemusí fungovať vám. Počúvajte svoje telo a nebojte sa poradiť s odborníkmi.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Tak čo, cítite sa už ako expert na žily? 😉 Nezabudnite, že prevencia je vždy lepšia ako liečba. Hýbte sa, pite vodu a majte sa radi! Vaše nohy vám poďakujú.",
  },
];

export const items2: ListItem2Props[] = [
  { text: "Genetika", text_1: ": Ďakujeme, rodičia!" },
  { text: "Hormóny", text_1: ": Tehotenstvo, menopauza, antikoncepcia" },
  { text: "Životný štýl", text_1: ": Dlhé sedenie, státie, obezita" },
  { text: "Vek", text_1: ": S pribúdajúcimi rokmi je riziko vyššie" },
];

export const items3: ListItem2Props[] = [
  { text: "Bolesť nôh od kolien dolu", text_1: ": Nepríjemné, ale riešiteľné" },
  { text: "Opuchy nôh", text_1: ": Najmä večer alebo po dlhom státí" },
  { text: "Svrbenie", text_1: ": Môže byť nepríjemné, ale neškrabte sa!" },
  { text: "Ťažké nohy", text_1: ": Akoby ste mali na nohách závažia" },
  { text: "Viditeľné žily", text_1: ": Najmä na lýtkach a stehnách" },
];

export const items4: ListItem2Props[] = [
  {
    text: "Pohyb je kráľ",
    text_1: ": Chôdza, plávanie, joga - vyberte si, čo vás baví",
  },
  { text: "Kontrola váhy", text_1: ": Každé kilo navyše zaťažuje vaše žily" },
  {
    text: "Elevácia nôh",
    text_1: ": Zdvihnite nohy nad úroveň srdca, keď oddychujete",
  },
];

export const items5: ListItem5Props[] = [
  { text: "Podporujú krvný obeh" },
  { text: "Zmierňujú opuchy" },
  { text: "Uľavujú od bolesti" },
];

export const items6: ListItem2Props[] = [
  { text: "Studené obklady", text_1: ": Zmierňujú opuch a bolesť" },
  { text: "Aloe vera gél", text_1: ": Má protizápalové účinky" },
  { text: "Jablčný ocot", text_1: ": Podporuje krvný obeh" },
];

export const items7: ListItem2Props[] = [
  { text: "Sklerotizáciu", text_1: ": Vpichnutie špeciálnej látky do žíl" },
  { text: "Laserovú terapiu", text_1: ": Moderná metóda bez veľkých rezov" },
  { text: "Rádiofrekvenčnú abláciu", text_1: ": Efektívna pre väčšie žily" },
];

export const items8: ListItem2Props[] = [
  { text: "Hydratácia", text_1: ": Pite dostatok vody" },
  { text: "Strava", text_1: ": Vláknina a antioxidanty sú vaši spojenci" },
  { text: "Cvičenie", text_1: ": Pravidelný pohyb je kľúčový" },
  { text: "Správna obuv", text_1: ": Vyhnite sa príliš vysokým podpätkom" },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zo3zdW"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Metličky a kŕčové žily, aké sú príčiny a riešenia problému?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Tento článok je komplexným sprievodcom svetom metličiek a kŕčových žíl, vysvetľujúcim čo sú, prečo vznikajú a ako ovplyvňujú náš život. Ponúka praktické rady na prevenciu a liečbu, od úpravy životného štýlu cez prírodné metódy až po odborné lekárske zákroky. Celkovo poskytuje čitateľovi ucelený pohľad na túto bežnú, ale často prehliadanú zdravotnú problematiku, a to všetko v príjemnom, neformálnom tóne s nádychom humoru."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name">
                  {"VP team"}
                </p>
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">{"15. 7. 2025" + " "}</span>
                  <span className="[color:inherit] before:content-['_·_'] before:text-ploy-text-primary">
                    {" " + "3 min čítania"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zLWLwG"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(4392px,auto)_1fr] max-lg:px-4 lg:min-h-[217.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_minmax(3401px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zEwY44"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="woman sitting on bench near trees"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="woman sitting on bench near trees"
                  src="/external-assets/def696724338b11b.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="woman sitting on bench near trees"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="woman sitting on bench near trees"
                  src="/external-assets/b2c2b111713cbdc1.jpg"
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
              id="zvY-GI"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitajte! Dnes sa ponoríme do témy, ktorá trápi mnohých z nás - metličky a kŕčové žily. Nebojte sa, nebudeme tu strašiť, ale pozrieme sa na to prakticky a s trochou humoru."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú metličky a kŕčové žily?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Predstavte si vaše nohy ako mapu." + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Metličky"}
                </strong>{" "}
                {"sú tie malé, nenápadné potôčiky - jemné červené alebo modré čiarky na koži." +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "Kŕčové žily"}
                </strong>{" "}
                {
                  "sú už ako riadne rieky - vystúpené, kľukaté a niekedy aj bolestivé."
                }
              </p>
              <h3 className={listItemClassName2}>Prečo sa objavujú?</h3>
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
                      {"Fajčenie"}
                    </strong>
                    {": Ďalší dôvod prestať"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Príznaky, ktoré by ste nemali ignorovať"}
              </h2>
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
                {"V závažnejších prípadoch môže dôjsť k" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "zápalu žíl"}
                </strong>{" "}
                {"alebo dokonca k" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "hlbokej žilovej trombóze"}
                </strong>
                {". Ale nepanikárte, nie je to bežné."}
              </p>
              <h2 className={listItemClassName}>
                {"Ako na to? Komplexný prístup"}
              </h2>
              <h3 className={listItemClassName2}>1. Úprava životného štýlu</h3>
              <ul className="break-words my-0">
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
                      {"Striedanie pozícií"}
                    </strong>
                    {": Ak musíte dlho stáť alebo sedieť, robte si prestávky"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>2. Kompresná terapia</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Kompresné pančuchy" + " "}
                </strong>
                {"nie sú len pre babičky! Sú to skutočné zázraky:"}
              </p>
              <ul className="break-words my-0">
                {items5.map((item, index) => (
                  <ListItem5
                    key={index}
                    {...item}
                    separator={index < items5.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Dnes už existujú aj štýlové varianty, takže môžete vyzerať dobre a zároveň sa starať o svoje zdravie."
                }
              </p>
              <h3 className={listItemClassName2}>3. Prírodná lekáreň</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Skúste tieto" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "domáce lieky na zápal žíl"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                {items6.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items6.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Pagaštan konský"}
                    </strong>
                    {": Posilňuje žilové steny"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>4. Odborná pomoc</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak domáce metódy nestačia, je čas navštíviť" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "angiológa"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "cievneho chirurga"}
                </strong>
                {". Môžu vám ponúknuť:"}
              </p>
              <ul className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Chirurgický zákrok"}
                    </strong>
                    {": V krajnom prípade, ale dnes už minimálne invazívny"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Život po operácii kŕčových žíl"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ak ste podstúpili" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "operáciu kŕčových žíl"}
                </strong>
                {", rekonvalescencia je kľúčová:"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy"}
                    </strong>
                    {": Budú vaším najlepším priateľom"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Postupná aktivita"}
                    </strong>
                    {": Žiadne maratóny hneď po operácii"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Pozor na ranu"}
                    </strong>
                    {":" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Svrbenie rany po operácii"}
                    </strong>{" "}
                    {"je bežné, ale neškriabte sa"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Sledujte príznaky"}
                    </strong>
                    {": Akékoľvek neobvyklé zmeny konzultujte s lekárom"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Prevencia: Váš najlepší nástroj"}
              </h2>
              <ul className="break-words my-0">
                {items8.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Masáže"}
                    </strong>
                    {": Jemné masáže nôh podporujú cirkuláciu"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Mýty a fakty</h2>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Mýtus"}
                    </strong>
                    {": Kŕčové žily sú len kozmetický problém" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Fakt"}
                    </strong>
                    {": Môžu viesť k vážnym zdravotným komplikáciám"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Mýtus"}
                    </strong>
                    {": Len ženy majú kŕčové žily" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Fakt"}
                    </strong>
                    {": Postihujú aj mužov, hoci menej často"}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Mýtus"}
                    </strong>
                    {": Cvičenie zhorší kŕčové žily" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Fakt"}
                    </strong>
                    {": Správne cvičenie môže pomôcť predchádzať ich vzniku"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
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
