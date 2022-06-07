import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from '@mui/material/Button'
import './createNew.css'

const CreateNew = () => {
    const [ email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifiedPassword, setVerifiedPassword] = useState('')
    const auth = getAuth();
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        if (password === verifiedPassword) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            });
        } else {
            console.log('Error, the passwords you entered did not match')
        }
    }

    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }

    const handlePassword = (e)=> {
        setPassword(e.target.value)
    }

    const handleVerifiedPassword = (e)=> {
        setVerifiedPassword(e.target.value)
    }
  return (
    <div className='createNewContainer'>
        <form className='formContainer' onSubmit={handleSubmit}>
            <input className='createNewFormInput' placeholder='email' value={email} onChange={handleEmail} required type='email'/>
            <input className='createNewFormInput' placeholder='password' value={password} onChange={handlePassword} required type='password'/>
            <input className='createNewFormInput' placeholder='re-enter password' value={verifiedPassword} onChange={handleVerifiedPassword} required type='password'/>
            <Button>
                Sign Up
            </Button>
        </form>
    </div>
  )
}

export default CreateNew