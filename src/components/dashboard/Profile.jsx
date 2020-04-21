import React from "react";
import { Link } from "react-router-dom";
import Icons from "./../../icons.svg";
import UpdatePassword from "./UpdatePassword";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Profile = () => {
  const validationSchema = Yup.object({
    Name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
  });

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
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">
              Your account settings
            </h2>
            <Formik
              initialValues={{
                Name: "",
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className="form form-user-data">
                <div className="form__group">
                  <label className="form__label" htmlFor="Name">
                    Name
                  </label>
                  <Field
                    className="form__input"
                    placeHolder="Name"
                    name="Name"
                    type="text"
                  />
                  {/* <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                    <ErrorMessage name="Name" />
                  </div> */}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className="form__input"
                    placeHolder="Email"
                    name="email"
                    type="email"
                  />
                  {/* <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                    <ErrorMessage name="email" />
                  </div> */}
                </div>

                <div className="form__group form__photo-upload">
                  <img
                    className="form__user-photo"
                    src={require("./../../scss/img/roses_bg2.jpg")}
                    alt="User ph"
                  />
                  <input
                    // onChange={(e) => this.changeHandler(e)}
                    id="file"
                    type="file"
                  />
                </div>
                <div className="form__group right">
                  <button type="submit" className="btn btn--small btn--green">
                    Save
                    {/* {this.state.saving ? "saving..." : "Save settings"} */}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="line">&nbsp;</div>
          <UpdatePassword></UpdatePassword>
        </div>
      </div>
    </main>
  );
};

export default Profile;
