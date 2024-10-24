import { useField } from "formik";
import { Form } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span style={{ color: "#9f3a38", fontSize: "12px", margin: "5px" }}>
          {meta.error}
        </span>
      ) : null}
    </Form.Field>
  );
}
