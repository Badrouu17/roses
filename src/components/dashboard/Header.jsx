import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  return (
    <IconContext.Provider value={{ size: "5em", style: { color: "#f56565" } }}>
      <div className="header p-2 border border-gray-300 rounded shadow">
        {/* <div className="text-4xl text-red-500 font-black mx-4">LOGOUT</div> */}
        <img
          src={require("./../../scss/img/roses_bg2.jpg")}
          className=" float-left h-20 w-20 rounded-full mx-4"
        ></img>
        <div className="float-right">
          <IoIosLogOut></IoIosLogOut>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
