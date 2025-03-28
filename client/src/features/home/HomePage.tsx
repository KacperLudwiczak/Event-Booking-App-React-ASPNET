import { Link } from "react-router-dom";
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

function HomePage() {
  const { userStore, modalStore } = useStore();

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2" inverted content="Welcome to Reactivities" />
            <Button
              as={Link}
              to="/activities"
              size="huge"
              inverted
              style={{ borderRadius: "25px" }}
            >
              Go to activities!
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => modalStore.openModal(<LoginForm />)}
              size="huge"
              inverted
              style={{ borderRadius: "25px", margin: "10px" }}
            >
              Login
            </Button>
            <Button
              onClick={() => modalStore.openModal(<RegisterForm />)}
              size="huge"
              inverted
              style={{ borderRadius: "25px", margin: "10px" }}
            >
              Register
            </Button>
          </>
        )}
      </Container>
    </Segment>
  );
}

const ObservedHomePage = observer(HomePage);
export default ObservedHomePage;
