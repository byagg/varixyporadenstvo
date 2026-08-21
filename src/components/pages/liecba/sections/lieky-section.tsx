const listItemClassName =
  "font-heading text-ploy-text-inverse font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl";

/**
 * @ployComponent
 * @ployComponentId liecba-lieky-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: lieky
 */
type ListItemProps = {
  className: string;
  id: string;
  text: string;
};

function ListItem({ className, id, text }: ListItemProps) {
  return (
    <div data-ploy-animation-fx-hint="fade-in" className={className}>
      <a
        href="https://varixyporadenstvo.com/liecba#ucinnelatky"
        target="_self"
        aria-hidden="false"
        id={id}
        className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-ploy-text-inverse font-bold text-center whitespace-nowrap h-min min-w-full min-h-[3.125rem] max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-lg grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
      >
        {text}
      </a>
    </div>
  );
}

type ListItem2Props = {
  text: string;
  separator?: string;
};

function ListItem2({ text, separator }: ListItem2Props) {
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

export const items: ListItemProps[] = [
  {
    className:
      "text-start w-full h-full relative z-[4] grid grid-cols-[100%] col-start-2 col-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:row-start-7 max-lg:row-end-9 lg:row-start-5 lg:row-end-6",
    id: "zIWzQX",
    text: "účinné látky",
  },
  {
    className:
      "text-start w-full h-full relative z-[5] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-8 max-lg:row-start-10 max-lg:row-end-11 lg:col-start-6 lg:col-end-7 lg:row-start-5 lg:row-end-6",
    id: "zY1WvT",
    text: "prírodná lekáreň",
  },
  {
    className:
      "text-start w-full h-full relative z-[6] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-6 max-lg:col-end-9 max-lg:row-start-6 max-lg:row-end-8 lg:col-start-9 lg:col-end-10 lg:row-start-5 lg:row-end-6",
    id: "zsH3to",
    text: "diéta",
  },
];

export const items2: ListItem2Props[] = [
  {
    text: "Cyclo 3 Fort (150 mg extrakt ruscus aculeatus, 150 mg hesperidín, 100 mg k.askorbová)",
  },
  { text: "Detralex (450 mg diosmín, 50 mg hesperidín)" },
  { text: "Flebaven 1000 (1000 mg diosmín)" },
  { text: "Flebaven 500 (500 mg diosmín)" },
  { text: "Vessel due F (250 LSU sulodexid)" },
];

export const items3: ListItem2Props[] = [
  { text: "Aescin (20 mg aescín)" },
  { text: "Ascorutin (20 mg rutín, 100 mg k.askorbová)" },
  { text: "Cilkanol (300 mg hydroxyetylrutozid - troxerutín)" },
  { text: "Detralex (450 mg diosmín, 50 mg hesperidín)/1000 mg" },
  { text: "Devenal (450 mg diosmín, 50 mg hesperidín)" },
  { text: "Flebaven 500 (500 mg diosmín)" },
  { text: "Venoruton 300 (300 mg zmes hydroxyetylrutozidov)" },
  { text: "Venoruton Forte (500 mg zmes hydroxyetylrutozidov)" },
];

export const items4: ListItem2Props[] = [
  {
    text: "Bivenol micro (450 mg diosmín, 50 mg hesperidín, 15 mg aescín, 20 mg rutín, 10 mg resveratrol)",
  },
  { text: "Diosminol (450 mg diosmín, 50 mg hesperidín, 162 mg aeskulozid)" },
  { text: "Diorex (450 mg diosmín, 50 mg hesperidín)" },
  {
    text: "DioMax (450 mg diosmín, 50 mg hesperidín, 30 mg aescín, 20 mg rutín)",
  },
  {
    text: "Diovarix plus (450 mg diosmín, 50 mg hesperidín, 30 mg aescín, 15 ug selén)",
  },
  {
    text: "Jutavit diosmin+hesperidin 500 plus (450 mg diosmín, 50 mg hesperidín, extrakty)",
  },
  { text: "Microvenal (450 mg diosmín, 50 mg hesperidín, 30 mg aescín)" },
  { text: "Mobivenal micro (450 mg diosmín, 50 mg hesperidín, 30 mg aescín)" },
  { text: "Mobivenal micro simple (450 mg diosmín, 50 mg hesperidín)" },
  {
    text: "Priessnitz žilná a cievna výživa (240 mg diosmín, 55 mg hesperidín, extrakty a vitamíny)",
  },
  {
    text: "Provendios plus (450 mg diosmín, 50 mg hesperidín, 30 mg aescín, 50 ug selén)",
  },
  {
    text: "Varivenol (450 mg diosmín, 50 mg hesperidín, 30 mg aescín, 70 mg horčík)",
  },
  {
    text: "Varixinal (33.3 mg aescin, 200 mg extrakt r.aculeatus, hesperidin, k.askorbova, extrakty)",
  },
  { text: "Venalex (450 mg diosmín, 50 mg hesperidín)" },
  { text: "Venostop (450 mg diosmín, 50 mg hesperidín)" },
];

export const items5: ListItem2Props[] = [
  { text: "Lioton gel 100 000 (1000 UI/g heparin)" },
  { text: "Heparin AL gel 30 000 (300 UI/g heparin)" },
  { text: "Heparoid Léčiva krém (100 UI/g heparin)" },
  { text: "Hirudoid Forte gél (400 UI/g polysulfát)" },
];

export const items6: ListItem2Props[] = [
  { text: "Alpa francovka gaštan (liehový extrakt z pagaštanu konského)" },
  { text: "Antivarix gél (extrakt pagaštanu konského, rutín, mentol)" },
  { text: "Cedralex (extrakt korzický citrón)" },
  { text: "Diomax gél (extrakt pagaštanu konského)" },
  { text: "Naturland pagaštan konský krém (extrakt pagaštanu konského)" },
  { text: "NH homeos krém (extrakt z pagaštanu konského)" },
  { text: "Medhirud krém (extrakt pijavice lekárskej a arniky)" },
  { text: "Plerudin forte" },
  { text: "Sofia krém (extrakt z pijavice lekárskej, rôzne extrakty)" },
  {
    text: "Varixinal gél (extrakt pagaštanu konského, gotu kola, listnatec bodlinatý, čučoriedka)",
  },
  { text: "Virde varix gél (extrakt z chlorella vulgaris)" },
  { text: "Venucare gél (extrakt z pagaštanu konského, aescinu a iných)" },
];

export default function LiekySection() {
  return (
    <section
      id="lieky"
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
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[266.8125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[8.53659%_13.4146%_0.914634%_25.3049%_3.65854%_25.3049%_0.609756%_13.7195%_8.53659%] max-lg:grid-rows-[minmax(38px,auto)_minmax(42px,auto)_minmax(26px,auto)_minmax(174px,auto)_minmax(40px,auto)_minmax(2px,auto)_minmax(48px,auto)_minmax(2px,auto)_minmax(12px,auto)_minmax(50px,auto)_minmax(43px,auto)_minmax(3787px,auto)_1fr] max-lg:px-4 lg:min-h-[175.375rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_0.0816993%_0.735294%_9.80392%_1.47059%_14.134%_1.22549%_0.490196%_10.6209%_10.9477%_3.43137%_32.6797%_5.96405%] lg:grid-rows-[minmax(42px,auto)_minmax(38px,auto)_minmax(24px,auto)_minmax(30px,auto)_minmax(50px,auto)_minmax(35px,auto)_minmax(230px,auto)_minmax(2290px,auto)_1fr] lg:px-0">
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:text-center max-lg:col-start-1 max-lg:col-end-10 max-lg:row-end-3 lg:text-left lg:col-start-3 lg:col-end-8 lg:row-end-4"
        >
          <div
            id="znK1Kj"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
              <strong className="[color:inherit] break-words">lieky</strong>
            </h3>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-12 lg:col-end-13 lg:row-start-3 lg:row-end-8">
          <div
            id="z3CZOd"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[10.875rem] lg:max-h-[23.0938rem]"
          >
            <div
              rel="nofollow"
              title="a large, colorful, abstracted image of a sphere with a sphere of jelly"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
            >
              <img
                alt="a large, colorful, abstracted image of a sphere with a sphere of jelly"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=709,fit=crop/ALpBQyXKnqhOakP5/ideogram-22-YyvXVvxJlxfe8E30.jpeg"
                height="369"
                width="400"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a large, colorful, abstracted image of a sphere with a sphere of jelly"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
            >
              <img
                alt="a large, colorful, abstracted image of a sphere with a sphere of jelly"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=367,fit=crop/ALpBQyXKnqhOakP5/ideogram-22-YyvXVvxJlxfe8E30.jpeg"
                height="174"
                width="178"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-left w-full h-full relative z-[3] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-10 max-lg:row-start-12 max-lg:row-end-13 lg:col-start-4 lg:col-end-11 lg:row-start-7 lg:row-end-9">
          <div
            id="zACRsn"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h5 className={listItemClassName}>1. lieky na predpis</h5>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "tieto lieky sú dostupné len na lekársky predpis a sú určené na liečbu závažnejších prípadov kŕčových žíl a žilovej nedostatočnosti. tieto lieky obsahujú vyššie koncentrácie účinných látok a sú určené na intenzívnejšiu liečbu. ich užívanie by malo byť pod dohľadom lekára."
              }
            </p>
            <ul className="break-words my-0">
              {items2.map((item, index) => (
                <ListItem2
                  key={index}
                  {...item}
                  separator={index < items2.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8" />
            <h5 className={listItemClassName}>2. voľne dostupné lieky</h5>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "tieto lieky sú dostupné bez predpisu, ale podliehajú prísnej kontrole Úradu na kontrolu liečiv. tieto lieky sú vhodné pre ľudí s miernymi až stredne závažnými príznakmi kŕčových žíl. napriek tomu, že sú voľne predajné, je vhodné ich užívanie konzultovať s lekárom alebo lekárnikom."
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
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8" />
            <h5 className={listItemClassName}>3. výživové doplnky</h5>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "výživové doplnky nemusia spĺňať také prísne požiadavky pri predaji ako lieky, ale môžu byť účinnou podporou pri liečbe kŕčových žíl. výživové doplnky môžu byť užitočné pri prevencii a podpornej liečbe kŕčových žíl. obsahujú často kombináciu rôznych látok, ktoré môžu priaznivo pôsobiť na zdravie žíl."
              }
            </p>
            <ul className="break-words my-0">
              {items4.map((item, index) => (
                <ListItem2
                  key={index}
                  {...item}
                  separator={index < items4.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8" />
            <h5 className={listItemClassName}>4. liečivé maste</h5>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "tieto prípravky sa aplikujú priamo na postihnuté miesta a môžu pomôcť zmierniť príznaky kŕčových žíl. liečivé maste obsahujú látky ako heparín, ktoré môžu pomôcť zmierniť opuchy a bolesti spojené s kŕčovými žilami. sú vhodné na lokálnu aplikáciu."
              }
            </p>
            <ul className="break-words my-0">
              {items5.map((item, index) => (
                <ListItem2
                  key={index}
                  {...item}
                  separator={index < items5.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8" />
            <h5 className={listItemClassName}>5. kozmetické prípravky</h5>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "tieto prípravky sú určené na vonkajšie použitie a môžu pomôcť pri úľave od príznakov kŕčových žíl. kozmetické prípravky obsahujú často prírodné extrakty, ktoré môžu mať priaznivý účinok na kožu a žily. sú vhodné na každodenné použitie a môžu pomôcť pri prevencii a zmiernení príznakov kŕčových žíl."
              }
            </p>
            <ul className="break-words my-0">
              {items6.map((item, index) => (
                <ListItem2
                  key={index}
                  {...item}
                  separator={index < items6.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
          </div>
        </div>
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
