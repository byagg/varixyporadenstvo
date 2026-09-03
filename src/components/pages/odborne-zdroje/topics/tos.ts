import type { Topic } from "../types";

export const tos: Topic = {
  slug: "testy-tos",
  title: "Testy na TOS",
  seoTitle: "Syndróm hornej hrudnej apertúry (TOS) – provokačné testy",
  subtitle: "Provokačné testy pri syndróme hornej hrudnej apertúry",
  description:
    "Typy syndrómu hornej hrudnej apertúry, prehľad provokačných testov s postupom vyšetrenia a hodnotením pozitivity, ich výpovedná hodnota a doplnkové vyšetrenia.",
  reviewed: "2026-09-03",
  sections: [
    {
      id: "typy",
      heading: "Tri formy TOS",
      blocks: [
        {
          kind: "table",
          columns: ["Forma", "Podiel", "Typický obraz"],
          rows: [
            [
              "Neurogénna",
              "Vyše 90 % všetkých prípadov",
              "Neurčitá bolesť, atrofia drobných svalov ruky, slabosť ruky a senzitívne deficity",
            ],
            [
              "Venózna",
              "Menej častá",
              "Opuch hornej končatiny, náplň žíl a bolesť od ruky po predlaktie",
            ],
            [
              "Artériová",
              "Najzriedkavejšia",
              "Zmeny sfarbenia hornej končatiny a oslabené pulzácie",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "Hornú hrudnú apertúru ohraničuje prvé rebro, skalenové svaly a kľúčna kosť. K útlaku nervovo-cievneho zväzku dochádza v troch úrovniach – v skalenovom trojuholníku, v kostoklavikulárnom priestore a pod úponom malého prsného svalu.",
        },
      ],
    },
    {
      id: "testy",
      heading: "Provokačné testy",
      blocks: [
        {
          kind: "table",
          columns: ["Test", "Vykonanie", "Pozitivita"],
          rows: [
            [
              "Adsonov manéver",
              "Rameno v extenzii a miernej abdukcii; pacient extenduje krk a otáča hlavu k ramenu vyšetrujúceho, ktorý palpuje radiálny pulz",
              "Oslabenie pulzu pri artériovom útlaku",
            ],
            [
              "Roosov test (EAST)",
              "Abdukcia a vonkajšia rotácia v ramenách, lakte v 90°; pacient opakovane otvára a zatvára dlane po dobu 3 minút",
              "Únava alebo reprodukcia ťažkostí",
            ],
            [
              "Wrightov hyperabdukčný test",
              "Postupná hyperabdukcia a vonkajšia rotácia ramena pri palpácii radiálneho pulzu",
              "Oslabenie pulzu alebo reprodukcia ťažkostí",
            ],
            [
              "Kostoklavikulárny manéver (Halsted, „military brace“)",
              "Ramená stiahnuté dozadu a nadol, hrudník vypnutý",
              "Oslabenie pulzu alebo reprodukcia ťažkostí",
            ],
            [
              "Cyriaxov release test",
              "Vyšetrujúci pasívne nadvihne pletenec ramenný a odľahčí ho na 15–30 sekúnd",
              "Ústup alebo parestézie („release phenomenon“)",
            ],
            [
              "Test napätia hornej končatiny (ULTT, Elvey)",
              "Postupná abdukcia ramena, extenzia zápästia a prstov, supinácia, vonkajšia rotácia, extenzia lakťa a lateroflexia krku",
              "Reprodukcia neurogénnych ťažkostí v priebehu plexu",
            ],
            [
              "Spurlingov test (diferenciálny)",
              "Extenzia a lateroflexia hlavy s axiálnou kompresiou",
              "Reprodukcia radikulárnej bolesti – svedčí skôr pre cervikálnu radikulopatiu",
            ],
          ],
        },
      ],
    },
    {
      id: "vypovednost",
      heading: "Výpovedná hodnota testov",
      blocks: [
        {
          kind: "list",
          items: [
            "Provokačné testy majú v priemere senzitivitu okolo 72 % a špecificitu okolo 53 %; lepšiu pozitívnu prediktívnu hodnotu vykazuje Adsonov test (85 %) a hyperabdukčný Wrightov test (92 %).",
            "Pre samotný Adsonov test sa uvádza senzitivita 72–92 % pri trvalo nízkej špecificite 9–53 %. Falošná pozitivita je častá u zdravých osôb aj pri prekrývajúcich sa diagnózach, napríklad pri syndróme karpálneho tunela; prediktívna hodnota stúpa pri prítomnosti krčného rebra.",
            "Roosov test dosiahol pri ultrazvukovom potvrdení TOS senzitivitu 67 % a špecificitu 78 %; pri hodnotení podľa reprodukcie ťažkostí 62 % a 66 %.",
            "Kombinácia viacerých testov zlepšuje špecificitu. Samotné provokačné testy neumožňujú odlíšiť TOS od iných príčin ťažkostí hornej končatiny.",
          ],
        },
        {
          kind: "note",
          text: "Provokačné testy sú preto skríningom, nie diagnostickým kritériom. Diagnóza sa opiera o klinický obraz doplnený zobrazovacím a elektrofyziologickým vyšetrením.",
        },
      ],
    },
    {
      id: "vysetrenia",
      heading: "Doplnkové vyšetrenia",
      blocks: [
        {
          kind: "list",
          items: [
            "RTG hrudníka alebo krčnej chrbtice – krčné rebro, deformity prvého rebra, kostné anomálie.",
            "Ultrazvuk a duplexné vyšetrenie žíl hornej končatiny.",
            "Angiografia pri podozrení na artériovú formu.",
            "Elektrodiagnostické vyšetrenie pri neurogénnej forme.",
          ],
        },
      ],
    },
  ],
  sources: [
    {
      citation:
        "Kaplan J, Kanwal A. Thoracic Outlet Syndrome. In: StatPearls. Treasure Island (FL): StatPearls Publishing; aktualizované 10. 4. 2023.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK557450/",
    },
    {
      citation:
        "Gillard J, Pérez-Cousin M, Hachulla É, et al. Diagnosing thoracic outlet syndrome: contribution of provocative tests, ultrasonography, electrophysiology, and helical computed tomography in 48 patients. Joint Bone Spine. 2001;68(5):416–424.",
      href: "https://pubmed.ncbi.nlm.nih.gov/11707008/",
    },
    {
      citation:
        "Hooper TL, Denton J, McGalliard MK, et al. The diagnostic accuracy of clinical diagnostic tests for thoracic outlet syndrome. J Man Manip Ther. 2010;18(3):132–138.",
      href: "https://pubmed.ncbi.nlm.nih.gov/27632823/",
    },
  ],
};
