// Conditionals: check if conditions are true or false
// Will run or not run code accordingly to the condition being met

// If Statements: checks a single condition; if true, run code
// Uses if keyword to signal conditional
/*
if (condition) {
    - Code here will run if condition is true -
}
*/
if (30 > 25) {
    console.log("Yep, That's true. This code will run.");
}

if (30 < 25) {
    console.log("That's false. This code won't run.");
}

// If Else Statement: Same as If, but adds false condition logic(checks both conditions)
// Uses both the if and else keywords
/*
if (condition) {
    - Code to run if true -
} else {
    - Code to run if false -
}
*/
let i = 12;
if (i > 5) {
    console.log(`That's true! ${i} is greater than 5 so the IF code ran!`);
}
else {
    console.log(`This is false. ${i} is less than 5 so the ELSE code ran.`);
}

// Else If Statements: This can check multiple (3 or more) conditions
// Uses the if, else if, and else keywords
/*
if (condition1) {
    - Code that runs if condition 1 is true -
} else if (condition2) {
    - Code that runs if condition 1 is false, but condition 2 is true -
} else {
    - Code that runs if all prior conditions are false -
}
*/
let age = 29;
if (age >= 18) {
    console.log("You can vote and buy lottery tickets.");
} else if (age >= 21) {
    console.log("You can legally drink and buy cigs.");
} else if (age >= 25) {
    console.log("Now, renting a car is easier plus you can get all the prior perks.");
} else {
    console.log("I'm just a kid and life is a nightmare.");
}

// NOTE: The first condition that is true will run it's code and exit the conditional

if (age >= 25) {
    console.log("Now, renting a car is easier plus you can get all the prior perks.");
} else if (age >= 21) {
    console.log("You can legally drink and buy cigs.");
} else if (age >= 18) {
    console.log("You can vote and buy lottery tickets.");
} else {
    console.log("I'm just a kid and life is a nightmare.");
}