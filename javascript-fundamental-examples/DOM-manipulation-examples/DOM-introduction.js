    //Introduction
/* The Document Object Model (DOM), is an essential part of making
websites interactive
- Allows a programming language to manipulate the content, structure and style
- Necessary to have an existing knowledge of HTML and CSS */

    //DOM definition
/* This model allows JavaScript to access the text content and elements of 
the website document as objects
 */

    //The HTML DOM tree of Objects
/* 
1st-Document
2st-Element
3st-Attribute
final-Text
 */
    //Difference Between the DOM and HTML source Code
/* Two instances in which the browser-generated DOM different than HTML source code:
- The DOM is modified by Client-side JavaScript
-The browser automatically fixes errors in the source code
 */
// Example: type below
console.log(document.body) 
//into console. Output will show HTML skeleton <body>...</body>
//Change background-color of the body
console.log(document.body.style.backgroundColor= 'gray')
//code Javascript we typed above is now a part of the DOM
 