import React, { useState } from "react";
import img from "../../assets/img1.jpg";
import LaptopList from "./LaptopList";
import Category from "../Category";
import Blog from "../Blog";
export default function Hero() {
  const img1 = "url('/src/assets/img1.jpg')";
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <div
        className="w-full md:bg-fixed bg-center bg-cover bg-no-repeat flex justify-center items-center h-[50vh] md:min-h-screen "
        style={{ backgroundImage: img1 }}
      >
        <h1 className="text-center text-white font-Montserrat font-bold text-3xl md:text-5xl lg:text-8xl ">
          Explore Refurbished Laptops
        </h1>
      </div>
      <div className="md:flex">
        {/* {width > 768 ? <Category /> : <></>} */}
        <Category />
        <LaptopList />
      </div>
      <Blog />

    </>
  );
}
