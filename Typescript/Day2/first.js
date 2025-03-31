"use strict";
// Type Inference in TypeScript
let num = 10;
let x = 10;
//x="Soumen"
let value = "Mohit";
//value = 30
//Behaves like js because here type is any
let money;
money = 20;
money = "Soumen";
console.log(money.toUpperCase());
//Diffe between any & unknown
let val2;
val2 = "Soumen";
if (typeof val2 === 'string')
    console.log(val2.toUpperCase());
if (typeof val2 === 'number')
    console.log(val2.toFixed(2));
//non - premitive data type 
let arr = [2, 3, 4, 6, 7];
let arr2 = [2, 3, 5, 48, 9];
let arr3 = ["Soumen", 2, 6, "Mohan"];
arr3.push(23);
let arr4 = [3, 5, "Soumen", false, 23];
//touple(same as array but fixed size) 
let touple = ["Soumen", 21];
//Javascrpt :JIT = JUST IN TIME (compiler + Interpreter)
//What is platform independent or what is platform Dependent language
//Typescript : Transpiler(convert a language to another language)
//Object
//inline method
let obj1 = {
    name: "Soumen Tunga",
    age: 20,
    gender: "male"
};
//second method
let person;
person = {
    name: "Soumen Tunga",
    age: 20,
    balance: 324
};
let c1 = {
    name: "Soumen Tunga",
    age: 20,
    id: "CSE22023"
};
let obj3 = {
    name: "Soumen",
    age: 21,
    position: "manager",
    id: "CSE22023"
};
