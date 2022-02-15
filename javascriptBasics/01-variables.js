// Our nouns/subjects/items, how we tell JS what a "thing" (data item) is

// Declaration 
var myName;

// Initialization 
myName = "Troy";
console.log(myName, "Line 8 console.log");

// Re-initialization
myName = "Troy Weaver";
console.log(myName, "Line 12 console.log");

// Declaration and Initialization 
let yourName = "Adam";
console.log(yourName);

// JS uses keywords to signal variable declaration: var, let & const
/* 
var - old school, not used often/outdated
let - cool and flexible, known as mutable, it can be re-initialized and change values
const - not flexible, know as immutable, it's value can't be changed, must be give a value when declared
*/

// Var - follows no rules, can cause problems
pupper = "Belle";
var pupper;
console.log(pupper);

// Let - adheres to hoisting, needs to be declared first
let doggo;
doggo = "Cody";
console.log(doggo);

// Const - only will be the declared and initialized value, aka, "I said what I said"
const theAlmightyRulerOfUsAll = "Theodore";
console.log(theAlmightyRulerOfUsAll);

