import React, { useState,useEffect, useCallback } from "react"
import ReactDom from "react-dom/client"

function PasswordGenerator(){

    const [Password,setPassword]=useState("");
    const [length,setLength]=useState(10);
    const [numberChanged,setnumberChanged]=useState(false)
    const[charChanged,setcharChanged]=useState(false)
    //useCallback is a React Hook that lets you cache a function definition between re-renders.
    const generatepassword = useCallback(()=>{

        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numberChanged)
            str+="0123456789"
        if(charChanged)
            str+= "~@#$%^&*(){}~'?"

        let pass=""
        for (let i=0 ;i<length;i++){
            
            pass+= str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass)
    },[length,charChanged,numberChanged])

    // function generatepassword(){

    // }

   
    useEffect(()=>{
        generatepassword()
    },[generatepassword])


    return(
        <>
            <h1>Password is:{Password}</h1>
            <div className="second">
            <input type="range" max={30} min={5} onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length {length}</label>
            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>{setnumberChanged(!numberChanged)}}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked={charChanged} onChange={()=>{setcharChanged(!charChanged)}}></input>
            <label>Special Character</label>
            </div>

        
        </>
    )
}



ReactDom.createRoot(document.getElementById('root')).render(<PasswordGenerator/>)