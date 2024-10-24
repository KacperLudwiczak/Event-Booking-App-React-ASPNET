import { Item, Message } from "semantic-ui-react";

const itemStyles = {
  padding: "25px",
  color: "#3ac0ff",
  fontSize: "20px",
};

interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  return (
    <>
      {errors && (
        <Item style={itemStyles}>
          {errors.map((error: string, id) => (
            <Message.Item key={id}>{error}</Message.Item>
          ))}
        </Item>
      )}
    </>
  );
}
