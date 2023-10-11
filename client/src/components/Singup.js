import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Error from "./Error";
import { UserContext } from "./Context";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Stack, Grid, Divider } from '@mui/material'

function Signup(){
    const history = useHistory()
    const {setUser} = useContext(UserContext)
    const [userSignup, setUserSignup] = useState({
        username: '',
        password: '',
        password_confirmation: '',
        email: ''
    })
    const [errors, setErrors] = useState([])

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        setUserSignup({
            ...userSignup,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch('/usersignup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSignup)
        }).then((r) => {
            if (r.ok){
                r.json().then((user) => {
                    setUser(user)
                    console.log(user)
                    history.push('/')                   
                })
            }
            else{
                r.json().then((err) => {
                    setErrors(err.errors)
                    console.log(err)
                })
            }
        })
        
    }

    return(
        <div style={{height: "100vh"}}>
            <Grid container alignItems='stretch' justifyContent='center'>
                <Grid item xs={6}>
                    <div style={{height: '100vh'}}>
                        <img src="https://img.cdn-pictorem.com/uploads/collection/O/OA8RCH8DHG/900_1891766HighRes.jpg" style={{height:'100%', width:'100%', objectFit:'cover'}}></img>
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div style={{height: '100vh', display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', backgroundColor:'#8BAAAD'}}>
                        <h1>Register for Trixster Now!</h1>
                            <form onSubmit={handleSubmit} style={{width: '70%', display:'flex', justifyContent:'center'}}>
                                <Stack spacing={2} sx={{width: .75}} divider={<Divider orientation="horizontal" flexItem />}>
                                    <TextField
                                        type="text"
                                        name="username"
                                        variant="filled"
                                        label="Username"
                                        value={userSignup.username}
                                        placeholder="Enter Username"
                                        onChange={handleChange}/>
                                    <TextField
                                        type="text"
                                        name="password"
                                        variant="filled"
                                        label="Password"
                                        value={userSignup.password}
                                        placeholder="Enter Password"
                                        onChange={handleChange}/>
                                    <TextField
                                        type="text"
                                        name="password_confirmation"
                                        label="Password Confirmation"
                                        variant="filled"
                                        value={userSignup.password_confirmation}
                                        placeholder="Confirm Password"
                                        onChange={handleChange}/>
                                    <TextField
                                        type="text"
                                        name="email"
                                        variant="filled"
                                        label="Enter Email"
                                        value={userSignup.email}
                                        placeholder="Enter Email"
                                        onChange={handleChange}/>
                                    <Button 
                                        type="submit"
                                        name="submit"
                                        variant="outlined"
                                        >Sign Up
                                    </Button>
                                </Stack>
                            </form>
                            <small style={{paddingTop:'5px'}}>Already have an account? <Link to='/login'>Login Here</Link></small>
                        <div style={{paddingTop: '5px'}}>
                        {errors ? 
                            errors.map((err) => {
                                return <Error key={uuidv4()} err={err} />
                            })
                            :
                            null}
                    </div>
                    </div>
                </Grid>
        </Grid>
        </div>
    )
}

export default Signup