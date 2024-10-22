import { useEffect, useState } from "react";
import { Button, ButtonGroup, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
    // createActivity,
    // updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  // const navigate = useNavigate();

  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required('The event title is required'),
    category: Yup.string().required('The event category is required'),
    description: Yup.string().required(),
    date: Yup.string().required('Date is required').nullable(),
    venue: Yup.string().required(),
    city: Yup.string().required(),
});

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  // function handleSubmit() {
  //   if (!activity.id) {
  //     activity.id = uuid();
  //     createActivity(activity).then(() =>
  //       navigate(`/activities/${activity.id}`)
  //     );
  //   } else {
  //     updateActivity(activity).then(() =>
  //       navigate(`/activities/${activity.id}`)
  //     );
  //   }
  // }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <div style={containerStyles}>
      <Segment clearing style={segmentStyles}>
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={activity}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="ui form"
            >
              <Field placeholder="Title" name="title" />
              <Field placeholder="Description" name="description" />
              <Field placeholder="Category" name="category" />
              <Field type="date" placeholder="Date" name="date" />
              <Field placeholder="City" name="city" />
              <Field placeholder="Venue" name="venue" />
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
          )}
        </Formik>
      </Segment>
    </div>
  );
}

const ObservedActivityForm = observer(ActivityForm);
export default ObservedActivityForm;
