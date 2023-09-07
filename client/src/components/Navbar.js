import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navbar(){

    const history = useHistory()

    function handleLogout(){
        fetch('/userlogout', {method: 'DELETE'}).then((r) => {
            history.push('/login')
        })
    } 

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar