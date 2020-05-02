import React, { useContext, useState } from "react";
import { storeContext } from "./../global/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContainerSmall from "./ContainerSmall";
import { Redirect } from "react-router-dom";
import { signUp, storeTheUser } from "./../services/auth";
import { toast } from "react-toastify";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  if (store.isLogged) {
    return <Redirect to="/dashboard/feed"></Redirect>;
  }

  return (
    <React.Fragment>
      <ContainerSmall>
        <div className="bg-sp">
          <div>
            <p className="mt-1 text-6xl text-red-500 text-center lobster-font">
              sign up now and send roses 🌹
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              const { data, code, error } = await signUp(values);
              if ((data && data.code === 200) || code === 200) {
                setStore({
                  ...store,
                  token: data.data.token,
                  user: data.data.user,
                  isLogged: true,
                });
                storeTheUser(data.data.user, data.data.token);
                window.location.reload();
              } else {
                toast.error(error.response.data.description, {
                  className: "toastify",
                  onClose: () => window.location.reload(),
                });
              }
              setLoading(false);
              setSubmitting(false);
            }}
          >
            <Form className=" mt-10 flex flex-col items-center justify-center content-center">
              <Field
                placeholder="name"
                className="w-1/2 h-16 mt-8 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="name" />
              </div>

              <Field
                placeholder="email"
                className="w-1/2 h-16 mt-8 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="email" />
              </div>

              <Field
                placeholder="password"
                className="w-1/2 h-16 mt-8 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="password" />
              </div>

              <Field
                placeholder="Confirm Password"
                className="w-1/2 h-16 mt-8 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="confirmPassword"
                type="password"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="confirmPassword" />
              </div>

              <button
                className="w-1/2 h-16 text-2xl mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? "SIGNUP . . ." : "SINGUP"}
              </button>
            </Form>
          </Formik>
        </div>
      </ContainerSmall>
    </React.Fragment>
  );
};

export default Signup;
