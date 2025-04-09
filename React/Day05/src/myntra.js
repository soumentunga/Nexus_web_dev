import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/card";
import arr from "./utils/dummy";
import Header from "./component/header";
import Footer from "./component/footer";



function App(){
    return(
      <>
        <Header/>
        <div className="middle" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
           {
           
            arr.map((value,index)=> < Card key={index} cloth={value.cloth} Offer={value.Offer} Image={value.Image}/>)

           }
           
            

        </div>
        <Footer/>
      </>
    )

}
const Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(<App/>)