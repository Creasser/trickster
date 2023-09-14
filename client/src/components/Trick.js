import React, { useContext } from "react";
import { TrickContext } from "./Context";

function Trick({ trick }){


    return(
        <div>
            <h1>{trick.title}</h1>
            <h3>{trick.difficulty}</h3>
            <h3>{trick['category_id']}</h3>
        </div>
    )
}

export default Trick