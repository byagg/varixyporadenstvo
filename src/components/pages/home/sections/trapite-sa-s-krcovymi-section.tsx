const imageItemClassName =
  "w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] rounded-[0.9375rem] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden";
const imageItemClassName2 =
  "w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] rounded-[0.9375rem] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";

/**
 * @ployComponent
 * @ployComponentId trapite-sa-s-krcovymi-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: trápite sa s kŕčovými žilami na nohách?
 */
type ImageItemProps = {
  src: string;
};

function ImageItem({ src }: ImageItemProps) {
  return (
    <div className="relative pt-[100%] grid-gallery-grid__image-wrapper">
      <div
        data-ploy-animation-fx-hint="fade-in"
        style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
        className="w-full h-full absolute cursor-zoom-in transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] left-0 top-0 image image--zoom image--grid grid-gallery-grid__image min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
      >
        <img
          alt=""
          src={src}
          height="191"
          width="191"
          loading="eager"
          className="w-full h-full max-w-none object-cover image__image overflow-clip"
        />
      </div>
    </div>
  );
}

export const images: ImageItemProps[] = [
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/legs-YleyBQ8bRaSyp95Q.webp",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/ret-m5KbanqkEVCw63Z5.webp",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/var-YKbrMlZWOosW7Gbx.webp",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/ede-YNqre21bkJu8MrkP.webp",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/lip-mP4QBMaWBDF6EK1X.webp",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/vrd-YZ9bzjqQyVCJ7lQL.webp",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/ALpBQyXKnqhOakP5/img_20230530_101700-dJo4DbMLo6tMZpZa.webp",
  },
];

export default function TrapiteSaSKrcovymiSection({
  items = images,
}: {
  items?: ImageItemProps[];
}) {
  return (
    <section
      id="zJl-jB"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-75-Aq2eV2gee2tb08Dn.jpeg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.71] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[133.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[8.84146%_82.0122%_9.14634%] max-lg:grid-rows-[minmax(24px,auto)_minmax(316px,auto)_minmax(20px,auto)_minmax(262px,auto)_minmax(16px,auto)_minmax(262px,auto)_minmax(16px,auto)_minmax(262px,auto)_minmax(62px,auto)_minmax(671px,auto)_minmax(93px,auto)_minmax(668px,auto)_1fr] max-lg:px-4 lg:min-h-[82.4375rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_45.098%_3.18627%_1.96078%_0.245098%_15.8497%_5.88235%_0.326797%_0.0816993%_10.5392%] lg:grid-rows-[minmax(26px,auto)_minmax(14px,auto)_minmax(211px,auto)_minmax(15px,auto)_minmax(38px,auto)_minmax(244px,auto)_minmax(31px,auto)_minmax(186px,auto)_minmax(69px,auto)_minmax(18px,auto)_minmax(398px,auto)_1fr] lg:px-0">
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="w-full h-full relative z-[1] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:text-center max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-2 max-lg:row-end-3 lg:text-left lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
        >
          <div
            id="zShPwH"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-2 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl">
              <span className="font-heading [color:inherit] break-words lg:text-3xl">
                <strong className="[color:inherit] break-words">
                  {"trápite sa s kŕčovými žilami na nohách?"}
                </strong>
              </span>
            </h2>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              <span className="font-heading [color:inherit] font-light break-words">
                {"kŕčové žily (varixy dolných končatín) nie sú len estetickým problémom, ale môžu spôsobovať vážne zdravotné komplikácie a výrazne znižovať kvalitu života. vznikajú v dôsledku oslabenia žilových stien a chlopní, čo vedie k spätnému toku krvi (" +
                  " "}
              </span>
              <span className="font-heading [color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  <u className="break-words">
                    <a
                      href="/reflux-pri-ochoreni-krcovych-zil-priciny-priznaky-a-liecba"
                      rel="nofollow"
                      target="_blank"
                      className="[color:inherit] break-words"
                    >
                      {"reflux"}
                    </a>
                  </u>
                </strong>
              </span>
              <span className="font-heading [color:inherit] font-light break-words">
                {" " + ") a jej hromadeniu v žilách."}
              </span>
            </p>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-end-5 max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-4 lg:col-start-5 lg:col-end-9 lg:row-start-2">
          <div
            id="zdkJqZ"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[16.375rem] lg:max-h-60"
          >
            <div
              rel="nofollow"
              title="a man with a very large vein on his leg"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={imageItemClassName}
            >
              <img
                alt="a man with a very large vein on his leg"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=330,fit=crop/ALpBQyXKnqhOakP5/img_0751-fotor-2023093013950-Yle2VkBN8zF4Ra3V.jpg"
                height="240"
                width="273"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a man with a very large vein on his leg"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={imageItemClassName2}
            >
              <img
                alt="a man with a very large vein on his leg"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/img_0751-fotor-2023093013950-Yle2VkBN8zF4Ra3V.jpg"
                height="262"
                width="269"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[3] grid grid-cols-[100%] col-end-4 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:row-start-10 max-lg:row-end-11 lg:col-start-2 lg:row-start-6 lg:row-end-9"
        >
          <div
            id="zoXLgI"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold text-3xl break-words mb-6 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight">
              <span className="font-heading [color:inherit] font-normal break-words">
                <strong className="[color:inherit] break-words">
                  {"typy kŕčových žíl"}
                </strong>
              </span>
            </h3>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="font-heading [color:inherit] break-words">
                    <strong className="[color:inherit] break-words">
                      {"metličky (teleangiektázie)"}
                    </strong>
                    {
                      ": najmenšie, červené alebo modré žilky viditeľné na povrchu kože"
                    }
                  </span>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="font-heading [color:inherit] break-words">
                    <strong className="[color:inherit] break-words">
                      {"retikulárne varixy"}
                    </strong>
                    {": malé, modrasté žily pod povrchom kože"}
                  </span>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="font-heading [color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"nekmeňové varixy:"}
                    </strong>
                  </span>
                  <span className="font-heading [color:inherit] break-words">
                    {" " + "často veľké a viditeľné vinuté vykleňujúce varixy"}
                  </span>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                  <span className="font-heading [color:inherit] break-words">
                    <strong className="[color:inherit] break-words">
                      {"kmeňové varixy"}
                    </strong>
                    {": výrazne rozšírené a vystupujúce hlavné žily"}
                  </span>
                </p>
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
              </li>
            </ul>
            <h3 className="font-heading text-ploy-text-inverse font-bold text-3xl break-words mb-5 max-[921px]:mb-8 max-lg:leading-10 lg:leading-tight">
              {"príznaky kŕčových žíl"}
            </h3>
            <ul className="break-words my-0">
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      <u className="break-words">
                        <a
                          href="/bolesti-dolnych-koncatin-priciny-symptomy-a-moznosti-liecby"
                          className="[color:inherit] break-words"
                        >
                          {"únavové bolesti"}
                        </a>
                      </u>
                    </strong>
                  </span>{" "}
                  {"nôh od kolien dolu po dlhšom státí alebo sedení"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      <u className="break-words">
                        <a
                          href="/opuch-noh-svrbenie-tela-a-syndrom-nepokojnych-noh-boj-s-krcmi-a-zilovymi-problemami"
                          className="[color:inherit] break-words"
                        >
                          {"opuch nôh"}
                        </a>
                      </u>
                    </strong>
                  </span>{" "}
                  {"a" + " "}
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      {"pocit ťažkých nôh"}
                    </strong>
                  </span>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <u className="break-words">
                    <a
                      href="/kedy-uz-radsej-vyhladat-lekara-ak-mate-podozrenie-na-ochorenie-krcovych-zil"
                      className="[color:inherit] break-words"
                    >
                      {"viditeľné kŕčové žily"}
                    </a>
                  </u>{" "}
                  {"rôzneho typu na nohách"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      <u className="break-words">
                        <a
                          href="/krcove-zily-a-svrbenie"
                          className="[color:inherit] break-words"
                        >
                          {"svrbenie nôh"}
                        </a>
                      </u>
                    </strong>
                  </span>
                  {", najmä v noci"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  {"nočné kŕče v lýtkach"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <span className="[color:inherit] font-bold break-words">
                    <strong className="[color:inherit] break-words">
                      <u className="break-words">
                        <a
                          href="/preco-hnednu-nohy-na-predkoleniach-pri-krcovych-zilach"
                          className="[color:inherit] break-words"
                        >
                          {"hyperpigmentácia"}
                        </a>
                      </u>
                    </strong>
                  </span>{" "}
                  {"(škvrny) na nohách"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <u className="break-words">
                    <a
                      href="/syndrom-nepokojnych-noh-priznaky-diagnoza-a-moznosti-liecby"
                      className="[color:inherit] break-words"
                    >
                      {'"syndróm nepokojných nôh"'}
                    </a>
                  </u>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <u className="break-words">
                    <a
                      href="/ako-pristupovat-k-vredu-predkolenia"
                      className="[color:inherit] break-words"
                    >
                      {"vred na predkolení"}
                    </a>
                  </u>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-12 max-lg:row-end-13 lg:col-start-2 lg:col-end-7 lg:row-start-11 lg:row-end-12">
          <div
            id="zcWjAG"
            className="self-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-gallery layout-element__component--GridGallery"
          >
            <div className="grid grid-gallery-grid max-lg:gap-3 max-lg:grid-cols-[repeat(2,1fr)] lg:gap-4 lg:grid-cols-[repeat(4,1fr)]">
              {items.map((item, index) => (
                <ImageItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] row-start-6 row-end-7 max-lg:col-start-2 max-lg:col-end-3 lg:col-start-6 lg:col-end-10">
          <div
            id="zQpGiE"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[16.375rem] lg:max-h-[15.2813rem]"
          >
            <div
              rel="nofollow"
              title="a pie chart of a pie chart of the percentage of the percentage of the percentage"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={imageItemClassName}
            >
              <img
                alt="a pie chart of a pie chart of the percentage of the percentage of the percentage"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=338,fit=crop/ALpBQyXKnqhOakP5/output-6-mp8vVJX0RltZe894.png"
                height="244"
                width="271"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a pie chart of a pie chart of the percentage of the percentage of the percentage"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={imageItemClassName2}
            >
              <img
                alt="a pie chart of a pie chart of the percentage of the percentage of the percentage"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/output-6-mp8vVJX0RltZe894.png"
                height="262"
                width="269"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[6] grid grid-cols-[100%] row-start-8 max-lg:col-start-2 max-lg:col-end-3 max-lg:row-end-9 lg:col-start-6 lg:col-end-8 lg:row-end-10">
          <div
            id="zfKyJI"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[16.375rem] lg:max-h-64"
          >
            <div
              rel="nofollow"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={imageItemClassName}
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=360,fit=crop/ALpBQyXKnqhOakP5/output-7-AGB6KbrJ63UJzD2b.png"
                height="255"
                width="266"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={imageItemClassName2}
            >
              <img
                alt=""
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/output-7-AGB6KbrJ63UJzD2b.png"
                height="262"
                width="269"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
