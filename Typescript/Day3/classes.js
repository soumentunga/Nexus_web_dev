"use strict";
//Class is the blueprint of a Object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hi ${this.name}`);
    }
}
const object1 = new Person("Soumen", 21);
const object2 = new Person("Samir", 20);
console.log(object1);
console.log(object2);
object1.greet();
//public ,private and protected 
class Customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const P1 = new Customer("Rintu", 20, 500);
console.log(P1.name);
//console.log(P1.age);
//console.log(P1.balance);
//private and protected cant access outside the class
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    greet() {
        console.log(this.balance); //protected can be access in child class
    }
    meet() {
        console.log("Hi This Is Soumen");
        return 1;
    }
}
const E1 = new Employee(200000, "Soumen Tunga", 23, 500000);
//console.log(E1)
console.log(E1.meet());
console.log(E1.name);
//console.log(E1.age) //(can't access because it is not private )
console.log(E1.salary); //this is possible becsuse it is protected
//generics  in Typescript (template)
//Problem before generics
// function value (a:(number|string)):number|string{
//     return a;
// }
// console.log(value(10));
// console.log(value("Soumen"))
//after generics
function value(a) {
    return a;
}
console.log(value("Rintu"));
console.log(value([12, 34, 13, 45, 21]));
console.log(value(true));
console.log(value(["Soumen", "Chiknu", "moltu", "Kaka", "Ranit"]));
