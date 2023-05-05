import React, { useContext, useState } from "react";
import "./Login.css";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { authContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(authContext);
    const [show,setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    // 
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate(from,{replace:true})
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type={show?'text':"password"} name="password" id="" required />
          <p className="show-password" onClick={()=>setShow(!show)}><small>
            {show?"Hide Password":"Show Password"}
            </small>
            </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="warn"><small>New to Ema-John? Please <Link to='/sign-up'>Sign Up</Link> </small></p>
    </div>
  );
};

export default Login;
