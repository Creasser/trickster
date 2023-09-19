import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Error from "./Error";
import { UserContext } from "./Context";
import { v4 as uuidv4 } from "uuid";

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
        <div>
            <h1>Sign Up Here</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="username"
                    value={userSignup.username}
                    placeholder="Enter Username"
                    onChange={handleChange}></input>
                    <input
                    type="text"
                    name="password"
                    value={userSignup.password}
                    placeholder="Enter Password"
                    onChange={handleChange}></input>
                    <input
                    type="text"
                    name="password_confirmation"
                    value={userSignup.password_confirmation}
                    placeholder="Confirm Password"
                    onChange={handleChange}></input>
                    <input
                    type="text"
                    name="email"
                    value={userSignup.email}
                    placeholder="Enter Email"
                    onChange={handleChange}></input>
                    <input 
                    type="submit"
                    name="submit"
                    ></input>
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
            <Link to="/">Return</Link>
        </div>
    )
}

export default Signup