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

//Array of Objects

