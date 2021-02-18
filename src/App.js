import React from "react";
import "./App.css";
import Body from "./component/body";
import Login from "./component/login";
import Register from "./component/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path='/' component={Body} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
      </Router>


    </div>
  );
}
export default App;