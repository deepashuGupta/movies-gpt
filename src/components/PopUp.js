import React from "react";

const PopUp = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm">
      <div className="w-[80vw] h-[550px] bg-white px-4 py-2">
        <span className="flex flex-row-reverse cursor-pointer ">
          <i className="fa-solid fa-circle-xmark text-3xl shadow-lg rounded-full"></i>
        </span>
        <h1>Movie description || WishList</h1>
      </div>
    </div>
  );
};

export default PopUp;
