import HeroSection from "./sections/hero-section";
import Section2 from "./sections/section-2";
import PoradimeNajlepsieRiesenieSection from "./sections/poradime-najlepsie-riesenie-section";
import Section4 from "./sections/section-4";
import TrapiteSaSKrcovymiSection from "./sections/trapite-sa-s-krcovymi-section";
import Section6 from "./sections/section-6";
import KomplikacieNeliecenychSection from "./sections/komplikacie-neliecenych-section";
import ZxRxNKSection from "./sections/zx-rx-nk-section";
import KalkulackySection from "./sections/kalkulacky-section/kalkulacky-section";
import ZrUpSection from "./sections/zr-up-section";
import DesatoroOtazokKVarixomSection from "./sections/desatoro-otazok-k-varixom-section";
import Section12 from "./sections/section-12";
import PrevenciaVarixovSection from "./sections/prevencia-varixov-section";
import Section14 from "./sections/section-14";
import HlbokaZilovaTrombozaSection from "./sections/hlboka-zilova-tromboza-section";
import ZeulPFSection from "./sections/zeul-pf-section";
import ZapalZilyFlebitidaSection from "./sections/zapal-zily-flebitida-section";
import KrvacanieSection from "./sections/krvacanie-section";
import PageIcon1 from "./svgs/page-icon-1";
import PageIcon2 from "./svgs/page-icon-2";

/**
 * @ployComponent
 * @ployComponentId home-page
 * @ployComponentType page
 * @ployComponentPattern homepage
 * @ployComponentDescription Composes the migrated Varixy Poradenstvo homepage and its medical-information sections.
 * @ployComponentStatus stable
 */
export default function Page() {
  return (
    <div>
      <div className="contents">
        <div />
      </div>
      <div className="contents">
        <main className="min-h-screen flex flex-col">
          <div
            className="pointer-events-none h-px relative z-[-1] -mb-px top-0"
            data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
          />
          <div className="sticky z-[18] top-0">
            <header
              height="78"
              className="relative z-[18] grid shadow-[0px_6px_14px_0px_color-mix(in_srgb,var(--ploy-border-primary)_10%,transparent)] transition-shadow ease-linear block-header block-header--with-shadow max-lg:px-4 lg:px-0"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color] duration-300 ease-[ease-in-out] inset-0 text-ploy-text-primary" />
              <div className="justify-self-center w-full max-w-[76.5rem] z-[18] items-center grid-cols-[min-content_auto] grid-flow-col px-4 py-6 block-header-layout-desktop block-header-layout-desktop--desktop-1 max-[921px]:hidden min-[921px]:grid">
                <a
                  href="/"
                  className="[color:inherit] flex mr-4 block-header-logo block-header__logo max-lg:w-[10.5369rem] max-lg:h-6 lg:w-[13.5rem] lg:h-[1.875rem]"
                >
                  <img
                    src="https://assets.zyrosite.com/ALpBQyXKnqhOakP5/ai-logo-AoPZ8gWKwpCDL9M0.svg"
                    alt="varixyporadenstvo logo"
                    className="w-full h-full max-w-none object-contain block-header-logo__image overflow-clip"
                  />
                </a>
                <nav className="block-header__nav">
                  <ul className="flex flex-wrap justify-end gap-[1rem_40px] my-0 pl-0 block-header__nav-links">
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div className="text-left flex items-center item-content-wrapper item-content-wrapper--active block-header-item__item">
                          <a
                            href="/"
                            className="self-center font-heading text-black leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                          >
                            {"úvod"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                          data-ploy-hover-anchor="h1"
                        >
                          <a
                            href="https://varixyporadenstvo.com/liecba"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                            data-ploy-hover="h1"
                          >
                            {"liečba"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                          data-ploy-hover-anchor="h1"
                        >
                          <a
                            href="https://varixyporadenstvo.com/operacia"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                            data-ploy-hover="h1"
                          >
                            {"operácia"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                          data-ploy-hover-anchor="h1"
                        >
                          <a
                            href="https://varixyporadenstvo.com/nakup"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                            data-ploy-hover="h1"
                          >
                            {"nákup"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                          data-ploy-hover-anchor="h1"
                        >
                          <a
                            href="https://varixyporadenstvo.com/kliniky"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                            data-ploy-hover="h1"
                          >
                            {"kliniky"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                          data-ploy-hover-anchor="h1"
                        >
                          <a
                            href="https://varixyporadenstvo.com/clanky"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                            data-ploy-hover="h1"
                          >
                            {"články"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                          data-ploy-hover-anchor="h1"
                        >
                          <a
                            href="https://varixyporadenstvo.com/kontakt"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                            data-ploy-hover="h1"
                          >
                            {"kontakt"}
                          </a>
                        </div>
                      </label>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="block-header-layout-mobile block-header-layout-mobile--mobile-1 max-[921px]:grid min-[921px]:hidden max-[921px]:z-[18] max-[921px]:grid-cols-[auto_minmax(0px,_max-content)_max-content] max-lg:[grid-template-areas:'logo_cart_hamburger-menu'] max-lg:grid max-lg:items-center max-lg:px-4 max-lg:py-6 lg:hidden lg:grid-cols-none lg:p-0">
                <a
                  href="/"
                  className="[color:inherit] flex block-header-logo block-header__logo max-lg:w-[10.5369rem] max-lg:h-6 max-lg:col-start-[logo] max-lg:col-end-[logo] max-lg:row-start-[logo] max-lg:row-end-[logo] lg:w-[13.5rem] lg:h-[1.875rem] lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
                >
                  <img
                    src="https://assets.zyrosite.com/ALpBQyXKnqhOakP5/ai-logo-AoPZ8gWKwpCDL9M0.svg"
                    alt="varixyporadenstvo logo"
                    className="w-full h-full max-w-none object-contain block-header-logo__image overflow-clip"
                  />
                </a>
                <button
                  type="button"
                  title="Menu"
                  className="[color:inherit] text-sm w-6 h-[1.125rem] cursor-pointer transition-[transform,translate,scale,rotate,opacity,width] duration-[0.4s] ease-[ease-in-out] delay-[0.1s] p-0 block-header__hamburger-menu max-lg:block max-lg:col-start-[hamburger-menu] max-lg:col-end-[hamburger-menu] max-lg:row-start-[hamburger-menu] max-lg:row-end-[hamburger-menu] max-lg:ml-16 lg:inline-block lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto lg:ml-0"
                >
                  <span className="[color:inherit] bg-ploy-background-inverse w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-0" />
                  <span className="[color:inherit] bg-ploy-background-inverse w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-2" />
                  <span className="[color:inherit] bg-ploy-background-inverse w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-4" />
                </button>
                <div className="block-header-layout-mobile__dropdown--link-align-right block-header-layout-mobile__dropdown max-[921px]:w-full max-[921px]:max-h-0 max-[921px]:top-[100%] max-[921px]:left-0 max-[921px]:absolute ploy-styles-rule-0 max-lg:bg-ploy-background-primary max-lg:absolute max-lg:flex max-lg:overflow-y-hidden max-lg:invisible max-lg:flex-col max-lg:items-end max-lg:gap-16 max-lg:px-4 lg:bg-transparent lg:max-h-none lg:block lg:visible lg:flex-row lg:gap-[normal] lg:px-0 lg:left-auto lg:top-auto max-[921px]:overflow-hidden">
                  <nav className="block-header__nav max-lg:invisible lg:visible">
                    <ul className="flex flex-wrap justify-start my-0 pl-0 block-header__nav-links max-lg:text-end max-lg:gap-5 max-lg:invisible max-lg:flex-col lg:text-start lg:gap-[1rem_40px] lg:visible lg:flex-row">
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div className="text-left flex items-center item-content-wrapper item-content-wrapper--active block-header-item__item max-lg:invisible max-lg:justify-end lg:visible">
                            <a
                              href="/"
                              className="self-center font-heading text-black leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                            >
                              {"úvod"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                            data-ploy-hover-anchor="h1"
                          >
                            <a
                              href="https://varixyporadenstvo.com/liecba"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                              data-ploy-hover="h1"
                            >
                              {"liečba"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                            data-ploy-hover-anchor="h1"
                          >
                            <a
                              href="https://varixyporadenstvo.com/operacia"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                              data-ploy-hover="h1"
                            >
                              {"operácia"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                            data-ploy-hover-anchor="h1"
                          >
                            <a
                              href="https://varixyporadenstvo.com/nakup"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                              data-ploy-hover="h1"
                            >
                              {"nákup"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                            data-ploy-hover-anchor="h1"
                          >
                            <a
                              href="https://varixyporadenstvo.com/kliniky"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                              data-ploy-hover="h1"
                            >
                              {"kliniky"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                            data-ploy-hover-anchor="h1"
                          >
                            <a
                              href="https://varixyporadenstvo.com/clanky"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                              data-ploy-hover="h1"
                            >
                              {"články"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                            data-ploy-hover-anchor="h1"
                          >
                            <a
                              href="https://varixyporadenstvo.com/kontakt"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                              data-ploy-hover="h1"
                            >
                              {"kontakt"}
                            </a>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          </div>
          <div className="flex flex-col grow">
            <HeroSection />
            <Section2 />
            <PoradimeNajlepsieRiesenieSection />
            <Section4 />
            <TrapiteSaSKrcovymiSection />
            <Section6 />
            <KomplikacieNeliecenychSection />
            <ZxRxNKSection />
            <KalkulackySection />
            <ZrUpSection />
            <DesatoroOtazokKVarixomSection />
            <Section12 />
            <PrevenciaVarixovSection />
            <Section14 />
            <HlbokaZilovaTrombozaSection />
            <ZeulPFSection />
            <ZapalZilyFlebitidaSection />
            <KrvacanieSection />
            <section
              id="krvacanie"
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
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[67.1875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(1014px,auto)_1fr] max-lg:px-4 lg:min-h-[51.5625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_42.2386%_40.9314%] lg:grid-rows-[minmax(64px,auto)_minmax(718px,auto)_1fr] lg:px-0">
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
                >
                  <div
                    id="zuI82V"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h2 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
                      <strong className="[color:inherit] break-words">
                        {"krvácanie z varixu"}
                      </strong>
                    </h2>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {
                        "krvácanie z varixu môže byť veľmi nebezpečné a preto je dôležité vedieť ako sa v takýchto situáciách správať a predvídať túto komplikáciu u pacientov s vysokým rizikom."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8" />
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"vo všeobecnosti by sa pri zastavení krvácania mali dodržiavať obvyklé postupy, ako napríklad" +
                        " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"vysoká poloha končatiny"}
                        </strong>
                      </span>
                      {"," + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"kompresia"}
                        </strong>
                      </span>{" "}
                      {"na mieste krvácania," + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"bandážovanie"}
                        </strong>
                      </span>{" "}
                      {"a" + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"pozorovanie"}
                        </strong>
                      </span>
                      {"."}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8" />
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {"definitívne ošetrenie varixu môže poskytnúť až" + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"chirurgický"}
                        </strong>
                      </span>{" "}
                      {"zákrok, ako napríklad" + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"podviazanie"}
                        </strong>
                      </span>{" "}
                      {"(ligatúra) alebo" + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"sklerotizácia"}
                        </strong>
                      </span>
                      {
                        ". v prípade, že krvácanie pretrváva napriek opakovaným preväzom a správnemu polohovaniu končatiny, je potrebné vyhľadať odbornú pomoc."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8" />
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {
                        "existujú pacienti s žilovým ochorením, ktorí sú náchylní na vznik krvácania:"
                      }
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"s veľmi" + " "}
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"vypuklými varixami"}
                            </strong>
                          </span>
                          {" s tenkou žilovou stenou na exponovaných miestach,"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"s" + " "}
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"opakujúcim"}
                            </strong>
                          </span>{" "}
                          {"sa krvácaním z rovnakých bodov alebo"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"s obmedzenou hybnosťou a" + " "}
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"zníženou schopnosťou spolupracovať"}
                            </strong>
                          </span>{" "}
                          {"s okolím."}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                      {
                        "U týchto pacientov môže byť riziko vykrvácania zvýšené, najmä v noci, keď je znížený dohľad."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8" />
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="zC81M0"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full min-h-5 z-[14] grid grid-cols-[100%] grid-rows-[1fr] mx-auto max-lg:max-w-[22.5rem] max-lg:px-4 lg:max-w-[76.5rem] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              />
            </section>
            <section
              id="vred"
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
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[88.5rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(1319px,auto)_1fr] max-lg:px-4 lg:min-h-[69.1875rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_42.2386%_40.9314%] lg:grid-rows-[minmax(64px,auto)_minmax(917px,auto)_1fr] lg:px-0">
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
                >
                  <div
                    id="zMvzyn"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h2 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
                      <strong className="[color:inherit] break-words">
                        {"vred predkolenia"}
                      </strong>
                    </h2>
                    <p className="font-heading text-ploy-text-inverse text-5xl break-words max-[921px]:mb-8 max-lg:leading-6 lg:leading-tight" />
                    <p className="font-heading text-ploy-text-inverse leading-6 tracking-tight break-words max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"vred predkolenia" + " "}
                      </strong>
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"/bércov vred"}
                        </strong>
                      </span>{" "}
                      {
                        "(lat. ulcus cruris) je chronická rana s dobou hojenia dlhšou než 6 týždňov, ktorá sa vyskytuje najčastejšie u starších ľudí a vzniká ako dôsledok závažných trofických zmien v tkanivách poškodených predchádzajúcim ochorením, najčastejšie vaskulárnym."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 tracking-tight break-words max-[921px]:mb-8" />
                    <p className="font-heading text-ploy-text-inverse leading-6 tracking-tight break-words max-[921px]:mb-8">
                      {
                        "vo väčšine prípadov (až v 85%) má vred predkolenia žilový pôvod (tzv. venózna ulcerácia) a vzniká na základe vonkajších príčin, ako sú fyzikálne, chemické, infekčné alebo vnútorných príčin, ako sú poruchy venózneho, arteriálneho, lymfatického, hematogeného, koagulačného alebo metabolickeho ochorenia, vaskulitídy alebo nádorov."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 tracking-tight break-words max-[921px]:mb-8">
                      {
                        "venózna ulcerácia je vred na predkolení, ktorý vzniká zo žilového pôvodu. môže mať dve hlavné príčiny: flebotrombózu a primárne varixy."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 tracking-tight break-words max-[921px]:mb-8" />
                    <ol className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <strong className="[color:inherit] break-words">
                            {"flebotrombóza" + " "}
                          </strong>
                          {
                            "je spôsobená tvorbou krvnej zrazeniny v žilovom riečisku, po ktorej môže dôjsť k čiastočnej alebo úplnej rekanalizácii hlbokých žíl, ale často s deštrukciou a následnou nefunkčnosťou chlopní. to spôsobuje krvnú stázu a žilovú hypertenziu, ktorá vedie k poruche priepustnosti kapilár, strate plazmatických bielkovín a tvorbe prekapilárnej fibrínovej manžety. všetky tieto zmeny spolu vedú k vzniku vredu predkolenia, ktorý je hlboký, rozsiahly, s výrazným exsudatívnym charakterom, povlečenou spodinou a rozsiahlym edémom."
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <strong className="[color:inherit] break-words">
                            {"primárne varixy" + " "}
                          </strong>
                          {
                            "sú terminálnym prejavom chronickej venóznej insuficiencie dolných končatín spôsobenej insuficienciou žilových chlopní v hlbokom venóznom systéme, v spojovacích žilách alebo v povrchovom žilovom systéme, alebo ich kombináciou. sú menšie, s plytkou spodinou a hladkými okrajmi a lokalizované na vnútornej strane vzdialenejšej tretiny predkolenia."
                          }
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="prelekarov"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full min-h-5 z-[14] grid grid-cols-[100%] grid-rows-[1fr] mx-auto max-lg:max-w-[22.5rem] max-lg:px-4 lg:max-w-[76.5rem] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              />
            </section>
            <section
              id="ztV5UI"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-74-AGBMKBEPKZI3x237.jpeg"
                  width="100vw"
                  loading="eager"
                  className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
                />
                <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.84] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
              </div>
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[80.5rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[14.3293%_0.304878%_70.7317%_0.304878%_14.3293%] max-lg:grid-rows-[minmax(16px,auto)_minmax(47px,auto)_minmax(56px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(17px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_minmax(16px,auto)_minmax(64px,auto)_1fr] max-lg:px-4 lg:min-h-[48.3125rem] lg:max-w-[76.5rem] lg:grid-cols-[19.0359%_5.63725%_1.63399%_1.22549%_9.23203%_3.67647%_6.12745%_1.38889%_2.04248%_3.10458%_0.408497%_1.22549%_0.0816993%_4.65686%_3.67647%_10.6209%_0.0816993%_1.30719%_3.18627%_0.0816993%_2.53268%_0.408497%_18.6275%] lg:grid-rows-[minmax(80px,auto)_minmax(62px,auto)_minmax(82px,auto)_minmax(64px,auto)_minmax(48px,auto)_minmax(64px,auto)_minmax(40px,auto)_minmax(64px,auto)_minmax(56px,auto)_minmax(64px,auto)_minmax(40px,auto)_minmax(64px,auto)_1fr] lg:px-0">
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:text-center max-lg:col-start-1 max-lg:col-end-6 lg:text-left lg:col-start-6 lg:col-end-[16]"
                >
                  <div
                    id="zOJlc1"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h2 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
                      <strong className="[color:inherit] break-words">
                        {"pre lekárov"}
                      </strong>
                    </h2>
                  </div>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-2 max-lg:col-end-4 lg:col-start-1 lg:col-end-2"
                >
                  <a
                    href="https://mediately.co/sk/icd"
                    target="_blank"
                    rel="nofollow"
                    aria-hidden="false"
                    id="zb1w_T"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"MKCH - 10"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] row-start-6 row-end-7 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 lg:col-start-1 lg:col-end-2"
                >
                  <a
                    href="https://www.cksdrg.sk/sk/drgsearchers/vykony"
                    target="_blank"
                    rel="nofollow"
                    aria-hidden="false"
                    id="zgr7tK"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"DRG výkony"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[26] max-lg:row-end-[27] lg:col-start-1 lg:col-end-2 lg:row-start-8 lg:row-end-9"
                >
                  <a
                    href="https://www.adc.sk/"
                    target="_blank"
                    rel="nofollow"
                    aria-hidden="false"
                    id="zGuieE"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"ADC číselník"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] col-start-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-5 max-lg:row-start-[30] max-lg:row-end-[31] lg:col-end-10 lg:row-start-6 lg:row-end-7"
                >
                  <a
                    href="https://yxuemnnzg0c.typeform.com/to/fN9LMkNN"
                    target="_blank"
                    rel="nofollow"
                    aria-hidden="false"
                    id="z82O6v"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"dotazník pančuchy"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[6] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-8 max-lg:row-end-9 lg:col-start-5 lg:col-end-8 lg:row-start-4 lg:row-end-5"
                >
                  <a
                    href="/#listpancuchy"
                    target="_self"
                    aria-hidden="false"
                    id="zGaFH1"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"kódy pančúch"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[7] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-2 max-lg:col-end-4 max-lg:row-start-[28] max-lg:row-end-[29] lg:col-start-[22] lg:col-end-[24] lg:row-start-6 lg:row-end-7"
                >
                  <a
                    href="/#tos"
                    target="_self"
                    aria-hidden="false"
                    id="zjTpg3"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"testy na TOS"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[8] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[16] max-lg:row-end-[17] lg:col-start-[14] lg:col-end-[18] lg:row-start-6 lg:row-end-7"
                >
                  <a
                    href="/#vaskulitidy"
                    target="_self"
                    aria-hidden="false"
                    id="zJTVYa"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"vaskulitídy"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[9] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[22] max-lg:row-end-[23] lg:col-start-13 lg:col-end-[17] lg:row-start-8 lg:row-end-9"
                >
                  <a
                    href="/#vazoneurozy"
                    target="_self"
                    aria-hidden="false"
                    id="zsRri4"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"vazoneurózy"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-10 grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[18] max-lg:row-end-[19] lg:col-start-1 lg:col-end-2 lg:row-start-10 lg:row-end-11"
                >
                  <a
                    href="/#kalkulacka"
                    target="_self"
                    aria-hidden="false"
                    id="zhIx3r"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"BMI kalkulačka"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[11] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[24] max-lg:row-end-[25] lg:col-start-[22] lg:col-end-[24] lg:row-start-4 lg:row-end-5"
                >
                  <a
                    href="/#klasifikacie"
                    target="_self"
                    aria-hidden="false"
                    id="zKBgny"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"klasifikácie"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[12] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-10 max-lg:row-end-11 lg:col-start-4 lg:col-end-9 lg:row-start-8 lg:row-end-9"
                >
                  <a
                    href="/#opuchykoncatin"
                    target="_self"
                    rel="nofollow"
                    aria-hidden="false"
                    id="zMQTXx"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"opuchy končatín"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[13] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[14] max-lg:row-end-[15] lg:col-start-[20] lg:col-end-[24] lg:row-start-8 lg:row-end-9"
                >
                  <a
                    href="/#hzt"
                    target="_self"
                    rel="nofollow"
                    aria-hidden="false"
                    id="z5tDTg"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"liečba HŽT"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[14] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-12 max-lg:row-end-13 lg:col-start-12 lg:col-end-[19] lg:row-start-4 lg:row-end-5"
                >
                  <a
                    href="/#trombofilnestavy"
                    target="_self"
                    aria-hidden="false"
                    id="zDdhRe"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"trombofil. stavy"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[15] grid grid-cols-[100%] col-start-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-end-5 max-lg:row-start-[32] max-lg:row-end-[33] lg:col-end-10 lg:row-start-10 lg:row-end-11"
                >
                  <a
                    href="/#komplikaciesklerotizacie"
                    target="_self"
                    aria-hidden="false"
                    id="zmQUFq"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"komplikácie"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[16] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[34] max-lg:row-end-[35] lg:col-start-11 lg:col-end-[21] lg:row-start-10 lg:row-end-11"
                >
                  <a
                    href="/#prekladac"
                    target="_self"
                    aria-hidden="false"
                    id="zEIeC9"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"prekladač diagnóz"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[17] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[36] max-lg:row-end-[37] lg:col-start-[23] lg:col-end-[24] lg:row-start-10 lg:row-end-11"
                >
                  <a
                    href="https://www.vszp.sk/files/poskytovatelia/zdravotna-starostlivost/revizne-pravidla/068-reviznepravidla-cievnachirurgia.pdf"
                    target="_blank"
                    rel="nofollow"
                    aria-hidden="false"
                    id="zE9xWP"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"CCH kódy VšZP"}
                  </a>
                </div>
                <div
                  data-ploy-animation-fx-hint="fade-in"
                  className="text-start w-full h-full relative z-[18] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-[20] max-lg:row-end-[21] lg:col-start-7 lg:col-end-[15] lg:row-start-12 lg:row-end-13"
                >
                  <a
                    href="https://www.health.gov.sk/Clanok?zkzp-202504"
                    target="_blank"
                    rel="nofollow"
                    aria-hidden="false"
                    id="z3i8ue"
                    className="self-start justify-self-start text-nowrap font-heading bg-ploy-background-accent-primary text-black font-bold text-2xl text-center whitespace-nowrap h-min min-w-full min-h-16 max-w-full z-[1] flex justify-center items-center col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[color,border-color,background-color] duration-200 rounded-[1.1875rem] grid-button grid-button--primary layout-element__component--GridButton max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-ploy-background-inverse hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] overflow-hidden"
                  >
                    {"Zoznam KZT"}
                  </a>
                </div>
              </div>
            </section>
            <section
              id="listpancuchy"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-secondary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[1357.3125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(21163px,auto)_1fr] max-lg:px-4 lg:min-h-[259.375rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_83.1699%_8.41503%] lg:grid-rows-[minmax(64px,auto)_minmax(4025px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zymsA4"
                    height="3453"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Kompresné Pančuchy - Kompletný aktualizovaný zoznam</title>\n <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\n \n\n\n <div class="table-container">\n <table>\n <caption>Kompresné Pančuchy - Kompletný aktualizovaný zoznam</caption>\n <thead>\n <tr>\n <th>G kód</th>\n <th>Typ</th>\n <th>Trieda</th>\n <th>Výrobca</th>\n <th>Cena (€)</th>\n <th>Odbornosti</th>\n <th>Vlastnosti</th>\n </tr>\n </thead>\n <tbody>\n <tr>\n <td data-label="G kód">G77661</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">10,78</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Mikrovlákno, 70% polyamid, 30% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G2143A</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">11,75</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Uzavretá špička, S-XXL, 75% polyamid, 25% elastan</td>\n </tr>\n <tr>\n <td data-label="G kód">G98463</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">CEZAR</td>\n <td data-label="Cena (€)">12,00</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">140 den, zosilnená päta a špička</td>\n </tr>\n <tr>\n <td data-label="G kód">G70877</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">DEONA</td>\n <td data-label="Cena (€)">12,01</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">S/bez špice, 75% polyamid, 25% elastan, antibakteriálne</td>\n </tr>\n <tr>\n <td data-label="G kód">G5144A</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">12,10</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">45% bavlna, 32% polyamid, 23% elastan, hypoalergénne</td>\n </tr>\n <tr>\n <td data-label="G kód">G6104A</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">12,10</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">63% polyamid, 37% elastan, zosilnená päta</td>\n </tr>\n <tr>\n <td data-label="G kód">G98469</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">CEZAR</td>\n <td data-label="Cena (€)">12,13</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Pánske, 70% polyamid, 30% elastan, bezšvové</td>\n </tr>\n <tr>\n <td data-label="G kód">G58735</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Farbené, 2ks, 70% polyamid, 30% elastan</td>\n </tr>\n <tr>\n <td data-label="G kód">G97636</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Extra jemné, 80% polyamid, 20% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G97629</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Mikrovlákno, 75% polyamid, 25% elastan, antibakteriálne</td>\n </tr>\n <tr>\n <td data-label="G kód">G81661</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">SALZMANN</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">S-XL, 67% polyamid, 33% elastan, bezšvové špičky</td>\n </tr>\n <tr>\n <td data-label="G kód">G93116</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MOLLI</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Varixové, 70% polyamid, 30% elastan, zosilnené</td>\n </tr>\n <tr>\n <td data-label="G kód">G83679</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">63% polyamid, 37% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G37411</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">IBICI</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Vysoké, 72% polyamid, 28% elastan, antibakteriálne</td>\n </tr>\n <tr>\n <td data-label="G kód">G72320</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Mikrovlákno, 70% polyamid, 30% elastan, bezšvové</td>\n </tr>\n <tr>\n <td data-label="G kód">G88144</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">75% polyamid, 25% elastan, zosilnená špička</td>\n </tr>\n <tr>\n <td data-label="G kód">G70874</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">DEONA</td>\n <td data-label="Cena (€)">12,28</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Klasik, 70% polyamid, 30% elastan, jemný lem</td>\n </tr>\n <tr>\n <td data-label="G kód">G29732</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">12,29</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Extra jemné, 80% polyamid, 20% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G79785</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">12,34</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT,ORT</td>\n <td data-label="Vlastnosti">Skintex, 70% polyamid, 30% elastan, antibakteriálne</td>\n </tr>\n <tr>\n <td data-label="G kód">G70875</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">III</td>\n <td data-label="Výrobca">DEONA</td>\n <td data-label="Cena (€)">13,20</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">68% polyamid, 32% elastan, zosilnená kompresia</td>\n </tr>\n <tr>\n <td data-label="G kód">G86503</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">III</td>\n <td data-label="Výrobca">LOHMANN & RAUSCHER</td>\n <td data-label="Cena (€)">13,35</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">Dvojvrstvové, 65% polyamid, 35% elastan, odolné</td>\n </tr>\n <tr>\n <td data-label="G kód">G30920</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">III</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">13,35</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">Extra pevné, 65% polyamid, 35% elastan, zosilnené</td>\n </tr>\n <tr>\n <td data-label="G kód">G35100</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">IV</td>\n <td data-label="Výrobca">GANZONI</td>\n <td data-label="Cena (€)">33,13</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">60% polyamid, 40% elastan, lekárske použitie</td>\n </tr>\n <tr>\n <td data-label="G kód">G77662</td>\n <td data-label="Typ">Polostehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">14,18</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">72% polyamid, 28% elastan, samodržiaci lem</td>\n </tr>\n <tr>\n <td data-label="G kód">G29733</td>\n <td data-label="Typ">Polostehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">15,91</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">Extra jemné, 78% polyamid, 22% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G27223</td>\n <td data-label="Typ">Polostehenné</td>\n <td data-label="Trieda">III</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">20,37</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">65% polyamid, 35% elastan, zosilnená kompresia</td>\n </tr>\n <tr>\n <td data-label="G kód">G77663</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">15,85</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">70% polyamid, 30% elastan, samodržiaci lem</td>\n </tr>\n <tr>\n <td data-label="G kód">G70870</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">DEONA</td>\n <td data-label="Cena (€)">16,76</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">Klasik, 72% polyamid, 28% elastan, jemná špička</td>\n </tr>\n <tr>\n <td data-label="G kód">G99346</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">11,48</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ORT,UCH</td>\n <td data-label="Vlastnosti">Nemocničné, S-XXL, 75% polyamid, 25% elastan</td>\n </tr>\n <tr>\n <td data-label="G kód">G98464</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">CEZAR</td>\n <td data-label="Cena (€)">18,00</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ORT,UCH</td>\n <td data-label="Vlastnosti">70% polyamid, 30% elastan, rôzne veľkosti a farby</td>\n </tr>\n <tr>\n <td data-label="G kód">G30922</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">III</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">19,10</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">Extra pevné, 65% polyamid, 35% elastan</td>\n </tr>\n <tr>\n <td data-label="G kód">G35102</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">IV</td>\n <td data-label="Výrobca">GANZONI</td>\n <td data-label="Cena (€)">52,07</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">58% polyamid, 42% elastan, lekárske použitie</td>\n </tr>\n <tr>\n <td data-label="G kód">G77664</td>\n <td data-label="Typ">Stehenné s pásom</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">9,42</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">72% polyamid, 28% elastan, pásik v páse</td>\n </tr>\n <tr>\n <td data-label="G kód">G29735</td>\n <td data-label="Typ">Stehenné s pásom</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">10,51</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">Extra jemné, 76% polyamid, 24% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G27225</td>\n <td data-label="Typ">Stehenné s pásom</td>\n <td data-label="Trieda">III</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">13,38</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT</td>\n <td data-label="Vlastnosti">63% polyamid, 37% elastan, zosilnená kompresia</td>\n </tr>\n <tr>\n <td data-label="G kód">G98465</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">CEZAR</td>\n <td data-label="Cena (€)">31,50</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">140 den, 70% polyamid, 30% elastan, bezšvové</td>\n </tr>\n <tr>\n <td data-label="G kód">G98466</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">CEZAR</td>\n <td data-label="Cena (€)">32,00</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">140 den, 68% polyamid, 32% elastan, zosilnené</td>\n </tr>\n <tr>\n <td data-label="G kód">G5143A</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">32,21</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">72% polyamid, 28% elastan, otv./zatv. špica</td>\n </tr>\n <tr>\n <td data-label="G kód">G6064A</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">32,21</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">65% polyamid, 35% elastan, zosilnený sed</td>\n </tr>\n <tr>\n <td data-label="G kód">G6064A</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">32,21</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">65% polyamid, 35% elastan, zosilnený sed</td>\n </tr>\n <tr>\n <td data-label="G kód">G98467</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">CEZAR</td>\n <td data-label="Cena (€)">32,26</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">72% polyamid, 28% elastan, zatvorená špica</td>\n </tr>\n <tr>\n <td data-label="G kód">G98245</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">32,26</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">70% polyamid, 30% elastan, rôzne veľkosti</td>\n </tr>\n <tr>\n <td data-label="G kód">G77665</td>\n <td data-label="Typ">Pančuchové (Dámske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">32,27</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">74% polyamid, 26% elastan, antibakteriálne</td>\n </tr>\n <tr>\n <td data-label="G kód">G6065A</td>\n <td data-label="Typ">Pančuchové (Tehotenské)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">45,00</td>\n <td data-label="Odbornosti">ANG,CCH,GYN,INT</td>\n <td data-label="Vlastnosti">63% polyamid, 37% elastan, elastický pás</td>\n </tr>\n <tr>\n <td data-label="G kód">G74403</td>\n <td data-label="Typ">Pančuchové (Tehotenské)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">45,03</td>\n <td data-label="Odbornosti">ANG,CCH,GYN,INT</td>\n <td data-label="Vlastnosti">65% polyamid, 35% elastan, lesklé, zosilnený sed</td>\n </tr>\n <tr>\n <td data-label="G kód">G77667</td>\n <td data-label="Typ">Pančuchové (Tehotenské)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">47,82</td>\n <td data-label="Odbornosti">ANG,CCH,GYN,INT</td>\n <td data-label="Vlastnosti">70% polyamid, 30% elastan, extra komfortný pás</td>\n </tr>\n <tr>\n <td data-label="G kód">G59883</td>\n <td data-label="Typ">Pančuchové (Pánske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">45,03</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">63% polyamid, 37% elastan, zosilnený sed/chodidlá</td>\n </tr>\n <tr>\n <td data-label="G kód">G77666</td>\n <td data-label="Typ">Pančuchové (Pánske)</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">LOANA</td>\n <td data-label="Cena (€)">50,98</td>\n <td data-label="Odbornosti">ANG,CCH,DER,CHI,INT</td>\n <td data-label="Vlastnosti">72% polyamid, 28% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G88361</td>\n <td data-label="Typ">Ramenný návlek</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">9,35</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ONK,RHB</td>\n <td data-label="Vlastnosti">CG/CH, 70% polyamid, 30% elastan, priedušné</td>\n </tr>\n <tr>\n <td data-label="G kód">G88362</td>\n <td data-label="Typ">Ramenný s rukavicou</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">ARIES</td>\n <td data-label="Cena (€)">12,25</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ONK,RHB</td>\n <td data-label="Vlastnosti">AG/AH, 68% polyamid, 32% elastan, bezprstové</td>\n </tr>\n <tr>\n <td data-label="G kód">G85106</td>\n <td data-label="Typ">Ramenný návlek</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">23,89</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ONK,RHB</td>\n <td data-label="Vlastnosti">CG/CH, 65% polyamid, 35% elastan, anatomický</td>\n </tr>\n <tr>\n <td data-label="G kód">G87633</td>\n <td data-label="Typ">Rukavica</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">MAXIS</td>\n <td data-label="Cena (€)">12,26</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ONK,RHB</td>\n <td data-label="Vlastnosti">Bez prstov, 60% polyamid, 40% elastan, priedušná</td>\n </tr>\n <tr>\n <td data-label="G kód">G72333</td>\n <td data-label="Typ">Rukavica</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,26</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,ONK,RHB</td>\n <td data-label="Vlastnosti">70% polyamid, 30% elastan, anatomický tvar</td>\n </tr>\n <tr>\n <td data-label="G kód">G88146</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">16,91</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER</td>\n <td data-label="Vlastnosti">VENOFLEX KOKOON AG, s krajkou, telová/čierna, otvorená/uzavretá, ľahšie sa navliekajú</td>\n </tr>\n <tr>\n <td data-label="G kód">G98244</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">16,90</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER</td>\n <td data-label="Vlastnosti">Venoflex Micro® AG, čipka/lem, telová/čierna, otv/uzavr., ťažšie sa navliekajú, tuhšie, lepšie pri veľkých opuchoch</td>\n </tr>\n <tr>\n <td data-label="G kód">G88147</td>\n <td data-label="Typ">Stehenné</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">16,91</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER</td>\n <td data-label="Vlastnosti">VENOFLEX CITY CONFORT COTON AG, iba lem, iba čierna, otv/uzavr., 42% podiel bavlny, menej dráždivé, pánske - dlhšie chodidlo</td>\n </tr>\n <tr>\n <td data-label="G kód">G00149</td>\n <td data-label="Typ">Stehenné na mieru</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER</td>\n <td data-label="Vlastnosti">Na mieru (uviesť 2ks)</td>\n </tr>\n <tr>\n <td data-label="G kód">G98243</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,04</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER,ORT</td>\n <td data-label="Vlastnosti">Venoflex Micro® AD, lem, telová/čierna, otv/uzavr., ťažšie sa navliekajú, tuhšie, lepšie pri veľkých opuchoch</td>\n </tr>\n <tr>\n <td data-label="G kód">G88144</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER,ORT</td>\n <td data-label="Vlastnosti">VENOFLEX KOKOON AD, s lemom, telová/čierna, otvorená/uzavretá, ľahšie sa navliekajú</td>\n </tr>\n <tr>\n <td data-label="G kód">G92212</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER,ORT</td>\n <td data-label="Vlastnosti">Venoflex FAST Coton AD, lem, čierna, uzavr. ako ponožka, 46% bavlna, nedráždivá</td>\n </tr>\n <tr>\n <td data-label="G kód">G88145</td>\n <td data-label="Typ">Lýtkové</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER,ORT</td>\n <td data-label="Vlastnosti">VENOFLEX CITY CONFORT COTON AD, lem, čierna, otv/uzavr., 46% bavlna, nedráždivá</td>\n </tr>\n <tr>\n <td data-label="G kód">G00147</td>\n <td data-label="Typ">Lýtkové na mieru</td>\n <td data-label="Trieda">II</td>\n <td data-label="Výrobca">THUASNE</td>\n <td data-label="Cena (€)">12,14</td>\n <td data-label="Odbornosti">ANG,CCH,CHI,INT,DER,ORT</td>\n <td data-label="Vlastnosti">Lýtkové pančuchy na mieru (uviesť 2ks)</td>\n </tr>\n </tbody>\n </table>\n </div>\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="tos"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-secondary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[295.0625rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(6072px,auto)_minmax(1138px,auto)_minmax(4897px,auto)_1fr] max-lg:px-4 lg:min-h-[178.25rem] lg:max-w-[76.5rem] lg:grid-cols-[8.25163%_8.25163%_66.6667%_8.25163%_8.57843%] lg:grid-rows-[minmax(79px,auto)_minmax(1861px,auto)_minmax(60px,auto)_minmax(1316.23px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
                  <div
                    id="zIRiCT"
                    height="1593"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Testy na TOS syndróm - detailný prehľad</title>\n <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\n \n\n\n <div class="table-container">\n <table>\n <caption>Testy na TOS syndróm - detailný prehľad</caption>\n <thead>\n <tr>\n <th>Názov testu</th>\n <th>Postup</th>\n <th>Vyhodnotenie</th>\n </tr>\n </thead>\n <tbody>\n <tr>\n <td data-label="Názov testu">1. Adsonov test</td>\n <td data-label="Postup">\n 1. Pacient sedí alebo stojí vzpriamene, ruky relaxovane po stranách tela.<br>\n 2. Lekár palpuje radiálny pulz na vyšetrovanej končatine.<br>\n 3. Pacient zhlboka vdýchne a zadrží dych.<br>\n 4. Pacient otočí hlavu smerom k vyšetrovanej strane a zároveň mierne zakloní hlavu.<br>\n 5. Lekár pasívne extenzuje a mierne abdukuje pacientovu ruku.<br>\n 6. Pozícia sa drží niekoľko sekúnd, počas ktorých lekár sleduje pulz a symptómy.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Oslabenie alebo vymiznutie radiálneho pulzu a/alebo reprodukcia symptómov (bolesť, parestézie).<br>\n <strong>Negatívny:</strong> Žiadna zmena pulzu ani symptómov.<br>\n <strong>Poznámka:</strong> Pozitívny výsledok môže indikovať kompresiu a. subclaviae alebo brachiálneho plexu medzi scalenovými svalmi.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">2. Wrightov test (hyperabdukčný test)</td>\n <td data-label="Postup">\n 1. Pacient sedí alebo stojí vzpriamene.<br>\n 2. Lekár palpuje radiálny pulz na vyšetrovanej končatine.<br>\n 3. Pacient pomaly abdukuje ruku nad 90°, až do maximálnej možnej abdukcie (hyperabdukcia).<br>\n 4. Ruka je zároveň vonkajšie rotovaná.<br>\n 5. Pozícia sa drží niekoľko sekúnd, lekár sleduje pulz a symptómy.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Oslabenie alebo vymiznutie pulzu a/alebo reprodukcia symptómov.<br>\n <strong>Negatívny:</strong> Žiadna zmena pulzu ani symptómov.<br>\n <strong>Poznámka:</strong> Pozitívny test môže naznačovať kompresiu neurovaskulárneho zväzku pod m. pectoralis minor.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">3. Roosov test (EAST)</td>\n <td data-label="Postup">\n 1. Pacient stojí alebo sedí vzpriamene.<br>\n 2. Ramená sú abdukované na 90°, lakte flexované na 90°, ramená sú v externej rotácii.<br>\n 3. Pacient otvára a zatvára päste v rýchlom tempe (1 cyklus za sekundu) po dobu 3 minút.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Bolesť, parestézie, ťažkosti pri udržiavaní pozície, ťažkosť v ramenách, ischemické príznaky (bledosť, cyanóza).<br>\n <strong>Negatívny:</strong> Žiadne príznaky po 3 minútach.<br>\n <strong>Poznámka:</strong> Čas nástupu príznakov môže korelovať so závažnosťou kompresie. Test hodnotí celkovú funkčnosť brachiálneho plexu a ciev v oblasti thoracic outlet.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">4. Kostoklavikulárny manéver (Edenov test)</td>\n <td data-label="Postup">\n 1. Pacient sedí alebo stojí vzpriamene.<br>\n 2. Lekár palpuje radiálny pulz na vyšetrovanej končatine.<br>\n 3. Pacient zatiahne ramená dozadu a nadol (ako pri vojenskom postoji).<br>\n 4. Pacient môže zároveň mierne vysunúť hrudník dopredu.<br>\n 5. Pozícia sa drží niekoľko sekúnd.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Oslabenie alebo vymiznutie pulzu a/alebo reprodukcia symptómov.<br>\n <strong>Negatívny:</strong> Žiadna zmena pulzu ani symptómov.<br>\n <strong>Poznámka:</strong> Pozitívny test naznačuje možnú kompresiu v kostoklavikulárnom priestore medzi klavikulou a prvým rebrom.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">5. Allenov test (modifikovaný)</td>\n <td data-label="Postup">\n 1. Pacient sedí, rameno je abdukované na 90°, lakeť flexovaný na 90°.<br>\n 2. Lekár palpuje radiálny pulz.<br>\n 3. Pacient otočí hlavu od vyšetrovanej strany.<br>\n 4. Lekár pasívne extenzuje a vonkajšie rotuje rameno.<br>\n 5. Pozícia sa drží niekoľko sekúnd.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Oslabenie alebo vymiznutie pulzu a/alebo reprodukcia symptómov.<br>\n <strong>Negatívny:</strong> Žiadna zmena pulzu ani symptómov.<br>\n <strong>Poznámka:</strong> Tento test hodnotí kompresiu neurovaskulárneho zväzku v oblasti m. pectoralis minor.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">6. Halsteadov manéver</td>\n <td data-label="Postup">\n 1. Pacient sedí alebo stojí vzpriamene.<br>\n 2. Lekár palpuje radiálny pulz.<br>\n 3. Lekár aplikuje trakciu nadol na pacientovu ruku.<br>\n 4. Pacient zakloní hlavu a otočí ju na opačnú stranu.<br>\n 5. Pozícia sa drží niekoľko sekúnd.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Oslabenie alebo vymiznutie pulzu a/alebo reprodukcia symptómov.<br>\n <strong>Negatívny:</strong> Žiadna zmena pulzu ani symptómov.<br>\n <strong>Poznámka:</strong> Tento test môže indikovať kompresiu v oblasti scalenového úseku.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">7. Tinelov test nad supraklavikulárnou oblasťou</td>\n <td data-label="Postup">\n 1. Pacient sedí alebo leží s ramenom uvoľneným.<br>\n 2. Lekár jemne poklepe (perkusie) prstami alebo kladivkom nad supraklavikulárnou jamkou, kde prebieha brachiálny plexus.<br>\n 3. Test sa opakuje niekoľkokrát.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Pozitívny:</strong> Pacient pociťuje brnenie alebo parestézie vyžarujúce do hornej končatiny.<br>\n <strong>Negatívny:</strong> Žiadne neobvyklé pocity.<br>\n <strong>Poznámka:</strong> Pozitívny Tinelov znak naznačuje iritáciu alebo poškodenie nervových štruktúr brachiálneho plexu.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">8. Palpácia prvého rebra</td>\n <td data-label="Postup">\n 1. Pacient sedí s uvoľnenými ramenami.<br>\n 2. Lekár palpuje nad klavikulou, hľadajúc prvé rebro za m. sternocleidomastoideus.<br>\n 3. Porovnáva polohu a pohyblivosť prvého rebra na oboch stranách.<br>\n 4. Môže použiť nádych a výdych pacienta na posúdenie pohyblivosti.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Abnormálne:</strong> Obmedzená pohyblivosť, zvýšená poloha alebo citlivosť prvého rebra.<br>\n <strong>Normálne:</strong> Symetrická poloha a pohyblivosť na oboch stranách.<br>\n <strong>Poznámka:</strong> Dysfunkcia prvého rebra môže prispievať k kompresii neurovaskulárnych štruktúr.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">9. Dopplerovské ultrazvukové vyšetrenie</td>\n <td data-label="Postup">\n 1. Pacient je v rôznych polohách (neutrálna, provokačné testy).<br>\n 2. Lekár aplikuje ultrazvukovú sondu nad cievne štruktúry (a. subclavia, a. axillaris).<br>\n 3. Sleduje sa prietok krvi a prípadné obštrukcie.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Abnormálne:</strong> Znížený alebo prerušený prietok krvi v provokačných polohách.<br>\n <strong>Normálne:</strong> Stabilný prietok krvi bez ohľadu na polohu.<br>\n <strong>Poznámka:</strong> Ultrazvuk môže objektivizovať vaskulárnu kompresiu a pomôcť v diagnostike TOS.\n </td>\n </tr>\n <tr>\n <td data-label="Názov testu">10. Elektromyografia (EMG) a štúdie nervového vedenia</td>\n <td data-label="Postup">\n 1. Pacient je vyšetrený špecialistom na neurofyziológiu.<br>\n 2. Elektródy sú umiestnené na svaly inervované brachiálnym plexom.<br>\n 3. Meria sa elektrická aktivita svalov a rýchlosť nervového vedenia.\n </td>\n <td data-label="Vyhodnotenie">\n <strong>Abnormálne:</strong> Spomalenie nervového vedenia, denervačné potenciály.<br>\n <strong>Normálne:</strong> Normálne hodnoty nervového vedenia a svalovej aktivity.<br>\n <strong>Poznámka:</strong> EMG a štúdie nervového vedenia pomáhajú odlíšiť neurogénnu TOS od iných neurologických porúch.\n </td>\n </tr>\n </tbody>\n </table>\n </div>\n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
                  <div
                    id="zClp7d"
                    height="1276.234375"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Lymfedém a súvisiace stavy - Rozšírený prehľad</title>\n \n\n\n <h1>Lymfedém a súvisiace stavy - Rozšírený prehľad</h1>\n <table>\n <thead>\n <tr>\n <th>Typ</th>\n <th>Charakteristika</th>\n <th>Príznaky</th>\n <th>Diagnostika</th>\n <th>Liečba a prognóza</th>\n </tr>\n </thead>\n <tbody>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Primárny lymfedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Vrodená porucha lymfatického systému</li>\n <li>Podtypy: congenita, praecox, tarda</li>\n <li>Môže byť spojený s genetickými syndrómami</li>\n <li class="subheading">Postihuje:</li>\n <li>Najčastejšie ženy (až 80% prípadov)</li>\n <li>Môže sa prejaviť v ktoromkoľvek veku</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Opuch končatín, najčastejšie dolných</li>\n <li>Asymetrický opuch</li>\n <li>Ťažké nohy, pocit napätia</li>\n <li>Zhrubnutie kože (fibrózna indurácia)</li>\n <li class="subheading">Typické príznaky:</li>\n <li>Stemmerov znak (nemožnosť uchopiť kožnú riasu na dorze druhého prsta nohy)</li>\n <li>Pozitívny "pitting" test v skorých štádiách</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Lymfoscintigrafia</li>\n <li>MRI lymfangiografia</li>\n <li>Genetické testovanie</li>\n </ul>\n </td>\n <td data-label="Liečba a prognóza">\n <ul>\n <li>Komplexná dekongestívna terapia (KDT)</li>\n <li>Manuálna lymfodrenáž</li>\n <li>Kompresívna bandáž a oblečenie</li>\n <li>Cvičenie a starostlivosť o kožu</li>\n <li class="subheading">Prognóza:</li>\n <li>Chronické, progresívne ochorenie</li>\n <li>Správna liečba môže výrazne spomaliť progresiu</li>\n <li>Riziko komplikácií (infekcie, fibróza)</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Sekundárny lymfedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Získaná porucha lymfatického systému</li>\n <li>Najčastejšie po onkologickej liečbe, traume, infekcii</li>\n <li>Môže postihnúť ktorúkoľvek časť tela</li>\n <li class="subheading">Postihuje:</li>\n <li>Pacientov po liečbe rakoviny (najmä prsníka, krčku maternice, prostaty)</li>\n <li>Osoby po úrazoch alebo operáciách</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Postupný opuch postihnutej oblasti</li>\n <li>Pocit ťažoby a napätia</li>\n <li>Obmedzená pohyblivosť</li>\n <li>Zmeny textúry kože</li>\n <li class="subheading">Typické príznaky:</li>\n <li>Opuch sa zhoršuje počas dňa a aktivity</li>\n <li>Možná bolesť a diskomfort v postihnutej oblasti</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Anamnéza a klinické vyšetrenie</li>\n <li>Bioimpedancia</li>\n <li>Lymfoscintigrafia</li>\n <li>CT alebo MRI</li>\n </ul>\n </td>\n <td data-label="Liečba a prognóza">\n <ul>\n <li>Komplexná dekongestívna terapia (KDT)</li>\n <li>Pneumatická kompresia</li>\n <li>Chirurgické metódy (lymfovenózne anastomózy, transfer lymfatických uzlín)</li>\n <li>Liposukcia pri pokročilom lymfedéme</li>\n <li class="subheading">Prognóza:</li>\n <li>Variabilná, závisí od príčiny a včasnosti liečby</li>\n <li>Možné zlepšenie pri včasnej intervencii</li>\n <li>Riziko recidívy a progresie bez adekvátnej liečby</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Lipedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Chronické ochorenie tukového tkaniva</li>\n <li>Postihuje takmer výlučne ženy</li>\n <li>Symetrické ukladanie tuku na dolných končatinách a rukách</li>\n <li class="subheading">Postihuje:</li>\n <li>Takmer výlučne ženy (>98% prípadov)</li>\n <li>Často sa začína v puberte alebo počas tehotenstva</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Symetrický opuch nôh, šetrí chodidlá</li>\n <li>Bolestivosť a citlivosť pri dotyku</li>\n <li>Ľahká tvorba modrín</li>\n <li>"Obraz manžetových nohavíc"</li>\n <li class="subheading">Typické príznaky:</li>\n <li>Negatívny Stemmerov znak</li>\n <li>Opuch nereaguje na eleváciu končatiny</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Ultrasonografia</li>\n <li>MRI (odlíšenie od lymfedému)</li>\n <li>Vylúčenie iných príčin opuchu</li>\n </ul>\n </td>\n <td data-label="Liečba a prognóza">\n <ul>\n <li>Konzervatívna liečba podobná ako pri lymfedéme</li>\n <li>Úprava životného štýlu a diéty</li>\n <li>Liposukcia (tumescentná technika)</li>\n <li>Psychologická podpora</li>\n <li class="subheading">Prognóza:</li>\n <li>Chronické ochorenie s tendenciou k progresii</li>\n <li>Konzervatívna liečba môže zmierniť príznaky</li>\n <li>Riziko prechodu do lipo-lymfedému</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Lipo-lymfedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Kombinácia lipedému a lymfedému</li>\n <li>Progresívne ochorenie</li>\n <li>Často sa vyvíja u pacientov s dlhodobým lipedémom</li>\n <li class="subheading">Postihuje:</li>\n <li>Prevažne ženy s dlhodobým lipedémom</li>\n <li>Často spojené s obezitou</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Výrazný opuch končatín, vrátane chodidiel a rúk</li>\n <li>Ťažká noha/ruka, obmedzená pohyblivosť</li>\n <li>Fibrózne zmeny kože</li>\n <li>Zvýšená náchylnosť na infekcie</li>\n <li class="subheading">Typické príznaky:</li>\n <li>Kombinuje príznaky lipedému a lymfedému</li>\n <li>Výrazné zhoršenie kvality života</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Ultrasonografia</li>\n <li>MRI alebo CT</li>\n <li>Lymfoscintigrafia</li>\n <li>Bioimpedancia</li>\n </ul>\n </td>\n <td data-label="Liečba a prognóza">\n <ul>\n <li>Komplexná dekongestívna terapia (KDT)</li>\n <li>Intenzívna kompresívna terapia</li>\n <li>Manuálna lymfodrenáž</li>\n <li>Úprava životného štýlu a redukcia hmotnosti</li>\n <li>Chirurgické metódy (kombinované prístupy)</li>\n <li class="subheading">Prognóza:</li>\n <li>Chronické ochorenie s tendenciou k rýchlej progresii</li>\n <li>Vyžaduje intenzívnu a komplexnú liečbu</li>\n <li>Riziko závažných komplikácií (infekcie, ulcerácie)</li>\n </ul>\n </td>\n </tr>\n </tbody>\n </table>\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="vaskulitidy"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[201.8125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(11607px,auto)_1fr] max-lg:px-4 lg:min-h-[224.6875rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_83.1699%_8.41503%] lg:grid-rows-[minmax(64px,auto)_minmax(155px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zfg1HU"
                    height="2944"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Prehľad vaskulitíd</title>\n <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\n \n\n\n <div class="table-container">\n <table>\n <caption>Podrobný prehľad vaskulitíd pre lekárov</caption>\n <thead>\n <tr>\n <th>Typ vaskulitídy</th>\n <th>Klinické znaky</th>\n <th>Typický pacient</th>\n <th>Diagnostika</th>\n <th>Liečba</th>\n </tr>\n </thead>\n <tbody>\n <!-- Takayasuova arteritída -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Takayasuova arteritída</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Únava, horúčka, nočné potenie</li>\n <li>Claudicatio členkov alebo horných končatín</li>\n <li>Slabý alebo neprítomný pulz na jednej alebo viacerých končatinách</li>\n <li>Rozdiel v krvnom tlaku medzi končatinami (>10 mmHg)</li>\n <li>Synkopy, závraty</li>\n <li>Šelesty nad aortou a jej vetvami</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Ženy do 40 rokov, najmä z Ázie</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Zápalové markery: zvýšené ESR, CRP</li>\n <li>Angiografia (MR, CT alebo konvenčná): zúženie alebo oklúzie aorty a jej vetiev</li>\n <li>Ultrazvuk s dopplerom: zmeny prietoku</li>\n <li>Biopsia (zriedkavo dostupná): granulomatózny zápal s obrovskými bunkami</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Kortikosteroidy:</strong> Prednizón 1 mg/kg denne</li>\n <li><strong>Imunosupresíva:</strong> Metotrexát, azatioprín, mykofenolát mofetil</li>\n <li><strong>Biologická liečba:</strong> Inhibítory TNF-α (infliximab), tocilizumab</li>\n <li><strong>Chirurgická intervencia:</strong> Angioplastika alebo bypass pri ťažkých stenózach</li>\n <li>Sledovanie krvného tlaku a funkcie orgánov</li>\n </ul>\n </td>\n </tr>\n <!-- Obrovskobunková arteritída -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Obrovskobunková arteritída (temporálna arteritída)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Silná, pulzujúca bolesť hlavy (často temporálna oblast)</li>\n <li>Citlivosť pokožky hlavy</li>\n <li>Poruchy zraku: diplopia, strata zraku</li>\n <li>Claudicatio mandibulae (bolesť pri žuvaní)</li>\n <li>Únava, horúčka, úbytok hmotnosti</li>\n <li>Asociácia s polymyalgia rheumatica (bolesti a stuhnutosť svalov ramien a panvy)</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Osoby nad 50 rokov, častejšie ženy európskeho pôvodu</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Zvýšené ESR (často >50 mm/h), CRP</li>\n <li>Abnormálna palpácia temporálnej artérie (citlivosť, zhrubnutie)</li>\n <li>Biopsia temporálnej artérie: granulomatózny zápal s obrovskými bunkami</li>\n <li>Ultrazvuk temporálnej artérie: halo fenomén</li>\n <li>MRI/MRA pre hodnotenie veľkých ciev</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Vysoké dávky kortikosteroidov:</strong> Prednizón 40–60 mg denne, urgentné zahájenie liečby pre riziko straty zraku</li>\n <li><strong>Postupné znižovanie dávky:</strong> Podľa klinickej odpovede a laboratórnych markerov</li>\n <li><strong>Imunosupresíva:</strong> Metotrexát ako steroid-sparujúca terapia</li>\n <li><strong>Biologická liečba:</strong> Tocilizumab (inhibítor IL-6 receptoru)</li>\n <li>Sledovanie komplikácií: aneuryzmy aorty, disekcie</li>\n </ul>\n </td>\n </tr>\n <!-- Polyarteritis nodosa -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Polyarteritis nodosa (PAN)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Horúčka, únava, úbytok hmotnosti</li>\n <li>Bolesť svalov a kĺbov</li>\n <li>Kožné lézie: livedo reticularis, noduly, ulcerácie</li>\n <li>Periférna neuropatia (mononeuritis multiplex)</li>\n <li>Abdominálna bolesť po jedle (mezenterická ischémia)</li>\n <li>Renálna vaskulitída: hypertenzia, zlyhávanie obličiek</li>\n <li>Asociácia s infekciou HBV (hepatitída B)</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Dospelí muži, 40–60 rokov</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Zvýšené ESR, CRP</li>\n <li>Anémia, leukocytóza</li>\n <li>HBsAg pozitívny u časti pacientov</li>\n <li>Angiografia: mikroaneuryzmy stredne veľkých tepien (najmä renálne, mezenterické)</li>\n <li>Biopsia postihnutého tkaniva: nekrotizujúca vaskulitída bez granulómov</li>\n <li>ANCA protilátky negatívne</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Kortikosteroidy:</strong> Vysoké dávky (prednizón 1 mg/kg denne)</li>\n <li><strong>Cyklofosfamid:</strong> Pri ťažkom alebo refraktérnom priebehu</li>\n <li><strong>Liečba HBV:</strong> Antivirotiká (lamivudín), plazmaferéza</li>\n <li>Sledovanie orgánových funkcií (obličky, pečeň)</li>\n </ul>\n </td>\n </tr>\n <!-- Granulomatóza s polyangiitídou -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Granulomatóza s polyangiitídou (Wegenerova granulomatóza)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Horné dýchacie cesty: chronická sinusitída, ulcerácie nosovej sliznice, septálna perforácia (sedlovitý nos)</li>\n <li>Dolné dýchacie cesty: kašeľ, hemoptýza, infiltráty na RTG</li>\n <li>Obličky: hematuria, proteinúria, rýchlo progresívna glomerulonefritída</li>\n <li>Oči: uveitída, konjunktivitída</li>\n <li>Kožné lézie: purpura, ulcerácie</li>\n <li>Artralgia, myalgia</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Dospelí, častejšie kaukazská rasa, muži aj ženy</td>\n <td data-label="Diagnostika">\n <ul>\n <li>C-ANCA (antiproteináza 3) pozitívne u väčšiny pacientov</li>\n <li>Zvýšené ESR, CRP</li>\n <li>Biopsia postihnutého tkaniva: nekrotizujúca granulomatózna vaskulitída</li>\n <li>RTG hrudníka, HRCT: pľúcne infiltráty, kaverny</li>\n <li>Močový sediment: erytrocytové valce, proteinúria</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Indukcia remisie:</strong>\n <ul>\n <li>Kortikosteroidy vysoké dávky (metylprednizolón pulzná terapia)</li>\n <li>Cyklofosfamid alebo rituximab</li>\n </ul>\n </li>\n <li><strong>Udržiavacia liečba:</strong>\n <ul>\n <li>Azatioprín, metotrexát alebo rituximab</li>\n </ul>\n </li>\n <li>Plazmaferéza pri závažnom postihnutí obličiek</li>\n <li>Profylaxia pneumocystovej pneumónie (trimetoprim-sulfametoxazol)</li>\n </ul>\n </td>\n </tr>\n <!-- Mikroskopická polyangiitída -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Mikroskopická polyangiitída</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Rýchlo progresívna glomerulonefritída: hematuria, proteinúria, zlyhávanie obličiek</li>\n <li>Pľúcna kapilaritída: hemoptýza, dyspnoe, infiltráty na RTG</li>\n <li>Kožné lézie: palpovateľná purpura</li>\n <li>Periférna neuropatia</li>\n <li>Únava, horúčka, úbytok hmotnosti</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Dospelí stredného a vyššieho veku</td>\n <td data-label="Diagnostika">\n <ul>\n <li>P-ANCA (anti-myeloperoxidáza) pozitívne u väčšiny pacientov</li>\n <li>Zvýšené ESR, CRP</li>\n <li>Biopsia obličky alebo kože: nekrotizujúca vaskulitída bez granulómov</li>\n <li>Močový sediment: erytrocytové valce</li>\n <li>RTG hrudníka: pľúcne infiltráty</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Indukcia remisie:</strong>\n <ul>\n <li>Kortikosteroidy vysoké dávky</li>\n <li>Cyklofosfamid alebo rituximab</li>\n </ul>\n </li>\n <li><strong>Udržiavacia liečba:</strong>\n <ul>\n <li>Azatioprín, metotrexát</li>\n </ul>\n </li>\n <li>Plazmaferéza pri závažnom postihnutí obličiek alebo pľúc</li>\n <li>Monitorovanie funkcie obličiek a pľúc</li>\n </ul>\n </td>\n </tr>\n <!-- Eozinofilná granulomatóza s polyangiitídou -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Eozinofilná granulomatóza s polyangiitídou (Churg-Straussov syndróm)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Astma bronchiale (novovzniknutá alebo zhoršená)</li>\n <li>Allergická rinitída, sinusitída, nosové polypy</li>\n <li>Periférna eozinofília (>10% leukocytov)</li>\n <li>Pľúcne infiltráty (prechodné)</li>\n <li>Periférna neuropatia (mononeuritis multiplex)</li>\n <li>Kožné lézie: purpura, noduly</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Dospelí, často s predchádzajúcim alergickým ochorením</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Eozinofília v krvi</li>\n <li>P-ANCA pozitívne u časti pacientov</li>\n <li>Biopsia postihnutého tkaniva: vaskulitída s eozinofilnými infiltrátmi a granulómami</li>\n <li>RTG hrudníka: prechodné infiltráty</li>\n <li>Elevácia IgE</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Kortikosteroidy:</strong> Vysoké dávky</li>\n <li><strong>Imunosupresíva:</strong> Cyklofosfamid pri ťažkom priebehu</li>\n <li><strong>Biologická liečba:</strong> Mepolizumab (anti-IL-5) pri refraktérnych prípadoch</li>\n <li>Liečba astmy: bronchodilatanciá, inhalačné steroidy</li>\n <li>Sledovanie orgánových funkcií (pľúca, srdce, nervový systém)</li>\n </ul>\n </td>\n </tr>\n <!-- Henoch-Schönleinova purpura -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>IgA vaskulitída (Henoch-Schönleinova purpura)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Palpovateľná purpura na dolných končatinách a zadku</li>\n <li>Artralgia alebo artritída (kolená, členky)</li>\n <li>Abdominálna bolesť, krvácanie do GIT</li>\n <li>Hematuria, proteinúria (postihnutie obličiek)</li>\n <li>Často predchádzajúca infekcia horných dýchacích ciest</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Deti vo veku 3–15 rokov, častejšie chlapci</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinická diagnóza na základe typických symptómov</li>\n <li>Zvýšené IgA v sére (nie vždy)</li>\n <li>Biopsia kože alebo obličky: depozícia IgA v cievach</li>\n <li>Močový sediment: hematuria, proteinúria</li>\n <li>Ultrazvuk brucha pri abdominálnych symptómoch</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Symptomatická liečba:</strong> Odpočinok, hydratácia, analgetiká</li>\n <li><strong>Kortikosteroidy:</strong> Pri závažných abdominálnych alebo renálnych prejavoch</li>\n <li>Sledovanie renálnych funkcií</li>\n <li>Väčšinou priaznivá prognóza s spontánnou remisiou</li>\n </ul>\n </td>\n </tr>\n <!-- Kawasakiho choroba -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Kawasakiho choroba</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Vysoká horúčka trvajúca ≥5 dní</li>\n <li>Bilateralná nekatarálna konjunktivitída</li>\n <li>Zmeny na perách a v ústach: erytém, popraskané pery, "jahodový" jazyk</li>\n <li>Polymorfná vyrážka na trupe</li>\n <li>Cervikálna lymfadenopatia (≥1,5 cm, zvyčajne jednostranná)</li>\n <li>Zmeny na končatinách: erytém dlaní a chodidiel, edém, následné olupovanie kože</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Deti do 5 rokov, častejšie chlapci, najmä v Ázii</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinická diagnóza na základe kritérií (horúčka + ≥4 klinické znaky)</li>\n <li>Zvýšené zápalové markery: ESR, CRP</li>\n <li>Leukocytóza s neutrofíliou, trombocytóza v subakútnej fáze</li>\n <li>Echokardiografia: hodnotenie koronárnych artérií (aneuryzmy)</li>\n <li>Zvýšené transaminázy, hypoalbuminémia</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Intravenózny imunoglobulín (IVIG):</strong> 2 g/kg jednorazovo</li>\n <li><strong>Aspirín:</strong> Vysoké dávky počas akútnej fázy, následne nízke dávky</li>\n <li><strong>Kortikosteroidy:</strong> Pri refraktérnych prípadoch alebo kontraindikácii IVIG</li>\n <li>Sledovanie srdcových komplikácií: pravidelné echokardiografie</li>\n </ul>\n </td>\n </tr>\n <!-- Behçetova choroba -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Behçetova choroba</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Recidivujúce orálne aftózne ulcerácie</li>\n <li>Genitálne ulcerácie</li>\n <li>Očné postihnutie: uveitída (predná aj zadná)</li>\n <li>Kožné lézie: erythema nodosum, pustuly</li>\n <li>Artritída veľkých kĺbov</li>\n <li>Neurobehçet: neurologické príznaky</li>\n <li>Vaskulárne lézie: trombózy, aneuryzmy</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Mladí dospelí, častejšie muži, Stredomorie, Stredný a Ďaleký východ</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické kritériá (International Study Group criteria)</li>\n <li>Pathergia test: pozitívny (pustula po intradermálnej injekcii fyziologického roztoku)</li>\n <li>Oftalmologické vyšetrenie</li>\n <li>MR mozgu pri neurologických príznakoch</li>\n <li>Zápalové markery môžu byť zvýšené</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Kortikosteroidy:</strong> Systémové pri závažných prejavoch</li>\n <li><strong>Imunosupresíva:</strong> Azatioprín, cyklofosfamid, cyklosporín</li>\n <li><strong>Biologická liečba:</strong> Infliximab, interferón-alfa</li>\n <li>Lokálna terapia pre kožné a slizničné lézie</li>\n <li>Sledovanie komplikácií (očných, neurologických)</li>\n </ul>\n </td>\n </tr>\n <!-- Kryoglobulinémia -->\n <tr>\n <td data-label="Typ vaskulitídy"><strong>Kryoglobulinemická vaskulitída</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Purpura na dolných končatinách</li>\n <li>Artralgia</li>\n <li>Periférna neuropatia</li>\n <li>Glomerulonefritída: hematuria, proteinúria</li>\n <li>Únava, slabosť</li>\n <li>Asociácia s hepatitídou C</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Dospelí s chronickou infekciou HCV</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Kryoglobulíny v sére (typ II alebo III)</li>\n <li>Nízky komplement (C4)</li>\n <li>Pozitívne RF (reumatoidný faktor)</li>\n <li>Biopsia kože alebo obličky: leukocytoklastická vaskulitída s depozitmi imunokomplexov</li>\n <li>Testy na HCV: anti-HCV, HCV RNA</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li><strong>Liečba základnej príčiny:</strong> Antivirotická terapia HCV (sofosbuvir, ledipasvir)</li>\n <li><strong>Kortikosteroidy:</strong> Pri závažných prejavoch</li>\n <li><strong>Plazmaferéza:</strong> Pri život ohrozujúcich stavoch</li>\n <li><strong>Imunosupresíva:</strong> Rituximab</li>\n <li>Sledovanie renálnych funkcií</li>\n </ul>\n </td>\n </tr>\n </tbody>\n </table>\n </div>\n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="vazoneurozy"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[236.5rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(8403px,auto)_minmax(1896px,auto)_minmax(2377px,auto)_1fr] max-lg:px-4 lg:min-h-[324.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_8.41503%_66.3399%_8.41503%_8.41503%] lg:grid-rows-[minmax(64px,auto)_minmax(2736px,auto)_minmax(97px,auto)_minmax(2225px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-5">
                  <div
                    id="z3Wnyq"
                    height="2296"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Prehľad vazoneuróz</title>\n <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">\n \n\n\n <div class="table-container">\n <table>\n <caption>Podrobný prehľad vazoneuróz pre lekárov</caption>\n <thead>\n <tr>\n <th>Typ vazoneurózy</th>\n <th>Klinické znaky</th>\n <th>Typický pacient</th>\n <th>Diagnostika</th>\n <th>Liečba</th>\n </tr>\n </thead>\n <tbody>\n <!-- Raynaudov fenomén -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Raynaudov fenomén</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Epizodické zmeny farby prstov (biela → modrá → červená)</li>\n <li>Bolesť, pálenie alebo necitlivosť v postihnutých oblastiach</li>\n <li>Spúšťače: chlad, emocionálny stres</li>\n <li>Môže postihovať prsty na rukách, nohách, nos, uši</li>\n </ul>\n </td>\n <td data-label="Typický pacient">\n <ul>\n <li>Primárny Raynaud: mladé ženy (15–30 rokov)</li>\n <li>Sekundárny Raynaud: pacienti s autoimunitnými ochoreniami (sklerodermia, lupus)</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinická anamnéza a fyzikálne vyšetrenie</li>\n <li>Kapilaroskopia nechtového lôžka</li>\n <li>Laboratórne testy na vylúčenie sekundárnych príčin (ANA, ENA protilátky)</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Vyhýbanie sa spúšťačom (chlad, vibrácie)</li>\n <li>Blokátory kalciových kanálov (nifedipín, amlodipín)</li>\n <li>Prostaglandíny (iloprost) pri ťažkých prípadoch</li>\n <li>Lokálne nitroglycerínové masti</li>\n <li>V extrémnych prípadoch digitálna sympatektómia</li>\n </ul>\n </td>\n </tr>\n <!-- Erytromelalgia -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Erytromelalgia</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Pálenie, bolesť a erytém distálnych končatín (často nohy)</li>\n <li>Zhoršenie pri teple alebo fyzickej aktivite</li>\n <li>Úľava pri chladení postihnutých oblastí</li>\n <li>Môže byť primárna alebo sekundárna (myeloproliferatívne ochorenia)</li>\n </ul>\n </td>\n <td data-label="Typický pacient">\n <ul>\n <li>Primárna forma: ženy stredného veku</li>\n <li>Sekundárna forma: pacienti s polycytémiou vera, esenciálnou trombocytémiou</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinická anamnéza a fyzikálne vyšetrenie</li>\n <li>Laboratórne testy: kompletný krvný obraz, JAK2 mutácia</li>\n <li>Vylúčenie iných príčin bolesti končatín</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Chladenie postihnutých oblastí (opatrne kvôli riziku omrzlín)</li>\n <li>Aspirín (inhibícia trombocytov)</li>\n <li>Antikonvulzíva: gabapentín, pregabalín</li>\n <li>Blokátory sodíkových kanálov: mexiletín</li>\n <li>Liečba základného ochorenia pri sekundárnej forme</li>\n </ul>\n </td>\n </tr>\n <!-- Akrocyanóza -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Akrocyanóza</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Trvalé modrasté sfarbenie rúk a nôh</li>\n <li>Studené, vlhké končatiny</li>\n <li>Bez bolesti alebo ulcerácií</li>\n <li>Zhoršenie v chladnom prostredí</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Mladé ženy, adolescenti</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Vylúčenie iných príčin cyanózy (srdcové a pľúcne ochorenia)</li>\n <li>Kapilaroskopia</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Väčšinou nevyžaduje liečbu</li>\n <li>Udržiavanie tepla končatín</li>\n <li>Vyhýbanie sa chladu a vlhkosti</li>\n <li>V zriedkavých prípadoch blokátory kalciových kanálov</li>\n </ul>\n </td>\n </tr>\n <!-- Livedo reticularis -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Livedo reticularis</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Sieťovité, mramorované sfarbenie kože (červenofialové)</li>\n <li>Najčastejšie na dolných končatinách a stehnách</li>\n <li>Bez bolesti, zvyčajne asymptomatické</li>\n <li>Zhoršenie v chlade</li>\n </ul>\n </td>\n <td data-label="Typický pacient">\n <ul>\n <li>Funkčná forma: mladé ženy</li>\n <li>Organická forma: pacienti s vaskulitídami, antifosfolipidovým syndrómom</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Laboratórne testy: ANA, antiphospholipidové protilátky, koagulačné faktory</li>\n <li>Duplexná ultrasonografia ciev</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Liečba základného ochorenia pri organickej forme</li>\n <li>Vyhýbanie sa chladu</li>\n <li>Antikoagulanciá pri antifosfolipidovom syndróme</li>\n <li>Imunosupresíva pri vaskulitídach</li>\n </ul>\n </td>\n </tr>\n <!-- Posturálny ortostatický tachykardický syndróm (POTS) -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Posturálny ortostatický tachykardický syndróm (POTS)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Výrazná tachykardia pri vzpriamení (>30 bpm nárast v priebehu 10 minút)</li>\n <li>Ortostatická intolerancia: závraty, slabosť, pre-synkopálne stavy</li>\n <li>Únava, problémy s koncentráciou ("brain fog")</li>\n <li>Palpitácie, dyspnoe</li>\n <li>Gastrointestinálne symptómy: nevoľnosť, bolesti brucha</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Mladé ženy (15–50 rokov), často po infekcii alebo traume</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Ortostatický test alebo tilt table test</li>\n <li>Vylúčenie iných príčin tachykardie a hypotenzie</li>\n <li>Autonómne funkčné testy</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Zvýšený príjem tekutín a soli</li>\n <li>Fyzikálna terapia: cvičenia v polohe ležmo alebo sedenie</li>\n <li>Kompresné pančuchy</li>\n <li>Farmakoterapia:\n <ul>\n <li>Beta-blokátory (metoprolol)</li>\n <li>Fludrokortizón</li>\n <li>Midodrin</li>\n <li>Ivabradín</li>\n </ul>\n </li>\n <li>Liečba komorbidít (anémia, dehydratácia)</li>\n </ul>\n </td>\n </tr>\n <!-- Ortostatická hypotenzia -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Ortostatická hypotenzia</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Pokles systolického tlaku o ≥20 mmHg alebo diastolického o ≥10 mmHg pri postavení</li>\n <li>Závraty, slabosť, pre-synkopa alebo synkopa pri vstávaní</li>\n <li>Rozmazané videnie, bolesť hlavy</li>\n <li>Možné palpitácie alebo tachykardia</li>\n </ul>\n </td>\n <td data-label="Typický pacient">\n <ul>\n <li>Starší pacienti</li>\n <li>Pacienti s autonómnou neuropatiou (diabetes mellitus, Parkinsonova choroba)</li>\n <li>Pacienti užívajúci antihypertenzíva, diuretiká</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Meranie krvného tlaku a pulzu v ľahu, sede a stoji</li>\n <li>Laboratórne testy: hladina glukózy, renálne funkcie, elektrolyty</li>\n <li>EKG, echokardiografia pri podozrení na srdcové ochorenie</li>\n <li>Autonómne funkčné testy</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Úprava liekov (redukcia dávok antihypertenzív)</li>\n <li>Nefarmakologické opatrenia:\n <ul>\n <li>Pomaly vstávať z ležiacej alebo sediacej polohy</li>\n <li>Zvýšený príjem soli a tekutín</li>\n <li>Kompresné pančuchy</li>\n <li>Spánok s mierne zdvihnutou hlavou</li>\n </ul>\n </li>\n <li>Farmakoterapia:\n <ul>\n <li>Fludrokortizón</li>\n <li>Midodrin</li>\n <li>Droxidopa</li>\n </ul>\n </li>\n </ul>\n </td>\n </tr>\n <!-- Vazovagálna synkopa -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Vazovagálna synkopa</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Predsynkopálne symptómy: nevoľnosť, potenie, slabosť, bledosť</li>\n <li>Náhla krátkodobá strata vedomia</li>\n <li>Spúšťače: dlhé státie, emocionálny stres, bolesť, pohľad na krv</li>\n <li>Rýchle zotavenie po páde do horizontálnej polohy</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Mladí zdraví jedinci, ale môže sa vyskytnúť v každom veku</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinická anamnéza a opis udalosti</li>\n <li>Vylúčenie kardiogénnych príčin (EKG, echokardiografia)</li>\n <li>Tilt table test pri nejasných prípadoch</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Edukácia o vyhýbaní sa spúšťačom</li>\n <li>Fyzikálne manévre pri prodromálnych príznakoch (kríženie nôh, napínanie svalov)</li>\n <li>Zvýšený príjem tekutín a soli</li>\n <li>Farmakoterapia v rezistentných prípadoch:\n <ul>\n <li>Midodrin</li>\n <li>Fludrokortizón</li>\n <li>Beta-blokátory</li>\n </ul>\n </li>\n </ul>\n </td>\n </tr>\n <!-- Komplexný regionálny bolestivý syndróm -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Komplexný regionálny bolestivý syndróm (CRPS)</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Intenzívna, páliaca bolesť nesúmerná s pôvodným poranením</li>\n <li>Edém, zmeny farby a teploty kože</li>\n <li>Poruchy potenia</li>\n <li>Motorické dysfunkcie: slabosť, tremor, dystónia</li>\n <li>Atrofia kože a svalov v neskorších štádiách</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Po traume alebo chirurgickom zákroku, častejšie ženy</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické kritériá podľa Budapestských kritérií</li>\n <li>Vylúčenie iných príčin (infekcia, hlboká žilová trombóza)</li>\n <li>Scintigrafia kostí, MRI v niektorých prípadoch</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Multidisciplinárny prístup</li>\n <li>Fyzikálna terapia: mobilizácia, lymfodrenáž</li>\n <li>Farmakoterapia:\n <ul>\n <li>NSAID</li>\n <li>Antikonvulzíva (gabapentín, pregabalín)</li>\n <li>Antidepresíva (amitriptylín)</li>\n <li>Bisfosfonáty</li>\n </ul>\n </li>\n <li>Regionálna anestézia, sympatikové blokády</li>\n <li>Psychologická podpora</li>\n </ul>\n </td>\n </tr>\n <!-- Reflexná sympatická dystrofia -->\n <tr>\n <td data-label="Typ vazoneurózy"><strong>Reflexná sympatická dystrofia</strong></td>\n <td data-label="Klinické znaky">\n <ul>\n <li>Podobné ako CRPS typu I</li>\n <li>Bolesť, ktorá nie je vysvetliteľná poškodením nervov</li>\n <li>Zmeny vo vazomotorike a sudomotorike</li>\n <li>Atrofia tkanív v neskorších štádiách</li>\n </ul>\n </td>\n <td data-label="Typický pacient">Po drobných poraneniach, často u stredného veku</td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické kritériá</li>\n <li>Vylúčenie CRPS typu II (kauzalgia)</li>\n <li>Scintigrafia kostí</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Podobná ako pri CRPS</li>\n <li>Fyzikálna terapia a rehabilitácia</li>\n <li>Sympatikové blokády</li>\n <li>Farmakoterapia podľa symptomatológie</li>\n </ul>\n </td>\n </tr>\n </tbody>\n </table>\n </div>\n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-3 lg:col-end-4">
                  <div
                    id="zBpjfr"
                    height="2180"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Raritné ochorenia v angiológii - Kompletný prehľad</title>\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n \n\n\n <h1>Raritné ochorenia v angiológii - Kompletný prehľad</h1>\n\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Ochorenie</th>\n <th>Charakteristika</th>\n <th>Diagnostika</th>\n <th>Liečba</th>\n </tr>\n <tr>\n <td>Takayasuova arteritída</td>\n <td>\n <ul>\n <li>Chronické zápalové ochorenie veľkých ciev</li>\n <li>Postihuje najmä aortu a jej hlavné vetvy</li>\n <li>Typicky sa vyskytuje u mladých žien</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Angiografia</li>\n <li>CT angiografia</li>\n <li>MR angiografia</li>\n <li>PET-CT</li>\n <li>Laboratórne markery zápalu</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Kortikosteroidy</li>\n <li>Imunosupresíva</li>\n <li>Biologická liečba (anti-TNF)</li>\n <li>Angioplastika alebo chirurgická rekonštrukcia pri stenózach</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Buergerova choroba (Thromboangiitis obliterans)</td>\n <td>\n <ul>\n <li>Zápalové ochorenie malých a stredných ciev</li>\n <li>Postihuje najmä končatinové artérie a žily</li>\n <li>Silne asociované s fajčením</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Angiografia</li>\n <li>Biopsia tkaniva</li>\n <li>Allenov test</li>\n <li>Vylúčenie iných príčin vaskulitídy</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Absolútne zanechanie fajčenia</li>\n <li>Vazodilatačná liečba (prostanoidy)</li>\n <li>Antikoagulácia</li>\n <li>Sympatektómia v ťažkých prípadoch</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Fibromuskulárna dysplázia (FMD)</td>\n <td>\n <ul>\n <li>Neaterosklerotické, nezápalové ochorenie cievnej steny</li>\n <li>Najčastejšie postihuje renálne a karotické artérie</li>\n <li>Prevažne u mladých až stredne starých žien</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>CT angiografia</li>\n <li>MR angiografia</li>\n <li>Konvenčná angiografia ("string of beads" vzhľad)</li>\n <li>Duplexná ultrasonografia</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Antiagregačná liečba</li>\n <li>Manažment hypertenzie</li>\n <li>Perkutánna angioplastika pri symptomatických stenózach</li>\n <li>Chirurgická rekonštrukcia v zložitých prípadoch</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Erdheimova-Chesterova choroba</td>\n <td>\n <ul>\n <li>Zriedkavá non-Langerhansová histiocytóza</li>\n <li>Multisystémové ochorenie s možným postihnutím ciev</li>\n <li>Infiltrácia tkanív penistými histiocytmi</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>PET-CT</li>\n <li>MRI mozgu a dlhých kostí</li>\n <li>Biopsia postihnutého tkaniva</li>\n <li>Genetické testovanie (BRAF V600E mutácia)</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>BRAF inhibítory (vemurafenib) pri pozitívnej mutácii</li>\n <li>Interferón alfa</li>\n <li>Chemoterapia (kladribin)</li>\n <li>Imunoterapia (tocilizumab)</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Segmentálna arteriálna mediolýza (SAM)</td>\n <td>\n <ul>\n <li>Niezápalová arteriopatia</li>\n <li>Postihuje viscerálne artérie</li>\n <li>Charakteristická lýza médie arterálnej steny</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>CT angiografia</li>\n <li>MR angiografia</li>\n <li>Konvenčná angiografia</li>\n <li>Vylúčenie vaskulitíd a fibromuskulárnej dysplázie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Konzervatívny postup pri asymptomatických prípadoch</li>\n <li>Endovaskulárna embolizácia pri krvácaní</li>\n <li>Chirurgická intervencia pri rozsiahlom postihnutí</li>\n <li>Dlhodobé sledovanie</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Syndróm entrapmentu a. poplitea</td>\n <td>\n <ul>\n <li>Kompresia a. poplitea okolitými štruktúrami</li>\n <li>Najčastejšie u mladých atletických jedincov</li>\n <li>Klasifikácia podľa Rich and Hughes:\n <ul>\n <li>Typ I: Mediálna deviácia a. poplitea</li>\n <li>Typ II: Laterálne uloženie m. gastrocnemius medialis</li>\n <li>Typ III: Abnormálny svalový zväzok</li>\n <li>Typ IV: Distálnejšie uloženie a. poplitea</li>\n <li>Typ V: Akákoľvek kombinácia typov I-IV</li>\n <li>Typ VI: Funkčný entrapment</li>\n </ul>\n </li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Duplexná ultrasonografia v pokoji a pri plantárnej flexii</li>\n <li>CT angiografia s 3D rekonštrukciou</li>\n <li>MR angiografia</li>\n <li>Konvenčná angiografia v rôznych polohách nohy</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Chirurgická dekompresia\n <ul>\n <li>Myotómia m. gastrocnemius medialis</li>\n <li>Resekcia fibróznych pruhov alebo abnormálnych svalov</li>\n </ul>\n </li>\n <li>Rekonštrukcia a. poplitea pri trombóze alebo aneuryzme</li>\n <li>Endovaskulárna liečba pri reziduálnych stenózach</li>\n <li>Trombolýza pri akútnej trombóze</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Cushingov syndróm cievneho pôvodu</td>\n <td>\n <ul>\n <li>Zriedkavá príčina Cushingovho syndrómu</li>\n <li>Spôsobený ektopickou produkciou ACTH v cievnej stene</li>\n <li>Najčastejšie asociovaný s neuroendokrinnými nádormi</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Endokrinologické testy (dexametazónový supresný test)</li>\n <li>CT alebo MRI na lokalizáciu nádoru</li>\n <li>PET-CT s použitím špecifických rádioligandov</li>\n <li>Selektívny odber krvi z venóznych sinusov</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Chirurgická resekcia nádoru</li>\n <li>Farmakologická blokáda steroidogenézy</li>\n <li>Rádioterapia pri neresekabilných nádoroch</li>\n <li>Bilaterálna adrenalektómia v refraktérnych prípadoch</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Syndróm modrej prstovcovitej membrány (Blue rubber bleb nevus syndrome)</td>\n <td>\n <ul>\n <li>Zriedkavé vrodené ochorenie charakterizované mnohopočetnými venóznymi malformáciami</li>\n <li>Postihuje kožu a gastrointestinálny trakt</li>\n <li>Môže viesť k chronickému krvácaniu a anémii</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Klinické vyšetrenie kože</li>\n <li>Endoskopia GIT-u</li>\n <li>MRI na určenie rozsahu postihnutia</li>\n <li>Genetické testovanie (mutácia TEK génu)</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Konzervatívna liečba anémie (suplementácia železa)</li>\n <li>Endoskopická ablácia lézií v GIT-e</li>\n <li>Chirurgická excízia významných kožných lézií</li>\n <li>Systémová liečba (sirolimus) pri rozsiahom postihnutí</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Retiformná hemangioendoteliomatóza</td>\n <td>\n <ul>\n <li>Zriedkavý vaskulárny nádor s nízkym až stredným stupňom malignity</li>\n <li>Typicky postihuje kožu a podkožie končatín</li>\n <li>Charakteristický sieťovitý (retiformný) rast</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Histopatologické vyšetrenie biopsie</li>\n <li>Imunohistochemické farbenie (CD31, CD34)</li>\n <li>MRI na určenie rozsahu postihnutia</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Širšia chirurgická excízia s bezpečnostnými okrajmi</li>\n <li>Rádioterapia pri neresekabilných léziách</li>\n <li>Chemoterapia pri metastatickom ochorení</li>\n <li>Dlhodobé sledovanie pre riziko recidívy</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Kryoglobulinémia asociovaná s vaskulitídou</td>\n <td>\n <ul>\n <li>Systémové ochorenie charakterizované prítomnosťou kryoglobulínov v sére</li>\n <li>Môže viesť k vaskulitíde malých a stredných ciev</li>\n <li>Často asociovaná s infekciami (hepatitída C) alebo autoimunitnými ochoreniami</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Kryoglobulíny v sére</li>\n <li>Komplement, reumatoidný faktor</li>\n <li>Sérologické testy na hepatitídu C</li>\n <li>Biopsia postihnutého orgánu (najčastejšie koža alebo obličky)</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Liečba základného ochorenia (napr. antivirotiká pri HCV)</li>\n <li>Imunosupresívna liečba (kortikosteroidy, rituximab)</li>\n <li>Plazmaferéza pri ťažkých prípadoch</li>\n <li>Symptomatická liečba (analgetiká, antihistaminiká)</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="kalkulacka"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[37.6875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(743px,auto)_1fr] max-lg:px-4 lg:min-h-[52.6875rem] lg:max-w-[76.5rem] lg:grid-cols-[33.6601%_32.6797%_33.6601%] lg:grid-rows-[minmax(64px,auto)_minmax(714px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zDhFs8"
                    height="669"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Komplexná BMI kalkulačka</title>\n \n\n\n <div class="container">\n <h1>Komplexná BMI kalkulačka</h1>\n <form id="bmiForm">\n <label for="gender">Pohlavie:</label>\n <select id="gender" required>\n <option value="">Vyberte pohlavie</option>\n <option value="male">Muž</option>\n <option value="female">Žena</option>\n </select>\n\n <label for="age">Vek (roky):</label>\n <input type="number" id="age" required min="1" max="120" step="1">\n\n <label for="height">Výška (cm):</label>\n <input type="number" id="height" required min="1" step="0.1">\n\n <label for="weight">Váha (kg):</label>\n <input type="number" id="weight" required min="1" step="0.1">\n\n <label for="waist">Obvod pásu (cm): <span class="note">(voliteľné)</span></label>\n <input type="number" id="waist" min="1" step="0.1">\n\n <label for="neck">Obvod krku (cm): <span class="note">(voliteľné)</span></label>\n <input type="number" id="neck" min="1" step="0.1">\n\n <div id="hipField" style="display: none;">\n <label for="hip">Obvod bokov (cm): <span class="note">(voliteľné)</span></label>\n <input type="number" id="hip" min="1" step="0.1">\n </div>\n\n <button type="submit">Vypočítať</button>\n </form>\n <div id="result"></div>\n </div>\n\n \n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="klasifikacie"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[166.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(3921px,auto)_1fr] max-lg:px-4 lg:min-h-[159.5625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(80px,auto)_minmax(2415px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zMCjQR"
                    height="2350"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Cievne klasifikácie - klinický prehľad</title>\n \n\n\n <h1>Cievne klasifikácie - klinický prehľad</h1>\n\n <!-- Fontainova klasifikácia -->\n <div class="classification">\n <h2>Fontainova klasifikácia</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Štádium</th>\n <th>Popis</th>\n <th>Klinické prejavy</th>\n <th>Diagnostické a liečebné úvahy</th>\n </tr>\n <tr>\n <td>I</td>\n <td>Asymptomatické</td>\n <td>Bez symptómov, objektívne zistiteľné cievne zmeny</td>\n <td>\n <ul>\n <li>Sledovanie pacienta</li>\n <li>Úprava rizikových faktorov</li>\n <li>ABI (Ankle-Brachial Index) vyšetrenie</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>II</td>\n <td>Klaudikácie</td>\n <td>\n <ul>\n <li>IIa: klaudikačná vzdialenosť > 200 m</li>\n <li>IIb: klaudikačná vzdialenosť < 200 m</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Tréning chôdze</li>\n <li>Farmakoterapia (vazodilatanciá)</li>\n <li>Zvážiť angiografiu a revaskularizáciu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>Ischemická bolesť v pokoji</td>\n <td>Nočné bolesti, bolesti pri elevácii končatiny</td>\n <td>\n <ul>\n <li>Urgentné angiografické vyšetrenie</li>\n <li>Revaskularizácia (endovaskulárna alebo chirurgická)</li>\n <li>Intenzívna analgetická liečba</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IV</td>\n <td>Nekróza/gangréna</td>\n <td>Trofické kožné zmeny, ulcerácie, gangréna</td>\n <td>\n <ul>\n <li>Urgentná revaskularizácia</li>\n <li>Lokálna liečba defektov</li>\n <li>V prípade neúspechu zvážiť amputáciu</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- Rutherfordova klasifikácia akútnej končatinovej ischémie -->\n <div class="classification">\n <h2>Rutherfordova klasifikácia akútnej končatinovej ischémie</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Kategória</th>\n <th>Príznaky</th>\n <th>Riziko pre končatinu</th>\n <th>Odporúčaný postup</th>\n </tr>\n <tr>\n <td>I</td>\n <td>\n <ul>\n <li>Žiadna senzorická strata</li>\n <li>Žiadna svalová slabosť</li>\n <li>Arteriálny dopplerovský signál počuteľný</li>\n </ul>\n </td>\n <td>Žiadne bezprostredné riziko</td>\n <td>\n <ul>\n <li>Monitorovanie pacienta</li>\n <li>Zvážiť antikoagulačnú liečbu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IIa</td>\n <td>\n <ul>\n <li>Mierna senzorická strata v prstoch</li>\n <li>Žiadna svalová slabosť</li>\n <li>Arteriálny dopplerovský signál nepočuteľný</li>\n </ul>\n </td>\n <td>Riziko pri oneskorenej liečbe (>6-8 hodín)</td>\n <td>\n <ul>\n <li>Urgentná angiografia</li>\n <li>Zvážiť trombolýzu alebo mechanickú trombektómiu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IIb</td>\n <td>\n <ul>\n <li>Senzorická strata presahujúca prsty</li>\n <li>Mierna až stredná svalová slabosť</li>\n <li>Arteriálny aj venózny dopplerovský signál nepočuteľný</li>\n </ul>\n </td>\n <td>Bezprostredné riziko, potrebná okamžitá revaskularizácia</td>\n <td>\n <ul>\n <li>Okamžitý chirurgický zákrok</li>\n <li>Možnosť embolektómie alebo bypassu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>\n <ul>\n <li>Hlboká anestézia</li>\n <li>Výrazná svalová slabosť alebo rigor</li>\n <li>Absencia dopplerovských signálov</li>\n </ul>\n </td>\n <td>Vysoké riziko nezvratného poškodenia</td>\n <td>\n <ul>\n <li>Amputácia je často nevyhnutná</li>\n <li>Intenzívna podporná liečba</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- Wagner-Meggitt klasifikácia diabetickej nohy -->\n <div class="classification">\n <h2>Wagner-Meggitt klasifikácia diabetickej nohy</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Stupeň</th>\n <th>Popis</th>\n <th>Liečebné úvahy</th>\n </tr>\n <tr>\n <td>0</td>\n <td>Bez otvorenej lézie, môže byť prítomná deformita alebo celulitída</td>\n <td>\n <ul>\n <li>Prevencia ulcerácií</li>\n <li>Ortopedická obuv</li>\n <li>Pravidelné kontroly</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>1</td>\n <td>Povrchový vred bez poškodenia hlbokých tkanív</td>\n <td>\n <ul>\n <li>Lokálna liečba rany</li>\n <li>Odľahčenie tlaku na postihnuté miesto</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>2</td>\n <td>Hlboký vred prenikajúci do šliach alebo kĺbového puzdra</td>\n <td>\n <ul>\n <li>Debridement rany</li>\n <li>Antibiotická liečba</li>\n <li>Hospitalizácia môže byť potrebná</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>3</td>\n <td>Hlboký vred s abscesom, osteomyelitídou alebo infekciou kĺbu</td>\n <td>\n <ul>\n <li>Intenzívna antibiotická liečba</li>\n <li>Chirurgický zákrok na odstránenie nekrotického tkaniva</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>4</td>\n <td>Lokalizovaná gangréna prednej časti nohy alebo päty</td>\n <td>\n <ul>\n <li>Čiastočná amputácia</li>\n <li>Stabilizácia systémových príznakov</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>5</td>\n <td>Gangréna celej nohy</td>\n <td>\n <ul>\n <li>Amputácia nad členkom</li>\n <li>Rehabilitácia a protetika</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- Klasifikácia podľa Widmera -->\n <div class="classification">\n <h2>Klasifikácia podľa Widmera</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Stupeň</th>\n <th>Popis</th>\n <th>Diagnostické úvahy</th>\n </tr>\n <tr>\n <td>I</td>\n <td>Corona phlebectatica paraplantaris (rozšírené žilky v okolí členku), prítomný edém</td>\n <td>\n <ul>\n <li>Často prvé príznaky chronickej žilovej insuficiencie</li>\n <li>Odporúča sa kompresná terapia</li>\n <li>Dopplerovské vyšetrenie pre hodnotenie venózneho systému</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>II</td>\n <td>Hyperpigmentácie, lipodermatoskleróza</td>\n <td>\n <ul>\n <li>Zvýšené riziko vzniku vredov</li>\n <li>Potrebná intenzívna kompresná terapia</li>\n <li>Možnosť farmakoterapie (venotoniká)</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>Aktívny alebo zhojený ulcus cruris venosum</td>\n <td>\n <ul>\n <li>Dlhodobá liečba vredov</li>\n <li>Multidisciplinárny prístup (dermatológ, angiológ)</li>\n <li>Prevencia recidív pomocou kompresnej terapie</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="zcX5RS"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[187.375rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(3041px,auto)_1fr] max-lg:px-4 lg:min-h-[136.75rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(64px,auto)_minmax(2135px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zXjNnY"
                    height="2090"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Cievne klasifikácie - klinický prehľad</title>\n \n\n\n <h1>Cievne klasifikácie - klinický prehľad</h1>\n\n <!-- Klasifikácia podľa Giangiho a Valentiniho -->\n <div class="classification">\n <h2>Klasifikácia podľa Giangiho a Valentiniho</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Kategória</th>\n <th>Popis</th>\n <th>Diagnostické úvahy</th>\n </tr>\n <tr>\n <td>I</td>\n <td>Teleangiektázie alebo retikulárne žily</td>\n <td>\n <ul>\n <li>Estetický problém</li>\n <li>Možnosť skleroterapie</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IIa</td>\n <td>Varikózne žily bez kožných zmien</td>\n <td>\n <ul>\n <li>Príznaky: pocit ťažkých nôh, únava</li>\n <li>Dopplerovské vyšetrenie pre hodnotenie refluxu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IIb</td>\n <td>Varikózne žily s edémom</td>\n <td>\n <ul>\n <li>Edém zhoršujúci sa počas dňa</li>\n <li>Kompresná terapia odporúčaná</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IIc</td>\n <td>Varikózne žily s trofickými kožnými zmenami</td>\n <td>\n <ul>\n <li>Pigmentácie, lipodermatoskleróza</li>\n <li>Riziko vzniku vredov</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>Aktívny alebo zhojený venózny vred</td>\n <td>\n <ul>\n <li>Dlhodobá liečba potrebná</li>\n <li>Multidisciplinárny prístup</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- Klasifikácia podľa Brewstera -->\n <div class="classification">\n <h2>Klasifikácia podľa Brewstera</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Kategória</th>\n <th>Popis lézie</th>\n <th>Liečebné úvahy</th>\n </tr>\n <tr>\n <td>I</td>\n <td>Fokálna stenóza alebo krátka oklúzia (< 3 cm) aorty alebo iliackých artérií</td>\n <td>\n <ul>\n <li>Endovaskulárna liečba (angioplastika, stent)</li>\n <li>Minimálne invazívny prístup</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>II</td>\n <td>Unilaterálna oklúzia spoločnej iliackej artérie</td>\n <td>\n <ul>\n <li>Možná endovaskulárna liečba</li>\n <li>Zvážiť bypass pri neúspechu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>Bilaterálna oklúzia spoločných iliackých artérií alebo bilaterálna stenóza vonkajších iliackých artérií</td>\n <td>\n <ul>\n <li>Komplexnejšia intervencia</li>\n <li>Možnosť aortobiiliackého bypassu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IV</td>\n <td>Difúzna, multisegmentálna stenóza aorty a oboch iliackých artérií alebo oklúzia aorty zasahujúca renálne artérie aj iliackú bifurkáciu</td>\n <td>\n <ul>\n <li>Chirurgická liečba preferovaná</li>\n <li>Vyššie riziko komplikácií</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- VASCUNET klasifikácia aneuryziem brušnej aorty -->\n <div class="classification">\n <h2>VASCUNET klasifikácia aneuryziem brušnej aorty</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Kategória</th>\n <th>Typ aneuryzmy</th>\n <th>Liečebné úvahy</th>\n </tr>\n <tr>\n <td>A</td>\n <td>Infrarenálna AAA s dostatočným proximálnym krčkom (> 10 mm)</td>\n <td>\n <ul>\n <li>Vhodná pre endovaskulárnu opravu (EVAR)</li>\n <li>Nižšie operačné riziko</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>B</td>\n <td>Infrarenálna AAA s krátkym proximálnym krčkom (< 10 mm)</td>\n <td>\n <ul>\n <li>Zvážiť špeciálne stentgrafty</li>\n <li>Možná otvorená chirurgia</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>C</td>\n <td>Juxtarenálna AAA</td>\n <td>\n <ul>\n <li>Komplexnejšia endovaskulárna liečba</li>\n <li>Možnosť fenestrovaných stentgraftov</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>D</td>\n <td>Pararenálna AAA</td>\n <td>\n <ul>\n <li>Vyžaduje pokročilé endovaskulárne techniky</li>\n <li>Alternatívne otvorená chirurgia</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>E</td>\n <td>Suprarenálna alebo torakoabdominálna AAA</td>\n <td>\n <ul>\n <li>Vysokorizikový chirurgický zákrok</li>\n <li>Multidisciplinárny tím potrebný</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n <div class="category">Poznámky pre diagnostiku:</div>\n <ul>\n <li><strong>CT angiografia:</strong> Nevyhnutná pre plánovanie liečby.</li>\n <li><strong>Rizikové faktory:</strong> Vek, fajčenie, hypertenzia.</li>\n <li><strong>Sledovanie veľkosti aneuryzmy:</strong> Indikácia na operáciu pri priemere > 5,5 cm.</li>\n </ul>\n </div>\n </div>\n\n <!-- Klasifikácia karotických plakov podľa Graya-Weala -->\n <div class="classification">\n <h2>Klasifikácia karotických plakov podľa Graya-Weala</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Kategória</th>\n <th>Popis plaku</th>\n <th>Diagnostické a liečebné úvahy</th>\n </tr>\n <tr>\n <td>I</td>\n <td>Predominantne echolucentný plak s tenkou echogénnou kapsulou</td>\n <td>\n <ul>\n <li>Vysoké riziko embolizácie</li>\n <li>Zvážiť chirurgickú intervenciu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>II</td>\n <td>Prevažne echolucentné lézie s menej ako 25% echogénnych oblastí</td>\n <td>\n <ul>\n <li>Stredne vysoké riziko</li>\n <li>Monitorovanie a možná intervencia</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>Prevažne echogénne lézie s menej ako 25% echolucentných oblastí</td>\n <td>\n <ul>\n <li>Nižšie riziko</li>\n <li>Medikamentózna liečba</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IV</td>\n <td>Uniformne echogénne lézie (homogénne, denzné)</td>\n <td>\n <ul>\n <li>Nízke riziko ruptúry</li>\n <li>Pravidelné sledovanie</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>V</td>\n <td>Neklasifikovateľné lézie vzhľadom na vysoký stupeň kalcifikácie a akustický tieň</td>\n <td>\n <ul>\n <li>Obtiažna interpretácia ultrazvuku</li>\n <li>Zvážiť CT angiografiu</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n <div class="category">Poznámky pre diagnostiku:</div>\n <ul>\n <li><strong>Dopplerovské ultrazvukové vyšetrenie:</strong> Prvá línia diagnostiky.</li>\n <li><strong>CT/MR angiografia:</strong> Pre detailnejšie zobrazenie a plánovanie intervencie.</li>\n <li><strong>Rizikové faktory:</strong> Hypertenzia, hyperlipidémia, fajčenie.</li>\n </ul>\n </div>\n </div>\n\n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="z9ibAZ"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[114.25rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(1989px,auto)_minmax(432px,auto)_minmax(216px,auto)_minmax(2185px,auto)_minmax(461px,auto)_minmax(139px,auto)_minmax(662px,auto)_1fr] max-lg:px-4 lg:min-h-[473.5rem] lg:max-w-[76.5rem] lg:grid-cols-[6.45425%_1.96078%_8.41503%_66.3399%_8.41503%_3.10458%_5.31046%] lg:grid-rows-[minmax(80px,auto)_minmax(3120px,auto)_minmax(87px,auto)_minmax(633px,auto)_minmax(79px,auto)_minmax(2601px,auto)_minmax(74px,auto)_minmax(1073px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-8 lg:col-start-4 lg:col-end-5 lg:row-end-3">
                  <div
                    id="zfIJcZ"
                    height="3075"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Cievne klasifikácie - klinický prehľad</title>\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n \n\n\n <h1>Cievne klasifikácie - klinický prehľad</h1>\n\n <!-- CEAP klasifikácia chronickej venóznej insuficiencie -->\n <div class="classification">\n <h2>CEAP klasifikácia chronickej venóznej insuficiencie</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Kategória</th>\n <th>Klasifikácia</th>\n <th>Diagnostické úvahy</th>\n <th>Liečba</th>\n </tr>\n <tr>\n <td>C (Klinické prejavy)</td>\n <td>\n C0: Žiadne viditeľné znaky<br>\n C1: Teleangiektázie, retikulárne žily<br>\n C2: Varikózne žily<br>\n C3: Edém<br>\n C4a: Pigmentácia alebo ekzém<br>\n C4b: Lipodermatoskleróza alebo atrophie blanche<br>\n C5: Zahojený venózny vred<br>\n C6: Aktívny venózny vred\n </td>\n <td>\n <ul>\n <li>Vizuálne a palpačné vyšetrenie</li>\n <li>Fotodokumentácia pre sledovanie progresie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>C0-C1: Preventívne opatrenia, kompresia</li>\n <li>C2-C3: Skleroterapia, endovenózna ablácia</li>\n <li>C4-C6: Intenzívna kompresná terapia, chirurgická intervencia</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>E (Etiológia)</td>\n <td>\n Ec: Kongenitálna<br>\n Ep: Primárna<br>\n Es: Sekundárna (post-trombotická)<br>\n En: Žiadna venózna príčina identifikovaná\n </td>\n <td>\n <ul>\n <li>Anamnéza pacienta</li>\n <li>Rodinná anamnéza</li>\n <li>Ultrazvukové vyšetrenie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Ec: Špecializovaná liečba podľa typu malformácie</li>\n <li>Ep: Konzervatívna alebo intervenčná liečba podľa závažnosti</li>\n <li>Es: Antikoagulačná terapia, kompresná liečba</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>A (Anatomická distribúcia)</td>\n <td>\n As: Povrchové žily<br>\n Ad: Hlboké žily<br>\n Ap: Perforátory<br>\n An: Žiadna venózna lokalizácia identifikovaná\n </td>\n <td>\n <ul>\n <li>Duplexná ultrasonografia</li>\n <li>Venografia (v indikovaných prípadoch)</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>As: Skleroterapia, endovenózna ablácia</li>\n <li>Ad: Antikoagulačná terapia, trombolýza</li>\n <li>Ap: Subfasciálna endoskopická perforátorová disekcia</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>P (Patofyziológia)</td>\n <td>\n Pr: Reflux<br>\n Po: Obštrukcia<br>\n Pr,o: Reflux a obštrukcia<br>\n Pn: Žiadna venózna patofyziológia identifikovaná\n </td>\n <td>\n <ul>\n <li>Duplexná ultrasonografia s Valsalvovým manévrom</li>\n <li>Pletyzmografia</li>\n <li>CT alebo MR venografia pri podozrení na obštrukciu</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Pr: Endovenózna ablácia, chirurgický stripping</li>\n <li>Po: Angioplastika, stenting</li>\n <li>Pr,o: Kombinovaná liečba refluxu a obštrukcie</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- EHIT klasifikácia -->\n <div class="classification">\n <h2>EHIT (Endovenous heat-induced thrombosis) klasifikácia</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Trieda</th>\n <th>Popis</th>\n <th>Diagnostické úvahy</th>\n <th>Liečba</th>\n </tr>\n <tr>\n <td>Trieda 1</td>\n <td>Trombus zasahuje do hlbokého venózneho systému, ale nezužuje lúmen viac ako 25%</td>\n <td>\n <ul>\n <li>Ultrazvukové vyšetrenie s farebným Dopplerom</li>\n <li>Sledovanie progresie trombu</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Sledovanie bez antikoagulácie</li>\n <li>Kompresia</li>\n <li>Kontrola po 1 týždni</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Trieda 2</td>\n <td>Trombus zužuje lúmen hlbokej žily o 25-50%</td>\n <td>\n <ul>\n <li>Pravidelné ultrazvukové kontroly</li>\n <li>Hodnotenie rizika progresie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Profylaktická dávka LMWH</li>\n <li>Kompresia</li>\n <li>Kontrola po 1-2 týždňoch</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Trieda 3</td>\n <td>Trombus zužuje lúmen hlbokej žily o viac ako 50%</td>\n <td>\n <ul>\n <li>Urgentné ultrazvukové vyšetrenie</li>\n <li>Vylúčenie proximálnej extenzie trombu</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Terapeutická antikoagulácia (LMWH alebo DOAC)</li>\n <li>Intenzívna kompresia</li>\n <li>Častá ultrazvuková kontrola</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Trieda 4</td>\n <td>Kompletná oklúzia hlbokej žily</td>\n <td>\n <ul>\n <li>Kompletné venózne mapovanie</li>\n <li>Vylúčenie pľúcnej embólie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Hospitalizácia</li>\n <li>Intenzívna antikoagulačná liečba</li>\n <li>Zváženie trombolýzy</li>\n <li>Dlhodobá antikoagulácia a sledovanie</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n </div>\n\n <!-- Crawford klasifikácia torakoabdominálnych aneuryziem -->\n <div class="classification">\n <h2>Crawford klasifikácia torakoabdominálnych aneuryziem</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Typ</th>\n <th>Lokalizácia aneuryzmy</th>\n <th>Diagnostické úvahy</th>\n <th>Liečba</th>\n </tr>\n <tr>\n <td>Typ I</td>\n <td>Od ľavej a. subclavia po suprarenálnu aortu</td>\n <td>\n <ul>\n <li>Ohrozenie perfúzie viscerálnych orgánov</li>\n <li>Zvážiť CT angiografiu pre detailné zobrazenie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Otvorená chirurgická náhrada</li>\n <li>Hybridná liečba (stentgraft + debranching)</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Typ II</td>\n <td>Od ľavej a. subclavia po aortálnu bifurkáciu</td>\n <td>\n <ul>\n <li>Najrozsiahlejší typ, zahŕňa celú hrudnú a brušnú aortu</li>\n <li>Vysoké riziko chirurgického zákroku</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Komplexná otvorená chirurgia</li>\n <li>Staged procedures</li>\n <li>Zváženie fenestrovaného/vetveného stentgraftu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Typ III</td>\n <td>Od 6. interkostálneho priestoru po aortálnu bifurkáciu</td>\n <td>\n <ul>\n <li>Zahŕňa distálnu hrudnú a celú brušnú aortu</li>\n <li>Dôležité monitorovať renálnu funkciu</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Otvorená chirurgická náhrada</li>\n <li>Endovaskulárna liečba s rekonštrukciou viscerálnych vetiev</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Typ IV</td>\n <td>Od bránice po aortálnu bifurkáciu</td>\n <td>\n <ul>\n <li>Obmedzené na brušnú aortu</li>\n <li>Možná endovaskulárna liečba</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Endovaskulárna liečba (EVAR)</li>\n <li>Otvorená chirurgická náhrada pri nevhodnej anatómii</li>\n </ul>\n </td>\n\n </tr>\n <tr>\n <td>Typ V</td>\n <td>Od 6. interkostálneho priestoru po renálne artérie</td>\n <td>\n <ul>\n <li>Zahŕňa distálnu hrudnú aortu a proximálnu brušnú aortu</li>\n <li>Riziko ischémie miechy</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Otvorená chirurgická náhrada</li>\n <li>Hybridná liečba (TEVAR + viscerálny debranching)</li>\n <li>Zváženie fenestrovaného TEVAR</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n <div class="category">Poznámky pre diagnostiku:</div>\n <ul>\n <li><strong>CT/MRI angiografia:</strong> Základná pre plánovanie chirurgického zákroku.</li>\n <li><strong>Monitorovanie symptómov:</strong> Bolesť v hrudníku alebo bruchu, dyspnoe.</li>\n <li><strong>Rizikové faktory:</strong> Hypertenzia, ateroskleróza, genetické syndrómy.</li>\n </ul>\n </div>\n </div>\n\n <!-- ISL klasifikácia lymfedému -->\n <div class="classification">\n <h2>ISL klasifikácia lymfedému</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Štádium</th>\n <th>Charakteristika</th>\n <th>Diagnostické úvahy</th>\n <th>Liečba</th>\n </tr>\n <tr>\n <td>Štádium 0 (latentné)</td>\n <td>Subklinické štádium, bez viditeľného edému, môžu byť prítomné subjektívne príznaky</td>\n <td>\n <ul>\n <li>Pacient môže pociťovať ťažobu alebo napätie</li>\n <li>Lymfoscintigrafia môže odhaliť funkčné zmeny</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Preventívne opatrenia</li>\n <li>Edukácia pacienta</li>\n <li>Cvičenie a starostlivosť o kožu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Štádium I (reverzibilné)</td>\n <td>Mäkký edém, ktorý ustúpi po elevácii končatiny</td>\n <td>\n <ul>\n <li>Edém sa zhoršuje počas dňa</li>\n <li>Odporúča sa kompresná terapia</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Kompresná terapia</li>\n <li>Manuálna lymfodrenáž</li>\n <li>Cvičenie a starostlivosť o kožu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Štádium IIa (spontánne ireverzibilné)</td>\n <td>Mäkký edém s počiatočnou fibrotizáciou tkaniva</td>\n <td>\n <ul>\n <li>Edém neustúpi úplne po elevácii</li>\n <li>Kompresná terapia a manuálna lymfodrenáž</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Intenzívna dekongestívna terapia</li>\n <li>Kompresné bandážovanie</li>\n <li>Pneumatická kompresia</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Štádium IIb (spontánne ireverzibilné)</td>\n <td>Edém s výraznejšou fibrotizáciou, začínajúce trofické zmeny kože</td>\n <td>\n <ul>\n <li>Koža je tvrdšia, možné zápaly</li>\n <li>Potrebná intenzívna lymfologická liečba</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Komplexná dekongestívna terapia</li>\n <li>Liečba kožných komplikácií</li>\n <li>Zváženie chirurgických metód</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Štádium III (lymfostatická elefantiáza)</td>\n <td>Tuhý edém s výraznými trofickými zmenami kože (fibróza, hyperkeratóza, papilomatóza)</td>\n <td>\n <ul>\n <li>Výrazná deformita končatiny</li>\n <li>Zvýšené riziko infekcií (eryzipel)</li>\n <li>Možnosť chirurgických intervencií</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Intenzívna komplexná dekongestívna terapia</li>\n <li>Chirurgické metódy (liposukcia, excízia)</li>\n <li>Prevencia a liečba infekcií</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n <div class="category">Poznámky pre diagnostiku:</div>\n <ul>\n <li><strong>Diferenciálna diagnostika:</strong> Vylúčiť venóznu insuficienciu, lipedém, hlbokú žilovú trombózu.</li>\n <li><strong>Lymfoscintigrafia:</strong> Zobrazenie lymfatického systému a funkcie.</li>\n <li><strong>Bioimpedancia:</strong> Môže pomôcť kvantifikovať tekutinový obsah tkanív.</li>\n </ul>\n </div>\n </div>\n\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-3 max-lg:row-end-6 lg:col-start-4 lg:col-end-5 lg:row-start-6 lg:row-end-7">
                  <div
                    id="z0ErO7"
                    height="2556"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <title>Klasifikácie arteriovenóznych malformácií</title>\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n \n\n\n <h1>Klasifikácie arteriovenóznych malformácií</h1>\n\n <h2>1. Schobingerova klasifikácia</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Štádium</th>\n <th>Názov</th>\n <th>Charakteristika</th>\n <th>Klinické prejavy</th>\n <th>Odporúčaná liečba</th>\n </tr>\n <tr>\n <td>I</td>\n <td>Quiescence (Kľud)</td>\n <td>\n <ul>\n <li>Ružová škvrna na koži</li>\n <li>Arteriovenózny skrat nie je klinicky zjavný</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Asymptomatické</li>\n <li>Možná mierna hyperémia</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Observácia</li>\n <li>Pravidelné sledovanie</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>II</td>\n <td>Expansion (Expanzia)</td>\n <td>\n <ul>\n <li>Zväčšenie lézie</li>\n <li>Pulzácie, šelesty</li>\n <li>Tortuózne žily</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Možná bolesť</li>\n <li>Začínajúce funkčné obmedzenie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Selektívna embolizácia</li>\n <li>Skleroterapia</li>\n <li>Zváženie chirurgickej resekcie</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>III</td>\n <td>Destruction (Deštrukcia)</td>\n <td>\n <ul>\n <li>Extenzívny rast lézie</li>\n <li>Deštrukcia okolitých tkanív</li>\n <li>Kožné zmeny (ulcerácie, nekróza)</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Výrazná bolesť</li>\n <li>Krvácanie</li>\n <li>Funkčné obmedzenie</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Agresívna embolizácia</li>\n <li>Chirurgická resekcia</li>\n <li>Kombinovaná liečba</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>IV</td>\n <td>Decompensation (Dekompenzácia)</td>\n <td>\n <ul>\n <li>Zlyhávanie srdca v dôsledku vysokého prietoku</li>\n <li>Rozsiahle tkanivové zmeny</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Kardiálne zlyhávanie</li>\n <li>Ischémia distálne od lézie</li>\n <li>Rozsiahle nekrózy</li>\n </ul>\n </td>\n <td>\n <ul>\n <li>Urgentná embolizácia</li>\n <li>Amputácia pri rozsiahlom postihnutí končatiny</li>\n <li>Multidisciplinárny prístup</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n\n <h2>2. Klasifikácia podľa pôvodu (Embryologická klasifikácia)</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Typ</th>\n <th>Charakteristika</th>\n </tr>\n <tr>\n <td>Trunculárne AVM</td>\n <td>\n <ul>\n <li>Vznikajú v neskorších štádiách vaskulogenézy</li>\n <li>Postihujú veľké cievy</li>\n <li>Častejšie spôsobujú hemodynamické problémy</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Extratrunckulárne AVM</td>\n <td>\n <ul>\n <li>Vznikajú v skorších štádiách vaskulogenézy</li>\n <li>Postihujú menšie cievy a kapiláry</li>\n <li>Môžu mať infiltratívny charakter</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n\n <h2>3. Klasifikácia podľa prevládajúcej zložky (Angiografická klasifikácia)</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Typ</th>\n <th>Charakteristika</th>\n </tr>\n <tr>\n <td>Arteriálny typ</td>\n <td>\n <ul>\n <li>Prevládajú dilatované prívodné artérie</li>\n <li>Rýchly prietok krvi</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Venózny typ</td>\n <td>\n <ul>\n <li>Prevládajú dilatované odvodné vény</li>\n <li>Pomalší prietok krvi</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td>Zmiešaný typ</td>\n <td>\n <ul>\n <li>Kombinácia arteriálnych a venóznych komponentov</li>\n <li>Variabilný prietok krvi</li>\n </ul>\n </td>\n </tr>\n </tbody></table>\n </div>\n\n <h2>4. Klasifikácia podľa angioarchitektúry (Yakes klasifikácia)</h2>\n <div class="table-container">\n <table class="yakes-table">\n <tbody><tr>\n <th>Typ</th>\n <th>Charakteristika</th>\n <th>Schéma</th>\n </tr>\n <tr>\n <td>Typ I</td>\n <td>Priama arteriovenózna fistula</td>\n <td>\n <div class="schema">\n <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">\n <defs>\n <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">\n <polygon points="0 0, 10 3.5, 0 7"></polygon>\n </marker>\n </defs>\n <path d="M70 75 Q200 20 330 75" stroke="red" stroke-width="6" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="50" cy="75" r="15" fill="red"></circle>\n <circle cx="350" cy="75" r="15" fill="blue"></circle>\n <text x="30" y="110" fill="black" font-size="14">Artéria</text>\n <text x="330" y="110" fill="black" font-size="14">Véna</text>\n <text x="160" y="30" fill="black" font-style="italic" font-size="16">Priama fistula</text>\n </svg>\n </div>\n </td>\n </tr>\n <tr>\n <td>Typ II</td>\n <td>Artérie vlievajúce sa do jednej drenážnej vény cez aneuryzmatické spojenie</td>\n <td>\n <div class="schema">\n <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">\n <path d="M70 30 Q150 30 180 75" stroke="red" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M70 75 Q150 75 180 75" stroke="red" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M70 120 Q150 120 180 75" stroke="red" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="200" cy="75" r="30" fill="purple"></circle>\n <path d="M230 75 Q300 75 330 75" stroke="blue" stroke-width="6" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="50" cy="30" r="10" fill="red"></circle>\n <circle cx="50" cy="75" r="10" fill="red"></circle>\n <circle cx="50" cy="120" r="10" fill="red"></circle>\n <circle cx="350" cy="75" r="15" fill="blue"></circle>\n <text x="20" y="140" fill="black" font-size="14">Artérie</text>\n <text x="330" y="100" fill="black" font-size="14">Véna</text>\n <text x="160" y="20" fill="black" font-style="italic" font-size="14">Aneuryzmatické spojenie</text>\n </svg>\n </div>\n </td>\n </tr>\n <tr>\n <td>Typ IIIa</td>\n <td>Nidus s viacerými prívodnými artériami a odvodnými vénami bez dilatácie</td>\n <td>\n <div class="schema">\n <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">\n <path d="M70 30 Q150 30 180 75" stroke="red" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M70 120 Q150 120 180 75" stroke="red" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="200" cy="75" r="25" fill="#ff9999"></circle>\n <path d="M220 60 Q300 30 330 30" stroke="blue" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M220 90 Q300 120 330 120" stroke="blue" stroke-width="4" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="50" cy="30" r="10" fill="red"></circle>\n <circle cx="50" cy="120" r="10" fill="red"></circle>\n <circle cx="350" cy="30" r="10" fill="blue"></circle>\n <circle cx="350" cy="120" r="10" fill="blue"></circle>\n <text x="20" y="140" fill="black" font-size="14">Artérie</text>\n <text x="330" y="140" fill="black" font-size="14">Vény</text>\n <text x="185" y="20" fill="black" font-style="italic" font-size="14">Nidus</text>\n </svg>\n </div>\n </td>\n </tr>\n <tr>\n <td>Typ IIIb</td>\n <td>Nidus s viacerými prívodnými artériami a odvodnými vénami s dilatáciou</td>\n <td>\n <div class="schema">\n <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">\n <path d="M70 30 Q130 30 170 75" stroke="red" stroke-width="6" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M70 120 Q130 120 170 75" stroke="red" stroke-width="6" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="200" cy="75" r="35" fill="#ff6666"></circle>\n <path d="M230 60 Q300 30 330 30" stroke="blue" stroke-width="6" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M230 90 Q300 120 330 120" stroke="blue" stroke-width="6" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="50" cy="30" r="12" fill="red"></circle>\n <circle cx="50" cy="120" r="12" fill="red"></circle>\n <circle cx="350" cy="30" r="12" fill="blue"></circle>\n <circle cx="350" cy="120" r="12" fill="blue"></circle>\n <text x="20" y="140" fill="black" font-size="14">Artérie</text>\n <text x="330" y="140" fill="black" font-size="14">Vény</text>\n <text x="170" y="20" fill="black" font-style="italic" font-size="14">Dilatovaný nidus</text>\n </svg>\n </div>\n </td>\n </tr>\n <tr>\n <td>Typ IV</td>\n <td>Komplexná sieť mikroarteriovenóznych fistúl</td>\n <td>\n <div class="schema">\n <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">\n <path d="M70 30 Q130 30 160 75" stroke="red" stroke-width="3" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M70 120 Q130 120 160 75" stroke="red" stroke-width="3" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="200" cy="75" r="40" fill="#ffcccc"></circle>\n <circle cx="185" cy="60" r="6" fill="#ff9999"></circle>\n <circle cx="215" cy="55" r="6" fill="#ff9999"></circle>\n <circle cx="190" cy="85" r="6" fill="#ff9999"></circle>\n <circle cx="220" cy="80" r="6" fill="#ff9999"></circle>\n <path d="M240 60 Q300 30 330 30" stroke="blue" stroke-width="3" fill="none" marker-end="url(#arrowhead)"></path>\n <path d="M240 90 Q300 120 330 120" stroke="blue" stroke-width="3" fill="none" marker-end="url(#arrowhead)"></path>\n <circle cx="50" cy="30" r="10" fill="red"></circle>\n <circle cx="50" cy="120" r="10" fill="red"></circle>\n <circle cx="350" cy="30" r="10" fill="blue"></circle>\n <circle cx="350" cy="120" r="10" fill="blue"></circle>\n <text x="20" y="140" fill="black" font-size="14">Artérie</text>\n <text x="330" y="140" fill="black" font-size="14">Vény</text>\n <text x="140" y="20" fill="black" font-style="italic" font-size="12">Mikroarteriovenózne fistuly</text>\n </svg>\n </div>\n </td>\n </tr>\n </tbody></table>\n </div>\n <h2>5. Klasifikácia podľa lokalizácie</h2>\n <div class="table-container">\n <table>\n <tbody><tr>\n <th>Lokalizácia</th>\n <th>Príklady</th>\n </tr>\n <tr>\n <td>Hlava a krk</td>\n <td>Intrakraniálne AVM, AVM tváre, AVM jazyka</td>\n </tr>\n <tr>\n <td>Trup</td>\n <td>AVM hrudnej steny, AVM chrbtice</td>\n </tr>\n <tr>\n <td>Končatiny</td>\n <td>AVM horných končatín, AVM dolných končatín</td>\n </tr>\n <tr>\n <td>Viscerálne</td>\n <td>AVM pľúc, AVM pečene, AVM obličiek</td>\n </tr>\n </tbody></table>\n </div>\n\n <div class="note">\n <p>Poznámka: Tieto klasifikácie sa vzájomne dopĺňajú a poskytujú komplexný pohľad na arteriovenózne malformácie. Pre správnu diagnostiku a manažment je dôležité zohľadniť všetky aspekty AVM. Liečba by mala byť vždy individualizovaná na základe konkrétneho typu, lokalizácie a klinického obrazu AVM.</p>\n </div>\n\n <div id="modal">\n <div id="modal-content">\n <span id="close">×</span>\n <div id="modal-svg"></div>\n </div>\n </div>\n\n \n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] row-end-9 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-4 lg:col-start-2 lg:col-end-7 lg:row-start-8 hidden">
                  <div
                    id="z4wgvT"
                    height="1067.859375"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-5 max-lg:row-end-7 lg:col-start-3 lg:col-end-6 lg:row-start-4 lg:row-end-5">
                  <div
                    id="z8Xi2O"
                    height="628.390625"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  >
                    <iframe
                      title="custom code element"
                      className="w-full h-auto inline grid-embed__iframe overflow-clip"
                      srcDoc={
                        '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Lymfedém a súvisiace stavy - Kompaktný prehľad</title>\n \n\n\n <h1>Lymfedém a súvisiace stavy - Kompaktný prehľad</h1>\n <table>\n <thead>\n <tr>\n <th>Typ</th>\n <th>Charakteristika</th>\n <th>Príznaky</th>\n <th>Diagnostika</th>\n <th>Liečba</th>\n </tr>\n </thead>\n <tbody>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Primárny lymfedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Vrodená porucha lymfatického systému</li>\n <li>Podtypy: congenita, praecox, tarda</li>\n <li>Môže byť spojený s genetickými syndrómami</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Opuch končatín, najčastejšie dolných</li>\n <li>Asymetrický opuch</li>\n <li>Ťažké nohy, pocit napätia</li>\n <li>Zhrubnutie kože (fibrózna indurácia)</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Lymfoscintigrafia</li>\n <li>MRI lymfangiografia</li>\n <li>Genetické testovanie</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Komplexná dekongestívna terapia (KDT)</li>\n <li>Manuálna lymfodrenáž</li>\n <li>Kompresívna bandáž a oblečenie</li>\n <li>Cvičenie a starostlivosť o kožu</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Sekundárny lymfedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Získaná porucha lymfatického systému</li>\n <li>Najčastejšie po onkologickej liečbe, traume, infekcii</li>\n <li>Môže postihnúť ktorúkoľvek časť tela</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Postupný opuch postihnutej oblasti</li>\n <li>Pocit ťažoby a napätia</li>\n <li>Obmedzená pohyblivosť</li>\n <li>Zmeny textúry kože</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Anamnéza a klinické vyšetrenie</li>\n <li>Bioimpedancia</li>\n <li>Lymfoscintigrafia</li>\n <li>CT alebo MRI</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Komplexná dekongestívna terapia (KDT)</li>\n <li>Pneumatická kompresia</li>\n <li>Chirurgické metódy (lymfovenózne anastomózy, transfer lymfatických uzlín)</li>\n <li>Liposukcia pri pokročilom lymfedéme</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Lipedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Chronické ochorenie tukového tkaniva</li>\n <li>Postihuje takmer výlučne ženy</li>\n <li>Symetrické ukladanie tuku na dolných končatinách a rukách</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Symetrický opuch nôh, šetrí chodidlá</li>\n <li>Bolestivosť a citlivosť pri dotyku</li>\n <li>Ľahká tvorba modrín</li>\n <li>"Obraz manžetových nohavíc"</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Ultrasonografia</li>\n <li>MRI (odlíšenie od lymfedému)</li>\n <li>Vylúčenie iných príčin opuchu</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Konzervatívna liečba podobná ako pri lymfedéme</li>\n <li>Úprava životného štýlu a diéty</li>\n <li>Liposukcia (tumescentná technika)</li>\n <li>Psychologická podpora</li>\n </ul>\n </td>\n </tr>\n <tr>\n <td data-label="Typ">\n <span class="lymphedema-type">Lipo-lymfedém</span>\n </td>\n <td data-label="Charakteristika">\n <ul>\n <li>Kombinácia lipedému a lymfedému</li>\n <li>Progresívne ochorenie</li>\n <li>Často sa vyvíja u pacientov s dlhodobým lipedémom</li>\n </ul>\n </td>\n <td data-label="Príznaky">\n <ul>\n <li>Výrazný opuch končatín, vrátane chodidiel a rúk</li>\n <li>Ťažká noha/ruka, obmedzená pohyblivosť</li>\n <li>Fibrózne zmeny kože</li>\n <li>Zvýšená náchylnosť na infekcie</li>\n </ul>\n </td>\n <td data-label="Diagnostika">\n <ul>\n <li>Klinické vyšetrenie</li>\n <li>Ultrasonografia</li>\n <li>MRI alebo CT</li>\n <li>Lymfoscintigrafia</li>\n <li>Bioimpedancia</li>\n </ul>\n </td>\n <td data-label="Liečba">\n <ul>\n <li>Komplexná dekongestívna terapia (KDT)</li>\n <li>Intenzívna kompresívna terapia</li>\n <li>Manuálna lymfodrenáž</li>\n <li>Úprava životného štýlu a redukcia hmotnosti</li>\n <li>Chirurgické metódy (kombinované prístupy)</li>\n </ul>\n </td>\n </tr>\n </tbody>\n </table>\n\n\n\n</body>\n</html>'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="opuchykoncatin"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full z-[14] grid mx-auto max-lg:min-h-[214.1875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(2207px,auto)_1fr] max-lg:px-4 lg:min-h-[123.5625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(1824px,auto)_1fr] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              >
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3 hidden">
                  <div
                    id="zRCZuW"
                    height="1799"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
              </div>
            </section>
            <section
              id="z6oDEP"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full z-[14] grid mx-auto max-lg:min-h-[158.8125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(2317px,auto)_1fr] max-lg:px-4 lg:min-h-[129.25rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(64px,auto)_minmax(1951px,auto)_1fr] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              >
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3 hidden">
                  <div
                    id="zrWB-X"
                    height="1926"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
              </div>
            </section>
            <section
              id="hzt"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full z-[14] grid mx-auto max-lg:min-h-5 max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(24px,auto)_minmax(2289px,auto)_minmax(216px,auto)_minmax(216px,auto)_minmax(216px,auto)_minmax(216px,auto)_minmax(23px,auto)_minmax(193px,auto)_minmax(216px,auto)_minmax(216px,auto)_minmax(3589px,auto)_minmax(1502px,auto)_minmax(27px,auto)_minmax(1613px,auto)_minmax(379px,auto)_minmax(538px,auto)_minmax(2026px,auto)_minmax(1075px,auto)_minmax(16px,auto)_minmax(200px,auto)_1fr] max-lg:px-4 lg:min-h-[2850.5rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_25.2451%_32.6797%_25.2451%_8.41503%] lg:grid-rows-[minmax(84px,auto)_minmax(4789px,auto)_minmax(88px,auto)_minmax(5371px,auto)_minmax(85px,auto)_minmax(4195px,auto)_minmax(52px,auto)_minmax(4951px,auto)_minmax(249px,auto)_minmax(3991px,auto)_minmax(23px,auto)_minmax(137px,auto)_minmax(89px,auto)_minmax(3709px,auto)_minmax(67px,auto)_minmax(4047px,auto)_minmax(34px,auto)_minmax(5732px,auto)_minmax(4335px,auto)_1fr] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              >
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-end-12 lg:col-start-2 lg:col-end-5 lg:row-end-3 hidden">
                  <div
                    id="zNI2CP"
                    height="2291"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-3 max-lg:row-end-13 lg:col-start-2 lg:col-end-5 lg:row-start-4 lg:row-end-5 hidden">
                  <div
                    id="zPy3ie"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-4 max-lg:row-end-[14] lg:col-start-2 lg:col-end-5 lg:row-start-6 lg:row-end-7 hidden">
                  <div
                    id="zCJ6j2"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-5 max-lg:row-end-[19] lg:col-start-2 lg:col-end-5 lg:row-start-8 lg:row-end-9 hidden">
                  <div
                    id="zLrIhV"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-[17] lg:col-start-2 lg:col-end-5 lg:row-start-10 lg:row-end-13 hidden">
                  <div
                    id="zVHm_r"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[6] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-7 max-lg:row-end-8 lg:col-start-3 lg:col-end-4 lg:row-start-11 lg:row-end-12 hidden">
                  <div
                    id="z97UN2"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[7] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-9 max-lg:row-end-[16] lg:col-start-2 lg:col-end-5 lg:row-start-[14] lg:row-end-[15] hidden">
                  <div
                    id="zQrbnA"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[8] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-10 max-lg:row-end-[15] lg:col-start-2 lg:col-end-5 lg:row-start-[16] lg:row-end-[17] hidden">
                  <div
                    id="zHUYYU"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-[9] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-11 max-lg:row-end-[18] lg:col-start-2 lg:col-end-5 lg:row-start-[18] lg:row-end-[19] hidden">
                  <div
                    id="zewtR0"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
                <div className="text-start w-full h-full relative z-10 grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-[20] max-lg:row-end-[21] lg:col-start-2 lg:col-end-5 lg:row-start-[19] lg:row-end-[20] hidden">
                  <div
                    id="zbSFPB"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
              </div>
            </section>
            <section
              id="trombofilnestavy"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full z-[14] grid mx-auto max-lg:min-h-[251.5625rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(12810px,auto)_1fr] max-lg:px-4 lg:min-h-[256.8125rem] lg:max-w-[76.5rem] lg:grid-cols-[9.55882%_83.1699%_7.27124%] lg:grid-rows-[minmax(104px,auto)_minmax(155px,auto)_1fr] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              >
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3 hidden">
                  <div
                    id="zHiRY6"
                    height="3946"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
              </div>
            </section>
            <section
              id="komplikaciesklerotizacie"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full z-[14] grid mx-auto max-lg:min-h-[281.4375rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(10570px,auto)_1fr] max-lg:px-4 lg:min-h-[269.375rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_83.1699%_8.41503%] lg:grid-rows-[minmax(64px,auto)_minmax(155px,auto)_1fr] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              >
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3 hidden">
                  <div
                    id="zz_Gxt"
                    height="4174.203125"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
              </div>
            </section>
            <section
              id="prekladac"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(734px,auto)_1fr] max-lg:px-4 lg:min-h-[48.875rem] lg:max-w-[76.5rem] lg:grid-cols-[25.2451%_49.5098%_25.2451%] lg:grid-rows-[minmax(64px,auto)_minmax(155px,auto)_1fr] lg:px-0"
                data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
              >
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3 hidden">
                  <div
                    id="zfhjNz"
                    className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
                  />
                </div>
              </div>
            </section>
            <section
              id="zuvhJu"
              className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-neutral-primary-100 absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden" />
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[55.1875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[35.061%_64.939%] max-lg:grid-rows-[minmax(35px,auto)_minmax(284px,auto)_minmax(24px,auto)_minmax(45px,auto)_minmax(34px,auto)_minmax(25px,auto)_minmax(357px,auto)_1fr] max-lg:px-4 lg:min-h-[37.3125rem] lg:max-w-[76.5rem] lg:grid-cols-[2.53268%_0.653595%_9.39542%_22.6307%_8.41503%_6.86275%_49.5098%] lg:grid-rows-[minmax(64px,auto)_minmax(16px,auto)_minmax(279px,auto)_minmax(25px,auto)_minmax(16px,auto)_minmax(34px,auto)_minmax(16px,auto)_minmax(34px,auto)_1fr] lg:px-0">
                <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-7 max-lg:row-end-8 lg:col-start-7 lg:col-end-8 lg:row-start-3 lg:row-end-9">
                  <div
                    id="ztzTNb"
                    className="self-start font-heading bg-cover bg-center leading-6 relative grid gap-[1.375rem_10px] col-start-1 col-end-[-1] row-start-1 row-end-[-1] bg-no-repeat form layout-element__component--GridForm"
                  >
                    <form
                      name="Kontaktný formulár"
                      className="self-center grid mb-0 form__control max-lg:gap-2.5 lg:gap-6"
                    >
                      <div className="input input--light">
                        <label className="text-gray-900 cursor-pointer input__label--light input__label">
                          {"meno a priezvisko*"}
                        </label>
                        <input
                          id="meno a priezvisko"
                          placeholder="vaše meno"
                          type="text"
                          tabIndex={0}
                          className="border-solid border-ploy-neutral-primary-s2 bg-ploy-background-primary text-gray-900 w-full h-auto transition-[color,border-color,background-color] duration-200 p-4 rounded-[1.125rem] input__component--light input__component hover:bg-ploy-background-primary hover:text-gray-900 overflow-clip border"
                        />
                      </div>
                      <div className="input input--light">
                        <label className="text-gray-900 cursor-pointer input__label--light input__label">
                          {"email*"}
                        </label>
                        <input
                          id="email"
                          placeholder="vaša emailová adresa"
                          type="text"
                          tabIndex={0}
                          className="border-solid border-ploy-neutral-primary-s2 bg-ploy-background-primary text-gray-900 w-full h-auto transition-[color,border-color,background-color] duration-200 p-4 rounded-[1.125rem] input__component--light input__component hover:bg-ploy-background-primary hover:text-gray-900 overflow-clip border"
                        />
                      </div>
                      <div className="input input--light">
                        <label className="text-gray-900 cursor-pointer input__label--light input__label">
                          {"správa*"}
                        </label>{" "}
                        <textarea
                          id="správa"
                          placeholder="napíšte sem správu"
                          type="text"
                          tabIndex={0}
                          className="border-solid border-ploy-neutral-primary-s2 bg-ploy-background-primary text-gray-900 whitespace-pre-wrap break-words w-full min-h-24 cursor-text transition-[color,border-color,background-color] duration-200 p-4 rounded-[1.125rem] input__component--textarea input__component--light input__component--no-textarea-resize input__component hover:bg-ploy-background-primary hover:text-gray-900 overflow-auto border"
                        />
                      </div>
                      <button
                        type="submit"
                        name="submit"
                        aria-hidden="false"
                        className="self-center justify-self-center text-nowrap bg-ploy-background-accent-primary text-black font-bold text-center whitespace-nowrap h-min max-w-full z-[1] flex items-center cursor-pointer transition-[color,border-color,background-color] duration-200 rounded-[1.375rem] grid-button grid-button--primary form__button max-[921px]:h-[min-content] max-[921px]:max-w-full max-[921px]:z-[1] hover:bg-[#401314] hover:text-ploy-text-inverse hover:shadow-[0px_0px_0px_0px_0px] max-lg:px-9 max-lg:py-3.5 lg:px-10 lg:py-4 overflow-hidden"
                      >
                        {"odoslať"}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="text-left w-full h-full relative z-[2] grid grid-cols-[100%] row-start-2 opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] max-lg:col-start-1 max-lg:col-end-3 max-lg:row-end-5 lg:col-start-2 lg:col-end-6 lg:row-end-8">
                  <div
                    id="z3VZRD"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h2 className="font-heading text-gray-900 font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]">
                      {"kontaktujte"}
                    </h2>
                    <h2 className="font-heading text-gray-900 font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[0.5] lg:text-[3.5rem]">
                      {"MUDr. Andrej"}
                    </h2>
                    <h2 className="font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-[4.55rem] lg:text-[3.5rem]">
                      {"Gaži"}
                    </h2>
                    <p className="font-heading text-ploy-text-primary text-lg break-words mb-2 max-[921px]:mb-8">
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"CIEVNY CHIRURG"}
                        </strong>
                      </span>
                    </p>
                    <p className="font-heading text-ploy-text-primary text-lg break-words mb-[1.875rem] max-[921px]:mb-8" />
                    <p className="font-heading text-gray-900 break-words max-[921px]:mb-0 lg:leading-6" />
                  </div>
                </div>
                <div className="text-left w-full h-full relative z-[3] grid grid-cols-[100%] opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-3 max-lg:row-end-4 lg:col-start-2 lg:col-end-5 lg:row-start-4 lg:row-end-5">
                  <div
                    id="z9drsK"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <p className="font-heading text-gray-900 leading-6 break-words max-[921px]:mb-0">
                      <span
                        style={{ fontFamily: "Inter" }}
                        className="[color:inherit] break-words"
                      >
                        {"info@varixyporadenstvo.com"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-5 max-lg:row-end-6 lg:col-start-3 lg:col-end-4 lg:row-start-6 lg:row-end-7">
                  <div
                    id="zgLbck"
                    className="self-start bg-cover bg-center max-h-full flex justify-around col-start-1 col-end-[-1] row-start-1 row-end-[-1] bg-no-repeat social-icons social-icons--row layout-element__component--GridSocialIcons"
                  >
                    <a
                      href="https://www.facebook.com/varixyporadenstvo/"
                      target="_blank"
                      rel="noopener"
                      title="Go to Facebook page"
                      className="text-gray-900 leading-none flex justify-center items-center transition-[color] duration-200 pr-5 social-icons__link hover:text-gray-900"
                    >
                      <PageIcon1 />
                    </a>
                    <a
                      href="https://www.instagram.com/mudr.andrej_gazi/"
                      target="_blank"
                      rel="noopener"
                      title="Go to Instagram page"
                      className="text-gray-900 leading-none flex justify-center items-center transition-[color] duration-200 social-icons__link hover:text-gray-900"
                    >
                      <PageIcon2 />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <div className="contents">
        <div />
      </div>
    </div>
  );
}
