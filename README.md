![Blocks Logo](https://xbackbone.davidrjames.co.uk/vAbO4/jaGoKACE92.png/raw)

# Blocks: mdBook Preprocessor for Bootstrap Components

Blocks is an open-source preprocessor for mdbook aimed at integrating Bootstrap components into your mdbook projects. It introduces a custom markdown syntax to include Blocks-specific tags which are converted into Bootstrap-compliant HTML components during the mdbook build process.

![Blocks Transformation Example](https://github.com/SlipperyBrick/Blocks/assets/36016443/667e7f71-fee1-4c85-b83a-afa3b8426469)

## Features

- **Custom Markdown Syntax:** Allows the embedding of Bootstrap components using a simple, readable syntax.
- **Integration with mdbook:** Designed to operate seamlessly within the mdbook ecosystem.
- **Modular Design:** Supports the easy addition of new Bootstrap components into the Blocks components library
- **Developer Tools:** Includes a Visual Studio Code extension for live markdown previewing.

## Using Blocks

The Blocks custom markdown syntax is designed to easily incorporate Bootstrap components into mdbook projects. It builds on standard markdown syntax with additional features for declaring components.

To use Blocks, simply wrap your Bootstrap component declarations within `[blocks-<component>]` tags in your markdown files:

```markdown
[blocks-card]
title: "Greetings!"
caption: "This is an example of a Blocks card component."
image: "./assets/blocks-watermark.png"
button: "Learn More"
link: "components/cards.md"
[/blocks-card]
```

Components are specified using `tags` for the Bootstrap element and `attributes` for the component's content and settings. Blocks also supports standard markdown within these attributes for enriched text capabilities.

For a detailed list of available components, see the [Blocks Component Library]().

## Visual Studio Code Extension

The [Blocks Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=SlipperyBrick.blockspreviewer) provides a live preview feature, making it easier to visualize how your markdown will look once transformed into Bootstrap components.

![gif](https://xbackbone.davidrjames.co.uk/vAbO4/jAdELoSo68.gif/raw)

## Getting Started

To begin using Blocks with your mdbook projects follow our quick start setup instructions below:

### Step 1: Install NodeJS

- **Windows and Mac:** Download from the [NodeJS official website](https://nodejs.org/en), we recommend opting for the LTS version.
- **Linux:** Use nvm installation to manage multiple NodeJS versions easily. See nvm [installation guide](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/).

### Step 2: Install mdbook CLI

Option 1: GitHub Binaries

- Go to [mdBook Releases](https://github.com/rust-lang/mdBook/releases) on GitHub.
- Download the latest release for your OS.
- Extract the binary to a location and add to your PATH.

Option 2: Cargo Installation (requires Rust)

- Install Rust and cargo from the [official Rust site](https://www.rust-lang.org/).
- Run `cargo install mdbook` in the terminal.

### Step 3: Setup your mdbook Project

1. **Initialize npm Project:** Navigate to your project root and execute `npm init`.
2. **Install Blocks:** Run `npm install blocks-preprocessor`.

### Step 4: Configure mdbook for Blocks

1. **Initialize mdbook project:** Run `mdbook init` and follow the instructions.
2. Edit your `book.toml` to include the Blocks preprocessor and Bootstrap resources:

```
[preprocessor.blocks]
command = "node node_modules/blocks-preprocessor/dist/blocks.js"

[output.html]
additional-css = ["node_modules/blocks-preprocessor/dist/mdbook-blocks/resources/bootstrap/scss/bootstrap.css", "node_modules/blocks-preprocessor/dist/mdbook-blocks/resources/blocks/scss/blocks.css"]
additional-js = ["node_modules/blocks-preprocessor/dist/mdbook-blocks/resources/bootstrap/js/bootstrap.js"]
```

### Step 5: Begin Using Blocks

With your environment setup, you can start incorporating Bootstrap components into your mdbook content using the Blocks' markdown syntax.

## Useful Resources:

- [mdBook documentation](https://rust-lang.github.io/mdBook/index.html)
- [Blocks documentation](https://slipperybrick.github.io/Blocks/welcome.html)
