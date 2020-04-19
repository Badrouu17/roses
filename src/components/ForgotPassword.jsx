import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContainerSmall from "./ContainerSmall";

const ForgotPassword = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
  });
  return (
    <ContainerSmall>
      <div className="bg-sp">
        <div className="mt-32">
          <div>
            <p className="mt-1 text-4xl text-red-500 text-center font-bold py-2 px-4 ">
              YOU FORGOT YOUR PASSWORD ?
            </p>
          </div>
          <Formik
            initialValues={{
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
            <Form className=" mt-10 flex flex-col items-center justify-center content-center">
              <p class="w-1/2 h-16 text-xl mt-4 text-red-500 font-bold py-2 px-4 ">
                enter your email address and we will send you a reset link.
              </p>
              <Field
                placeHolder="Email"
                className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
              <div className=" mt-1 text-lg font-bold text-red-400 border-red-400 border-solid">
                <ErrorMessage name="email" />
              </div>

              <button
                class="w-1/2 h-16 text-2xl mt-16 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SEND
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </ContainerSmall>
  );
};

export default ForgotPassword;