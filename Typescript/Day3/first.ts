interface Person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number //?used hare to make it optional
}

const obj={
    name:"Soumen",
    age:20,
    gender:"Male"
}

//partial ,required and read only 

interface customer{
    name:string,
    age:number,
    balance:number
}
//partial

const obj1:Partial<customer>={
    name:"Soumen",
}


const obj2:Required<customer>={
    name:"Soumen",
    age:20,
    balance:234,
}

const obj3:Readonly<customer>={
    name:"Soumen",
    age:21,
    balance:232,
}
//obj3.name="Rahul"//this is not allow

//<----------Array of Objects-------->

interface people{name:string,age:number}

const arr:people[]=[{name:"Soumen Tunga",age:21},{name:"Ranit Manik ",age:19}]

//<--------Function in Typescript-------->

function greet(a:number):number{
    console.log(a);
    return a+5
}
console.log(greet(10));


function meet(msg:string,value:number):void{
    console.log(msg,value);
}

meet("Soumen Tunga",10);

//default Parameter

function neet(msg:string="Ranit"){
    console.log(msg);
}
neet();
neet("Soham");

//optional Parameter

function GATE(name?:string){
    console.log(name||"Default Name");
}
GATE("Soumen");
GATE();

//arrow function in Type Script

const sum =(a:number,b:number):number=>{
    return a+b;
}
console.log(sum(3,4));




//call back function 
type chill = (amount:number)=>void
function placeOrder(order:number,callback:chill):void{
    const amount:number = order+10;
    callback(amount);

}

placeOrder(10,(amount)=>{
    console.log(amount);
})


//Rest Parameter

function total(...arr:number[]){
    let ans:number=0;
    arr.forEach((value:number)=>{
        ans=ans+value;
    });
    console.log(ans);
}

total(1,3,4,2,1,8);

//extends keyword 

interface human{
    name:string,
    age:number,
}

interface Teacher extends human{
    salary:string,
    id:number
}

interface BankEmployee extends human{
    salary:string,
    position:string
}

const obj6:Teacher={
    salary: "Two Hundred",
    id: 123,
    name:"Soumen",
    age:20
}
const obj7:BankEmployee={
    name:"Rahul",
    age:31,
    salary:"Four hundred",
    position:"manager"
}

//console.log(obj6,obj7)