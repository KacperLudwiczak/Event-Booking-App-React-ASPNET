import { useEffect, useState } from "react";
import { Button, ButtonGroup, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { Activity } from "../../../app/models/activity";
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

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: null,
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The event title is required"),
    category: Yup.string().required("The event category is required"),
    description: Yup.string().required("The event description is required"),
    date: Yup.string().required("The event date is required").nullable(),
    venue: Yup.string().required("The event venue is required"),
    city: Yup.string().required("The event city is required"),
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleFormSubmit(activity: Activity) {
    if (activity.id.length === 0) {
      const newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <div style={containerStyles}>
      <Segment clearing style={segmentStyles}>
        <Header content="Activity Details" sub color="teal" />
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={activity}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="ui form"
            >
              <MyTextInput placeholder="Title" name="title" />
              <MyTextArea
                rows={3}
                placeholder="Description"
                name="description"
              />
              <MySelectInput
                options={categoryOptions}
                placeholder="Category"
                name="category"
              />
              <MyDateInput
                placeholderText="Date"
                name="date"
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />

              <Header content="Location Details" sub color="teal" />
              <MyTextInput placeholder="City" name="city" />
              <MyTextInput placeholder="Venue" name="venue" />

              <ButtonGroup widths="2" style={{ marginTop: "10px" }}>
                <Button
                  disabled={isSubmitting || !dirty || !isValid}
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
          )}
        </Formik>
      </Segment>
    </div>
  );
}

const ObservedActivityForm = observer(ActivityForm);
export default ObservedActivityForm;
