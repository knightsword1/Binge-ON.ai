import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { clearGptSlice, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get the user from the store
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    // on sign out navigate to "/" page

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
    if (showGptSearch) dispatch(clearGptSlice());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-screen px-8 py-5 bg-gradient-to-b from-gray-800 z-20 flex flex-col md:flex-row justify-between items-center">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Binge-ON Logo" />
      <div className="flex justify-between items-center">
        {showGptSearch && (
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleGPTSearchClick}
          className="cursor-pointer mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            {showGptSearch ? "Home Page" : "GPT Search"}
          </span>
        </button>
        <div className="relative group inline-block">
          <img
            src={user?.photoURL}
            className="w-12 -h-12 mx-4 cursor-pointer"
          />
          <div className="absolute top-full mt-2 p-2 bg-slate-400 rounded shadow text-sm z-10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            <div>
              <strong>User:</strong> {user?.displayName}
            </div>
            <div>
              <strong>Email:</strong> {user?.email}
            </div>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="cursor-pointer mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-300 via-red-400 to-red-500 group-hover:from-red-300 group-hover:via-red-400 group-hover:to-red-500 dark:text-white dark:hover:text-gray-900 focus:ring-1 focus:outline-none focus:ring-red-100 dark:focus:ring-red-500"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Sign Out
          </span>
        </button>
      </div>
    </div>
  );
};

export default BrowseHeader;
