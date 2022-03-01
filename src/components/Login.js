import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top:5%;
  width: 100%;
`

const Form = styled.form`
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 4px gray;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  width: 100%;
`
const Input = styled.input`
  background-color: rgba(156, 219, 255);
  border: grey 1px solid;
  border-radius: 8px;
  height: 40px;
  margin-bottom: 2%;
  margin-top: 3%;
  width: 90%;
`
const Submit = styled(Input)`
  background-color: rgb(43, 149, 255);
  border: rgb(43, 149, 255) 1px solid;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  width: 90%;
`
const ForgotLink = styled(Link)`
  margin: 3%;
  margin-bottom: 10%;
  text-decoration: none;
`

const CreateLink = styled(Link)`
  background-color: rgb(39, 227, 117);
  border: none;
  border-radius: 8px;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin-bottom: 7%;
  padding: 3%;
  text-decoration: none;
  width: 40%;
`

const Login = ()=> {
  return (
    <Container>
      <Form>
        <Input type='text' name='Username' placeholder='Username'/>
        <Input type='text' name='Password' placeholder='Password'/>
        <Submit type='submit' value='Log In'/>
        <ForgotLink to='/recovery'>
          Forgot password?
        </ForgotLink>
        <CreateLink to='/Signup'>
          Create new account
        </CreateLink>
      </Form>
    </Container>
  )
}

export default Login
