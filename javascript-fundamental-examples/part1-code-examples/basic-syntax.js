
    // Comment
// Basic Comment
/* Multi-line comments  most important part, 
below are some code examples and notes by 
comments */

    // Semicolon

/* Every line in a JavaScript program is optionally 
terminated using semicolons */

    // Values 

/* A 'hello' string or number like 10 is a value */

    // Variables

/* Until 2015, 'var' was the only way we could declare a variable in JavaScript
Today with ES6, a modern codebase will most likely just use 'const' and 'let' */
const a = "hello"; // first is to use 'const'
let c = "world"; // second way is to use 'let'
/* Difference const and let: 
'const' defines a constant reference to a value. Means the reference 
cannot be changed. 
You can do it with 'let' */
// 'let' value can be initialized later, below example:
let name;
name = "thanh tung";
// Can declare multiple variables at once in the same statement:
const a = 1, b = 2;
let c = 3, d = 4;
// Cannot redeclare the same variable more than one time
let a = 1;
let a = 2;

    // Types
/* Variables in JavaScript do not have any type attached. 
they are untyped. */

// Primitive types: 
let a = 0; // numbers
let name = "thanh tung" // strings
let myName = 'tung nguyen' // other way strings
let isTrue = true;
let isFalse = false; // booleans
let age = symbols("20"); //symbols 
//Special types: null and undefined 
let name = null;
let age = undefined;
//Object types: Any value that's not of a primitive type is an object */

    // Expressions
 a = i++;
 b -= 2, c += 3 ;
 a * 2 ;
 let name = 'tung' + 'nguyen' // String expressions 
 //logical expressions resolve to a boolean value, example:
 a && b; // a or b
 a || b; // a with b
 !a; // not a value

    // Operators
let five = 2 + 3; //the addition operator(+)
let six = five + 1;

let two = 5 - 3; // the subtraction operator

let three = 9 / 3; //division operator
let demo = 1 / 0; // when divide by zero, not raise any error

let five = 15 % 10; // remainder operator
let five = 5 % 0; //by zero is alway NaN(not a number)

let six = 3 * 2; // multiplication operator

let one = 1 ** 3; //exponentiation operator

    // Precedence
let number = 1 * 2 + 5 /2 % 2;
/* some operations have more precedence than the others
level hight to low: *%/ -> +- -> = 
*/

    // Comparisons
// Comparison operators always returns a boolean, a value that's true or false
let age = 22;
a >= 22; // >= means 'greater than, or equal to', result is true
a > 22; // > greater than, result is false
a <= 22 // <= means 'minus than, or equal to', result is true
a < 23 // < means 'less than', result is true

    // Conditionals
// An if statement is used to make the program take a route, or another, depending on the result of an expression evaluation
if (true) {
    // do
}
if (true) doSomething() //if have a single statement, can omit the block
// else: going to be executed if the 'if; condition is false
let a = 5;
if (a<=6) {
    b = a + 1;
}else {
    b = a - 1;
}
// result is b = 6 because statement a <= 6 is true 

    // String
let myName = 'tung nguyen'; //assign a string value to a variable
let myInfo = "ThanhTung"; //can use with double quotes

//using 'length' property 
myName.length; 
'tung nguyen'.length; //determine the length of a string ,result = 11 

// Using + operator to joined two strings
let full = myInfo + myName;
full = 'tung nguyen' + myInfo; //can interpolate variables

// define string to use template literals
let string = `nguyen 
thanh 
tung` //defined inside backticks
let string = `my name is 
${myName}` //template literals can interpolate variables and expressions into string