import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Header, Icon } from "semantic-ui-react";

interface Props {
    setFiles: (files: FileWithPreview[]) => void;
  }
  
  interface FileWithPreview extends File {
    preview: string;
  }

export default function PhotoUploadWidgetDropzone({ setFiles }: Props) {
  const dzStyles = {
    border: "dashed 3px #ddd",
    borderColor: "#ddd",
    borderRadius: "5px",
    paddingTop: "30px",
    textAlign: "center",
    height: "170px",
    width: "170px",
  };
  const dzActive = {
    borderColor: "green",
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, [setFiles]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
    >
      <input {...getInputProps()} />
      <Icon name="upload" size="huge" />
      <Header content="Drop image here" />
    </div>
  );
}
