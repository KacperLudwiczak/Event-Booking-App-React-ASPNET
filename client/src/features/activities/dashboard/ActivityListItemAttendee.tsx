import { Image, List, Popup } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Profile } from "../../../app/models/profile";
import ProfileCard from "../../profiles/ProfileCard";

const popupStyles = {
  borderRadius: "25px",
  padding: "0",
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
};

interface Props {
  attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
  return (
    <List horizontal>
      {attendees.map((attendee) => (
        <Popup
          hoverable
          basic
          key={attendee.username}
          style={popupStyles}
          position="top center"
          trigger={
            <List.Item as={Link} to={`/profile/${attendee.username}`}>
              <Image
                size="mini"
                circular
                src={attendee.image || `/assets/user.png`}
              />
            </List.Item>
          }
        >
          <Popup.Content>
            <ProfileCard profile={attendee} />
          </Popup.Content>
        </Popup>
      ))}
    </List>
  );
}

const ObservedActivityListItemAttendee = observer(ActivityListItemAttendee);
export default ObservedActivityListItemAttendee;
