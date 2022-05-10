import React, { useState } from 'react'
import styled from 'styled-components'
import Search from '../features/search/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './components.css'

const Container = styled.div`
    align-items: flex-end;
    background-color: black;
    border: 2px black solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
  `
  const HomeDiv = styled.div`
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    width: 100%;
  `

  const SearchDiv = styled.div`
    align-items: flex-end;
    display: flex;
    height: 100%;
    width: 70%;
  `

  const SigninDiv = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
  `

  const CartDiv = styled.div`
    align-items: flex-end;
    display: flex;
    width: 100%;
  `

  const StyledLink = styled(Link)`
    background-color: rgba(0,0,0,0);
    border: none;
    color: white;
    flex: 1 100%;
    font-size: 100%;
    padding: 0;
    text-decoration: none;
  `

  const Img = styled.img`
    width: 50%;
  `


const Header = ()=> {
  const [sidebar, setSidebar] = useState(false)
  const handleSidebar = ()=> setSidebar(!sidebar)
  return (
    <Container>
      <div onClick={handleSidebar}>
        <MenuIcon style={{color: 'white', width: '100%'}}/>
      </div>
        <div className={!sidebar ? 'no-sideBar': ''} id='sideBarContainer'>
          <HomeDiv>
            <Img src='/beebeebarrylogo.jpg'/>
        </HomeDiv>
        <SigninDiv>
          <StyledLink onClick={handleSidebar} to='/'> 
            Home </StyledLink>
          <StyledLink onClick={handleSidebar} to='/Login'>
            Login
          </StyledLink>
          <StyledLink onClick={handleSidebar} to='/Signup'>
            Sign Up
          </StyledLink>
          <CartDiv>
            <StyledLink onClick={handleSidebar} to='/Cart'>
              <ShoppingCartIcon
                sx={{fontSize: 40}}
                style={{color: 'white',}}/>
            </StyledLink>
          </CartDiv>
        </SigninDiv>
      </div>
      <SearchDiv>
        <Search/>
      </SearchDiv>
    </Container>
  )
}

export default Header
