import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { setLanguage, showGptSearh } from "../store/appConfigSlice";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
  const { isGPTSearch } = useSelector((state) => state.appConfig);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="flex fixed justify-between px-4 w-full bg-gradient-to-b from-black z-40">
      <img className="w-40 " src={LOGO} alt="logo" />
      {currentUser && (
        <div className="flex items-center mr-4 text-white">
          {isGPTSearch && (
            <select
              onChange={handleLanguage}
              className="border-none px-4 py-2 mx-2 bg-black"
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="french">French</option>
            </select>
          )}
          <button
            onClick={() => dispatch(showGptSearh())}
            className="px-4 py-2 bg-white bg-opacity-50 text-black"
          >
            {isGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-10 mx-4" src={USER_AVATAR} alt="user" />
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
