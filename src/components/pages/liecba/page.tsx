import HeroSection from "./sections/hero-section";
import Section2 from "./sections/section-2";
import NeinvazivneMetodyLiecbySection from "./sections/neinvazivne-metody-liecby-section";
import ZuSection from "./sections/zu-section";
import InvazivneMetodyLiecbySection from "./sections/invazivne-metody-liecby-section";
import Section6 from "./sections/section-6";
import KompresnePancuchySection from "./sections/kompresne-pancuchy-section";
import Section8 from "./sections/section-8";
import KompresnaBandazSection from "./sections/kompresna-bandaz-section";
import Section10 from "./sections/section-10";
import LiekySection from "./sections/lieky-section";
import SjURDSection from "./sections/sj-urd-section";
import UcinneLatkyVLiecbeSection from "./sections/ucinne-latky-v-liecbe-section";
import ZaKcbqSection from "./sections/za-kcbq-section";
import PrirodnaLekarenSection from "./sections/prirodna-lekaren-section";
import Section16 from "./sections/section-16";
import DietaSection from "./sections/dieta-section";
import ZxEijlSection from "./sections/zx-eijl-section";

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
          />
          <div className="sticky z-[18] top-0">
            <header
              className="relative z-[18] grid shadow-[0px_6px_14px_0px_color-mix(in_srgb,var(--ploy-border-primary)_10%,transparent)] transition-shadow ease-linear block-header block-header--with-shadow max-lg:px-4 lg:px-0"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color] duration-300 ease-[ease-in-out] inset-0 text-ploy-text-primary" />
              <div className="justify-self-center w-full max-w-[76.5rem] z-[18] items-center grid-cols-[min-content_auto] grid-flow-col px-4 py-6 block-header-layout-desktop block-header-layout-desktop--desktop-1 max-[921px]:hidden min-[921px]:grid">
                <a
                  href="/"
                  className="[color:inherit] flex mr-4 block-header-logo block-header__logo max-lg:w-[10.5369rem] max-lg:h-6 lg:w-[13.5rem] lg:h-[1.875rem]"
                >
                  <img
                    src="/migrated-assets/064fe38b1616ca6d9774.svg"
                    alt="varixyporadenstvo logo"
                    className="w-full h-full max-w-none object-contain block-header-logo__image overflow-clip"
                  />
                </a>
                <nav className="block-header__nav">
                  <ul className="flex flex-wrap justify-end gap-[1rem_40px] my-0 pl-0 block-header__nav-links">
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div
                          className="text-left flex items-center item-content-wrapper block-header-item__item"
                        >
                          <a
                            href="/"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
                          >
                            {"úvod"}
                          </a>
                        </div>
                      </label>
                    </li>
                    <li className="[color:inherit] select-none block-header-item">
                      <label className="[color:inherit] block-header-item__label">
                        <div className="text-left flex items-center item-content-wrapper item-content-wrapper--active block-header-item__item">
                          <a
                            href="/liecba"
                            className="self-center font-heading text-black leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
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
                        >
                          <a
                            href="/operacia"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
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
                        >
                          <a
                            href="/nakup"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
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
                        >
                          <a
                            href="/kliniky"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
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
                        >
                          <a
                            href="/clanky"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
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
                        >
                          <a
                            href="/kontakt"
                            className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
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
                    src="/migrated-assets/064fe38b1616ca6d9774.svg"
                    alt="varixyporadenstvo logo"
                    className="w-full h-full max-w-none object-contain block-header-logo__image overflow-clip"
                  />
                </a>
                <button
                  type="button"
                  title="Menu"
                  className="[color:inherit] text-sm w-6 h-[1.125rem] cursor-pointer transition-[transform,translate,scale,rotate,opacity,width] duration-[0.4s] ease-[ease-in-out] delay-[0.1s] p-0 block-header__hamburger-menu max-lg:block max-lg:col-start-[hamburger-menu] max-lg:col-end-[hamburger-menu] max-lg:row-start-[hamburger-menu] max-lg:row-end-[hamburger-menu] max-lg:ml-16 lg:inline-block lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto lg:ml-0"
                >
                  <span className="[color:inherit] bg-ploy-background-secondary w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-0" />
                  <span className="[color:inherit] bg-ploy-background-secondary w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-2" />
                  <span className="[color:inherit] bg-ploy-background-secondary w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-4" />
                </button>
                <div className="block-header-layout-mobile__dropdown--link-align-right block-header-layout-mobile__dropdown max-[921px]:w-full max-[921px]:max-h-0 max-[921px]:top-[100%] max-[921px]:left-0 max-[921px]:absolute ploy-styles-rule-0 max-lg:bg-ploy-background-primary max-lg:absolute max-lg:flex max-lg:overflow-y-hidden max-lg:invisible max-lg:flex-col max-lg:items-end max-lg:gap-16 max-lg:px-4 lg:bg-transparent lg:max-h-none lg:block lg:visible lg:flex-row lg:gap-[normal] lg:px-0 lg:left-auto lg:top-auto max-[921px]:overflow-hidden">
                  <nav className="block-header__nav max-lg:invisible lg:visible">
                    <ul className="flex flex-wrap justify-start my-0 pl-0 block-header__nav-links max-lg:text-end max-lg:gap-5 max-lg:invisible max-lg:flex-col lg:text-start lg:gap-[1rem_40px] lg:visible lg:flex-row">
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div
                            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
                          >
                            <a
                              href="/"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
                            >
                              {"úvod"}
                            </a>
                          </div>
                        </label>
                      </li>
                      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
                        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
                          <div className="text-left flex items-center item-content-wrapper item-content-wrapper--active block-header-item__item max-lg:invisible max-lg:justify-end lg:visible">
                            <a
                              href="/liecba"
                              className="self-center font-heading text-black leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
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
                          >
                            <a
                              href="/operacia"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
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
                          >
                            <a
                              href="/nakup"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
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
                          >
                            <a
                              href="/kliniky"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
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
                          >
                            <a
                              href="/clanky"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
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
                          >
                            <a
                              href="/kontakt"
                              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
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
            <NeinvazivneMetodyLiecbySection />
            <ZuSection />
            <InvazivneMetodyLiecbySection />
            <Section6 />
            <KompresnePancuchySection />
            <Section8 />
            <KompresnaBandazSection />
            <Section10 />
            <LiekySection />
            <SjURDSection />
            <UcinneLatkyVLiecbeSection />
            <ZaKcbqSection />
            <PrirodnaLekarenSection />
            <Section16 />
            <DietaSection />
            <ZxEijlSection />
            <section
              id="stripping"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
                <img
                  src="/migrated-assets/1587b1969dd154c99787.jpg"
                  width="100vw"
                  loading="eager"
                  className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
                
                alt=""/>
                <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.64] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
              </div>
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[55.25rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(3148px,auto)_1fr] max-lg:px-4 lg:min-h-[150.125rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_41.0948%_50.4902%] lg:grid-rows-[minmax(64px,auto)_minmax(2267px,auto)_1fr] lg:px-0">
                <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zAilLU"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"stripping a crossectomia"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"stripping"}
                        </strong>
                      </span>{" "}
                      {"je tradičná chirurgická metóda, pri ktorej sa odstraňujú (vytrhávajú) nefunkčné úseky kŕčových žíl." +
                        " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"crossectomia"}
                        </strong>
                      </span>{" "}
                      {
                        "je súčasťou tohto zákroku a zahŕňa podviazanie a prerušenie drobných venóznych vetiev medzi povrchovým a hlbokým žilovým systémom v slabine."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"výhody strippingu:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "úplné odstránenie nefunkčných úsekov kŕčových žíl z tela"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "možnosť riešenia problému s kŕčovými žilami dlhodobo a efektívne"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "vhodné pre rozsiahle varixy alebo postihnutie hlavného kmeňa povrchovej žily"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"nevýhody strippingu:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"potreba celkovej alebo spinálnej anestézie"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "dočasný kľud na lôžku počas niekoľkých hodín po zákroku"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "nutnosť práceneschopnosti počas obdobia zotavovania (zvyčajne 2-4 týždne)"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"možnosť infekcie operačných rán"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"často nutná extrakcia stehov"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "riziko vzniku hematómov alebo prechodnej bolestivosti"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"odborné stanovisko:" + " "}
                      </strong>
                      {
                        "stripping a crossectomia sú efektívne zákroky, ktoré na niektorých pracoviskách predstavujú zlatý štandard. v rukách skúseného cievneho chirurga môžu priniesť výborné výsledky. tento zákrok sa však odporúča zvážiť ako rezerva - až v prípade, že iné, menej invazívne možnosti liečby neboli úspešné alebo nie sú vhodné pre daný prípad."
                      }
                    </p>
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"miniflebektómia"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "miniflebektómia/flebektómia je menej invazívna chirurgická metóda, ktorá sa používa na odstránenie menších kŕčových žíl alebo ako doplnok k iným zákrokom na žilách - najčastejšie k RFA a EVLT."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"výhody miniflebektómie:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "možnosť úplného odstránenia z tela menších kŕčových žíl"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "vykonanie zákroku v celkovej alebo lokálnej anestézii"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "použitie mikrochirurgickej techniky, ktorá minimalizuje poškodenie tkaniva"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "menšie a jemné kožné rezy, čo znižuje vznik jaziev a infekcií"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "kratšia doba rekonvalescencie v porovnaní so strippingom"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"nevýhody miniflebektómie:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "pooperačný režim závisí od rozsahu výkonu a môže vyžadovať určitý čas na zotavenie"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "možná potreba celkovej anestézie, ktorá nesie riziká spojené s anestéziou"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"niekedy je potrebná extrakcia stehov"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"možnosť vzniku drobných hematómov"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"odborné stanovisko:" + " "}
                      </strong>
                      {
                        "miniflebektómia sa často vykonáva buď samostatne alebo častejšie ako doplnok k iným zákrokom, ako sú rádiofrekvenčná ablácia (RFA), endovenózna laserová ablácia (EVLT) či stripping. po zákroku sú často prítomné drobné hematómy a zostávajú len drobné jazvičky po mini vpichoch v koži. alternatívou k miniflebektómii môže byť sklerotizácia varixov, najmä u pacientov, ktorí nie sú vhodní kandidáti na chirurgický zákrok."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "pri rozhodovaní o najvhodnejšej metóde liečby kŕčových žíl je dôležité zvážiť niekoľko faktorov:"
                      }
                    </p>
                    <ol className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <strong className="[color:inherit] break-words">
                            {"závažnosť stavu"}
                          </strong>
                          {
                            ": mierne prípady môžu reagovať dobre na konzervatívnu liečbu, zatiaľ čo závažnejšie prípady môžu vyžadovať chirurgický zákrok."
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <strong className="[color:inherit] break-words">
                            {"celkový zdravotný stav"}
                          </strong>
                          {
                            ": niektoré chirurgické metódy nemusia byť vhodné pre pacientov s určitými zdravotnými problémami."
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <strong className="[color:inherit] break-words">
                            {"preferencia pacienta"}
                          </strong>
                          {
                            ": niektorí pacienti môžu uprednostňovať menej invazívne metódy, zatiaľ čo iní môžu preferovať definitívne riešenie chirurgickou cestou."
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <strong className="[color:inherit] break-words">
                            {"skúsenosti lekára"}
                          </strong>
                          {
                            ": je dôležité vybrať skúseného cievneho chirurga alebo angiológa, ktorý má dobré výsledky s vybranou metódou liečby."
                          }
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="zIWlbV"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full min-h-5 z-[14] grid grid-cols-[100%] grid-rows-[1fr] mx-auto max-lg:max-w-[22.5rem] max-lg:px-4 lg:max-w-[76.5rem] lg:px-0"
              />
            </section>
            <section
              id="rfaevlt"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
                <img
                  src="/migrated-assets/1587b1969dd154c99787.jpg"
                  width="100vw"
                  loading="eager"
                  className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
                
                alt=""/>
                <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.64] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
              </div>
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[315.6875rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(16px,auto)_minmax(4967px,auto)_1fr] max-lg:px-4 lg:min-h-[251.6875rem] lg:max-w-[76.5rem] lg:grid-cols-[50.4902%_41.0948%_8.41503%] lg:grid-rows-[minmax(104px,auto)_minmax(3847px,auto)_1fr] lg:px-0">
                <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
                  <div
                    id="zbFGJh"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"rádiofrekvenčná ablácia (RFA)"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "rádiofrekvenčná ablácia (RFA) je moderná miniinvazívna metóda liečby kŕčových žíl."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"výhody RFA:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "efektívne uzavretie skrytej žily (vena saphena magna, vena saphena parva) pomocou vysokej teploty"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"miniinvazívny rýchly zákrok"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "možnosť ambulantného zákroku s použitím lokálnej anestézie"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "presné dávkovanie tepla, ktoré uzavrie žilu poškodením žilovej steny"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"minimálny čas strávený v nemocnici"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"Nevýhody RFA:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "nedokonalá deštrukcia žilovej steny v triesle s rizikom recidívy varixov"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "niektorí pacienti môžu horšie znášať zákroky v lokálnej anestézii"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"laserová ablácia (EVLT/EVLA/ELVES)"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"výhody laserovej ablácie:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"vhodná na uzavretie širokých aj tenších žíl"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "vysoká teplota laserového lúča uzavrie poškodenú cievu bez poškodenia okolitého tkaniva"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "možnosť ambulantného zákroku s použitím lokálnej anestézie"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "kratší čas na zotavenie v porovnaní s tradičnými chirurgickými metódami"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"nevýhody laserovej ablácie:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "minimálne riziko hlbokej žilovej trombózy alebo poškodenia nervov"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "možnosť vzniku opuchov, modrín, lokalizovaného zápalu alebo iritácie kože"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "niektorí pacienti môžu horšie znášať zákroky v lokálnej anestézii"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "nedokonalá deštrukcia žilovej steny v triesle s rizikom recidívy varixov"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"VenaSeal (biolepidlo)"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "VenaSeal je inovatívna metóda využívajúca špeciálne lepidlo na uzatvorenie kŕčových žíl."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"výhody metódy VenaSeal:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "minimálne invazívny zákrok vykonávaný jediným vpichom na nohe"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"bezbolestný a účinný zákrok"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "realizácia pod ultrazvukovou kontrolou pre presnosť"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "nevyžaduje hospitalizáciu ani nosenie kompresných pančúch počas dňa"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"rýchly návrat k bežným aktivitám po zákroku"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"nevýhody metódy VenaSeal:"}
                      </strong>
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "zákrok zvyčajne nehradí poisťovňa, čo môže znamenať vyššie náklady pre pacienta"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "potenciálne riziká spojené s použitím adhezíva, možnosť alergickej reakcie na adhezívum"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      <strong className="[color:inherit] break-words">
                        {"odborné stanovisko:" + " "}
                      </strong>
                      {
                        "VenaSeal je vhodnou alternatívou pre pacientov, ktorí preferujú minimálne invazívny zákrok bez potreby kompresnej terapie po zákroku."
                      }
                    </p>
                    <h4 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:text-2xl lg:leading-[3.25rem] lg:text-[2.5rem]">
                      {"menej známe metódy liečby varixov"}
                    </h4>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"Sonovein® HD (HIFU)"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "Sonovein® HD je prvá úplne neinvazívna liečba kŕčových žíl využívajúca vysoko intenzívny fokusovaný ultrazvuk (HIFU)."
                      }
                    </p>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"mikrovlnná liečba kŕčových žíl (EMWA)"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "EMWA je endovenózna metóda porovnateľná s laserovou a rádiofrekvenčnou abláciou."
                      }
                    </p>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"TRLOP (TRansLuminal Occlusion of Perforators)"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "TRLOP je metóda zameraná na uzavretie perforátorových žíl."
                      }
                    </p>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"embolizácia panvových žíl (PVE)"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        'PVE je röntgenová technika používaná pri liečbe panvových žilových problémov. využíva sa pri syndróme kongescie panvy, vulválnych a vaginálnych varixoch. do žily sa vsúva kovová "cievka" alebo špeciálny embolizujúci materiál'
                      }
                    </p>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"CLaCS (kryolaser a kryoskleroterapia)"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "CLaCS je miniinvazívna liečba kombinujúca laserovú terapiu a injekčnú skleroterapiu. kombinuje transdermálnu laserovú terapiu a injekčnú skleroterapiu. využíva rozšírenú realitu obrazu a silné schladenie kože. cieľom je spáliť nefunkčné žily a podporiť prietok krvi zdravými žilami"
                      }
                    </p>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"ClariVein™ (MOCA - mechanochemická ablácia)"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "ClariVein™ je technológia kombinujúca mechanickú deštrukciu žily a sklerotizujúcu látku. využíva katéter s rotujúcim hrotom, nevyžaduje použitie lokálnej anestézie, kombinuje mechanické a chemické metódy liečby"
                      }
                    </p>
                    <h6 className="font-heading text-ploy-text-inverse font-semibold break-words mb-2 max-[921px]:mb-2 max-lg:leading-6 max-lg:text-xl lg:text-2xl">
                      {"CHIVA"}
                    </h6>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "CHIVA je hemodynamický prístup k liečbe chronického žilového ochorenia dolných končatín. cieľom je obnoviť takmer normálny fyziologický prietok bez deštrukcie žíl. využíva ligatúry na prerušenie únikových bodov a frakcionáciu hydrostatického tlaku, zachováva podkožnú žilu (safénu)"
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "invazívne metódy liečby kŕčových žíl ponúkajú široké spektrum možností pre pacientov s rôznymi stupňami ochorenia. od tradičných chirurgických zákrokov až po najmodernejšie minimálne invazívne techniky, každá metóda má svoje výhody a potenciálne riziká."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"pri výbere najvhodnejšej metódy je kľúčové:"}
                    </p>
                    <ol className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "konzultovať svoj stav s kvalifikovaným cievnym chirurgom alebo angiológom"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "zvážiť závažnosť ochorenia a celkový zdravotný stav"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"brať do úvahy osobné preferencie a životný štýl"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "porozumieť potenciálnym rizikám a benefitom každej metódy"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ol>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      <strong className="[color:inherit] break-words">
                        {"pamätajte"}
                      </strong>
                      {
                        ", že liečba kŕčových žíl je individuálna a to, čo je najlepšie pre jedného pacienta, nemusí byť ideálne pre iného. vždy sa riaďte odporúčaniami svojho lekára a neváhajte klásť otázky o všetkých dostupných možnostiach liečby."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="zHnSVt"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full min-h-5 z-[14] grid grid-cols-[100%] grid-rows-[1fr] mx-auto max-lg:max-w-[22.5rem] max-lg:px-4 lg:max-w-[76.5rem] lg:px-0"
              />
            </section>
            <section
              id="sklerotizacia"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
                <img
                  src="/migrated-assets/1587b1969dd154c99787.jpg"
                  width="100vw"
                  loading="eager"
                  className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
                
                alt=""/>
                <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.64] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
              </div>
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[182.375rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[13.4146%_72.8659%_13.7195%] max-lg:grid-rows-[minmax(16px,auto)_minmax(2566px,auto)_minmax(42px,auto)_minmax(233px,auto)_1fr] max-lg:px-4 lg:min-h-[129.9375rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_39.2157%_2.85948%_41.0948%_8.41503%] lg:grid-rows-[minmax(104px,auto)_minmax(560px,auto)_minmax(1342px,auto)_1fr] lg:px-0">
                <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-end-3 lg:col-start-4 lg:col-end-5 lg:row-end-4">
                  <div
                    id="z4xB3e"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"sklerotizácia kŕčových žíl"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "sklerotizácia, známa aj ako skleroterapia, je populárna a účinná metóda liečby kŕčových žíl na nohách. táto minimálne invazívna procedúra zahŕňa vstrekovanie špeciálnej látky (najčastejšie aethoxysklerolu) do varikóznych žíl, čo vedie k ich postupnému uzavretiu a vymiznutiu z povrchu kože."
                      }
                    </p>
                    <h5 className="font-heading text-ploy-text-inverse font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl">
                      {"pre koho je sklerotizácia vhodná?"}
                    </h5>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "sklerotizácia je ideálna pre pacientov s metličkovitými varixmi, retikulárnymi varixmi a menšími až stredne veľkými kŕčovými žilami. pred procedúrou je nevyhnutná konzultácia a ultrazvukové vyšetrenie u cievneho špecialistu, ktorý zhodnotí vašu anamnézu a celkový zdravotný stav."
                      }
                    </p>
                    <h5 className="font-heading text-ploy-text-inverse font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl">
                      {"priebeh procedúry a možné vedľajšie účinky"}
                    </h5>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "procedúra sa vykonáva v horizontálnej polohe, pričom sklerotizačný roztok sa vstrekuje do žíl jemnou ihlou. pacient môže pociťovať mierny diskomfort alebo raritne slabý kŕč trvajúci 1-2 minúty. bezprostredne po zákroku sa ojedinele môžu vyskytnúť dočasné poruchy zraku, bolesti hlavy alebo pocit kovovej chuti v ústach."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"v nasledujúcich dňoch až týždňoch môžete pozorovať:"}
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"svrbenie (1-2 dni)"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"začervenanie a modriny v oblasti vpichov"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"zatvrdnutie väčších žíl"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "hnedé pruhy v žilách (zvyčajne zmiznú po 3-6 mesiacoch)"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"neovaskularizáciu (vytvorenie nových tenkých ciev)"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <h5 className="font-heading text-ploy-text-inverse font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl">
                      {"príprava a starostlivosť"}
                    </h5>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"pred procedúrou:"}
                    </p>
                    <ol className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"informujte lekára o všetkých užívaných liekoch"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"vynechajte používanie krémov na dolné končatiny"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"vyhoľte si končatinu 12-24 hodín pred zákrokom"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ol>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"po procedúre:"}
                    </p>
                    <ol className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"choďte s kompresiou na nohe asi 30 minút"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "noste kompresnú bandáž alebo pančuchy 2. triedy podľa dohody s lekárom"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"vyhnite sa horúcim kúpeľom, vírivkám a saunám"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "chráňte ošetrené miesta pred priamym slnečným žiarením 48 hodín"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ol>
                    <h5 className="font-heading text-ploy-text-inverse font-bold break-words mb-4 max-[921px]:mb-4 max-lg:text-2xl lg:leading-10 lg:text-3xl">
                      {"úspešnosť a výsledky"}
                    </h5>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "pri jednom sedení je možné eliminovať 50-80% ošetrených žíl. metličkovité žily zvyčajne zmiznú do 3-6 týždňov, väčšie žily v priebehu 3-4 mesiacov. zákrok je možné opakovať s odstupom 1-2 týždňov."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "sklerotizácia je efektívna metóda liečby kŕčových žíl, najmä pre menšie a stredne veľké varixy. poskytuje dobré estetické výsledky a je menej invazívna ako chirurgické metódy. pre optimálne výsledky je dôležité konzultovať svoj stav s kvalifikovaným cievnym špecialistom, dodržiavať pokyny pred a po zákroku a mať realistické očakávania."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {
                        "ak uvažujete o liečbe kŕčových žíl, sklerotizácia môže byť pre vás vhodnou voľbou. Vždy sa však poraďte so svojím lekárom o najvhodnejšej metóde liečby pre vašu konkrétnu situáciu."
                      }
                    </p>
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] col-start-2 col-end-3 max-lg:row-start-4 max-lg:row-end-5 lg:row-start-2 lg:row-end-3">
                  <div
                    id="zUbf3a"
                    className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[14.5625rem] lg:max-h-[35.0313rem]"
                  >
                    <div
                      rel="nofollow"
                      title="a man in a hospital room with a nurse"
                      style={{
                        mask: "0% 0% / 100% 100%",
                        maskSize: "100% 100%",
                      }}
                      className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
                    >
                      <img
                        alt="a man in a hospital room with a nurse"
                        src="/migrated-assets/9fa1cfa47ef374358a37.jpg"
                        height="560"
                        width="480"
                        loading="eager"
                        className="w-full h-full max-w-none object-cover image__image overflow-clip"
                      />
                    </div>
                    <div
                      rel="nofollow"
                      title="a man in a hospital room with a nurse"
                      style={{
                        mask: "0% 0% / 100% 100%",
                        maskSize: "100% 100%",
                      }}
                      className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
                    >
                      <img
                        alt="a man in a hospital room with a nurse"
                        src="/migrated-assets/c0ca5c7d01911e433044.jpg"
                        height="233"
                        width="239"
                        loading="eager"
                        className="w-full h-full max-w-none object-cover image__image overflow-clip"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="zOI6XU"
              className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
              <div
                className="w-full min-h-5 z-[14] grid grid-cols-[100%] grid-rows-[1fr] mx-auto max-lg:max-w-[22.5rem] max-lg:px-4 lg:max-w-[76.5rem] lg:px-0"
              />
            </section>
            <section
              id="diatermia"
              className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
            >
              <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
                <img
                  src="/migrated-assets/1587b1969dd154c99787.jpg"
                  width="100vw"
                  loading="eager"
                  className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
                
                alt=""/>
                <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-[0.64] left-0 top-0 block-background__overlay text-ploy-text-inverse" />
              </div>
              <div className="w-full z-[14] grid mx-auto max-lg:min-h-[177.8125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[8.84146%_11.5854%_59.1463%_11.5854%_8.84146%] max-lg:grid-rows-[minmax(40px,auto)_minmax(189px,auto)_minmax(51px,auto)_minmax(2172px,auto)_minmax(94px,auto)_minmax(245px,auto)_1fr] max-lg:px-4 lg:min-h-[119.8125rem] lg:max-w-[76.5rem] lg:grid-cols-[8.41503%_4.82026%_27.8595%_6.53595%_2.85948%_41.0948%_8.41503%] lg:grid-rows-[minmax(104px,auto)_minmax(560px,auto)_minmax(636px,auto)_minmax(284px,auto)_minmax(70px,auto)_1fr] lg:px-0">
                <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-6 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-6 lg:col-end-7 lg:row-start-2 lg:row-end-6">
                  <div
                    id="zSkdSO"
                    className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
                  >
                    <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
                      {"rádiofrekvenčná diatermia"}
                    </h3>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"RF diatermia (Rádiofrekvenčná diatermia) je inovatívna metóda liečby drobných kŕčových žíl do 1mm a venektázií využívajúca rádiofrekvenčné vlny na uzavretie žíl. táto miniinvazívna procedúra ponúka efektívne riešenie problémov s drobnými" +
                        " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"kŕčovými žilami a venektáziami"}
                        </strong>
                      </span>
                      {" s minimálnymi vedľajšími účinkami."}
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-6 max-[921px]:mb-8">
                      {
                        "pred samotným zákrokom absolvujete konzultáciu s cievnym špecialistom, ktorá zahŕňa:"
                      }
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"pohovor o vašej anamnéze"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"ultrazvukové vyšetrenie"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "diskusiu o užívaných liekoch a prípadných alergiách"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"v deň zákroku:"}
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"vyhnite sa používaniu" + " "}
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"krémov"}
                            </strong>
                          </span>{" "}
                          {"na dolné končatiny"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"vyhoľte"}
                            </strong>
                          </span>
                          {" si končatinu 12-24 hodín pred procedúrou"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"zákrok sa vykonáva v horizontálnej polohe, pričom rádiofrekvenčné vlny sa aplikujú cez kožu k povrchovej žile pomocou jemnej ihly. pacient môže pociťovať mierny diskomfort v podobe jemného" +
                        " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"pichnutia alebo štipnutia."}
                        </strong>
                      </span>{" "}
                      {
                        "dĺžka výkonu závisí od rozsahu nálezu a stavu pacienta, zvyčajne trvá 30-60 minút."
                      }
                    </p>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"po zákroku môžete pozorovať:"}
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"svrbenie"}
                            </strong>
                          </span>{" "}
                          {"alebo mierne pálenie (1-2 dni)"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"prechodné" + " "}
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"začervenanie"}
                            </strong>
                          </span>{" "}
                          {"v oblasti vpichov"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"drobné bodkovité" + " "}
                          <span className="[color:inherit] font-bold break-words">
                            <strong className="[color:inherit] break-words">
                              {"hematómy"}
                            </strong>
                          </span>{" "}
                          {"(zmiznú v priebehu 3-4 týždňov)"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {"odporúčania po zákroku:"}
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"aplikujte ochranný krém na miesto zákroku"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"noste kompresné pančuchy 2-4 týždne"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {
                            "vyhnite sa horúcim kúpeľom, saunám a priamemu slnku 48 hodín po zákroku"
                          }
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {
                            "pokračujte v bežných denných aktivitách a prechádzkach"
                          }
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
                      {
                        "RF diatermia sa vykonáva v ambulancii cievneho lekára alebo v zdravotníckom zariadení. okrem liečby kŕčových žíl na nohách sa RF diatermia používa aj na ošetrenie drobných žiliek/venektázií na tvári. Táto metóda je:"
                      }
                    </p>
                    <ul className="break-words my-0">
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"miniinvazívna a rýchla"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                          {"poskytuje okamžité viditeľné výsledky"}
                        </p>
                      </li>
                      <li className="text-ploy-text-inverse break-words">
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-8">
                          {"bezpečná pri dodržaní pokynov"}
                        </p>
                        <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0" />
                      </li>
                    </ul>
                    <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
                      {"RF diatermia" + " "}
                      <span className="[color:inherit] font-bold break-words">
                        <strong className="[color:inherit] break-words">
                          {"nie je vhodná"}
                        </strong>
                      </span>
                      {
                        " pre pacientov s kardiostimulátormi, aktívnou rosaceou alebo alergiou na nikel. pred podstúpením RF diatermie sa vždy poraďte s kvalifikovaným cievnym špecialistom, ktorý posúdi vašu vhodnosť pre túto procedúru a poskytne vám individuálne odporúčania."
                      }
                    </p>
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-3 max-lg:col-end-4 lg:col-start-2 lg:col-end-5">
                  <div
                    id="zie6xM"
                    className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[11.8125rem] lg:max-h-[35.0313rem]"
                  >
                    <div
                      rel="nofollow"
                      title="a man in a hospital room with a nurse"
                      style={{
                        mask: "0% 0% / 100% 100%",
                        maskSize: "100% 100%",
                      }}
                      className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
                    >
                      <img
                        alt="a man in a hospital room with a nurse"
                        src="/migrated-assets/9fa1cfa47ef374358a37.jpg"
                        height="560"
                        width="480"
                        loading="eager"
                        className="w-full h-full max-w-none object-cover image__image overflow-clip"
                      />
                    </div>
                    <div
                      rel="nofollow"
                      title="a man in a hospital room with a nurse"
                      style={{
                        mask: "0% 0% / 100% 100%",
                        maskSize: "100% 100%",
                      }}
                      className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
                    >
                      <img
                        alt="a man in a hospital room with a nurse"
                        src="/migrated-assets/c0ca5c7d01911e433044.jpg"
                        height="189"
                        width="194"
                        loading="eager"
                        className="w-full h-full max-w-none object-cover image__image overflow-clip"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-2 max-lg:col-end-5 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-5">
                  <div
                    id="ztwgRj"
                    className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[15.3125rem] lg:max-h-[17.7813rem]"
                  >
                    <div
                      rel="nofollow"
                      title="little hematomas on the foot"
                      style={{
                        mask: "0% 0% / 100% 100%",
                        maskSize: "100% 100%",
                      }}
                      className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
                    >
                      <img
                        alt="little hematomas on the foot"
                        src="/migrated-assets/3d5a84f9619fd4c2e42c.jpg"
                        height="284"
                        width="341"
                        loading="eager"
                        className="w-full h-auto max-w-none absolute origin-top-left object-cover scale-[1.95] image__image--cropped image__image max-lg:top-[-21.2143rem] max-lg:left-[-7.2915rem] lg:top-[-27.9917rem] lg:left-[-9.1924rem] overflow-clip"
                      />
                    </div>
                    <div
                      rel="nofollow"
                      title="little hematomas on the foot"
                      style={{
                        mask: "0% 0% / 100% 100%",
                        maskSize: "100% 100%",
                      }}
                      className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
                    >
                      <img
                        alt="little hematomas on the foot"
                        src="/migrated-assets/c6f121b3818c1055958f.jpg"
                        height="245"
                        width="270"
                        loading="eager"
                        className="w-full h-auto max-w-none absolute origin-top-left object-cover scale-[1.95] image__image--cropped image__image max-lg:top-[-21.2143rem] max-lg:left-[-7.2915rem] lg:top-[-27.9917rem] lg:left-[-9.1924rem] overflow-clip"
                      />
                    </div>
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
