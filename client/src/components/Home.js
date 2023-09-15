import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import GoalList from "./GoalList";

function Home(){

    return(
        <div>
            <h1>Hello World</h1>
            <h1>Current Goals</h1>
            <div>
                <GoalList />
            </div>
            <Link to='signup'>Signup Here</Link>
            <Link to='login'>Login</Link>
        </div>
    )
}

export default Home