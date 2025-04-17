import GlobalContext from "./Global"
import { useContext } from "react"

export default function Fifth(){
    
   const data = useContext(GlobalContext)
   return(
    <h2>My Name Is {data} </h2>
   )
}