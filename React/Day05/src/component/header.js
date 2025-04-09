export default function Header(){
    return(
        <div className="heading">
            <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png" height="80px" width="80px"/>

            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home & Living</button>
                <button className="but">Beauty</button>
                <button className="but">Genz</button>
                <button className="but">Studio</button>

            </div>
            <input className="scarchbar" placeholder="Search For Products Brands and more."></input>

            <div className="Profile">
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
       
    )
}