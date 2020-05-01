import React, { useState, useContext } from "react";
import { storeContext } from "./../global/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContainerSmall from "./ContainerSmall";
import { Redirect, useParams } from "react-router-dom";
import { resetPassword } from "./../services/forgotPassword";
import { storeTheUser } from "./../services/auth";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
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
    <ContainerSmall>
      <div className="bg-sp">
        <div className="mt-32">
          <div>
            <p className="mt-1 text-4xl text-red-500 text-center font-bold py-2 px-4 ">
              RESET YOUR PASSWORD
            </p>
          </div>
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              const { data, code, error } = await resetPassword(values, token);
              if (code === 200 || (data && data.code === 200)) {
                setStore({
                  ...store,
                  token: data.data.token,
                  user: data.data.user,
                  isLogged: true,
                });
                storeTheUser(data.data.user, data.data.token);
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
                placeHolder="Password"
                className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="password" />
              </div>

              <Field
                placeHolder="Confirm password"
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
                {loading ? "RESET . . ." : "RESET"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </ContainerSmall>
  );
};

export default ResetPassword;
