import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInForm, validateSignUpForm } from "../utils/validate";
import { auth } from "../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
// import { addUser } from "../store/userSlice";
// import { useDispatch } from "react-redux";
import { LOGIN_BACKGROUND } from "../utils/constant";
import toast from "react-hot-toast";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const inputs = useRef({});
  const [errorMessage, setErrorMessage] = useState({});
  const [userDetails, setUserDetails] = useState();
  // const dispatch = useDispatch();

  const handleSingInForm = () => {
    setIsSingInForm(!isSingInForm);
    setErrorMessage({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let email = inputs.current.email.value;
    let password = inputs.current.password.value;
    let error = {};
    if (isSingInForm) {
      error = validateSignInForm(email, password);
      setErrorMessage(error);
      if (Object.keys(error).length > 0) return;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          setErrorMessage({ userError: errCode + " - " + errMessage });
        });
    } else {
      error = validateSignUpForm(inputs.current.name.value, email, password);
      setErrorMessage(error);
      if (Object.keys(error).length > 0) return;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: inputs.current.name.value,
          }).then(() => {
            const user = auth.currentUser;
            let userObj = {
              uid: user?.uid,
              emailVerified: user?.emailVerified,
            };
            sendEmailVerification(user).then(() => {
              toast.success("Email Verification Link Sent Successfully.");
              setUserDetails(userObj);
            });
            // const { uid, email, displayName } = user;
            // dispatch(
            //   addUser({ uid: uid, email: email, displayName: displayName })
            // );
          });
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          setErrorMessage({ userError: errCode + " - " + errMessage });
        });
    }
  };

  return (
    <div className="fixed md:relative">
      <Header />
      <div className="absolute w-[100%] h-[100vh] bg-black opacity-40"></div>
      <div
        className="w-[350px] bg-black bg-opacity-70 text-white font-semibold px-10 py-8 absolute top-[50%] left-[50%]"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        {userDetails?.uid && !userDetails.emailVerified ? (
          <p>
            <i className="fa-solid fa-envelope-circle-check mr-4"></i>
            Verification Email has been sent to Your Mail. Please Verify You
            Emial.{" "}
          </p>
        ) : (
          <>
            <p className="text-3xl py-4">
              {isSingInForm ? "Sign In" : "Sign Up"}
            </p>
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              {!isSingInForm && (
                <input
                  ref={(e) => (inputs.current.name = e)}
                  className="px-4 py-2 my-2 bg-gray-700"
                  type="text"
                  placeholder="Full Name"
                />
              )}
              {errorMessage.name && (
                <p className="text-xs text-red-400">{errorMessage.name}</p>
              )}
              <input
                ref={(e) => (inputs.current.email = e)}
                className="px-4 py-2 my-2 bg-gray-700"
                type="email"
                placeholder="Email Address"
              />
              {errorMessage.email && (
                <p className="text-xs text-red-400">{errorMessage.email}</p>
              )}
              <input
                ref={(e) => (inputs.current.password = e)}
                className="px-4 py-2 my-2  bg-gray-700"
                type="password"
                placeholder="Password"
              />
              {errorMessage.password && (
                <p className="text-xs text-red-400">{errorMessage.password}</p>
              )}
              {errorMessage.userError && (
                <p className="text-xs text-red-400">{errorMessage.userError}</p>
              )}
              <button type="submit" className="px-4 py-2 my-6 bg-red-700">
                {isSingInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>
            {isSingInForm ? (
              <p>
                Don't have accout?{" "}
                <strong onClick={handleSingInForm} className="cursor-pointer">
                  Sing Up
                </strong>
              </p>
            ) : (
              <p>
                Already a user?{" "}
                <strong onClick={handleSingInForm} className="cursor-pointer">
                  Sign In
                </strong>
              </p>
            )}
          </>
        )}
      </div>
      <img
        className="w-[100%] h-[100vh] object-cover "
        src={LOGIN_BACKGROUND}
        alt="background"
      />
    </div>
  );
};

export default Login;
