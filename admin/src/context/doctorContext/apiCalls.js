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
} from "./DoctorActions";

export const getDoctors = async (dispatch) => {
  dispatch(getDoctorsStart());
  try {
    const res = await axios.get("/doctors", {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(getDoctorsSuccess(res.data));
  } catch (err) {
    dispatch(getDoctorsFailure());
  }
};

//create
export const createDoctor = async (doctor, dispatch) => {
  dispatch(createDoctorStart());
  try {
    const res = await axios.post("/doctors", JSON.parse(doctor), {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(createDoctorSuccess(res.data));
  } catch (err) {
    dispatch(createDoctorFailure());
  }
};

//delete
export const deleteDoctor = async (id, dispatch) => {
  dispatch(deleteDoctorStart());
  try {
    await axios.delete("/doctors/" + id, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(deleteDoctorSuccess(id));
  } catch (err) {
    dispatch(deleteDoctorFailure());
  }
};
