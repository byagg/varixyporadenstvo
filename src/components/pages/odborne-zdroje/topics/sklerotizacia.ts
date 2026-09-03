import type { Topic } from "../types";

export const sklerotizacia: Topic = {
  slug: "komplikacie-sklerotizacie",
  title: "Komplikácie sklerotizácie",
  seoTitle: "Komplikácie sklerotizácie varixov, kontraindikácie a sklerotizanty",
  subtitle: "Komplikácie, kontraindikácie a voľba sklerotizačnej látky",
  description:
    "Časté aj závažné komplikácie sklerotizácie, absolútne a relatívne kontraindikácie, prehľad sklerotizačných látok, porovnanie peny a roztoku a starostlivosť po výkone.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "caste",
      heading: "Časté a mierne komplikácie",
      blocks: [
        {
          kind: "list",
          items: [
            "Bolesť pri aplikácii sklerotizantu alebo po nej, erytém, opuch, pruritus, ulcerácia, zvýšený rast ochlpenia a teleangiektatický matting.",
            "Hyperpigmentácia alebo zmena sfarbenia kože z depozitov hemosiderínu sa objavuje približne u 30 % pacientov 6 až 8 týždňov po sklerotizácii.",
            "Bolesť je výraznejšia pri hypertonickom roztoku soli a pri glyceríne.",
            "Alergická reakcia na tetradecylsulfát sodný alebo polidokanol sa vyskytuje u menej než 1 % pacientov.",
          ],
        },
      ],
    },
    {
      id: "zavazne",
      heading: "Zriedkavé a závažné komplikácie",
      blocks: [
        {
          kind: "list",
          items: [
            "Systémové prejavy – tlak na hrudníku, poruchy videnia, tranzitórny ischemický atak, závrat a migrenózna bolesť hlavy.",
            "Rekanalizácia pri neúplnej deštrukcii žily s potrebou opakovaného výkonu.",
            "Osmotické látky nesú zvýšené riziko lokálneho poškodenia tkaniva a ulcerácie pri extravazácii alebo pri aplikácii do arterioly.",
            "Intraartériová aplikácia môže vyvolať akútnu končatinovú ischémiu vyžadujúcu amputáciu.",
          ],
        },
        {
          kind: "note",
          text: "Poruchy videnia a tranzitórne ischemické ataky boli opísané u pacientov s otvoreným foramen ovale.",
        },
      ],
    },
    {
      id: "kontraindikacie",
      heading: "Kontraindikácie",
      blocks: [
        {
          kind: "table",
          columns: ["Absolútne", "Relatívne"],
          rows: [
            [
              "Alergia na konkrétny sklerotizant",
              "Výrazne obmedzená pohyblivosť",
            ],
            [
              "Prebiehajúca systémová infekcia alebo infekcia v mieste výkonu",
              "Anamnéza výraznej alergickej diatézy alebo astmy",
            ],
            [
              "Anamnéza hlbokej žilovej trombózy",
              "Ťažká insuficiencia hlbokého žilového systému",
            ],
            [
              "Ťažké periférne artériové ochorenie",
              "Trombofília",
            ],
            [
              "Pokročilé kolagénové vaskulárne ochorenie",
              "Gravidita a dojčenie",
            ],
            [
              "Kardiovaskulárna alebo neurologická príhoda po predchádzajúcej aplikácii sklerotizantu",
              "Otvorené foramen ovale; rozsiahle varixy pre vyššie riziko rekanalizácie",
            ],
          ],
        },
      ],
    },
    {
      id: "latky",
      heading: "Sklerotizačné látky",
      blocks: [
        {
          kind: "table",
          columns: ["Skupina", "Zástupcovia"],
          rows: [
            ["Osmotické", "23 % hypertonický roztok soli, glycerín"],
            [
              "Detergenty",
              "Tetradecylsulfát sodný (STS), polidokanol, morrhuát sodný, etanolamín-oleát",
            ],
            ["Iritanciá", "Etanol, fenol, polyjodidový jód"],
          ],
        },
        {
          kind: "list",
          items: [
            "STS a polidokanol sa dodávajú vo viacerých koncentráciách, výber sa riadi kalibrom žily.",
            "3 % pena STS je účinnejšia než 3 % polidokanol.",
            "Polidokanol je vďaka anestetickému účinku vhodnejší na teleangiektázie a retikulárne žily; micely tvorí pri 5 % koncentrácii.",
          ],
        },
      ],
    },
    {
      id: "pena",
      heading: "Pena verzus roztok",
      blocks: [
        {
          kind: "list",
          items: [
            "Bubliny peny zväčšujú povrch kvapaliny, predlžujú kontakt s endotelom a obmedzujú premiešanie sklerotizantu s krvou.",
            "Pena je viskóznejšia, má exponenciálne väčší povrch a umožňuje ošetrenie menším objemom.",
            "Pena vyvoláva vazospastickú odpoveď, ktorá k sebe priblíži steny žily.",
            "Systematický prehľad nezistil významný rozdiel vo výskyte komplikácií ani vo výsledkoch medzi penovou a roztokovou sklerotizáciou.",
          ],
        },
      ],
    },
    {
      id: "po-vykone",
      heading: "Starostlivosť po výkone",
      blocks: [
        {
          kind: "list",
          items: [
            "Pacient zostáva niekoľko minút po aplikácii v ľahu alebo v sede.",
            "Ošetrená končatina sa zabandážuje kompresívnym obväzom alebo sa nasadí kompresívna pančucha.",
            "Obväz ani pančucha sa 7 dní neskladá, aby zostala zachovaná kompresia ošetrených žíl.",
            "Kompresia bezprostredne po sklerotizácii obmedzuje tvorbu trombu.",
            "Pacient sa vedie k chôdzi s nasadenou kompresiou.",
          ],
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Sclerotherapy. In: StatPearls. Treasure Island (FL): StatPearls Publishing.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK599526/",
    },
  ],
};
