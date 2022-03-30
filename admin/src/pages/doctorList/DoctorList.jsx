import "./doctorList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/doctorContext/DoctorContext";
import { deleteDoctor, getDoctors } from "../../context/doctorContext/apiCalls";

export default function DoctorList() {
  const { doctors, dispatch } = useContext(DoctorContext);

  useEffect(() => {
    getDoctors(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteDoctor(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 80 },
    {
      field: "doctor",
      headerName: "Doctor",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.lastName} {params.row.fistName} 
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "desc", headerName: "Description", width: 200 },
    { field: "gender", headerName: "Gender", width: 120 },
    { field: "speciality", headerName: "Specialilty", width: 200 },
    { field: "education", headerName: "Education", width: 200 },
    { field: "currentHospital", headerName: "Current Hospital", width: 170 },
    { field: "location", headerName: "Location", width: 170 },
    { field: "experience", headerName: "Experience", width: 120 },
    { field: "language", headerName: "Language", width: 170 },
    { field: "isActive", headerName: "Active", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/doctor/" + params.row._id, doctor: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={doctors}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
