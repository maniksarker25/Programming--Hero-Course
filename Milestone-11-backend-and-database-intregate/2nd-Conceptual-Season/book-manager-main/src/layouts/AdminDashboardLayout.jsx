import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <div className="d-flex">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
