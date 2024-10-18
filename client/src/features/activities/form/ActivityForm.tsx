import { ChangeEvent, useState } from "react";
import { Button, ButtonGroup, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

const segmentStyles = {
  padding: "25px",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

export default function ActivityForm({ activity, closeForm }: Props) {
  const initialState = {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };
  // const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    // createOrEdit(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
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
            inverted
            color="blue"
            content="Submit"
            style={{ marginRight: "10px" }}
          />
          <Button
            inverted
            color="orange"
            content="Cancel"
            onClick={closeForm}
          />
        </ButtonGroup>
      </Form>
    </Segment>
  );
}
