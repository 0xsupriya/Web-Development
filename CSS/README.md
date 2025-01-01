Here’s a detailed README.md file with all the important CSS notes in an easy-to-read format:

# CSS Notes

A complete guide to understanding CSS for styling websites.

---

## Table of Contents

1. [Introduction to CSS](#introduction-to-css)
2. [Types of CSS](#types-of-css)
3. [Selectors](#selectors)
4. [Properties and Values](#properties-and-values)
5. [Box Model](#box-model)
6. [Positioning](#positioning)
7. [Flexbox](#flexbox)
8. [Grid](#grid)
9. [Responsive Design](#responsive-design)
10. [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
11. [Keyframes and Animations](#keyframes-and-animations)
12. [Units in CSS](#units-in-css)
13. [Media Queries](#media-queries)

---

## Introduction to CSS

CSS (Cascading Style Sheets) is used to style HTML elements and control the layout of web pages.

### Syntax

```css
selector {
    property: value;
}


---

Types of CSS

1. Inline CSS: Applied directly to an HTML element using the style attribute.

<p style="color: blue;">This is an inline CSS example.</p>


2. Internal CSS: Defined within a <style> tag in the <head> section.

<style>
    p {
        color: green;
    }
</style>


3. External CSS: Written in a separate file and linked with a <link> tag.

<link rel="stylesheet" href="styles.css">




---

Selectors

Basic Selectors

*: Universal selector (selects all elements).

tagname: Selects elements by tag name.

.classname: Selects elements by class.

#id: Selects elements by ID.


Attribute Selectors

[type="text"]: Selects input fields of type text.


Grouping Selectors

Separate selectors with a comma: h1, h2, h3.


Combinators

Descendant ( ): div p (selects all <p> inside <div>).

Child (>): div > p (selects direct child <p> of <div>).

Sibling (~): div ~ p (selects all <p> siblings of <div>).



---

Properties and Values

Commonly Used Properties

Text Properties:

color: Changes text color.

font-size: Changes font size.

font-family: Sets the font style.

text-align: Aligns text (left, right, center, justify).

text-decoration: Adds decoration (e.g., underline).


Background Properties:

background-color: Sets the background color.

background-image: Adds a background image.

background-size: Defines size (cover, contain).


Border Properties:

border: Sets border width, style, and color.

border-radius: Makes corners rounded.


Margin and Padding:

margin: Sets the space outside the element.

padding: Sets the space inside the element.




---

Box Model

The box model consists of:

1. Content: The inner text or image.


2. Padding: Space between content and border.


3. Border: The boundary around padding.


4. Margin: Space outside the border.




---

Positioning

Types of Positioning

static (default): Normal flow.

relative: Positioned relative to its normal position.

absolute: Positioned relative to its nearest positioned ancestor.

fixed: Positioned relative to the viewport.

sticky: Toggles between relative and fixed.



---

Flexbox

A layout model for arranging elements in rows or columns.

Properties

display: flex;

justify-content: Aligns items horizontally (flex-start, center, space-between).

align-items: Aligns items vertically (flex-start, center, stretch).

flex-wrap: Allows wrapping of items.



---

Grid

A powerful layout system for creating two-dimensional layouts.

Properties

display: grid;

grid-template-columns: Defines column structure.

grid-template-rows: Defines row structure.

gap: Adds space between grid items.


Example:

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}


---

Responsive Design

Designing web pages to work on all screen sizes.

Techniques

Fluid Grids: Use percentage-based widths.

Flexible Images: Use max-width: 100%;.

Media Queries: Adjust styles for different devices.



---

Pseudo-classes and Pseudo-elements

Pseudo-classes

:hover: Apply styles when hovering over an element.

:focus: Apply styles when an element is focused.


Pseudo-elements

::before: Add content before an element.

::after: Add content after an element.


Example:

button:hover {
    background-color: blue;
}


---

Keyframes and Animations

Example

@keyframes example {
    from { background-color: red; }
    to { background-color: yellow; }
}

div {
    animation: example 5s infinite;
}


---

Units in CSS

Absolute Units

px, cm, mm, in


Relative Units

%, em, rem, vh, vw



---

Media Queries

Used to apply styles based on screen size or device.

Syntax

@media (max-width: 768px) {
    body {
        background-color: lightgray;
    }
}


---

Comments

Use /* Comment */ to add comments in CSS.
```
