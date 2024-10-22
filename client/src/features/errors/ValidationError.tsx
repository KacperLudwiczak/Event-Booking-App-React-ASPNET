import { Item, Message } from "semantic-ui-react";

const itemStyles = {
  padding: "25px",
  color: "#fff",
  fontSize: "20px",
};

interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  return (
    <Item style={itemStyles}>
      {errors && (
        <Item>
          {errors.map((err: string, i) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Item>
      )}
    </Item>
  );
}
