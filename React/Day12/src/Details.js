import { Outlet ,Link} from "react-router";

export default function Details(){

    return(
        <>
            <nav>
                {/* <Link to="/Details">Details</Link> */}
                
                <Link to="moredetails">MoreDetails</Link>
                <Link to="lessdetails">LessDetails</Link>
            </nav>

            <Outlet></Outlet>
        </>
       
    )
}