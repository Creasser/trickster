import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Paper, Button } from "@mui/material";

function Goal({ goal, attempts, is_completed, id, handleAttempt }){

    if (!goal){
        return <h1></h1>
    }
    
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
                    handleAttempt(updatedGoal)
                })
            }else{
                r.json().then((err) => {
                    console.log(err)
                })
            }
        })
    }

    function handleCompleted(e){
        e.preventDefault()
        let updatedStatus = !is_completed
        fetch(`/goal/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trick_id: goal.id,
                is_completed: updatedStatus,
                attempts: attempts
            })
        }).then((r) => {
            if (r.ok){
                r.json().then((updatedGoal) => {
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

    let color = is_completed ? '#69DC9E' : '#90323D'

    return (
        <Paper variant="outlined" elevation={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'400px', width: '300px', backgroundColor: color, margin: '0px 10px 20px 10px'}}>
            <h1>{goal.title}</h1>
            <h3>{`Difficulty: ${goal.difficulty}/5`}</h3>
            <h3>{`Attempts: ${attempts}`}</h3>
            <h3>{is_completed ? 'Completed' : 'In Progress'}</h3>
            <Button variant="contained" disabled={is_completed ? true : false} onClick={handleAddAttempt} style={{marginBottom: '10px', color: 'black', backgroundColor: '#8BAAAD'}}>Add Attempt</Button>
            <Button variant="contained" onClick={handleCompleted} style={{color: 'black', backgroundColor: '#8BAAAD'}}>Mark Completed</Button>
        </Paper>
    )
}

export default Goal