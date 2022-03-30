export const getDoctorsStart = () => ({
  type: "GET_DOCTORS_START",
});

export const getDoctorsSuccess = (doctors) => ({
  type: "GET_DOCTORS_SUCCESS",
  payload: doctors,
});

export const getDoctorsFailure = () => ({
  type: "GET_DOCTORS_FAILURE",
});

export const createDoctorStart = () => ({
  type: "CREATE_DOCTOR_START",
});

export const createDoctorSuccess = (doctor) => ({
  type: "CREATE_DOCTOR_SUCCESS",
  payload: doctor,
});

export const createDoctorFailure = () => ({
  type: "CREATE_DOCTOR_FAILURE",
});

export const updateDoctorStart = () => ({
  type: "UPDATE_DOCTOR_START",
});

export const updateDoctorSuccess = (doctor) => ({
  type: "UPDATE_DOCTOR_SUCCESS",
  payload: doctor,
});

export const updateDoctorFailure = () => ({
  type: "UPDATE_DOCTOR_FAILURE",
});

export const deleteDoctorStart = () => ({
  type: "DELETE_DOCTOR_START",
});

export const deleteDoctorSuccess = (id) => ({
  type: "DELETE_DOCTOR_SUCCESS",
  payload: id,
});

export const deleteDoctorFailure = () => ({
  type: "DELETE_DOCTOR_FAILURE",
});
