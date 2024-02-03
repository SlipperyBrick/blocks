const fs = require("fs");

if (process.argv[2] === "supports") {
  // Supports check logic...
  process.exit(0);
}

let input = "";

process.stdin.setEncoding("utf-8");

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  try {
    // Log the raw input before parsing
    console.log("Raw input:", input);

    // Attempt to parse the input as JSON
    const book = JSON.parse(input);

    // Log the parsed book (optional)
    console.log("Parsed book:", book);

    // Write modified book contents to a JSON file
    const outputPath = "./out/book.json";
    fs.writeFileSync(outputPath, JSON.stringify(book, null, 2), "utf-8");
    console.log(`Book contents written to: ${outputPath}`);

    // Print the original book contents to stdout
    console.log(input);
  } catch (error) {
    // Log parsing error to stderr
    console.error("Error parsing input as JSON:", error.message);
    process.exit(1);
  }
});

// Redirect stdout and stderr to a file
const logFilePath = "./out/debug.txt";
const logStream = fs.createWriteStream(logFilePath, { flags: "a" });

console.log = function (message) {
  logStream.write(message + "\n");
};

console.error = function (message) {
  logStream.write("ERROR: " + message + "\n");
};
