import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { errorImg } from "../utils/constant";

const Error = () => {
  const navigate = useNavigate();

  const handleGotoHomePage = () => {
    navigate("/");
  };
  const err = useRouteError();
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black backdrop-blur-sm bg-opacity-70">
      <div
        className={
          "relative w-[60vw] h-[45vh] text-white flex flex-col items-center justify-center"
        }
      >
        <img className="absolute -z-50 opacity-30" src={errorImg} alt="error" />
        <h1 className="text-3xl">Oooopppss...</h1>
        <p className="text-xl">Something Went Wrong</p>
        <p className="font-semibold text-red-500 my-2">
          {err.status} : {err.data}
        </p>
        <button onClick={handleGotoHomePage} className="px-4 py-2 bg-red-500">
          Go to HomePage
        </button>
      </div>
    </div>
  );
};

export default Error;
