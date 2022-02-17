// JavaScript in action
// Variable declarations are made at the top of the file, ex: initializing URLs to a variable, connecting to HTML elements, etc. 

// Make an array of our favorite things


// Print that array to the console

// Print the first item to the console


// Let's now add that array to the HTML page via DOM manipulation
// Arrays have an awesome methods that can make this possible like the .forEach() or .map(), we're going to see the .map() method: 
// JS can create HTML elements with the .createElement() method, the elements can be given attributes we're already familiar with!




// Can we do this with other things?


// Fetch
// JavaScript can send network requests to ask for and receive information/data from servers to load in
// It make requests to any API (Application Programming Interface) that returns JSON(JavaScript Object Notation)  data
// We will fetch a random cat photo from the the Cat API: https://api.thecatapi.com/v1/images/search or if you are a dog person we have the Dog API: https://random.dog/woof.json 

// Use the fetch keyword and pass a URL as the argument, fetch is promised-based which means we have to resolve the the promise with .then() methods(one to return our response from the API & JSONify it and another to pass/use the JSON object)
/*
BASIC fetch structure:
fetch(url)
    .then(code to process the data)
    .then(code to use the data)
*/




// Getting from the console to the visible HTML:
// We can make a function to display our data similarly to the array example above!




/* 
Resources on fetch/JSON:
- https://javascript.info/fetch
- https://www.javascripttutorial.net/javascript-fetch-api/ 
- https://www.w3schools.com/js/js_json_intro.asp 
*/