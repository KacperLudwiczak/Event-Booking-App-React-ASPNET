import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const gridStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const {selectedActivity: activity} = activityStore;

  if(!activity) return <LoadingComponent />;

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
            style={{ marginRight: "10px" }}
          />
          <Button
            inverted
            color="orange"
            content="Cancel"
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
}
