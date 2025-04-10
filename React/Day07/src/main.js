import React, { useState } from "react";

import ReactDom from  "react-dom/client"

import Colorful from "./Component/Colorful";


function Main(){
    const[count,setCount]=useState(0)
    return(
        <>
        <div className="counter">
            <h1>counter is {count}</h1>
            <button onClick={()=>setCount(count+1)} style={{backgroundColor:"orange"}}>Increase Count</button>
        </div>





            <Colorful></Colorful>
        </>
        
    )
}


ReactDom.createRoot(document.getElementById('root')).render(<Main></Main>)