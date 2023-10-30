import React, { useContext } from "react";
import laptopData from "../json/laptop.json";
import Modal from "../utility/Modal";
import { LaptopContext } from "../context/Context";
export default function LaptopList() {
  const { modal, setModal, setProductDetail } = useContext(LaptopContext);
  const handleModal = (item) => {
    setProductDetail(item);
    setModal(true);
  };
  return (
    <div className="bg-gray-100 relative grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5  p-10 gap-5">
      <h1 className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-5 font-Poppins my-10 font-bold text-center text-5xl text-slate-700">
        Laptops
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      </h1>
      {laptopData.map((item, index) => (
        <div
          onClick={() => handleModal(item)}
          key={index}
          className="font-Poppins relative cursor-pointer shadow-lg flex flex-col bg-gray-200 "
        >
          <img src={item.image} className="" alt="" />
          <div className="flex flex-col px-10 py-5">
            <div className="font-medium">
              Name
              <span className="ml-2 text-teal-950 font-normal">
                {item.productName}
              </span>
            </div>
            <div className="font-medium">
              Price
              <span className="ml-2 text-teal-950 font-normal">
                $ {item.price}
              </span>
            </div>

            <div className="font-medium">
              Description
              <span className="ml-2 text-teal-950 font-normal">
                {item.description.split(" ").length > 15
                  ? item.description.slice(0, 50) + "..."
                  : item.description}
              </span>
            </div>
          </div>
        </div>
      ))}
      {modal ? <Modal /> : <></>}
    </div>
  );
}