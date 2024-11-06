import { observer } from "mobx-react-lite";
import { Tab, TabPane } from "semantic-ui-react";

const segmentStyles = {
  border: "none",
  borderRight: "1px solid #ddd",
  boxShadow: "none",
};

function ProfileContent() {
  const panes = [
    {
      menuItem: "About",
      render: () => <TabPane style={segmentStyles}>About Content</TabPane>,
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
      menuItem={{ color: "red" }}
      menuPosition="right"
      panes={panes}
      className="menu-profile"
    />
  );
}

const ObservedProfileContent = observer(ProfileContent);
export default ObservedProfileContent;
