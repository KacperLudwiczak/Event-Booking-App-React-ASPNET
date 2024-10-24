import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

function LoginForm() {
  return (
    <div style={containerStyles}>
      <Formik
        initialValues={{ email: "", password: "", error: null }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, isSubmitting, errors }) => (
          <Form
            className="ui form"
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{ width: "40%" }}
          >
            <Header
              content="Login to Reactivities"
              textAlign="center"
              style={{ fontSize: "40px", color: "#fff", margin: "30px" }}
            />
            <MyTextInput placeholder="Email" name="email" />
            <MyTextInput placeholder="Password" name="password" />
            <ErrorMessage
              name="error"
              render={() => (
                <Label
                  style={{ marginBottom: 10 }}
                  basic
                  color="red"
                  content={errors.error}
                />
              )}
            />
            <Button
              loading={isSubmitting}
              inverted
              content="Login"
              type="submit"
              fluid
              style={{ borderRadius: "25px" }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

const ObservedLoginForm = observer(LoginForm);
export default ObservedLoginForm;
