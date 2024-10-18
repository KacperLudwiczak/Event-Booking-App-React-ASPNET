import { Activity } from "../../../app/models/activity";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";

const gridStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
  openForm,
}: Props) {
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
            onClick={() => openForm(activity.id)}
          />
          <Button
            inverted
            color="orange"
            content="Cancel"
            onClick={cancelSelectActivity}
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
}
