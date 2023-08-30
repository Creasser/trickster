import React, { useState } from "react";

function Signup(){
    cosnt [userSignup, setUserSignup] = useState({
        username: '',
        password: '',
        password_confirmation: '',
        email: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        setUserSignup({
            ...userSignup,
            [name]: value
        })
    }

    function handleSubmit(){
        e.preventDefault()
        
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
                </form>
            </div>
        </div>
    )
}