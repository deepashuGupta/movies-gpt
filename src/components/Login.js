import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInForm, validateSignUpForm } from "../utils/validate";
import { auth } from "../utils/firebaseConfig";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const inputs = useRef({});
  const [errorMessage, setErrorMessage] = useState({});

  const handleSingInForm = () => {
    setIsSingInForm(!isSingInForm);
    setErrorMessage({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSingInForm) {
      let error = validateSignInForm(
        inputs.current.email.value,
        inputs.current.password.value
      );
      setErrorMessage(error);
    } else {
      let error = validateSignUpForm(
        inputs.current.name.value,
        inputs.current.email.value,
        inputs.current.password.value
      );
      setErrorMessage(error);
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-[100%] h-[100vh] bg-black opacity-40"></div>
      <div
        className="w-[350px] bg-black bg-opacity-70 text-white font-semibold px-10 py-8 absolute top-[50%] left-[50%]"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <p className="text-3xl py-4">{isSingInForm ? "Sign In" : "Sign Up"}</p>
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          {!isSingInForm && (
            <input
              ref={(e) => (inputs.current.name = e)}
              className="px-4 py-2 my-2 rounded-lg bg-gray-700"
              type="text"
              placeholder="Full Name"
            />
          )}
          {errorMessage.name && (
            <p className="text-xs text-red-400">{errorMessage.name}</p>
          )}
          <input
            ref={(e) => (inputs.current.email = e)}
            className="px-4 py-2 my-2 rounded-lg bg-gray-700"
            type="email"
            placeholder="Email Address"
          />
          {errorMessage.email && (
            <p className="text-xs text-red-400">{errorMessage.email}</p>
          )}
          <input
            ref={(e) => (inputs.current.password = e)}
            className="px-4 py-2 my-2 rounded-lg bg-gray-700"
            type="password"
            placeholder="Password"
          />
          {errorMessage.password && (
            <p className="text-xs text-red-400">{errorMessage.password}</p>
          )}
          <button
            type="submit"
            className="px-4 py-2 my-6 rounded-lg bg-red-700"
          >
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
              Sing In
            </strong>
          </p>
        )}
      </div>
      <img
        className="w-[100%] h-[100vh] object-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
    </div>
  );
};

export default Login;
