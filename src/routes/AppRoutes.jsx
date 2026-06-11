import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import PaymentSuccess from "../pages/PaymentSuccess";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes userRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoutes>
    )
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
