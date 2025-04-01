import React from 'react'

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-screen px-8 py-5 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header