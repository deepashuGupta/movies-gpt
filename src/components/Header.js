import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";
import {
  setLanguage,
  setShowPopUp,
  showGptSearh,
} from "../store/appConfigSlice";
import Menu from "./Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector((state) => state.user);
  const { isGPTSearch } = useSelector((state) => state.appConfig);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user?.emailVerified) {
        const { email, displayName, uid } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const handleArrow = () => {
    const menuArrow = document.getElementById("menuArrow");
    if (showMenu) {
      menuArrow.style.transform = "rotate(0deg)";
    } else {
      menuArrow.style.transform = "rotate(180deg)";
    }
  };

  return (
    <>
      <div className="flex fixed justify-between px-4 w-full bg-gradient-to-b from-black z-40">
        <img
          onClick={() => {
            dispatch(showGptSearh(false));
            dispatch(setShowPopUp(false));
          }}
          className="w-40 cursor-pointer"
          src={LOGO}
          alt="logo"
        />
        {currentUser && (
          <div className="flex items-center mr-4 text-white">
            {/* {isGPTSearch && (
              <select
                onChange={handleLanguage}
                className="border-none px-4 py-2 mx-2 bg-black"
              >
                <option value="en">English</option>
                <option value="hindi">Hindi</option>
                <option value="french">French</option>
              </select>
            )} */}

            <img className="w-10 mx-4" src={USER_AVATAR} alt="user" />
            <span
              id="menuArrow"
              onClick={() => {
                setShowMenu(!showMenu);
                handleArrow();
              }}
              className="cursor-pointer transition ease-in-out duration-200"
            >
              <i className="fa-solid fa-caret-up"></i>
            </span>
          </div>
        )}
      </div>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;
