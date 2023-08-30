import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home(){

    return(
        <div>
            <h1>Hello World</h1>
            <Link to='signup'>Signup Here</Link>
        </div>
    )
}

export default Home