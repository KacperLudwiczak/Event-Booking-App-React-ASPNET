import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const gridStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

  return (
    <Card fluid style={gridStyles}>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra style={{ padding: "20px" }}>
        <ButtonGroup widths="2">
          <Button
            inverted
            color="blue"
            content="Edit"
            as={Link}
            to={`/manage/${activity.id}`}
            style={{ marginRight: "10px" }}
          />
          <Button
            inverted
            as={Link}
            to="/activities"
            color="orange"
            content="Cancel"
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
}

const ObservedActivityDetails = observer(ActivityDetails);
export default ObservedActivityDetails;
