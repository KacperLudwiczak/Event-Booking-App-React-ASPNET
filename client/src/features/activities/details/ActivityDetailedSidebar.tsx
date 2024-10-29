import { Segment, List, Label, Item, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Profile } from "../../../app/models/profile";

const segmentStyles = {
  borderRadius: "25px",
  backgroundColor: "#54c8ff",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "15px",
  border: "none",
  marginBottom: "25px",
};

interface Props {
  attendees: Profile[];
}

function ActivityDetailedSidebar({ attendees }: Props) {
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        secondary
        inverted
        style={segmentStyles}
      >
        <Header>
          {attendees.length} {attendees.length === 1 ? "Person" : "People"}{" "}
          going
        </Header>
      </Segment>
      <Item style={{ padding: "10px" }}>
        <List relaxed divided>
          {attendees.map((attendee) => (
            <Item style={{ position: "relative" }} key={attendee.username}>
              <Label style={{ position: "absolute" }} ribbon="right">
                Host
              </Label>
              <Image
                size="tiny"
                circular
                src={attendee.image || "/assets/user.png"}
              />
              <Item.Content
                verticalAlign="middle"
                style={{ marginLeft: "10px", marginTop: "10px" }}
              >
                <Item.Header as="h3">
                  <Link
                    to={`/profiles/${attendee.username}`}
                    style={{ color: "#54c8ff" }}
                  >
                    {attendee.displayName}
                  </Link>
                </Item.Header>
                <Item.Extra style={{ color: "grey", fontSize: "12px" }}>
                  Following
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </List>
      </Item>
    </>
  );
}

const ObservedActivityDetailedSidebar = observer(ActivityDetailedSidebar);
export default ObservedActivityDetailedSidebar;
