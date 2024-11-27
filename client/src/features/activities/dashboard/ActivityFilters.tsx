import { Menu, Header, Segment, Item } from "semantic-ui-react";
import Calendar from "react-calendar";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";

const segmentStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "15px",
  border: "none",
  marginBottom: "25px",
};

function ActivityFilters() {
  const {
    activityStore: { predicate, setPredicate },
  } = useStore();

  return (
    <Item style={{ marginTop: "31px" }}>
      <Segment style={segmentStyles}>
        <Menu
          vertical
          secondary
          size="large"
          style={{ width: "100%", margin: "10px" }}
        >
          <Header
            icon="filter"
            as="h3"
            content="Filters"
            style={{ color: "#54c8ff" }}
          />
          <Menu.Item
            content="All Events"
            active={predicate.has("all")}
            onClick={() => setPredicate("all", "true")}
          />
          <Menu.Item
            content="I'm going"
            active={predicate.has("isGoing")}
            onClick={() => setPredicate("isGoing", "true")}
          />
          <Menu.Item
            content="I'm hosting"
            active={predicate.has("isHost")}
            onClick={() => setPredicate("isHost", "true")}
          />
        </Menu>
      </Segment>
      <Segment style={segmentStyles}>
        <Header
          icon="calendar"
          as="h3"
          content="Select date"
          style={{ color: "#54c8ff", margin: "10px" }}
        />
        <Calendar
          onChange={(date) => setPredicate("startDate", date as Date)}
          value={predicate.get("startDate") || new Date()}
        />
      </Segment>
    </Item>
  );
}

const ObservedActivityFilters = observer(ActivityFilters);
export default ObservedActivityFilters;
