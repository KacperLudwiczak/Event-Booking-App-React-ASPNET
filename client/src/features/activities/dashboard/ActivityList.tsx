import { Button, Item, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const segmentStyles = {
  padding: "25px",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

  const [target, setTarget] = useState("");

  function handleDeleteActivity(
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment style={segmentStyles}>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  inverted
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => activityStore.selectActivity(activity.id)}
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
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}

const ObservedActivityList = observer(ActivityList);
export default ObservedActivityList;
