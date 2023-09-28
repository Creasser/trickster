import React, { useContext } from "react";
import { TrickContext, UserContext } from "./Context";

function Trick({ trick, category }){

    const {tricks, setTricks} = useContext(TrickContext)

    const { user, setUser } = useContext(UserContext)

    function handleNewGoal(){
        fetch('/goal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trick_id: parseInt(trick.id),
                is_completed: false,
                attempts: 0
            })
        }).then((r) => {
            if (r.ok){
                r.json().then((goal) => {
                    console.log(goal)
                    addGoalToUser(goal)
                })
            }else{
                r.json().then((err) => {
                    console.log(err)
                })
            }
        })
    }

    function addGoalToUser(goal){
        const newGoal = {
            is_completed: false,
            attempts: 0,
            id: goal.id,
            trick: {
                id: goal.trick.id,
                title: goal.trick.title,
                difficulty: goal.trick.difficulty,
                category_id: goal.category.id
            }
        }
        console.log(newGoal)
        const currentUser = {...user}
        currentUser.goals.push(newGoal)
        setUser(currentUser)
    }

    function handleDelete(id){
        fetch(`/trick/${id}`, {
            method: 'DELETE'
        }).then((r) => {
            if (r.ok){
                onDelete(id)
            }
        })
    }

    //will need to remove the trick from the user as well to prevent errors
    function onDelete(id){
       const updatedTricks = tricks.filter((trick) => trick.id !== id)
       setTricks(updatedTricks)
    }

    // function addNewGoalToUser(goal){

    // }

    //need to make a route in goals controller

    return(
        <div>
            <h1>{trick.title}</h1>
            <h3>{`Difficulty: ${trick.difficulty}`}</h3>
            <h3>{`Type: ${category.category}`}</h3>
            <button onClick={handleNewGoal}>Add to goals</button>
            <button onClick={() => {handleDelete(trick.id)}}>Remove Trick</button>
        </div>
    )
}

export default Trick