import React, { useContext, useState } from "react";
import { TrickContext } from "./Context";

function TrickForm(){
    const [newTrick, setNewTrick] = useState({
        title: '',
        category_id: '',
        difficulty: ''
    })

    const { tricks, setTricks } = useContext(TrickContext)

    function handleNewTrick(trick){
        setTricks([
            ...tricks,
            trick
        ])
    }

    function findCatId(cat){
        switch (cat){
            case 'Spin':
                return 1
            case 'Grab':
                return 2
            case 'Flip':
                return 3
            case 'Rails':
                return 4
        }
    }

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
        let cat = findCatId(newTrick['category_id'])
        fetch('/trick', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newTrick.title,
                category_id: cat,
                difficulty: parseInt(newTrick.difficulty)
            })
        }).then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    handleNewTrick(data)
                    setNewTrick({
                        title: '',
                        category_id: 'Spin',
                        difficulty: ''
                    })
                })
            }else{
                r.json().then((err) => {
                    console.log(err)
                })
            }
        })
    }

    return(
        <div>
            <h1>Add New Trick</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                value={newTrick.title}
                onChange={handleChange}>
                </input>
                <select name="category_id" onChange={handleChange}>
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