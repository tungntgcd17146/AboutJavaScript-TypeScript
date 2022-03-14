    //Objects
//Define an object:
const room = {} //object literal
const car = new Object(); // new Object syntax
const book = Object.create(); //use Object.create()

//Initialize an object using new keywork before a function with a captial letter
function Room(bed, restroom){
    this.bed = bed
    this.restroom = restroom
}
const getRoom = new Room('king', 2) //initialize a new object
getRoom.bed // result king
getRoom.restroom // result 2

    //Object properties
let cat = {
    color: 'blue'
}//define a name color propety

let cat = {
    color: 'blue',
    'cat name': 'meo meo'
}
cat.color // result is "blue"
cat['cat name'] // result is 'meo meo', [] using with invalid names

// Object can have nested objected objects as properties
let animal = {
    dog: {
        name: 'bean',
    },
    cat: 'meo'
}
// Can access the dog name with example blow:
animal.dog.name; // result is 'bean' or
animal['dog']['name'];
animal.dog.name = 'hello' // update
animal.pig = 'heo' // add new properties
delete animal.pig // delete a property

    //Object methods
// Functions can be assigned to a function property
let animal = {
    cat: 'meo',
    update: function() {
        console.log("hello new animal")
    }
}
animal.update() //invoke its using dot syntax

/*inside a method defined using function(){},
 we access to the object instance by using 'this' */
 let animal = {
    cat: 'meo',
    update: function() {
        console.log(`$(this.cat)`)
    }
}
animal.update() //invoke its using dot syntax, result 'meo'

/*IMPORTANT distinction between regular functions and arrow function
if use arrow function, don't have access to 'this', it not work
because arrow functions are not bound to the object. 
Can accept parameters, example below: */
let animal = {
    cat: 'meo',
    update: function(newName) {
        console.log(`$(newName)`)
    }
}
animal.update('gaugau')