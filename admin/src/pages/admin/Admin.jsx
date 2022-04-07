import {
  MailOutline,
  Publish,
} from "@material-ui/icons";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { updateAdmin } from "../../context/adminContext/apiCalls";
import "./admin.css";

export default function Admin() {
  const location = useLocation();
  const admin = location.admin;

  const { dispatch } = useContext(AdminContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAdmin(admin, dispatch);
  };

  return (
    <div className="admin">
      <div className="adminTitleContainer">
        <h1 className="adminTitle">Edit Admin</h1>
        <Link to="/newAdmin">
          <button className="adminAddButton">Create</button>
        </Link>
      </div>
      <div className="adminContainer">
        <div className="adminShow">
          <div className="adminShowTop">
            <img
              src= {admin.profilePic}
              alt=""
              className="adminShowImg"
            />
            <div className="adminShowTopTitle">
              <span className="adminShowUsername">{admin.username}</span>
              {/* <span className="adminShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="adminShowBottom">
            {/* <span className="adminShowTitle">Account Details</span>
             <div className="adminShowInfo">
              <PermIdentity className="adminShowIcon" />
              <span className="adminShowInfoTitle">annabeck99</span>
            </div> */}
            {/* <span className="adminShowTitle">Contact Details</span>
            <div className="adminShowInfo">
              <PhoneAndroid className="adminShowIcon" />
              <span className="adminShowInfoTitle">+1 123 456 67</span>
            </div> */}
            <div className="adminShowInfo">
              <MailOutline className="adminShowIcon" />
              <span className="adminShowInfoTitle">{admin.email}</span>
            </div>
            {/* <div className="adminShowInfo">
              <LocationSearching className="adminShowIcon" />
              <span className="adminShowInfoTitle">New York | USA</span>
            </div>*/}
          </div> 
        </div>
        <div className="adminUpdate">
          <span className="adminUpdateTitle">Edit</span>
          <form className="adminUpdateForm">
            <div className="adminUpdateLeft">
              <div className="adminUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={admin.username}
                  className="adminUpdateInput"
                />
              </div>
              {/* <div className="adminUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="adminUpdateInput"
                />
              </div> */}
              <div className="adminUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={admin.email}
                  className="adminUpdateInput"
                />
              </div>
            </div>
            <div className="adminUpdateRight">
              <div className="adminUpdateUpload">
                <img
                  className="adminUpdateImg"
                  src={admin.profilePic}
                  alt=""
                />
                <label for="file">
                  <Publish className="adminUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button 
                className="adminUpdateButton"
                onClick = {handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
