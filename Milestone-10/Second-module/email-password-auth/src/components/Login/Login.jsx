import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app)

const Login = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        // validation
        setError('')
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at list 2 uppercase')
            return;
        }
        else if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError('Please add a special character ')
            return;
        }
        else if(password.length < 6){
            setError('Password must be 6 character')
            return;
        }
        
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            if(!loggedUser.emailVerified){

            }
            setSuccess('User login successful')
            setError('')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    //
    const handleResetPassword = (event)=>{
        const email = emailRef.current.value;
        if(!email){
            alert('please provide your email for reset password')
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Please check your email')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }

  return (
    <div  className="w-50 mx-auto">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input 
            type="email"
            className="form-control mb-2"
            placeholder="Enter email"
            name="email"
            ref={emailRef}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit" className="px-5 mt-2">
          Login
        </Button>
      </Form>
      <p className="mt-2 "><small>Forget Password? <button onClick={handleResetPassword} className="btn btn-link">Reset Password</button></small></p>
      <p><small>New to this website.Please <Link to='/register'>Register</Link></small></p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Login;
