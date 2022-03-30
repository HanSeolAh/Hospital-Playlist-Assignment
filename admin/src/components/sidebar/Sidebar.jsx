import "./sidebar.css";
import {
  LocalHospitalTwoTone,
  PersonTwoTone,
  PersonAddTwoTone,
  TocTwoTone,
  AddToQueueTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <TocTwoTone className="sidebarIcon" />
                Home
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin Menu</h3>
          <ul className="sidebarList">
            <Link to="/admins" className="link">
              <li className="sidebarListItem">
                <PersonTwoTone className="sidebarIcon" />
                Admins
              </li>
            </Link>
            {/* <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link> */}
            <Link to="/newAdmin" className="link">
              <li className="sidebarListItem">
                <PersonAddTwoTone className="sidebarIcon" />
                Add Admin
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Doctor Menu</h3>
          <ul className="sidebarList">
            <Link to="/doctors" className="link">
              <li className="sidebarListItem">
                <LocalHospitalTwoTone className="sidebarIcon" />
                Doctors
              </li>
            </Link>
            <Link to="/newdoctor" className="link">
              <li className="sidebarListItem">
                <AddToQueueTwoTone className="sidebarIcon" />
                Add Doctors
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
