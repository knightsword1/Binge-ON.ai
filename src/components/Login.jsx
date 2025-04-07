import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  // A state variable to toggle sign in <-> sign up form

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleForm = () => {
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (!isSignInForm && name.current) {
      name.current.value = "";
    }
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data (For Sign In and Sign Up form data)

    const message = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );

    setErrorMessage(message);

    if (message) return;

    //Sign In Sign Up Logic

    if (!isSignInForm) {
      // Sign Up Form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // Now dispatch the action
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In Form

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-full object-cover">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={BG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Header */}
      <Header />

      {/* SignIn Form and SignUp Form */}

      {isSignInForm ? (
        <div className="flex items-center justify-center h-screen">
          <form className="absolute scale-110 w-96 p-10 bg-black/50 text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-5">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="w-full p-3 mb-3 border-1 rounded "
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 border-1 rounded focus:outline-none"
            />
            <p className="p-2 font-bold text-red-500">{errorMessage}</p>
            <button
              className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-white font-semibold transition duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
            >
              Sign In
            </button>
            <div className="flex items-center justify-center p-2 text-gray-300">
              OR
            </div>
            <button className="w-full bg-[#3d3d3d] hover:bg-[#2A2C2C] p-2 rounded text-white font-semibold transition duration-300 cursor-pointer">
              Use a sign-in code
            </button>
            <div className="flex justify-between mt-3 text-sm text-gray-400">
              <label>
                <input type="checkbox" className="mr-2 cursor-pointer" />{" "}
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <p className="mt-5 text-gray-400">
              New to Netflix?{" "}
              <a
                href="#"
                className="text-white hover:underline"
                onClick={toggleForm}
              >
                Sign up now.
              </a>
            </p>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <form className="absolute scale-110 w-100 p-10 bg-neutral-800/10 backdrop-blur-lg text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-5">Sign Up</h2>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-3 border-1 rounded-xl my-2"
            />
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="w-full p-3 mb-3 border-1 rounded-xl my-2"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 border-1 focus:outline-none rounded-xl my-2"
            />

            <p className="p-2 font-bold text-red-500">{errorMessage}</p>

            <button
              className="w-full bg-red-600 hover:bg-red-700 p-2 text-white font-semibold transition duration-300 cursor-pointer rounded-xl my-2"
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
            >
              Get Started
            </button>
            <p className="my-4 text-gray-400">
              Ready to Watch?{" "}
              <a
                href="#"
                className="text-white hover:underline"
                onClick={toggleForm}
              >
                {" "}
                Sign In{" "}
              </a>{" "}
              to your account{" "}
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
