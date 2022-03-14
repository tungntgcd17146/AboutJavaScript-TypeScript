    //Promises
// Promises are an alternative way to deal with asynchronous code
/* Main problem with use promise when code must be nested inside the callback,
have 3-4 or more callback => we call 'callback hell' with many levels of function into other function
example callback hell below */
todo( result => {
    todo1( result1 => {
        todo2( result2 => {
            console.log(result)
        })
    })
})
    // About Promises Properties
/*
'pending => undefined
'fulfilled' => result value
'rejected' => error object
*/
    //Create a Promise
/* new Promise function have 2 argument 
myResole => when success
myReject => when error */
const animal = true; // or false
const myPromise = new Promise(function(myResolve, myReject){
    if (animal){
        myResolve();
    }else {
        myReject();
    }
})
    //Using promise
myPromise
    .then(() => {
        console.log('Successfully!'); //show result when promise is myResolve
    })
    .catch(() => {
        console.log('Failure!'); //show result when promise is myReject
    })
    .finally(() => {
        console.log('Done Checking!'); // Alway show result 'Done Checking!' when Promise done 
    })
// result will be Successfully! Done Checking! when animal = true
// result will be Failure! Done Checking! when animal = false