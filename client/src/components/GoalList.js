import React, { useContext } from "react";
import { UserContext } from "./Context";
import Goal from "./Goal";
import { v4 as uuidv4} from 'uuid'

function GoalList(){
    const { user } = useContext(UserContext)
    
    if (!user.goals){
        return <h1>Add Some Goals</h1>
    }


    const goalsToDisplay = user.goals.map((goal) => {
        return <Goal goal={goal.trick} attempts={goal.attempts} is_completed={goal['is_completed']} id={goal.id} key={uuidv4()}/>
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