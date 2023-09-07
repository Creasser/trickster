import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Signup from "./components/Singup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { UserContext } from "./components/Context";

function App() {
  const { user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok){
        r.json().then((user) => {
          setUser(user)
        })
      }
      else {
        r.json().then((r) => {
          console.log(r)
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            { user ? <Home /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;