import one from "../assets/1.svg"

function Header(){
    return(
        <header className="flex items-center justify-between p-10 ">
            <div className="flex items-center gap-5">
            <img src={one} alt="" />
     <p>Products</p>
     <p>Solutions</p>
     <p>Pricing</p>
     <p>Resources</p>
            </div>

            <div>
                <button>login</button>
                <button className="border w-40 p-1 rounded">Sign Up Now</button>
            </div>
        </header>
    )
}

export default Header