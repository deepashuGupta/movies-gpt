import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopUp } from "../store/appConfigSlice";
import MovieInfo from "./MovieInfo";

const PopUp = () => {
  const showPopUp = useSelector((state) => state.appConfig.showPopUp);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        showPopUp ? "flex" : "hidden"
      } justify-center items-center fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm`}
    >
      <div className="w-[90vw] relative md:w-[80vw] bg-black p-2 mt-14 md:mt-0">
        <span
          onClick={() => dispatch(setShowPopUp(false))}
          className="absolute right-0 mr-4 cursor-pointer bg-white px-2 rounded-full"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </span>
        <MovieInfo />
      </div>
    </div>
  );
};

export default PopUp;
