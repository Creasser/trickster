import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./Context";

function Navbar(){

    const { setUser } = useContext(UserContext)

    const history = useHistory()

    function handleLogout(){
        fetch('/userlogout', {method: 'DELETE'}).then((r) => {
            if(r.ok){
                history.push('/signup')
                setUser(null)
            }
        })
    } 

    
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <Link to='/'>Home</Link>
            <Link to='/trick'>Trick</Link>
            <Link to='/login'>Login</Link>
            <Link to='/stats'>My Stats</Link>
        </div>
    )
}

export default Navbar