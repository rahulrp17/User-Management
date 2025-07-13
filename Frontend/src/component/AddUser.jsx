import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddUser.css';
import { toast } from "react-toastify";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:4040/user", user);
      toast.success("User added successfully");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const onCancel = () => {
    setUser({ name: "", username: "", email: "" });
    navigate("/");
  };

  return (
    <div className="add-user container d-flex justify-content-center align-items-center position-relative top-30">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div className="border rounded p-4 shadow bg-white">
            <h2 className="text-center mb-4">Register User</h2>
            <form onSubmit={onSubmit} onReset={onCancel}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter Your UserName"
                  value={username}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-center gap-2 mt-4">
                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-outline-danger" type="reset">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
