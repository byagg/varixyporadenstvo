import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Block, Topic } from "./types";
import { TOPICS } from "./topics";

const REVIEW_FORMATTER = new Intl.DateTimeFormat("sk-SK", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="mt-4 font-heading text-base leading-7">{block.text}</p>
      );

    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="relative pl-6 font-heading text-base leading-7 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-ploy-accent-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "note":
      return (
        <p className="mt-5 rounded-[1.1875rem] border-l-4 border-ploy-accent-primary bg-ploy-neutral-primary-s2 px-5 py-4 font-heading text-base leading-7">
          {block.text}
        </p>
      );

    case "table":
      return (
        <figure className="mt-5">
          {block.caption ? (
            <figcaption className="mb-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-ploy-text-secondary">
              {block.caption}
            </figcaption>
          ) : null}
          <div className="overflow-x-auto rounded-[1.1875rem] border border-ploy-border-primary">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-ploy-neutral-primary-s4">
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr
                    key={row.join("|")}
                    className="border-t border-ploy-border-primary align-top odd:bg-ploy-neutral-primary-s2"
                  >
                    {row.map((cell, index) => (
                      <td
                        key={`${index}-${cell}`}
                        className={`px-4 py-3 font-heading text-sm leading-6 ${
                          index === 0 ? "font-bold whitespace-nowrap" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );
  }
}

interface Props {
  topic: Topic;
  related?: Topic[];
}

export default function Page({ topic, related = TOPICS }: Props) {
  const otherTopics = related.filter((item) => item.slug !== topic.slug);

  return (
    <main className="min-h-screen bg-ploy-background-primary">
      <header className="bg-ploy-background-inverse px-4 py-14 text-ploy-text-inverse lg:py-20">
        <div className="mx-auto max-w-[76.5rem]">
          <a
            href="/#prelekarov"
            className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ploy-accent-primary hover:underline"
          >
            ← Pre lekárov
          </a>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight lg:text-[4rem] lg:leading-[1.15]">
            {topic.title}
          </h1>
          <p className="mt-5 max-w-3xl font-heading text-lg leading-8 text-ploy-text-inverse/80">
            {topic.subtitle}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[76.5rem] gap-10 px-4 py-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:py-16">
        <nav aria-label="Obsah stránky" className="lg:sticky lg:top-8 lg:self-start">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-ploy-text-secondary">
            Obsah
          </p>
          <ol className="mt-3 space-y-2">
            {topic.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="font-heading text-sm leading-6 hover:text-ploy-accent-primary-700 hover:underline"
                >
                  {section.heading}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#zdroje"
                className="font-heading text-sm leading-6 hover:text-ploy-accent-primary-700 hover:underline"
              >
                Zdroje
              </a>
            </li>
          </ol>
        </nav>

        <article>
          {topic.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-8 border-t border-ploy-border-primary pt-8 first:border-t-0 first:pt-0 [&+section]:mt-10"
            >
              <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
                {section.heading}
              </h2>
              {section.blocks.map((block, index) => (
                <BlockView key={index} block={block} />
              ))}
            </section>
          ))}

          <section
            id="zdroje"
            className="mt-10 scroll-mt-8 border-t border-ploy-border-primary pt-8"
          >
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold leading-tight lg:text-3xl">
              <BookOpen aria-hidden="true" className="h-6 w-6" />
              Zdroje
            </h2>
            <ol className="mt-4 space-y-3">
              {topic.sources.map((source) => (
                <li
                  key={source.citation}
                  className="font-heading text-sm leading-6 text-ploy-text-secondary"
                >
                  {source.citation}
                  {source.href ? (
                    <>
                      {" "}
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-ploy-accent-primary-700 underline"
                      >
                        Otvoriť
                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-[1.1875rem] bg-ploy-neutral-primary-s2 px-5 py-4 font-heading text-sm leading-6 text-ploy-text-secondary">
              Obsah je spracovaný podľa uvedených zdrojov ako pomôcka na rýchlu
              orientáciu. Nenahrádza plné znenie odporúčaní ani klinický úsudok –
              pri rozhodovaní o konkrétnom pacientovi vychádzajte z primárneho
              zdroja. Naposledy overené{" "}
              {REVIEW_FORMATTER.format(new Date(topic.reviewed))}.
            </p>
          </section>

          {otherTopics.length ? (
            <section className="mt-12 border-t border-ploy-border-primary pt-8">
              <h2 className="font-heading text-lg font-bold">
                Ďalšie odborné zdroje
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {otherTopics.map((item) => (
                  <a
                    key={item.slug}
                    href={`/odborne-zdroje/${item.slug}`}
                    className="rounded-[1.1875rem] border border-ploy-border-primary bg-ploy-neutral-primary-s2 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-ploy-accent-primary"
                  >
                    <strong className="block font-heading text-base">
                      {item.title}
                    </strong>
                    <span className="mt-1 block font-heading text-sm leading-6 text-ploy-text-secondary">
                      {item.subtitle}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </main>
  );
}
