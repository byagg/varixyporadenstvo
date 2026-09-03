const listItemClassName =
  "font-heading text-ploy-text-inverse font-bold text-3xl break-words mb-2 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight";
const listItemClassName2 =
  "font-heading text-ploy-text-inverse font-bold text-2xl break-words mb-2 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight";

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

type ImageItemProps = {
  src: string;
};

function ImageItem({ src }: ImageItemProps) {
  return (
    <div className="relative pt-[100%] grid-gallery-grid__image-wrapper">
      <div
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className="w-full h-full absolute cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] left-0 top-0 image image--zoom image--grid grid-gallery-grid__image min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
      >
        <img
          alt=""
          src={src}
          height="256"
          width="256"
          loading="eager"
          className="w-full h-full max-w-none object-cover image__image lg:aspect-[auto_256_/_256] overflow-clip"
        />
      </div>
    </div>
  );
}

export const items: ListItemProps[] = [
  {
    text: "primeraný každodenný pohyb je dôležitý pre správne prekrvovanie nôh, zníženie rizika vzniku trombózy a opuchov, a podporu primeraného hojenia rán a vstrebávania podliatin.",
  },
  { text: "" },
  { text: "" },
];

export const items2: ListItemProps[] = [
  {
    text: "Venotonikum (napr. Detralex alebo jeho náhrady ako Devenal, Flebaven, Mobivenal micro) sa používa ako dlhodobá liečba.",
  },
  {
    text: "pre tíšenie bolesti po operácii sa odporúčajú voľnopredajné lieky ako Ibuprofen, Novalgin alebo Voltaren rapid. je dôležité bolesť zastaviť, nejde o prekrytie významného problému, ale o zabezpečenie komfortu pre ľahšie zvládnutie prvých dní po operácii.",
  },
  {
    text: "na zníženie rizika trombotického procesu sa môže podkožne aplikovať nízkomolekulárny heparín (LMWH), buď jednorazovo alebo opakovane podľa posúdenia rizika.",
  },
];

export const images: ImageItemProps[] = [
  {
    src: "/migrated-assets/c19385a5803313cedad6.jpg",
  },
  {
    src: "/migrated-assets/ef8d1048a9004b121064.jpg",
  },
  {
    src: "/migrated-assets/4d4ef66a0e5aa4ae84d4.jpg",
  },
  {
    src: "/migrated-assets/a74b632cc3f01e871cfa.jpg",
  },
  {
    src: "/migrated-assets/1fa120bf39ff339abc57.jpg",
  },
];

export default function VseobecneZasadyPoOperaciiSection() {
  return (
    <section
      id="zkI3E-"
      className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
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
      <div className="w-full z-[14] grid mx-auto max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(140px,auto)_minmax(22px,auto)_auto_minmax(16px,auto)_minmax(498px,auto)_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[15.768%_1.06209%_41.0948%_9.39542%_14.7876%_6.12745%_11.7647%] lg:grid-rows-[minmax(34px,auto)_minmax(125px,auto)_minmax(25px,auto)_minmax(3px,auto)_auto_auto_1fr] lg:px-0">
        <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-7">
          <div
            id="zWQZTm"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className={listItemClassName}>kompresná terapia</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "po operácii varixov dolných končatín je kľúčová kompresná terapia II. kompresnej triedy, buď bandážovaním alebo kompresnými pančuchami. aplikuje sa minimálne 24-48 hodín nonstop, maximálne asi 2 týždne s nočnou prestávkou. je súčasťou každého zákroku na žilách nôh a doba aplikácie závisí od rozsahu výkonu."
              }
            </p>
            <h3 className={listItemClassName}>medikamentózna liečba</h3>
            {items2.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
            <h3 className={listItemClassName}>lokálna starostlivosť</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "pre zníženie rozsahu podliatin a prevenciu neželaných zápalov žíl sa odporúča nosiť kompresné pančuchy a aplikovať Lioton gel 1-3 x denne."
              }
            </p>
            <h3 className={listItemClassName}>pohybový režim</h3>
            {items.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
            <h3 className="font-heading text-ploy-text-inverse font-bold text-3xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight">
              {"prvý preväz a ďalšia starostlivosť"}
            </h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "prvý preväz sa realizuje do 24-48 hodín podľa inštrukcií operatéra, pokiaľ medzitým neprišlo ku komplikácii (krvácanie, bolestivé otlačenie bandážou, alergická reakcia na materiál)."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"rozoznávame dve situácie:"}
            </p>
            <ol className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"optimálny výsledok"}
                    </strong>
                  </span>
                  {
                    ": suché alebo mierne krvavo presiaknuté krytie bez známok aktívneho krvácania. stačí použiť bežnú dezinfekciu na rany, natrieť podliatiny Lioton gelom a navliecť pančuchu. pacient užíva Detralex alebo jeho deriváty aspoň mesiac od výkonu."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"sub-optimálny výsledok"}
                    </strong>
                  </span>
                  <span className="[color:inherit] break-words">
                    {" " + ":"}
                  </span>
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words" />
                  </span>
                  <span className="[color:inherit] break-words">
                    {" " +
                      "ľahko prekrvácané rany alebo ľahko opuchnutá končatina"}
                  </span>
                  <span className="[color:inherit] break-words">
                    {" " + ":"}
                  </span>{" "}
                  {
                    "potrebné ošetrenie vo zvýšenej polohe, aplikácia dezinfekcie a sterilného krytia a kompresia sa ponechá ešte ďalších 24-48 hodín. pacient užíva Detralex alebo jeho deriváty aspoň mesiac od výkonu."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "po miniflebektómii sú bežné modriny a drobné ranky, ktoré sa postupne hoja. v prípade nemožnosti zastavenia krvácania alebo bolestivého opuchu celej končatiny s poruchou hybnosti je nutná kontrola lekárom alebo návšteva urgentného príjmu ihneď!"
              }
            </p>
            <h3 className={listItemClassName}>
              {"pokyny pre pacienta po RFA/EVLA"}
            </h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "(prednosť majú pokyny vydané lekárom alebo ošetrujúcim personálom pri prepustení)"
              }
            </p>
            <h4 className={listItemClassName2}>kompresia</h4>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {
                    "pacient odchádza s kompresným obväzom alebo pančuchou II. kompresnej triedy."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "pri príliš utiahnutej bandáži je potrebné ju upraviť alebo nahradiť kompresnou pančuchou."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h4 className={listItemClassName2}>operačné rany</h4>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"väčšinou sú drobné a rýchlo zasychajú."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"pri krvácaní je potrebná dezinfekcia a sterilné krytie."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"rana v triesle po strippingu vyžaduje zvýšenú obozretnosť."}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h4 className={listItemClassName2}>bolesť a iné ťažkosti</h4>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"na bolesť sa môžu použiť voľnopredajné analgetiká."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "mierne opuchy, podliatiny, tŕpnutie, ťahanie, pálenie alebo svrbenie sú bežné, ale nemali by sa zhoršovať."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h4 className={listItemClassName2}>hygiena a denný režim</h4>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {
                    "sprchovanie je možné už prvý deň po operácii, ak rany zaschli."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "bežná denná aktivita je povolená, plnú záťaž je lepšie odložiť na 10-14 dní."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h4 className={listItemClassName2}>dlhodobá liečba</h4>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"pacienti zvyčajne pokračujú vo svojej chronickej liečbe."}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "pooperačná liečba zahŕňa kompresiu, hydratáciu, venotoniká (Detralex 500 mg alebo jeho deriváty) v dávke 2x denne, lokálnu aplikáciu Lioton gelu 1x denne a primeraný každodenný pohyb."
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              {
                "v prípade komplikácií, ako je neustávajúce krvácanie, silná bolesť, výrazný opuch alebo príznaky infekcie, je potrebné kontaktovať lekára alebo vyhľadať urgentný príjem!"
              }
            </p>
          </div>
        </div>
        <div
          className="text-center w-full h-full relative z-[2] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-6"
        >
          <div
            id="zSeeRN"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
              <strong className="[color:inherit] break-words">
                {"všeobecné zásady po operácii varixov"}
              </strong>
            </h2>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-6">
          <div
            id="z_H7-V"
            className="self-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-gallery layout-element__component--GridGallery"
          >
            <div className="grid grid-gallery-grid max-lg:gap-3 max-lg:grid-cols-[repeat(2,1fr)] lg:gap-4 lg:grid-cols-[repeat(1,1fr)]">
              {images.map((item, index) => (
                <ImageItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
