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
