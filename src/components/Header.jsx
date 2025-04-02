import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-screen px-8 py-5 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header