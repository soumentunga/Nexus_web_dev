import React from "react";
import ReactDOM from "react-dom/client"

const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");

const div1 = React.createElement('div',{},[element,element2]);
//const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

//Reactroot.render(div1);








//JSX: javascript XML
//babel(it's a Transpiler of compiler )
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
const names = "Soumen"
const obj={
    age:20,
    salary:400
}

const obj2={
    backgroundColor:"black",
    color:"white",
    fontSize:"30px"
}

const newElement = (
    <>
        <h1 id="first" className="second">Hello Coder {names}</h1>
        <h2 style={{backgroundColor:"black",color:"white"}}>Age hai mera {obj.age} </h2>
    </>

)
//Reactroot.render(newElement);


//React component 
//class based componenet (Not used in modern Days)
//function based component 

function greet(){
    return <h1>Aur kaise hai sab </h1>
}

const meet =()=>{
    return <h2>Mera sab Accha Hai</h2>
}

const newElement2 = greet()
const newElement3= meet()

const newElement4=<>{newElement2} {newElement3}</>
Reactroot.render(newElement4)

