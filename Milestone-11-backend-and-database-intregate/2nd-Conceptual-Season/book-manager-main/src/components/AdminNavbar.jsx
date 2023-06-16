import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="nav flex-column bg-info " style={{ height: "100vh" }}>
      <Link to="/" className="nav-link active" aria-current="page">
        Home
      </Link>
      <Link to="/admin/dashboard" className="nav-link">
        DashBoard
      </Link>
      <Link to="/admin/dashboard/upload" className="nav-link">
        Upload book
      </Link>
      <Link to="/admin/dashboard/manage" className="nav-link">
        Manage Books
      </Link>
    </nav>
  );
};

export default AdminNavbar;
