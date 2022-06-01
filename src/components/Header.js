import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Search from '../features/search/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './components.css'

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
  const navigate = useNavigate()
  const uid = useSelector(state=> state.user.value)
  const handleSidebar = ()=> {
    setSidebar(prev=> !prev)
  }
  const goToPrev = ()=> {
    navigate(`/PreviousOrders/${uid}`)
  }
  return (
    <div className='headerContainer'>
      <div onClick={handleSidebar}>
        <MenuIcon style={{color: 'white', width: '100%'}}/>
      </div>
        <div className={!sidebar ? 'no-sideBar': ''} id='sideBarContainer'>
          <div className='headerHomeDiv'>
              <Img src='/beebeebarrylogo.jpg'/>
          </div>
          <SigninDiv>
          <StyledLink onClick={handleSidebar} to='/'> 
            Home </StyledLink>
          <StyledLink onClick={handleSidebar} to='/Login'>
            Login
          </StyledLink>
          <StyledLink onClick={handleSidebar} to='/Signup'>
            Sign Up
          </StyledLink>
           <button onClick={()=>{
            handleSidebar()
            goToPrev()
            }}>
            Order History
          </button>
          <CartDiv>
            <StyledLink onClick={handleSidebar} to='/Cart'>
              <ShoppingCartIcon
                sx={{fontSize: 40}}
                style={{color: 'white',}}/>
            </StyledLink>
          </CartDiv>
        </SigninDiv>
      </div>
      <div className='headerSearchDiv'>
        <Search/>
      </div>
    </div>
  )
}

export default Header
