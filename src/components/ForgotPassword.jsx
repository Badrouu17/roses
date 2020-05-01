import React, { useContext, useState } from "react";
import { storeContext } from "./../global/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContainerSmall from "./ContainerSmall";
import { Redirect } from "react-router-dom";
import { forgotPassword } from "./../services/forgotPassword";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
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
              YOU FORGOT YOUR PASSWORD ?
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              const { code } = await forgotPassword(values);
              if (code === 200) {
                toast.success(
                  "the email got send successfully, check your email sandbox.",
                  {
                    className: "toastify",
                    onClose: () => window.location.reload(),
                  }
                );
              } else {
                toast.error("error!! during sending, please try later.", {
                  className: "toastify",
                  onClose: () => window.location.reload(),
                });
              }
              setLoading(false);
              setSubmitting(false);
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
                {loading ? "SEND . . ." : "SEND"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </ContainerSmall>
  );
};

export default ForgotPassword;
