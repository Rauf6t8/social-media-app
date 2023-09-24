import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { User } from "../../dummyData.js";
import Clodsf from "../closefriend/Clodsf";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <Chat className="sidebarIcon" />
            <span className="sidebarlistitemtext">Chat</span>
          </li>
          <li className="sidebarlistitem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarlistitemtext">PlayCircleFilled</span>
          </li>
          <li className="sidebarlistitem">
            <Group className="sidebarIcon" />
            <span className="sidebarlistitemtext">Group</span>
          </li>
          <li className="sidebarlistitem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarlistitemtext">Bookmark</span>
          </li>
          <li className="sidebarlistitem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarlistitemtext">Question</span>
          </li>
          <li className="sidebarlistitem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarlistitemtext">Jobs</span>
          </li>
          <li className="sidebarlistitem">
            <Event className="sidebarIcon" />
            <span className="sidebarlistitemtext">Event</span>
          </li>
          <li className="sidebarlistitem">
            <School className="sidebarIcon" />
            <span className="sidebarlistitemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {User.map((usee) => (
            <Clodsf key={usee.id} user={usee} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
