import type { Topic } from "../types";

export const trombofilie: Topic = {
  slug: "trombofilne-stavy",
  title: "Trombofilné stavy",
  seoTitle: "Trombofilné stavy – diagnostika a odborný manažment",
  subtitle: "Vrodené a získané trombofílie, indikácie a načasovanie vyšetrenia",
  description:
    "Prehľad vrodených a získaných trombofilných stavov, zloženie trombofilného panelu, indikácie na vyšetrenie a pravidlá načasovania odberu vo vzťahu k akútnej trombóze a antikoagulácii.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "zaklad",
      heading: "Východisko",
      blocks: [
        {
          kind: "paragraph",
          text: "Trombofília je zvýšená tendencia krvi ku tvorbe trombu – patologická koagulácia bez prítomnosti krvácania. Virchowova triáda z roku 1856 – hyperkoagulabilita, stáza a poškodenie cievy – zostáva platným rámcom pre vznik trombózy.",
        },
        {
          kind: "paragraph",
          text: "Pri artériovej trombóze ide typicky o ruptúru aterosklerotického plátu s tvorbou bieleho trombu bohatého na trombocyty. Pri žilovej trombóze prispieva stáza za chlopňami a vzniká červený trombus.",
        },
      ],
    },
    {
      id: "vrodene",
      heading: "Vrodené trombofílie",
      blocks: [
        {
          kind: "table",
          columns: ["Stav", "Poznámka k riziku a výskytu"],
          rows: [
            [
              "Leidenská mutácia faktora V",
              "Najčastejší genetický rizikový faktor trombofílie, slabé trombotické riziko; zisťuje sa až u 30 % pacientov so žilovým tromboembolizmom",
            ],
            [
              "Mutácia protrombínu G20210A",
              "Druhý najčastejší vrodený rizikový faktor, slabé trombotické riziko; vyššie riziko artériových aj žilových príhod",
            ],
            [
              "Deficit antitrombínu III",
              "Výskyt približne 1 : 500; spomedzi vrodených trombofílií nesie najvyššie riziko trombózy, manifestuje sa v mladom veku (do 50 rokov)",
            ],
            [
              "Deficit proteínu C",
              "Vyššie riziko než pri leidenskej mutácii či mutácii protrombínu; môže sa prejaviť trombózou už v adolescencii",
            ],
            [
              "Deficit proteínu S",
              "Rizikový profil podobný deficitu proteínu C; rozlišujú sa typy I, II a III",
            ],
            ["Zvýšený faktor VIII", "Zvyšuje riziko trombózy"],
            [
              "Hyperhomocysteinémia",
              "Spájaná s predčasnou aterosklerózou a trombózou",
            ],
            [
              "Zriedkavé formy",
              "Deficit plazminogénu, dysfibrinogenémia, syndróm lepivých doštičiek (autozómovo dominantný)",
            ],
          ],
        },
      ],
    },
    {
      id: "ziskane",
      heading: "Získané trombofilné stavy",
      blocks: [
        {
          kind: "list",
          items: [
            "Antifosfolipidový syndróm – najčastejšia získaná trombofília; protilátky sú namierené proti fosfolipidom bunkových membrán.",
            "Malignita – druhá najčastejšia získaná príčina; nádorový prokoagulans je zvýšený u približne 85 % onkologických pacientov. Migrujúca tromboflebitída pri viscerálnej malignite sa označuje ako Trousseauov syndróm.",
            "Gravidita a šestonedelie – hyperkoagulačný stav pretrváva približne 2 mesiace po pôrode; podieľa sa vzostup prokoagulancií, pokles antikoagulancií a stáza pri kompresii gravidnou maternicou.",
            "Hormonálna liečba – perorálna antikoncepcia, hormonálna substitučná liečba a liečba testosterónom.",
            "Heparínom indukovaná trombocytopénia – typ I s miernym poklesom doštičiek a minimálnym klinickým dopadom, typ II s výrazným poklesom a závažnými následkami.",
            "Fajčenie – nikotín poškodzuje endotel a znižuje uvoľňovanie tPA a TFPI, oxid uhoľnatý zvyšuje permeabilitu endotelu.",
            "Trauma – prokoagulačná nerovnováha je najvýraznejšia počas prvých 24 hodín po úraze a u žien.",
            "Zápal a infekcia vrátane autoimunitných ochorení – systémový lupus, ITP, polyarteritis nodosa, polymyozitída, dermatomyozitída, nešpecifické zápalové ochorenia čreva a Behçetov syndróm.",
            "Ďalšie stavy – myeloproliferatívne ochorenia, mnohopočetný myelóm, paroxyzmálna nočná hemoglobinúria, srdcové zlyhávanie a fibrilácia predsiení.",
          ],
        },
      ],
    },
    {
      id: "kedy",
      heading: "Kedy vyšetrovať",
      blocks: [
        {
          kind: "list",
          items: [
            "Neprovokovaný alebo recidivujúci žilový tromboembolizmus.",
            "Mladý pacient (do 40 rokov).",
            "Výrazná rodinná anamnéza trombózy.",
            "Trombóza v neobvyklej lokalizácii – cerebrálna, mezenterická, hepatálna alebo renálna.",
            "Novorodenecká purpura fulminans.",
            "Kožná nekróza po warfaríne.",
            "Straty plodu.",
          ],
        },
        {
          kind: "note",
          text: "Vyšetrovanie asymptomatických príbuzných pacientov so žilovým tromboembolizmom s cieľom viesť primárnu prevenciu nie je prínosné.",
        },
      ],
    },
    {
      id: "casovanie",
      heading: "Načasovanie odberu",
      blocks: [
        {
          kind: "list",
          items: [
            "Vyšetrenie sa neodporúča počas akútnej trombotickej príhody ani počas antikoagulačnej liečby.",
            "Odber sa plánuje na kontrolu o 3 mesiace, prípadne 3 mesiace po ukončení antikoagulácie; vhodný je dvojstupňový postup.",
            "Deficit proteínu C a S môže byť vrodený, ale aj navodený pečeňovou dysfunkciou, antagonistami vitamínu K, renálnym zlyhaním, DIC a prebiehajúcou trombózou – výsledok počas akútneho stavu alebo antikoagulácie je preto nespoľahlivý.",
          ],
        },
      ],
    },
    {
      id: "panel",
      heading: "Zloženie trombofilného panelu",
      blocks: [
        {
          kind: "list",
          items: [
            "Funkčné vyšetrenie antitrombínu III a proteínov C a S.",
            "PCR na leidenskú mutáciu faktora V a mutáciu protrombínu G20210A.",
            "Antifosfolipidové protilátky a hladina homocysteínu.",
            "Bazálny koagulačný panel, D-dimér a krvný obraz.",
            "Pri podozrení na antifosfolipidový syndróm: ELISA na antifosfolipidové protilátky, dRVVT a PTT-LA. Lupusové antikoagulans predlžuje aPTT in vitro, in vivo však vedie k trombóze.",
          ],
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Senst B, Tadi P, Basit H, Jan A. Hypercoagulability. In: StatPearls. Treasure Island (FL): StatPearls Publishing; aktualizované 22. 8. 2023.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK538251/",
    },
  ],
};
