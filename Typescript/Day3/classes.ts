class Person{
    name:string;
    age:number;
 
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}

const object1 = new Person("Soumen",21)
const object2 = new Person("Samir",20)
console.log(object1);
console.log(object2);