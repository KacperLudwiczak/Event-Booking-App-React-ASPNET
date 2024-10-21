import { Menu, Header, Segment, Item } from "semantic-ui-react";
import Calendar from "react-calendar";

const segmentStyles = {
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "15px",
  border: "none",
  marginBottom: "25px",
};

export default function ActivityFilters() {
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
          <Menu.Item content="All Events" />
          <Menu.Item content="I'm going" />
          <Menu.Item content="I'm hosting" />
        </Menu>
      </Segment>
      <Segment style={segmentStyles}>
        <Header
          icon="calendar"
          as="h3"
          content="Select date"
          style={{ color: "#54c8ff", margin: "10px" }}
        />
        <Calendar />
      </Segment>
    </Item>
  );
}
