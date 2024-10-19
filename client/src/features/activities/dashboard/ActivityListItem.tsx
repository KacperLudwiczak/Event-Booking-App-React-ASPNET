import { Link } from "react-router-dom";
import { Item, Button, Icon} from "semantic-ui-react";
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
    <Item style={{marginBottom: "5px"}}>
    <Item.Content>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" circular src="/assets/user.png" />
          <Item.Content style={{marginTop: "20px"}}>
            <Item.Header as="a">{activity.title}</Item.Header>
            <Item.Description>Hosted by Bob</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>


      <span  style={{padding: "5px"}}>
         <Icon name="clock" /> {activity.date}
      </span>
      <span style={{padding: "5px"}}>
      <Icon name="marker" /> {activity.venue}
      </span>

      <h5 style={{margin: "15px 10px"}}>Attendees go here</h5>
      <h5 style={{margin: "15px 10px"}}>{activity.description}</h5>
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
        </Item.Extra>
        </Item.Content>
        </Item>
    // <Item key={activity.id}>
    //   <Item.Content>
    //     <Item.Header as="a">{activity.title}</Item.Header>
    //     <Item.Description>
    //       <div>{activity.description}</div>
    //       <div>
    //         {activity.city} | {activity.venue}
    //       </div>
    //     </Item.Description>
    //     <Item.Extra>
          // <Button
          //   inverted
          //   floated="right"
          //   content="View"
          //   color="blue"
          //   as={Link}
          //   to={`/activities/${activity.id}`}
          // />
          // <Button
          //   inverted
          //   name={activity.id}
          //   floated="right"
          //   content="Delete"
          //   color="red"
          //   loading={loading && target === activity.id}
          //   onClick={(event) => handleDeleteActivity(event, activity.id)}
          // />
        //   <Label
        //     basic
        //     content={activity.category}
        //     style={{ borderRadius: "20px", padding: "8px 12px" }}
        //   />
        // </Item.Extra>
    //   </Item.Content>
    // </Item>
  );
}
