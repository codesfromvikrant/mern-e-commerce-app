import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Admin = () => {
  return (
    <main className="flex justify-start items-start">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default Admin;
