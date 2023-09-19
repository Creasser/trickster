import React, { useContext } from "react";
import { TrickContext } from "./Context";

function Trick({ trick, category }){

    const {tricks, setTricks} = useContext(TrickContext)

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
                })
            }else{
                r.json().then((err) => {
                    console.log(err)
                })
            }
        })
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
            <h3>{trick.difficulty}</h3>
            <h3>{}</h3>
            <button onClick={handleNewGoal}>Add to goals</button>
            <button onClick={() => {handleDelete(trick.id)}}>Remove Trick</button>
        </div>
    )
}

export default Trick