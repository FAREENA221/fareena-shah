// shared/types.ts (create this file for reusability)
export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  isFeatured?: boolean;
  date: string;
  content?: string;
}

export interface Patent {
  title: string;
  number: string;
  year: number;
  summary: string;
}

export interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  keywords?: string; // SEO + search
  link?: string; // external publication link (optional, not all have it)
  doi?: string; // Digital Object Identifier
  orcid?: string; // ORCID author reference
  googleScholar?: string;
  researchGate?: string;
  pdf?: string; // direct file download
  coverPhoto?: string; // preview image / OpenGraph
  metaTitle?: string; // SEO title
  metaDescription?: string; // SEO description
  metaKeywords?: string; // SEO keywords
  views?: number; // analytics
  downloads?: number; // analytics
  citations?: number; // analytics
  createdAt?: string; // ISO timestamp
  updatedAt?: string;
}

