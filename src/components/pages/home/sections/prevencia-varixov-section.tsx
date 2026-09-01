const listItemClassName =
  "relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] md:max-lg:opacity-0 lg:opacity-100 overflow-hidden";

type ListItemProps = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem({ text, text_1, separator }: ListItemProps) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
          <strong className="[color:inherit] break-words">{text}</strong>
          {text_1}
        </p>
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
      </li>
      {separator}
    </>
  );
}

type ImageItemProps = {
  src: string;
};

function ImageItem({ src }: ImageItemProps) {
  return (
    <div
      style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
      className="relative flex transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
    >
      <img
        alt=""
        src={src}
        height="false"
        width="159"
        loading="eager"
        className="w-full h-full max-w-none image__image--unstyled overflow-clip"
      />
    </div>
  );
}

type ImageItem2Props = {
  src: string;
  imageSrc: string;
  imageSrc2: string;
  imageSrc3: string;
};

function ImageItem2({ src, imageSrc, imageSrc2, imageSrc3 }: ImageItem2Props) {
  return (
    <div className="flex flex-col gap-1 grid-gallery-masonry__column">
      <div
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className={listItemClassName}
      >
        <img
          alt=""
          src={src}
          height="false"
          width="159"
          loading="eager"
          className="w-full h-full max-w-none image__image--unstyled overflow-clip"
        />
      </div>
      <div
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className={listItemClassName}
      >
        <img
          alt=""
          src={imageSrc}
          height="false"
          width="159"
          loading="eager"
          className="w-full h-full max-w-none image__image--unstyled overflow-clip"
        />
      </div>
      <div
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className={listItemClassName}
      >
        <img
          alt=""
          src={imageSrc2}
          height="false"
          width="159"
          loading="eager"
          className="w-full h-full max-w-none image__image--unstyled overflow-clip"
        />
      </div>
      <div
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className={listItemClassName}
      >
        <img
          alt=""
          src={imageSrc3}
          height="false"
          width="159"
          loading="eager"
          className="w-full h-full max-w-none image__image--unstyled overflow-clip"
        />
      </div>
    </div>
  );
}

export const items: ListItemProps[] = [
  {
    text: "vysoké podpätky",
    text_1:
      ": vysoké podpätky sú postrachom žíl, pretože pri ich nosení je slabo funkčná svalová pumpa v lýtkach, ktorá pomáha krv posúvať smerom k srdcu",
  },
  {
    text: "jedlo",
    text_1:
      ": strava bohatá na vlákninu s dostatkom prírodných minerálov a vitamínov je základom zdravého žilového a celého cievneho systému, čo predstavuje prevenciu kŕčových žíl.",
  },
  {
    text: "pančuchy",
    text_1:
      ": pravidelné preventívne nosenie kompresných pančúch prospieva žilám a umožňuje stabilizovať progresiu ochorenia. Pri pravidelnom nosení sa stabilizuje ochorenie kŕčových žíl.",
  },
  {
    text: "tekutiny",
    text_1:
      ": dostatok tekutín, najmä v letných mesiacoch, je nevyhnutný. Káva a čaj majú odvodňovací efekt, preto treba dodržiavať pitný režim. Alkohol v primeranom množstve neškodí cievam, ale rozťahuje ich a plní varixy na nohách.",
  },
  {
    text: "dlhodobé sedenie",
    text_1:
      ": Dlhodobé sedenie a státie je nutné prerušovať prechádzkou alebo vyložením nôh a vykonávaním cvikov päta-špička. Kŕčové žily na nohách sa plnia slabo cirkulujúcou krvou.",
  },
  {
    text: "športovanie",
    text_1:
      ": Pravidelná fyzická aktivita a zdravé prostredie sú predpokladmi zdravého cievneho systému. Pri kŕčových žilách je vhodné nosiť športové kompresné pančuchy.",
  },
  {
    text: "masáž",
    text_1:
      ": Pri vyšších štádiách ochorenia je nutné udržiavať pokožku nôh vláčnu, čím sa predchádza jej vysušovaniu a poraneniu. Varixy spôsobujú spomalenie prúdenia krvi, čo vedie k horšej výžive kože.",
  },
  {
    text: "stúpanie",
    text_1:
      ": Žilovému návratu počas spánku sa dá pomôcť cvikmi, ako je bicyklovanie v ľahu pred spaním, a podložením nôh postele o 10-15 cm vyššie. Kŕčové žily na nohách tým zmenšia svoju náplň.",
  },
  {
    text: "sprcha",
    text_1:
      ": Striedanie studenej a teplej sprchy stimuluje hladké svalstvo krvných kapilár a zlepšuje cirkuláciu v koži. Hoci sa kŕčové žily nezmenšia, pomáha to k ich stabilizácii.",
  },
  {
    text: "sauna",
    text_1:
      ": Pri pobyte v extrémnom teple v kúpeľoch a saunách sa masívne hromadí krv v riečisku nôh. To spôsobuje zvýšenie vnútorného objemu krvi v kŕčových žilách.",
  },
  {
    text: "nesťahujúce oblečenie",
    text_1:
      ": Príliš tesné oblečenie, hlavne v noci, neprospieva voľnému odtoku žilovej krvi z nôh. Oblečenie by malo byť prispôsobené tak, aby krv mohla z nôh ľahšie prúdiť k srdcu.",
  },
];

export const images: ImageItemProps[] = [
  {
    src: "/migrated-assets/43882f82b4a472d5e4b1.jpg",
  },
  {
    src: "/migrated-assets/8cfc322fd0342767b749.jpg",
  },
  {
    src: "/migrated-assets/0052222834f8d069b61c.jpg",
  },
  {
    src: "/migrated-assets/78d08e0ee6751b76b0e2.jpg",
  },
  {
    src: "/migrated-assets/ba9e438bac2a30b7bae7.jpg",
  },
  {
    src: "/migrated-assets/9d549038d58aa916c945.jpg",
  },
  {
    src: "/migrated-assets/9e0b38ed796202b40b5c.jpg",
  },
  {
    src: "/migrated-assets/94e994df93426253ef03.jpg",
  },
  {
    src: "/migrated-assets/fcc288b124c2a9ef6ca2.jpg",
  },
  {
    src: "/migrated-assets/f09775b46c8d8c2b4605.jpg",
  },
  {
    src: "/migrated-assets/fc88ba3bf7e4ff718a66.jpg",
  },
  {
    src: "/migrated-assets/a811b9d8a1d96c40ddee.jpg",
  },
];

export const images2: ImageItem2Props[] = [
  {
    src: "/migrated-assets/43882f82b4a472d5e4b1.jpg",
    imageSrc:
      "/migrated-assets/78d08e0ee6751b76b0e2.jpg",
    imageSrc2:
      "/migrated-assets/9e0b38ed796202b40b5c.jpg",
    imageSrc3:
      "/migrated-assets/f09775b46c8d8c2b4605.jpg",
  },
  {
    src: "/migrated-assets/8cfc322fd0342767b749.jpg",
    imageSrc:
      "/migrated-assets/ba9e438bac2a30b7bae7.jpg",
    imageSrc2:
      "/migrated-assets/94e994df93426253ef03.jpg",
    imageSrc3:
      "/migrated-assets/fc88ba3bf7e4ff718a66.jpg",
  },
  {
    src: "/migrated-assets/0052222834f8d069b61c.jpg",
    imageSrc:
      "/migrated-assets/9d549038d58aa916c945.jpg",
    imageSrc2:
      "/migrated-assets/fcc288b124c2a9ef6ca2.jpg",
    imageSrc3:
      "/migrated-assets/a811b9d8a1d96c40ddee.jpg",
  },
];

export default function PrevenciaVarixovSection() {
  return (
    <section
      id="zipgSX"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/26e26ce182062a54f718.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        
        alt=""/>
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.84] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[190.25rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[3.96341%_90.8537%_5.18293%] max-lg:grid-rows-[minmax(16px,auto)_minmax(2214px,auto)_minmax(370px,auto)_minmax(393px,auto)_1fr] max-lg:px-4 lg:min-h-[113.25rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_36.6013%_4.65686%_12.9902%_28.9216%] lg:grid-rows-[minmax(64px,auto)_minmax(96px,auto)_minmax(1534px,auto)_minmax(23px,auto)_1fr] lg:px-0">
        <div
          className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-end-4"
        >
          <div
            id="zuuhZh"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
              {"prevencia varixov"}
            </h2>
            <ul className="break-words my-0">
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    {"obezita"}
                  </strong>
                  {
                    ": Zníženie telesnej hmotnosti prospieva k redukcii ťažkostí a zmenšeniu objemu žilového riečiska. S nárastom hmotnosti pribúdajú aj problémy, ktorých pôvodcom sú kŕčové žily na nohách."
                  }
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-end-5 max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-4 lg:col-start-4 lg:col-end-5 lg:row-start-3">
          <div
            id="zXLYyv"
            className="self-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-gallery layout-element__component--GridGallery"
          >
            <div className="gap-[normal_6px] grid-cols-[repeat(1,auto)] grid-gallery-masonry grid-gallery-masonry--desktop max-[921px]:hidden min-[921px]:grid">
              <div className="flex flex-col gap-1.5 grid-gallery-masonry__column">
                {images.map((item, index) => (
                  <ImageItem key={index} {...item} />
                ))}
              </div>
            </div>
            <div className="gap-[normal_4px] grid-cols-[repeat(3,auto)] grid-gallery-masonry grid-gallery-masonry--mobile max-[921px]:grid min-[921px]:hidden max-lg:grid lg:hidden">
              {images2.map((item, index) => (
                <ImageItem2 key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
