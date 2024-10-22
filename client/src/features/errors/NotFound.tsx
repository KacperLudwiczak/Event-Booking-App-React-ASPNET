import { Link } from "react-router-dom";
import { Button, Header, Icon, Item } from "semantic-ui-react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export default function NotFound() {
  return (
    <Item style={containerStyle}>
      <Header icon style={{ color: "#fff", margin: "20px" }}>
        <Icon name="search"/>
        We've looked everywhere but could not find what you are looking
        for!
      </Header>
      <Button
        as={Link}
        to="/activities"
        inverted
        content="Return to activities page"
        style={{ borderRadius: "25px", marginTop: "20px" }} // Added margin for spacing
      />
    </Item>
  );
}
