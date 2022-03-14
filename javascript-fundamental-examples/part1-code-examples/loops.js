    //Loops
// loop are one of the main control structures of javascript
// can automate and repeat

    //while loop
/* Add a condition after the while keyword, block that is run until
the condition evaluates true, example below */
const number = [1,2,3,4,5];
let i = 3;
while (i <= number.length) {
    number.pop();
    console.log(number[i]);
}
// Can interrupt a while loop using break keyword, example below:
while (true){
    if(somethingTrue) break
}
// if you decide that in the middle of a loop, want to skip using continue
while (true){
    if(somethingTrue) continue
}

//do..while basically the same as while, except the condition is evaluated after the code block is executed
let i = 4;
do {
    number.shift();
    console.log(number[i]);
} while (i <= number.length)

    //for loop
// pass a set 3 instructions: the initialization, the condition, the increment part
const loopNumber = [1,2,3,4,5,6,7,8,9,10];
for (let i=0; i <loopNumber.length; i++){
    console.log(i)
}
// for...of example below:
for (const value of loopNumber){
    console.log(value)
}
