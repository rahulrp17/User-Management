import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"; //

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import ViewUser from "./component/ViewUser";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/viewUser/:id" element={<ViewUser />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          // theme="colored"
        />{" "}
       
      </Router>
    </div>
  );
}

export default App;
