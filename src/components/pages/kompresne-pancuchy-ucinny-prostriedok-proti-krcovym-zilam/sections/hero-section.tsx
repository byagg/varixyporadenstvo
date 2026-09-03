const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

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
    text: "Zníženie opuchov",
    text_1:
      ": Ak máte nohy ako dva nafúknuté balóniky, kompresné pančuchy môžu byť vaším záchrancom. Pomáhajú minimalizovať opuchy tým, že zlepšujú prietok krvi a zabraňujú hromadeniu tekutín.",
  },
  {
    text: "Zmiernenie bolesti a nepríjemných príznakov",
    text_1:
      ": Kompresná terapia môže zmierniť bolesť, ťažkosti a únavu, ktoré sú často spojené s kŕčovými žilami. Vaše nohy sa vám za to poďakujú!",
  },
  {
    text: "Prevencia komplikácií",
    text_1:
      ": Kompresné pančuchy môžu pomôcť predchádzať vážnym komplikáciám, ako sú vredy predkolenia alebo trombóza, ktoré môžu byť dôsledkom neliečených kŕčových žíl.",
  },
];

export const items2: ListItemProps[] = [
  {
    text: "Mierna kompresia (15-20 mmHg)",
    text_1:
      ": Ideálna pre prevenciu a pri miernych príznakoch. Skvelé, ak trávite veľa času sedením alebo státím.",
  },
  {
    text: "Stredná kompresia (20-30 mmHg)",
    text_1:
      ": Vhodná pre liečbu miernych až stredne ťažkých kŕčových žíl. Poskytuje silnejšiu podporu a je ideálna pre tých, ktorí už majú problémy so žilami.",
  },
  {
    text: "Silná kompresia (30-40 mmHg)",
    text_1:
      ": Táto úroveň kompresie je zvyčajne predpisovaná lekárom pre vážnejšie žilové problémy, ako sú pokročilé kŕčové žily alebo po operáciách.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zZvdNt"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11">
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Kompresné pančuchy: Účinný prostriedok proti kŕčovým žilám"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "Objavte, ako kompresné pančuchy môžu pomôcť pri liečbe a prevencii kŕčových žíl. Zistite, prečo sú tieto pančuchy účinné, aké výhody prinášajú a ako si vybrať ten správny typ."
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
        id="zGKk0A"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_auto_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_23.8562%_18.6275%_23.8562%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(58px,auto)_auto_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
            <div
              id="zsdTBs"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="woman in white long sleeve shirt and black skirt"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="woman in white long sleeve shirt and black skirt"
                  src="/external-assets/3b145c1dc960c04f.jpg"
                  height="344"
                  width="228"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="woman in white long sleeve shirt and black skirt"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="woman in white long sleeve shirt and black skirt"
                  src="/external-assets/e98156d2445aa425.jpg"
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
              id="zrFpae"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú nepríjemným spoločníkom mnohých ľudí, bez ohľadu na vek. Keď sa vaše žily na nohách rozhodnú, že nebudú fungovať tak, ako by mali, môžu vám spôsobiť nielen estetické starosti, ale aj bolesti a opuchy, ktoré vám môžu doslova pokaziť deň. Našťastie, existuje jednoduchý spôsob, ako si uľaviť – kompresné pančuchy. Ak hľadáte riešenie, ktoré vám pomôže zmierniť príznaky a udržať vaše nohy v pohode, čítajte ďalej."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú kŕčové žily a prečo sa s nimi stretneme?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kŕčové žily sú stav, pri ktorom sa žily rozšíria a ich chlopne prestanú fungovať tak, ako by mali. Tento problém sa často vyskytuje v dôsledku kombinácie rôznych faktorov, ako sú dedičnosť, nadváha, sedavý spôsob života a tehotenstvo. Keď chlopne v žilách zlyhajú, krv sa hromadí v dolných končatinách a vytvára tlak na steny žíl, čo vedie k ich rozšíreniu a vzniku kŕčových žíl."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Predstavte si, že vaše žily sú ako jednosmerné ulice, kde sa premávka zrazu zastaví a autá (krv) sa začnú hromadiť. Výsledkom je zápcha, ktorú cítiť na vašich nohách ako opuch, bolesť alebo dokonca pocit ťažoby."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Kompresné pančuchy: Ako to vlastne funguje?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Kompresné pančuchy sú vyrobené z elastického materiálu, ktorý jemne, ale pevne obopína vaše nohy. Tento tlak pomáha žilám udržať správny tok krvi smerom k srdcu, čím zmierňuje tlak na žily a znižuje opuchy. Ak by ste si mali predstaviť, čo robia kompresné pančuchy, je to ako mať malú, neviditeľnú podporu, ktorá vaše žily jemne "povzbudzuje" k lepšiemu výkonu.'
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy sú dostupné v rôznych stupňoch kompresie, od miernej po silnú. Výber toho správneho závisí od toho, aký vážny je váš problém s kŕčovými žilami a čo vám odporučí váš lekár. Ak máte mierne príznaky, môže vám stačiť ľahšia kompresia. Ak sú vaše kŕčové žily už pokročilé, možno budete potrebovať niečo silnejšie."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Prečo nosiť kompresné pančuchy? Výhody, ktoré vás presvedčia"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Kompresné pančuchy ponúkajú množstvo výhod, ktoré môžu výrazne zlepšiť váš každodenný život. Tu je niekoľko z nich:"
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
                      {"Zlepšenie prietoku krvi"}
                    </strong>
                    {
                      ": Lepší prietok krvi znamená zdravšie žily. Kompresné pančuchy podporujú správny prietok krvi, čím znižujú riziko ďalších žilových problémov."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ako si vybrať tie správne kompresné pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak sa rozhodnete, že kompresné pančuchy sú pre vás tou správnou voľbou, je dôležité vybrať si tie správne. Najlepšie je konzultovať svoj výber s lekárom alebo odborníkom, ktorý vám pomôže určiť, aký stupeň kompresie potrebujete."
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
              </ul>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Výber správnej veľkosti je tiež kľúčový. Kompresné pančuchy musia byť dobre prispôsobené, aby poskytli maximálny účinok. Nesprávna veľkosť môže byť nielen nepohodlná, ale aj neúčinná."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Ako správne používať kompresné pančuchy?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Aby ste dosiahli maximálny efekt, je dôležité kompresné pančuchy správne používať. Tu sú niektoré tipy:"
                }
              </p>
              <ul className="break-words my-0">
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Ráno je to najlepšie"}
                    </strong>
                    {
                      ": Najlepšie je obliecť si kompresné pančuchy ráno, keď sú vaše nohy ešte svieže a neopotrebované denným zhonom."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                    <strong className="[color:inherit] break-words">
                      {"Starostlivosť je kľúčová"}
                    </strong>
                    {
                      ": Kompresné pančuchy by sa mali pravidelne prať na nižších teplotách, aby si udržali svoju elasticitu a účinnosť."
                    }
                  </p>
                </li>
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    <strong className="[color:inherit] break-words">
                      {"Noste ich pravidelne"}
                    </strong>
                    {
                      ": Aby ste dosiahli najlepšie výsledky, noste kompresné pančuchy každý deň, najmä ak trávite veľa času na nohách alebo sedením."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Záver: Kompresné pančuchy ako vaša cesta k zdravším nohám"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ak vás trápia kŕčové žily, kompresné pančuchy môžu byť pre vás riešením, ktoré hľadáte. Sú efektívnym a pohodlným spôsobom, ako zmierniť príznaky kŕčových žíl a udržať vaše nohy v dobrej kondícii. Nezabudnite však konzultovať ich použitie s lekárom, aby ste si vybrali správny stupeň kompresie a zabezpečili, že ich používate správne."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
                {
                  "Vaše nohy si zaslúžia tú najlepšiu starostlivosť, a kompresné pančuchy môžu byť vaším spoľahlivým partnerom na ceste k zdravým žilám a lepšiemu životu. Nečakajte, kým sa problémy s kŕčovými žilami zhoršia – začnite sa o svoje nohy starať už dnes!"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
