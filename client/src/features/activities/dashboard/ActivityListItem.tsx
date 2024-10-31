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

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  return (
    <Item style={{ marginBottom: "5px" }}>
      <Item.Content>
        {activity.isCancelled && (
          <Label
            attached="top"
            color="red"
            content="Cancelled"
            style={{ textAlign: "center", borderRadius: "25px" }}
          />
        )}
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
                    <Label
                      basic
                      color="orange"
                      style={{ borderRadius: "25px" }}
                    >
                      You are hosting this activity!
                    </Label>
                  </Item.Description>
                )}
                {activity.isGoing && !activity.isHost && (
                  <Item.Description>
                    <Label
                      basic
                      color="green"
                      style={{ marginLeft: "8px", borderRadius: "25px" }}
                    >
                      You are going to this activity!
                    </Label>
                  </Item.Description>
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
