import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();



  // handle login with email password-------

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    setError('');
    setSuccess('')

  }


  // handle google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // handle github login ----------------
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // handle sign out----
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center mt-8">
      {user && (
        <div className="mt-6 flex flex-col items-center text-center">
          <h4 className="font-bold text-2xl">User: {user.displayName}</h4>
          <p className="text-semibold text-xl">Email: {user.email}</p>
          <img className="mt-4 w-48 h-48" src={user.photoURL} alt="" />
          <p className="text-green-500 text-2xl">{success}</p>
        </div>
      )}
      {user ? (
        <button
          onClick={handleSignOut}
          className="bg-red-500 px-6 py-3 rounded-lg mr-4 text-white font-bold mt-6"
        >
          Sign Out
        </button>
      ) : (
        <>
          <div className="w-1/2 mx-auto mb-6">
            <h3 className="text-2xl font-semibold  my-6">Please Login</h3>
            <form onSubmit={handleLogin}>
              
              <input
                className="w-1/2 mb-2 ps-2 py-2 border border-black"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <br />
              <input
                className="w-1/2 mb-2 ps-2 py-2 border border-black"
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
              <br />
              <p className="text-red-500">{error}</p>
              <input
                className="bg-blue-500 w-1/2 py-2 rounded-md cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
            
          </div>
          <button
            onClick={handleGoogleLogin}
            className="bg-emerald-500 px-6 py-3 rounded-lg mr-4 text-white font-bold "
          >
            Google login
          </button>
          <button
            onClick={handleGithubLogin}
            className="bg-black px-6 py-3 rounded-lg text-white font-bold "
          >
            Github login
          </button>
          <p className="mt-4 text-xl">
              New to this website? Please{" "}
              <Link to="/register" className="underline text-blue-500">
                Register
              </Link>
            </p>
        </>
      )}
    </div>
  );
};

export default Login;
