import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ()=> {
  const Container = styled.div`
    align-items: flex-end;
    background-color: black;
    border: 2px black solid;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    width: 100%;
  `
  const HomeDiv = styled.div`
    align-items: flex-end;
    display: flex;
    height: 100%;
    width: 20%;
  `
  const SigninDiv = styled.div`
    align-items: flex-end;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-right: 2%;
    width: 20%;
  `

  const Button = styled.button`
    align-items: flex-end;
    background-color: rgba(0,0,0,0);
    border: none;
    color: white;
    display: flex;
    height: 100%;
    font-size: 24px;
  `
  const Img = styled.img`
    height: 100%;
  `
  return (
    <Container>
      <HomeDiv>
        <Img src='/beebeebarrylogo.jpg'/>
        <Button onClick={()=> console.log('Home')}>
          Home
        </Button>
      </HomeDiv>
      <Search/>
      <SigninDiv>
        <Button onClick={()=> console.log('Login')}>
          Login
        </Button>
        <Button onClick = {()=> console.log('Sign up')}>
          Sign Up
        </Button>
        <Button>
          <ShoppingCartIcon/>
        </Button>
      </SigninDiv>
    </Container>
  )
}

export default Header
