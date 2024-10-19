import { Link } from "react-router-dom";
import { Item, Button, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { SyntheticEvent, useState } from "react";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  const [target, setTarget] = useState("");

  function handleDeleteActivity(
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Item key={activity.id}>
      <Item.Content>
        <Item.Header as="a">{activity.title}</Item.Header>
        <Item.Meta>{activity.date}</Item.Meta>
        <Item.Description>
          <div>{activity.description}</div>
          <div>
            {activity.city} | {activity.venue}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            inverted
            floated="right"
            content="View"
            color="blue"
            as={Link}
            to={`/activities/${activity.id}`}
          />
          <Button
            inverted
            name={activity.id}
            floated="right"
            content="Delete"
            color="red"
            loading={loading && target === activity.id}
            onClick={(event) => handleDeleteActivity(event, activity.id)}
          />
          <Label
            basic
            content={activity.category}
            style={{ borderRadius: "20px", padding: "8px 12px" }}
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
