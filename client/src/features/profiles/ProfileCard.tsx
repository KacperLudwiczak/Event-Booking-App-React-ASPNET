import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const cardStyles = {
  width: "250px",
  height: "360px",
  borderRadius: "25px",
  padding: "20px",
  border: "none",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
};

interface Props {
  profile: Profile;
}

function ProfileCard({ profile }: Props) {
  return (
    <Card as={Link} to={`/profile/${profile.username}`} style={cardStyles}>
      <Image src={profile.image || "/assets/user.png"} />
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description>Bio goes here</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        20 Followers
      </Card.Content>
    </Card>
  );
}

const ObservedProfileCard = observer(ProfileCard);
export default ObservedProfileCard;
