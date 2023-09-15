import React from "react";

function Goal({ trick, attempts, is_completed }){

    

    return (
        <div>
            <h1>{trick.title}</h1>
            <h3>{trick.difficulty}</h3>
            <h3>{attempts}</h3>
            <h3>{is_completed ? 'Completed' : 'In Progress'}</h3>
        </div>
    )
}

export default Goal