import type { Topic } from "../types";

export const ceap: Topic = {
  slug: "ceap-klasifikacia",
  title: "CEAP klasifikácia",
  seoTitle: "CEAP klasifikácia chronických žilových ochorení (revízia 2020)",
  subtitle: "Klasifikácia chronických žilových ochorení, revízia 2020",
  description:
    "Kompletná CEAP klasifikácia v znení revízie z roku 2020 – klinické triedy vrátane C2r, C4c a C6r, etiológia s podtriedami Esi a Ese, anatomické skratky žilových segmentov a patofyziológia.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "zapis",
      heading: "Ako sa CEAP zapisuje",
      blocks: [
        {
          kind: "paragraph",
          text: "CEAP popisuje chronické žilové ochorenie v štyroch osiach – klinickej (C), etiologickej (E), anatomickej (A) a patofyziologickej (P). Klasifikuje sa vždy jedna končatina a strana sa označuje ako pravá (R) alebo ľavá (L).",
        },
        {
          kind: "list",
          items: [
            "Základná (basic) CEAP uvádza jedinú najvyššiu klinickú triedu na končatine.",
            "Rozšírená (advanced) CEAP uvádza všetky prítomné klinické triedy a ku každej P triede doplní konkrétne anatomické segmenty.",
            "Každá klinická trieda sa dopĺňa dolným indexom podľa prítomnosti ťažkostí pripísateľných žilovému ochoreniu: s – symptomatická, a – asymptomatická.",
            "Ku klasifikácii patrí dátum vyšetrenia; pri opakovanom hodnotení sa tak dá sledovať vývoj nálezu.",
          ],
        },
        {
          kind: "note",
          text: "Revízia 2020 zámerne zachovala kompatibilitu s verziami z rokov 1996 a 2004, aby sa staršie záznamy dali porovnávať s novými.",
        },
      ],
    },
    {
      id: "c",
      heading: "C – klinická trieda",
      blocks: [
        {
          kind: "table",
          columns: ["Trieda", "Popis"],
          rows: [
            ["C0", "Žiadne viditeľné ani hmatateľné známky žilového ochorenia"],
            ["C1", "Teleangiektázie alebo retikulárne žily"],
            ["C2", "Varixy"],
            ["C2r", "Recidivujúce varixy"],
            ["C3", "Opuch"],
            [
              "C4",
              "Zmeny kože a podkožia v dôsledku chronického žilového ochorenia",
            ],
            ["C4a", "Pigmentácia alebo ekzém"],
            ["C4b", "Lipodermatoskleróza alebo atrophie blanche"],
            ["C4c", "Corona phlebectatica"],
            ["C5", "Zhojený žilový vred"],
            ["C6", "Aktívny žilový vred"],
            ["C6r", "Recidivujúci aktívny žilový vred"],
          ],
        },
        {
          kind: "paragraph",
          text: "Corona phlebectatica je vejárovitý útvar početných drobných intradermálnych žíl na mediálnej alebo laterálnej strane členka a nohy (synonymá malleolar flare, ankle flare). Do triedy C4 bola zaradená ako samostatná podtrieda preto, že predstavuje včasný marker zvýšeného rizika progresie do žilového vredu.",
        },
        {
          kind: "paragraph",
          text: "Recidíva je klinicky definovaný pojem – zahŕňa skutočné recidívy, reziduálne žily aj varixy vzniknuté progresiou ochorenia po predchádzajúcej liečbe. Môže mať iný prirodzený priebeh a vyžadovať inú stratégiu liečby, preto má vlastné triedy C2r a C6r.",
        },
      ],
    },
    {
      id: "e",
      heading: "E – etiológia",
      blocks: [
        {
          kind: "table",
          columns: ["Trieda", "Popis"],
          rows: [
            ["Ep", "Primárna"],
            ["Es", "Sekundárna"],
            ["Esi", "Sekundárna – intravenózna príčina"],
            ["Ese", "Sekundárna – extravenózna príčina"],
            ["Ec", "Vrodená"],
            ["En", "Príčina neidentifikovaná"],
          ],
        },
        {
          kind: "list",
          items: [
            "Ep – degeneratívny proces žilovej chlopne a/alebo steny vedúci k ich oslabeniu a dilatácii s patologickým refluxom doloženým zobrazením, bez jaziev a zhrubnutia steny typických pre posttrombotický syndróm.",
            "Esi – akýkoľvek intravenózny stav poškodzujúci stenu alebo chlopňu: hlboká žilová trombóza, traumatická arteriovenózna fistula, primárny intravenózny sarkóm a iné zmeny vnútri lúmenu.",
            "Ese – stena ani chlopňa nie sú poškodené, ťažkosti vznikajú ovplyvnením žilovej hemodynamiky: centrálna žilová hypertenzia (obezita, srdcové zlyhávanie, nutcracker syndróm, panvová kongescia), útlak zvonka (nádor, retroperitoneálna fibróza) alebo porucha svalovej pumpy (paraplégia, artróza, dlhodobá imobilita, stuhnutý členok, výrazne sedavý režim).",
            "Ec – stavy prítomné pri narodení, okrem iného agenéza žily, žilová malformácia (napríklad Klippelov-Trénaunayov syndróm) a arteriovenózna malformácia; nemusia sa prejaviť hneď po narodení.",
            "En – kategória vylúčenia: nenašla sa žiadna iná žilová etiológia (Ep, Esi, Ese, Ec), pritom sú prítomné klinické známky zodpovedajúce žilovému ochoreniu.",
          ],
        },
        {
          kind: "paragraph",
          text: "Etiologické stavy sa môžu kombinovať a vtedy sa použije viac indexov naraz. Primárne varixy u pacienta po prekonanej hlbokej žilovej trombóze sa označia Epsi. Netrombotický útlak ilickej žily (Mayov-Thurnerov syndróm) s pridruženou intraluminálnou obštrukciou sa označí Esie.",
        },
      ],
    },
    {
      id: "a",
      heading: "A – anatómia",
      blocks: [
        {
          kind: "paragraph",
          text: "Základné triedy sú As (povrchové žily), Ad (hlboké žily), Ap (perforátory) a An (anatomická lokalizácia neidentifikovaná). Súčasne môže byť postihnutý jeden, dva aj všetky tri systémy. Revízia 2020 nahradila predchádzajúce číslovanie segmentov skratkami odvodenými od anatomických názvov – ľahšie sa pamätajú a umožňujú doplniť lokality, ktoré predtým chýbali. Konkrétny segment sa uvádza pod príslušnou P triedou.",
        },
        {
          kind: "table",
          caption: "As – povrchové žily",
          columns: ["Pôvodné číslo", "Skratka", "Segment"],
          rows: [
            ["1", "Tel", "Teleangiektázie"],
            ["1", "Ret", "Retikulárne žily"],
            ["2", "GSVa", "Vena saphena magna nad kolenom"],
            ["3", "GSVb", "Vena saphena magna pod kolenom"],
            ["4", "SSV", "Vena saphena parva"],
            ["—", "AASV", "Predná akcesórna safénová žila"],
            ["5", "NSV", "Nesafénová žila"],
          ],
        },
        {
          kind: "table",
          caption: "Ad – hlboké žily",
          columns: ["Pôvodné číslo", "Skratka", "Segment"],
          rows: [
            ["6", "IVC", "Vena cava inferior"],
            ["7", "CIV", "Vena iliaca communis"],
            ["8", "IIV", "Vena iliaca interna"],
            ["9", "EIV", "Vena iliaca externa"],
            ["10", "PELV", "Panvové žily"],
            ["11", "CFV", "Vena femoralis communis"],
            ["12", "DFV", "Vena profunda femoris"],
            ["13", "FV", "Vena femoralis"],
            ["14", "POPV", "Vena poplitea"],
            ["15", "TIBV", "Predkolenné (tibiálne) žily"],
            ["15", "PRV", "Vena peronea"],
            ["15", "ATV", "Vena tibialis anterior"],
            ["15", "PTV", "Vena tibialis posterior"],
            ["16", "MUSV", "Svalové žily"],
            ["16", "GAV", "Vena gastrocnemica"],
            ["16", "SOV", "Vena solealis"],
          ],
        },
        {
          kind: "table",
          caption: "Ap – perforátory",
          columns: ["Pôvodné číslo", "Skratka", "Segment"],
          rows: [
            ["17", "TPV", "Perforátor stehna"],
            ["18", "CPV", "Perforátor lýtka"],
          ],
        },
      ],
    },
    {
      id: "p",
      heading: "P – patofyziológia",
      blocks: [
        {
          kind: "table",
          columns: ["Trieda", "Popis"],
          rows: [
            ["Pr", "Reflux"],
            ["Po", "Obštrukcia"],
            ["Pr,o", "Reflux aj obštrukcia"],
            ["Pn", "Patofyziológia neidentifikovaná"],
          ],
        },
        {
          kind: "paragraph",
          text: "V rozšírenej CEAP sa ku každej P triede doplnia skratky konkrétnych anatomických segmentov. Trieda Pn zostala zachovaná pre pacientov, u ktorých nie je zjavný reflux ani obštrukcia, a napriek tomu sú prítomné známky chronického žilového ochorenia – hemodynamické zmeny môžu viesť ku kožným zmenám a ulcerácii aj bez chlopňovej insuficiencie.",
        },
      ],
    },
    {
      id: "novinky",
      heading: "Čo priniesla revízia 2020",
      blocks: [
        {
          kind: "list",
          items: [
            "Nové triedy pre recidívu: C2r (recidivujúce varixy) a C6r (recidivujúci aktívny vred).",
            "Corona phlebectatica ako samostatná podtrieda C4c.",
            "Spresnenie definícií Ep, Ec a En a rozdelenie Es na Esi (intravenózne) a Ese (extravenózne príčiny).",
            "Nahradenie číslovania anatomických segmentov skratkami odvodenými od anatomických názvov.",
            "Zachovanie základnej P klasifikácie vrátane triedy Pn.",
          ],
        },
        {
          kind: "note",
          text: "Task force neschválil niektoré navrhované zmeny – rozdelenie triedy C0 a C1, zlúčenie C5 a C6, zmenu číselných indexov na písmenové a doplnenie renálnej, ovariálnej, uterinnej, lumbálnej, intersafénovej, gluteálnej a pudendálnej žily do anatomickej osi. Dôvodom bol nedostatok dôkazov a riziko zníženia reprodukovateľnosti.",
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Lurie F, Passman M, Meisner M, et al. The 2020 update of the CEAP classification system and reporting standards. J Vasc Surg Venous Lymphat Disord. 2020;8(3):342–352.",
      href: "https://www.jvsvenous.org/article/S2213-333X(20)30063-9/fulltext",
    },
    {
      citation:
        "Eklöf B, Rutherford RB, Bergan JJ, et al. Revision of the CEAP classification for chronic venous disorders: consensus statement. J Vasc Surg. 2004;40(6):1248–1252.",
    },
  ],
};
