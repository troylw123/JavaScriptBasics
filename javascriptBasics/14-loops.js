/*
Types of Loops:
For - loops through until ending condition is met
For In - loops through properties of an object
For Of - loops through values of an iterable object
While - loops while a condition is true
Do While - loops through while a condition is true
To see examples of each: https://www.w3schools.com/js/js_loop_for.asp
*/

// Focus on the For loop (for now), we saw this in C#
// P.S. Ctrl + C to stop an infinite loop

/*
for (initialExpression; conditionalExpression, incrementExpression) {
    - For loop body (code that runs each time) until conditionalExpression is false -
} 
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let x = 50; x >= 0; x-=5) {
    console.log(`x is ${x}`);
}