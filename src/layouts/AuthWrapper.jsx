import React from "react";
import { Outlet } from "react-router-dom";
import AuthLayout from "./Auth";

const AuthWrapper = () => (
  <AuthLayout>
    <Outlet />
  </AuthLayout>
);

export default AuthWrapper;
