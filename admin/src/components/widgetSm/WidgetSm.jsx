import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newDoctors, setNewDoctors] = useState([]);

  useEffect(() => {
    const getNewDoctors = async () => {
      try {
        const res = await axios.get("/doctors?new=true", {
          headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
          },
        });
        setNewDoctors(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewDoctors();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Doctors</span>
      <ul className="widgetSmList">
        {newDoctors.map((doctor) => (
          <li className="widgetSmListItem">
            <img
              src={
                doctor.img              
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {doctor.firstName} {doctor.lastName}
              </span>
            </div>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {doctor.email}
              </span>
            </div>
            {/* <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
