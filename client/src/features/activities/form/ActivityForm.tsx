import { ChangeEvent, useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const segmentStyles = {
  width: "50%",
  padding: "25px",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

function ActivityForm() {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleSubmit() {
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <div style={containerStyles}>
      <Segment clearing style={segmentStyles}>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInputChange}
          />
          <Form.TextArea
            placeholder="Description"
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
          <Form.Input
            type="date"
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
          <ButtonGroup widths="2" style={{ marginTop: "10px" }}>
            <Button
              loading={loading}
              inverted
              color="blue"
              content="Submit"
              style={{ marginRight: "10px", borderRadius: "25px" }}
            />
            <Button
              inverted
              as={Link}
              to="/activities"
              color="orange"
              content="Cancel"
              style={{ borderRadius: "25px" }}
            />
          </ButtonGroup>
        </Form>
      </Segment>
    </div>
  );
}

const ObservedActivityForm = observer(ActivityForm);
export default ObservedActivityForm;
