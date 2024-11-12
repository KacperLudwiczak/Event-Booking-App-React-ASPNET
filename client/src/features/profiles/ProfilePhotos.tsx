import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Card, Header, Image, Grid, Button, TabPane } from "semantic-ui-react";
import { Photo, Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import PhotoUploadWidget from "../../app/common/imageUpload/PhotoUploadWidget";

interface Props {
  profile: Profile;
}

function ProfilePhotos({ profile }: Props) {
  const {
    profileStore: {
      isCurrentUser,
      setMainPhoto,
      uploadPhoto,
      loading,
      uploading,
      deletePhoto,
    },
  } = useStore();
  const [addPhotoMode, setAddPhotoMode] = useState(false);
  const [target, setTarget] = useState("");

  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }

  function handleSetMain(
    photo: Photo,
    event: SyntheticEvent<HTMLButtonElement>
  ) {
    setTarget(event.currentTarget.name);
    setMainPhoto(photo);
  }

  function handleDeletePhoto(
    photo: Photo,
    e: SyntheticEvent<HTMLButtonElement>
  ) {
    setTarget(e.currentTarget.name);
    deletePhoto(photo);
  }

  return (
    <TabPane style={{ border: "none", borderRight: "1px solid #ddd" }}>
      <Grid>
        <Grid.Column width="16">
          <Header floated="left" icon="image" content="Photos" />
          {isCurrentUser && (
            <Button
              floated="right"
              style={{
                backgroundColor: "#54c8ff",
                color: "#fff",
                borderRadius: "25px",
              }}
              content={addPhotoMode ? "Cancel" : "Add" + " Photo"}
              onClick={() => setAddPhotoMode(!addPhotoMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width="16">
          {addPhotoMode ? (
            <PhotoUploadWidget
              uploadPhoto={handlePhotoUpload}
              loading={uploading}
            />
          ) : (
            <Card.Group itemsPerRow={5}>
              {profile.photos?.map((photo) => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                  {isCurrentUser && (
                    <Button.Group fluid widths={2}>
                      <Button
                        basic
                        color="green"
                        content="Main"
                        name={"main" + photo.id}
                        loading={target === "main" + photo.id && loading}
                        disabled={photo.isMain}
                        onClick={(event) => handleSetMain(photo, event)}
                      />
                      <Button
                        basic
                        color="red"
                        icon="trash"
                        name={photo.id}
                        loading={loading && photo.id === target}
                        disabled={photo.isMain}
                        onClick={(event) => handleDeletePhoto(photo, event)}
                      />
                    </Button.Group>
                  )}
                </Card>
              ))}
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </TabPane>
  );
}

const ObservedProfilePhotos = observer(ProfilePhotos);
export default ObservedProfilePhotos;
