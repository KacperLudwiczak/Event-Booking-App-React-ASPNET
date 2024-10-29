import { observer } from "mobx-react-lite";
import { format } from "date-fns";
import { Button, Header, Item, Segment, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";

const segmentStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "0",
  border: "none",
};
const activityImageStyle = {
  filter: "brightness(30%)",
};
const activityImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

interface Props {
  activity: Activity;
}

function ActivityDetailedHeader({ activity }: Props) {
  return (
    <>
      <Item style={{ marginBottom: "25px" }}>
        <Segment basic attached="top" style={segmentStyles}>
          <Image
            src={`/assets/categoryImages/${activity.category}.jpg`}
            fluid
            style={activityImageStyle}
          />
          <Segment style={activityImageTextStyle} basic>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content={activity.title}
                    style={{ color: "white" }}
                  />
                  <p>{format(activity.date!, "dd MMM yyyy")}</p>
                  <p>
                    Hosted by <strong>User</strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>
        <Item clearing attached="bottom" style={{ margin: "15px 0px" }}>
          {activity.isHost ? (
            <Button
              as={Link}
              to={`/manage/${activity.id}`}
              inverted
              color="blue"
              style={{ borderRadius: "25px" }}
            >
              Manage Event
            </Button>
          ) : activity.isGoing ? (
            <Button inverted color="orange" style={{ borderRadius: "25px" }}>
              Cancel attendance
            </Button>
          ) : (
            <Button
              inverted
              color="blue"
              style={{ marginRight: "5px", borderRadius: "25px" }}
            >
              Join Activity
            </Button>
          )}
        </Item>
      </Item>
    </>
  );
}

const ObservedActivityDetailedHeader = observer(ActivityDetailedHeader);
export default ObservedActivityDetailedHeader;
