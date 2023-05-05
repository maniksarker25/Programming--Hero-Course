import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";
const SignUp = () => {

    const [error,setError] = useState('');
    const {createUser} = useContext(authContext)

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email,password,confirmPassword)
        setError('')
        if(password !== confirmPassword){
            setError('Your password did not match')
            return;
        }
        if(password.length <6){
            setError('Password must be 6 character longer')
            return;
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)
        })
    }
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <p className="error-text">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="warn"><small>Already have an account? <Link to='/login'>Login</Link> </small></p>
      
    </div>
  );
};

export default SignUp;
