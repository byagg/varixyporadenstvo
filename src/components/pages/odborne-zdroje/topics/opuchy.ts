import type { Topic } from "../types";

export const opuchy: Topic = {
  slug: "opuchy-koncatin",
  title: "Opuchy končatín",
  seoTitle: "Diferenciálna diagnostika opuchov dolných končatín",
  subtitle: "Diferenciálna diagnostika opuchu dolných končatín",
  description:
    "Systematický prístup k opuchu dolných končatín – jednostranný verzus obojstranný, akútny verzus chronický, systémové a lokalizované príčiny, lieky vyvolávajúce opuch a odporúčané vyšetrenia.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "pristup",
      heading: "Prvé tri otázky",
      blocks: [
        {
          kind: "paragraph",
          text: "Opuch je nahromadenie tekutiny v intersticiálnom priestore pri narušení rovnováhy medzi kapilárnym hydrostatickým a onkotickým tlakom. Vzniká pri zvýšenom kapilárnom hydrostatickom tlaku, zvýšenom objeme plazmy, zníženom onkotickom tlaku plazmy (hypoalbuminémia), zvýšenej kapilárnej permeabilite alebo pri obštrukcii lymfatických ciest.",
        },
        {
          kind: "list",
          items: [
            "Ako dlho opuch trvá? Náhly opuch končatiny v priebehu menej než 72 hodín je typickejší pre hlbokú žilovú trombózu, celulitídu, ruptúru Bakerovej cysty, akútny kompartment syndróm pri traume alebo nedávne nasadenie blokátorov kalciových kanálov.",
            "Je jednostranný alebo obojstranný? Obojstranný alebo generalizovaný opuch svedčí skôr pre systémovú príčinu.",
            "Mení sa s polohou? K anamnéze patrí aj liekový záznam a zhodnotenie systémových ochorení.",
          ],
        },
      ],
    },
    {
      id: "systemove",
      heading: "Systémové príčiny",
      blocks: [
        {
          kind: "table",
          columns: ["Príčina", "Mechanizmus"],
          rows: [
            [
              "Alergická reakcia, urtikária, angioedém",
              "Zvýšená kapilárna permeabilita",
            ],
            [
              "Srdcové ochorenie",
              "Zvýšená kapilárna permeabilita pri systémovej žilovej hypertenzii, zvýšený objem plazmy",
            ],
            [
              "Pečeňové ochorenie",
              "Zvýšená kapilárna permeabilita pri systémovej žilovej hypertenzii, znížený onkotický tlak plazmy pri zníženej syntéze bielkovín",
            ],
            [
              "Malabsorpcia, proteínovo-energetická malnutrícia",
              "Znížená syntéza bielkovín so znížením onkotického tlaku plazmy",
            ],
            [
              "Obštrukčné spánkové apnoe",
              "Pľúcna hypertenzia so zvýšením kapilárneho hydrostatického tlaku",
            ],
            [
              "Gravidita a premenštruačný opuch",
              "Zvýšený objem plazmy",
            ],
            [
              "Ochorenie obličiek",
              "Zvýšený objem plazmy, znížený onkotický tlak plazmy pri strate bielkovín",
            ],
          ],
        },
      ],
    },
    {
      id: "lokalizovane",
      heading: "Lokalizované príčiny",
      blocks: [
        {
          kind: "table",
          columns: ["Príčina", "Mechanizmus"],
          rows: [
            ["Celulitída", "Zvýšená kapilárna permeabilita"],
            [
              "Chronická žilová insuficiencia",
              "Zvýšená kapilárna permeabilita pri lokálnej žilovej hypertenzii",
            ],
            [
              "Kompartment syndróm",
              "Zvýšená kapilárna permeabilita pri lokálnej žilovej hypertenzii",
            ],
            [
              "Komplexný regionálny bolestivý syndróm I. typu",
              "Neurogénne podmienená zvýšená kapilárna permeabilita",
            ],
            ["Hlboká žilová trombóza", "Zvýšená kapilárna permeabilita"],
            [
              "Obštrukcia ilickej žily",
              "Zvýšená kapilárna permeabilita pri lokálnej žilovej hypertenzii",
            ],
            ["Lipedém", "Hromadenie tekutiny v tukovom tkanive"],
            [
              "Lymfedém – primárny (congenitálny, praecox, tarda) a sekundárny (disekcia axilárnych uzlín, operácia, trauma, ožarovanie, nádor, filarióza)",
              "Lymfatická obštrukcia",
            ],
            [
              "Mayov-Thurnerov syndróm (útlak ľavej ilickej žily pravou ilickou artériou)",
              "Zvýšená kapilárna permeabilita pri lokálnej žilovej hypertenzii z útlaku",
            ],
          ],
        },
      ],
    },
    {
      id: "lieky",
      heading: "Lieky spájané s opuchom",
      blocks: [
        {
          kind: "table",
          columns: ["Skupina", "Zástupcovia"],
          rows: [
            ["Antidepresíva", "Inhibítory monoaminooxidázy, trazodón"],
            [
              "Antihypertenzíva",
              "Betablokátory, blokátory kalciových kanálov, klonidín, hydralazín, metyldopa, minoxidil",
            ],
            ["Antivirotiká", "Acyklovir"],
            [
              "Chemoterapeutiká",
              "Cyklofosfamid, cyklosporín, cytozínarabinozid, mitramycín",
            ],
            [
              "Cytokíny",
              "G-CSF, GM-CSF, interferón alfa, interleukín-2, interleukín-4",
            ],
            [
              "Hormóny",
              "Androgény, kortikosteroidy, estrogén, progesterón, testosterón",
            ],
            ["Nesteroidné antiflogistiká", "Celekoxib, ibuprofén"],
          ],
        },
      ],
    },
    {
      id: "klinika",
      heading: "Rozlíšenie pri lôžku",
      blocks: [
        {
          kind: "list",
          items: [
            "Hodnotí sa lokalizácia, časový priebeh a rozsah pittingu.",
            "Tuhá koža bez pittingu je charakteristická pre lymfedém.",
            "Nemožnosť uchopiť kožu na dorze druhého prsta nohy do pinzetového úchopu je Kaposiho-Stemmerov príznak.",
            "Rýchly rozvoj generalizovaného pittingového opuchu svedčí pre systémovú príčinu.",
            "Jednostranný opuch z útlaku vzniká pri lokálnej prekážke žilového alebo lymfatického odtoku.",
          ],
        },
      ],
    },
    {
      id: "vysetrenia",
      heading: "Vyšetrenia",
      blocks: [
        {
          kind: "list",
          items: [
            "Nátriuretický peptid pri podozrení na srdcové zlyhávanie.",
            "Kreatinín a vyšetrenie moču pri podozrení na ochorenie obličiek.",
            "Pečeňové enzýmy a albumín pri podozrení na pečeňové ochorenie.",
            "D-dimér (ELISA) pri akútnom jednostrannom opuchu u pacienta s nízkym rizikom umožňuje vylúčiť hlbokú žilovú trombózu; test má nízku špecificitu a býva zvýšený aj bez trombózy.",
            "Kompresívna ultrasonografia s dopplerovským hodnotením je metódou voľby pri podozrení na hlbokú žilovú trombózu – senzitivita 95 % a špecificita 96 % pre proximálnu trombózu, pri lýtkových žilách je senzitivita nižšia (73 %). Duplexné vyšetrenie potvrdí aj chronickú žilovú insuficienciu.",
            "Lymfoscintigrafia sa používa pri podozrení na lymfedém, pretože tok lymfy nie je ultrazvukom detegovateľný.",
          ],
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Trayes KP, Studdiford JS, Pickle S, Tully AS. Edema: diagnosis and management. Am Fam Physician. 2013;88(2):102–110.",
    },
    {
      citation:
        "Ďalšie odborné materiály k opuchom dolných končatín (zbierka PDF a DOCX)",
      href: "https://varixyporadenstvo.webnode.sk/webstranky/",
    },
  ],
};
