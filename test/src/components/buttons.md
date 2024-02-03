# Buttons

Prepare to unleash the power of buttons on your webpage! With their ability to guide users and provide easy access to other areas of content, buttons are an essential tool for creating a seamless and intuitive user experience.

## Attributes

| Attribute | Value                                              |
| --------- | -------------------------------------------------- |
| content   | A content string wrapped in double-quotes          |
| link      | A path to a markdown file wrapped in double-quotes |

</br>

### Example

```markdown
[blocks-button]
content: "Go Somewhere"
link: "../welcome.md"
[/blocks-button]
```

</br>

### Output

[blocks-button]
content: "Go Somewhere"
link: "../welcome.md"
[/blocks-button]

</br>

Up to seven buttons can be perfectly aligned by wrapping a [row](rows.md) component around them.

### Example

```markdown
[blocks-row]
[blocks-button]
content: "Button 1"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 2"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 3"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 4"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 5"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 6"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 7"
link: "../welcome.md"
[/blocks-button]
[/blocks-row]
```

</br>

### Output

[blocks-row]
[blocks-button]
content: "Button 1"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 2"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 3"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 4"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 5"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 6"
link: "../welcome.md"
[/blocks-button]
[blocks-button]
content: "Button 7"
link: "../welcome.md"
[/blocks-button]
[/blocks-row]
