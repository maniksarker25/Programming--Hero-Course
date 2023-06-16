import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(authContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-center font-bold text-3xl">Login</h3>
            <form  onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>New to Website? Please <Link className="mt-4 text-blue-500" to='/signUp'>SignUp</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
