import React, { useState } from "react";

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
    
    return(
        <div>
            <form>
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
        </div>
    )
}

export default Login