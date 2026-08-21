/**
 * @ployComponent
 * @ployComponentId ako-pristupovat-k-vredu-predkolenia-top-blocks-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from semantic markup
 */
type LinkItemProps = {
  href: string;
  text: string;
  separator?: string;
};

function LinkItem({ href, text, separator }: LinkItemProps) {
  return (
    <>
      <li className="[color:inherit] select-none block-header-item">
        <label className="[color:inherit] block-header-item__label">
          <div
            className="text-left flex items-center item-content-wrapper block-header-item__item"
            data-ploy-hover-anchor="h1"
          >
            <a
              href={href}
              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0"
              data-ploy-hover="h1"
            >
              {text}
            </a>
          </div>
        </label>
      </li>
      {separator}
    </>
  );
}

type ListItemProps = {
  className: string;
};

function ListItem({ className }: ListItemProps) {
  return <span className={className} />;
}

type LinkItem2Props = {
  href: string;
  text: string;
  separator?: string;
};

function LinkItem2({ href, text, separator }: LinkItem2Props) {
  return (
    <>
      <li className="[color:inherit] select-none block-header-item max-lg:text-right max-lg:invisible lg:text-left lg:visible">
        <label className="[color:inherit] block-header-item__label max-lg:invisible lg:visible">
          <div
            className="text-left flex items-center item-content-wrapper block-header-item__item max-lg:invisible max-lg:justify-end lg:visible"
            data-ploy-hover-anchor="h1"
          >
            <a
              href={href}
              className="self-center font-heading text-ploy-text-primary leading-6 whitespace-pre-wrap relative block item-content max-[921px]:mt-0 max-[921px]:mr-0 max-[921px]:mb-0 max-[921px]:ml-0 max-lg:text-end max-lg:invisible lg:text-left lg:visible"
              data-ploy-hover="h1"
            >
              {text}
            </a>
          </div>
        </label>
      </li>
      {separator}
    </>
  );
}

export const links: LinkItemProps[] = [
  { href: "https://varixyporadenstvo.com/", text: "úvod" },
  { href: "https://varixyporadenstvo.com/liecba", text: "liečba" },
  { href: "https://varixyporadenstvo.com/operacia", text: "operácia" },
  { href: "https://varixyporadenstvo.com/nakup", text: "nákup" },
  { href: "https://varixyporadenstvo.com/kliniky", text: "kliniky" },
  { href: "https://varixyporadenstvo.com/clanky", text: "články" },
  { href: "https://varixyporadenstvo.com/kontakt", text: "kontakt" },
];

export const items: ListItemProps[] = [
  {
    className:
      "[color:inherit] bg-ploy-background-secondary w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-0",
  },
  {
    className:
      "[color:inherit] bg-ploy-background-secondary w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-2",
  },
  {
    className:
      "[color:inherit] bg-ploy-background-secondary w-full h-0.5 absolute block transition-[transform,translate,scale,rotate,opacity,width] duration-[0.25s] ease-[ease-in-out] delay-[0.1s] rounded-sm top-4",
  },
];

export const links2: LinkItem2Props[] = [
  { href: "https://varixyporadenstvo.com/", text: "úvod" },
  { href: "https://varixyporadenstvo.com/liecba", text: "liečba" },
  { href: "https://varixyporadenstvo.com/operacia", text: "operácia" },
  { href: "https://varixyporadenstvo.com/nakup", text: "nákup" },
  { href: "https://varixyporadenstvo.com/kliniky", text: "kliniky" },
  { href: "https://varixyporadenstvo.com/clanky", text: "články" },
  { href: "https://varixyporadenstvo.com/kontakt", text: "kontakt" },
];

export default function TopBlocksSection() {
  return (
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
              {links.map((item, index) => (
                <LinkItem
                  key={index}
                  {...item}
                  separator={index < links.length - 1 ? "\n" : ""}
                />
              ))}
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
            {items.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
          </button>
          <div className="block-header-layout-mobile__dropdown--link-align-right block-header-layout-mobile__dropdown max-[921px]:w-full max-[921px]:max-h-0 max-[921px]:top-[100%] max-[921px]:left-0 max-[921px]:absolute ploy-styles-rule-0 max-lg:bg-ploy-background-primary max-lg:absolute max-lg:flex max-lg:overflow-y-hidden max-lg:invisible max-lg:flex-col max-lg:items-end max-lg:gap-16 max-lg:px-4 lg:bg-transparent lg:max-h-none lg:block lg:visible lg:flex-row lg:gap-[normal] lg:px-0 lg:left-auto lg:top-auto max-[921px]:overflow-hidden">
            <nav className="block-header__nav max-lg:invisible lg:visible">
              <ul className="flex flex-wrap justify-start my-0 pl-0 block-header__nav-links max-lg:text-end max-lg:gap-5 max-lg:invisible max-lg:flex-col lg:text-start lg:gap-[1rem_40px] lg:visible lg:flex-row">
                {links2.map((item, index) => (
                  <LinkItem2
                    key={index}
                    {...item}
                    separator={index < links2.length - 1 ? "\n" : ""}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
