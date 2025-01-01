# HTML Cheat Sheet

HTML (HyperText Markup Language) is the standard language for creating web pages. Below is a concise guide to essential HTML tags, attributes, and forms.

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>


---

Common HTML Tags

Basic Tags

<!DOCTYPE>: Declares document type.

<html>: Root element.

<head>: Metadata container.

<title>: Defines page title.

<body>: Main content container.


Headings

<h1>Heading 1</h1> <h2>Heading 2</h2> ... <h6>Heading 6</h6>

Text Formatting

<p>Paragraph</p> <b>Bold</b> <i>Italic</i> <u>Underline</u> <br> Line Break
<span>Inline</span> <div>Block</div>

Lists

<ol><li>Item 1</li></ol> <ul><li>Item A</li></ul>

Links & Images

<a href="url">Link</a> <img src="image.jpg" alt="Description">

Tables

<table>
    <thead><tr><th>Header</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
</table>


---

HTML Attributes

id: Unique identifier.

class: CSS class.

style: Inline styling.

src: Image or script source.

alt: Alternative text.

href: URL for links.

target="_blank": Opens link in a new tab.


Example:

<a href="url" target="_blank" class="btn">Link</a>


---

Forms & Inputs

Basic Structure

<form action="submit.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
</form>

Input Types

Text: <input type="text">

Password: <input type="password">

Email: <input type="email">

Radio: <input type="radio">

Checkbox: <input type="checkbox">

Submit: <input type="submit">


Dropdown Menu

<select name="options">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</select>


---

Miscellaneous Tags

<meta charset="UTF-8">: Character encoding.

<link rel="stylesheet" href="style.css">: Links CSS files.

<script src="script.js"></script>: Links JavaScript files.

<footer>: Defines footer section.

<header>: Defines header section.



---

This cheat sheet provides an overview of HTML essentials. It’s perfect for quick reference and learning!

```
