import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/card";
import arr from "./utils/dummy";
import Header from "./component/header";
import Footer from "./component/footer";



function App(){

  let[A,setA]=useState(arr)

  function sortArray(){

  A.sort((a,b)=>a.Starting_price - b.Starting_price)
  setA([...A])
  
  }

  function Avobe499(){
  const B=arr.filter((value)=>value.Starting_price>499);
  setA(B)
  }
  function Avobe299(){
  const B=arr.filter((value)=>value.Starting_price>299);
  setA(B)
  }
  function Below299(){
    const B=arr.filter((value)=>value.Starting_price<299);
    setA(B)
    }

    return(
      <>
        <Header/>
        
        <button onClick={sortArray} >Sort by Price</button>
        <button onClick={Avobe299} >Avobe 299</button>
        <button onClick={Below299} >Below 299</button>

        <button onClick={Avobe499} >Avobe 499</button>
        
        <div className="middle" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
           {
           //{} is because it is js statement
            A.map((value,index)=> < Card key={index} cloth={value.cloth} Offer={value.Offer} Image={value.Image} price={value.Starting_price} />)

           }
           
            

        </div>
        <Footer/>
      </>
    )

}
const Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(<App/>)