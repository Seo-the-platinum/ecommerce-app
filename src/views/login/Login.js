import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../features/user/userSlice'
import { Link } from 'react-router-dom'
import './login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = ()=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()
  const handleSubmit = (e)=> {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(login(user.uid))
        navigate('/')
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
    <div className="loginContainer">
      <form className='loginForm' onSubmit={handleSubmit}>
        <input className='loginInput' type='email' onChange={handleEmail} placeholder='Username' value={email}/>
        <input className='loginInput' type='password' onChange={handlePassword} placeholder='Password' value={password}/>
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
