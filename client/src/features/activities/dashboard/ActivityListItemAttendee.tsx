import { Image, List } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

function ActivityListItemAttendee() {
  return (
    <List horizontal>
      <List.Item as={Link}>
        <Image size="mini" circular src={`/assets/user.png`} />
      </List.Item>
      <List.Item as={Link}>
        <Image size="mini" circular src={`/assets/user.png`} />
      </List.Item>
      <List.Item as={Link}>
        <Image size="mini" circular src={`/assets/user.png`} />
      </List.Item>
    </List>
  );
}

const ObservedActivityListItemAttendee = observer(ActivityListItemAttendee);
export default ObservedActivityListItemAttendee;
