import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import BookMarkedBooks from "../pages/UserDashboard/BookMarkedBooks";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import Dashboard from "../pages/AdminDashboard/Dashboard";
import UploadBooks from "../pages/AdminDashboard/UploadBooks";
import ManageBooks from "../pages/AdminDashboard/ManageBooks";
import EditBooks from "../pages/AdminDashboard/EditBooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "details/:id", element: <BookDetails /> },
      {
        path: "/dashboard/user/bookmarked",
        element: <BookMarkedBooks />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <Dashboard></Dashboard> },
      { path: "/admin/dashboard/upload", element: <UploadBooks /> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      { path: "/admin/dashboard/edit-books", element: <EditBooks /> },
    ],
  },
]);

export default router;
