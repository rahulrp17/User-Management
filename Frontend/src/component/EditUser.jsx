import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [loading, setLoading] = useState(true);

  const { name, username, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`https://user-management-232q.onrender.com/user/${id}`);
      setUser(result.data);
      setLoading(false);
    } catch (err) {
      toast.error("Failed to load user details", err);
      setLoading(false);
    }
  };
  if(loading){
    return (
      <div className="container flex flex-col items-center justify-center text-center mt-5">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500" role="status"></div>
        <p className="mt-2">Loading user details...</p>
      </div>
    );
  }

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      toast.warn("Please fill in all fields.");
      return;
    }
    try {
      await axios.put(`https://user-management-232q.onrender.com/user/${id}`, user);
      toast.success("User updated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update user", error);
    }
  };

  const onCancel = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 border rounded p-4 shadow bg-white">
          <h2 className="text-center mb-4">Edit User</h2>
          <form onSubmit={onSubmit} onReset={onCancel}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter Your Username"
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
            <div className="d-flex justify-content-center mt-4 gap-2">
              <button className="btn btn-primary" type="submit">{loading ? "Updating..." : "Update"}</button>
              <button className="btn btn-outline-danger" type="reset">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
