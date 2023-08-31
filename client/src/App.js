import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
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