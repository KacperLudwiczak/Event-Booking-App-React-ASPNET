import { observer } from "mobx-react-lite";
import {
  Segment,
  Header,
  Comment,
  Button,
  Item,
  Image,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Form, Formik } from "formik";
import MyTextArea from "../../../app/common/form/MyTextArea";

const segmentStyles = {
  borderRadius: "25px",
  backgroundColor: "#54c8ff",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "15px",
  border: "none",
  marginBottom: "25px",
};

const imageStyles = {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  marginRight: "10px",
  marginBottom: "20px",
};

interface Props {
  activityId: string;
}

function ActivityDetailedChat({ activityId }: Props) {
  const { commentStore } = useStore();

  useEffect(() => {
    if (activityId) {
      commentStore.createHubConnection(activityId);
    }
    return () => {
      commentStore.clearComments();
    };
  }, [commentStore, activityId]);

  return (
    <Item style={{ marginBottom: "15px" }}>
      <Segment textAlign="center" attached="top" inverted style={segmentStyles}>
        <Header>Chat about this event</Header>
      </Segment>
      <Item>
        <Comment.Group>
          {commentStore.comments.map((comment) => (
            <Comment key={comment.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Item>
                  <Image
                    style={imageStyles}
                    src={comment.image || "/assets/user.png"}
                  />
                </Item>
                <Comment.Content>
                  <Comment.Author
                    as={Link}
                    to={`/profiles/${comment.username}`}
                  >
                    {comment.displayName}
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>{formatDistanceToNow(comment.createdAt)} ago</div>
                  </Comment.Metadata>
                  <Comment.Text style={{ whiteSpace: "pre-wrap" }}>
                    {comment.body}
                  </Comment.Text>
                </Comment.Content>
              </div>
            </Comment>
          ))}
          <Formik
            onSubmit={(values, { resetForm }) =>
              commentStore.addComment(values).then(() => resetForm())
            }
            initialValues={{ body: "" }}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="ui form">
                <MyTextArea placeholder="Add comment" name="body" rows={2} />
                <Button
                  inverted
                  loading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                  type="submit"
                  floated="right"
                  style={{ borderRadius: "25px" }}
                />
              </Form>
            )}
          </Formik>
        </Comment.Group>
      </Item>
    </Item>
  );
}

const ObservedActivityDetailedChat = observer(ActivityDetailedChat);
export default ObservedActivityDetailedChat;
