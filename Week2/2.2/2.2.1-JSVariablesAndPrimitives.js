const { log } = require("node:console");

// create a constant variable called "name" that references a string
const name ="Tiffany";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Moonlight";
// create a reassignable variable called "wage" that references a number
let wage = 300000;
// create a variable called "age" that references a number, should it be reassignable?
let age = 36; // Age should probably be re-assignable because it is a number that will change
// create a variable called "onlyChild" that references a boolean
let onlyChild =false;
// create a variable called "satisfied" that references a boolean
let satisfied = true;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof name);// String
console.log (typeof wage);// Number
console.log (typeof age);// Boolean
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "Flowers";
console.log(typeof favoriteThing)
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
 favoriteSong = "You Bring Me Joy"
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
 favoriteThing = "Purses"
// Happy Birthday!
// Reassign "age" to a new value
 age = 37;
// You got a big raise at work.
// Reassign "wage" to a new value
 wage = 500000
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
 satisfied =true
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("My name is "+ name + ", and I am" +age+ "years old.")

// My name is Tiffany and Im 37 years old.
