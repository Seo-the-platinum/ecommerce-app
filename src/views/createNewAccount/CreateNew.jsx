import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
            console.log(userCredential, userCredential.user)
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
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='email' value={email} onChange={handleEmail} required type='email'/>
            <input placeholder='password' value={password} onChange={handlePassword} required type='password'/>
            <input placeholder='re-enter password' value={verifiedPassword} onChange={handleVerifiedPassword} required type='password'/>
            <button>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default CreateNew