    //Functions
//A function is a block of code, self contained, function example below:
function doAnyThing() {
    console.log('Nguyen Thanh Tung')
}
//A function can be run any time by invoking it 
doAnyThing();

//Function can have one or more Argument, like this:
function getName(name, fullname) {
    //do anything
} 
// Can pass an argument, invoke the function passing parameters
getName('Tung', 'Nguyen Thanh Tung');
getName('thanhtung');
// Can pass any value as a parameter: number, strings, booleans, arrays, objects, ..

//By default a function return 'undefined', add a 'return' keyword with a value:
function total(a, b) {
    return a + b;
}
console.log(total(20,10)); //result is 20 +10 = 30

//Function can be defined inside other functions:
const getInfo = () => {
    const getName = () => {
        return 'thanhtung';
    }
    return getName();
}

    //Arrow Functions
// arrow functions allows you to write functions with a shorter syntax, example below:
function getName() {} /* => */ () => {}

// Can assign a regular function to variable:
let getAge = function getName(){} /* short, can remove name => */
let getAge = function() {}
getAge() //invoke the function use variable name

//Same with arrow function
let getAge = () => {}
// Arrow function values are returned without having to use the return
let getAge = () => 22;
getAge() // result 22

//We can set default parameters for regular and arrow function
const getInfo = (name= 'tung', age = 22) => {}