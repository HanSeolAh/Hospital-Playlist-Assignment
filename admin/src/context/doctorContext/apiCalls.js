import axios from "axios";
import {
  createDoctorFailure,
  createDoctorStart,
  createDoctorSuccess,
  deleteDoctorFailure,
  deleteDoctorStart,
  deleteDoctorSuccess,
  getDoctorsFailure,
  getDoctorsStart,
  getDoctorsSuccess,
  updateDoctorStart,
  updateDoctorSuccess,
  updateDoctorFailure
} from "./DoctorActions";

//Get

export const getDoctors = async (dispatch) => {
  dispatch(getDoctorsStart());
  try {
    const res = await axios.get("/doctors", {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(getDoctorsSuccess(res.data));
    console.log("Successfully get")
  } catch (err) {
    dispatch(getDoctorsFailure());
    console.log(err);
    console.log("Get failed")
  }
};

//Create
export const createDoctor = async (doctor, dispatch) => {
  dispatch(createDoctorStart());
  try {
    const res = await axios.post("/doctors", doctor, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(createDoctorSuccess(res.data));
    console.log("Successfully created")
    alert("Successfully created")
  } catch (err) {
    dispatch(createDoctorFailure());
    console.log("Creating failed")
    console.log(err);
    alert("Creating failed")
  }
};

//Update
export const updateDoctor = async (doctor, dispatch) => {
  dispatch(updateDoctorStart());
  try {
    const res = await axios.post("/doctors", doctor, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(updateDoctorSuccess(res.data));
    console.log("Successfully created")
    alert("Successfully created")
  } catch (err) {
    dispatch(updateDoctorFailure());
    console.log("Creating failed")
    console.log(err);
    alert("Creating failed")
  }
};

//Delete
export const deleteDoctor = async (id, dispatch) => {
  dispatch(deleteDoctorStart());
  try {
    await axios.delete("/doctors/" + id, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(deleteDoctorSuccess(id));
    alert("Successfully deleted")
  } catch (err) {
    dispatch(deleteDoctorFailure());
    alert("Deleting failed")
  }
};
