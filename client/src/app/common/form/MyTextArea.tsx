import {useField} from "formik";
import {Form} from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
    style?: React.CSSProperties;
}

export default function MyTextArea(props: Props) {
    const [field, meta] = useField(props.name);
    
    return (
        <Form.Field error={meta.touched && !!meta.error} style={props.style}>
            <label>{props.label}</label>
            <textarea {...field} {...props}/>
            {meta.touched && meta.error ? (
                 <span style={{ color: "#9f3a38", fontSize: "12px", margin: "5px" }}>
                 {meta.error}
               </span>
            ) : null}
        </Form.Field>
    )
}