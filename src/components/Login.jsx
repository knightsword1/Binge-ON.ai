import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  // A state variable to toggle sign in <-> sign up form

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Header */}
      <Header />

      {/* SignIn Form and SignUp Form */}

      {isSignInForm ? (<div className="flex items-center justify-center h-screen">
        <form className="absolute scale-110 w-96 p-10 bg-black/50 text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-5">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 mb-3 border-1 rounded "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border-1 rounded focus:outline-none"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-white font-semibold transition duration-300 cursor-pointer">
            Sign In
          </button>
          <div className="flex items-center justify-center p-2 text-gray-300">OR</div>
          <button className="w-full bg-[#3d3d3d] hover:bg-[#2A2C2C] p-2 rounded text-white font-semibold transition duration-300 cursor-pointer">
            Use a sign-in code
          </button>
          <div className="flex justify-between mt-3 text-sm text-gray-400">
            <label>
              <input type="checkbox" className="mr-2 cursor-pointer" /> Remember me
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
          <p className="mt-5 text-gray-400">
            New to Netflix? <a href="#" className="text-white hover:underline" onClick={toggleForm}>Sign up now.</a>
          </p>
        </form>
      </div>) : (<div className="flex items-center justify-center h-screen">
        <form className="absolute scale-110 w-100 p-10 bg-neutral-800/10 backdrop-blur-lg text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-5">Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-3 border-1 rounded-xl my-2"
          />
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 mb-3 border-1 rounded-xl my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border-1 focus:outline-none rounded-xl my-2"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 p-2 text-white font-semibold transition duration-300 cursor-pointer rounded-xl my-2">
            Get Started
          </button>
          <p className='my-4 text-gray-400'>Ready to Watch? <a href="#" className='text-white hover:underline' onClick={toggleForm}> Sign In </a> to your account </p>

        </form>
      </div>)




      }
    </div>
  );
};

export default Login