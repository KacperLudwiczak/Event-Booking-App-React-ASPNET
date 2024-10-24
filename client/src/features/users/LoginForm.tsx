import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

function LoginForm() {
  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values)
          .catch(() => setErrors({ error: "Invalid email or password" }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form
          className="ui form"
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Header
            content="Login to Reactivities"
            textAlign="center"
            style={{ fontSize: "40px", color: "#3ac0ff", padding: "30px" }}
          />
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
              loading={isSubmitting}
              inverted
              content="Login"
              type="submit"
              color="blue"
              fluid
              style={{ borderRadius: "25px" }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

const ObservedLoginForm = observer(LoginForm);
export default ObservedLoginForm;
