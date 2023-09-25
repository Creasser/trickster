import React from "react";

function Goal({ trick, attempts, is_completed }){

    // if (!trick){
    //     return <h1>Add Some Goals!</h1>
    // }
    

    return (
        <div>
            <h1>{trick.title}</h1>
            <h3>{`Difficulty: ${trick.difficulty}/5`}</h3>
            <h3>{`Attempts: ${attempts}`}</h3>
            <h3>{is_completed ? 'Completed' : 'In Progress'}</h3>
        </div>
    )
}

export default Goal