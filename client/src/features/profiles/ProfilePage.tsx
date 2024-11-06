import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";

function ProfilePage() {   
    return (
        <Grid>
          <Grid.Column width='16'>
                <ProfileHeader />
            </Grid.Column>
        </Grid>
    )
}

const ObservedProfilePage = observer(ProfilePage);
export default ObservedProfilePage;
