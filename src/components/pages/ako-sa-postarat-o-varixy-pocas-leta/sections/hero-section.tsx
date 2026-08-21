const listItemClassName =
  "font-heading text-ploy-text-primary font-bold break-words mb-8 max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl";

/**
 * @ployComponent
 * @ployComponentId ako-sa-postarat-o-varixy-pocas-leta-hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
      {text}
    </p>
  );
}

type ListItem9Props = {
  text: string;
  text_1: string;
  separator?: string;
};

function ListItem9({ text, text_1, separator }: ListItem9Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          <strong className="[color:inherit] break-words">{text}</strong>
          {text_1}
        </p>
      </li>
      {separator}
    </>
  );
}

type ListItem10Props = {
  text: string;
  separator?: string;
};

function ListItem10({ text, separator }: ListItem10Props) {
  return (
    <>
      <li className="[color:inherit] break-words">
        <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0">
          {text}
        </p>
      </li>
      {separator}
    </>
  );
}

export const items: ListItemProps[] = [
  {
    text: "Nadváha môže významne prispievať k problémom s varixmi. Extra kilogramy vytvárajú väčší tlak na vaše žily, čo môže zhoršiť príznaky a urýchliť progresiu ochorenia.",
  },
  {
    text: 'Predstavte si to ako nosenie ťažkého batoha - čím je batoh ťažší, tým viac sa unavíte. Podobne, čím viac nadváhy máte, tým viac musia vaše žily "pracovať".',
  },
  { text: "Ako na to:" },
];

export const items2: ListItemProps[] = [
  {
    text: "To, čo jeme, má priamy vplyv na zdravie našich žíl. Strava bohatá na vlákninu, antioxidanty a omega-3 mastné kyseliny môže pomôcť znížiť zápal v tele a podporiť zdravie ciev.",
  },
  {
    text: "Predstavte si svoju stravu ako palivo pre vaše telo. Tak ako auto potrebuje kvalitné palivo na správne fungovanie, aj vaše žily potrebujú správne živiny, aby mohli efektívne pracovať.",
  },
  { text: "Ako na to:" },
];

export const items3: ListItemProps[] = [
  {
    text: "V lete máme často tendenciu tráviť dlhé hodiny sedením na terase alebo státím na grilovačke. Pre ľudí s varixmi to však môže byť problém. Dlhé obdobia bez pohybu môžu viesť k stagnácii krvi v žilách, čo zhoršuje príznaky varixov.",
  },
  {
    text: 'Predstavte si vaše žily ako rieku - keď voda (krv) neprúdi, začne stagnovať a vytvárať problémy. Preto je dôležité "rozhýbať rieku" pravidelným pohybom.',
  },
  { text: "Ako na to:" },
];

export const items4: ListItemProps[] = [
  {
    text: "Možno si myslíte, že s varixmi by ste mali len odpočívať a vyhýbať sa pohybu. Opak je však pravdou! Pravidelný pohyb je jedným z najlepších spôsobov, ako podporiť zdravie vašich žíl.",
  },
  {
    text: "Cvičenie pomáha stimulovať krvný obeh, posilňuje svaly nôh, ktoré podporujú žily, a pomáha udržiavať zdravú hmotnosť - všetko faktory, ktoré prispievajú k zdraviu vašich žíl.",
  },
  {
    text: "Ale pozor, nie každý druh cvičenia je vhodný pre ľudí s varixmi. Vyberajte si aktivity s nízkym dopadom, ktoré nezaťažujú príliš vaše nohy.",
  },
  { text: "Ako na to:" },
];

export const items5: ListItemProps[] = [
  {
    text: "Letné slnko môže byť príjemné, ale pre ľudí s varixmi môže predstavovať aj isté riziká. UV žiarenie môže poškodiť jemnú pokožku nad varixmi a zhoršiť ich vzhľad. Navyše, nadmerné vystavovanie sa slnku môže viesť k rozšíreniu ciev, čo môže zhoršiť príznaky varixov.",
  },
  {
    text: "Preto je dôležité chrániť svoju pokožku pred škodlivými účinkami slnka. Predstavte si to ako budovanie ochranného štítu pre vaše žily!",
  },
  { text: "Ako na to:" },
];

export const items6: ListItemProps[] = [
  {
    text: "Teraz sa dostávame k téme, ktorá možno nie je najsexi, ale je nesmierne dôležitá - kompresné pančuchy. Áno, viem, že pri predstave nosenia pančúch v letnej horúčave sa vám možno chce plakať, ale počkajte, kým vám nevysvetlím, prečo sú tak dôležité!",
  },
  {
    text: 'Kompresné pančuchy fungujú ako externá podpora pre vaše žily. Predstavte si ich ako také "objatie" pre vaše nohy, ktoré pomáha žilám lepšie pumpovať krv späť k srdcu. Sú ako malí pomocníci, ktorí celý deň masírujú vaše nohy a podporujú správny krvný obeh.',
  },
  {
    text: "V lete môžete siahnuť po ľahších verziách kompresných pančúch, ktoré sú priedušnejšie a pohodlnejšie aj v teplom počasí. Existujú dokonca aj štýlové varianty, takže nemusíte obetovať svoj módny výraz!",
  },
  { text: "Ako na to:" },
];

export const items7: ListItemProps[] = [
  {
    text: "Ďalším dôležitým tipom je pravidelné zdvíhanie nôh. Možno si teraz predstavujete, že budete musieť celé leto chodiť po rukách, ale nebojte sa, nie je to až také drastické!",
  },
  {
    text: 'Zdvíhanie nôh nad úroveň srdca pomáha využiť gravitáciu vo váš prospech. Keď zdvihnete nohy, uľahčíte žilám prácu pri pumpovaní krvi späť k srdcu. Je to ako keby ste otočili presýpacie hodiny - krv prirodzene "steká" späť k srdcu, čím sa znižuje tlak v žilách dolných končatín.',
  },
  { text: "Ako na to:" },
];

export const items8: ListItemProps[] = [
  {
    text: 'Prvým a najdôležitejším tipom je udržiavať sa hydratovaní. Možno si myslíte: "Počkať, veď varixy sú problém so žilami, nie s pitím vody!" Ale verte alebo nie, tieto dve veci spolu úzko súvisia.',
  },
  {
    text: 'Keď pijete dostatok vody, pomáhate svojmu telu udržiavať správnu konzistenciu krvi. Predstavte si to ako olej v motore vášho auta - keď je ho správne množstvo a má správnu hustotu, všetko beží hladko. Podobne, keď je vaša krv správne "nariedená", ľahšie prúdi žilami, čo znižuje tlak na steny žíl a zmierňuje príznaky varixov.',
  },
  {
    text: "Navyše, dostatočná hydratácia pomáha predchádzať opuchom, ktoré môžu zhoršovať problémy s varixmi. Takže si predstavte, že každý pohár vody, ktorý vypijete, je ako malý superhrdina, ktorý bojuje proti vašim varixom!",
  },
  { text: "Ako na to:" },
];

export const items9: ListItem9Props[] = [
  {
    text: "Teplo rozširuje cievy",
    text_1:
      ": Keď je teplo, naše cievy sa prirodzene rozširujú, aby pomohli telu ochladiť sa. Pre už aj tak rozšírené varixy to znamená ešte väčšie rozšírenie a tým pádom aj väčšie problémy.",
  },
  {
    text: "Opuchy sú častejšie",
    text_1:
      ": V teple máme tendenciu zadržiavať viac tekutín, čo môže viesť k opuchom nôh, ktoré ešte viac zaťažujú už aj tak namáhané žily.",
  },
  {
    text: "Viac času vonku",
    text_1:
      ": V lete trávime viac času vonku, často stojíme alebo sedíme dlhšie než zvyčajne, čo môže zhoršiť príznaky varixov.",
  },
  {
    text: "Zmena životného štýlu",
    text_1:
      ": Letné dovolenky môžu narušiť naše bežné rutiny, vrátane cvičenia a starostlivosti o naše žily.",
  },
];

export const items10: ListItem10Props[] = [
  { text: "Snažte sa vypiť aspoň 8 pohárov vody denne." },
  { text: "Noste so sebou vždy fľašu s vodou." },
  {
    text: "Ak nemáte radi chuť čistej vody, skúste ju ochutiť plátkami citróna, uhorky alebo mätou.",
  },
];

export const items11: ListItem10Props[] = [
  {
    text: "Keď odpočívate, položte si nohy na vyvýšené miesto, napríklad na vankúš alebo na operadlo pohovky.",
  },
  {
    text: "V práci si môžete pod stôl umiestniť malú stoličku alebo krabicu, na ktorú si môžete položiť nohy.",
  },
  {
    text: "Pred spaním si na 15-20 minút ľahnite a zdvihnite nohy oproti stene.",
  },
];

export const items12: ListItem10Props[] = [
  {
    text: "Poraďte sa so svojím lekárom o správnom stupni kompresie pre vaše potreby.",
  },
  {
    text: "Noste kompresné pančuchy najmä počas dňa, keď ste najviac aktívni.",
  },
  { text: "Investujte do kvalitných pančúch, ktoré sú priedušné a pohodlné." },
];

export const items13: ListItem10Props[] = [
  {
    text: "Používajte opaľovací krém s vysokým SPF, najmä na oblasti s varixmi.",
  },
  {
    text: "Noste voľné, ľahké oblečenie, ktoré zakryje vaše nohy, keď ste dlhšie na slnku.",
  },
  {
    text: "Vyhýbajte sa pobytu na priamom slnku počas najhorúcejších hodín dňa (obvykle medzi 10:00 a 16:00).",
  },
];

export const items14: ListItem10Props[] = [
  {
    text: "Pravidelne choďte na prechádzky, ideálne ráno alebo večer, keď nie je príliš horúco.",
  },
  {
    text: "Plávanie je vynikajúcou aktivitou pre ľudí s varixmi - voda poskytuje jemnú masáž a podporuje krvný obeh.",
  },
  {
    text: "Jazda na bicykli (stacionárnom alebo vonku) je ďalšou skvelou možnosťou.",
  },
  { text: "Joga môže pomôcť zlepšiť cirkuláciu a flexibilitu." },
];

export const items15: ListItem10Props[] = [
  {
    text: "Ak musíte dlho sedieť alebo stáť, robte si pravidelné prestávky na prechádzku alebo aspoň na pretiahnutie nôh.",
  },
  {
    text: "Pri sedení pravidelne hýbte nohami - krúžte členkami, napínajte a uvoľňujte lýtka.",
  },
  {
    text: "Ak stojíte, snažte sa presúvať váhu z jednej nohy na druhú alebo sa postavte na špičky a späť na päty.",
  },
];

export const items16: ListItem10Props[] = [
  {
    text: "Jedzte veľa ovocia a zeleniny, najmä bobuľovité ovocie, citrusy a listovú zeleninu.",
  },
  {
    text: "Zaraďte do svojho jedálnička potraviny bohaté na omega-3 mastné kyseliny, ako sú ryby, orechy a semená.",
  },
  {
    text: "Obmedzte príjem soli, ktorá môže viesť k zadržiavaniu tekutín a opuchom.",
  },
  {
    text: "Vyhnite sa príliš mastnému a vyprážanému jedlu, ktoré môže prispievať k zápalu v tele.",
  },
];

export const items17: ListItem10Props[] = [
  {
    text: "Udržiavajte vyváženú stravu bohatú na živiny a chudobnú na prázdne kalórie.",
  },
  {
    text: "Pravidelne cvičte, vyberte si aktivitu, ktorá vás baví a ktorú dokážete dlhodobo udržať.",
  },
  {
    text: "Pite dostatok vody, ktorá môže pomôcť potlačiť falošný pocit hladu.",
  },
];

export const items18: ListItem10Props[] = [
  {
    text: "Ak je to možné, zostaňte vo vnútri v klimatizovaných priestoroch počas najhorúcejších hodín dňa.",
  },
  {
    text: "Noste ľahké,voľné a priedušné oblečenie, ktoré pomáha udržiavať teplotu tela pod kontrolou.",
  },
  {
    text: "Používajte chladivé obklady na nohy po dlhom dni na nohách alebo po dlhšom pobyte na slnku. Týmto spôsobom môžete znížiť opuchy a zmierniť pocit ťažkých nôh.",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col grow">
      <section
        id="z0jbgu"
        className="w-full relative grid grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div
          data-ploy-animation-fx-hint="fade-in"
          className="text-center w-full max-w-[59.625rem] z-[14] flex flex-col items-start col-start-1 col-end-[-1] row-start-1 row-end-[-1] transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] m-auto block-blog-header max-lg:p-4 lg:px-[1.875rem] lg:py-11"
        >
          <div className="text-ploy-text-primary w-full block-blog-header__content">
            <h1 className="font-heading [color:inherit] leading-tight font-bold text-3xl mb-3 block-blog-header__title">
              {"Ako sa postarať o varixy počas leta?"}
            </h1>
            <p className="font-heading [color:inherit] leading-tight opacity-80 mb-3 block-blog-header__description">
              {
                "S niekoľkými jednoduchými opatreniami a správnou starostlivosťou o svoje žily môžete mať svoje varixy pod kontrolou a užívať si slnečné dni naplno. Nezabúdajte na hydratáciu, pohyb, ochranu pokožky a správnu stravu - to všetko sú kľúčové faktory, ktoré vám pomôžu zvládnuť leto s úsmevom na tvári a bez zbytočných starostí o svoje žily."
              }
            </p>
            <div className="text-ploy-text-primary opacity-80 blog-list-item-meta">
              <div className="font-heading leading-tight">
                <p className="[color:inherit] mb-1 blog-list-item-meta__author-name" />
                <p className="[color:inherit] blog-list-item-meta__subtitle">
                  <span className="[color:inherit]">8 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="zpZRCJ"
        className="w-full relative grid grow grid-cols-[100%] grid-rows-[100%]"
      >
        <div className="bg-ploy-background-primary absolute z-[13] transition-[background-color,height] duration-[0.3s,0.001s] ease-[ease-in-out,linear] delay-[0s,999s] inset-0 overflow-hidden text-ploy-text-primary" />
        <div className="w-full z-[14] grid mx-auto max-lg:min-h-[8.75rem] max-lg:max-w-[22.5rem] max-lg:grid-cols-[100%] max-lg:grid-rows-[minmax(40px,auto)_minmax(320px,auto)_minmax(64px,auto)_minmax(10377px,auto)_1fr] max-lg:px-4 lg:min-h-[395.0625rem] lg:max-w-[76.5rem] lg:grid-cols-[16.8301%_66.3399%_16.8301%] lg:grid-rows-[minmax(40px,auto)_minmax(344px,auto)_minmax(56px,auto)_minmax(5560px,auto)_1fr] lg:px-0">
          <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] row-start-2 row-end-3 max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3">
            <div
              id="zFhuEu"
              className="self-start w-full h-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] image-wrapper image-wrapper--layout layout-element__component--GridImage max-[921px]:w-full max-[921px]:h-full max-lg:max-h-80 lg:max-h-[21.5313rem]"
            >
              <div
                rel="nofollow"
                title="woman sitting on poolside setting both of her feet on pool"
                data-ploy-animation-fx-hint="fade-in"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] image image--grid image-wrapper--desktop max-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] min-[921px]:block overflow-hidden"
              >
                <img
                  alt="woman sitting on poolside setting both of her feet on pool"
                  src="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?auto=format&fit=crop&w=812&h=344"
                  height="344"
                  width="812"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
              <div
                rel="nofollow"
                title="woman sitting on poolside setting both of her feet on pool"
                style={{ mask: "0% 0% / 100% 100%", maskSize: "100% 100%" }}
                className="w-full h-full relative opacity-0 transition-[transform,translate,scale,rotate,opacity] image image--grid image-wrapper--mobile max-[921px]:block min-[921px]:hidden min-[920px]:max-[1225px]:max-w-full max-[921px]:w-full max-[921px]:h-full max-[361px]:max-w-full before:content-[''] before:absolute before:inset-0 before:z-[1] max-md:translate-y-[20%] md:max-lg:opacity-100 lg:translate-y-[20%] overflow-hidden"
              >
                <img
                  alt="woman sitting on poolside setting both of her feet on pool"
                  src="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?auto=format&fit=crop&w=360&h=351"
                  height="320"
                  width="328"
                  loading="eager"
                  className="w-full h-full max-w-none object-cover image__image overflow-clip"
                />
              </div>
            </div>
          </div>
          <div
            data-ploy-animation-fx-hint="fade-in"
            className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 transition-[transform,translate,scale,rotate,opacity] duration-[0.65s] delay-[0.1s] max-lg:col-start-1 max-lg:col-end-2 lg:col-start-2 lg:col-end-3"
          >
            <div
              id="zoeJiy"
              className="self-start break-words w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] layout-element__component--GridTextBox"
            >
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  'Leto je obdobím, kedy si väčšina z nás užíva slnečné lúče, teplé počasie a oddych pri vode. Pre ľudí trpiacich varixmi (známymi aj ako kŕčové žily) však môže toto ročné obdobie prinášať isté výzvy. Zvýšená teplota a vlhkosť môžu zhoršiť príznaky a spôsobiť nepohodlie. Ale nebojte sa! S správnymi stratégiami môžete mať svoje varixy pod kontrolou a užívať si leto naplno. Poďme sa spoločne pozrieť na to, ako sa o svoje "neposlušné žilky" postarať, aby ste si mohli leto užiť bez zbytočných starostí.'
                }
              </p>
              <h2 className={listItemClassName}>
                {"Čo sú to vlastne varixy a prečo nám v lete robia šarapatu?"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Skôr než sa ponoríme do tipov a trikov, ako zvládnuť varixy v lete, poďme si najprv vysvetliť, čo to tie varixy vlastne sú. Varixy, laicky nazývané kŕčové žily, sú rozšírené a pokrútené žily, ktoré sa najčastejšie vyskytujú na nohách. Predstavte si ich ako riečky, ktoré sa vyliali z koryta a začali si robiť, čo chcú. Tieto neposlušné žilky vznikajú, keď zlyhávajú ventily (chlopne) v žilách, ktoré za normálnych okolností pomáhajú krvi prúdiť smerom k srdcu."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V lete nám varixy robia väčšie problémy z niekoľkých dôvodov:"
                }
              </p>
              <ol className="break-words my-0">
                {items9.map((item, index) => (
                  <ListItem9
                    key={index}
                    {...item}
                    separator={index < items9.length - 1 ? "\n" : ""}
                  />
                ))}
              </ol>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "Ale nebuďte smutní! Aj keď leto prináša svoje výzvy, existuje mnoho spôsobov, ako sa o svoje varixy postarať a užiť si teplé mesiace bez zbytočného trápenia."
                }
              </p>
              <h2 className={listItemClassName}>
                {"Hydratácia - váš najlepší priateľ v boji proti varixom"}
              </h2>
              {items8.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items10.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items10.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Jedzte potraviny s vysokým obsahom vody, ako sú melóny, uhorky alebo paradajky."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Zdvíhanie nôh - gravitácii navzdory"}
              </h2>
              {items7.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items11.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items11.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak máte možnosť, doprajte si občas masáž nôh, ktorá pomôže stimulovať krvný obeh."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Kompresné pančuchy - módny doplnok vašich žíl"}
              </h2>
              {items6.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items12.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items12.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak vám prekáža nosenie pančúch celý deň, skúste ich aspoň na niekoľko hodín denne, napríklad počas cvičenia alebo dlhého státia."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Ochrana pokožky - váš štít proti slnku"}
              </h2>
              {items5.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items13.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items13.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak si chcete užiť slnko, robte to postupne a v krátkych intervaloch."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>Pohyb - tanec pre vaše žily</h2>
              {items4.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items14.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items14.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Vyhýbajte sa aktivitám s vysokým dopadom, ako je beh alebo skoky."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Vyhýbajte sa dlhému sedeniu alebo státiu"}
              </h2>
              {items3.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items15.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items15.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak máte sedavé zamestnanie, zvážte používanie stojana na notebook alebo výškovo nastaviteľného stola, aby ste mohli striedať sedenie a státie."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Zdravá strava - palivo pre vaše žily"}
              </h2>
              {items2.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items16.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items16.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Pite zelený čaj, ktorý obsahuje antioxidanty podporujúce zdravie ciev."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Udržiavanie zdravej váhy - ľahšie nohy, šťastnejšie žily"}
              </h2>
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
              <ul className="break-words my-0">
                {items17.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items17.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-8">
                    {
                      "Ak potrebujete schudnúť, robte to postupne a zdravo - rýchle diéty zvyčajne nevedú k dlhodobým výsledkom."
                    }
                  </p>
                  <p className="font-heading text-ploy-text-primary leading-6 break-words max-[921px]:mb-0" />
                </li>
              </ul>
              <h2 className={listItemClassName}>
                {"Hľadajte chlad - vaše žily milujú sviežosť"}
              </h2>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {
                  "V horúcich letných dňoch môže byť pre vaše žily ťažké udržať krok. Teplo spôsobuje rozšírenie ciev, čo môže zhoršiť príznaky varixov. Preto je dôležité hľadať spôsoby, ako sa ochladiť."
                }
              </p>
              <p className="font-heading text-ploy-text-primary leading-6 break-words mb-8 max-[921px]:mb-8">
                {"Ako na to:"}
              </p>
              <ul className="break-words my-0">
                {items18.map((item, index) => (
                  <ListItem10
                    key={index}
                    {...item}
                    separator={index < items18.length - 1 ? "\n" : ""}
                  />
                ))}
                <li className="[color:inherit] break-words">
                  <p className="font-heading text-ploy-text-primary text-lg break-words max-[921px]:mb-8">
                    {
                      "Osviežte sa častým sprchovaním studenou vodou, ktorá môže pomôcť stiahnuť rozšírené žily a zlepšiť krvný obeh. Ak máte možnosť, choďte sa vykúpať do studenej vody - či už v bazéne alebo prírodnom jazere. Chladná voda poskytne vašim žilám potrebnú úľavu."
                    }
                  </p>
                  <h2 className="font-heading text-ploy-text-primary font-bold break-words max-[921px]:mb-8 max-lg:leading-[2.925rem] max-lg:text-4xl lg:leading-tight lg:text-3xl">
                    {"Záver: Užívajte si leto bez starostí"}
                  </h2>
                  <p className="font-heading text-ploy-text-primary text-lg break-words max-[921px]:mb-0">
                    {
                      "Leto nemusí byť obdobím, kedy sa budete musieť vzdávať svojich obľúbených aktivít kvôli varixom. S niekoľkými jednoduchými opatreniami a správnou starostlivosťou o svoje žily môžete mať svoje varixy pod kontrolou a užívať si slnečné dni naplno. Nezabúdajte na hydratáciu, pohyb, ochranu pokožky a správnu stravu - to všetko sú kľúčové faktory, ktoré vám pomôžu zvládnuť leto s úsmevom na tvári a bez zbytočných starostí o svoje žily. Starajte sa o svoje telo, a ono sa vám odvďačí lepším zdravím a pohodou aj počas horúcich letných mesiacov."
                    }
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
