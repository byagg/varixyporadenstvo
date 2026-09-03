import type { Topic } from "../types";

export const vaskulitidy: Topic = {
  slug: "vaskulitidy",
  title: "Vaskulitídy",
  seoTitle: "Vaskulitídy – delenie, klinické znaky a diagnostika",
  subtitle: "Delenie podľa veľkosti cievy, kožné prejavy a diagnostický postup",
  description:
    "Delenie vaskulitíd podľa veľkosti postihnutej cievy podľa nomenklatúry Chapel Hill Consensus Conference, prejavy na dolných končatinách a diagnostický postup vrátane ANCA a bioptického potvrdenia.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "delenie",
      heading: "Delenie podľa veľkosti cievy",
      blocks: [
        {
          kind: "paragraph",
          text: "Najpoužívanejším systémom na definovanie vaskulitických syndrómov je nomenklatúra Chapel Hill Consensus Conference; popri nej sa používajú kritériá ACR z roku 1990 a ich aktualizácia z roku 2022.",
        },
        {
          kind: "table",
          columns: ["Skupina", "Jednotky"],
          rows: [
            [
              "Vaskulitída veľkých ciev",
              "Obrovskobunková arteritída (GCA), Takayasuova arteritída",
            ],
            [
              "Vaskulitída stredných ciev",
              "Kawasakiho choroba, polyarteritis nodosa (PAN)",
            ],
            [
              "Vaskulitída malých ciev – ANCA asociovaná",
              "Granulomatóza s polyangiitídou (GPA), mikroskopická polyangiitída (MPA), eozinofilná granulomatóza s polyangiitídou (EGPA)",
            ],
            [
              "Vaskulitída malých ciev – imunokomplexová",
              "Kryoglobulinemická vaskulitída, IgA vaskulitída",
            ],
            ["Vaskulitída premenlivých ciev", "Behçetova choroba"],
          ],
        },
      ],
    },
    {
      id: "koza",
      heading: "Prejavy na dolných končatinách",
      blocks: [
        {
          kind: "paragraph",
          text: "Typickým nálezom je hmatateľná purpura, ktorá sa objavuje práve na dolných končatinách a v oblastiach závislých od gravitácie vrátane gluteálnej oblasti. Ďalej sa vyskytuje livedo reticularis, ulcerácie, erythema nodosum a bolestivé uzly.",
        },
        {
          kind: "note",
          text: "Ulcerácia predkolenia s hmatateľnou purpurou, livedom alebo neúmerne intenzívnou bolesťou nezodpovedá bežnému žilovému vredu a je dôvodom na zváženie vaskulitídy a na bioptické overenie.",
        },
      ],
    },
    {
      id: "diagnostika",
      heading: "Diagnostický postup",
      blocks: [
        {
          kind: "table",
          columns: ["Jednotka", "Laboratórium", "ANCA", "Biopsia"],
          rows: [
            [
              "ANCA asociovaná vaskulitída",
              "FW/CRP, vyšetrenie moču",
              "c-ANCA (proteináza 3) alebo p-ANCA (myeloperoxidáza), pozitivita 73–95 %",
              "Potvrdzuje diagnózu",
            ],
            [
              "IgA vaskulitída",
              "Zvýšené sérové IgA, FW/CRP normálne alebo zvýšené",
              "Nerelevantné",
              "Diagnózu potvrdzuje IgA depozit",
            ],
            [
              "Kryoglobulinemická vaskulitída",
              "Kryoglobulíny (odber pri 37 °C), C4, reumatoidný faktor, sérológia hepatitídy C",
              "Nerelevantné",
              "Membranoproliferatívna glomerulonefritída",
            ],
            [
              "Obrovskobunková arteritída",
              "Zvýšené FW/CRP",
              "Nerelevantné",
              "Biopsia temporálnej artérie – zlatý štandard",
            ],
            [
              "Behçetova choroba",
              "FW/CRP, špecifický test neexistuje",
              "Nerelevantné",
              "Skórovanie podľa klinických kritérií",
            ],
          ],
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Vasculitis. In: StatPearls. Treasure Island (FL): StatPearls Publishing.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK545186/",
    },
    {
      citation:
        "Jennette JC, Falk RJ, Bacon PA, et al. 2012 Revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides. Arthritis Rheum. 2013;65(1):1–11.",
    },
  ],
};
