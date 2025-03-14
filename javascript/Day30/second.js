cart = ["pizza","coke","sandwich"];

function placeOrder(cart , callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
     callback(order);
    },2000)
}

function preparingOrder(order , callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
        callback(foodDetails);
       },5000)
};

function pickupOrder(foodDetails,callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        const droplocation = foodDetails.location;
        callback(droplocation);
       },3000)
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}


// placeOrder(cart, callback);
// preparingOrder(order , callback)
// pickupOrder(foodDetails,callback)
// deliverOrder(droplocation)


placeOrder(cart , (order)=>{
    preparingOrder(order , (foodDetails)=>{
        pickupOrder(foodDetails, (droplocation)=>{
            deliverOrder(droplocation);
        });
    })
});