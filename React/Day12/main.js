import React from "react";
import ReactDom from "react-dom/client"
import { BrowserRouter,Route,Routes,Link } from "react-router";
import Home from "./src/Home";
import Details from "./src/Details";
import DashBoard from "./src/DashBoard";
import Contact from "./src/Contact";
import DefaultDetails from "./src/DefaultDetails";
import MoreDetails from "./src/MoreDetails";
import LessDetails from "./src/LessDetails";


function App(){
    return(
        <BrowserRouter>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/Contact" >Contact</Link>
            <Link to="/DashBoard">Dasboard</Link>
            <Link to="/Details" >Details</Link>
        </nav>
        
        <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/Contact" element={<Contact></Contact>} ></Route>
            <Route path="/Dashboard"element={<DashBoard></DashBoard>}></Route>
            <Route path="/Details" element={<Details></Details>} >
                <Route index element={<DefaultDetails></DefaultDetails>} ></Route>
                <Route path="moredetails" element={<MoreDetails></MoreDetails>}></Route>
                <Route path="lessdetails" element={<LessDetails></LessDetails>}></Route>
            
            </Route>

        </Routes>
        
        </BrowserRouter>
    )

}





ReactDom.createRoot(document.getElementById('root')).render(<App/>)