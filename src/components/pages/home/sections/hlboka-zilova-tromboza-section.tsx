const listItemClassName =
  "font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId hlboka-zilova-tromboza-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: hlboká žilová trombóza
 */
type ListItemProps = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem({ text, text_1, separator }: ListItemProps) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          <span className="[color:inherit] font-bold break-words">
            <strong className="[color:inherit] break-words">{text}</strong>
          </span>
          {text_1}
        </p>
      </li>
      {separator}
    </>
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

type ListItem3Props = {
  text: string;
  text_1: string;
  text_2: string;
  separator?: string;
};

function ListItem3({ text, text_1, text_2, separator }: ListItem3Props) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          {text}
          <span className="[color:inherit] font-bold break-words">
            <strong className="[color:inherit] break-words">{text_1}</strong>
          </span>
          {text_2}
        </p>
      </li>
      {separator}
    </>
  );
}

type ImageItemProps = {
  title: string;
  alt: string;
  src: string;
};

function ImageItem({ title, alt, src }: ImageItemProps) {
  return (
    <div
      title={title}
      data-ploy-animation-fx-hint="fade-in"
      style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
      className="relative flex transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
    >
      <img
        alt={alt}
        src={src}
        height="false"
        width="204"
        loading="eager"
        className="w-full h-full max-w-none image__image--unstyled overflow-clip"
      />
    </div>
  );
}

type ImageItem2Props = {
  title: string;
  alt: string;
  src: string;
  title_1: string;
  imageAlt: string;
  imageSrc: string;
};

function ImageItem2({
  title,
  alt,
  src,
  title_1,
  imageAlt,
  imageSrc,
}: ImageItem2Props) {
  return (
    <div className="flex flex-col gap-1 grid-gallery-masonry__column">
      <div
        title={title}
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className="relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
      >
        <img
          alt={alt}
          src={src}
          height="false"
          width="204"
          loading="eager"
          className="w-full h-full max-w-none image__image--unstyled overflow-clip"
        />
      </div>
      <div
        title={title_1}
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className="relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
      >
        <img
          alt={imageAlt}
          src={imageSrc}
          height="false"
          width="204"
          loading="eager"
          className="w-full h-full max-w-none image__image--unstyled overflow-clip"
        />
      </div>
    </div>
  );
}

export const items: ListItemProps[] = [
  { text: "bolesť a opuch", text_1: " postihnutej končatiny" },
  { text: "tŕpnutie", text_1: " a kŕče" },
  {
    text: "zmena farby",
    text_1: " kože (začervenanie alebo modrasté sfarbenie)",
  },
];

export const items2: ListItem2Props[] = [
  { text: "dlhodobá imobilizácia (po operácii, úraze, dlhé cestovanie)" },
  { text: "poruchy zrážanlivosti krvi" },
  { text: "nádorové ochorenia" },
  { text: "hormonálna liečba a antikoncepcia" },
  { text: "tehotenstvo" },
  { text: "dehydratácia" },
  { text: "genetická predispozícia" },
  { text: "obezita" },
];

export const items3: ListItem3Props[] = [
  { text: "", text_1: "antikoagulačnú terapiu", text_2: "" },
  { text: "", text_1: "kompresnú terapiu", text_2: "" },
  { text: "postupnú ", text_1: "mobilizáciu", text_2: " pacienta" },
];

export const items4: ListItem2Props[] = [
  { text: "pravidelný pohyb a cvičenie" },
  { text: "dostatočnú hydratáciu" },
  { text: "udržiavanie zdravej hmotnosti" },
  { text: "ukončenie fajčenia" },
  { text: "v rizikových situáciách používanie kompresných pančúch" },
];

export const images: ImageItemProps[] = [
  {
    title: "white cigarette stick",
    alt: "white cigarette stick",
    src: "https://images.unsplash.com/photo-1535378719329-f0a8b9a42152?auto=format&fit=crop&w=360",
  },
  {
    title: "a shirtless man with crutches and a broken leg",
    alt: "a shirtless man with crutches and a broken leg",
    src: "https://images.unsplash.com/photo-1644968426918-0061484f83a6?auto=format&fit=crop&w=360",
  },
  {
    title: "person holding four assorted medicine tablets",
    alt: "person holding four assorted medicine tablets",
    src: "https://images.unsplash.com/photo-1512069843211-ff3b764416be?auto=format&fit=crop&w=360",
  },
  {
    title: "person taking picture of bare trees",
    alt: "person taking picture of bare trees",
    src: "https://images.unsplash.com/photo-1514471244491-6fb96fcdf04f?auto=format&fit=crop&w=360",
  },
  {
    title: "a close up of a cell phone with a black background",
    alt: "a close up of a cell phone with a black background",
    src: "https://images.unsplash.com/photo-1576086265779-619d2f54d96b?auto=format&fit=crop&w=360",
  },
  {
    title: "a man holding his stomach with his hands",
    alt: "a man holding his stomach with his hands",
    src: "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?auto=format&fit=crop&w=360",
  },
];

export const images2: ImageItem2Props[] = [
  {
    title: "white cigarette stick",
    alt: "white cigarette stick",
    src: "https://images.unsplash.com/photo-1535378719329-f0a8b9a42152?auto=format&fit=crop&w=360",
    title_1: "person taking picture of bare trees",
    imageAlt: "person taking picture of bare trees",
    imageSrc:
      "https://images.unsplash.com/photo-1514471244491-6fb96fcdf04f?auto=format&fit=crop&w=360",
  },
  {
    title: "a shirtless man with crutches and a broken leg",
    alt: "a shirtless man with crutches and a broken leg",
    src: "https://images.unsplash.com/photo-1644968426918-0061484f83a6?auto=format&fit=crop&w=360",
    title_1: "a close up of a cell phone with a black background",
    imageAlt: "a close up of a cell phone with a black background",
    imageSrc:
      "https://images.unsplash.com/photo-1576086265779-619d2f54d96b?auto=format&fit=crop&w=360",
  },
  {
    title: "person holding four assorted medicine tablets",
    alt: "person holding four assorted medicine tablets",
    src: "https://images.unsplash.com/photo-1512069843211-ff3b764416be?auto=format&fit=crop&w=360",
    title_1: "a man holding his stomach with his hands",
    imageAlt: "a man holding his stomach with his hands",
    imageSrc:
      "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?auto=format&fit=crop&w=360",
  },
];

export default function HlbokaZilovaTrombozaSection() {
  return (
    <section
      id="tromboza"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/26e26ce182062a54f718.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.84] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[180.875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[3.96341%_90.8537%_5.18293%] max-lg:grid-rows-[minmax(16px,auto)_minmax(2445px,auto)_minmax(147px,auto)_minmax(246px,auto)_1fr] max-lg:px-4 lg:min-h-[135.1875rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_36.6013%_4.65686%_16.6667%_25.2451%] lg:grid-rows-[minmax(64px,auto)_minmax(160px,auto)_minmax(1391px,auto)_minmax(515px,auto)_1fr] lg:px-0">
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-end-5"
        >
          <div
            id="zPGdy-"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
              {"hlboká žilová trombóza"}
            </h2>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "Hlboká žilová trombóza (HŽT) je závažný medicínsky stav charakterizovaný tvorbou krvnej zrazeniny v hlbokom žilovom systéme, najčastejšie v dolných končatinách. tento stav môže viesť k život ohrozujúcim komplikáciám, ako je pľúcna embólia, a k dlhodobým následkom v podobe posttrombotického syndrómu."
              }
            </p>
            <h3 className={listItemClassName}>príznaky a rizikové faktory</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"príznaky HŽT zahŕňajú:"}
            </p>
            <ul className="break-words my-0">
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"zvýšená teplota"}
                    </strong>
                  </span>{" "}
                  {"v postihnutej oblasti"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"rizikové faktory pre vznik HŽT sú:"}
            </p>
            <ul className="break-words my-0">
              {items2.map((item, index) => (
                <ListItem2
                  key={index}
                  {...item}
                  separator={index < items2.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"fajčenie"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h3 className={listItemClassName}>diagnostika a liečba</h3>
            <ol className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"fyzikálne vyšetrenie"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"laboratórne testy (D-diméry)"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"zobrazovacie metódy (ultrazvuk, CT angiografia)"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"liečba sa zameriava na:"}
            </p>
            <ol className="break-words my-0">
              {items3.map((item, index) => (
                <ListItem3
                  key={index}
                  {...item}
                  separator={index < items3.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "v špecifických prípadoch trombolýzu alebo chirurgickú intervenciu"
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h3 className={listItemClassName}>prevencia</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"preventívne opatrenia zahŕňajú:"}
            </p>
            <ul className="break-words my-0">
              {items4.map((item, index) => (
                <ListItem2
                  key={index}
                  {...item}
                  separator={index < items4.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "u rizikových pacientov konzultáciu s lekárom ohľadom preventívnej antikoagulačnej liečby"
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h3 className="font-heading text-ploy-text-inverse font-bold text-3xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight">
              {"komplikácie"}
            </h3>
            <h4 className="font-heading text-ploy-text-inverse font-bold text-2xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight">
              {"pľúcna embólia"}
            </h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "závažná komplikácia HŽT, pri ktorej sa časť zrazeniny uvoľní a dostane do pľúcnej cirkulácie. príznaky zahŕňajú náhlu dýchavicu, tachykardiu, bolesť na hrudníku a v závažných prípadoch kolaps."
              }
            </p>
            <h4 className="font-heading text-ploy-text-inverse font-bold text-2xl break-words mb-8 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight">
              {"posttrombotický syndróm"}
            </h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "Dlhodobý následok HŽT, charakterizovaný chronickou bolesťou, opuchom končatiny a v pokročilých štádiách tvorbou vredov predkolenia."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4">
          <div
            id="z1JJpf"
            className="self-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-gallery layout-element__component--GridGallery"
          >
            <div className="gap-[normal_64px] grid-cols-[repeat(1,auto)] grid-gallery-masonry grid-gallery-masonry--desktop max-[921px]:hidden min-[921px]:grid">
              <div className="flex flex-col gap-16 grid-gallery-masonry__column">
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
