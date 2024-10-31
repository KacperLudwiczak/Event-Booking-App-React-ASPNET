import { observer } from "mobx-react-lite";
import { format } from "date-fns";
import { Button, Header, Item, Segment, Image, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";

const segmentStyles = {
  position: "relative",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "0",
  border: "none",
};
const labelStyle = {
  position: "absolute",
  zIndex: 1000,
  left: -1,
  top: 50,
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
  const {
    activityStore: { updateAttendance, loading, cancelActivityToggle },
  } = useStore();

  return (
    <>
      <Item style={{ marginBottom: "25px" }}>
        {activity.isCancelled && (
          <Label style={labelStyle} color="red" ribbon>
            Cancelled
          </Label>
        )}
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
                    Hosted by
                    <Link
                      to={`/profiles/${activity.host?.username}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <strong> {activity.host?.displayName}</strong>
                    </Link>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>
        <Item clearing attached="bottom" style={{ margin: "15px 0px" }}>
          {activity.isHost ? (
            <>
              <Button
                as={Link}
                to={`/manage/${activity.id}`}
                inverted
                color="blue"
                disabled={activity.isCancelled}
                style={{ borderRadius: "25px", marginRight: "10px" }}
              >
                Manage Event
              </Button>
              <Button
                color={activity.isCancelled ? "green" : "orange"}
                inverted
                content={
                  activity.isCancelled
                    ? "Re-activate activity"
                    : "Cancel Activity"
                }
                onClick={cancelActivityToggle}
                loading={loading}
                style={{ borderRadius: "25px" }}
              />
            </>
          ) : activity.isGoing ? (
            <Button
              inverted
              onClick={updateAttendance}
              loading={loading}
              color="orange"
              style={{ borderRadius: "25px" }}
            >
              Cancel attendance
            </Button>
          ) : (
            <Button
              inverted
              onClick={updateAttendance}
              loading={loading}
              color="blue"
              disabled={activity.isCancelled}
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
