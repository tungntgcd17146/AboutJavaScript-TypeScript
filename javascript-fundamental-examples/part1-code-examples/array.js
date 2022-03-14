    // Arrays

// Arrays is a collection of element, array are objects
// 2 different ways initialize an empty array
let a = []; /* pre-fill using array literal syntax => */ a = [4,5,6]; 
let a = Array(); /* pre-fill using array built-in syntax => */  let a = Array.of(1,2,3); 
let info = ['Tung',22,['Nguyen','Thanh']]; // An array can hold any value, even value of different types
// Can create multi-dimensional arrays, have very useful applications
let matrix = [
    [a,b,c],
    [1,2,3],
    [x,y,z]
]

let number = [1,2,3,4]; // Array example
number.length // check length property, result = 4
// Can access any element of the array by referencing its index, start from zero
number[0]; // 1
number[1]; // 2
number[3]; // 4

Array(4).fill(2); /* initialize a new array with a set of values using this syntax
an array of 4 element, and fills each element with the 2 number */

number.length = 2; //assign a smaller number, the array is cut at that position
// => a[1,2]

number.push(5); // add an 5 number element at the end of an array number
number.unshift(0); // add an 0 number element at the beginning of an array number

number.pop(); // remove an item from the end of number array
number.shift(); // remove an item from the beginning of number array

let a = [1,2,3], b = [4,5,6];
//Join multiple arrays by concat()
let c = a.concat(b); //result c[1,2,3,4,5,6]
let c = [...a,...b];//use spread operator

//Find a specific item in the array
a.find((element, index, array) => {
    //return true or false
})
// a.findindex() work sumilarly to find(), but return the index of the first item finded
a.includes(value) //result return true if array a contains value



