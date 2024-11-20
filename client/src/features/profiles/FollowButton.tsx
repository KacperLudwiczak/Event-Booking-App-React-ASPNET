import { SyntheticEvent } from "react";
import { observer } from "mobx-react-lite";
import { Button, Reveal } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { Profile } from "../../app/models/profile";

interface Props {
  profile: Profile;
}

function FollowButton({ profile }: Props) {
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;
  
  if (userStore.user?.username === profile.username) return null;  
  function handleFollow(event: SyntheticEvent, username: string) {
    event.preventDefault();
    if (profile.following) {
      updateFollowing(username, false);
    } else {
      updateFollowing(username, true);
    }
  }

  return (
    <Reveal animated="move">
      <Reveal.Content visible style={{ width: "100%" }}>
        <Button
          fluid
          color="teal"
          content={profile.following ? "Following" : "Not Following"}
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Button
          loading={loading}
          fluid
          basic
          color={profile.following ? "red" : "green"}
          content={profile.following ? "Unfollow" : "Follow"}
          onClick={(e) => handleFollow(e, profile.username)}
        />
      </Reveal.Content>
    </Reveal>
  );
}

const ObservedFollowButton = observer(FollowButton);
export default ObservedFollowButton;
