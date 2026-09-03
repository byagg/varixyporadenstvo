const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";
const listItemClassName2 =
  "font-heading text-ploy-text-primary font-bold text-2xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight";

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
    text: "Nasadenie turniketu",
    text_1:
      ": Turniket sa umiestni na hornú časť paže. Jeho cieľom je spomaliť prietok krvi a zvýšiť tlak v žilách, čo uľahčuje ich viditeľnosť.",
  },
  {
    text: "Identifikácia žily",
    text_1:
      ": Zdravotník nahmatá žilu a rozhodne, ktorá je najvhodnejšia pre odber. V prípade, že nie je žila dostatočne viditeľná, môže pacient požiadať, aby si niekoľkokrát zatvoril a otvoril dlaň, čo zvýši prietok krvi do ruky.",
  },
  {
    text: "Sterilizácia miesta vpichu",
    text_1:
      ": Pred vpichom sa miesto dezinfikuje antiseptikom, aby sa predišlo infekcii.",
  },
  {
    text: "Vpich ihly",
    text_1:
      ": Ihla sa vkladá do žily pod správnym uhlom (15-30 stupňov) a krv začne prúdiť do odberovej skúmavky.",
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
        id="zlAmiC"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Žily na rukách: Ktoré sú najvhodnejšie na odber krvi a prečo?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Odber krvi je jedným z najbežnejších lekárskych úkonov. Mnohí z nás s ním majú skúsenosť, no nie vždy si uvedomujeme, aké dôležité je pre zdravotníkov vybrať správnu žilu."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] hidden mb-1 blog-list-item-meta__author-name">
                  {"VP team"}
                </p>
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">5 min čítania</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zTxTmC"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_12.6225%_41.0948%_12.6225%_16.8301%] lg:grid-rows-[minmax(64px,auto)_minmax(344px,auto)_minmax(34px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zhrXOq"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="persons left hand on white window blinds"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="persons left hand on white window blinds"
                  src="/external-assets/c2c421b2bff26ec3.jpg"
                  height="344"
                  width="503"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="persons left hand on white window blinds"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="persons left hand on white window blinds"
                  src="/external-assets/c9197a8e4a388d2d.jpg"
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
              id="z6Ek04"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Odber krvi je jedným z najbežnejších lekárskych úkonov. Mnohí z nás s ním majú skúsenosť, no nie vždy si uvedomujeme, aké dôležité je pre zdravotníkov vybrať správnu žilu. Tento proces nie je len rutinným krokom, ale kľúčovým faktorom pre úspešný a bezbolestný odber krvi. V tomto článku sa pozrieme na to, ktoré žily na rukách sú najvhodnejšie na odber krvi, prečo práve tieto žily a aké faktory môžu ovplyvniť ich výber."
                }
              </p>
              <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl">
                {"Prečo sa odber krvi vykonáva z rúk?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Horné končatiny, konkrétne žily na rukách, sú ideálnym miestom pre odber krvi z niekoľkých dôvodov:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Povrchové žily sú ľahko dostupné" + " "}
                    </strong>
                    {
                      "– na rukách sú povrchové žily viditeľné a ľahko nahmatateľné."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Bezpečnosť" + " "}
                    </strong>
                    {
                      "– žily na rukách sú dostatočne vzdialené od dôležitých tepien a nervov, čo znižuje riziko komplikácií."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Komfort pacienta" + " "}
                    </strong>
                    {
                      "– ruky sú pre pacientov pohodlné miesto na odber krvi, kde môžu jednoducho natiahnuť končatinu."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h3 className={listItemClassName}>
                {"Aké sú hlavné žily na rukách používané pri odbere krvi?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Na rukách existujú tri hlavné povrchové žily, ktoré sa najčastejšie používajú pri odbere krvi. Každá z nich má svoje výhody, vďaka ktorým je vhodná pre tento úkon."
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vena mediana cubiti (stredná žila lakťovej jamky)"}
                    </strong>
                    {
                      ": Táto žila je najbežnejšou voľbou pre odber krvi. Nachádza sa v strede lakťovej jamky a je dobre viditeľná a prístupná. Lekári a zdravotníci ju volia, pretože je zvyčajne veľká a pevná, čo minimalizuje riziko komplikácií. Odber krvi z tejto žily je väčšinou bezbolestný a rýchly."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vena cephalica (hlavová žila)"}
                    </strong>
                    {
                      ": Táto žila prechádza po vonkajšej strane paže. Je vhodnou alternatívou, ak je stredná žila ťažko prístupná alebo menej viditeľná. Vena cephalica je dobre viditeľná najmä u ľudí s nižším percentom telesného tuku."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Vena basilica (bazilická žila)"}
                    </strong>
                    {
                      ": Bazilická žila prechádza po vnútornej strane paže. Používa sa menej často, pretože je ťažšie prístupná a blízko nej sa nachádzajú nervy a tepny. Ak sú však ostatné žily neprístupné, môže byť táto žila alternatívnym miestom pre odber."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName}>
                {"Prečo sa používa práve vena mediana cubiti?"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Vena mediana cubiti je v lakťovej jamke ľahko prístupná, čo je pre zdravotníkov výhodné. Je dostatočne veľká, a preto je menej pravdepodobné, že sa počas odberu poškodí. Navyše, je obklopená minimálnym množstvom citlivých nervov a tepien, čím sa znižuje riziko poranenia. Taktiež, táto žila je zvyčajne stabilná a pevná, čo uľahčuje zdravotníkom úspešný odber bez potreby opakovaných vpichov."
                }
              </p>
              <h3 className={listItemClassName}>
                {"Faktory ovplyvňujúce výber žily"}
              </h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Výber vhodnej žily závisí od viacerých faktorov. Tu sú tie najčastejšie:"
                }
              </p>
              <ol className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hydratácia pacienta"}
                    </strong>
                    {
                      ": Ak je pacient dostatočne hydratovaný, jeho žily sú plnšie a lepšie viditeľné. Dehydratácia môže spôsobiť, že žily sú tenšie a ťažšie sa nahmatajú."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Zdravotný stav pacienta"}
                    </strong>
                    {
                      ": Niektorí pacienti môžu mať krehké žily, napríklad kvôli chronickým ochoreniam, ako je diabetes. Taktiež u pacientov, ktorí často podstupujú odber krvi, môžu byť žily vyčerpané a ťažšie prístupné."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Štruktúra tela"}
                    </strong>
                    {
                      ": U ľudí s nadváhou alebo obezitou môžu byť žily menej viditeľné. Naopak, u ľudí s nižším percentom telesného tuku sú žily často viditeľné a dobre prístupné."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h4 className={listItemClassName2}>
                {"Ako sa správne pripravuje pacient na odber krvi?"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Pred odberom krvi sa pacient môže pripraviť niekoľkými jednoduchými krokmi, ktoré môžu zlepšiť celkový proces:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hydratácia"}
                    </strong>
                    {
                      ": Piť dostatok vody pred odberom krvi je dôležité. Voda pomáha zlepšiť krvný obeh a robí žily plnšími, čo uľahčuje ich identifikáciu."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Uvoľnenie"}
                    </strong>
                    {
                      ": Pacient by mal byť uvoľnený a v pohodlí. Napätie môže sťažiť prístup k žilám. Zdravotníci preto často žiadajú pacientov, aby ruku uvoľnili a natiahli."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Sterilizácia miesta odberu"}
                    </strong>
                    {
                      ": Oblasť, kde bude vykonaný odber, musí byť dôkladne vyčistená antiseptikom. Tento krok je nevyhnutný na zníženie rizika infekcie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h4 className={listItemClassName2}>
                {"Ako sa vykonáva odber krvi?"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Odber krvi je pre pacientov väčšinou jednoduchý a bezbolestný proces. Zdravotníci postupujú podľa týchto krokov:"
                }
              </p>
              <ol className="break-words my-0">
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
                      {"Odstránenie ihly a tlak na miesto vpichu"}
                    </strong>
                    {
                      ": Po odbere sa ihla odstráni a na miesto sa aplikuje tlak, aby sa predišlo vzniku modriny."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ol>
              <h4 className={listItemClassName2}>
                {"Možné komplikácie pri odbere krvi"}
              </h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aj keď je odber krvi bežný a relatívne bezpečný úkon, môžu sa vyskytnúť určité komplikácie:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Hematóm"}
                    </strong>
                    {
                      ": Môže sa vytvoriť, ak krv unikne do okolitých tkanív. Správna aplikácia tlaku na miesto vpichu po odobratí ihly minimalizuje toto riziko."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Flebitída"}
                    </strong>
                    {
                      ": Zriedkavo môže dôjsť k zápalu žily, najmä ak pacient podstupuje časté odbery krvi alebo má krehké žily."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Poranenie nervu"}
                    </strong>
                    {
                      ": Ak je ihla nesprávne zavedená, môže dôjsť k poraneniu nervov v blízkosti žily. Preto zdravotníci volia žily, ktoré sú vzdialené od nervov a citlivých štruktúr."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h4 className={listItemClassName2}>Čo robiť po odbere krvi?</h4>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Po odbere krvi by pacienti mali dodržiavať niekoľko rád, aby predišli komplikáciám:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Aplikujte tlak na miesto vpichu"}
                    </strong>
                    {
                      ": Po odobratí krvi stlačte miesto vpichu aspoň na 3-5 minút. Tým sa zníži riziko vzniku modriny."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Vyhnite sa fyzickej námahe"}
                    </strong>
                    {
                      ": Po odbere krvi sa vyhnite intenzívnej fyzickej námahe, ktorá by mohla zvýšiť tlak na miesto vpichu a spôsobiť krvácanie."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Dostatok tekutín a jedla"}
                    </strong>
                    {
                      ": Po odbere je dôležité piť dostatok vody a zjesť ľahké jedlo, aby ste sa vyhli nevoľnosti alebo slabosti."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h3 className={listItemClassName}>Záver</h3>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Odber krvi je bežný, no dôležitý lekársky úkon, pri ktorom je správny výber žily rozhodujúci pre úspešný a bezbolestný proces. Pochopenie toho, ktoré žily sú najvhodnejšie a aké faktory ovplyvňujú ich výber, môže pacientom pomôcť lepšie sa pripraviť na tento postup. Zdravotníci sú vyškolení, aby minimalizovali riziko komplikácií a zabezpečili, že celý proces bude čo najkomfortnejší."
                }
              </p>
              <h5 className="font-heading text-ploy-text-primary font-bold break-words max-[921px]:mb-0 max-lg:text-2xl lg:leading-10 lg:text-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
