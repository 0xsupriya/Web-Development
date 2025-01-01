--> HTML
Hyper Text Markup Language

HTML is the code that is used to
structure a web page and its content.

The component used to design the
structure of websites are called HTML tags.

--> HTML TAG
A container for some content or other HTML tags.

--> BASIC HTML PAGE

<!DOCTYPE html>  //tells browser you are using HTML5
<html> //root of an html document
<head> //container for metadata
<title>My First Page</title> //page title
</head>
<body> //contains all data rendered by the browser
<p>hello world</p> //paragraph tag
</body>
</html>

--> POINTS
Html tag is parent of head & body tag

Most of html elements have opening & closing tags
with content in between

Some tags have no content in between, eg - <br>

We can use inspect element/view page source to edit html

--> Comments in HTML

<!-- This is an HTML Comment -->

This is part of code that should not

--> HTML is NOT case sensitive

<p> = <P>
<html> = <HTML>
<head> = <HEAD>
<body> = <BODY>

--> Basic HTML Tags

Attributes are used to add more information to the tag
HTML Attributes

<html lang="en">

Heading Tag

--> Used to display headings in HTML

h1 (most important)
h2
h3
h4
h5
h6 (least important)

--> Paragraph Tag

Used to add paragraphs in HTML

<p> This is a sample paragraph </p>

--> Anchor Tag

Used to add links to your page

<a href="https://google.com"> Google </a>

--> Image Tag

Used to add images to your page

<img src="/image.png" alt="Random Image">

--> Image Tag

Used to add images to your page

<img src="/image.png" alt="Random Image">

--> Bold, Italic & Underline Tags

Used to highlight text in your page

<b> Bold </b>

<i> Italic </i>

<u> Underline </u>

--> Big & Small Tags

Used to display big & small text on your page

<big> Big </big>

<small> Small </small>

--> Hr Tag

Used to display a horizontal ruler, used to separate content

<hr>

--> Subscript & Superscript Tag

Used to display a horizontal ruler, used to separate content

<sub> subscript </sub>

<sup> superscript </sup>

H2O

A + B

--> Pre Tag

Used to display text as it is (without ignoring spaces & next line)

<pre> This

is a sample

text.

</pre>

--> Page Layout Techniques

using Semantic tags for layout

<header>

<main>

<footer>

--> Inside Main Tag

Section Tag

<section>

For a section on your page

Article Tag

<article>

For an article on your page

Aside Tag

<aside>

For content aside main content(ads)

--> Revisiting Anchor Tag

<a href="https://google.com" target="_main"> Google </a>

for new tab

<a href="https://google.com"> <img src="link"> </a>

clickable pic

--> Revisiting Image Tag

set height

set width

<img src="link" height=50px >

<img src="link" width=50px >

--> Div Tag

Div is a container used for other HTML elements

Block Element (takes full width)

--> Span Tag

Span is also a container used for other HTML elements

Inline Element (takes width as per size)

--> List in HTML

Lists are used to represent real life list data.

unordered ordered

<ul>

</ul>
<li> Apple </li>

<li> Mango </li>

<ol>

</ol>
<li> Apple </li>

<li> Mango </li>

--> Tables in HTML

Tables are used to represent real life table data.

<tr> used to display table row

<td>

<th>

used to display table data

used to display table header

--> Tables in HTML

</table>

<th> Name </th>

<table>

<tr>

<th> Roll No </th>

</tr>

<td> supriya </th>

<tr>

<th> 1664 </th>

</tr>

--> Caption in Tables

<caption> Student Data </caption>

--> colspan attribute

colspan="n"

used to create cells which spans over multiple columns

--> Form in HTML

Forms are used to collect data from the user

Eg- sign up/login/help requests/contact me

<form>
form content
</form>

--> Form Element : Input

<input type="text" placeholder="Enter Name">

--> Label

<input type="radio" value="class X" name="class" id="id1">

<label for="id1">

</label>

<input type="radio" value="class X" name="class" id="id2">

<label for="id2">

</label>

--> Class & Id

<div id="id1" class="group1">

</div>

<div id="id2"> class="group1">

</div>

--> Checkbox

<input type="checkbox" value="class X" name="class" id="id1">

<label for="id1">

</label>

<input type="checkbox" value="class X" name="class" id="id2">

<label for="id2">

</label>

-->Textarea

<textarea name="feedback" id="feedback" placeholder="Please add Feedback">

</textarea>

--> Select

<option value="Delhi"> Delhi </option>

<select name="city" id="city">

</select>

<option value="Mumbai"> Delhi </option>

<option value="Banglore"> Delhi </option>
