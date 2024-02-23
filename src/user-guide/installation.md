# Installation

Blocks is built using TypeScript and has weekly updates via npm. You can find the most recent update of the Blocks preprocessor [here](https://www.npmjs.com/package/blocks-preprocessor), it is recommend to use the `@latest` tag.

## Prerequisites

There are a two dependencies that you are required to install in order to use mdBook and the Blocks preprocessor. Below are the steps you should follow if you **do not** have these dependencies installed.

### Step 1: Install NodeJS

- **Windows and Mac:** Download from the [NodeJS official website](https://nodejs.org/en), we recommend opting for the LTS version.
- **Linux:** Use nvm installation to manage multiple NodeJS versions easily. See nvm [installation guide](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/).

### Step 2: Install mdBook CLI

Option 1: GitHub Binaries

- Go to [mdBook Releases](https://github.com/rust-lang/mdBook/releases) on GitHub.
- Download the latest release for your OS.
- Extract the binary to a location and add to your PATH.

Option 2: Cargo Installation (requires Rust)

- Install Rust and cargo from the [official Rust site](https://www.rust-lang.org/).
- Run `cargo install mdBook` in the terminal.

### Step 3: Setup your mdBook Project

1. **Initialize npm Project:** Navigate to your project root and execute `npm init` and follow the instructions.
2. **Install Blocks:** Run `npm install blocks-preprocessor@latest` to get the latest version of the Blocks preprocessor.

### Step 4: Configure mdBook for Blocks

1. **Initialize mdBook project:** Run `mdBook init` and follow the instructions.
2. Edit your `book.toml` to include the Blocks preprocessor and Bootstrap resources:

```toml
[preprocessor.blocks]
command = "node node_modules/blocks-preprocessor/dist/blocks.js"
[output.html]
additional-css = ["node_modules/blocks-preprocessor/dist/mdBook-blocks/resources/bootstrap/scss/bootstrap.css", "node_modules/blocks-preprocessor/dist/mdBook-blocks/resources/blocks/scss/blocks.css"]
additional-js = ["node_modules/blocks-preprocessor/dist/mdBook-blocks/resources/bootstrap/js/bootstrap.js"]
```

### Step 5: Begin Using Blocks

With your environment setup, you can start incorporating Bootstrap components into your mdBook content using the Blocks' markdown syntax.

## Support

If you require extra support to install the required dependencies please raise an issue [here](https://github.com/SlipperyBrick/Blocks/issues) and use the "help wanted" label.
