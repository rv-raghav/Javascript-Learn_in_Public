//! For making notes in the code is called comments

//* 1. var (old way of declaring variables)

var title = "Let's Learn JavaScript 🔥";
var title = "This is a new title✨"; // Re-declaring the variable
title = "Javascript"; // Re-assigning the variable
console.log(title);

//* 2. let (modern way of declaring variables)

let isDone = "Yes✅";

// let isDone = "No❌"; // This will cause an error because 'let' does not allow re-declaration
isDone = "Maybe"; // This is allowed, as we are re-assigning the variable
console.log(isDone);

//* 3. const (for constants, values that won't change)

const PI = 3.14;
// const PI = 3.14159; // This will cause an error because 'const' does not allow re-declaration
// PI = 3.14159; // This will also cause an error because 'const' does not allow re-assignment
console.log(PI);


//! Primitive Data Types
//* 1. String
let username = "raghav"; //'raghav' 
let para = `Hello World
my name is raghav
what is going on?`; // Template literals allow multi-line strings and string interpolation
console.log(username);


//* 2. Number
let age = 25; // Integer
console.log(age);

//* 3. Boolean
let isProgrammer = true; // true or false
console.log(isProgrammer);

//* 4. Null
let emptyValue = null; // Represents an intentional absence of any value
console.log(emptyValue);

//* 5. Undefined    
let notAssigned; // Variable declared but not assigned a value
console.log(notAssigned); // This will log 'undefined'  

//* 6. Symbol (ES6 feature, used for unique identifiers)
let uniqueId = Symbol("id"); // Creates a unique symbol
console.log(uniqueId);

//* 7. BigInt (for large integers, ES11 feature)
let bigNumber = BigInt(1234567890123456789012345678901234567890); // Creates a BigInt
console.log(bigNumber);

//! Non-Primitive Data Types
//* 1. Array
let fruits = ["apple🍎", "banana🍌", "cherry🍒"]; // An array of strings
console.log(fruits);

//* 2. Object
let person = {
    name: "Raghav",
    age: 22,
    isProgrammer: true
}; // An object with properties
console.log(person);

//* 3. Function
function add(){
    console.log(10+20);
}
add(); // Calling the function to execute it