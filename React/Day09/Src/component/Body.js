import { useCallback, useEffect, useState } from "react"



function Body(){

    const [Profile,setProfile]=useState([])
    const [numberofProfile,setnumberofProfile] = useState("");
    const [usernameprofile,setusernameProfile]=useState("")


    async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*100000);
        const responce =await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)

        const data =await responce.json()
        
        setProfile(data);
    }

    // async function searchProfile(username) {
    //     const responce1 =await fetch(`https://api.github.com/users/${username}`)
    //     const data1 = await responce1.json()
    //     setProfile([data1])
    // }

    
    async function searchProfile(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
    
            if (response.ok) {
                // Valid user
                setProfile([data]); // wrap in array
            } else {
                // Invalid username or error
                alert("User not found!");
                setProfile([]); // clear profile list
            }
        } catch (error) {
            console.error("Failed to fetch profile:", error);
            alert("Something went wrong!");
            setProfile([]);
        }
    }
    

   useEffect(()=>{
    generateProfile(14)
    
   },[])
    


    return(

        <div className="but">
            <input type="text" className="inpu" placeholder="Set How Many Profile?" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofProfile))}>Submit</button>

            <input type="text" className="inpu" placeholder="Search Any Profile" value={usernameprofile} onChange={(e) => setusernameProfile(e.target.value)}></input>
            <button onClick={()=>searchProfile(usernameprofile)}>Submit</button>

            <div className="profiles">
                    {
                       Array.isArray(Profile) && Profile.map((value)=>{
                            return(<div key={value.id} className="cards">
                                
                               
                                <img src={value.avatar_url}/>
                                <h2>{value.login}</h2>
                                <a href={value.html_url} target="_blank">Github Profile</a>
                                </div>)
                            
                            
                        })
                    }
            </div>
        </div>
    )
}










export default Body