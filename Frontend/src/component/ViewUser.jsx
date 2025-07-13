import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await axios.get(`http://localhost:4040/user/${id}`);
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load user data",err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading user details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger">{error}</div>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 border rounded p-4 shadow bg-white">
          <h2 className="text-center mb-4">View User</h2>
          <div className="card">
            <div className="card-header text-muted fw-semibold">
              Details of user ID: {id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Name:</b> {user.name}</li>
              <li className="list-group-item"><b>Username:</b> {user.username}</li>
              <li className="list-group-item"><b>Email:</b> {user.email}</li>
            </ul>
          </div>
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
