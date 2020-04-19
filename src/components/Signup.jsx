import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const validationSchema = Yup.object({
    Name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("Password"), null], "Passwords must match"),
  });
  return (
    <React.Fragment>
      <div className="bg-sp">
        <div>
          <p className="mt-1 text-6xl text-red-500 text-center lobster-font">
            sign up now and send roses 🌹
          </p>
        </div>
        <Formik
          initialValues={{
            Name: "",
            email: "",
            Password: "",
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
          <Form className=" mt-10 flex flex-col items-center justify-center content-center">
            <Field
              placeHolder="Name"
              className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Name"
              type="text"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="Name" />
            </div>

            <Field
              placeHolder="Email"
              className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="email" />
            </div>

            <Field
              placeHolder="Password"
              className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Password"
              type="password"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="Password" />
            </div>

            <Field
              placeHolder="Confirm Password"
              className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmPassword"
              type="password"
            />
            <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
              <ErrorMessage name="confirmPassword" />
            </div>

            <button
              class="w-1/2 h-16 text-2xl mt-16 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SIGNUP
            </button>
          </Form>
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default Signup;
