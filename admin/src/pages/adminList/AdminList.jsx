import "./adminList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { getAdmins, deleteAdmin } from "../../context/adminContext/apiCalls";
import { AdminContext } from "../../context/adminContext/AdminContext";

export default function AdminList() {
  const { admins, dispatch } = useContext(AdminContext);

  useEffect(() => {
    getAdmins(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteAdmin(id, dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "admin",
      headerName: "Admin",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="adminListUser">
            <img className="adminListImg" src={params.row.profilePic} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "isAdmin", headerName: "Active ", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/admin/" + params.row._id, admin: params.row}} >
              <button className="adminListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="adminListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="adminList">
      <DataGrid
        rows={admins}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
