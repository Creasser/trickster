import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login(){
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
            r.json().then((user) => {
                console.log(user)
            })
        })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                value={loginInfo.username}
                placeholder="Enter Username"
                onChange={handleChange}
                ></input>
                <input
                type="text"
                name="password"
                value={loginInfo.password}
                placeholder="Enter Password"
                onChange={handleChange}></input>
                <input
                type="submit"
                name="submit"></input>
            </form>
            <div>
                <Link to='/'>Return</Link>
            </div>
        </div>
    )
}

export default Login