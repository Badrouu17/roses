import React, { useState, useContext } from "react";
import { storeContext } from "./../../global/store";

import { upload } from "./../../services/account";
import { storeTheUser } from "./../../services/auth";

const UploadPhoto = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="user-view__form-container">
      <form onSubmit={(e) => submitHandler(e)} className="form form-user-data">
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={
              store.user && store.user.photo
                ? store.user.photo
                : "https://res.cloudinary.com/batn05000/image/upload/v1588199985/default_xg4502.jpg"
            }
            alt="User ph"
          />
          <input onChange={(e) => changeHandler(e)} id="file" type="file" />
        </div>
      </form>
      <div className="form__group right">
        <button type="submit" className="btn btn--small btn--green">
          {loading ? "UPLOAD . . ." : "UPLOAD"}
        </button>
      </div>
    </div>
  );
};

export default UploadPhoto;
