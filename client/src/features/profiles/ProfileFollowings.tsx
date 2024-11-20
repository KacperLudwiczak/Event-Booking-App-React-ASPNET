import { Grid, Header, Card, TabPane } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const segmentStyles = {
    border: "none",
    borderRight: "1px solid #ddd",
    boxShadow: "none",
  };

function ProfileFollowings() {
  const { profileStore } = useStore();
  const { profile, followings, loadFollowings, loadingFollowings, activeTab } = profileStore;

  useEffect(() => {
    loadFollowings("following");
  }, [loadFollowings]);

  return (
    <TabPane loading={loadingFollowings} style={segmentStyles}>
      <Grid>
        <Grid.Column width="16">
          <Header
            floated="left"
            icon="user"
            content={
              activeTab === 3
                ? `People following ${profile!.displayName}`
                : `People ${profile?.displayName} is following`
            }
          />
        </Grid.Column>
        <Grid.Column width="16">
          <Card.Group itemsPerRow="5">
            {followings.map((profile) => (
              <ProfileCard key={profile.username} profile={profile} />
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </TabPane>
  );
}

const ObservedProfileFollowings = observer(ProfileFollowings);
export default ObservedProfileFollowings;
