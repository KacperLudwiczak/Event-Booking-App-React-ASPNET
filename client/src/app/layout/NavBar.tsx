import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Button, Container, Dropdown, Menu, Image } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

const dropdownMenuStyles = {
  borderRadius: "15px",
  padding: "10px",
  border: "none",
  fontSize: "15px",
  marginTop: "15px",
};

function NavBar() {
  const {
    userStore: { user, logout },
  } = useStore();

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
        <Menu.Item
          as={NavLink}
          to="/errors"
          name="Errors"
          style={{ fontSize: "1em" }}
        />
        <Menu.Item>
          <Button
            as={Link}
            to="/createActivity"
            inverted
            content="Create Activity"
            style={{ borderRadius: "25px" }}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Image
            avatar
            spaced="right"
            src={user?.image || "/assets/user.png"}
            style={{ fontSize: "20px", border: "2px solid #fff" }}
          />
          <Dropdown
            text={user?.displayName}
            direction="left"
            icon="ellipsis vertical"
            style={{ fontSize: "20px" }}
          >
            <Dropdown.Menu style={dropdownMenuStyles}>
              <Dropdown.Item
                as={Link}
                to={`/profile/${user?.username}`}
                text="My Profile"
                icon="user"
              />
              <Dropdown.Item onClick={logout} text="Logout" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

const ObservedNavBar = observer(NavBar);
export default ObservedNavBar;
