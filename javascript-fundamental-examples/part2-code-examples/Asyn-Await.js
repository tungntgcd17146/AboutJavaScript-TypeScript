//Async functions are a higher level abstraction over promises
//An async function returns a promise   
    
    //Async Syntax
//The keyword 'Async' before a function, Example below:
async function myAnimal() {
    return "my animal name is cat";
}
myAnimal().then(
    function(value) {
        console.log(value);
    }
)
    //Await Syntax
// The keyword await before a function makes the function wait for a promise
// the 'await' keyword can only used inside an 'async' function
// Example below: waiting for a timeout
async function myCar() {
    let myPromise = new Promise(function(myResolve) {
        setTimeout( function() {myResolve('I wish i have BMW car');}, 3000);
    });
    let demo = await myPromise;
    console.log(demo);
}
myCar();