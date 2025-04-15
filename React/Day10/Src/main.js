import React, { useState,useEffect, useCallback, useMemo } from "react"
import ReactDom from "react-dom/client"


function App(){

    const [count,setcount]=useState(0)
    const [number,setnumber]=useState("")

    const Fibonacci = useCallback((n)=>{
        if(n<=1)return n

        return Fibonacci(n-1)+Fibonacci(n-2)
    },[])



    const result = useMemo(()=>Fibonacci(number),[number])

    return(
        <>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>


            <div>

                <h2>Fibonacci Number :{result}</h2>
                <input value={number} placeholder="Enter The n-th term (Fn)
" onChange={(e)=>setnumber(e.target.value)}></input>
            </div>



        
        </>
    )
}






ReactDom.createRoot(document.getElementById('root')).render(<App></App>)