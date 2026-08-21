const linkItemClassName =
  "w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden";
const linkItemClassName2 =
  "w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";
const linkItemClassName3 =
  "self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox";

/**
 * @ployComponent
 * @ployComponentId komplikacie-neliecenych-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: komplikácie neliečených kŕčových žíl
 */
type LinkItemProps = {
  href: string;
  title: string;
  linkHref: string;
  description: string;
  separator?: string;
};

function LinkItem({
  href,
  title,
  linkHref,
  description,
  separator,
}: LinkItemProps) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
          <strong className="[color:inherit] break-words">
            <u className="break-words">
              <a
                href={href}
                target="_self"
                className="[color:inherit] break-words"
              >
                {title}
              </a>
            </u>
          </strong>
          <u className="break-words">
            <a
              href={linkHref}
              target="_self"
              className="[color:inherit] break-words"
            >
              {":"}
            </a>
          </u>
          {description}
        </p>
      </li>
      {separator}
    </>
  );
}

export const links: LinkItemProps[] = [
  {
    href: "https://varixyporadenstvo.com/#tromboza",
    title: "hlboká žilová trombóza",
    linkHref: "https://varixyporadenstvo.com/#tromboza",
    description: " tvorba krvných zrazenín v hlbokých žilách",
  },
  {
    href: "https://varixyporadenstvo.com/#flebitida",
    title: "flebitída",
    linkHref: "https://varixyporadenstvo.com/#flebitida",
    description:
      " zápal povrchových žíl, ktorý môže byť bolestivý a nebezpečný",
  },
  {
    href: "https://varixyporadenstvo.com/#vred",
    title: "vred predkolenia",
    linkHref: "https://varixyporadenstvo.com/#vred",
    description: " chronické rany na nohách, ktoré sa ťažko hoja",
  },
];

export default function KomplikacieNeliecenychSection({
  items = links,
}: {
  items?: LinkItemProps[];
}) {
  return (
    <section
      id="z320cM"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-63-Yle2Ve96wrsbLX1a.jpeg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.77] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[145.8125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[13.4146%_2.7439%_11.2805%_42.378%_13.7195%_3.35366%_8.53659%_4.57317%] max-lg:grid-rows-[minmax(24px,auto)_minmax(324px,auto)_minmax(12px,auto)_minmax(158px,auto)_minmax(65px,auto)_minmax(97px,auto)_minmax(61px,auto)_minmax(459px,auto)_minmax(24px,auto)_minmax(243px,auto)_minmax(37px,auto)_minmax(484px,auto)_minmax(41px,auto)_minmax(235px,auto)_1fr] max-lg:px-4 lg:min-h-[85.5rem] lg:max-w-[76.5rem] lg:grid-cols-[11.5196%_3.43137%_0.163399%_11.1111%_6.45425%_15.1144%_4.57516%_0.408497%_2.53268%_1.30719%_25.817%_0.735294%_16.8301%] lg:grid-rows-[minmax(38px,auto)_minmax(2px,auto)_minmax(117px,auto)_minmax(67px,auto)_minmax(86px,auto)_minmax(45px,auto)_minmax(45px,auto)_minmax(270px,auto)_minmax(45px,auto)_minmax(97px,auto)_minmax(11px,auto)_minmax(496px,auto)_minmax(11px,auto)_1fr] lg:px-0">
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-4 max-lg:col-end-8 max-lg:row-start-5 max-lg:row-end-7 lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-5">
          <div
            id="z03bGn"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[10.125rem] lg:max-h-[11.6563rem]"
          >
            <div
              rel="nofollow"
              title="a person with a very long legs and a very long leg"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={linkItemClassName}
            >
              <img
                alt="a person with a very long legs and a very long leg"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=265,fit=crop/ALpBQyXKnqhOakP5/vsm1-YX4b7JBrP6HGGLNX.webp"
                height="186"
                width="264"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a person with a very long legs and a very long leg"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={linkItemClassName2}
            >
              <img
                alt="a person with a very long legs and a very long leg"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=273,fit=crop/ALpBQyXKnqhOakP5/vsm1-YX4b7JBrP6HGGLNX.webp"
                height="162"
                width="223"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-4 max-lg:col-start-1 max-lg:col-end-5 max-lg:row-end-6 lg:col-start-3 lg:col-end-6 lg:row-end-7">
          <div
            id="zuIOMC"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-56 lg:max-h-[12.4063rem]"
          >
            <div
              rel="nofollow"
              title="a person with a blue arrow pointing to the left side of the arm"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={linkItemClassName}
            >
              <img
                alt="a person with a blue arrow pointing to the left side of the arm"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=343,fit=crop/ALpBQyXKnqhOakP5/vsp-mv07zpVJz9CDrMyB.webp"
                height="198"
                width="217"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a person with a blue arrow pointing to the left side of the arm"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={linkItemClassName2}
            >
              <img
                alt="a person with a blue arrow pointing to the left side of the arm"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/vsp-mv07zpVJz9CDrMyB.webp"
                height="223"
                width="229"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[3] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-9 max-lg:row-start-2 max-lg:row-end-3 lg:col-start-9 lg:col-end-13 lg:row-start-3 lg:row-end-6"
        >
          <div id="zoifen" className={linkItemClassName3}>
            <p className="font-heading text-ploy-text-inverse text-lg break-words max-[921px]:mb-0">
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  <u className="break-words">
                    <a
                      href="/reflux-pri-ochoreni-krcovych-zil-priciny-priznaky-a-liecba"
                      className="[color:inherit] break-words"
                    >
                      {"reflux"}
                    </a>
                  </u>
                </strong>
              </span>{" "}
              {
                "- znamená spätný tok krvi v žilách, najčastejšie postihuje veľkú skrytú žilu ( "
              }
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"vena saphena magna - VSM"}
                </strong>
              </span>
              {") alebo malú skrytú žilu ( "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"vena saphena parva - VSP"}
                </strong>
              </span>
              {
                "). tieto žily vedú krv z dolných končatín späť do srdca, a keď chlopne vo vnútri týchto žíl nefungujú správne, dochádza k jej hromadeniu, čo spôsobuje vznik kŕčových žíl a ďalšie komplikácie na dolnej končatine."
              }
            </p>
          </div>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[4] grid grid-cols-[100%] row-start-8 row-end-9 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-9 lg:col-start-2 lg:col-end-8"
        >
          <div id="zuaw9g" className={linkItemClassName3}>
            <p className="font-heading text-ploy-text-inverse text-lg break-words max-[921px]:mb-0">
              {"ohľadne zaradenia v rámci MKCH klasifikácie chorôb sú bežné varixy dolných končatín pod kódom" +
                " "}
              <u className="break-words">
                <a
                  href="https://mediately.co/sk/icd?q=I839"
                  rel="nofollow"
                  target="_blank"
                  className="[color:inherit] break-words"
                >
                  {"I.839"}
                </a>
              </u>
              {", toto ochorenie má viacero názvov:" + " "}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"chronická venózna insuficiencia dolných končatín"}
                </strong>
              </span>
              {
                ', kŕčové žily na nohách, varixy dolných končatín, varikózne ochorenie; u lekára sa môžete stretnúť so skratkou " '
              }
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"CHVI DKK"}
                </strong>
              </span>
              {' " alebo " '}
              <span className="[color:inherit] font-bold break-words">
                <strong className="[color:inherit] break-words">
                  {"CHVO DKK"}
                </strong>
              </span>
              {' ", anglický ekvivalent je "CVD" alebo "CVI", každopádne treba rozlíšiť komplikácie tohto ochorenia ako je' +
                " "}
              <strong className="[color:inherit] break-words">
                <u className="break-words">
                  <a
                    href="/tromboza-dolnych-koncatin-co-by-ste-mali-vediet"
                    rel="nofollow"
                    target="_blank"
                    className="[color:inherit] break-words"
                  >
                    {"žilová (venózna) trombóza/flebotrombóza"}
                  </a>
                </u>
              </strong>
              {" a "}
              <strong className="[color:inherit] break-words">
                <u className="break-words">
                  <a
                    href="/prevencia-a-liecba-trombozy-povrchovych-zil-dolnych-koncatin-vsetko-co-potrebujete-vediet"
                    target="_self"
                    className="[color:inherit] break-words"
                  >
                    {"zápal žily (flebitída alebo varikoflebitída)"}
                  </a>
                </u>
                {"."}
              </strong>
            </p>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] max-lg:col-start-3 max-lg:col-end-6 max-lg:row-start-10 max-lg:row-end-11 lg:col-start-11 lg:col-end-13 lg:row-start-7 lg:row-end-10">
          <div
            id="zgwsv_"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[15.1875rem] lg:max-h-[22.5313rem]"
          >
            <div
              rel="nofollow"
              title="a pie chart of a pie chart of the percentage of the percentage of the percentage"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] rounded-[0.9375rem] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
            >
              <img
                alt="a pie chart of a pie chart of the percentage of the percentage of the percentage"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=416,fit=crop/ALpBQyXKnqhOakP5/output-8-m2Wp0Er61yFWea66.png"
                height="360"
                width="325"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a pie chart of a pie chart of the percentage of the percentage of the percentage"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] rounded-[0.9375rem] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
            >
              <img
                alt="a pie chart of a pie chart of the percentage of the percentage of the percentage"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=413,fit=crop/ALpBQyXKnqhOakP5/output-8-m2Wp0Er61yFWea66.png"
                height="243"
                width="221"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[6] grid grid-cols-[100%] row-end-13 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-9 max-lg:row-start-12 lg:col-start-4 lg:col-end-7 lg:row-start-11"
        >
          <div id="zy-s92" className={linkItemClassName3}>
            <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
              {"komplikácie neliečených kŕčových žíl"}
            </h2>
            <ul className="break-words my-0">
              {items.map((item, index) => (
                <LinkItem
                  key={index}
                  {...item}
                  separator={index < links.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    <u className="break-words">
                      <a
                        href="/co-je-lymfedem"
                        target="_blank"
                        className="[color:inherit] break-words"
                      >
                        {"lymfedém"}
                      </a>
                    </u>
                  </strong>
                  {": opuch spôsobený hromadením lymfatickej tekutiny"}
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    <u className="break-words">
                      <a
                        href="/#krvacanie"
                        target="_self"
                        className="[color:inherit] break-words"
                      >
                        {"krvácanie"}
                      </a>
                    </u>
                  </strong>
                  <u className="break-words">
                    <a
                      href="/#krvacanie"
                      target="_self"
                      className="[color:inherit] break-words"
                    >
                      {":"}
                    </a>
                  </u>
                  <a
                    href="/#krvacanie"
                    target="_self"
                    className="[color:inherit] break-words"
                  >
                    {"riziko prasknutia výrazne rozšírených kŕčových žíl"}
                  </a>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                  <strong className="[color:inherit] break-words">
                    <u className="break-words">
                      <a
                        href="/celulitida-pri-ochoreni-varixov-priciny-prevencia-a-liecba"
                        target="_blank"
                        className="[color:inherit] break-words"
                      >
                        {"celulitída"}
                      </a>
                    </u>
                  </strong>
                  {": bakteriálna infekcia kože a podkožného tkaniva"}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[7] grid grid-cols-[100%] max-lg:col-start-2 max-lg:col-end-7 max-lg:row-start-[14] max-lg:row-end-[15] lg:col-start-10 lg:col-end-12 lg:row-start-12 lg:row-end-[14]">
          <div
            id="zPnLPF"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[14.6875rem] lg:max-h-[31.7188rem]"
          >
            <div
              rel="nofollow"
              title="a woman with a vein on her leg"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={linkItemClassName}
            >
              <img
                alt="a woman with a vein on her leg"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=573,fit=crop/ALpBQyXKnqhOakP5/img_0957-dJoBoEZ9e5IpwkKW.jpg"
                height="507"
                width="332"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a woman with a vein on her leg"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={linkItemClassName2}
            >
              <img
                alt="a woman with a vein on her leg"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/ALpBQyXKnqhOakP5/img_0957-dJoBoEZ9e5IpwkKW.jpg"
                height="235"
                width="241"
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
