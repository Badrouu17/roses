import React from "react";
import { Link } from "react-router-dom";
import Icons from "./../../icons.svg";
import UpdateData from "./UpdateData";
import UpdatePassword from "./UpdatePassword";

const Profile = () => {
  return (
    <main className="main overflow-y-auto">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <li className="side-nav--active">
              <Link to="/account">
                <svg>
                  <use xlinkHref={`${Icons}#icon-settings`} />
                </svg>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user-view__content">
          <UpdateData></UpdateData>
          <div className="line">&nbsp;</div>
          <UpdatePassword></UpdatePassword>
        </div>
      </div>
    </main>
  );
};

export default Profile;
