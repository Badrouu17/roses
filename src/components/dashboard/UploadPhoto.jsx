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

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    file && form.append("file", file);

    const response = await upload(form);

    let user = store.user;
    user.photo =
      "https://res.cloudinary.com/batn05000/image/upload/v1587768862/white_pcxxbo.jpg";
    setStore({ ...store, user });
    storeTheUser(user);

    // toast.success("changed successfully", {
    //   className: "toastify",
    //   onClose: () => window.location.reload(),
    // });
    setLoading(false);
    window.location.reload();
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
        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            {loading ? "UPLOAD . . ." : "UPLOAD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPhoto;
