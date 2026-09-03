import type { Topic } from "../types";
import { ceap } from "./ceap";
import { opuchy } from "./opuchy";
import { sklerotizacia } from "./sklerotizacia";
import { tos } from "./tos";
import { trombofilie } from "./trombofilie";
import { vaskulitidy } from "./vaskulitidy";
import { vazoneurozy } from "./vazoneurozy";

export const TOPICS: Topic[] = [
  ceap,
  trombofilie,
  vaskulitidy,
  tos,
  vazoneurozy,
  sklerotizacia,
  opuchy,
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}
