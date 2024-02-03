# Cards

Behold the awe-inspiring power of the card! An unrivaled vessel for your content, the card is a flexible and adaptable container that is sure to capture your audience's attention. With options for customization, you can easily tailor your card to suit your needs to bring forward your vision.

## Attributes

| Attribute | Value                                              |
| --------- | -------------------------------------------------- |
| title     | A content string wrapped in double-quotes          |
| caption   | A content string wrapped in double-quotes          |
| image     | A path to an image wrapped in double-quotes        |
| button    | A caption string wrapped in double-quotes          |
| link      | A path to a markdown file wrapped in double-quotes |

</br>

### Example

```markdown
[blocks-card]
title: "A Card"
caption: "Here is a beautiful card to transport you to the Welcome page"
image: "../assets/blocks-watermark.png"
button: "Take me there!"
link: "../welcome.md"
[/blocks-card]
```

</br>

### Output

[blocks-card]
title: "A Card"
caption: "Here is a beautiful card to transport you to the Welcome page"
image: "../assets/blocks-watermark.png"
button: "Take me there!"
link: "../welcome.md"
[/blocks-card]

The card offers a myriad of potential display options that enable you to present your content in distinctive and captivating ways. Whether you choose to stack your cards or utilize the [row](rows.md) or [container](containers.md) layout components, the possibilities for creative expression are limitless. You have complete freedom to experiment with various layouts to make your content stand out and leave a lasting impression on your audience.

### Example

```markdown
[blocks-row]
[blocks-card]
title: "Card 1"
caption: "I am card 1"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[blocks-card]
title: "Card 2"
caption: "I am card 2"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[blocks-card]
title: "Card 3"
caption: "I am card 3 and I have more content than the other cards"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[blocks-card]
title: "Card 4"
caption: "I am card 4"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[/blocks-row]
```

</br>

### Output

[blocks-row]
[blocks-card]
title: "Card 1"
caption: "I am card 1"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[blocks-card]
title: "Card 2"
caption: "I am card 2"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[blocks-card]
title: "Card 3"
caption: "I am card 3 and I have more content than the other cards"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[blocks-card]
title: "Card 4"
caption: "I am card 4"
image: "../assets/blocks-watermark.png"
button: "See More"
link: "../welcome.md"
[/blocks-card]
[/blocks-row]
