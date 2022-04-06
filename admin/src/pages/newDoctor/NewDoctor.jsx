import { useContext, useState } from "react";
import "./newDoctor.css";
import { createDoctor } from "../../context/doctorContext/apiCalls";
import { DoctorContext } from "../../context/doctorContext/DoctorContext";

export default function NewDoctor() {
  const [doctor, setDoctor] = useState(null);
  // const [img, setImg] = useState(null);
  // const [imgTitle, setImgTitle] = useState(null);
  // const [imgSm, setImgSm] = useState(null);
  // const [trailer, setTrailer] = useState(null);
  // const [video, setVideo] = useState(null);
  // const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(DoctorContext);

  const [specialityList, setSpecialityList] = useState();
  const [languageList, setLanguageList] = useState();


  const handleChange = (e) => {
    const value = e.target.value;
    setDoctor({ ...doctor, [e.target.name]: value });
  };

  const handleSpeciality = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setSpecialityList({ ...specialityList, [e.target.name]: value });
    console.log(specialityList);
  };

  const handleLanguage = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setLanguageList({ ...languageList, [e.target.name]: value });
    console.log(languageList);
  };

  // const upload = (items) => {
  //   items.forEach((item) => {
  //     const fileName = new Date().getTime() + item.label + item.file.name;
  //     const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDownloadURL().then((url) => {
  //           setMovie((prev) => {
  //             return { ...prev, [item.label]: url };
  //           });
  //           setUploaded((prev) => prev + 1);
  //         });
  //       }
  //     );
  //   });
  // };

  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   upload([
  //     { file: img, label: "img" },
  //     { file: imgTitle, label: "imgTitle" },
  //     { file: imgSm, label: "imgSm" },
  //     { file: trailer, label: "trailer" },
  //     { file: video, label: "video" },
  //   ]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDoctor(doctor, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Doctor</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Doctor Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Gender</label>
          <div className="newDoctorGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="addProductItem">
          <label>Education</label>
          <input
            type="text"
            placeholder="Education"
            name="education"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Current Hospital</label>
          <input
            type="text"
            placeholder="Current Hospital"
            name="currentHospital"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Experience</label>
          <input
            type="number"
            placeholder="Experience"
            name="experience"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
        <label>Speciality</label>
            <select
              multiple
              name="speciality"
              onChange={handleSpeciality}
              style={{ height: "250px" }}
            >
            <option value="Physician">Physician</option>
            <option value="Anesthesiologist">Anesthesiologist</option>
            <option value="Urologist">Urologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Neurosurgeon">Neurosurgeon</option>
            <option value="Plastic Surgeon">Plastic Surgeon</option>
            <option value="Obstetrician">Obstetrician</option>
            <option value="Ophthalmologist">Ophthalmologist</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Otolaryngology Specialist">Otolaryngology Specialist</option>
            <option value="Psychosurgeon">Psychosurgeon</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Orthopedist">Orthopedist</option>
            <option value="Dentist">Dentist</option>
            <option value="Dermatologist">Dermatologist</option>
            </select>
        </div>
        <div className="addProductItem">
        <label>Language</label>
            <select
              multiple
              name="language"
              onChange={handleLanguage}
              style={{ height: "250px" }}
            >
            <option value="English">English</option>
            <option value="Mandarin Chinese">Mandarin Chinese</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="Korean">Korean</option>
            <option value="Standard Arabic">Standard Arabic</option>
            <option value="Bengali">Bengali</option>
            <option value="French">French</option>
            <option value="Russian">Russian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Standard German">Standard German</option>
            <option value="Japanese">Japanese</option>
            <option value="Vietnamese">Vietnamese</option>
            </select>
        </div>
        {/* <div className="addProductItem">
          <label>Is Active?</label>
          <select name="isActive" id="isActive" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div> */}
          <button 
            className="addProductButton" 
            onClick={handleSubmit}
          >
            Create
          </button>
      </form>
    </div>
  );
}
