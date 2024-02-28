import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();
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
    <div className="flex justify-between px-4 absolute w-full bg-gradient-to-b from-black">
      <img
        className="w-40 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {currentUser && (
        <div className="flex items-center mr-4 text-white">
          <img
            className="w-10 mx-4"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="user"
          />
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
