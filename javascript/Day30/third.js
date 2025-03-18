//how to create Promise 

// const pr = new Promise(function(create ,reject){
// })
// return pr



cart = ["pizza","coke","sandwich"];

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
                reject(`Items Out of Stocks`)
            }
            
           },2000)
        
    })
        return pr
    
}

function preparingOrder(order){
    console.log("Pizza preparation started....");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const chef_avliable=false;
            if (chef_avliable){
                console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
            }
            else{
                reject("Cheaf Is Not Avliable Currentely So Cancel The Order")
            }
           },5000)

           
    })
    return pr;
    
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    const pr = new Promise(function(resolve, reject){


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


placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error))