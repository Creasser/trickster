import React, { useContext, useState } from "react";
import { TrickContext } from "./Context";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

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
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
            <h1>Add New Trick</h1>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
                <TextField
                style={{width:'500px'}}
                type="text"
                name="title"
                value={newTrick.title}
                onChange={handleChange}
                label="Trick Name"
                placeholder="Trick Name"
                variant="filled">
                </TextField>
                <InputLabel id="catForm">Category</InputLabel>
                <Select style={{width:'500px'}} labelId="catForm" name="category_id" onChange={handleChange}>
                    <MenuItem value='Grab'>Grab</MenuItem>
                    <MenuItem value='Spin'>Spin</MenuItem>
                    <MenuItem value='Flip'>Flip</MenuItem>
                    <MenuItem value='Rails'>Rails</MenuItem>
                </Select>
                <InputLabel id="diffForm">Difficulty</InputLabel>
                <Select style={{width:'500px'}} labelId="diffForm" name="difficulty" onChange={handleChange}>
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='2'>2</MenuItem>
                    <MenuItem value='3'>3</MenuItem>
                    <MenuItem value='4'>4</MenuItem>
                    <MenuItem value='5'>5</MenuItem>
                </Select>
                <Button style={{marginTop: '20px', marginBottom:'40px', color:'black'}} color="success" variant="contained" type="submit" name="submit" value='Submit'>Submit</Button>
            </form>
        </div>
    )
}

export default TrickForm