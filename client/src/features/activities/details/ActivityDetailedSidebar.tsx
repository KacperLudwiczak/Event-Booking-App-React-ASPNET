import { Segment, List, Label, Item, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const segmentStyles = {
  borderRadius: "25px",
 backgroundColor: "#54c8ff",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "15px",
  border: "none",
  marginBottom: "25px",
};

function ActivityDetailedSidebar() {
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        secondary
        inverted
        style={segmentStyles}
      >
        <Header>3 People Going</Header>
      </Segment>
      <Item style={{padding: "10px"}}>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              ribbon="right"
            >
              Host
            </Label>
            <Image size="tiny" circular src={"/assets/user.png"} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`} style={{ color: "#54c8ff" }}>Bob</Link>
              </Item.Header>
              <Item.Extra style={{ color: "grey", fontSize: "12px" }}>Following</Item.Extra>
            </Item.Content>
          </Item>
          <Item style={{ position: "relative" }}>
            <Image size="tiny" circular src={"/assets/user.png"} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`} style={{ color: "#54c8ff" }}>Tom</Link>
              </Item.Header>
              <Item.Extra style={{ color: "grey", fontSize: "12px" }}>Following</Item.Extra>
            </Item.Content>
          </Item>
          <Item style={{ position: "relative" }}>
            <Image size="tiny" circular src={"/assets/user.png"} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`} style={{ color: "#54c8ff" }}>Sally</Link>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Item>
    </>
  );
}

const ObservedActivityDetailedSidebar = observer(ActivityDetailedSidebar);
export default ObservedActivityDetailedSidebar;
