import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from "yup";

function RegisterForm() {
  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{
        displayName: "",
        username: "",
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((error) => setErrors({ error: error }))
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required("The name is required"),
        username: Yup.string().required("The user name is required"),
        email: Yup.string().required("The email is required"),
        password: Yup.string().required("The password is required"),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header
            content="Sign up to Reactivities"
            textAlign="center"
            style={{ fontSize: "40px", color: "#3ac0ff", padding: "30px" }}
          />
          <MyTextInput placeholder="Display Name" name="displayName" />
          <MyTextInput placeholder="Username" name="username" />
          <MyTextInput placeholder="Email" name="email" />
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <span style={{ color: "#9f3a38", fontSize: "12px" }}>
                {errors.error}
              </span>
            )}
          />
          <div style={{ marginTop: "25px" }}>
            <Button
              disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting}
              inverted
              content="Register"
              type="submit"
              fluid
              color="blue"
              style={{ borderRadius: "25px" }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

const ObservedRegisterForm = observer(RegisterForm);
export default ObservedRegisterForm;
