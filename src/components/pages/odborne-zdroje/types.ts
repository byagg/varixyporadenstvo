export type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; columns: string[]; rows: string[][]; caption?: string }
  | { kind: "note"; text: string };

export interface Section {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface Source {
  citation: string;
  href?: string;
}

export interface Topic {
  slug: string;
  /** Krátky názov do dlaždice a do obsahu. */
  title: string;
  /** Titulok stránky pre SEO. */
  seoTitle: string;
  subtitle: string;
  description: string;
  sections: Section[];
  sources: Source[];
  /** Dátum poslednej odbornej kontroly obsahu (ISO). */
  reviewed: string;
}
