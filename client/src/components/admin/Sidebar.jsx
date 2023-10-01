import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-zinc-900 text-white w-[15rem] h-[100vh] p-4">
      <div className="text-2xl font-black tracking-wider text-start uppercase text-gray-200">
        <span>TrendyTrails</span>
      </div>

      <nav className="mt-4 text-zinc-400 font-medium w-full grid grid-cols-1 gap-2">
        <NavLink
          to="/admin"
          className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md"
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/categories"
          className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md"
        >
          Categories
        </NavLink>

        <NavLink
          to="/admin/customers"
          className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md"
        >
          Customers
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
