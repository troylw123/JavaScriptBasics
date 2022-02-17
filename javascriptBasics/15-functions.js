// Functions: the "verbs", ou way to make JS perform a task/action
// Functions run only when invoked (their name is called) and return something

/*
function functionName(parameter) {
    -- block of code maybe doing something -- 
    return someValueOrThing
}

Invoking the function: 
functionName(argument);
*/

// Example with no parameters
function hello() {
    console.log("I am a hello function!");
}
hello();
hello();

// Example with one parameter
function greetPerson (name) {
    console.log(`Hey, ${name}, what's up? \n It's good to see you.`);
}

greetPerson("Troy");

// Example with two parameters
function multiply(a, b) {
    return a*b;
}

multiply(25, 25); // Doesn't print anything but does return the value

console.log(multiply(25, 25));

// Another way to write it
function multiplyAgain(a, b) {
    let x = a*b;
    return x;
}

// Return vs. Console.log 
// ^best explained via the modules here: https://elevenfifty.instructure.com/courses/862/pages/return?module_item_id=82466

// There are other formats to functions, but we're sticking with the classic declarative kind for the sake of time.
// ^A great resource is the additional notes repo we will be cloning: https://github.com/KateLockhart/FunctionsNotes

