import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { DoctorContextProvider } from "./context/doctorContext/DoctorContext";
import { AdminContextProvider } from "./context/adminContext/AdminContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DoctorContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </DoctorContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
