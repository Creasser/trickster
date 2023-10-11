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

    function leastAttemptedTrick(){
        const goals = user.goals.sort((a, b) => a.attempts - b.attempts)
        const trick = goals[0].trick
        return trick.title
    }

    function averageDifficulty(){
        const completedTricks = user.goals.filter((goal) => {
            return goal['is_completed'] === true
        })
        const goalDifficulty = completedTricks.map((goal) => {
            return goal.trick['difficulty']
        })
        const difficultyTotal = goalDifficulty.reduce((a, b) => a + b, 0)
       // console.log(difficultyTotal / completedTricks.length)
        //console.log(difficultyTotal)
        return difficultyTotal / completedTricks.length
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
            <div>
                <h3>Least Attempted Trick</h3>
                <h4>{leastAttemptedTrick()}</h4>
            </div>
            <div>
                <h3>Average Difficulty</h3>
                <h4>{averageDifficulty()}</h4>
            </div>
                <button onClick={averageDifficulty}>Log Function</button>
        </div>
    )
}

export default Stats