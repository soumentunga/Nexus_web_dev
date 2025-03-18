const cart = ["Pizza","Coke", "sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })
    
    return pr;
    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

//await will work only inside the async function without async function the await does not exits.

async function Zomato() {

    const order = await placeOrder(cart)
    const foodDetails =await preparingOrder(order)
    const droplocation =await  pickupOrder(foodDetails)
    deliverOrder(droplocation) 
}


Zomato();


//--------Comparision before and After async and await introduced --------- //


//before async await =>

const p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("The Task is Resolve")
    },3000)
})

p1.then((response)=>console.log(response))

//---------------------------------------------------------------------------

//after async and await 

async function greet() {

    const data1= await p1;
    console.log(data1)
    const data2= await p1;
    console.log(data2)
}
//after print data1 the data2 print without taking time is because the promise is already resolved so it's print directely it's the original concept all other concept avliable on internet is baseless (example:parallel  executing type of concept avliable on internet)

 greet();



//in this below example both are different promise here the parallel executig type of concept works when print of p1 done then p2 data also ready so p2 also print after p1. here parallel works because of there own parallely execution not because of "await"

const p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("First Promise Resolved ")
    },3000)
})

const p2= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Second Promise Resolved")
    },3000)
})

async function greet() {

        const data1= await p1;
        console.log(data1)
        const data2= await p2;
        console.log(data2)
    }

greet();


//differance between .then and async - await method

const p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("First Promise Resolved ")
    },8000)
})

const p2= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Second Promise Resolved")
    },5000)
})

async function greet() {

        const data1= await p1;
        console.log(data1)
        const data2= await p2;
        console.log(data2)
    }

greet();

//here after p1 then p2 data print because of await . after await p1 then the next statement execute which is await p2.



//by not using async await (using old .then method)

const p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("First Promise Resolved ")
    },8000)
})

const p2= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Second Promise Resolved")
    },5000)
})

p1.then(value=>console.log(value))
p2.then(value=>console.log(value))

//here value of p2 execute first because here the time of p2 is less so p2 is execute first in the previous case it's don't happens because it's wait for previous p1 completition. here(.then method ) no waiting concept is there.which come first executing first. 


//One more Example below =>

function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}

async function greet() {

        const data1= await test1();
        console.log(data1)
        const data2 = await test2();
        console.log(data2)
    }

greet();
//here after test1 print wait then test2 will print

//Important Note :: async function always return promise. if we return nothing then it make undefined into promise .here in below example  async make Soumen into  promise. 
async function meet() {
    
    return "Soumen"
}

meet().then(value=>console.log(value))