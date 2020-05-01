import React, { useState, useContext } from "react";
import { storeContext } from "./../global/store";
import ContainerSmall from "./ContainerSmall";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, Redirect } from "react-router-dom";
import { login, storeTheUser } from "./../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  if (store.isLogged) {
    return <Redirect to="/dashboard/feed"></Redirect>;
  }

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
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              const { data, code, error } = await login(values);
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
                placeholder="Email"
                className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="email" />
              </div>

              <Field
                placeholder="Password"
                className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="password" />
              </div>

              <button
                className="w-1/2 h-16 text-2xl mt-16 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? "LOGIN . . ." : "LOGIN"}
              </button>

              <button className="w-1/2 h-16 text-xl mt-8 bg-transparent border-red-500 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/forgotPassword">Forgot your password?</Link>
              </button>

              <button className="w-1/2 h-16 text-xl mt-4 bg-transparent border-red-500 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
