import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSubmit = (event)=>{
        setSuccess('')
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,email,password)

        // password validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at last 1 uppercase')
            return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('Please add at last 1 numeric')
            return;
        }
        else if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError("Please add at last 1 special character")
            return;
        }
        
        // create user in firebase----------
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            event.target.reset()
            setSuccess('User has created successfully')
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.error(errorMessage)
            setError(errorMessage)
    
        })
    }
    return (
        <div className='w-1/2 mx-auto'>
            <h3 className='text-2xl font-semibold  my-6'>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-1/2 mb-2 ps-2 py-2 border border-black' type="text" name="name" id="name" placeholder='Your Name' required />
                <br />
                <input className='w-1/2 mb-2 ps-2 py-2 border border-black' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-1/2 mb-2 ps-2 py-2 border border-black' type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <p className='text-red-600 my-2'>{error}</p>
                <input className='bg-blue-500 w-1/2 py-2 rounded-md cursor-pointer' type="submit" value="Register" />
            </form>
           
            <p className='mt-4 text-xl'>Already have an account? Please <Link to='/login' className='underline text-blue-500' >Login</Link></p>
            <p className='text-2xl mt-4 text-green-500'>{success}</p>
            
        </div>
    );
};

export default Register;