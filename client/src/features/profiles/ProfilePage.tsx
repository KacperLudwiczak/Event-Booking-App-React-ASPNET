import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";

function ProfilePage() {   
    return (
        <Grid>
          <h1>Profile Page</h1>
        </Grid>
    )
}

const ObservedProfilePage = observer(ProfilePage);
export default ObservedProfilePage;
