import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
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

  return (
    <div className="flex justify-between px-4 absolute w-full bg-gradient-to-b from-black z-40">
      <img className="w-40 " src={LOGO} alt="logo" />
      {currentUser && (
        <div className="flex items-center mr-4 text-white">
          <img className="w-10 mx-4" src={USER_AVATAR} alt="user" />
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
