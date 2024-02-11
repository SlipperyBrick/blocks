import { readFileSync } from "fs";
import { stdin } from "process";

import MarkdownIt from "markdown-it";

import blocks from "./mdbook-blocks/rules/configureMarkdownIt";

import {
  Chapter,
  Book,
  PreprocessorContext,
} from "./mdbook-blocks/types/types";

const md = new MarkdownIt();
md.use(blocks);

const processChapters = (chapter: Chapter): void => {
  chapter.content = md.render(chapter.content);

  if (Array.isArray(chapter.subItems)) {
    chapter.subItems.forEach((subItem) => {
      if (subItem.Chapter) {
        processChapters(subItem.Chapter);
      }
    });
  }
};

const processBook = (book: Book): void => {
  if (Array.isArray(book.sections)) {
    book.sections.forEach((section) => {
      if (section.Chapter) {
        processChapters(section.Chapter);
      }
    });
  }
};

const args = process.argv.slice(2);

switch (args[0]) {
  case "supports":
    process.exit(0);

  case "test":
    const testData = readFileSync(args[1], "utf8");
    const [context, book] = JSON.parse(testData) as [PreprocessorContext, Book];
    processBook(book);

    const output = JSON.stringify([context, book], null, 2);

    console.log(output);

    break;

  default:
    let inputData = "";

    stdin.on("data", (chunk) => (inputData += chunk));
    stdin.on("end", () => {
      try {
        const [_context, book] = JSON.parse(inputData) as [
          PreprocessorContext,
          Book
        ];

        processBook(book);

        const output = JSON.stringify(book);

        console.log(output);
      } catch (error) {
        console.error(`Error processing input: ${error}`);
        process.exit(1);
      }
    });

    break;
}
