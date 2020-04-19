import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <React.Fragment>
      <div className="app conta">
        <div className="one">
          <Login></Login>
          {/* <Signup></Signup> */}
        </div>
        <div className="two">
          <h3 style={{ fontSize: 110 }}>Roses for life.</h3>
          <br />
          <p style={{ fontSize: 30 }}>
            the worlds symbol of love ❤ share them.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
