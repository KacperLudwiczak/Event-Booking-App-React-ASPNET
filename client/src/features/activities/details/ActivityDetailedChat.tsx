import { observer } from "mobx-react-lite";
import {
  Segment,
  Header,
  Comment,
  Form,
  Button,
  Item,
} from "semantic-ui-react";

const segmentStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "15px",
  border: "none",
  marginBottom: "25px",
};

function ActivityDetailedChat() {
  return (
    <Item style={{marginBottom: "15px"}}>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={segmentStyles}
      >
        <Header>Chat about this event</Header>
      </Segment>
      <Item>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Form reply>
            <Form.TextArea style={{borderRadius: "25px"}}/>
            <Button
              inverted
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Item>
    </Item>
  );
}

const ObservedActivityDetailedChat = observer(ActivityDetailedChat);
export default ObservedActivityDetailedChat;
