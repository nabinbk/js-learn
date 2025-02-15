// # Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 95
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 235412554555562221n




// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["daya", "biraj", "bipin"]
let myObj = {
    name: "nabin",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof outsideTemp);
console.log(typeof myFunction);

console.log(typeof anotherId);