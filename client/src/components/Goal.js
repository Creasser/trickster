import React, { useContext } from "react";
import { UserContext } from "./Context";

function Goal({ goal, attempts, is_completed, id, handleAttempt }){

    // if (!goal){
    //     return <h1>Add Some Goals!</h1>
    // }
    
   // const { user } = useContext(UserContext)

    //can use some conditional rendering for the background of the card. Red = not completed Green = completed

    function handleAddAttempt(e){
        e.preventDefault()
        //console.log(goal)
        let updatedAttempts = attempts + 1 
        fetch(`/goal/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trick_id: goal.id,
                is_completed: is_completed,
                attempts: parseInt(updatedAttempts)
            }) 
        }).then((r) => {
            if (r.ok){
                r.json().then((updatedGoal) => {
                    console.log(updatedGoal)
                    handleAttempt(updatedGoal)
                })
            }else{
                r.json().then((err) => {
                    console.log(err)
                })
            }
        })
    }

    // function handleAttempt(updatedGoal){
    //     const currentUser = user
    //     const currentGoal = user.goals.find((goal) => goal.id === updatedGoal.id)
    //     currentGoal.attempts = updatedGoal.attempts
    //     const updatedGoals = user.goals.filter((goal) => goal.id === updatedGoal.id ? currentGoal : goal)
    //     currentUser.goals = updatedGoals
    //     setUser(currentUser)
    //     //console.log(updatedGoals)
    // }

    //can make add attempt button disabled when goal is completed, but when marked not completed, make it avaiable

    return (
        <div>
            <h1>{goal.title}</h1>
            <h3>{`Difficulty: ${goal.difficulty}/5`}</h3>
            <h3>{`Attempts: ${attempts}`}</h3>
            <h3>{is_completed ? 'Completed' : 'In Progress'}</h3>
            <button onClick={handleAddAttempt}>Add Attempt</button>
            <button>Mark Completed</button>
        </div>
    )
}

export default Goal