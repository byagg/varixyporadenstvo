const linkItemClassName =
  "font-button border-solid border-white bg-ploy-button-secondary-background text-ploy-button-secondary-text leading-relaxed font-bold text-lg text-center break-words inline-block shadow-[0px_8px_25px_0px_color-mix(in_srgb,var(--ploy-border-primary)_10%,transparent)] duration-300 px-8 py-3.5 rounded-[3.125rem] border";
const linkItemClassName2 =
  "self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox";
const linkItemClassName3 =
  "font-heading text-ploy-text-inverse text-3xl break-words max-[921px]:mb-8 max-lg:leading-6 lg:leading-tight";

/**
 * @ployComponent
 * @ployComponentId nakup-footer
 * @ployComponentType component
 * @ployComponentPattern footer
 * @ployComponentDescription Site footer with supporting links and information.
 */
type LinkItemProps = {
  className: string;
  href: string;
  text: string;
};

function LinkItem({ className, href, text }: LinkItemProps) {
  return (
    <p className={className}>
      <a
        target="_blank"
        href={href}
        className={linkItemClassName}
        data-ploy-component-type="button"
        data-ploy-component-variant="outline"
      >
        {text}
      </a>
    </p>
  );
}

type LinkItem2Props = {
  href: string;
  text: string;
};

function LinkItem2({ href, text }: LinkItem2Props) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      <a
        target="_blank"
        href={href}
        className={linkItemClassName}
        data-ploy-component-type="button"
        data-ploy-component-variant="outline"
      >
        {text}
      </a>
    </p>
  );
}

export const links: LinkItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.anrdoezrs.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fteva-aescin-20mg-90-tabliet%2F&cjsku=358884",
    text: "Aescin 20 mg 30 tbl (Pilulka)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.jdoqocy.com/click-100721030-13735126?url=https%3A%2F%2Fwww.drmax.sk%2Fwobecare-enzym-45-tob-x67334&cjsku=X67334",
    text: "Wobecare Enzym 45 tbl (DrMax)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.anrdoezrs.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fbetadine-dermalna-mast-20-g%2F&cjsku=473583",
    text: "Betadine masť 20g (Mojalekaren)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.tkqlhce.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fbetadine-sol-loc-1x30ml%2F&cjsku=116489",
    text: "Betadine 30ml (Mojalekaren)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.anrdoezrs.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Faspirin-protect-100-tbl-ent-50x100mg%2F&cjsku=115535",
    text: "Aspirin Protect 100 mg 50 tbl (Mojalekaren)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.tkqlhce.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fbactigras-krytie-na-rany-10x10cm-antisepticke-tylove-krytie-s-chlorhexidin-acetatom-1x10-ks&cjsku=161329",
    text: "Bactigras 10x10 10ks (A94360) (Pilulka)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.anrdoezrs.net/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fmicrodacyn60-dermacyn-wound-care-sol-der-500-ml&cjsku=32560",
    text: "Microdacyn60 500ml (A73730) (Pilulka)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.anrdoezrs.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fsoftasept-n-bezbarvy-sprej-cz%2Fsk-250-ml%2F&cjsku=282415",
    text: "Softasept 250ml (Mojalekaren)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8",
    href: "https://www.anrdoezrs.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fparalen-500-tbl-12x500mg-blis-al-pvc%2F&cjsku=199891",
    text: "Paralen 500mg 12tbl (Mojalekaren)",
  },
  {
    className:
      "font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0",
    href: "https://www.kqzyfj.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Folynth-ha-0-1-aer-nao-1x10ml%2F&cjsku=122047",
    text: "Olynth HA spray 0.1% (Mojalekaren)",
  },
];

export const links2: LinkItem2Props[] = [
  {
    href: "https://www.kqzyfj.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fidealflex-ovinadlo-elasticke-kratkotazne-2&cjsku=30146",
    text: "KT obv. Idealflex 10x5 (Pilulka)",
  },
  {
    href: "https://www.kqzyfj.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fobin.-pruz.idealflex-12cmx5m-9312936%2F&cjsku=9536",
    text: "KT obv. Idealflex 12x5 (Mojalekaren)",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fkompres-gaza-krabicka-ster.5x5cm%2F25x2-steriwund%2F&cjsku=248289",
    text: "Gáza sterilná 5x5 25ks (Mojalekaren)",
  },
  {
    href: "https://www.kqzyfj.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fidealast-haft-ovinadlo-elasticke-kratkotazne-3&cjsku=36495",
    text: "KT obv. Idealflex 8x5 (Pilulka)",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13337502?url=http%3A%2F%2Favacaremedical.com%2Fsigvaris-doff-n-donner&cjsku=SG583D100",
    text: "tekutý navliekač kompresných pančúch Sigvaris",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fmaxis-navliekac-pancuch-anna-maly-pre-velkosti-pancuch-1-3&cjsku=35680",
    text: "Navliekač pančúch malý (Pilulka)",
  },
  {
    href: "https://www.tkqlhce.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fseni-soft-hygienicke-podlozky-60x60-cm-30-ks&cjsku=25284",
    text: "Podložka SeniSoft 60x60 (Pilulka)",
  },
];

export const links3: LinkItem2Props[] = [
  {
    href: "https://www.dpbolvw.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fepaderm-ointment-125g%2F&cjsku=229203",
    text: "Epaderm Ointment 125g (Mojalekaren)",
  },
  {
    href: "https://www.benulekaren.sk/sib-redupetin-specialny-krem-na-redukciu-pigmentovych-skvrn-nocny-20-ml",
    text: "SIB REDUPETIN (Benu lekáreň)",
  },
  {
    href: "https://www.dpbolvw.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fexcipial-u-hydrolotio-emu-der-1x-200ml%2F&cjsku=116215",
    text: "Excipial U Hydrolotio (Mojalekaren)",
  },
  {
    href: "https://www.pilulka.sk/biod-cicabio-arnica-40ml-modr-odr-opuchy-bcir0021",
    text: "Bioderma Arnika (Pilulka)",
  },
  {
    href: "https://www.anrdoezrs.net/click-100721030-13735126?url=https%3A%2F%2Fwww.drmax.sk%2Fcerave-hydratacny-krem-454g-promo&cjsku=X40872",
    text: "CERAVE krém 454g (DrMax)",
  },
];

export const links4: LinkItem2Props[] = [
  {
    href: "https://www.anrdoezrs.net/click-100721030-13620369?url=https%3A%2F%2Fwww.babickarstvo.sk%2Fpomocky-pre-lahsi-zivot-seniorov%2F2552-kompresni-podkolenky-se-zipem.html%23%2F310-velikost_obuvi-s_m_36_39&cjsku=2552-967",
    text: "kompresné pančuchy so zipsom (babickarstvo)",
  },
  {
    href: "https://www.anrdoezrs.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fobinadlo-pruzne-idealast-haft-10-cmx4-m%2F&cjsku=36407",
    text: "SL obv. Idealast-haft 10x4 (A22148) (Mojalekaren)",
  },
  {
    href: "https://www.kqzyfj.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fobin.-pruz.idealast-haft-8cmx4m-9311112%2F&cjsku=29145",
    text: "SL obv. Idealast-haft 8x4 (Mojalekaren)",
  },
];

export const links5: LinkItem2Props[] = [
  {
    href: "https://www.jdoqocy.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fvoltaren-forte-2-32-gel-100g&cjsku=1267183",
    text: "Voltaren Gel Forte (Pilulka)",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fvoltaren-forte-2-32-gel-100-g-461805%2F&cjsku=465204",
    text: "Voltaren Gel Forte (Mojalekaren)",
  },
  {
    href: "https://www.kqzyfj.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fvoltaren-rapid-25-mg-cps-mol-20-ks&cjsku=31067",
    text: "Voltaren rapid (Pilulka)",
  },
  {
    href: "https://www.dpbolvw.net/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fvoltaren-rapid-25mg-cps-mol-20x25mg-blis-pvc-pvd%2F&cjsku=213611",
    text: "Voltaren rapid (Mojalekaren)",
  },
];

export const links6: LinkItem2Props[] = [
  {
    href: "https://www.dpbolvw.net/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fmagne-b6-vrecka-20-ks&cjsku=139407",
    text: "Magne B6 ForteActive (Pilulka)",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fsanofi-magne-b6-balance-20-vreciek%2F&cjsku=369693",
    text: "Magne B6 Forte Active (Mojalekaren)",
  },
  {
    href: "https://www.dpbolvw.net/click-100721030-13735126?url=https%3A%2F%2Fwww.drmax.sk%2Fdr-max-magnesii-lactas-100tbl&cjsku=X45852",
    text: "Galvex Mg lactas tbl (DrMax)",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13677885?url=https%3A%2F%2Fwww.pilulka.sk%2Fmagnesii-lactici-500-mg-magneziove-tablety-galvex-tbl-500-mg-1x100-ks&cjsku=41908",
    text: "Galvex Mg lactas tbl (Pilulka)",
  },
];

export const links7: LinkItem2Props[] = [
  {
    href: "https://etabletka.sk/obchod/vulm-microvenal/?utm_source=dognet&a_aid=633942385be2f&a_bid=fe693712",
    text: "Microvenal VULM tbl (Etabletka)",
  },
  {
    href: "https://www.jdoqocy.com/click-100721030-13735126?url=https%3A%2F%2Fwww.drmax.sk%2Fmobivenal-micro-simple-x22490&cjsku=X22490",
    text: "Mobivenal Micro Simple tbl (Dr.Max)",
  },
  {
    href: "https://www.tkqlhce.com/click-100721030-13735126?url=https%3A%2F%2Fwww.drmax.sk%2Fmobivenal-micro-70&cjsku=X22489",
    text: "Mobivenal Micro tbl (Dr.Max)",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col grow">
      <section
        id="zXL_SQ"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div
          style={{ clipPath: "inset(0px)" }}
          className="pointer-events-none absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] top-0 -bottom-px inset-x-0 overflow-hidden"
        >
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/ALpBQyXKnqhOakP5/ideogram-75-Aq2eV2gee2tb08Dn.jpeg"
            width="100vw"
            loading="eager"
            className="w-full h-svh max-w-none fixed z-0 object-cover left-0 top-0 block-background__image block-background__image--fixed overflow-clip"
          />
          <div className="!hidden bg-ploy-background-secondary w-full h-svh fixed z-[2] opacity-0 left-0 top-0 block-background__overlay--fixed block-background__overlay" />
        </div>
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[12.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(15px,auto)_minmax(52px,auto)_minmax(85px,auto)_minmax(260px,auto)_minmax(16px,auto)_minmax(4503px,auto)_minmax(16px,auto)_minmax(140px,auto)_1fr] max-lg:px-4 lg:min-h-[327.5rem] lg:max-w-[76.5rem] lg:grid-cols-[19.8529%_7.27124%_6.53595%_3.83987%_25%_3.83987%_12.9085%_7.27124%_13.4804%] lg:grid-rows-[minmax(120px,auto)_minmax(83px,auto)_minmax(101px,auto)_minmax(207px,auto)_minmax(135px,auto)_minmax(125px,auto)_minmax(92px,auto)_minmax(4280px,auto)_1fr] lg:px-0">
          <div className="text-center w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-5 lg:col-end-6">
            <div id="zmnzcx" className={linkItemClassName2}>
              <h1 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-[3.25rem] max-lg:text-[2.5rem] lg:leading-[5.2rem] lg:text-[4rem]">
                {"nákup"}
              </h1>
            </div>
          </div>
          <div className="text-center w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-4 lg:col-end-7">
            <div id="zA8dDo" className={linkItemClassName2}>
              <p className="font-heading text-ploy-text-inverse/80 text-lg break-words mb-8 max-[921px]:mb-8">
                <span className="[color:inherit] break-words">
                  {
                    "lieky a prípravky použiteľné v predoperačnom a pooperačnom období s výhodnými cenami z e-shopov"
                  }
                </span>
              </p>
              <p className="font-heading text-ploy-text-inverse/80 text-lg break-words max-[921px]:mb-0 max-lg:leading-6 lg:leading-tight">
                <span className="[color:inherit] break-words lg:text-lg">
                  {
                    "uvádzame názvy liekov a prípravkov spolu s príslušnými linkami k ich predajcom, aby ste si ich vedeli zaobstarať s dostatočným časovým predstihom ak budú potrebné."
                  }
                </span>
              </p>
            </div>
          </div>
          <div className="text-center w-full h-full relative z-[3] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-2 lg:col-end-9 lg:row-start-8 lg:row-end-9">
            <div id="zDZknz" className={linkItemClassName2}>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <a
                  target="_blank"
                  href="https://etabletka.sk/obchod/detralex/?utm_source=dognet&a_aid=633942385be2f&a_bid=fe693712"
                  className={linkItemClassName}
                  data-ploy-component-type="button"
                  data-ploy-component-variant="outline"
                >
                  {"Detralex tbl (Etabletka)"}
                </a>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <a
                  target="_blank"
                  href="https://tinyurl.com/DETRALEX60"
                  className={linkItemClassName}
                  data-ploy-component-type="button"
                  data-ploy-component-variant="outline"
                >
                  {"Detralex tbl (Mojalekaren)"}
                </a>
              </p>
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {
                    "lacnejšie náhrady Detralexu, majú často aj výhodnejšie balenia"
                  }
                </strong>
              </p>
              <p className={linkItemClassName3} />
              {links7.map((item, index) => (
                <LinkItem2 key={index} {...item} />
              ))}
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {
                    "najčastejšie používané gély a krémy pri liečbe kŕčových žíl"
                  }
                </strong>
              </p>
              <p className={linkItemClassName3} />
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <a
                  target="_blank"
                  href="https://www.jdoqocy.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Flioton-gel-100-000gel-der-1x100g%2F&cjsku=115886"
                  className={linkItemClassName}
                  data-ploy-component-type="button"
                  data-ploy-component-variant="outline"
                >
                  {"Lioton Gel (Mojalekáreň)"}
                </a>
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                <a
                  target="_blank"
                  href="https://www.jdoqocy.com/click-100721030-13484074?url=https%3A%2F%2Fwww.mojalekaren.sk%2Fheparoid-leciva-2mg%2Fg-krem-100-g%2F&cjsku=495563"
                  className={linkItemClassName}
                  data-ploy-component-type="button"
                  data-ploy-component-variant="outline"
                >
                  {"Heparoid Léčiva (Mojalekáreň)"}
                </a>
              </p>
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"prvá pomoc pri častých kŕčoch na dolných končatinách"}
                </strong>
              </p>
              <p className={linkItemClassName3} />
              {links6.map((item, index) => (
                <LinkItem2 key={index} {...item} />
              ))}
              <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                <strong className="[color:inherit] break-words">
                  {"pomáha pri bolesti a zápale"}
                </strong>
              </p>
              {links5.map((item, index) => (
                <LinkItem2 key={index} {...item} />
              ))}
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"kompresné pančuchy"}
                </strong>
              </p>
              <p className={linkItemClassName3} />
              {links4.map((item, index) => (
                <LinkItem2 key={index} {...item} />
              ))}
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"prípravky na ošetrenie pokožky"}
                </strong>
              </p>
              <p className={linkItemClassName3} />
              {links3.map((item, index) => (
                <LinkItem2 key={index} {...item} />
              ))}
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"obväzový materiál"}
                </strong>
              </p>
              <p className={linkItemClassName3} />
              {links2.map((item, index) => (
                <LinkItem2 key={index} {...item} />
              ))}
              <p className={linkItemClassName3}>
                <strong className="[color:inherit] break-words">
                  {"ďalšie produkty na ošetrovanie kože"}
                </strong>
              </p>
              <p className={linkItemClassName3} />
              {links.map((item, index) => (
                <LinkItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="text-center w-full h-full relative z-[4] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-8 max-lg:row-end-9 lg:col-start-3 lg:col-end-8 lg:row-start-6 lg:row-end-7">
            <div id="zLeuaw" className={linkItemClassName2}>
              <h2 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-5xl">
                <strong className="[color:inherit] break-words">
                  {"zlatý štandard v liečbe varixov a opuchov"}
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
