import React, { useContext } from "react";
import { UserContext } from "./Context";
import Goal from "./Goal";
import { v4 as uuidv4} from 'uuid'

function GoalList(){
    const { user, setUser } = useContext(UserContext)
    
    if (!user.goals){
        return <h1>Add Some Goals</h1>
    }

    function handleAttempt(updatedGoal){
        const currentUser = user
        const currentGoal = user.goals.find((goal) => goal.id === updatedGoal.id)
        currentGoal.attempts = updatedGoal.attempts
        const updatedGoals = user.goals.filter((goal) => goal.id === updatedGoal.id ? currentGoal : goal)
        currentUser.goals = updatedGoals
        setUser(currentUser)
        //console.log(updatedGoals)
    }

    const goalsToDisplay = user.goals.map((goal) => {
        return <Goal goal={goal.trick} attempts={goal.attempts} is_completed={goal['is_completed']} id={goal.id} handleAttempt={handleAttempt} key={uuidv4()}/>
    })

    function handleClick(){
        console.log(user)
    }

    return(
        <div>
            {goalsToDisplay}
            <button onClick={handleClick}>console</button>
        </div>
    )
}

export default GoalList