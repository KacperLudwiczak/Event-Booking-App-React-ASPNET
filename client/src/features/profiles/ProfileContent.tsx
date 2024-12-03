import { observer } from "mobx-react-lite";
import { Tab } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import ProfilePhotos from "./ProfilePhotos";
import ProfileAbout from "./ProfileAbout";
import ProfileFollowings from "./ProfileFollowings";
import { useStore } from "../../app/stores/store";
import ProfileActivities from "./ProfileActivities";



interface Props {
  profile: Profile;
}

function ProfileContent({ profile }: Props) {
  const { profileStore } = useStore();

  const panes = [
    {
      menuItem: "About",
      render: () => <ProfileAbout />,
    },
    {
      menuItem: "Photos",
      render: () => <ProfilePhotos profile={profile} />,
    },
    {
      menuItem: "Events",
      render: () => <ProfileActivities/>,
    },
    {
      menuItem: "Followers",
      render: () => <ProfileFollowings />,
    },
    {
      menuItem: "Following",
      render: () => <ProfileFollowings />,
    },
  ];
  return (
    <Tab
      menu={{ secondary: true, vertical: true }}
      menuItem={{ color: "red" }}
      menuPosition="right"
      panes={panes}
      className="menu-profile"
      onTabChange={(_, data) =>
        profileStore.setActiveTab(data.activeIndex as number)
      }
    />
  );
}

const ObservedProfileContent = observer(ProfileContent);
export default ObservedProfileContent;
