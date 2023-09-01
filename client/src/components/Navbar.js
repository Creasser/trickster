import React from "react";

function Navbar(){

    function handleLogout(){
        fetch('/userlogout', {method: 'DELETE'}).then((r) => {
            console.log(r)
        })
    } 

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar