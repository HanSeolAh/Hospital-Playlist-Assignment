import "./newAdmin.css";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { createAdmin } from "../../context/adminContext/apiCalls";

export default function NewAdmin() {
  const [admin, setAdmin] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const { dispatch } = useContext(AdminContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setAdmin({ ...admin, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
    createAdmin(admin, dispatch);
  };

  return (
    <div className="newAdmin">
      <h1 className="newAdminTitle">New Admin</h1>
      <form className="newAdminForm">
        <div className="newAdminItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="newAdminItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newAdminItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newAdminItem">
          <label>Profile Picture</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={handleChange}
          />
        </div>
        {/* <div className="newAdminItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newAdminItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}
        {/* <div className="newAdminItem">
          <label>Gender</label>
          <div className="newAdminGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div> */}
        {/* <div className="newAdminItem">
          <label>Active</label>
          <select className="newAdminSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button className="newAdminButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
