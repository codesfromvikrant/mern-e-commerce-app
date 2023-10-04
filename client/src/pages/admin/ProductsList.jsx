import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto bg-white p-4 my-4 rounded-md">
      <section className="flex justify-between items-center text-sm text-gray-800">
        <div className="flex justify-start items-center gap-2">
          <h3 className="text-2xl font-extrabold">Products</h3>
          <button
            onClick={() => navigate("./new-product")}
            className="bg-gray-300 font-medium py-2 px-4 rounded-md"
          >
            Add New
          </button>
        </div>
        <div className="flex justify-start items-center gap-2 w-max">
          <input
            type="text"
            placeholder="Write Product Name Here..."
            className="bg-gray-100 p-2 font-medium rounded-md border border-gray-300 outline-none w-64"
          />
          <button className="w-max font-medium p-2 rounded-md bg-gray-300">
            Search Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
