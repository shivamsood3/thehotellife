export interface EditorialLink {
  label: string;
  url: string;
}

export interface EditorialReferences {
  /** Actual revision date, separate from the original publication date. */
  updated?: string;
  sources?: EditorialLink[];
  relatedReading?: EditorialLink[];
}
