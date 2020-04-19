import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/login"
          render={(props) => <Login {...props}></Login>}
        ></Route>
        <Route
          path="/ForgotPassword"
          render={(props) => <ForgotPassword {...props}></ForgotPassword>}
        ></Route>
        <Route
          path="/resetPassword/:token"
          render={(props) => <ResetPassword {...props}></ResetPassword>}
        ></Route>
        <Route
          path="/signup"
          render={(props) => <Signup {...props}></Signup>}
        ></Route>
        <Route path="/" render={(props) => <Home {...props}></Home>}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
