import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { showGptSearh } from "../store/appConfigSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col z-50 text-white bg-gray-500 fixed right-0 mt-16 mr-8">
      <button
        onClick={() => dispatch(showGptSearh(true))}
        className="px-8 py-2 bg-black hover:bg-opacity-50"
      >
        GPT Search
      </button>
      <button className="px-8 py-2 bg-black hover:bg-opacity-50">
        Edit Profile
      </button>
      <button className="px-8 py-2 bg-black hover:bg-opacity-50">
        Wishlist
      </button>
      <button
        onClick={handleLogOut}
        className="px-8 py-2 bg-black hover:bg-opacity-50"
      >
        Log Out
      </button>
    </div>
  );
};

export default Menu;
