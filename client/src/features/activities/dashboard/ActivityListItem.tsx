import { Link } from "react-router-dom";
import { Item, Button, Icon, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

const descriptionContainerStyles = {
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
};
const labelHostStyles = {
  color: "#54c8ff",
  borderColor: "#54c8ff",
  borderRadius: "25px",
};
const labelGoingStyles = {
  marginLeft: "8px",
  color: "#3ff169",
  borderColor: "#3ff169",
  borderRadius: "25px",
};
const labelCancelledStyles = {
  marginLeft: "8px",
  textAlign: "center",
  borderRadius: "25px",
};

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  return (
    <Item style={{ marginBottom: "5px" }}>
      <Item.Content>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content style={{ marginTop: "20px" }}>
              <Item.Header as="a">{activity.title}</Item.Header>
              <div style={descriptionContainerStyles}>
                <Item.Description>
                  Hosted by {activity.host?.displayName}
                </Item.Description>
                {activity.isHost && (
                  <Item.Description style={{ marginLeft: "8px" }}>
                    <Label basic style={labelHostStyles}>
                      You are hosting this activity!
                    </Label>
                  </Item.Description>
                )}
                {activity.isGoing && !activity.isHost && (
                  <Item.Description>
                    <Label basic style={labelGoingStyles}>
                      You are going to this activity!
                    </Label>
                  </Item.Description>
                )}
                {activity.isCancelled && (
                  <Label basic color="orange" style={labelCancelledStyles}>
                    Cancelled
                  </Label>
                )}
              </div>
            </Item.Content>
          </Item>
        </Item.Group>

        <span style={{ padding: "5px" }}>
          <Icon name="clock" /> {format(activity.date!, "dd MMM yyyy h:mm aa")}
        </span>
        <span style={{ padding: "5px" }}>
          <Icon name="marker" /> {activity.venue}
        </span>

        <h5 style={{ margin: "15px 10px" }}>
          <ActivityListItemAttendee attendees={activity.attendees!} />
        </h5>
        <h5 style={{ margin: "15px 10px" }}>{activity.description}</h5>
        <Item.Extra>
          <Button
            inverted
            floated="right"
            content="View"
            color="blue"
            as={Link}
            to={`/activities/${activity.id}`}
            style={{ borderRadius: "25px" }}
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
