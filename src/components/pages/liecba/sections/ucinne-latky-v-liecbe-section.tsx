const listItemClassName =
  "font-heading text-ploy-text-inverse font-bold break-words mb-2 max-[921px]:mb-8 max-lg:text-2xl lg:leading-[3.25rem] lg:text-[2.5rem]";

type ListItemProps = {
  className: string;
  text: string;
};

function ListItem({ className, text }: ListItemProps) {
  return <p className={className}>{text}</p>;
}

export const items: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "flavonoidy sú skupina látok s významnými zdravotnými účinkami. doposiaľ bolo z rastlín izolovaných viac ako 5000 látok flavonoidovej povahy. medzi najvýznamnejšie flavonoidy patria rutín, kvercetín, kaempferol, myricetín, hesperidín, luteolín, apigenín, epikatechíny a proantokyanidíny.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "flavonoidy majú preukázaný antioxidačný efekt, protizápalový a protivírusový účinok. tlmia prejavy alergických reakcií a znižujú riziko vzniku nádorových ochorení. niektoré flavonoidy (napríklad rutín) zlepšujú kvalitu kapilár tým, že znižujú ich fragilitu a permeabilitu.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "vďaka antioxidačnému pôsobeniu sa flavonoidy odporúčajú ako doplnok výživy pri niektorých frekventovaných srdcovo-cievnych ochoreniach (napríklad ateroskleróza) a ďalších súvisiacich problémoch (znižovanie hladiny LDL-cholesterolu).(Detralex)",
  },
];

export const textSegments: ListItemProps[] = [
  {
    className:
      "font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "diosmín je flavonoid, ktorý hrá významnú úlohu v liečbe kŕčových žíl a žilovej nedostatočnosti. prvýkrát bol izolovaný z figovníka v roku 1925, ale až od roku 1969 sa začal používať na liečbu rôznych cievnych ochorení. dnes je často derivovaný z hesperidínu, flavonoidu z pomarančovej kôry.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8",
    text: "diosmín redukuje zápal, zlepšuje krvný a lymfatický obeh a ovplyvňuje tonus a vláčnosť žilovej steny. používa sa na liečbu kŕčových žíl, krvných zrazenín, krvácania do sietnice, venóznych bércových vredov, lymfedému, menšieho krvácania a bolesti panvového dna.",
  },
  {
    className:
      "font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8",
    text: "odporúčaná dĺžka užívania je do 3 mesiacov. najčastejšie nežiadúce účinky zahŕňajú bolesti žalúdka a brucha, hnačku a bolesť hlavy. (Detralex)",
  },
];

export default function UcinneLatkyVLiecbeSection() {
  return (
    <section
      id="ucinnelatky"
      className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
    >
      <div className="absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden">
        <img
          src="/migrated-assets/75a3e429c3c276481229.jpg"
          width="100vw"
          loading="eager"
          className="w-full h-[101%] max-w-none absolute z-0 object-cover left-0 top-0 block-background__image overflow-clip"
        
        alt=""/>
        <div className="bg-ploy-background-inverse w-full h-full absolute z-[2] opacity-75 left-0 top-0 block-background__overlay text-ploy-text-inverse" />
      </div>
      <div className="w-full z-[14] grid mx-auto max-lg:max-w-[22.5rem] max-lg:grid-cols-[15.8537%_68.2927%_15.8537%] max-lg:grid-rows-[minmax(16px,auto)_auto_minmax(49px,auto)_minmax(219px,auto)_1fr] max-lg:px-4 lg:max-w-[76.5rem] lg:grid-cols-[12.1732%_45.7516%_5.14706%_21.5686%_15.3595%] lg:grid-rows-[minmax(35px,auto)_minmax(71px,auto)_minmax(338px,auto)_auto_1fr] lg:px-0">
        <div className="text-left w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-end-5">
          <div
            id="zDWtHC"
            className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
          >
            <h3 className="font-heading text-ploy-text-inverse font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-10 max-lg:text-3xl lg:leading-[3.9rem] lg:text-5xl">
              {"účinné látky v liečbe kŕčových žíl"}
            </h3>
            <h4 className={listItemClassName}>diosmín</h4>
            {textSegments.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
            <h4 className={listItemClassName}>flavonoidy</h4>
            {items.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
            <h4 className={listItemClassName}>ruscus</h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "extrakt z listnatca tŕnitého (Ruscus aculeatus) pozitívne ovplyvňuje elasticitu žilových stien, napomáha obmedzovať tvorbu opuchov a prispieva k pocitu sviežosti a ľahkosti nôh. saponíny ruscogenín a neoruscogenín obsiahnuté v listnatci posilňujú ochabnuté žily a zabraňujú zápalom. taktiež zmršťujú malé cievky a znižujú tak prenikanie tekutiny do okolitých pletív. rastlina sa osvedčila aj pri liečbe hemoroidov."
              }
            </p>
            <h4 className={listItemClassName}>aescín</h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8">
              {
                "aescín je komplex triterpénových saponínov a glykozidov nachádzajúcich sa v pagaštane konskom (Aesculus hippocastanum). pomáha znížiť koncentráciu určitých enzýmov v krvi pacientov s chorými cievami, čím odstraňuje zadržiavanie tekutín v tkanivách. vedci potvrdili aj jeho schopnosť tonizovať cievy, čo podporuje spätný tok krvi."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "aescín sa používa proti ťažkostiam pri chronickej žilovej nedostatočnosti, pocitoch ťažkých a opuchnutých nôh, kŕčových žilách, nočných kŕčoch v lýtkach a pri hemoroidoch. vtieranie masti a kúpele sa používajú na poranenia spôsobené pri športe, na výrony, omrzliny a poruchy prekrvenia.(Aescin)"
              }
            </p>
            <h4 className={listItemClassName}>sulodexid</h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8">
              {
                "sulodexid je prírodná zmes látok získavaná z črevnej mukózy ošípaných enzymatickou hydrolýzou. obsahuje 80% strednemolekulárného heparínu a 20% dermatanovej zložky. Má antitrombotický účinok, znižuje tvorbu trombóz a podporuje prirodzenú fibrinolytickú aktivitu organizmu."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "sulodexid nachádza uplatnenie predovšetkým v prípadoch, kedy nie je plná antikoagulačná liečba vyžadovaná, alebo tam, kde nie je takáto liečba bezpečná. liečba sulodexidom nevyžaduje pravidelné kontroly koagulácie.(Vessel Due F)"
              }
            </p>
            <h4 className={listItemClassName}>rutín a hydroxyethylrutozidy</h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8">
              {
                "rutín je citrusový flavonoid, ktorý sa nachádza vo veľkom množstve rastlín vrátane citrusov. hydroxyethylrutozidy sú semisyntetické deriváty rastlinných zložiek. používajú sa v medicíne na liečbu chronickej venóznej insuficiencie a hypertenznej mikroangiopatie."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-8 max-[921px]:mb-8">
              {
                "ich účinky zahŕňajú redukciu kapilárnej permeability, obnovenie veno-arteriolárneho reflexu, predĺženie času opätovného venózneho plnenia a zvýšenie transkutánneho kyslíkového napätia.(Ascorutin)"
              }
            </p>
            <h4 className={listItemClassName}>resveratrol</h4>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words mb-2 max-[921px]:mb-8">
              {
                "resveratrol patrí medzi stilbény. súčasný výskum dokazuje jednoznačný pozitívny efekt na ľudské zdravie. má preventívny ale aj liečebný účinok pri mnohých chorobách ako sú malígne, ischemické a srdcovocievne ochorenia. má pravdepodobný potenciál predlžovať život. najvyšší obsah má červené víno, pričom koncentráciu ovplyvňuje odroda, ročník a proces výroby."
              }
            </p>
            <p className="font-heading text-ploy-text-inverse leading-6 break-words max-[921px]:mb-0">
              {
                "tieto účinné látky predstavujú významný pokrok v liečbe kŕčových žíl a žilovej nedostatočnosti. ich kombinácia v rôznych prípravkoch umožňuje komplexný prístup k liečbe týchto ochorení. vždy sa však poraďte s lekárom alebo lekárnikom pred začatím akejkoľvek liečby."
              }
            </p>
          </div>
        </div>
        <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] max-lg:col-start-2 max-lg:col-end-3 max-lg:row-start-4 max-lg:row-end-5 lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4">
          <div
            id="zaKTfQ"
            className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-[13.6875rem] lg:max-h-[21.1563rem]"
          >
            <div
              rel="nofollow"
              title="a doctor and a nurse in a hospital room"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
            >
              <img
                alt="a doctor and a nurse in a hospital room"
                src="/migrated-assets/eb0edce7d5622709dc1e.jpg"
                height="338"
                width="264"
                loading="eager"
                className="w-full h-full max-w-none object-cover image__image overflow-clip"
              />
            </div>
            <div
              rel="nofollow"
              title="a doctor and a nurse in a hospital room"
              style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
              className="w-full h-full relative opacity-0 translate-y-[20%] transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] overflow-hidden"
            >
              <img
                alt="a doctor and a nurse in a hospital room"
                src="/migrated-assets/f90614a40058629c0892.jpg"
                height="219"
                width="224"
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
