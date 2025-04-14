import React, { useState,useEffect, useCallback } from "react"
import ReactDom from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"



function GithubProfile(){

    return(
        <>
        <Header></Header>
        <Body></Body>
        </>
        
    )
}



ReactDom.createRoot(document.getElementById('root')).render(<GithubProfile></GithubProfile>)