import { Dimmer, Loader } from "semantic-ui-react";

const dimmerStyles = {
  background:
    "linear-gradient(90deg, rgb(138, 192, 253) 0%, rgb(186, 215, 248) 51%, rgb(215, 231, 250) 100%)",
};

const loaderStyles = {
    color:
      "#fff",
  };

interface Props {
  inverted?: boolean;
  content?: string;
}

export default function LoadingComponent({
  inverted = true,
  content = "Loading...",
}: Props) {
  return (
    <Dimmer active={true} inverted={inverted} style={dimmerStyles}>
      <Loader size="massive" content={content} style={loaderStyles}/>
    </Dimmer>
  );
}
