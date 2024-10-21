import { observer } from 'mobx-react-lite';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {Activity} from "../../../app/models/activity";

const segmentStyles = {
    borderRadius: "25px",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  };
const activityImageStyle = {
    filter: 'brightness(30%)'
};
const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    activity: Activity
}

function ActivityDetailedHeader({activity}: Props) {
  return (
    <>
      <Segment.Group style={segmentStyles}>
        <Segment basic attached="top" style={{ padding: "0" }}>
          <Image
            src={`/assets/categoryImages/${activity.category}.jpg`}
            fluid
            style={activityImageStyle}
          />
          <Segment style={activityImageTextStyle} basic>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content={activity.title}
                    style={{ color: "white" }}
                  />
                  <p>{activity.date}</p>
                  <p>
                    Hosted by <strong>User</strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>
        <Segment clearing attached="bottom">
          <Button inverted color="blue" style={{marginRight: "5px"}}>Join Activity</Button>
          <Button inverted color="orange" >Cancel attendance</Button>
          <Button inverted color="blue" floated="right">
            Manage Event
          </Button>
        </Segment>
      </Segment.Group>
    </>
  );
}

const ObservedActivityDetailedHeader = observer(ActivityDetailedHeader);
export default ObservedActivityDetailedHeader;