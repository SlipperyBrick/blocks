"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
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
    }
    catch (error) {
        console.error(`Error parsing JSON input: ${error.message}`);
        process.exit(1);
    }
});
//# sourceMappingURL=blocks.js.map