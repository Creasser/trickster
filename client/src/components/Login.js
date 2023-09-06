import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./Context";

function Login(){
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
                {errors ? 
                errors.map((err) => {
                    console.log(err)
                })
                :
                null}
            </div>
            <div>
                <Link to='/'>Return</Link>
            </div>
        </div>
    )
}

export default Login