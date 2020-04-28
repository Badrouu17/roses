import React, { useContext } from "react";
import { storeContext } from "./../global/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContainerSmall from "./ContainerSmall";
import { Redirect } from "react-router-dom";

const ResetPassword = () => {
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("Password"), null], "Passwords must match"),
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
                placeHolder="Password"
                className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="Password"
                type="password"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="Password" />
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
                RESET
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </ContainerSmall>
  );
};

export default ResetPassword;
