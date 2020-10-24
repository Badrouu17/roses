import React, { useContext } from "react";
import { storeContext } from "./../global/store";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./../components/Home";
import Signup from "./../components/Signup";
import Login from "./../components/Login";
import ForgotPassword from "./../components/ForgotPassword";
import ResetPassword from "./../components/ResetPassword";
import Dashboard from "./../components/dashboard/Dashboard";
import SmallDevices from "./../components/smallDevices";

function App() {
  const { store } = useContext(storeContext);

  return (
    <React.Fragment>
      <div className="app-content">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props}></Home>}
          ></Route>
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
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/feed"
            exact
            render={(props) => <Dashboard {...props}></Dashboard>}
          ></ProtectedRoute>
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/feed/:rose_name"
            exact
            render={(props) => <Dashboard qnt={true} {...props}></Dashboard>}
          ></ProtectedRoute>
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/feed/:rose_name/:qnt"
            exact
            render={(props) => <Dashboard mapper={true} {...props}></Dashboard>}
          ></ProtectedRoute>
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/feed/:rose_name/:qnt/:location"
            exact
            render={(props) => <Dashboard place={true} {...props}></Dashboard>}
          ></ProtectedRoute>
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/feed/:rose_name/:qnt/:location/:place"
            exact
            render={(props) => <Dashboard pay={true} {...props}></Dashboard>}
          ></ProtectedRoute>
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/profile"
            exact
            render={(props) => (
              <Dashboard profile={true} {...props}></Dashboard>
            )}
          ></ProtectedRoute>
          <ProtectedRoute
            isLogged={store.isLogged}
            path="/dashboard/previous"
            exact
            render={(props) => (
              <Dashboard previous={true} {...props}></Dashboard>
            )}
          ></ProtectedRoute>
        </Switch>
      </div>
      <SmallDevices></SmallDevices>
      <div className="by">
        <p>Built with ❤ by Badreddin labed.</p>
      </div>
    </React.Fragment>
  );
}

export default App;
