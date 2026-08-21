const listItemClassName =
  "font-heading text-ploy-text-inverse font-bold text-2xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight";
const listItemClassName2 =
  "font-heading text-ploy-text-inverse break-words max-[921px]:mb-0 max-lg:leading-6";
const listItemClassName3 =
  "w-full h-full relative cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--zoom image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden";
const listItemClassName4 =
  "w-full h-full relative opacity-0 translate-y-[20%] cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] image image--zoom image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";

/**
 * @ployComponent
 * @ployComponentId liecba-kompresne-pancuchy-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: kompresné pančuchy
 */
type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
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

type ListItem4Props = {
  text: string;
};

function ListItem4({ text }: ListItem4Props) {
  return (
    <ul className="break-words my-0">
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          {text}
        </p>
      </li>
    </ul>
  );
}

export const items: ListItemProps[] = [
  { text: "primárne či sekundárne kŕčové žily a tehotenské kŕčové žily" },
  {
    text: "prevencia opätovného vzniku trombózy po prekonanej žilovej trombóze",
  },
  { text: "chronická žilová nedostatočnosť" },
  { text: "po sklerotizácii varixov alebo chirurgickom zákroku na žilách" },
  { text: "lipedém (tukový opuch dolných končatín)" },
  { text: "lymfedém dolných končatín" },
  { text: "pooperačné a poúrazové opuchy" },
  { text: "akútna žilová trombóza a zápal žíl (flebitída)" },
  { text: "vredy predkolenia žilového pôvodu" },
  { text: "vrodené cievne anomálie" },
  { text: "prevencia opuchov v tehotenstve" },
];

export const items2: ListItemProps[] = [
  { text: "pančuchy sa navliekajú ráno a v polohe ležmo" },
  { text: "na navliekanie existujú špeciálne pomôcky - navliekače" },
  {
    text: "pri zaobstarávaní je nutné odmerať obvody nohy v oblasti členka a lýtka",
  },
];

export const items3: ListItemProps[] = [
  { text: "zhoršenie srdcovej slabosti presunom tekutiny z dolných končatín" },
  { text: "zhoršenie anginóznych záchvatov" },
  { text: "nekontrolovaná hypertenzia" },
  {
    text: "zhoršenie prekrvenia končatín pri závažnom ochorení periférnych tepien",
  },
  { text: "lokálna alergia (napr. na silikón)" },
];

export const items4: ListItem4Props[] = [
  { text: "deformity kĺbov a nôh, najmä palcov," },
  { text: "stavy po náhrade bedrových kĺbov," },
  {
    text: "ochorenia medzistavcových platničiek znemožňujúce navlečenie pančuchy,",
  },
];

export default function KompresnePancuchySection() {
  return (
    <section
      id="pancuchy"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-75-Aq2eV2gee2tb08Dn.jpeg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-70 left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[287.875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[3.96341%_0.609756%_10.6707%_14.939%_3.65854%_1.82927%_30.4878%_0.304878%_3.35366%_14.939%_9.45122%_1.52439%_4.26829%] max-lg:grid-rows-[minmax(16px,auto)_minmax(83px,auto)_minmax(23px,auto)_minmax(222px,auto)_minmax(14px,auto)_minmax(42px,auto)_minmax(24px,auto)_minmax(3525px,auto)_minmax(11px,auto)_minmax(80px,auto)_minmax(120px,auto)_minmax(67px,auto)_minmax(16px,auto)_minmax(146px,auto)_minmax(51px,auto)_minmax(147px,auto)_1fr] max-lg:px-4 lg:min-h-[171.6875rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_0.0816993%_27.3693%_0.735294%_10.6209%_9.88562%_4.57516%_0.980392%_0.163399%_0.0816993%_24.5915%_0.980392%_0.163399%_0.326797%_0.0816993%_10.9477%] lg:grid-rows-[minmax(42px,auto)_minmax(78px,auto)_minmax(47px,auto)_minmax(3px,auto)_minmax(33px,auto)_minmax(344px,auto)_minmax(39px,auto)_minmax(454px,auto)_minmax(35px,auto)_minmax(445px,auto)_minmax(40px,auto)_minmax(448px,auto)_minmax(32px,auto)_minmax(224px,auto)_minmax(225px,auto)_1fr] lg:px-0">
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:text-center max-lg:col-start-1 max-lg:col-end-[14] max-lg:row-end-3 lg:text-left lg:col-start-3 lg:col-end-4 lg:row-end-4"
        >
          <div
            id="zRS9cc"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
              <strong className="[color:inherit] break-words">
                {"kompresné pančuchy"}
              </strong>
            </h3>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-4 max-lg:col-end-11 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-8 lg:col-end-12 lg:row-start-6 lg:row-end-7">
          <div
            id="zN9I4-"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[13.875rem] lg:max-h-[21.5313rem]"
          >
            <div
              rel="nofollow"
              title="a person with a knife and a knife in their hands"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
            >
              <img
                alt="a person with a knife and a knife in their hands"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=409,fit=crop/ALpBQyXKnqhOakP5/ideogram-57-AzGj5jk2LvSZvZrO.jpeg"
                height="344"
                width="316"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a person with a knife and a knife in their hands"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
            >
              <img
                alt="a person with a knife and a knife in their hands"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/ideogram-57-AzGj5jk2LvSZvZrO.jpeg"
                height="222"
                width="228"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-left w-full h-full relative z-[3] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-[14] max-lg:row-start-8 max-lg:row-end-9 lg:col-start-2 lg:col-end-7 lg:row-start-6 lg:row-end-[15]">
          <div
            id="zfsEoR"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h4 className={listItemClassName}>
              {"čo je kompresívna terapia pančuchami?"}
            </h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              <u className="break-words">
                <a
                  href="https://varixyporadenstvo.com/stahovacia-pancucha-ako-objat-vase-zily-pre-zdravsie-nohy"
                  className="[color:inherit] break-words"
                >
                  {"kompresívna terapia pančuchami"}
                </a>
              </u>{" "}
              {
                "je overená metóda liečby kŕčových žíl pomocou špeciálne utkaných nohavíc, pančúch alebo podkolienok. tieto pančuchy vytvárajú na rôznych častiach nohy odstupňovaný (graduovaný) tlak, ktorý smerom k stehnám pomaly klesá. sila kompresie sa meria v mm Hg (milimetre ortuti) - čím vyššia hodnota, tým silnejšia kompresia."
              }
            </p>
            <h4 className={listItemClassName}>
              {"kompresné triedy a ich využitie:"}
            </h4>
            <ol className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse break-words max-[921px]:mb-8 max-lg:leading-6">
                  <strong className="[color:inherit] break-words">
                    {"kompresná trieda" + " "}
                  </strong>
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"(mierna): 15-20 mm Hg"}
                    </strong>
                  </span>
                </p>
                <ul className="break-words my-0">
                  <li className="[color:inherit] break-words">
                    <p className={listItemClassName2}>
                      {"vhodná na prevenciu a pri začínajúcich opuchoch nôh"}
                    </p>
                  </li>
                </ul>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className={listItemClassName2}>
                      {"odporúča sa v tehotenstve a pri dlhšom cestovaní"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse break-words max-[921px]:mb-8 max-lg:leading-6">
                      {"voľnopredajné bez predpisu (napr. Maxis, Avicenum)"}
                    </p>
                    <p className={listItemClassName2} />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"kompresná trie" + " "}
                  </strong>
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"da (stredná): 20-30 mm Hg"}
                    </strong>
                  </span>
                </p>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"najčastejšie predpisovaná lekármi"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {
                        "vhodná na väčšinu symptómov kŕčových žíl a žilovej nedostatočnosti"
                      }
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {
                        "voľnopredajné, ale dostupné na predpis, hradené zdravotnou poisťovňou"
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"kompresná trieda" + " "}
                  </strong>
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"(silná): 30-40 mm Hg"}
                    </strong>
                  </span>
                </p>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"pre ťažšie symptómy, liečbu trombózy alebo lymfedému"}
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"dostupné výhradne na predpis"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <strong className="[color:inherit] break-words">
                    {"kompresná trieda" + " "}
                  </strong>
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"(veľmi silná): 40-50 mm Hg"}
                    </strong>
                  </span>
                </p>
                <ul className="break-words my-0">
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {
                        "pre ťažkú venostázu, liečbu vredov predkolenia alebo lymfedému"
                      }
                    </p>
                  </li>
                  <li className="break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"dostupné výhradne na predpis"}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className={listItemClassName}>
              {"kedy používať kompresívne pančuchy?"}
            </h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "kompresívne pančuchy sa odporúčajú pri mnohých stavoch súvisiacich s problémami žíl a ciev na nohách:"
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
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"prevencia cestovnej trombózy"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h4 className={listItemClassName}>
              {"ako správne používať kompresívne pančuchy?"}
            </h4>
            <ol className="break-words my-0">
              {items2.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items2.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"noste ich pravidelne podľa odporúčania lekára"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h4 className={listItemClassName}>
              {"možné nežiadúce účinky kompresívnej liečby"}
            </h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "hoci je kompresívna terapia vo všeobecnosti bezpečná, môžu sa vyskytnúť niektoré nežiadúce účinky:"
              }
            </p>
            <ul className="break-words my-0">
              {items3.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items3.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "poškodenie periférnych nervov môže zhoršiť subjektívne prejavy"
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8" />
                <h4 className="font-heading text-ploy-text-inverse font-bold text-2xl break-words max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight">
                  <strong className="[color:inherit] break-words">
                    {"problematické oblasti pri kompresívnej liečbe"}
                  </strong>
                </h4>
                {items4.map((item, index) => (
                  <ListItem4 key={index} {...item} />
                ))}
                <ul className="break-words my-0">
                  <li className="[color:inherit] break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {
                        "kožné mykózy či hnisavé infekcie kože s mokvaním (skôr hygienický problém),"
                      }
                    </p>
                  </li>
                  <li className="[color:inherit] break-words">
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {
                        "kozmetické dôvody(najmä u mladších žien) a diskomfort počas horúcich dní"
                      }
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-2 max-lg:col-end-9 max-lg:row-start-10 max-lg:row-end-12 lg:col-start-9 lg:col-end-[14] lg:row-start-8 lg:row-end-9">
          <div
            id="zIO8Y4"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[12.5rem] lg:max-h-[28.4063rem]"
          >
            <div
              rel="nofollow"
              title="a poster of a woman's stockings"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName3}
            >
              <img
                alt="a poster of a woman's stockings"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/ALpBQyXKnqhOakP5/maxis_prehlad_kodov_a_uhrad_2024_01_page-0001-A854LobKvjhPgvMX.jpg"
                height="454"
                width="318"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a poster of a woman's stockings"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName4}
            >
              <img
                alt="a poster of a woman's stockings"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/maxis_prehlad_kodov_a_uhrad_2024_01_page-0001-A854LobKvjhPgvMX.jpg"
                height="200"
                width="205"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] max-lg:col-start-7 max-lg:col-end-12 max-lg:row-start-11 max-lg:row-end-13 lg:col-start-10 lg:col-end-13 lg:row-start-10 lg:row-end-11">
          <div
            id="zdHms2"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[11.6875rem] lg:max-h-[27.8438rem]"
          >
            <div
              rel="nofollow"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=532,fit=crop/ALpBQyXKnqhOakP5/maxis_prehlad_kodov_a_uhrad_2024_01_page-0002-A0xVZBnGGWseQ74J.jpg"
                height="445"
                width="314"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/maxis_prehlad_kodov_a_uhrad_2024_01_page-0002-A0xVZBnGGWseQ74J.jpg"
                height="187"
                width="192"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[6] grid grid-cols-[100%] max-lg:col-start-3 max-lg:col-end-8 max-lg:row-start-[14] max-lg:row-end-[16] lg:col-start-11 lg:col-end-[15] lg:row-start-12 lg:row-end-13">
          <div
            id="z4cj27"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[12.3125rem] lg:max-h-[28.0313rem]"
          >
            <div
              rel="nofollow"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName3}
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=527,fit=crop/ALpBQyXKnqhOakP5/medi_prehlad_kodov_a_uhrad_2024_01_page-0001-m6LJONKBrXFl70jl.jpg"
                height="448"
                width="319"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName4}
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/medi_prehlad_kodov_a_uhrad_2024_01_page-0001-m6LJONKBrXFl70jl.jpg"
                height="197"
                width="202"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[7] grid grid-cols-[100%] max-lg:col-start-6 max-lg:col-end-13 max-lg:row-start-[15] max-lg:row-end-[17] lg:col-start-11 lg:col-end-[16] lg:row-start-[14] lg:row-end-[16]">
          <div
            id="zUEEsv"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[12.375rem] lg:max-h-[28.0938rem]"
          >
            <div
              rel="nofollow"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName3}
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=527,fit=crop/ALpBQyXKnqhOakP5/medi_prehlad_kodov_a_uhrad_2024_01_page-0002-YD04b3OVJQIBEZr0.jpg"
                height="449"
                width="320"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName4}
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/medi_prehlad_kodov_a_uhrad_2024_01_page-0002-YD04b3OVJQIBEZr0.jpg"
                height="198"
                width="203"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-start w-full h-full relative z-[8] grid grid-cols-[100%] col-start-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-10 max-lg:row-start-6 max-lg:row-end-7 lg:col-end-6 lg:row-start-3 lg:row-end-5"
        >
          <a
            href="https://varixyporadenstvo.com/liecba#bandaz"
            target="_self"
            aria-hidden="false"
            id="zsKtJS"
            className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-ploy-text-inverse font-bold text-center whitespace-nowrap h-min min-w-full max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-lg grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:shadow-[0px_0px_0px_0px_0px] max-lg:min-h-[2.625rem] lg:min-h-[3.125rem] overflow-hidden"
          >
            {"bandáž"}
          </a>
        </div>
      </div>
    </section>
  );
}
