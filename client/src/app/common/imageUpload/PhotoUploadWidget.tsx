import { Button, Grid, Header } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

interface Props {
  loading: boolean;
}

function PhotoUploadWidget({ loading }: Props) {
  return (
    <>
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 2 - Resize image" />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 3 - Preview & Upload" />
          <div
            className="img-preview"
            style={{ minHeight: 200, overflow: "hidden" }}
          />
          <Button
            inverted
            floated="right"
            color="orange"
            disabled={loading}
            icon="close"
            style={{ width: "75px", borderRadius: "25px" }}
          />
          <Button
            inverted
            floated="right"
            color="blue"
            loading={loading}
            icon="check"
            style={{ width: "75px", borderRadius: "25px" }}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}

const ObservedPhotoUploadWidget = observer(PhotoUploadWidget);
export default ObservedPhotoUploadWidget;
