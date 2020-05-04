import React from "react";

const SmallDevices = () => {
  return (
    <div className="advice">
      <img
        className="advice-logo"
        src={require("./../scss/img/Roses.png")}
        alt="Logo"
      />
      <p className="advice-content">please use the app in a bigger device.</p>
    </div>
  );
};

export default SmallDevices;
