import React, { useContext } from "react";
import { UserContext } from "./Context";

function Stats(){
    const { user } = useContext(UserContext)

    if(!user){
        return null
    }


    //

    function completedTricks(){
        const goals = user.goals.filter((goal) => {
            return goal['is_completed'] === true
        })
       return goals.length
    }

    return(
        <div>
            <h1>Stats Page</h1>
            <div>
                <h3>Tricks Completed</h3>
                <h4>{completedTricks()}</h4>
                <button onClick={completedTricks}>Log Function</button>
            </div>
        </div>
    )
}

export default Stats