import React, { useContext } from "react";
import TrickForm from "./TrickForm";
import { TrickContext } from "./Context";
import Trick from "./Trick";
import { v4 as uuidv4} from 'uuid'


function TrickList(){

    const { tricks } = useContext(TrickContext)

    if (!tricks){
        return <h1>Loading...</h1>
    }

    //will need to condionally render only the tricks that the user does not already have in their goals
    //can do this by compairing ids 

    let tricksToDisplay = tricks.map((trick) => {
        return <Trick trick={trick} category={trick.category} key={uuidv4()} />
    })


    return(
        <div>
            <h1>HELLO</h1>
            { tricksToDisplay }
            <TrickForm />
        </div>
    )
}

export default TrickList