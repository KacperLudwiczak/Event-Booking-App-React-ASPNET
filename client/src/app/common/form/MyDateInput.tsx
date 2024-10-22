import { useField } from "formik";
import { Form } from "semantic-ui-react";
import DatePicker, { DatePickerProps } from "react-datepicker";

export default function MyDateInput(props: Partial<DatePickerProps>) {
  const [field, meta, helpers] = useField(props.name!);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <DatePicker
        selected={(field.value && new Date(field.value)) || null}
        onChange={(date: Date | null) => helpers.setValue(date)}
      />
      {meta.touched && meta.error ? (
        <span style={{ color: "#9f3a38", fontSize: "12px", margin: "5px" }}>
          {meta.error}
        </span>
      ) : null}
    </Form.Field>
  );
}
