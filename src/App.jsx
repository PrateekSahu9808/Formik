import "./App.css";
import CourseEnrolmentForm from "./Components/CourseEnrolmentForm";
import DisablinkSubmitButton from "./Components/DisablinkSubmitButton";
import FormikComponents from "./Components/FormikComponents";
import FormikField from "./Components/FormikField";
import Formik_Comonents from "./Components/Formik_Comonents";
import LoadSavedData from "./Components/LoadSavedData";
import LoginForm from "./Components/LoginForm";
import NewYoutube from "./Components/NewYoutube";
import RegistrationForm from "./Components/RegistrationForm";
import ReusableFormik from "./Components/ReusableFormik";
import YoutubeForm from "./Components/YoutubeForm";
import YoutubeForm_Yup from "./Components/YoutubeForm_Yup";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
function App() {
  return (
    <>
      {/* <YoutubeForm/> */}
      {/* <YoutubeForm_Yup/> */}
      {/* <NewYoutube/> */}
      {/* <FormikComponents/> */}
      {/* <Formik_Comonents/> */}
      {/* <FormikField/> */}
      {/* <DisablinkSubmitButton/> */}
      {/* <LoadSavedData/> */}
      {/* <ReusableFormik/> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <CourseEnrolmentForm />
    </>
  );
}

export default App;
