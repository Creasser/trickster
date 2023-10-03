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

    function highestAttemptedTrick(){
        const goals = user.goals.sort((a, b) => b.attempts - a.attempts)
        const trick = goals[0].trick
        return trick.title
    }

    return(
        <div>
            <h1>Stats Page</h1>
            <div>
                <h3>Tricks Completed</h3>
                <h4>{completedTricks()}</h4>
            </div>
            <div>
                <h3>Most Attempted Trick</h3>
                <h4>{highestAttemptedTrick()}</h4>
            </div>
                <button onClick={highestAttemptedTrick}>Log Function</button>
        </div>
    )
}

export default Stats