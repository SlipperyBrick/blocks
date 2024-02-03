![blocks-logo](blocks-preprocessor/src/assets/blocks-logo.png)

# Blocks Preprocessor

Blocks is a preprocessor for mdbook.

The goal of Blocks is to extend traditional markdown syntax to provide users the ability to render components from the Bootstrap web framework into their books.

Blocks does this by hooking into the mdbook build process to parse a book structure, replacing all Blocks custom markdown syntax with beautiful Bootstrap components.

![blocks-demo](blocks-preprocessor/src/assets/blocks-demo.png)

The Blocks back-end employs a factory design pattern for constructing the HTML that makes the Bootstrap components, known as the Blocks Factory. The Blocks Factory is easily extendable, allowing users to add new components to Blocks.

Blocks consists of documentation for any users interested in extending, or contributing to Blocks.

The documentation covers:

- Design of the Blocks custom markdown syntax
- How the Blocks Factory works
- Extending the Blocks Factory
- How the Blocks parser works

and more!
