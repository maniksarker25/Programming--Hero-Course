import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {

  const {signIn,signInGoogle} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        
        // sign in 
        signIn(email,password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset()
        })
        .catch(error=>{
          const errorMessage = error.message;
          console.log(errorMessage)
        })
        
    }
    // google sign in 
    const handleGoogleSignIn = ()=>{
        signInGoogle()
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .catch(error=>{
          const errorMessage = error.message;
          console.log(errorMessage)
        })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Login!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleGoogleSignIn} className="btn btn-primary mt-3">Sign in With Google</button>
              </div>
              <p>New to Auth? Please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
