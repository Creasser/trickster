import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import GoalList from "./GoalList";
import { UserContext } from "./Context";

function Home(){

    const { user } = useContext(UserContext)

    return(
        <div>
            <h1>{`Hello, ${user.username}`}</h1>
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