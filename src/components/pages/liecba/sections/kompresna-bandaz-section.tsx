const listItemClassName =
  "font-heading text-ploy-text-inverse break-words max-[921px]:mb-0 max-lg:text-lg lg:leading-tight lg:text-base";
const listItemClassName2 =
  "w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden";
const listItemClassName3 =
  "w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden";

/**
 * @ployComponent
 * @ployComponentId liecba-kompresna-bandaz-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: kompresná bandáž
 */
type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
  return (
    <>
      <li className="text-ploy-text-inverse break-words">
        <p className={listItemClassName}>{text}</p>
      </li>
      {separator}
    </>
  );
}

export const kompresnaBandazSection: ListItemProps[] = [
  {
    text: "ak bol obväz aplikovaný na chodidlo a nohu, uistite sa, aby ste zabránili tomu, aby sa okraj kompresívnej bandáže pri nasadzovaní pančúch neroloval blízko prstov na nohách, ak sa okraj roluje, rozviňte ho, inak sa môže vytvoriť nepríjemný hrbol pri chôdzi",
  },
  {
    text: "vyberte si obuv a oblečenie, ktoré je pohodlná a umožňuje plný rozsah pohybu",
  },
  {
    text: "vyhnite sa obuvi alebo oblečeniu, ktoré sú tesné alebo bránia normálnym pohybom",
  },
  { text: "možnosť normálneho pohybu pomáha toku lymfy na zníženie opuchu" },
  {
    text: "pri kúpaní chráňte svoj obväz pred namočením. ak navlhne, nechajte ho na vzduchu, kým nevyschne",
  },
];

export default function KompresnaBandazSection({
  items = kompresnaBandazSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <section
      id="bandaz"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/0a5c5bd11dad1f40650c.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        />
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-70 left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:min-h-[119.125rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[15.8537%_10.6707%_12.5%_29.5732%_4.87805%_10.3659%_16.1585%] max-lg:grid-rows-[minmax(24px,auto)_minmax(42px,auto)_minmax(38px,auto)_minmax(150px,auto)_minmax(25px,auto)_minmax(1345px,auto)_minmax(16px,auto)_minmax(96px,auto)_minmax(73px,auto)_minmax(55px,auto)_1fr] max-lg:px-4 lg:min-h-[71rem] lg:max-w-[76.5rem] lg:grid-cols-[12.8268%_32.6797%_8.74183%_2.77778%_9.47712%_10.2941%_7.27124%_4.98366%_10.9477%] lg:grid-rows-[minmax(38px,auto)_minmax(122px,auto)_minmax(3px,auto)_minmax(54px,auto)_minmax(248px,auto)_minmax(79px,auto)_minmax(216px,auto)_minmax(39px,auto)_minmax(182px,auto)_minmax(34px,auto)_1fr] lg:px-0">
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-8 max-lg:row-start-6 max-lg:row-end-7 lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-10"
        >
          <div
            id="zZnCl3"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h4 className="font-heading text-ploy-text-inverse font-bold text-2xl break-words mb-2 max-[921px]:mb-8 max-lg:leading-8 lg:leading-tight">
              <strong className="[color:inherit] break-words">
                {"elastický a lepivý obväz"}
              </strong>
            </h4>
            <p className="font-heading text-ploy-text-inverse text-2xl break-words mb-2 max-[921px]:mb-8 max-lg:leading-6 lg:leading-tight" />
            <ul className="break-words my-0">
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items.length - 1 ? "\n" : ""}
                />
              ))}
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse break-words max-[921px]:mb-8 max-lg:text-lg lg:leading-tight lg:text-base">
                  {
                    "ak sa váš kompresný systém počas spánku prilepí na obliečky, môže byť lepšie nosiť ľahké pyžamo alebo bavlnenú bandáž (pruban) ponad kompresný materiál"
                  }
                </p>
                <p className={listItemClassName}>
                  <strong className="[color:inherit] break-words">
                    <br className="break-words" />
                  </strong>
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className={listItemClassName}>
                  <strong className="[color:inherit] break-words">
                    {"dvojvsrtvový kompresný systém" + " "}
                  </strong>
                  {
                    "s lepivým obväzom funguje iným spôsobom ako iné obväzy. skladá sa z dvoch vrstiev, ktoré sú tenké a diskrétne:"
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className={listItemClassName}>
                  <strong className="[color:inherit] break-words">
                    {"komfortná vrstva" + " "}
                  </strong>
                  <em className="[color:inherit] break-words" />
                  {
                    " je penový alebo elastický obväz, ktorý drží k pokožke. to pomáha predchádzať skĺznutiu, keď vaša končatina zmenšuje svoju veľkosť."
                  }
                </p>
              </li>
              <li className="text-ploy-text-inverse break-words">
                <p className="font-heading text-ploy-text-inverse break-words max-[921px]:mb-0 max-lg:text-lg lg:text-base">
                  <strong className="[color:inherit] break-words">
                    {"kompresná vrstva" + " "}
                  </strong>
                  <em className="[color:inherit] break-words" />
                  {
                    " pôsobí tlačením, čo napomáha uvoľňovaniu tekutín naspäť do krvného obehu, čím pomáha znižovať objem vašej končatiny"
                  }
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-3 max-lg:col-end-6 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-5 lg:col-end-8 lg:row-start-3 lg:row-end-6">
          <div
            id="ziHs25"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[9.375rem] lg:max-h-[19.0938rem]"
          >
            <div
              rel="nofollow"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName2}
            >
              <img
                alt=""
                src="/migrated-assets/7d8734c23a0b01b81b71.jpg"
                height="305"
                width="331"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName3}
            >
              <img
                alt=""
                src="/migrated-assets/6f01c89434d1a848f06d.jpg"
                height="150"
                width="154"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="w-full h-full relative z-[3] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:text-center max-lg:col-start-1 max-lg:col-end-8 max-lg:row-end-3 lg:text-left lg:col-start-2 lg:col-end-3 lg:row-end-4"
        >
          <div
            id="zeAnqZ"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold break-words max-[921px]:mb-0 max-lg:leading-10 max-lg:text-3xl lg:leading-tight lg:text-5xl">
              <strong className="[color:inherit] break-words">
                {"kompresná bandáž"}
              </strong>
            </h3>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[4] grid grid-cols-[100%] max-lg:col-start-2 max-lg:col-end-5 max-lg:row-start-8 max-lg:row-end-10 lg:col-start-6 lg:col-end-9 lg:row-start-7 lg:row-end-9">
          <div
            id="zO6crN"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[10.5625rem] lg:max-h-64"
          >
            <div
              rel="nofollow"
              title="a group of white bandages and bandages on a white background"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName2}
            >
              <img
                alt="a group of white bandages and bandages on a white background"
                src="/migrated-assets/4afbc5b64ed2efdfa6c8.jpg"
                height="255"
                width="276"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a group of white bandages and bandages on a white background"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName3}
            >
              <img
                alt="a group of white bandages and bandages on a white background"
                src="/migrated-assets/c4e1f39c517bde5c86e1.jpg"
                height="169"
                width="173"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[5] grid grid-cols-[100%] col-start-4 col-end-7 row-end-11 max-lg:row-start-9 lg:row-start-8">
          <div
            id="zn6mnJ"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-32 lg:max-h-64"
          >
            <div
              rel="nofollow"
              title="a group of bandages and bandages on a white background"
              data-ploy-animation-fx-hint="fade-in"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName2}
            >
              <img
                alt="a group of bandages and bandages on a white background"
                src="/migrated-assets/ad1e0604156b3374e32f.jpg"
                height="255"
                width="276"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a group of bandages and bandages on a white background"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className={listItemClassName3}
            >
              <img
                alt="a group of bandages and bandages on a white background"
                src="/migrated-assets/da5af8cecad18251386a.jpg"
                height="128"
                width="147"
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
