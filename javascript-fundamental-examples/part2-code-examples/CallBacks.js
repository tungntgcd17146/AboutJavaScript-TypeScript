    //CallBacks
/* A callback is a function passed as an argument
to another function. Example function callback below: */
function display(demo) {
    console.log(demo);
}
function todoSomething(a, b, myCallback) {
    const total = a + b;
    myCallback(total); 
}
todoSomething(5, 10, display); // when pass a function as an argument, remember not use parenthesis
/* with example above, demo argument =
3th todoSomething argument is my Callback with result total */
