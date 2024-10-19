import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu inverted secondary fixed="top">
      <Container>
        <Menu.Item header style={{ fontSize: "1.1em" }}>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" style={{ fontSize: "1em" }} />
        <Menu.Item>
          <Button
            inverted
            content="Create Activity"
            onClick={() => activityStore.openForm()}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
