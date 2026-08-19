"use strict"; // treat all js code as newer version

// alert("Prashanth"); //-> it will not give an alert because we are using nodejs , not browser

let name = "Prashanth";
let age = 25;
let isLoggedIn = true;

//number  => 2 to power 53 
// bigint
//string -> ""
//boolean -> true/false
//null -> standalone value / representation of empty value / it's an object you can say
//undefined -> value not yet assigned / it's a type you can say
//symbol -> to find uniqueness it will use

//object -> 

console.table([typeof name, typeof age, typeof isLoggedIn, typeof null, typeof undefined]);



//summary of data types

/*
JS is dynamically typed language

Types of datatypes
1.Primitive   - call by value
7 - types: String, Number, Boolean, null, undefined, Symbol,BigInt


2.Non-primitive - call by reference (reference type)
types: Arrays, Objects, Functions
*/


//1. primitive types
let stdName = "Prashanth";
let stdAge = 26;
let isAdult = true;
const outsideTemp = null;
let myEmail;
const id = Symbol('123');
const aId = Symbol('123');
const bigNumber = 2174184821748656544546n;
console.table([stdName,stdAge,isAdult,outsideTemp,myEmail, id,aId,id == aId,bigNumber,typeof bigNumber]);

//2.Non - Primitive Types - Array,Object,Function


let heros = ["Spiderman","ironman","Thor","Hulk","Krrish"];
let student = {
    "name":"Prashanth",
    "age":26,
    isAdult : true
}

const myFun = function(){
    return "It's a function";
}

console.table([typeof heros,typeof student,typeof myFun]);
console.table([heros,student,myFun()]);


//------------------Memory ---------------------
/*
2 types of memories: 1. Stack (Primitive (non - reference type)) and 2. Heap (Heap  (reference type))

*/

let myYoutubeName = "soundsGood";
let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "takemytips";

console.table([myYoutubeName,anotherYoutubeName]);

let userOne = {
    "email": "prashu@gmail.com",
    "upiId":"user@ybl",
    "number":8329373723 

}

let userTwo = userOne;

userTwo.email = "Prashanth@gmail.com";
console.table([userOne.email,userTwo.email]);
//here userone is stored in stack and the object is stored in the heap memory so , userOne is reference of object