import React, { useState } from "react";

function TrickForm(){
    const [newTrick, setNewTrick] = useState({
        title: '',
        category: '',
        difficulty: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        setNewTrick({
            ...newTrick,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(newTrick)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                value={newTrick.title}
                onChange={handleChange}>
                </input>
                <select name="category" onChange={handleChange}>
                    <option value='Grab'>Grab</option>
                    <option value='Spin'>Spin</option>
                    <option value='Flip'>Flip</option>
                    <option value='Rails'>Rails</option>
                </select>
                <select name="difficulty" onChange={handleChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <input type="submit" name="submit" value='Submit'></input>
            </form>
        </div>
    )
}

export default TrickForm