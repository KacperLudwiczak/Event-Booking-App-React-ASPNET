import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

const segmentStyles = {
  padding: "25px",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

function ActivityList() {
  const { activityStore } = useStore();
  const { activitiesByDate } = activityStore;

  return (
    <Segment style={segmentStyles}>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <ActivityListItem key={activity.id} activity={activity} />
        ))}
      </Item.Group>
    </Segment>
  );
}

const ObservedActivityList = observer(ActivityList);
export default ObservedActivityList;
