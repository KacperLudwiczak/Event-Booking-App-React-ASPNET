import { Button, Container, Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu inverted secondary fixed="top">
      <Container>
        <Menu.Item header as={Link} to="/" style={{ fontSize: "1.1em" }}>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/activities"
          name="Activities"
          style={{ fontSize: "1em" }}
        />
        <Menu.Item>
          <Button
            as={Link}
            to="/createActivity"
            inverted
            content="Create Activity"
            style={{borderRadius: "25px"}}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
