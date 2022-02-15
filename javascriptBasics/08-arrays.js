// Arrays: stores a list/assortment of items of any datatype

// Unlike the property names of objects, arrays use a numerically indexed map of values
// Aka the keys(but called indexes) are numbers that start at 0

// The parts of an Array:

/*
1. Arrays can be stored in a variable
2. Arrays use square brackets [ ] to surround it's values/data
3. Items are comma (,) separated
4. Can be a collection of one type -OR- multiple types
*/

// 1            2         3
let myHobbies = ["golfing", "drinking", "camping", "gaming"]; //4
let newArray = ["this", 42, true, "and that"]; //4

// Indexes: How we access array values
// We use the array's variable name w/ [square bracket] containing the index of the value we want to use
// Ex: console.log(arrayName[0]) --> prints the value of the first item in the array

console.log(myHobbies); // Prints whole array
console.log(myHobbies[2]); // Prints 3rd value (camping)

console.log(`My absolute favorite hobby is ${myHobbies[0]}.`); // --> used with string interpolation

console.table(myHobbies);

// Side note: Arrays have a ton of methods(packaged logic accessed by dot notation and passing values) that allow you to easily utilize them
/* 
See external resources later:
--> https://www.w3schools.com/js/js_array_methods.asp
--> https://livecodestream.dev/post/15-must-know-javascript-array-methods/
*/

// .push() - adds a new element/value
myHobbies.push("kayaking");
console.log(myHobbies);

// .sort() - puts in order alphabetically or numerically (inside the parenthesis you can use logic to sort how you want)
myHobbies.sort();
console.log(myHobbies);
