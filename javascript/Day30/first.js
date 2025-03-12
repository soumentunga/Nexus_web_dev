//solution of callback hell 

//async task => fetch() operation used for api request to the server 

//const promises= fetch(`http://api.weatherapi.com/v1/current.json?key=c2f9306afd9e45d99ba140148250903&q=London&aqi=yes`);

// const pro2= promises.then((response)=>{
//     // const pro2= response.json()
//     // pro2.then((data)=>{
//     //     console.log(data)
//     // })

//     return response.json()
// })

// pro2.then((data)=>{
//     console.log(data);
// })


//-: promise chainning:-//

// promises.then((response)=>{
   

//     return response.json()
// }).then((data)=>{
//     console.log(data);
// })


fetch(`http://api.weatherapi.com/v1/current.json?key=c2f9306afd9e45d99ba140148250903&q=London&aqi=yes`)
.then(response=>response.json())
.then((data)=>console.log(data.current.temp_f))
.catch(error=>console.log(error))
















// .catch((error)=>{
//     console.log(error);
// })

//three state of promise : pending , resolve ,reject
