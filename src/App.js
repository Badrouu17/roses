import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/signup"
          exact
          render={(props) => <Signup {...props}></Signup>}
        ></Route>
        <Route
          path="/login"
          exact
          render={(props) => <Login {...props}></Login>}
        ></Route>
        <Route
          path="/ForgotPassword"
          exact
          render={(props) => <ForgotPassword {...props}></ForgotPassword>}
        ></Route>
        <Route
          path="/resetPassword/:token"
          exact
          render={(props) => <ResetPassword {...props}></ResetPassword>}
        ></Route>
        <Route
          path="/dashboard/feed"
          exact
          render={(props) => <Dashboard {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/feed/:rose_id"
          exact
          render={(props) => <Dashboard qnt={true} {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/feed/:rose_id/:qnt"
          exact
          render={(props) => <Dashboard mapper={true} {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/feed/:rose_id/:qnt/:location"
          exact
          render={(props) => <Dashboard place={true} {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/feed/:rose_id/:qnt/:location/:place"
          exact
          render={(props) => <Dashboard pay={true} {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/profile"
          exact
          render={(props) => <Dashboard profile={true} {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/previous"
          exact
          render={(props) => <Dashboard previous={true} {...props}></Dashboard>}
        ></Route>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props}></Home>}
        ></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
