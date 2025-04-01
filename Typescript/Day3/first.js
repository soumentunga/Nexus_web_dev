"use strict";
const obj = {
    name: "Soumen",
    age: 20,
    gender: "Male"
};
//partial
const obj1 = {
    name: "Soumen",
};
const obj2 = {
    name: "Soumen",
    age: 20,
    balance: 234,
};
const obj3 = {
    name: "Soumen",
    age: 21,
    balance: 232,
};
const arr = [{ name: "Soumen Tunga", age: 21 }, { name: "Ranit Manik ", age: 19 }];
//<--------Function in Typescript-------->
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, value) {
    console.log(msg, value);
}
meet("Soumen Tunga", 10);
//default Parameter
function neet(msg = "Ranit") {
    console.log(msg);
}
neet();
neet("Soham");
//optional Parameter
function GATE(name) {
    console.log(name || "Default Name");
}
GATE("Soumen");
GATE();
//arrow function in Type Script
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
//Rest Parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((value) => {
        ans = ans + value;
    });
    console.log(ans);
}
total(1, 3, 4, 2, 1, 8);
const obj6 = {
    salary: "Two Hundred",
    id: 123,
    name: "Soumen",
    age: 20
};
const obj7 = {
    name: "Rahul",
    age: 31,
    salary: "Four hundred",
    position: "manager"
};
//console.log(obj6,obj7)
