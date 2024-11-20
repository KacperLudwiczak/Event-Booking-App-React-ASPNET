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

  const styles = {
    borderColor: "#54c8ff",
    borderWidth: 2,
  };

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
            <List.Item as={Link} to={`/profiles/${attendee.username}`}>
              <Image
                size="mini"
                circular
                bordered
                src={attendee.image || `/assets/user.png`}
                style={attendee.following ? styles : null}
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
