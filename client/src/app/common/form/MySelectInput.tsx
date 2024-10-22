import { useField } from "formik";
import { Form, Select } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  options: {text: string, value: string}[];
  label?: string;
}

export default function MySelectInput(props: Props) {
  const [field, meta, helpers] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <Select
        clearable
        options={props.options}
        value={field.value || null}
        onChange={(_, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <span style={{ color: "#9f3a38", fontSize: "12px", margin: "5px" }}>
          {meta.error}
        </span>
      ) : null}
    </Form.Field>
  );
}
