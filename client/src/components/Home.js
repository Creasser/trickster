import React, { useContext } from "react";
import GoalList from "./GoalList";
import { UserContext } from "./Context";

function Home(){

    const { user } = useContext(UserContext)

    return(
        <div style={{backgroundColor: '#8BAAAD', height:'100%'}}>
            <h1 style={{paddingLeft: '50px', marginTop:'0px', paddingTop: '20px'}}>{`Welcome, ${user.username}`}</h1>
            <div>
                <GoalList />
            </div>
        </div>
    )
}

export default Home