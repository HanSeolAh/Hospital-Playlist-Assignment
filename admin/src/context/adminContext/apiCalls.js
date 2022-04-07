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
  updateAdminStart,
  updateAdminSuccess,
  updateAdminFailure
} from "./AdminActions";

//Get

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

//Create
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

//Update
export const updateAdmin = async (admin, dispatch) => {
  dispatch(updateAdminStart());
  try {
    const res = await axios.post("/admins", admin, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(updateAdminSuccess(res.data));
    console.log("Successfully updated")
    alert("Successfully updated")
  } catch (err) {
    dispatch(updateAdminFailure());
    console.log("Updating failed")
    console.log(err);
    alert("Updating failed")
  }
};

//Delete
export const deleteAdmin = async (id, dispatch) => {
  dispatch(deleteAdminStart());
  try {
    await axios.delete("/admins/" + id, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("admin")).accessToken,          
      },
    });
    dispatch(deleteAdminSuccess(id));
    alert("Successfully deleted")
  } catch (err) {
    dispatch(deleteAdminFailure());
    alert("Deleting failed")
  }
};
