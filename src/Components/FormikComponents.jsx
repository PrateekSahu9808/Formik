import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("email is required!"),
  channel: Yup.string().required("channel is required!"),
});
const FormikComponents = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" placeholder="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Channel"
          />
          <ErrorMessage name="channel" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikComponents;
