import {
  Activity,
  Building2,
  Clock,
  FileLock2,
  HeartPulse,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

interface Examination {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  optional?: boolean;
}

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Result {
  tone: "green" | "yellow" | "red";
  label: string;
  description: string;
}

const DEFAULT_EXAMINATIONS: Examination[] = [
  {
    icon: Stethoscope,
    title: "Ultrazvukový skríning žíl",
    description:
      "Cievny chirurg vyšetrí povrchový žilový systém oboch dolných končatín prenosným ultrazvukom priamo vo vašej firme.",
    items: [
      "Vena saphena magna – kompetencia, reflux, kaliber",
      "Vena saphena parva – kompetencia, reflux",
      "Na požiadanie hlboký žilový systém a perforátory",
    ],
  },
  {
    icon: Scale,
    title: "Analýza zloženia tela InBody 270S",
    description:
      "Presná bioimpedančná váha zmeria za približne 30 sekúnd, z čoho sa skladá telesná hmotnosť.",
    items: [
      "Hmotnosť, výška, obvod pása a BMI",
      "Telesný tuk (kg a %), kostrové svalstvo, typ postavy",
      "Viscerálny tuk, bazálny metabolizmus, InBody skóre",
      "Segmentálna analýza svalov a tuku (trup, ruky, nohy)",
    ],
  },
  {
    icon: HeartPulse,
    title: "Fyziologické parametre",
    description:
      "Základné kardiovaskulárne hodnoty, ktoré doplnia celkový obraz o zdraví zamestnanca.",
    items: [
      "Krvný tlak (systola / diastola)",
      "Srdcová frekvencia (pulz)",
      "Saturácia krvi kyslíkom (SpO2)",
    ],
  },
  {
    icon: Activity,
    title: "Arteriálny skríning",
    description:
      "Rozšírený modul na požiadanie – orientačné zhodnotenie prietoku v tepnách dolných končatín.",
    items: [
      "Charakter prietoku (bifázický / trifázický / monofázický)",
      "Pravá aj ľavá dolná končatina",
    ],
    optional: true,
  },
];

const DEFAULT_STEPS: Step[] = [
  {
    icon: Building2,
    title: "Prídeme za vami",
    description:
      "Stačí jedna zasadačka. Zamestnanci nemusia nikam cestovať ani si brať voľno – na vyšetrenie prichádzajú priebežne počas dňa.",
  },
  {
    icon: Clock,
    title: "Približne 5 minút na osobu",
    description:
      "Rýchla stanica (InBody, tlak, saturácia, krátka anamnéza) a ultrazvukové vyšetrenie žíl. Za hodinu zvládneme 10 – 12 ľudí, za deň 50 – 60 zamestnancov.",
  },
  {
    icon: FileLock2,
    title: "Anonymný report do mobilu",
    description:
      "Každý zamestnanec dostane svoj výsledok v PDF priamo do súkromného telefónu (QR kód) alebo na osobný e-mail. Zamestnávateľ k výsledkom nemá prístup.",
  },
];

const DEFAULT_RESULTS: Result[] = [
  {
    tone: "green",
    label: "Zelená",
    description:
      "Fyziologický alebo minimálny nález – postačujú režimové opatrenia.",
  },
  {
    tone: "yellow",
    label: "Žltá",
    description:
      "Stredný stupeň refluxu alebo zvýšené riziko – zvážiť kompresiu a kontrolu o rok.",
  },
  {
    tone: "red",
    label: "Červená",
    description:
      "Výrazný reflux alebo riziko – odporúča sa špecializované angiologické či cievno-chirurgické vyšetrenie.",
  },
];

const DEFAULT_REPORT_ITEMS: string[] = [
  "Číslo klienta, dátum merania, vek a fajčiarsky status – bez mena a rodného čísla",
  "Analýza zloženia tela z InBody a fyziologické parametre",
  "Výsledok ultrazvukového skríningu žíl (prípadne tepien) pre obe končatiny",
  "Všeobecné preventívne odporúčania vygenerované systémom podľa nameraných hodnôt a symptómov",
];

const TONE_CLASSES: Record<Result["tone"], string> = {
  green: "bg-ploy-status-success",
  yellow: "bg-ploy-accent-primary",
  red: "bg-ploy-status-danger",
};

interface Props {
  badge?: string;
  heading?: string;
  description?: string;
  examinations?: Examination[];
  steps?: Step[];
  results?: Result[];
  reportItems?: string[];
}

export default function Page({
  badge = "V príprave",
  heading = "Preventívne cievne prehliadky pre firmy",
  description = "V blízkej budúcnosti sprostredkujeme firemné dni zdravia priamo na vašom pracovisku: ultrazvukové vyšetrenie žíl dolných končatín od cievneho chirurga, analýzu zloženia tela InBody, meranie krvného tlaku a saturácie – s anonymným výsledkom pre každého zamestnanca.",
  examinations = DEFAULT_EXAMINATIONS,
  steps = DEFAULT_STEPS,
  results = DEFAULT_RESULTS,
  reportItems = DEFAULT_REPORT_ITEMS,
}: Props) {
  return (
    <main className="min-h-screen bg-ploy-background-primary">
      <header className="bg-ploy-background-inverse px-4 py-14 text-ploy-text-inverse lg:py-20">
        <div className="mx-auto max-w-[76.5rem]">
          <a
            href="/"
            className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary hover:underline"
          >
            ← Úvod
          </a>
          <p className="mt-6 flex w-fit items-center gap-2 rounded-full border border-ploy-accent-primary px-4 py-1.5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            {badge}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight lg:text-[4rem] lg:leading-[1.15]">
            {heading}
          </h1>
          <p className="mt-5 max-w-3xl font-heading text-lg leading-8 text-ploy-text-inverse/80">
            {description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[76.5rem] space-y-16 px-4 py-12 lg:space-y-20 lg:py-16">
        <section>
          <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
            Čo bude súčasťou prehliadky
          </h2>
          <p className="mt-3 max-w-3xl font-heading text-base leading-7 text-ploy-text-secondary">
            Na rozdiel od bežných firemných dní zdravia, kde sa meria len tlak a
            cukor, prinesieme do firmy atestovaného cievneho chirurga s
            ultrazvukom a pokročilú diagnostiku zloženia tela.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {examinations.map((examination) => (
              <ExaminationCard
                key={examination.title}
                examination={examination}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
            Ako bude prebiehať firemný deň zdravia
          </h2>
          <ol className="mt-8 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[1.1875rem] border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ploy-accent-primary font-heading font-bold text-black">
                    {index + 1}
                  </span>
                  <step.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-ploy-accent-primary-700"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 font-heading text-sm leading-6 text-ploy-text-secondary">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
              Anonymný výstup pre zamestnanca
            </h2>
            <p className="mt-3 font-heading text-base leading-7 text-ploy-text-secondary">
              Report neobsahuje meno ani iné osobné údaje. Zamestnanec dostane
              zrozumiteľné zhrnutie svojich výsledkov a firma má splnený benefit
              bez rizika úniku zdravotných údajov.
            </p>
            <ul className="mt-6 space-y-3">
              {reportItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-heading text-base leading-7"
                >
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-ploy-accent-primary-700"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.1875rem] border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-6">
            <h3 className="font-heading text-lg font-bold">
              Prehľadné vyhodnotenie nálezu
            </h3>
            <p className="mt-2 font-heading text-sm leading-6 text-ploy-text-secondary">
              Výsledok cievneho skríningu je zaradený do jednoduchého
              semaforového systému.
            </p>
            <ul className="mt-5 space-y-4">
              {results.map((result) => (
                <li key={result.tone} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={`mt-1 h-4 w-4 shrink-0 rounded-full ${TONE_CLASSES[result.tone]}`}
                  />
                  <p className="font-heading text-sm leading-6">
                    <strong>{result.label}:</strong> {result.description}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-heading text-xs leading-5 text-ploy-text-secondary">
              Skríning má preventívny charakter a nenahrádza komplexné
              vyšetrenie v ambulancii.
            </p>
          </div>
        </section>

        <section className="rounded-[1.1875rem] bg-ploy-background-inverse p-8 text-ploy-text-inverse lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Users
                aria-hidden="true"
                className="h-8 w-8 text-ploy-accent-primary"
              />
              <h2 className="mt-4 font-heading text-2xl font-bold leading-tight lg:text-3xl">
                Máte záujem o firemný deň zdravia?
              </h2>
              <p className="mt-3 font-heading text-base leading-7 text-ploy-text-inverse/80">
                Službu práve pripravujeme. Spolupráca bude možná formou
                celodennej sadzby alebo platby za každého vyšetreného
                zamestnanca. Ozvite sa nám a pripravíme vám ponuku na mieru
                hneď, ako službu spustíme.
              </p>
            </div>
            <a
              href="/kontakt"
              className="inline-flex min-h-16 shrink-0 items-center justify-center rounded-[1.1875rem] bg-ploy-accent-primary px-10 font-heading text-2xl font-bold text-black transition-colors duration-200 hover:bg-ploy-accent-primary/90"
            >
              kontaktujte nás
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function ExaminationCard({ examination }: { examination: Examination }) {
  const Icon = examination.icon;
  return (
    <article className="rounded-[1.1875rem] border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-6">
      <div className="flex items-start justify-between gap-4">
        <Icon
          aria-hidden="true"
          className="h-8 w-8 text-ploy-accent-primary-700"
        />
        {examination.optional ? (
          <span className="rounded-full bg-ploy-neutral-primary-s4 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-ploy-text-secondary">
            na požiadanie
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold">
        {examination.title}
      </h3>
      <p className="mt-2 font-heading text-sm leading-6 text-ploy-text-secondary">
        {examination.description}
      </p>
      <ul className="mt-4 space-y-2">
        {examination.items.map((item) => (
          <li key={item} className="flex gap-2 font-heading text-sm leading-6">
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ploy-accent-primary"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
