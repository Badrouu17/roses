import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const UpdatePassword = () => {
  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    newPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("Password"), null], "Passwords must match"),
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <button className="btn btn--small btn--green">
              Save
              {/* {this.state.saving ? "saving..." : "Save password"} */}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdatePassword;
