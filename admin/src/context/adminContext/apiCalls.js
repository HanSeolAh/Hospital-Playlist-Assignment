import axios from "axios";
import {
  createAdminFailure,
  createAdminStart,
  createAdminSuccess,
  deleteAdminFailure,
  deleteAdminStart,
  deleteAdminSuccess,
  getAdminsFailure,
  getAdminsStart,
  getAdminsSuccess,
} from "./AdminActions";

export const getAdmins = async (dispatch) => {
  dispatch(getAdminsStart());
  try {
    const res = await axios.get("/admins", {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(getAdminsSuccess(res.data));
  } catch (err) {
    dispatch(getAdminsFailure());
  }
};

//create
export const createAdmin = async (admin, dispatch) => {
  dispatch(createAdminStart());
  try {
    const res = await axios.post("/admins", admin, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(createAdminSuccess(res.data));
    console.log("Successfully created");
    alert("Successfully created")
  } catch (err) {
    dispatch(createAdminFailure());
    console.log("Creating failed");
    console.log(err);
    alert("Creating failed")

  }
};

//delete
export const deleteAdmin = async (id, dispatch) => {
  dispatch(deleteAdminStart());
  try {
    await axios.delete("/admins/" + id, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(deleteAdminSuccess(id));
  } catch (err) {
    dispatch(deleteAdminFailure());
  }
};
