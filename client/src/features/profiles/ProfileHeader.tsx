import { observer } from "mobx-react-lite";
import {
  Grid,
  Segment,
  Item,
  Header,
  Statistic,
  Reveal,
  Button,
} from "semantic-ui-react";
import { Profile } from "../../app/models/profile";

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
          <Reveal animated="small fade">
            <Reveal.Content visible style={{ width: "100%" }}>
              <Button
                fluid
                content="Following"
                style={{
                  backgroundColor: "#54c8ff",
                  color: "#fff",
                  borderRadius: "25px",
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button
                fluid
                inverted
                style={{ borderRadius: "25px" }}
                color={true ? "red" : "green"} // eslint-disable-line no-constant-condition
                content={true ? "Unfollow" : "Follow"} // eslint-disable-line no-constant-condition
              />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

const ObservedProfileHeader = observer(ProfileHeader);
export default ObservedProfileHeader;
