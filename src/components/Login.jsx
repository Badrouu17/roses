import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContainerSmall from "./ContainerSmall";
import { Link } from "react-router-dom";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  return (
    <ContainerSmall>
      <div className="bg-sp">
        <div className="mt-32">
          <div>
            <p className="mt-1 text-6xl text-red-500 text-center lobster-font">
              login now and send roses 🌹
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              Password: "",
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

              <button
                class="w-1/2 h-16 text-2xl mt-16 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                LOGIN
              </button>

              <button class="w-1/2 h-16 text-xl mt-8 bg-transparent border-red-500 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/forgotPassword">Forgot your password?</Link>
              </button>

              <button class="w-1/2 h-16 text-xl mt-4 bg-transparent border-red-500 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/signup">You don't have an account ? SIGNUP NOW</Link>
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </ContainerSmall>
  );
};

export default Login;
