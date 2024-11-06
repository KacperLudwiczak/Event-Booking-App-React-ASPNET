import { observer } from "mobx-react-lite";
import { Tab, TabPane } from "semantic-ui-react";

const segmentStyles = {
  padding: "25px",
  borderRadius: "25px",
  border: "none",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
};

function ProfileContent() {
  const panes = [
    {
      menuItem: "About",
      render: () => <TabPane style={segmentStyles} attached={false}>About Content</TabPane>,
    },
    {
      menuItem: "Photos",
      render: () => <TabPane style={segmentStyles}>Profile Photo</TabPane>,
    },
    {
      menuItem: "Events",
      render: () => <TabPane style={segmentStyles}>Events Content</TabPane>,
    },
    {
      menuItem: "Followers",
      render: () => <TabPane style={segmentStyles}>Followers Content</TabPane>,
    },
    {
      menuItem: "Following",
      render: () => <TabPane style={segmentStyles}>Following Content</TabPane>,
    },
  ];
  return (
    <Tab
      menu={{ secondary: true, vertical: true }}
      menuItem={{color: "red"}}
      menuPosition="right"
      panes={panes}
      style={{ width: "1200px" }}
    />
  );
}

const ObservedProfileContent = observer(ProfileContent);
export default ObservedProfileContent;
