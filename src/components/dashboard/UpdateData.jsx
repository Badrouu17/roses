import React, { useState, useContext } from "react";
import { storeContext } from "./../../global/store";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateMe } from "./../../services/account";
import { storeTheUser } from "./../../services/auth";
import { toast } from "react-toastify";

const UpdateData = () => {
  const [loading, setLoading] = useState(false);
  const { store, setStore } = useContext(storeContext);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
  });

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          const { data, code, error } = await updateMe(values);
          console.log(data);
          if (code === 200 || (data && data.code === 200)) {
            setStore({
              ...store,
              user: data.data,
              isLogged: true,
            });
            storeTheUser(data.data);
            toast.success("updated successfully", {
              className: "toastify",
            });
          } else {
            toast.error(error.response.data.description, {
              className: "toastify",
            });
          }
          setLoading(false);
          setSubmitting(false);
        }}
      >
        <Form className="form form-user-data">
          <div className="form__group">
            <label className="form__label" htmlFor="Name">
              Name
            </label>
            <Field
              className="form__input"
              placeholder="Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <Field
              className="form__input"
              placeholder="Email"
              name="email"
              type="email"
            />
          </div>

          <div className="form__group right">
            <button type="submit" className="btn btn--small btn--green">
              {loading ? "SAVE . . ." : "SAVE"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateData;
