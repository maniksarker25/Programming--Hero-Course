import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const Register = () => {
    // const [email,setEmail] = useState('')
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');


    const handleSubmit = (event) =>{
        // prevent for refresh with out loading
        event.preventDefault();
        setSuccess('')
        setError('');
        // collect form data -----------
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(name,email,password)
        // create user in firebase-------
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            if (!/(?=.*[A-Z])/.test(password)) {
                setError('Please add at least one uppercase');
                return;
            }
            else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
                setError('Please add at least two numbers');
                return
            }
            else if (password.length < 6) {
                setError('Please add at least 6 characters in your password')
                return;
            }
    
            setError('')
            event.target.reset();
            setSuccess('User has created successfully')
           handleSendEmailVerification(result.user)
           updateUserData(result.user, name)
        })
        .catch(error=>{
            setError(error.message)
            console.error(error);
            
            
           
        })
    }
    const handleSendEmailVerification = (user) =>{
        sendEmailVerification(user)
        .then(result=>{
            console.log(result);
            alert('Please verify your email address')
        })
    }
    const updateUserData = (user,name)=>{
        updateProfile(user,{
            displayName: name
        })
        .then(()=>{
            console.log('user name update')
        })
        .catch((error)=>{
            setError(error.message)
        })
    }

    const handleEmailChange = (event) =>{
        // console.log(event.target.value)
        // setEmail(event.target.value)
    }
    const handlePasswordBlur = (event)=>{
        // console.log(event.target.value)
    }
    return (
        <div className='mx-auto w-50'>
            <h3>
               Please Register
            </h3>
            <form onSubmit={handleSubmit} >
                <input className='w-50 mb-3 ps-2 '  type="text" name="name" id="name" placeholder='Your Name' required/>
                <br />
                <input className='w-50 mb-3 ps-2 ' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br />
                <input className='w-50 mb-3  ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password"  placeholder='Your Password' required/>
                <p className='text-danger'>{error}</p>
                <input className='w-50 mb-3 btn btn-primary' type="submit" value="Register" />
            </form>
            <p><small>Already have an account?Please<Link to='/login'>Login</Link></small></p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;