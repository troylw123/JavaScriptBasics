// The data type is the type/kind of items we can communicate to JS

// Undefined and Null, they do exist 
// https://elevenfifty.instructure.com/courses/862/pages/javascript-basics-undefined-and-null?module_item_id=82436

// Numbers
// Just the only type for any way you want a numerical value
let x = 42;
let y = -27;
let z = .05737;
console.log(x, y, z);

// Strings
// Can be denoted with ' ', " ", or ` ` 
let firstName = 'Kate';
let lastName = "Lockhart";
let fullName = `Hello, my name is ${firstName} ${lastName}.`;
console.log(fullName);
// Use the \n to break a new line
console.log(`${firstName} \n${lastName} \n${fullName}`);

// Boolean
let yes = true;
let no = false;
console.log(yes, no);
