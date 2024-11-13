import { useState } from "react";
import { useStore } from "../../app/stores/store";
import { Button, Grid, Header, TabPane } from "semantic-ui-react";
import ProfileEditForm from "./ProfileEditForm";
import { observer } from "mobx-react-lite";

function ProfileAbout() {
  const { profileStore } = useStore();
  const { isCurrentUser, profile } = profileStore;
  const [editMode, setEditMode] = useState(false);

  return (
    <TabPane style={{ border: "none", borderRight: "1px solid #ddd" }}>
      <Grid>
        <Grid.Column width="16">
          <Header
            floated="left"
            icon="user"
            content={`About ${profile?.displayName}`}
          />
          {isCurrentUser && (
            <Button
              floated="right"
              style={{
                backgroundColor: "#54c8ff",
                color: "#fff",
                borderRadius: "25px",
              }}
              content={editMode ? "Cancel" : "Edit Profile"}
              onClick={() => setEditMode(!editMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width="16">
          {editMode ? (
            <ProfileEditForm setEditMode={setEditMode} />
          ) : (
            <span style={{ whiteSpace: "pre-wrap" }}>{profile?.bio}</span>
          )}
        </Grid.Column>
      </Grid>
    </TabPane>
  );
}

const ObservedProfileAbout = observer(ProfileAbout);
export default ObservedProfileAbout;
