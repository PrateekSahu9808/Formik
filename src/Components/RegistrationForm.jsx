import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const RegistrationForm = () => {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initailaValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().test(
      "is-telephone",
      "Phone is required when mode of contact is Telephone",
      function (value) {
        const { modeOfContact } = this.parent;
        if (modeOfContact === "telephonemoc") {
          return !!value;
        }
        return true;
      }
    ),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initailaValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
