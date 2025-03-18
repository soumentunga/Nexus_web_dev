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

// async function Zomato() {

//     const order = await placeOrder(cart)
//     const foodDetails =await preparingOrder(order)
//     const droplocation =await  pickupOrder(foodDetails)
//     deliverOrder(droplocation) 
// }


// Zomato();


//--------Comparision before and After async and await introduced --------- //


//before async await =>

// const p1 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve("The Task is Resolve")
//     },3000)
// })

// //p1.then((response)=>console.log(response))

// //---------------------------------------------------------------------------

// //after async and await 

// async function greet() {

//     const data1= await p1;
//     console.log(data1)
//     const data2= await p1;
//     console.log(data2)
// }
// //after print data1 the data2 print without taking time is because the promise is already resolved so it's print directely it's the original concept all other concept avliable on internet is baseless (example:parallel  executing type of concept avliable on internet)

//  greet();



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