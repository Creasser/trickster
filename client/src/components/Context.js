import React, { useState } from "react";

const UserContext = React.createContext()

function UserProvider({children}){
    const [user, setUser] = useState(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

const TrickContext = React.createContext()

function TrickProvider({children}){
    const [tricks, setTricks] = useState(null)
    return <TrickContext.Provider value={{tricks, setTricks}}>{children}</TrickContext.Provider>
}

export {UserContext, UserProvider, TrickContext, TrickProvider}