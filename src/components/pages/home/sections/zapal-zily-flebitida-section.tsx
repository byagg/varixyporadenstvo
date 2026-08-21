const listItemClassName =
  "relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";
const listItemClassName2 =
  "font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-2xl";

/**
 * @ployComponent
 * @ployComponentId zapal-zily-flebitida-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: zápal žily/flebitída
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

type ListItem3Props = {
  text: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  text_5: string;
  text_6: string;
  separator?: string;
};

function ListItem3({
  text,
  text_1,
  text_2,
  text_3,
  text_4,
  text_5,
  text_6,
  separator,
}: ListItem3Props) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
          <span className="[color:inherit] font-bold break-words">
            <strong className="[color:inherit] break-words">{text}</strong>
          </span>
          {text_1}
        </p>
        <ul className="break-words my-0">
          <li className="break-words">
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              {text_2}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {text_3}
                </strong>
              </span>
              {text_4}
            </p>
          </li>
          <li className="break-words">
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {text_5}
                </strong>
              </span>
              {text_6}
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
          </li>
        </ul>
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
      title={title || undefined}
      data-ploy-animation-fx-hint="fade-in"
      style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
      className="relative flex transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
    >
      <img
        alt={alt}
        src={src}
        height="false"
        width="279"
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
};

function ImageItem2({ title, alt, src }: ImageItem2Props) {
  return (
    <div
      title={title}
      style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
      className={listItemClassName}
    >
      <img
        alt={alt}
        src={src}
        height="false"
        width="279"
        loading="eager"
        className="w-full h-full max-w-none image__image--unstyled overflow-clip"
      />
    </div>
  );
}

type ImageItem3Props = {
  title: string;
  className: string;
  alt: string;
  src: string;
};

function ImageItem3({ title, className, alt, src }: ImageItem3Props) {
  return (
    <div
      title={title || undefined}
      style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
      className={className}
    >
      <img
        alt={alt}
        src={src}
        height="false"
        width="279"
        loading="eager"
        className="w-full h-full max-w-none image__image--unstyled overflow-clip"
      />
    </div>
  );
}

export const items: ListItemProps[] = [
  { text: "bolestivosť v priebehu postihnutej žily" },
  { text: "začervenanie kože nad zápalovým ložiskom" },
  { text: "palpačne tuhá a voči spodine pohyblivá žila" },
  { text: "lokalizovaný opuch v oblasti postihnutej žily" },
];

export const items2: ListItemProps[] = [
  { text: "prítomnosť kŕčových žíl (varikoflebitída)" },
  { text: "traumatizácia žily" },
  { text: "dlhodobá imobilizácia (pooperačné stavy, úrazy, dlhé cestovanie)" },
  { text: "hyperkoagulačné stavy" },
  { text: "hormonálna terapia a antikoncepcia" },
  { text: "malignity" },
  { text: "gravidita" },
  { text: "pokročilý vek" },
  { text: "zavedené intravenózne kanyly" },
];

export const items3: ListItem3Props[] = [
  {
    text: "lokálnu terapiu:",
    text_1: "",
    text_2: "",
    text_3: "protizápalové",
    text_4: "gély (napr. Lioton gel)",
    text_5: "kompresívna",
    text_6: " terapia (bandáž alebo kompresívne pančuchy)",
  },
  {
    text: "systémovú",
    text_1: " terapiu:",
    text_2: "",
    text_3: "venofarmakum",
    text_4: " (napr. Detralex)",
    text_5: "hydratácia",
    text_6: "",
  },
  {
    text: "režimové",
    text_1: " opatrenia:",
    text_2: "podporovanie",
    text_3: "mobility",
    text_4: " pacienta, predovšetkým chôdza",
    text_5: "elevácia",
    text_6: " dolných končatín v pokoji",
  },
];

export const items4: ListItemProps[] = [
  { text: "pravidelný pohyb a cvičenie" },
  { text: "udržiavanie optimálnej telesnej hmotnosti" },
  { text: "dostatočnú hydratáciu" },
  {
    text: "používanie kompresívnej terapie pri dlhodobom cestovaní alebo státí",
  },
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
  {
    title: "a person holding a knife on top of a table",
    alt: "a person holding a knife on top of a table",
    src: "https://images.unsplash.com/photo-1688565632604-d5d1e9c4f282?auto=format&fit=crop&w=360",
  },
  {
    title: "",
    alt: "",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/ALpBQyXKnqhOakP5/img_0751-fotor-2023093013950-Yle2VkBN8zF4Ra3V.jpg",
  },
];

export const images2: ImageItem2Props[] = [
  {
    title: "white cigarette stick",
    alt: "white cigarette stick",
    src: "https://images.unsplash.com/photo-1535378719329-f0a8b9a42152?auto=format&fit=crop&w=360",
  },
  {
    title: "person taking picture of bare trees",
    alt: "person taking picture of bare trees",
    src: "https://images.unsplash.com/photo-1514471244491-6fb96fcdf04f?auto=format&fit=crop&w=360",
  },
  {
    title: "a person holding a knife on top of a table",
    alt: "a person holding a knife on top of a table",
    src: "https://images.unsplash.com/photo-1688565632604-d5d1e9c4f282?auto=format&fit=crop&w=360",
  },
];

export const images3: ImageItem3Props[] = [
  {
    title: "a shirtless man with crutches and a broken leg",
    className:
      "relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden",
    alt: "a shirtless man with crutches and a broken leg",
    src: "https://images.unsplash.com/photo-1644968426918-0061484f83a6?auto=format&fit=crop&w=360",
  },
  {
    title: "a close up of a cell phone with a black background",
    className:
      "relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden",
    alt: "a close up of a cell phone with a black background",
    src: "https://images.unsplash.com/photo-1576086265779-619d2f54d96b?auto=format&fit=crop&w=360",
  },
  {
    title: "",
    className:
      "relative flex translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--unstyled max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] md:max-lg:opacity-0 lg:opacity-100 overflow-hidden",
    alt: "",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/ALpBQyXKnqhOakP5/img_0751-fotor-2023093013950-Yle2VkBN8zF4Ra3V.jpg",
  },
];

export default function ZapalZilyFlebitidaSection() {
  return (
    <section
      id="flebitida"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-69-AE02K082gzIVarOv.jpeg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.84] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[240.3125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[3.96341%_90.8537%_5.18293%] max-lg:grid-rows-[minmax(16px,auto)_minmax(3066px,auto)_minmax(339px,auto)_minmax(379px,auto)_1fr] max-lg:px-4 lg:min-h-[160.25rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_42.2386%_4.57516%_22.7941%_13.5621%] lg:grid-rows-[minmax(64px,auto)_minmax(96px,auto)_minmax(2218px,auto)_minmax(79px,auto)_1fr] lg:px-0">
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-end-4"
        >
          <div
            id="z7N_-E"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
              {"zápal žily/flebitída"}
            </h2>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"flebitída/ "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"varikoflebitída"}
                </strong>
              </span>{" "}
              {"je zápalové ochorenie povrchovej žily alebo varikóznej žily, často sprevádzané tvorbou krvnej zrazeniny, čo sa označuje ako" +
                " "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"tromboflebitída"}
                </strong>
              </span>
              {
                ". varikoflebitída je špecifický typ flebitídy, ktorý postihuje kŕčové žily. tieto stavy môžu v niektorých prípadoch progredovať do hlbokého žilového systému, čo predstavuje riziko vzniku hlbokej žilovej trombózy s potenciálnymi komplikáciami ako pľúcna embólia a posttrombotický syndróm."
              }
            </p>
            <h3 className={listItemClassName2}>klinický obraz</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"príznaky flebitídy zahŕňajú:"}
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
                  {"možné zvýšenie telesnej teploty"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h3 className={listItemClassName2}>etiológia a rizikové faktory</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"medzi faktory prispievajúce k vzniku flebitídy patria:"}
            </p>
            <ul className="break-words my-0">
              {items2.map((item, index) => (
                <ListItem
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
            <h3 className={listItemClassName2}>diagnostika</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"diagnostický proces zahŕňa:"}
            </p>
            <ol className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"anamnézu a fyzikálne vyšetrenie"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"ultrasonografické vyšetrenie žilového systému"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {
                    "v indikovaných prípadoch laboratórne vyšetrenia zamerané na koagulačné parametre"
                  }
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ol>
            <h3 className={listItemClassName2}>terapeutický manažment</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"liečba flebitídy je zameraná na:"}
            </p>
            <ol className="break-words my-0">
              {items3.map((item, index) => (
                <ListItem3
                  key={index}
                  {...item}
                  separator={index < items3.length - 1 ? "\n" : ""}
                />
              ))}
            </ol>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "v prípade rozsiahleho postihnutia, febrilných stavov alebo zápalu v inguinálnej oblasti je indikované dôkladné vyšetrenie lekárom vrátane ultrasonografického vyšetrenia cievneho systému."
              }
            </p>
            <h3 className={listItemClassName2}>prevencia</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"preventívne opatrenia zahŕňajú:"}
            </p>
            <ul className="break-words my-0">
              {items4.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items4.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  {"ukončenie fajčenia"}
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h3 className={listItemClassName2}>komplikácie</h3>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {"potenciálne komplikácie flebitídy zahŕňajú:"}
            </p>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {
                    "progresiu do hlbokého žilového systému s rizikom vzniku hlbokej žilovej trombózy a pľúcnej embólie"
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"dlhodobá nepriechodnosť postihnutej žily"}
                </p>
              </li>
            </ul>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-end-5 max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-4 lg:col-start-4 lg:col-end-5 lg:row-start-3">
          <div
            id="zfNcH8"
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
              <div className="flex flex-col gap-1 grid-gallery-masonry__column">
                {images2.map((item, index) => (
                  <ImageItem2 key={index} {...item} />
                ))}
              </div>
              <div className="flex flex-col gap-1 grid-gallery-masonry__column">
                {images3.map((item, index) => (
                  <ImageItem3 key={index} {...item} />
                ))}
              </div>
              <div className="flex flex-col gap-1 grid-gallery-masonry__column">
                <div
                  title="person holding four assorted medicine tablets"
                  style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                  className={listItemClassName}
                >
                  <img
                    alt="person holding four assorted medicine tablets"
                    src="https://images.unsplash.com/photo-1512069843211-ff3b764416be?auto=format&fit=crop&w=360"
                    height="false"
                    width="279"
                    loading="eager"
                    className="w-full h-full max-w-none image__image--unstyled overflow-clip"
                  />
                </div>
                <div
                  title="a man holding his stomach with his hands"
                  style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                  className={listItemClassName}
                >
                  <img
                    alt="a man holding his stomach with his hands"
                    src="https://images.unsplash.com/photo-1634463278803-f9f71890e67d?auto=format&fit=crop&w=360"
                    height="false"
                    width="279"
                    loading="eager"
                    className="w-full h-full max-w-none image__image--unstyled overflow-clip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
