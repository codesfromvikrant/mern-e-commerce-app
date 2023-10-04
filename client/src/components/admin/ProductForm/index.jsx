import React, { useState } from "react";
import "./ProductForm.css";
import NoImage from "../../../assets/no-image.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProductForm } from "../../../features/productFormSlice";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const ProductForm = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [imageUpload, setImageUpload] = useState([]); // [file1, file2, file3]
  const { id } = useParams();

  useState(() => {
    if (!id) return;
    dispatch(updateProductForm({ name: "id", value: id }));
  }, [id]);

  const handleTaxCharge = () => {
    dispatch(
      updateProductForm({ name: "tax_charge", value: !product.tax_charge })
    );
  };

  const handleInStock = () => {
    dispatch(updateProductForm({ name: "in_stock", value: !product.in_stock }));
  };

  const filesUploaded = (e) => {
    const files = e.target.files;
    const maxImgToUpload = 5;

    if (imageUpload.length > maxImgToUpload) {
      alert("You can upload only 5 images");
      return;
    }
    setImageUpload([...imageUpload, ...files]);
    console.log(imageUpload);
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="col-span-2 font-medium text-slate-800">
        <div className="flex flex-col my-2">
          <label className="font-bold text-gray-700">Product Name</label>
          <input
            type="text"
            value={product.name}
            name=""
            onChange={(e) =>
              dispatch(
                updateProductForm({ name: "name", value: e.target.value })
              )
            }
            placeholder="Enter Product Name"
            className="border border-gray-300 p-2 rounded-md outline-1 outline-blue-300"
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="font-bold text-gray-700">Product Label</label>
          <textarea
            value={product.label}
            name="label"
            onChange={(e) =>
              dispatch(
                updateProductForm({ name: "label", value: e.target.value })
              )
            }
            placeholder="Enter Product Label"
            className="border border-gray-300 p-2 rounded-md w-full h-24 outline-1 outline-blue-300"
          ></textarea>
        </div>

        <div className="uploadOuter mt-4">
          <p className="font-bold text-gray-700 text-start">Product Images</p>
          <span className="dragBox">
            Darg & Drop image here to upload!
            <input
              type="file"
              accept="image/*"
              onChange={filesUploaded}
              // onDragOver="drag()"
              // onDrop="drop()"
              id="uploadFile"
            />
          </span>
        </div>

        <div className="my-2">
          <div className="flex justify-start items-center gap-2">
            <img
              src={NoImage}
              alt="no-image-available"
              className="w-32 border border-zinc-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col my-2">
          <label className="font-bold text-gray-700">Product Description</label>
          <ReactQuill
            value={product.description}
            modules={modules}
            formats={formats}
            placeholder="Start typing here..."
          />
        </div>
      </div>

      <div className="font-medium">
        <div className="flex flex-col my-2">
          <label className="font-bold text-gray-700">Product Price</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) =>
              dispatch(
                updateProductForm({ name: "price", value: e.target.value })
              )
            }
            placeholder="Product Price"
            className="border border-gray-300 p-2 rounded-md outline-1 outline-blue-300"
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="font-bold text-gray-700">Discount Price</label>
          <input
            type="number"
            value={product.discount}
            onChange={(e) =>
              dispatch(
                updateProductForm({ name: "discount", value: e.target.value })
              )
            }
            placeholder="Product Price"
            className="border border-gray-300 p-2 rounded-md outline-1 outline-blue-300"
          />
        </div>

        <div className="flex justify-between items-center gap-2 text-gray-700 font-semibold py-2 mt-3">
          <p className="font-bold">Charge On Tax</p>
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs text-gray-500 font-bold">No</span>
            <div
              onClick={handleTaxCharge}
              className={`p-1 flex ${
                product.tax_charge ? "justify-end" : "justify-start"
              } bg-gray-300 w-10 rounded-full`}
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-500 font-bold">Yes</span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2 text-gray-700 font-semibold py-2  border-t-[1px] border-gray-300">
          <p className="font-bold">In Stock</p>
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs text-gray-500 font-bold">No</span>
            <div
              onClick={handleInStock}
              className={`flex ${
                product.in_stock ? "justify-end" : "justify-start"
              } p-1 bg-gray-300 w-10 rounded-full`}
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-500 font-bold">Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
