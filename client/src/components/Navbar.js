import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./Context";
import { AppBar, Toolbar, Typography } from "@mui/material";

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
         // <div>
        //     <button onClick={handleLogout}>Logout</button>
        //     <Link to='/'>Home</Link>
        //     <Link to='/trick'>Trick</Link>
        //     <Link to='/login'>Login</Link>
        //     <Link to='/stats'>My Stats</Link>
        // </div>

    
    return( 
     
        <AppBar>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" >
                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                </Typography>
                <Typography variant="h6" color="inherit" paddingLeft='20px' >
                    <Link to='/trick' style={{textDecoration: 'none', color: 'white'}}>Trick</Link>
                </Typography>
                <Typography variant="h6" color="inherit" paddingLeft='20px' >
                    <Link to='/login' style={{textDecoration: 'none', color: 'white'}}>Login</Link>
                </Typography>
                <Typography variant="h6" color="inherit" paddingLeft='20px' >
                    <Link to='/stats' style={{textDecoration: 'none', color: 'white'}}>My Stats</Link>
                </Typography>
            </Toolbar>
        </AppBar>
     
    )
}

export default Navbar