import React from "react"
import { useState } from "react"
import ReactDom from "react-dom/client"

function Counter(){
    let [count,SetCount] = useState(0)
    function Increment(){
        count=count+1
        SetCount(count)
       
    }

    function Decrement(){
        count = count-1
        SetCount(count)
        
    }

    return(
        
        <div className="first">
            <h1>Count is :{count}</h1>
            <button onClick={Increment} >Increment</button>
            <button onClick={Decrement} >Decrement</button>
        </div>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<Counter/>)
