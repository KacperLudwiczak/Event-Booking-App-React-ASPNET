import { observer } from "mobx-react-lite";
import {
  Grid,
  Segment,
  Item,
  Header,
  Statistic,
} from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import FollowButton from "./FollowButton";

const segmentStyles = {
  padding: "25px",
  borderRadius: "25px",
  border: "none",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

interface Props {
  profile: Profile;
}

function ProfileHeader({ profile }: Props) {
  return (
    <Segment style={segmentStyles}>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                avatar
                size="small"
                src={profile.image || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Header as="h1" content={profile.displayName} />
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Statistic.Group widths={2} style={{ marginBottom: "10px" }}>
            <Statistic label="Followers" value={profile.followersCount} />
            <Statistic label="Following" value={profile.followingCount} />
          </Statistic.Group>
          <FollowButton profile={profile}/>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

const ObservedProfileHeader = observer(ProfileHeader);
export default ObservedProfileHeader;
