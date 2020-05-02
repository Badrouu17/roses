import React, { useContext } from "react";
import { storeContext } from "./../../global/store";
import { IconContext } from "react-icons";
import { IoIosLogOut } from "react-icons/io";
import { deleteTheUserAndTokenFromStorage } from "./../../services/auth";

const Header = () => {
  const { store } = useContext(storeContext);

  return (
    <IconContext.Provider value={{ size: "5em", style: { color: "#f56565" } }}>
      <div className="header p-2 border border-gray-300 rounded shadow">
        {/* <div className="text-4xl text-red-500 font-black mx-4">LOGOUT</div> */}
        <img
          alt={"profile"}
          src={require("./../../scss/img/Roses.png")}
          className=" float-left h-20 w-20 rounded-full mx-4"
        ></img>
        <div
          onClick={() => {
            deleteTheUserAndTokenFromStorage();
            window.location.reload();
          }}
          className="float-right cursor-pointer"
        >
          <IoIosLogOut></IoIosLogOut>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
