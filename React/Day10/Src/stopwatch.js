import React, { useRef } from "react";
import ReactDom from "react-dom/client"
import { useState } from "react";

function StopWatch(){
    const [time,setTime]=useState(0)
    const intervalRef=useRef(null)
    const[isRunning,setIsRunning]=useState(false)

    function start(){
        if(!isRunning){
            intervalRef.current=setInterval(()=>{
                // setTime(time+1)
                setTime((Prevtime)=>Prevtime+1)
                
            },1000)
            setIsRunning(true)
        }
      
    }

    function stop(){
        if(isRunning){
            clearInterval(intervalRef.current)
            intervalRef.current=null
            console.log(intervalRef.current)
            setIsRunning(false)
        }
       
    }

    function reset(){
        
        clearInterval(intervalRef.current)
        intervalRef.current=null
        setTime(0)
    }


    return(
        <div className="watch">
            <h1>Time :{time}</h1>
            <div className="but">
                <button onClick={()=>start()}>Start</button>
                <button onClick={()=>stop()}>Pause</button>
                <button onClick={()=>reset()}>Reset</button>
            </div>
        </div>
    )

}




ReactDom.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>)