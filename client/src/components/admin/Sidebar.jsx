import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidCartAlt } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiSolidLogOut } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-zinc-900 text-white w-max h-[100vh] p-4 flex justify-between flex-col items-start">
      <div>
        <div className="text-2xl text-white text-start">
          <p className="font-black uppercase tracking-wider">TrendyTrails</p>
          <p className="text-xs font-extralight tracking-wider text-gray-300">
            Walk In Trendy Elegance
          </p>
        </div>

        <nav className="mt-4 text-zinc-300 font-medium w-full grid grid-cols-1 gap-2">
          <NavLink
            to="/admin"
            className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md flex justify-start items-center gap-2"
          >
            <BiSolidDashboard className="text-xl" />
            <span> Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/products"
            className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md flex justify-start items-center gap-2"
          >
            <BiSolidCartAlt className="text-xl" />
            <span>Products</span>
          </NavLink>

          <NavLink
            to="/admin/categories"
            className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md flex justify-start items-center gap-2"
          >
            <BiSolidCategoryAlt className="text-xl" />
            <span>Categories</span>
          </NavLink>

          <NavLink
            to="/admin/customers"
            className="hover:bg-zinc-800 hover:text-white hover:p-3 transition-all duration-200 rounded-md flex justify-start items-center gap-2"
          >
            <FaUserAlt className="text-lg" />
            <span>Customers</span>
          </NavLink>
        </nav>
      </div>

      <button className="text-sm font-medium p-3 bg-zinc-800 rounded-md w-full text-cemter flex justify-center items-center gap-2">
        <BiSolidLogOut className="text-xl" />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
