import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import AdminList from "./pages/adminList/AdminList";
import Admin from "./pages/admin/Admin";
import NewAdmin from "./pages/newAdmin/NewAdmin";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import DoctorList from "./pages/doctorList/DoctorList";
import Doctor from "./pages/doctor/Doctor";
import NewDoctor from "./pages/newDoctor/NewDoctor";
// import ListList from "./pages/listList/ListList";
// import List from "./pages/list/List";
// import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route exact path="/">
          {user ? 
          <>
          <Topbar />
            <div className="container">
              <Sidebar />
                <Home /> 
            </div> 
          </> : <Login />
          //<Redirect to="/login" /> 
          }
        </Route>
        {/* {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                {user ? <Home /> : <Login />}
              </Route>
            </div>
          </>
        )} */}
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              {/* <Route exact path="/">
                <Home />
              </Route> */}
              <Route path="/admins">
                <AdminList />
              </Route>
              <Route path="/admin/:userId">
                <Admin />
              </Route>
              <Route path="/newAdmin">
                <NewAdmin />
              </Route>
              <Route path="/doctors">
                <DoctorList />
              </Route>
              <Route path="/doctor/:doctorId">
                <Doctor />
              </Route>
              <Route path="/newDoctor">
                <NewDoctor />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
