import React from "react";
import { IconContext } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { IoIosRose, IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "5em", style: { color: "#f56565" } }}>
      <div className="footer flex flex-row ">
        <Link
          to="/dashboard"
          className="profile flex-1 pl-56 pt-4 border border-gray-300 rounded shadow hover:bg-gray-300"
        >
          <FaUserAlt></FaUserAlt>
        </Link>
        <Link
          to="/dashboard"
          className="feed flex-1 pl-56 pt-4 border border-gray-300 rounded shadow hover:bg-gray-300"
        >
          <IoIosRose></IoIosRose>
        </Link>
        <Link
          to="/dashboard"
          className="previous flex-1 pl-56 pt-4 border border-gray-300 rounded shadow hover:bg-gray-300"
        >
          <IoIosSend></IoIosSend>
        </Link>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
