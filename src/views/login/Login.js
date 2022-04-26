import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './login.css'

const Login = ()=> {
  return (
    <div className="container">
      <form className='form'>
        <input className='input' type='text' name='Username' placeholder='Username'/>
        <input className='input' type='text' name='Password' placeholder='Password'/>
        <input className='login' type='submit' value='Log In'/>
        <Link className='forgotLink' to='/recovery'>
          Forgot password?
        </Link>
        <Link className='createLink' to='/Signup'>
          Create new account
        </Link>
      </form>
    </div>
  )
}

export default Login
