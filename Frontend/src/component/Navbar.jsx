import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-primary justify-content-between ">
        <Link to="/" className="navbar-brand ml-2.5 ">
          User Management
        </Link>

        <Link className="btn btn-outline-light mr-2" to="/addUser">
          Add User
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
