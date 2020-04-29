import React, { useState, useContext } from "react";
import { storeContext } from "./../../global/store";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updatePassword } from "./../../services/account";
import { storeTheUser } from "./../../services/auth";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    newPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          const { data, code } = await updatePassword(values);
          if (code === 200 || data.code === 200) {
            setStore({
              ...store,
              token: data.data.token,
              user: data.data.user,
              isLogged: true,
            });
            storeTheUser(data.data.user, data.data.token);
            alert("Password updated successfully");
          } else {
            alert("error!! during updating.");
          }
          setLoading(false);
          setSubmitting(false);
        }}
      >
        <Form className="form form-user-settings">
          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="currentPassword">
              Current Password
            </label>
            <Field
              className="form__input"
              placeHolder="Current Password"
              name="currentPassword"
              type="password"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="currentPassword" />
            </div>
          </div>

          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="newPassword">
              New Password
            </label>
            <Field
              className="form__input"
              placeHolder="New Password"
              name="newPassword"
              type="password"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="newPassword" />
            </div>
          </div>

          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="password-confirm">
              Confirm Password
            </label>
            <Field
              className="form__input"
              placeHolder="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>

          <div className="form__group right">
            <button type="submit" className="btn btn--small btn--green">
              {loading ? "SAVE . . ." : "SAVE"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdatePassword;
