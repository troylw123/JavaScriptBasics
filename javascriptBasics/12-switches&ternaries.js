// Switch statement
// Keywords: switch, case, break, default

let day = "Tues";

switch (day) {
    case "Sat" :
    case "Sun" : 
        console.log("It's the freakin' weekend!");
        break;
    case "Mon" :
    case "Tues" :
    case "Wed" :
    case "Thurs" :
    case "Fri" :
        console.log("...it's a weekday.");
        break;
    default : 
        console.log("I'm not sure that's a day of the week...");
}

// Ternaries
// Tests a true or false outcome similarly to an if/else
// Very concise, often one line only

// Has specific syntax versus keywords
/*
    (1)    (2)                                  (3)
(condition) ? run this code if condition is true : run this code if condition is false
1. The condition to test
2. A question mark (?) signals what code to run if true
3. The colon (:) signals what code to run if false
*/

let age = 29;
(age >= 21) ? console.log("You can enter the venue.") : console.log("No fun for you!");

let num = 2;
(num > 10) ? console.log(`${num} is greater than 10`) : console.log(`${num} is less than 10`);
