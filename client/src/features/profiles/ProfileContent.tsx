import { observer } from "mobx-react-lite";
import { Tab, TabPane } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import ProfilePhotos from "./ProfilePhotos";

const segmentStyles = {
  border: "none",
  borderRight: "1px solid #ddd",
  boxShadow: "none",
};

interface Props {
  profile: Profile;
}

function ProfileContent({ profile }: Props) {
  const panes = [
    {
      menuItem: "About",
      render: () => <TabPane style={segmentStyles}>About Content</TabPane>,
    },
    {
      menuItem: "Photos",
      render: () => <ProfilePhotos profile={profile} />,
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
