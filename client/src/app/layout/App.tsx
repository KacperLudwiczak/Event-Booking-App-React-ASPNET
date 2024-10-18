import { useEffect, useState } from "react";
import axios from "axios";
import { List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

export default function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <List bulleted>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </>
  );
}
