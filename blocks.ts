import * as fs from "fs";

// Check if the first command-line argument is "supports"
if (process.argv[2] === "supports") {
  // Log the arguments during the "supports" check
  console.log("Arguments during supports check:", process.argv.slice(2));

  // Exit with a status code of 0 to indicate support
  process.exit(0);
}

// Check if the necessary command-line arguments are provided
if (process.argv.length < 3 || !process.argv[2]) {
  console.error("Usage: node script.ts supports <jsonFilePath>");
  process.exit(1);
}

// Read the JSON file
const jsonFilePath = process.argv[2];
fs.readFile(jsonFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading JSON file: ${err.message}`);
    process.exit(1);
  }

  try {
    // Parse the JSON input
    const [_context, book] = JSON.parse(data);

    // Preprocessing logic starts here
    console.log("Parsed JSON:", _context, book);
  } catch (error) {
    console.error(`Error parsing JSON input: ${(error as Error).message}`);
    process.exit(1);
  }
});
