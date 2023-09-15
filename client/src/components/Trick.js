import React from "react";

function Trick({ trick }){

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

    // function addNewGoalToUser(goal){

    // }

    //need to make a route in goals controller

    return(
        <div>
            <h1>{trick.title}</h1>
            <h3>{trick.difficulty}</h3>
            <h3>{trick['category_id']}</h3>
            <button onClick={handleNewGoal}>Add to goals</button>
        </div>
    )
}

export default Trick