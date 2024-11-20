import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

const cardStyles = {
  width: "250px",
  height: "390px",
  borderRadius: "25px",
  padding: "20px",
  border: "none",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
};

interface Props {
  profile: Profile;
}

function ProfileCard({ profile }: Props) {
  function truncate(string: string | undefined) {
    if (string) {
      return string.length > 40 ? string.substring(0, 37) + "..." : string;
    }
  }

  return (
    <Card as={Link} to={`/profiles/${profile.username}`} style={cardStyles}>
      <Image src={profile.image || "/assets/user.png"} />
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description> {truncate(profile.bio)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {profile.followersCount} Followers
      </Card.Content>
      <FollowButton profile={profile}/>
    </Card>
  );
}

const ObservedProfileCard = observer(ProfileCard);
export default ObservedProfileCard;
