"use strict";
const obj = {
    name: "Soumen",
    age: 20,
    gender: "Male"
};
//partial
// const obj2:Partial<customer>={
//     name:"Soumen",
// }
const obj2 = {
    name: "Soumen",
    age: 20,
    balance: 234,
};
// const obj2:Readonly<customer>={
//     name:"Soumen",
//     age:21,
//     balance:232,
// }
// obj2.name="Rahul"//this is not allow
