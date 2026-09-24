/**
 * src/data/sara.ts - TypeScript Definition & Content Mirror for SaraWiki
 *
 * This file provides full TypeScript types and exports `sara` matching the format
 * specified in the SaraWiki build prompt.
 */

export interface SaraPerson {
  name: string;
  fullName: string;
  honorificPrefix: string;
  pronunciation: string;
  pronunciationAudioNote: string;
  birthDate: string;
  birthPlace: string;
  residence: string;
  nationality: string;
  occupation: string;
  knownFor: string;
  status: string;
  threatLevel: string;
  articleReliability: string;
}

export interface SaraInfobox {
  title: string;
  subtitle: string;
  showStatistics?: boolean;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  personalInfo: Array<{ label: string; value: string }>;
  statistics: Array<{ label: string; value: string }>;
  honours: Array<{ year: string; title: string }>;
}

export interface SaraReviewBox {
  type?: string;
  stars?: string;
  rating?: string;
  title: string;
  meta: string;
  text?: string;
  textEn?: string;
  textEs?: string;
  scores?: Array<{ label: string; value: string }>;
  response?: {
    author: string;
    text: string;
  };
}

export interface SaraSection {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  quote?: {
    text: string;
    author: string;
    citation: string;
  };
  figure?: {
    src: string;
    alt: string;
    caption: string;
  };
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  codeSnippets?: Array<{
    title: string;
    code: string;
    caption?: string;
  }>;
  poem?: {
    title?: string;
    stanzas: string[][];
    author?: string;
    citation?: string;
  };
  reviewBox?: SaraReviewBox;
  subsections?: Array<{
    id: string;
    number: string;
    title: string;
    figure?: {
      src: string;
      alt: string;
      caption: string;
    };
    paragraphs?: string[];
    table?: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
    codeSnippets?: Array<{
      title: string;
      code: string;
      caption?: string;
    }>;
    poem?: {
      title?: string;
      stanzas: string[][];
      author?: string;
      citation?: string;
    };
    paragraphsAfter?: string[];
    reviewBox?: SaraReviewBox;
  }>;
}

export interface SaraReference {
  id: number;
  text: string;
}

export interface SaraTalkThread {
  id: string;
  title: string;
  status: string;
  posts: Array<{
    author: string;
    timestamp: string;
    content: string;
  }>;
}

export interface SaraHistoryEntry {
  id: string;
  timestamp: string;
  user: string;
  diffBytes: string;
  summary: string;
  contentSnippet: string;
}

export interface SaraConfigSchema {
  site: {
    name: string;
    subtitle: string;
    disclaimer: string;
    licenseNotice: string;
  };
  person: SaraPerson;
  infobox: SaraInfobox;
  maintenanceBanner: {
    type: string;
    title: string;
    description: string;
  };
  article: {
    lead: string[];
    sections: SaraSection[];
  };
  references: SaraReference[];
  categories: string[];
  talkThreads: SaraTalkThread[];
  history: SaraHistoryEntry[];
  searchIndex: Array<{
    term: string;
    target: string;
    description: string;
  }>;
  easterEggs: {
    imageClickCap: number;
    imageClickAlert: string;
    classifiedDossier: {
      title: string;
      codename: string;
      redactions: Array<{ label: string; text: string }>;
    };
    citationNeededTooltip: string;
  };
  cinema: {
    showInNav: boolean;
    route: string;
    title: string;
    tagline: string;
    status: string;
    description: string;
    launchInstructions: string[];
  };
}

// Re-export from the pure ES module source of truth
import { saraConfig } from '../config/sara.js';

export const sara: SaraConfigSchema = saraConfig as SaraConfigSchema;
export default sara;
