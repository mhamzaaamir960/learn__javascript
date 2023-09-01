// Permitive Data types

// =>  string, number, boolean, bigInt, null, undefined, symbol

let my_name = "Hamza"; // string 
let num = 100; // number
let is_logged_in = true; // boolean
let outside_temp = null; // null       
let email1 = undefined // undefined
let email; // undefined
let big_number = 1111111111111111111111n;  // bigInt
let id = Symbol("545"); //  symbol

console.table([`my_name: ${my_name}`, `num: ${num}`,`is_logged_in: ${is_logged_in}`, `outside_temp: ${outside_temp}`,`email: ${email1}`,`big_number: ${big_number}`,id,])

let id1 = Symbol("960");
let id2 = Symbol("960");
console.log(id1 === id2); // false 
/* Both symbols have same value but both symbols are not equal because the values in  multiple 
symbols of course it's same but all symbols are not equal to each other*/




// Non-Premitive (Reference) Data types

// => Array

let fruits = ["Mango","Orange","Banana","Apple"];
// => Object
let obj = {
    name: "Hamza",
    age: 19,
    is_male: true
}
// => Function

let function1 = function () {
    let a = 10;
    let b = 20;
    console.log(10 + 20);
}
function1()

// typeof => it is used to check the datatypes

console.table([ `String: ${typeof String}`,`Number: ${typeof Number}`,`Boolean: ${typeof Boolean}`,`null: ${typeof null}`,`undefined: ${typeof undefined}`,`bigInt: ${typeof BigInt}`,`Symbol: ${typeof Symbol}`,`Array: ${typeof Array}`,`Object: ${typeof Object}`,`Function: ${typeof Function}`]);
