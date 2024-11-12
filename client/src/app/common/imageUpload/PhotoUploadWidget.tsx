import { Button, Grid, Header } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import PhotoUploadWidgetDropzone from "./PhotoUploadWidgetDropzone";
import { useEffect, useState } from "react";
import PhotoWidgetCropper from "./PhotoWidgetCropper";

interface Props {
  loading: boolean;
}

interface FileWithPreview extends File {
  preview: string;
}

function PhotoUploadWidget({ loading }: Props) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [cropper, setCropper] = useState<Cropper>();

  function onCrop() {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => console.log(blob));
    }
  }

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <>
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header content="Step 1 - Add Photo" style={{ color: "#54c8ff" }} />
          <PhotoUploadWidgetDropzone setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header content="Step 2 - Resize" style={{ color: "#54c8ff" }} />
          {files && files.length > 0 && (
            <PhotoWidgetCropper
              setCropper={setCropper}
              imagePreview={files[0].preview}
            />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header content="Step 3 - Upload" style={{ color: "#54c8ff" }} />
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
            onClick={onCrop}
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
