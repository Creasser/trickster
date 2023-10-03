import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navbar(){

    const history = useHistory()

    function handleLogout(){
        fetch('/userlogout', {method: 'DELETE'}).then((r) => {
            history.push('/signup')
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