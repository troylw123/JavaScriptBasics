// Objects: A datatype that stores a collection of properties and methods

// The parts of an Object:
/*
1. Objects can be stored in variables
2. Objects always use { } to surround it's data
3. Properties or keys of the Object (the left side of the colon separated data)
4. The value of the property/key (the right side of the colon separated data)
*/

// Note: Object properties must be comma (,) separated

// 1         2
let myDog = { 
    // 3              4
    name : "Belle",
    age : 9,
    nickname : "Figa",
    likesBellyRubs: true,
    };

// Dot Notation: How we access objects specific values/data
// The dot/period is an operator .
// Ex: console.log(objectVariable.propertyName) --> prints the property value to the console

console.log(myDog); 
console.log(myDog.name);

let sillyCat = `I call ${myDog.name} by the nickname ${myDog.nickname}.`;
console.log(sillyCat);

// No property?
console.log(myDog.weight); // Undefined is the result

// Cool console trick
console.table(myDog);


// Objects can hold objects and arrays

let showOff = {
    thing1 : {
        detail1 : "yo",
        },
    thing2 : {
        detail1: "hey"
    }
};

console.log(showOff.thing1.detail1);