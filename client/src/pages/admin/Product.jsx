import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import ProductForm from "../../components/admin/ProductForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCRUD = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);

  const publishProduct = (e) => {
    e.preventDefault();
    console.log(product);
  };
  const deleteProduct = () => {};
  const saveDraft = () => {};

  return (
    <form
      method="POST"
      encType="multipart/form-data"
      className="max-w-6xl mx-auto bg-white p-4 my-4 rounded-md"
    >
      <section className="flex justify-between items-center text-sm text-gray-800">
        <button
          onClick={() => navigate("../products")}
          className="flex justify-start items-center gap-2 p-2 bg-gray-300 rounded-md transition-all duration-300 hover:shadow-md "
        >
          <IoArrowBackCircle className="text-xl" />
          <span className="font-medium">Go Back</span>
        </button>

        <div className="flex justify-start items-center gap-3 font-medium">
          <button className="bg-gray-300 p-2 rounded-md transition-all duration-300 hover:shadow-md ">
            Delete Product
          </button>

          <button className="bg-gray-300 p-2 rounded-md transition-all duration-300 hover:shadow-md ">
            Save Draft
          </button>

          <button
            onClick={publishProduct}
            className="bg-blue-500 text-white p-2 rounded-md transition-all duration-300 hover:shadow-md "
          >
            Publish Product
          </button>
        </div>
      </section>

      <ProductForm />
    </form>
  );
};

export default ProductCRUD;
