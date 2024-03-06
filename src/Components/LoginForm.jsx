import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import ChakraInput from './ChakraInput';

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email formate")
      .required("Required email"),
    password: Yup.string().required("Password is required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="ChakraInput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="ChakraInput"
              type="password"
              label="Password"
              name="password"
            />
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
