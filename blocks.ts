import { readFileSync } from "fs";
import { stdin } from "process";

import MarkdownIt from "markdown-it";

import {
  Chapter,
  Book,
  PreprocessorContext,
} from "./mdbook-blocks/types/types";

const md = new MarkdownIt();

const processChapters = (chapter: Chapter): void => {
  // Here you might process the chapter content with MarkdownIt, for example
  chapter.content = md.render(chapter.content);
  chapter.subItems.forEach((subItem) => {
    if (subItem.Chapter) {
      processChapters(subItem.Chapter);
    }
  });
};

const processBook = (book: Book): void => {
  console.log("Received book data:", JSON.stringify(book, null, 2));

  if (Array.isArray(book.sections)) {
    book.sections.forEach((section) => {
      if (section.Chapter) {
        processChapters(section.Chapter);
      }
    });
  } else {
    console.error(
      "Error: 'sections' is not an array or is undefined in the book object"
    );
  }
};

const args = process.argv.slice(2);

switch (args[0]) {
  case "supports":
    process.exit(0);

  case "test":
    const testData = readFileSync(args[1], "utf8");
    const [, testBook] = JSON.parse(testData) as [PreprocessorContext, Book];
    processBook(testBook);

    console.log(JSON.stringify(testBook));

    break;

  default:
    let inputData = "";

    stdin.on("data", (chunk) => (inputData += chunk));
    stdin.on("end", () => {
      try {
        const parsedData = JSON.parse(inputData);

        if (
          Array.isArray(parsedData) &&
          parsedData.length >= 2 &&
          parsedData[1].hasOwnProperty("sections")
        ) {
          const [context, book] = parsedData as [PreprocessorContext, Book];
          processBook(book);

          console.log(JSON.stringify([context, book]));
        } else {
          throw new Error("Input data structure is not as expected.");
        }
      } catch (error) {
        console.error(`Error processing input: ${error}`);
        process.exit(1);
      }
    });

    break;
}
