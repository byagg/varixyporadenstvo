const imageItemClassName =
  "self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox";

/**
 * @ployComponent
 * @ployComponentId kontakt-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ImageItemProps = {
  className: string;
  id: string;
  title: string;
  ployAnimationFxHintData: string;
  containerClassName: string;
  alt: string;
  src: string;
  title_1: string;
  containerClassName2: string;
  imageAlt: string;
  imageSrc: string;
};

function ImageItem({
  className,
  id,
  title,
  ployAnimationFxHintData,
  containerClassName,
  alt,
  src,
  title_1,
  containerClassName2,
  imageAlt,
  imageSrc,
}: ImageItemProps) {
  return (
    <div className={className}>
      <div
        id={id}
        className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[28.5313rem]"
      >
        <div
          rel="nofollow"
          title={title}
          data-ploy-animation-fx-hint={ployAnimationFxHintData || undefined}
          style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
          className={containerClassName}
        >
          <img
            alt={alt}
            src={src}
            height="456"
            width="480"
            loading="eager"
            className="w-full h-full max-w-none object-cover image__image overflow-clip"
          />
        </div>
        <div
          rel="nofollow"
          title={title_1}
          style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
          className={containerClassName2}
        >
          <img
            alt={imageAlt}
            src={imageSrc}
            height="320"
            width="328"
            loading="eager"
            className="w-full h-full max-w-none object-cover image__image overflow-clip"
          />
        </div>
      </div>
    </div>
  );
}

type ListItemProps = {
  className: string;
  id: string;
  titleClassName: string;
  text: string;
};

function ListItem({ className, id, titleClassName, text }: ListItemProps) {
  return (
    <div className={className}>
      <div id={id} className={imageItemClassName}>
        <h6 className={titleClassName}>
          <strong className="[color:inherit] break-words">{text}</strong>
        </h6>
      </div>
    </div>
  );
}

export const images: ImageItemProps[] = [
  {
    className:
      "text-start w-full h-full relative z-[13] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[23] max-lg:row-end-[24] lg:col-start-2 lg:col-end-13 lg:row-start-[21] lg:row-end-[22]",
    id: "zqLvJg",
    title: "a poster with a medical poster showing a medical procedure",
    ployAnimationFxHintData: "",
    containerClassName:
      "w-full h-full relative cursor-zoom-in image image--zoom image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden",
    alt: "a poster with a medical poster showing a medical procedure",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=730,fit=crop/ALpBQyXKnqhOakP5/sklerotizacia_infografika-elVrtQoBbyYey5HD.png",
    title_1: "a poster with a medical poster showing a medical procedure",
    containerClassName2:
      "w-full h-full relative cursor-zoom-in image image--zoom image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden",
    imageAlt: "a poster with a medical poster showing a medical procedure",
    imageSrc:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/sklerotizacia_infografika-elVrtQoBbyYey5HD.png",
  },
  {
    className:
      "text-start w-full h-full relative z-[14] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[25] max-lg:row-end-[26] lg:col-start-[14] lg:col-end-[18] lg:row-start-[21] lg:row-end-[22]",
    id: "zuvjVI",
    title: "a poster with a picture of a person with a kneel",
    ployAnimationFxHintData: "fade-in",
    containerClassName:
      "w-full h-full relative cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--zoom image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden",
    alt: "a poster with a picture of a person with a kneel",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=730,fit=crop/ALpBQyXKnqhOakP5/rfa_infografika-vAR8azTS53bmXfg9.png",
    title_1: "a poster with a picture of a person with a kneel",
    containerClassName2:
      "w-full h-full relative opacity-0 translate-y-[20%] cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] image image--zoom image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden",
    imageAlt: "a poster with a picture of a person with a kneel",
    imageSrc:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/rfa_infografika-vAR8azTS53bmXfg9.png",
  },
  {
    className:
      "text-start w-full h-full relative z-[15] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[27] max-lg:row-end-[28] lg:col-start-2 lg:col-end-13 lg:row-start-[23] lg:row-end-[24]",
    id: "zXVo0M",
    title: "a poster with a medical poster about a medical procedure",
    ployAnimationFxHintData: "fade-in",
    containerClassName:
      "w-full h-full relative cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--zoom image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden",
    alt: "a poster with a medical poster about a medical procedure",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=730,fit=crop/ALpBQyXKnqhOakP5/rfa_evrf_infografika-90Fyg4cwWdJAOhuP.png",
    title_1: "a poster with a medical poster about a medical procedure",
    containerClassName2:
      "w-full h-full relative opacity-0 translate-y-[20%] cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] image image--zoom image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden",
    imageAlt: "a poster with a medical poster about a medical procedure",
    imageSrc:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/rfa_evrf_infografika-90Fyg4cwWdJAOhuP.png",
  },
  {
    className:
      "text-start w-full h-full relative z-[16] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[29] max-lg:row-end-[30] lg:col-start-[14] lg:col-end-[18] lg:row-start-[23] lg:row-end-[24]",
    id: "zqo5bg",
    title:
      "a poster with a medical poster showing a doctor's hand holding a syop",
    ployAnimationFxHintData: "fade-in",
    containerClassName:
      "w-full h-full relative cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--zoom image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden",
    alt: "a poster with a medical poster showing a doctor's hand holding a syop",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=730,fit=crop/ALpBQyXKnqhOakP5/miniflebektomia_infografika-NYE4rpBbwuu8e7N1.png",
    title_1:
      "a poster with a medical poster showing a doctor's hand holding a syop",
    containerClassName2:
      "w-full h-full relative opacity-0 translate-y-[20%] cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] image image--zoom image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden",
    imageAlt:
      "a poster with a medical poster showing a doctor's hand holding a syop",
    imageSrc:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/miniflebektomia_infografika-NYE4rpBbwuu8e7N1.png",
  },
];

export const items: ListItemProps[] = [
  {
    className:
      "text-left w-full h-full relative z-[9] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-13 max-lg:row-end-[14] lg:col-end-5 lg:row-start-[18] lg:row-end-[19]",
    id: "zOT9JA",
    titleClassName:
      "font-heading text-ploy-text-on-accent-primary font-semibold break-words max-[921px]:mb-0 max-lg:leading-6 max-lg:text-xl lg:leading-tight lg:text-lg",
    text: "Objednanie: +4212482 52 300",
  },
  {
    className:
      "text-left w-full h-full relative z-10 grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-end-10 lg:row-start-11 lg:row-end-12",
    id: "zOjKO_",
    titleClassName:
      "font-heading text-ploy-text-on-accent-primary font-semibold break-words max-[921px]:mb-0 max-lg:leading-6 max-lg:text-xl lg:text-2xl",
    text: "Zazmluvnená poisťovňa: Union",
  },
  {
    className:
      "text-left w-full h-full relative z-[11] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-[15] max-lg:row-end-[16] lg:col-end-7 lg:row-start-[19] lg:row-end-[20]",
    id: "z0noKi",
    titleClassName:
      "font-heading text-ploy-text-on-accent-primary font-semibold break-words max-[921px]:mb-0 max-lg:leading-6 max-lg:text-xl lg:text-2xl",
    text: "Zazmluvnená poisťovňa: Union, VšZP",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zH8gOD"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-75-Aq2eV2gee2tb08Dn.jpeg"
            width="100vw"
            loading="eager"
            className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
          />
          <div className="bg-ploy-background-primary w-full h-full absolute z-[2] opacity-[0.61] left-0 top-0 block-background__overlay text-ploy-text-primary" />
        </div>
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[159.625rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(78px,auto)_minmax(54px,auto)_minmax(52px,auto)_minmax(4px,auto)_minmax(26px,auto)_minmax(26px,auto)_minmax(61px,auto)_minmax(47px,auto)_minmax(10px,auto)_minmax(54px,auto)_minmax(26px,auto)_minmax(4px,auto)_minmax(26px,auto)_minmax(12px,auto)_minmax(52px,auto)_minmax(56px,auto)_minmax(209px,auto)_minmax(55px,auto)_minmax(200px,auto)_minmax(56px,auto)_minmax(52px,auto)_minmax(28px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_minmax(16px,auto)_minmax(320px,auto)_1fr] max-lg:px-4 lg:min-h-[143.4375rem] lg:max-w-[76.5rem] lg:grid-cols-[10.2941%_11.683%_1.55229%_1.79739%_0.245098%_1.38889%_1.55229%_0.408497%_1.22549%_2.53268%_0.980392%_15.8497%_0.980392%_7.43464%_0.980392%_24.2647%_6.53595%_10.2941%] lg:grid-rows-[minmax(98px,auto)_minmax(6px,auto)_minmax(56px,auto)_minmax(10px,auto)_minmax(54px,auto)_minmax(16px,auto)_minmax(21px,auto)_minmax(28px,auto)_minmax(31px,auto)_minmax(26px,auto)_minmax(62px,auto)_minmax(16px,auto)_minmax(62px,auto)_minmax(13px,auto)_minmax(54px,auto)_minmax(5px,auto)_minmax(21px,auto)_minmax(23px,auto)_minmax(62px,auto)_minmax(424px,auto)_minmax(456px,auto)_minmax(16px,auto)_minmax(456px,auto)_1fr] lg:px-0">
          <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-[21] max-lg:row-end-[22] lg:col-end-11 lg:row-start-2 lg:row-end-4">
            <div id="zHSJu0" className={imageItemClassName}>
              <h1 className="font-heading text-ploy-text-on-accent-primary font-bold break-words max-[921px]:mb-0 max-lg:leading-[3.25rem] max-lg:text-[2.5rem] lg:leading-tight lg:text-5xl">
                {"Concept Clinic"}
              </h1>
            </div>
          </div>
          <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] transition--scale max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[17] max-lg:row-end-[18] lg:col-start-12 lg:col-end-[15] lg:row-start-3 lg:row-end-[20]">
            <div
              id="z3ftoq"
              className="self-start bg-ploy-background-inverse w-full h-full relative col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-map layout-element__component--GridMap text-ploy-text-inverse"
            >
              <iframe
                width="100%"
                height="100%"
                className="w-full h-full inline grid-map__frame overflow-clip"
                src="https://maps.google.com/maps?q=Agel%20clinic,%20Jela%C4%8Di%C4%8Dova%208,%20Bratislava&t=m&z=13&ie=UTF8&output=embed"
              />
              <div className="!hidden -mt-9 -ml-3 bg-ploy-background-accent-primary w-[1.625rem] h-[1.625rem] absolute z-[2] rounded-full left-2/4 top-2/4 grid-map__pin before:content-[''] before:bg-ploy-accent-primary-700 before:absolute before:w-2.5 before:h-2.5 before:top-2 before:left-2 before:z-[2] after:content-[''] after:absolute before:rounded-full after:w-0 after:h-0 after:top-4 after:left-px after:right-px after:z-[1] after:[border-top:20px_solid_rgb(252,_81,_133)] after:[border-right:12px_solid_rgba(0,_0,_0,_0)] after:[border-left:12px_solid_rgba(0,_0,_0,_0)] hidden" />
            </div>
          </div>
          <div className="text-left w-full h-full relative z-[3] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-3 max-lg:row-end-4 lg:col-end-4 lg:row-start-7 lg:row-end-8">
            <div id="zbbLmH" className={imageItemClassName}>
              <h6 className="font-heading text-ploy-text-on-accent-primary font-semibold break-words max-[921px]:mb-0 max-lg:leading-6 max-lg:text-xl lg:leading-tight lg:text-base">
                <strong className="[color:inherit] break-words">
                  {"Ordinačné dni:" + " "}
                </strong>
                <span className="[color:inherit] font-normal break-words">
                  {"pondelok, utorok"}
                </span>
              </h6>
            </div>
          </div>
          <div className="text-left w-full h-full relative z-[4] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-2 max-lg:row-end-3 lg:col-end-6 lg:row-start-5 lg:row-end-6">
            <div id="zyuHNk" className={imageItemClassName}>
              <p className="font-heading text-ploy-text-on-accent-primary text-lg break-words max-[921px]:mb-0">
                <span className="font-body [color:inherit] break-words">
                  {"Adresa: Concept Clinic, Žiškova 22, Bratislava"}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full h-full relative z-[5] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:text-center max-lg:col-end-2 max-lg:row-start-8 max-lg:row-end-9 lg:text-left lg:col-end-9 lg:row-start-13 lg:row-end-[14]">
            <div id="zJbT2F" className={imageItemClassName}>
              <h2 className="font-heading text-ploy-text-on-accent-primary font-bold break-words max-[921px]:mb-0 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
                {"Agel Clinic"}
              </h2>
            </div>
          </div>
          <div className="text-left w-full h-full relative z-[6] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-10 max-lg:row-end-11 lg:col-end-5 lg:row-start-[15] lg:row-end-[16]">
            <div id="zMAm8H" className={imageItemClassName}>
              <p className="font-heading text-ploy-text-on-accent-primary text-lg break-words max-[921px]:mb-0">
                <span className="font-body [color:inherit] break-words">
                  {"Adresa: Agel Clinic, Jelačičova 8, Bratislava"}
                </span>
              </p>
            </div>
          </div>
          <div className="text-left w-full h-full relative z-[7] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-11 max-lg:row-end-12 lg:col-end-3 lg:row-start-[17] lg:row-end-[18]">
            <div id="zXnHGZ" className={imageItemClassName}>
              <h6 className="font-heading text-ploy-text-on-accent-primary font-semibold break-words max-[921px]:mb-0 max-lg:leading-6 max-lg:text-xl lg:leading-tight lg:text-base">
                <strong className="[color:inherit] break-words">
                  {"Ordinačné dni:" + " "}
                </strong>
                <span className="[color:inherit] font-normal break-words">
                  {"streda, štvrtok"}
                </span>
              </h6>
            </div>
          </div>
          <div className="text-left w-full h-full relative z-[8] grid grid-cols-[100%] col-start-1 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-2 max-lg:row-start-5 max-lg:row-end-6 lg:col-end-8 lg:row-start-9 lg:row-end-10">
            <div id="zFVkNL" className={imageItemClassName}>
              <h6 className="font-heading text-ploy-text-on-accent-primary font-semibold break-words max-[921px]:mb-0 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                <strong className="[color:inherit] break-words">
                  <u className="break-words">
                    <a
                      href="https://www.navstevalekara.sk/lekari/cievna-ambulancia-angiologia-s11075/bratislavsky-kraj-k300/bratislava-1-o500/stare-mesto-m1000/mudr-andrej-gazi-d28091.html"
                      rel="nofollow"
                      target="_blank"
                      className="[color:inherit] break-words"
                    >
                      {"Objednanie:"}
                    </a>
                  </u>
                </strong>
                {" +421917500155"}
              </h6>
            </div>
          </div>
          {items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
          <div className="text-start w-full h-full relative z-[12] grid grid-cols-[100%] row-end-[20] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] transition--scale max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[19] lg:col-start-[16] lg:col-end-[17] lg:row-start-3">
            <div
              id="zPbmot"
              className="self-start bg-ploy-background-inverse w-full h-full relative col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-map layout-element__component--GridMap text-ploy-text-inverse"
            >
              <iframe
                width="100%"
                height="100%"
                className="w-full h-full inline grid-map__frame overflow-clip"
                src="https://maps.google.com/maps?q=concept%20clinic,%20%C5%BEi%C5%A1kova%2022&t=m&z=13&ie=UTF8&output=embed"
              />
              <div className="!hidden -mt-9 -ml-3 bg-ploy-background-accent-primary w-[1.625rem] h-[1.625rem] absolute z-[2] rounded-full left-2/4 top-2/4 grid-map__pin before:content-[''] before:bg-ploy-accent-primary-700 before:absolute before:w-2.5 before:h-2.5 before:top-2 before:left-2 before:z-[2] after:content-[''] after:absolute before:rounded-full after:w-0 after:h-0 after:top-4 after:left-px after:right-px after:z-[1] after:[border-top:20px_solid_rgb(252,_81,_133)] after:[border-right:12px_solid_rgba(0,_0,_0,_0)] after:[border-left:12px_solid_rgba(0,_0,_0,_0)] hidden" />
            </div>
          </div>
          {images.map((item, index) => (
            <ImageItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
