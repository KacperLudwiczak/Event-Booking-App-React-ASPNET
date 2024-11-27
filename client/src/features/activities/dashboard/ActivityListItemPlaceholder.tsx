import { Fragment } from "react";
import { Segment, Button, Placeholder } from "semantic-ui-react";

const placeholderStyles = {
  marginTop: "25px",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

export default function ActivityListItemPlaceholder() {
  return (
    <Fragment>
      <Placeholder fluid style={placeholderStyles}>
        <Segment.Group>
          <Segment style={{ minHeight: 110 }}>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          </Segment>
          <Segment clearing>
            <Button
              disabled
              inverted
              floated="right"
              content="View"
              color="blue"
              style={{ borderRadius: "25px" }}
            />
          </Segment>
        </Segment.Group>
      </Placeholder>
    </Fragment>
  );
}
