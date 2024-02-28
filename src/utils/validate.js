const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const validateSignInForm = (email, password) => {
  let error = {};
  if (!emailRegex.test(email)) {
    error.email = "Email id is invalid";
  }
  if (!passwordRegex.test(password)) {
    error.password = "Password is invalid.";
  }
  return error;
};

export const validateSignUpForm = (name, email, password) => {
  let error = {};
  if (name.length < 3) {
    error.name = "Please provide full name";
  }
  if (!emailRegex.test(email)) {
    error.email = "Email id is invalid";
  }
  if (!passwordRegex.test(password)) {
    error.password =
      "Password must contains 1 uppercase, 1 lower case & special character.";
  }
  return error;
};
