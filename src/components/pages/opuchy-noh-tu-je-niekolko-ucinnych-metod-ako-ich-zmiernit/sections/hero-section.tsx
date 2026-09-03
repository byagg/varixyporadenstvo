const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

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

type ListItem4Props = {
  text: string;
  separator?: string;
};

function ListItem4({ text, separator }: ListItem4Props) {
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

type ListItem6Props = {
  className: string;
};

function ListItem6({ className }: ListItem6Props) {
  return <p className={className} />;
}

type ListItem7Props = {
  text: string;
  text_1: string;
  text_2: string;
  separator?: string;
};

function ListItem7({ text, text_1, text_2, separator }: ListItem7Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          {text}
          <strong className="[color:inherit] break-words">{text_1}</strong>
          {text_2}
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
    text: "Opuchy nôh môžu byť nepríjemné, ale s správnymi technikami a životným štýlom ich môžete zvládnuť. Pamätajte, že prevencia je vždy lepšia ako liečba. Udržujte sa v pohybe, noste pohodlnú obuv, pite dostatok vody a doprajte svojim nohám občas trochu oddychu vo vyvýšenej polohe.",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "A nezabudnite, ak máte obavy o zdravie vašich nôh, neváhajte navštíviť lekára. Vaše nohy vás nosia celý život, zaslúžia si trochu extra pozornosti!",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    text: "Tak čo, cítite sa už ako expert na opuchy nôh? S týmito tipmi budete mať nohy ľahké ako pierko a pripravené na akékoľvek dobrodružstvo!",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Zlé obehové podmienky",
    text_1:
      ": Vaše žily pracujú proti gravitácii, aby dostali krv späť k srdcu. Niekedy potrebujú trochu pomoci.",
  },
  {
    text: "Sedenie alebo státie dlhší čas",
    text_1:
      ': Ak ste celý deň pripútaní k stoličke alebo stojíte na jednom mieste, vaše nohy nemajú šancu "pumpovať" krv späť nahor. Je to ako keď necháte auto dlho stáť - batéria sa môže vybiť.',
  },
  {
    text: "Teplá a vlhká klíma",
    text_1:
      ": Teplo spôsobuje rozšírenie ciev, čo môže viesť k opuchom. Je to ako keď sa v lete roztopia cesty.",
  },
];

export const items3: ListItem2Props[] = [
  {
    text: "Pohodlná obuv",
    text_1:
      ": Noste pohodlnú obuv správnej veľkosti. Vaše nohy nie sú Popoluškine - nemusia sa vtesnať do sklenenej črievičky.",
  },
  {
    text: "Zdravý životný štýl",
    text_1:
      ": Dodržujte vyváženú stravu a dostatočný pitný režim. Vaše telo potrebuje správne palivo, aby mohlo efektívne fungovať.",
  },
  {
    text: "Udržujte nohy vo vyvýšenej polohe",
    text_1:
      ": Keď odpočívate, zdvihnite nohy nad úroveň srdca. Je to ako gravitačná joga pre vaše žily.",
  },
];

export const items4: ListItem4Props[] = [
  {
    text: "Skúste rotáciu členkov: 10 krát v smere a 10 krát proti smeru hodinových ručičiek",
  },
  { text: "Striedavo sa postavte na špičky a na päty" },
  { text: "Chôdza je skvelý spôsob, ako rozprúdiť krv v nohách" },
];

export const items5: ListItem2Props[] = [
  {
    text: "Buďte aktívni",
    text_1:
      ": Uprednostnite aktívny spôsob života. Neznamená to, že musíte behať maratóny - aj pravidelná prechádzka môže urobiť zázraky.",
  },
  {
    text: "Soľ s mierou",
    text_1:
      ": Obmedzte konzumáciu soli. Príliš veľa soli je ako magnet na vodu vo vašom tele.",
  },
  {
    text: "Vitamíny C a E",
    text_1:
      ": Upravte svoju stravu tak, aby obsahovala potraviny bohaté na vitamíny C a E. Tieto vitamíny sú ako stavební robotníci, ktorí posilňujú steny vašich ciev.",
  },
  {
    text: "Hydratácia",
    text_1:
      ": Pite dostatok vody. Môže sa to zdať paradoxné, ale dobré zavodnenie pomáha telu zbaviť sa prebytočnej vody.",
  },
];

export const items6: ListItem6Props[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
  },
];

export const items7: ListItem7Props[] = [
  {
    text: "Ak pociťujete silné bolesti alebo ",
    text_1: "bolesť nôh od kolien dolu",
    text_2: "",
  },
  {
    text: "Ak máte ",
    text_1: "viditeľné žily na nohách",
    text_2: ", ktoré sú bolestivé alebo zapálené",
  },
  {
    text: "Ak spozorujete zmeny farby kože na nohách alebo ",
    text_1: "hyperpigmentáciu na nohách",
    text_2: "",
  },
  {
    text: "Ak máte ",
    text_1: "vnútorné kŕčové žily - príznaky",
    text_2: " ako bolesť, ťažkosť alebo pálenie v nohách",
  },
];

export const items8: ListItem2Props[] = [
  {
    text: "Sklerotizácia kŕčových žíl",
    text_1: ": Injekčné podanie látky, ktorá uzavrie postihnutú žilu.",
  },
  {
    text: "Laserová operácia kŕčových žíl",
    text_1: ": Použitie laseru na uzavretie menších kŕčových žíl.",
  },
  {
    text: "Rádiofrekvenčná ablácia varixov",
    text_1: ": Použitie rádiových vĺn na uzavretie väčších kŕčových žíl.",
  },
];

export const items9: ListItem4Props[] = [
  { text: "Ginkgo biloba: Zlepšuje cirkuláciu" },
  { text: "Koňský gaštan: Posilňuje žilové steny" },
  { text: "Kurkuma: Má silné protizápalové účinky" },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zsYU9z"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Opuchy nôh? Tu je niekoľko účinných metód, ako ich zmierniť"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte účinné metódy na zmiernenie opuchov nôh v tomto komplexnom sprievodcovi. Od príčin cez prevenciu až po domáce lieky - naučte sa, ako sa postarať o svoje nohy a zmierniť nepríjemné príznaky kŕčových žíl. Praktické tipy a odborné rady pre zdravé a ľahké nohy."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">6 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="z34uLk"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-5 max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(9225px,auto)_minmax(32px,auto)_minmax(200px,auto)_minmax(16px,auto)_minmax(200px,auto)_1fr] max-lg:px-4 lg:min-h-[375.8125rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_11.5196%_5.31046%_32.6797%_5.31046%_11.5196%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(2264px,auto)_minmax(426px,auto)_minmax(1550px,auto)_minmax(476px,auto)_minmax(431px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-7">
            <div
              id="zrtegJ"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="a black and white photo of a person's feet on a table"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="a black and white photo of a person's feet on a table"
                  src="/external-assets/e6b7cfc30fb54a5c.jpg"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="a black and white photo of a person's feet on a table"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="a black and white photo of a person's feet on a table"
                  src="/external-assets/1602c276d40d4434.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-5 lg:col-start-2 lg:col-end-7 lg:row-end-9">
            <div
              id="z5CySu"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vitajte vo svete pripuchnutých členkov a ťažkých nôh! Ak ste sa niekedy cítili ako ťažkotonážny panák na konci dlhého dňa, ste na správnom mieste. Opuchy nôh môžu byť skutočnou nepríjemnosťou, ktorá dokáže ovplyvniť náš každodenný život. Ale nebojte sa, máme pre vás dobrú správu! Existuje niekoľko účinných metód, ako zmierniť opuchy nôh a pocit ťažkosti. Poďme sa spolu pozrieť na to, čo sú opuchy nôh a ako im predchádzať alebo ich zmierniť prirodzeným spôsobom."
                }
              </p>
              <h2 className={listItemClassName}>Čo sú opuchy nôh?</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že vaše nohy sú ako špongie. Normálne, keď sa hýbete, tieto špongie sa pravidelne stláčajú a uvoľňujú, čo pomáha cirkulácii tekutín. Ale niekedy sa stane, že tieto špongie nasajú príliš veľa vody a... bum! Máme tu opuch."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Opuchy nôh, odborne nazývané edémy, môžu byť spôsobené viacerými faktormi:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Žilová nedostatočnosť"}
                    </strong>
                    {
                      ": Keď vaše žily nefungujú tak, ako by mali, krv sa hromadí v dolných končatinách. Je to ako dopravná zápcha vo vašich žilách."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zápal"}
                    </strong>
                    {
                      ": Vaše telo reaguje na poranenie alebo infekciu tým, že posiela viac tekutiny do postihnutej oblasti. Je to ako keď hasiči zalejú požiar vodou."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Nefungujúce chlopne"}
                    </strong>
                    {
                      ": Tieto malé ventily v žilách pomáhajú krvi prúdiť správnym smerom. Keď nefungujú správne, krv sa môže vracať a hromadiť sa. Je to ako keď sa pokazí jednosmerka na ceste."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Príčiny opúchania nôh</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď vieme, čo sú opuchy nôh, pozrime sa na to, prečo sa vlastne objavujú:"
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
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Tehotenstvo"}
                    </strong>
                    {': Áno, dámy, toto je ďalší "bonus" tehotenstva.' + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "Tehotenstvo a kŕčové žily"}
                    </strong>{" "}
                    {"často idú ruka v ruke."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Nadváha"}
                    </strong>
                    {": Extra kilá znamenajú extra tlak na vaše nohy a žily."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Hormonálne zmeny"}
                    </strong>
                    {
                      ": Hormóny môžu spôsobiť, že vaše telo zadržiava viac vody. Je to ako keď sa priehrada naplní po veľkom daždi."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>Prevencia opúchania nôh</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Teraz, keď vieme, prečo naše nohy opúchajú, poďme sa pozrieť na to, ako tomu predchádzať:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Cvičenie je kráľ"}
                    </strong>
                    {": Vykonávajte" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "cviky na kŕčové žily"}
                    </strong>{" "}
                    {
                      "a posilnenie svalov nôh. Je to ako pravidelná údržba pre vaše nohy."
                    }
                  </p>
                  <ul className="break-words my-0">
                    {items4.map((item, index) => (
                      <ListItem4
                        key={index}
                        {...item}
                        separator={index < items4.length - 1 ? "\n" : ""}
                      />
                    ))}
                  </ul>
                </li>
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
                      {"Kontrolujte svoju hmotnosť"}
                    </strong>
                    {
                      ": Udržiavanie zdravej hmotnosti zníži tlak na vaše nohy a žily."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Domáce prostriedky na zmiernenie opúchania nôh"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak už máte opuchy, tu je niekoľko domácich trikov, ktoré môžu pomôcť:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Studený obklad na opuch"}
                    </strong>
                    {
                      ": Vylejte studenú vodu do misky a namočte nohy na chvíľu. Je to ako ľadový obklad pre vaše nohy."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy"}
                    </strong>
                    {": Noste" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "kompresné pančuchy na kŕčové žily"}
                    </strong>
                    {
                      ". Sú ako objatie pre vaše nohy, ktoré pomáha zlepšiť cirkuláciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Masáž"}
                    </strong>
                    {
                      ": Jemne si masírujte nohy smerom k srdcu. Je to ako ručné pumpovanie krvi späť nahor."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Bylinné kúpele"}
                    </strong>
                    {
                      ": Skúste kúpeľ nôh s esenciálnymi olejmi ako levanduľa alebo mäta. Je to ako spa procedúra pre vaše nohy."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Elevácia nôh"}
                    </strong>
                    {
                      ": Keď odpočívate, položte si nohy vyššie ako srdce. Gravitácia bude pracovať pre vás, nie proti vám."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Zmeny životného štýlu, ktoré pomáhajú pri opúchaniach nôh"}
              </h2>
              <ol className="break-words my-0">
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
                      {"Menej alkoholu a kofeínu"}
                    </strong>
                    {": Tieto látky môžu prispievať k dehydratácii a opuchom."}
                  </p>
                  {items6.map((item, index) => (
                    <ListItem6 key={index} {...item} />
                  ))}
                </li>
              </ol>
              {Array.from({
                length: 5,
              }).map((_, index) => (
                <p
                  key={index}
                  className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8"
                />
              ))}
              <h2 className={listItemClassName}>Kedy navštíviť lekára</h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Aj keď opuchy nôh sú často neškodné, niekedy môžu signalizovať vážnejšie problémy. Tu sú situácie, kedy by ste mali navštíviť" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "angiológa"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "cievneho chirurga"}
                </strong>
                {":"}
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    {
                      "Ak máte vážne opuchy nôh, ktoré neustupujú ani po odpočinku a elevácii"
                    }
                  </p>
                </li>
                {items7.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Pamätajte, že lekár je váš spojenec v boji proti opuchom a" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kŕčovým žilám na nohách"}
                </strong>
                {". Neváhajte ho navštíviť, ak máte obavy."}
              </p>
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <h3 className={listItemClassName2}>
                {"Existuje zázračný liek na kŕčové žily?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Žiaľ, neexistuje žiadny" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "zázračný liek na kŕčové žily"}
                </strong>
                {
                  ". Liečba zvyčajne zahŕňa kombináciu životného štýlu, cvičenia a niekedy medicínskych zákrokov. Ale nebojte sa, s správnou starostlivosťou môžete výrazne zlepšiť zdravie vašich žíl. Ako rvú pomoc vždy môžete použiť liek ako Detralex (Fluxoven, Diomax, Mobivenal)"
                }
              </p>
              <h3 className={listItemClassName2}>Ako bolia kŕčové žily?</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"Bolesť kŕčových žíl" + " "}
                </strong>
                {"môže byť rôzna. Niektorí ľudia popisujú ťažký pocit v nohách, iní pociťujú bodavú alebo pulzujúcu bolesť. Môže sa vyskytnúť aj" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "svrbenie nôh v noci"}
                </strong>{" "}
                {"alebo" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "bolesť nôh od kolien dolu"}
                </strong>
                {"."}
              </p>
              <h3 className={listItemClassName2}>
                {"Môžem cestovať lietadlom s kŕčovými žilami?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Áno, môžete, ale je dôležité dodržiavať niekoľko opatrení. Noste" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "kompresné pančuchy"}
                </strong>
                {", často sa prechádzajte počas letu a pite veľa vody. Ak ste nedávno podstúpili" +
                  " "}
                <strong className="[color:inherit] break-words">
                  {" " + "operáciu kŕčových žíl"}
                </strong>
                {", poraďte sa s lekárom pred dlhým letom."}
              </p>
              <h3 className={listItemClassName2}>
                {"Aké sú možnosti liečby kŕčových žíl?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Existuje niekoľko možností liečby, od konzervatívnych až po invazívne:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Kompresné pančuchy"}
                    </strong>
                    {": Pomáhajú zlepšiť cirkuláciu a zmierniť príznaky."}
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <span className="[color:inherit] font-bold break-words">
                      <strong className="[color:inherit] break-words">
                        {"Medikamentózna liečba"}
                      </strong>
                    </span>
                    {": Látky ako diosmín a hesperidín, napríklad v Detralexe."}
                  </p>
                </li>
                {items8.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items8.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Chirurgické" + " "}
                    <strong className="[color:inherit] break-words">
                      {" " + "odstránenie kŕčových žíl"}
                    </strong>
                    {": V závažných prípadoch môže byť potrebná operácia."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName2}>
                {"Aké sú prírodné protizápalové lieky na kŕčové žily?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Existuje niekoľko" + " "}
                <strong className="[color:inherit] break-words">
                  {" " + "prírodných protizápalových liekov"}
                </strong>
                {", ktoré môžu pomôcť pri kŕčových žilách:"}
              </p>
              <ul className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem4
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {"Zázvor: Podporuje krvný obeh"}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8" />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vždy sa poraďte s lekárom pred užívaním akýchkoľvek doplnkov, najmä ak užívate iné lieky. Moderné je užívanie bioflavonoidov napr. Detralexu ako suspenzie, pre tých, čo nemaju radi veľké tabletky."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-3 lg:col-end-6 lg:row-start-5 lg:row-end-6">
            <div
              id="z-Kg5W"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.jdoqocy.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Ffluxoven-500-mg-60-tabliet%2F&cjsku=495784" target="_top"><img src="/external-assets/d3acb2a3506dcba3.jpg" border="0" alt="FLUXOVEN 500 mg 60 tabliet"></a><img alt="" src="/external-assets/3961fa6ce9ad8f5b.gif" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-8 max-lg:row-end-9 lg:col-start-4 lg:col-end-5 lg:row-start-7 lg:row-end-8">
            <div
              id="zIhVI4"
              className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
            >
              <iframe
                title="custom code element"
                className="w-full h-auto inline grid-embed__iframe overflow-clip"
                srcDoc={
                  '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body><a href="https://www.jdoqocy.com/click-100810134-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fdetralex-1000-mg-peroralna-suspenzia-vo-vrecku-30-kusov%2F&cjsku=459157" target="_top"><img src="/external-assets/c3140789896a5116.jpg" border="0" alt="DETRALEX 1000 mg peror�lna suspenzia vo vrecku 30 kusov"></a><img alt="" src="/external-assets/914f78a89b87889a.gif" width="1" height="1" border="0">\n\n</body>\n</html>'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
