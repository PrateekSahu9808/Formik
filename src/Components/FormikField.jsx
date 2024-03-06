import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
//!manually trrigared validation
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log(values);
};

//!field level validation
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Comments is required!";
  }
  return error;
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("email is required!"),
  channel: Yup.string().required("channel is required!"),
  //comments: Yup.string().required("comments is required!"),
  address: Yup.string().required("address is required!"),
});
const FormikField = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        return(
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Channel"
              />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                type="text"
                id="comments"
                name="comments"
                placeholder="Comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  console.log(props);
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook</label>
              <Field name="social.facebook" type="text" id="facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">twitter</label>
              <Field name="social.twitter" type="text" id="twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="phoneNumbers">Primary Phone Number</label>
              <Field name="phoneNumbers[0]" type="text" id="phoneNumbers" />
            </div>
            <div className="form-control">
              <label htmlFor="phoneNumbers">Secondary Phone Number </label>
              <Field name="phoneNumbers[1]" type="text" id="phoneNumbers" />
            </div>
            <div className="form-control">
              <label htmlFor="">List of phone Numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phnumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}

                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              visit  comments
            </button>
            <button type="button" onClick={() => formik.setTouched(
                {
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                  address: true,
                  social: {
                    facebook: true,
                    twitter: true,
                  },
                  phoneNumbers: [true, true],
                  phNumbers: [true, true],
                }
  
            )}>
              visit fields
            </button>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikField;
