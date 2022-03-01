import React from 'react'
import styled from 'styled-components'
import Search from '../features/search/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom'

const Header = ()=> {
  const navigate = useNavigate()

  const Container = styled.div`
    align-items: flex-end;
    background-color: black;
    border: 2px black solid;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    max-width: 100%;
  `
  const HomeDiv = styled.div`
    align-items: flex-end;
    display: flex;
    height: 100%;
    padding-left: 1%;
    width: 30%;
  `

  const SearchDiv = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
  `

  const SigninDiv = styled.div`
    align-items: flex-end;
    justify-content: center;
    display: flex;
    height: 100%;
    width: 30%;
  `

  const CartDiv = styled.div`
    width: 30%;
  `

  const StyledLink = styled(Link)`
    align-items: flex-end;
    background-color: rgba(0,0,0,0);
    border: none;
    color: white;
    display: flex;
    height: 100%;
    font-size: 100%;
    padding: 0;
    text-decoration: none;
    width: 20%;
  `

  const Img = styled.img`
    height: 100%;
  `
  const goToCart = ()=> {
    navigate('/Cart')
  }
  return (
    <Container>
      <HomeDiv>
        <Img src='/beebeebarrylogo.jpg'/>
        <StyledLink to='/'> Home </StyledLink>
      </HomeDiv>
      <SearchDiv>
        <Search/>
      </SearchDiv>
      <SigninDiv>
        <StyledLink to='/Login'>
          Login
        </StyledLink>
        <StyledLink to='/Signup'>
          Sign Up
        </StyledLink>
        <CartDiv onClick={()=> goToCart()}>
          <ShoppingCartIcon
            style={{color: 'white', width: '100%'}}/>
        </CartDiv>
      </SigninDiv>
    </Container>
  )
}

export default Header
