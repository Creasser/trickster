import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./Context";
import Error from "./Error";
import { v4 as uuidv4} from 'uuid'
import { Button, Grid, TextField, Stack, Divider } from "@mui/material";

function Login(){
    const history = useHistory()
    const {setUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch('/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
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
            <Grid container alignItems="stretch" justifyContent='center'>
                <Grid item xs={6}>
                    <div style={{height: '100vh', display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', backgroundColor:'#8BAAAD'}}>
                            <h1>TriXster</h1>
                        <form onSubmit={handleSubmit} style={{width: '70%', display: 'flex', justifyContent: 'center'}}>
                            <Stack spacing={2} sx={{width: .75}} 
                            divider={
                                <Divider orientation="horizontal" flexItem />
                            }>
                                <TextField
                                    type="text"
                                    name="username"
                                    variant="filled"
                                    label='Username'
                                    value={loginInfo.username}
                                    placeholder="Enter Username"
                                    onChange={handleChange}/>
                                <TextField
                                    type="text"
                                    name="password"
                                    variant="filled"
                                    label='Password'
                                    value={loginInfo.password}
                                    placeholder="Enter Password"
                                    onChange={handleChange}/>
                                <Button
                                    type="submit"
                                    name="submit"
                                    variant="outlined">Login</Button>
                            </Stack>
                        </form>
                        <div>
                            {errors ? 
                            errors.map((err) => {
                                return <Error key={uuidv4()} err={err} />
                            })
                            :
                            null}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{height: '100vh'}}>
                        <img src="https://img.cdn-pictorem.com/uploads/collection/O/OA8RCH8DHG/900_1891766HighRes.jpg" style={{height:'100%', width:'100%', objectFit:'cover'}}></img>
                    </div>
                   </Grid>
            </Grid>
        </div>
    )
}

export default Login