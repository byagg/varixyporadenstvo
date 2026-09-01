const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

/**
 * @ployComponent
 * @ployComponentId ake-su-rizika-operacie-varixov-v-lete-metodou-rfa-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
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

type ListItem7Props = {
  text: string;
  text_2: string;
  text_3: string;
  separator?: string;
};

function ListItem7({ text, text_2, text_3, separator }: ListItem7Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
          <strong className="[color:inherit] break-words">{text}</strong>
          {":"}
        </p>
        <ul className="break-words my-0">
          <li className="[color:inherit] break-words">
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
              {text_2}
            </p>
          </li>
          <li className="[color:inherit] break-words">
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
              {text_3}
            </p>
            <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
          </li>
        </ul>
      </li>
      {separator}
    </>
  );
}

type ListItem8Props = {
  text: string;
  separator?: string;
};

function ListItem8({ text, separator }: ListItem8Props) {
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
    text: "Rádiofrekvenčná ablácia (RFA) je moderná a efektívna metóda liečby varixov, ktorá prináša mnohé výhody v porovnaní s tradičnými chirurgickými metódami. Aj keď leto môže priniesť určité výzvy pre pacientov podstupujúcich tento zákrok, s proper prípravou a starostlivosťou je možné minimalizovať riziká a zabezpečiť úspešnú liečbu.",
  },
  {
    text: "Kľúčom k úspešnej liečbe je spolupráca s vaším lekárom, dodržiavanie jeho pokynov a pozorné sledovanie vášho stavu počas rekonvalescencie. Ak zvažujete liečbu varixov, nezabudnite prediskutovať s vaším lekárom všetky dostupné možnosti a nájsť riešenie, ktoré najlepšie vyhovuje vašim individuálnym potrebám.",
  },
  {
    text: "Pamätajte, že zdravie vašich žíl je dôležitou súčasťou vášho celkového zdravia. S proper starostlivosťou a liečbou môžete nielen zlepšiť vzhľad vašich nôh, ale aj významne zlepšiť kvalitu vášho života.",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Viditeľné žily na nohách",
    text_1: ": Pokrútené, vystúpené žily modrej alebo fialovej farby.",
  },
  {
    text: "Bolesť nôh od kolien dole",
    text_1: ": Pocit ťažkosti a únavy v nohách, najmä v dolnej časti.",
  },
  {
    text: "Opuchy nôh",
    text_1:
      ": Najmä v oblasti členkov a chodidiel, ktoré sa zvyčajne zhoršujú počas dňa.",
  },
  {
    text: "Svrbenie a pálenie",
    text_1: ": Nepríjemné pocity v oblasti postihnutých žíl.",
  },
  { text: "Nočné kŕče", text_1: ": Bolestivé sťahy svalov, najmä v lýtkach." },
];

export const items3: ListItem2Props[] = [
  {
    text: "Príprava",
    text_1: ": Lekár najprv pomocou ultrazvuku identifikuje postihnuté žily.",
  },
  {
    text: "Lokálna anestézia",
    text_1:
      ": Oblasť okolo postihnutej žily sa znecitliví lokálnou anestéziou.",
  },
  {
    text: "Zavedenie katétra",
    text_1: ": Cez malý rez sa do žily zavedie tenký katéter.",
  },
  {
    text: "Aplikácia energie",
    text_1:
      ": Katéter dodá rádiofrekvenčnú energiu do steny žily, čo spôsobí jej zahrievanie.",
  },
  {
    text: "Uzavretie žily",
    text_1: ": Teplo spôsobí, že sa stena žily stiahne a žila sa uzavrie.",
  },
  {
    text: "Ukončenie",
    text_1: ": Katéter sa odstráni a na miesto rezu sa aplikuje náplasť.",
  },
];

export const items4: ListItem2Props[] = [
  {
    text: "Minimálna invazívnosť",
    text_1:
      ": Na rozdiel od tradičnej chirurgickej liečby, RFA vyžaduje len malý rez.",
  },
  {
    text: "Kratší čas zákroku",
    text_1: ": Procedúra zvyčajne trvá 45-60 minút.",
  },
  {
    text: "Menšia bolesť",
    text_1:
      ": Pacienti často hlásia menej bolesti v porovnaní s tradičnou chirurgiou.",
  },
  {
    text: "Rýchlejšie zotavenie",
    text_1: ": Mnohí pacienti sa môžu vrátiť k bežným aktivitám do 1-2 dní.",
  },
  {
    text: "Menšie riziko komplikácií",
    text_1:
      ": V porovnaní s tradičnou chirurgiou je tu nižšie riziko infekcií a komplikácií.",
  },
];

export const items5: ListItem2Props[] = [
  {
    text: "Zvýšené riziko infekcií",
    text_1:
      ": Teplo a vlhkosť môžu vytvoriť priaznivé prostredie pre baktérie.",
  },
  {
    text: "Pomalšie hojenie rán",
    text_1: ": Vysoké teploty môžu spomaliť proces hojenia.",
  },
  {
    text: "Zvýšené riziko krvácania",
    text_1: ": Teplo rozširuje cievy, čo môže viesť k väčšiemu krvácaniu.",
  },
  {
    text: "Dehydratácia",
    text_1:
      ": Horúčavy zvyšujú riziko dehydratácie, čo môže ovplyvniť hojenie.",
  },
  {
    text: "Zvýšený opuch",
    text_1: ": Teplo môže zhoršiť opuchy nôh po operácii.",
  },
];

export const items6: ListItem2Props[] = [
  {
    text: "Dodržiavajte pokyny lekára",
    text_1:
      ": Je kľúčové presne nasledovať inštrukcie vášho lekára pred a po zákroku.",
  },
  {
    text: "Udržujte ranu čistú a suchú",
    text_1:
      ": V lete je to obzvlášť dôležité. Pravidelne kontrolujte ranu a pri akýchkoľvek známkach infekcie kontaktujte lekára.",
  },
  {
    text: "Hydratácia",
    text_1:
      ": Pite dostatok vody, aby ste predišli dehydratácii, ktorá môže spomaliť hojenie.",
  },
  {
    text: "Ochrana pred slnkom",
    text_1:
      ": Vyhnite sa priamemu slnečnému žiareniu na operovanú oblasť a používajte ochranný krém s vysokým SPF.",
  },
  {
    text: "Noste voľné, priedušné oblečenie",
    text_1: ": To pomôže udržať operovanú oblasť v suchu a chlade.",
  },
  {
    text: "Správne nosenie kompresných pančúch",
    text_1:
      ": Aj keď môže byť v lete nepríjemné, je dôležité nosiť kompresné pančuchy podľa pokynov lekára. Zvážte kúpu špeciálnych letných kompresných pančúch, ktoré sú tenšie a priedušnejšie.",
  },
  {
    text: "Pravidelný pohyb",
    text_1:
      ": Krátke prechádzky stimulujú cirkuláciu a pomáhajú predchádzať komplikáciám, ako je hlboká žilová trombóza.",
  },
  {
    text: "Elevácia nôh",
    text_1:
      ": Často si dvíhajte nohy nad úroveň srdca, aby ste znížili opuch a zlepšili cirkuláciu.",
  },
  {
    text: "Klimatizované prostredie",
    text_1:
      ": Ak je to možné, trávte čas v klimatizovaných priestoroch, najmä počas najhorúcejších častí dňa.",
  },
];

export const items7: ListItem7Props[] = [
  {
    text: "Infekcia",
    text_2: "Príznaky: začervenanie, teplo, opuch, hnis, horúčka",
    text_3: "Manažment: antibiotická liečba, pravidelné čistenie rany",
  },
  {
    text: "Krvácanie alebo hematóm",
    text_2: "Príznaky: nadmerné krvácanie, veľký modrý fľak",
    text_3:
      "Manažment: kompresia, elevácia končatiny, v závažných prípadoch chirurgická intervencia",
  },
  {
    text: "Poškodenie nervu",
    text_2: "Príznaky: necitlivosť, brnenie, pálenie",
    text_3: "Manažment: zvyčajne dočasné, môže vyžadovať fyzioterapiu",
  },
  {
    text: "Hlboká žilová trombóza",
    text_2: "Príznaky: jednostranný opuch nohy, bolesť, začervenanie, teplo",
    text_3: "Manažment: antikoagulačná liečba, kompresná terapia",
  },
  {
    text: "Popáleniny kože",
    text_2: "Príznaky: začervenanie, pľuzgiere, bolesť",
    text_3:
      "Manažment: lokálna liečba, v závažných prípadoch môže byť potrebná plastická chirurgia",
  },
  {
    text: "Hyperpigmentácia",
    text_2: "Príznaky: tmavé sfarbenie kože pozdĺž liečenej žily",
    text_3:
      "Manažment: zvyčajne dočasné, môže sa zmierniť časom alebo použitím bieliacich krémov",
  },
  {
    text: "Recidíva varixov",
    text_2: "Príznaky: opätovný výskyt varixov v liečenej oblasti",
    text_3: "Manažment: môže vyžadovať opakovanú liečbu",
  },
];

export const items8: ListItem8Props[] = [
  { text: "Odpočívajte s nohami vo zvýšenej polohe" },
  { text: "Noste kompresné pančuchy nepretržite" },
  { text: "Vyhýbajte sa horúcim kúpeľom a saunám" },
];

export const items9: ListItem8Props[] = [
  { text: "Začnite s krátkymi prechádzkami" },
  { text: "Pokračujte v nosení kompresných pančúch" },
  { text: "Vyhýbajte sa intenzívnemu cvičeniu a zdvíhaniu ťažkých predmetov" },
];

export const items10: ListItem2Props[] = [
  {
    text: "Skleroterapia",
    text_1:
      ": Injekčné podanie špeciálnej látky do žily, ktorá spôsobí jej uzavretie.",
  },
  {
    text: "Laserová ablácia",
    text_1:
      ": Podobná RFA, ale využíva laserovú energiu namiesto rádiofrekvenčnej.",
  },
  {
    text: "Chirurgická ligatúra a stripping",
    text_1:
      ": Tradičná chirurgická metóda, pri ktorej sa postihnuté žily odstránia.",
  },
  {
    text: "Flebektómia",
    text_1: ": Odstránenie menších varixov cez malé rezy v koži.",
  },
  {
    text: "Konzervatívna liečba",
    text_1: ": Zahŕňa kompresné pančuchy, eleváciu nôh a cvičenie.",
  },
];

export const items11: ListItem2Props[] = [
  {
    text: "Je RFA bolestivá procedúra?",
    text_1:
      " Väčšina pacientov pociťuje len minimálnu bolesť počas a po procedúre. Používa sa lokálna anestézia na znecitlivenie oblasti.",
  },
  {
    text: "Ako dlho trvá zotavenie po RFA?",
    text_1:
      " Väčšina pacientov sa môže vrátiť k bežným aktivitám do 1-2 dní po zákroku. Plné zotavenie môže trvať 1-2 týždne.",
  },
  {
    text: "Môžem ísť po RFA na dovolenku k moru?",
    text_1:
      " Je lepšie počkať aspoň 2 týždne po zákroku, kým sa vydáte na dovolenku. Vždy sa poraďte s vaším lekárom.",
  },
  {
    text: "Ako dlho musím nosiť kompresné pančuchy po RFA?",
    text_1:
      " Zvyčajne sa odporúča nosiť kompresné pančuchy 1-2 týždne po zákroku, ale presná dĺžka závisí od individuálnych odporúčaní vášho lekára.",
  },
  {
    text: "Sú výsledky RFA trvalé?",
    text_1:
      " RFA ponúka dlhodobé výsledky, ale negarantuje, že sa varixy nikdy nevrátia. Zdravý životný štýl môže pomôcť predĺžiť výsledky.",
  },
  {
    text: "Aké sú riziká RFA v porovnaní s tradičnou chirurgiou?",
    text_1:
      " RFA má všeobecne nižšie riziká než tradičná chirurgia. Má menšiu mieru komplikácií, kratší čas zotavenia a menšie jazvy.",
  },
  {
    text: "Môžem cvičiť po RFA v lete?",
    text_1:
      " Ľahké cvičenie, ako je chôdza, je odporúčané krátko po zákroku. Intenzívnejšie cvičenie by ste mali odložiť na 1-2 týždne a vždy sa poraďte s lekárom.",
  },
  {
    text: "Ako môžem zmierniť opuch nôh po RFA v lete?",
    text_1:
      " Pravidelná elevácia nôh, nosenie kompresných pančúch a vyhýbanie sa dlhému státiu alebo sedeniu môže pomôcť zmierniť opuch.",
  },
  {
    text: "Je RFA hradená zdravotnou poisťovňou?",
    text_1:
      " To závisí od vašej konkrétnej poisťovne a zdravotného stavu. Mnohé poisťovne hradia RFA, ak je to medicínsky nevyhnutné.",
  },
  {
    text: "Ako dlho trvá samotný zákrok RFA?",
    text_1:
      " Samotný zákrok zvyčajne trvá 45-60 minút, ale celková návšteva v zdravotníckom zariadení môže trvať 2-3 hodiny.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zZqgBB"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Aké sú riziká operácie varixov v lete metódou RFA?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "V tomto článku sa budeme venovať rizikám operácie varixov v lete, konkrétne metódou rádiofrekvenčnej ablácie (RFA). Naším cieľom je ponúknuť vám podrobný prehľad o tejto liečebnej metóde, spolu s informáciami o potenciálnych rizikách, ktoré môžu byť spojené s touto procedúrou v horúcich letných mesiacoch."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">7 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zQ7CbN"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(10045px,auto)_1fr] max-lg:px-4 lg:min-h-[384.5rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_18.3824%_29.5752%_18.3824%_16.8301%] lg:grid-rows-[minmax(24px,auto)_minmax(344px,auto)_minmax(72px,auto)_minmax(5007px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zXjsyt"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="pink inflatable ring on pool"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="pink inflatable ring on pool"
                  src="/external-assets/d6c1af5f71340638.jpg"
                  height="344"
                  width="362"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="pink inflatable ring on pool"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="pink inflatable ring on pool"
                  src="/external-assets/6199dcf1de6e876b.jpg"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
            <div
              id="zwMk9N"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V horúcich letných mesiacoch sa mnohí pacienti s kŕčovými žilami rozhodujú podstúpiť operáciu. Jednou z populárnych metód je rádiofrekvenčná ablácia (RFA). Aj keď ide o moderný a efektívny zákrok, letné počasie môže priniesť isté výzvy a riziká. V tomto článku sa pozrieme bližšie na to, čo môžete očakávať pri operácii varixov metódou RFA v lete a aké sú potenciálne riziká."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú varixy a prečo vznikajú?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme do detailov operácie, je dôležité pochopiť, čo vlastne varixy sú. Varixy, bežne známe ako kŕčové žily, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na dolných končatinách. Vznikajú, keď jednosmerné ventily v žilách, ktoré pomáhajú krvi prúdiť späť k srdcu, prestanú fungovať správne."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Príznaky varixov"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Varixy môžu spôsobovať rôzne nepríjemné príznaky:"}
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
                      {"Zmeny na koži"}
                    </strong>
                    {
                      ": Suchá, šupinatá koža alebo hyperpigmentácia v oblasti postihnutých žíl."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Čo je rádiofrekvenčná ablácia (RFA)?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Rádiofrekvenčná ablácia (RFA) je moderná, minimálne invazívna metóda liečby varixov. Ide o ambulantný zákrok, ktorý využíva tepelnú energiu na uzavretie postihnutých žíl."
                }
              </p>
              <h3 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl">
                {"Ako prebieha RFA?"}
              </h3>
              <ol className="break-words my-0">
                {items3.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items3.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Je to ako by ste "zapečatili" problémovú žilu zvnútra, čím zabránite prietoku krvi cez ňu a presmerujete krv do zdravších žíl.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Výhody rádiofrekvenčnej ablácie (RFA)"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"RFA prináša viacero výhod pre pacientov s varixmi:"}
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
                      {"Esteticky príjemnejšie výsledky"}
                    </strong>
                    {": Menšie rezy znamenajú menšie jazvy."}
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Riziká operácie varixov v lete"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Hoci RFA je považovaná za bezpečnú metódu, letné mesiace môžu priniesť určité výzvy a riziká:"
                }
              </p>
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
                      {"Diskomfort pri nosení kompresných pančúch"}
                    </strong>
                    {
                      ": V lete môže byť nosenie kompresných pančúch obzvlášť nepríjemné."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Ako minimalizovať riziká operácie varixov v lete?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď leto prináša určité výzvy, existuje mnoho spôsobov, ako minimalizovať riziká:"
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
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Zdravá strava"}
                    </strong>
                    {
                      ": Konzumujte vyváženú stravu bohatú na vitamíny a minerály, ktoré podporujú hojenie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Možné komplikácie RFA a ich manažment"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď je RFA považovaná za bezpečnú procedúru, ako každý medicínsky zákrok, aj ona nesie určité riziká komplikácií. Je dôležité o nich vedieť a poznať spôsoby ich manažmentu:"
                }
              </p>
              <ol className="break-words my-0">
                {items7.map((item, index) => (
                  <ListItem7
                    key={index}
                    {...item}
                    separator={index < items7.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <h2 className={listItemClassName}>
                {"Rekonvalescencia po RFA v lete"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Rekonvalescencia po RFA je zvyčajne rýchla, ale letné počasie môže priniesť určité výzvy:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Prvých 24-48 hodín"}
                    </strong>
                    {":"}
                  </p>
                  <ul className="break-words my-0">
                    {items8.map((item, index) => (
                      <ListItem8
                        key={index}
                        {...item}
                        separator={index < items8.length - 1 ? "\n" : ""}
                      />
                    ))}
                  </ul>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Prvý týždeň"}
                    </strong>
                    {":"}
                  </p>
                  <ul className="break-words my-0">
                    {items9.map((item, index) => (
                      <ListItem8
                        key={index}
                        {...item}
                        separator={index < items9.length - 1 ? "\n" : ""}
                      />
                    ))}
                  </ul>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Druhý týždeň a ďalej"}
                    </strong>
                    {":"}
                  </p>
                  <ul className="break-words my-0">
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                        {"Postupne zvyšujte úroveň aktivity"}
                      </p>
                    </li>
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                        {"Môžete začať s plávaním (ak rana úplne zahojila)"}
                      </p>
                    </li>
                    <li className="[color:inherit] break-words">
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                        {
                          "Pokračujte v nosení kompresných pančúch podľa pokynov lekára"
                        }
                      </p>
                      <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                    </li>
                  </ul>
                </li>
              </ol>
              <h2 className={listItemClassName}>
                {"Alternatívne metódy liečby varixov"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď RFA je populárna metóda, existujú aj iné možnosti liečby varixov:"
                }
              </p>
              <ol className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Každá z týchto metód má svoje výhody a nevýhody a vhodnosť závisí od individuálneho stavu pacienta."
                }
              </p>
              <h2 className={listItemClassName}>Záver</h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <h2 className={listItemClassName}>Často kladené otázky</h2>
              <ol className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem2
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
