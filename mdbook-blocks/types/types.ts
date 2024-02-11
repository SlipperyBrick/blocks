export interface Chapter {
  name: string;
  content: string;
  number: number[] | null;
  subItems: SubItem[];
  path: string;
  sourcePath: string;
  parentNames: string[];
}

export interface SubItem {
  Chapter: Chapter;
}

export interface Section {
  Chapter?: Chapter;
  PartTitle?: string;
}

export interface Book {
  sections: Section[];
}

export interface PreprocessorContext {
  root: string;
  config: any;
  renderer: string;
  mdbook_version: string;
}

export interface MdBookInput {
  context: PreprocessorContext;
  book: Book;
}
