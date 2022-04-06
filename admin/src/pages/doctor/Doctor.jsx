import { Link, useLocation } from "react-router-dom";
import "./doctor.css";
import { Publish } from "@material-ui/icons";
import { useState } from "react";

export default function Doctor() {
  const location = useLocation();
  const doctor = location.doctor;
  
  const [checked, setChecked] = useState(false);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Doctor</h1>
        <Link to="/newDoctor">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={doctor.img} alt="" className="productInfoImg" />
            <span className="productName">{doctor.lastName} {doctor.firstName}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{doctor._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Email:</span>
              <span className="productInfoValue">{doctor.email}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoValue">{doctor.desc}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Gender:</span>
              <span className="productInfoValue">{doctor.gender}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Speciality:</span>
              <span className="productInfoValue">
                {doctor.speciality.map(s => (
                  <li>
                    {s}
                  </li>
                ))}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Education:</span>
              <span className="productInfoValue">
                {doctor.education.map(s => (
                  <li>
                    {s}
                  </li>
                ))}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Current Hospital:</span>
              <span className="productInfoValue">{doctor.currentHospital}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Location:</span>
              <span className="productInfoValue">{doctor.location}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Experience:</span>
              <span className="productInfoValue">{doctor.experience}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Language:</span>
              <span className="productInfoValue">
                {doctor.language.map(s => (
                  <li>
                    {s}
                  </li>
                ))}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">{doctor.isActive}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Doctor</label>
            <input type="text" placeholder={doctor.lastName} />
            <input type="text" placeholder={doctor.firstName} />
            <label>Email</label>
            <input type="text" placeholder={doctor.email} />
            <label>Description</label>
            <input type="text" placeholder={doctor.desc} />
            <label>Gender</label>
            <input type="text" placeholder={doctor.gender} />
            <label>Speciality</label>
            <input type="array" placeholder={doctor.speciality} />
            <label>Education</label>
            <input type="array" placeholder={doctor.education} />
            <label>Current Hospital</label>
            <input type="text" placeholder={doctor.currentHospital} />
            <label>Location</label>
            <input type="text" placeholder={doctor.location} />
            <label>Experience</label>
            <input type="number" placeholder={doctor.experience} />
            <label>Language</label>
            <input type="text" placeholder={doctor.language} />
            <label>Active</label>
            <div className = "doctorFormCheckbox">
              <input
                type="checkbox"
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
              />
              Active
            </div>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={doctor.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
