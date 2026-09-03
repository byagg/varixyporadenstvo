import type { Topic } from "../types";

export const vazoneurozy: Topic = {
  slug: "vazoneurozy",
  title: "Vazoneurózy",
  seoTitle: "Vazoneurózy – Raynaudov fenomén, diagnostika a liečba",
  subtitle: "Raynaudov fenomén: primárny verzus sekundárny, diagnostika a liečba",
  description:
    "Raynaudov fenomén – trifázická zmena sfarbenia, odlíšenie primárnej a sekundárnej formy, varovné znaky, príčiny sekundárnej formy, kapilaroskopia nechtového valu a stupňovitá liečba.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "definicia",
      heading: "Definícia a klinický obraz",
      blocks: [
        {
          kind: "paragraph",
          text: "Raynaudov fenomén je prechodná periférna vazokonstrikčná odpoveď na chlad alebo emočný stres, pri ktorej dochádza k vazokonstrikcii digitálnych artérií a kožných arteriol.",
        },
        {
          kind: "table",
          columns: ["Fáza", "Nález"],
          rows: [
            ["Biela – pallor", "Chladné prsty s ohraničenými bielymi okrskami"],
            ["Modrá – cyanóza", "Cyanotické zmeny kože"],
            ["Červená – hyperémia", "Erytém pri reaktívnej hyperémii počas ohrievania"],
          ],
        },
        {
          kind: "paragraph",
          text: "Jednotlivé fázy trvajú približne 20 minút.",
        },
      ],
    },
    {
      id: "primarny-sekundarny",
      heading: "Primárny verzus sekundárny",
      blocks: [
        {
          kind: "table",
          columns: ["", "Primárna forma", "Sekundárna forma"],
          rows: [
            [
              "Podklad",
              "Bez systémového ochorenia, zvýšená citlivosť alfa-2 adrenergných receptorov digitálnych a kožných ciev",
              "Sprevádza systémové alebo spojivové ochorenie",
            ],
            [
              "Priebeh",
              "Ataky menej intenzívne, možná spontánna remisia",
              "Ťažší priebeh, možná digitálna ulcerácia až gangréna a strata prsta",
            ],
          ],
        },
        {
          kind: "list",
          items: [
            "Postihnutie palca môže byť známkou sekundárnej formy.",
            "Čím neskorší je začiatok ťažkostí, najmä v tretej a štvrtej dekáde, tým vyššie je riziko rozvoja ochorenia spojivového tkaniva.",
            "Ulcerácia končekov prstov rúk a nôh svedčí pre sekundárnu formu.",
            "Ireverzibilné livedo reticularis s fialkastým mramorovaním alebo retikulárnym vzorom je ďalším varovným znakom.",
          ],
        },
      ],
    },
    {
      id: "priciny",
      heading: "Príčiny sekundárnej formy",
      blocks: [
        {
          kind: "list",
          items: [
            "Ochorenia spojivového tkaniva – najčastejšie sklerodermia, systémový lupus erythematosus, Sjögrenov syndróm a antifosfolipidový syndróm.",
            "Lieky – antimigrenózne prípravky, interferón alfa a beta, cyklosporín a neselektívne betablokátory.",
            "Pracovná expozícia – syndróm vibrácií prenášaných na ruky, expozícia polyvinylchloridu, chladové poškodenie a práca s muníciou.",
            "Obštrukčné cievne ochorenie (typicky nad 60 rokov) – tromboangiitis obliterans, mikroembolizácia, diabetická angiopatia a ateroskleróza.",
            "Infekcie – parvovírus B19, cytomegalovírus, hepatitída B a C.",
            "Ďalšie asociácie – fibromyalgia, polycytémia, arteriovenózna fistula, myalgická encefalitída a malignita.",
          ],
        },
      ],
    },
    {
      id: "diagnostika",
      heading: "Kapilaroskopia nechtového valu",
      blocks: [
        {
          kind: "paragraph",
          text: "Kapilaroskopia nechtového valu je diagnostickou metódou na odlíšenie primárneho a sekundárneho Raynaudovho fenoménu. Hodnotí mikrovaskulárne a morfologické zmeny periférnych ciev – architektúru, veľkosť a denzitu kapilár, prítomnosť hemorágií a avaskulárnych okrskov. Vyšetrenie sa robí dermatoskopom alebo oftalmoskopom, prípadne videokapilaroskopiou.",
        },
        {
          kind: "list",
          items: [
            "Rozšírené kapilárne kľučky alebo ich strata svedčia pre sekundárnu formu.",
            "Megakapiláry so zníženou denzitou kapilár poukazujú na sklerodermiu.",
            "Abnormálny kapilaroskopický nález koreluje so zvýšenou pravdepodobnosťou rozvoja ochorenia spojivového tkaniva.",
          ],
        },
      ],
    },
    {
      id: "liecba",
      heading: "Liečba",
      blocks: [
        {
          kind: "table",
          columns: ["Krok", "Obsah"],
          rows: [
            [
              "Režimové opatrenia",
              "Vyhýbanie sa chladu, udržiavanie tepla, vynechanie stimulancií, zvládanie úzkosti a emočného stresu, zanechanie fajčenia",
            ],
            [
              "Prvá línia",
              "Dihydropyridínové blokátory kalciových kanálov – amlodipín 5 mg až maximálne 20 mg denne, nifedipín 30 mg až maximálne 180 mg denne",
            ],
            [
              "Druhá línia",
              "Pri čiastočnej odpovedi pridanie inhibítora fosfodiesterázy – sildenafil od 20 mg denne až po 20 mg trikrát denne",
            ],
            [
              "Alternatívy",
              "Lokálne nitráty (2 % nitroglycerínová masť), losartan, fluoxetín, prazosín",
            ],
            [
              "Ťažké a refraktérne stavy",
              "Intravenózne prostaglandíny (iloprost, epoprostenol, treprostinil, alprostadil), bosentan pri recidivujúcej ulcerácii, sympatektómia",
            ],
            [
              "Sekundárna forma s ischemickou ulceráciou",
              "Kyselina acetylsalicylová 81 mg denne",
            ],
          ],
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Raynaud Disease. In: StatPearls. Treasure Island (FL): StatPearls Publishing.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK499833/",
    },
  ],
};
