    //Basic-Asynchronous
// the setTimeout() function accepts 2 arguments: a function callback, and a number
// Number is the milliseconds that must pass before the function is ran

setTimeout(() => {
    console.log('hello my name Tung')
},3000)/* the function containing the console.log('hello my name Tung') will be
executed after 3 seconds */

console.log('Tung');
setTimeout(() => {
    console.log('my age: 22')
},3000)
console.log('Nguyen');
/* result will be 
Tung
Nguyen
my age: 22
 */