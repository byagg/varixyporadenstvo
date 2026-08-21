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
              className="pre-lekarov relative isolate overflow-hidden bg-ploy-background-inverse px-4 py-20 text-ploy-text-inverse lg:py-28"
            >
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-74-AGBMKBEPKZI3x237.jpeg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-ploy-background-inverse/90" />
              <div className="mx-auto max-w-[76.5rem]">
                <div className="max-w-3xl">
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary">
                    Odborné zdroje
                  </p>
                  <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-ploy-text-inverse lg:text-5xl">
                    Pre lekárov
                  </h2>
                  <p className="mt-5 font-heading text-lg leading-8 text-ploy-text-inverse/80">
                    Praktický rozcestník ku klasifikáciám, výkonom a odborným
                    materiálom pre diagnostiku a liečbu cievnych ochorení.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      label: "MKCH-10",
                      description: "Klasifikácia diagnóz",
                      href: "https://mediately.co/sk/icd",
                    },
                    {
                      label: "DRG výkony",
                      description: "Vyhľadávanie zdravotných výkonov",
                      href: "https://www.cksdrg.sk/sk/drgsearchers/vykony",
                    },
                    {
                      label: "ADC databáza",
                      description: "Lieky a zdravotnícke produkty",
                      href: "https://www.adc.sk/",
                    },
                    {
                      label: "Cievna chirurgia VšZP",
                      description: "Revízne pravidlá a kódy výkonov",
                      href: "https://www.vszp.sk/files/poskytovatelia/zdravotna-starostlivost/revizne-pravidla/068-reviznepravidla-cievnachirurgia.pdf",
                    },
                    {
                      label: "Kompresné pančuchy",
                      description: "Pôvodný odborný zoznam pomôcok",
                      href: "https://varixyporadenstvo.com/#listpancuchy",
                    },
                    {
                      label: "Vaskulitídy",
                      description: "Prehľad klinických znakov a liečby",
                      href: "https://varixyporadenstvo.com/#vaskulitidy",
                    },
                    {
                      label: "Vazoneurózy",
                      description: "Raynaudov fenomén a ďalšie stavy",
                      href: "https://varixyporadenstvo.com/#vazoneurozy",
                    },
                    {
                      label: "Trombofilné stavy",
                      description: "Diagnostika a odborný manažment",
                      href: "https://varixyporadenstvo.com/#trombofilnestavy",
                    },
                  ].map((resource) => (
                    <a
                      key={resource.label}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pre-lekarov__resource group rounded-[1.1875rem] border border-ploy-border-inverse bg-ploy-neutral-inverse-s2/60 p-5 transition duration-200 hover:-translate-y-1 hover:bg-ploy-background-accent-primary hover:text-black"
                    >
                      <strong className="block font-heading text-xl">
                        {resource.label}
                      </strong>
                      <span className="mt-2 block font-heading text-sm leading-6 opacity-75 group-hover:opacity-100">
                        {resource.description}
                      </span>
                    </a>
                  ))}
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
