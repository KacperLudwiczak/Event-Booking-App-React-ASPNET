import { Link } from "react-router-dom";
import { Item, Button, Icon } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

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
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

        <span style={{ padding: "5px" }}>
          <Icon name="clock" /> {activity.date}
        </span>
        <span style={{ padding: "5px" }}>
          <Icon name="marker" /> {activity.venue}
        </span>

        <h5 style={{ margin: "15px 10px" }}>Attendees go here</h5>
        <h5 style={{ margin: "15px 10px" }}>{activity.description}</h5>
        <Item.Extra>
          <Button
            inverted
            floated="right"
            content="View"
            color="blue"
            as={Link}
            to={`/activities/${activity.id}`}
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
