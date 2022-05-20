import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/user/userSlice'
import { Link } from 'react-router-dom'
import './login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ()=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const auth = getAuth();
  const handleSubmit = (e)=> {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential)
        dispatch(login(user.uid))
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
  }

  const handleEmail = (e)=> {
    setEmail(e.target.value)
  }
  const handlePassword = (e)=> {
    setPassword(e.target.value)
  }
  return (
    <div className="container">
      <form className='form' onSubmit={handleSubmit}>
        <input className='input' type='email' onChange={handleEmail} placeholder='Username' value={email}/>
        <input className='input' type='password' onChange={handlePassword} placeholder='Password' value={password}/>
        <button className='login' type='submit'> Login</button>
        <Link className='forgotLink' to='/recovery'>
          Forgot password?
        </Link>
        <Link className='createLink' to='/CreateNew'>
          Create new account
        </Link>
      </form>
    </div>
  )
}

export default Login
