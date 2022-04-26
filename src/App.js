import logo from './logo.svg';
import './App.css';
import Login from './views/login/Login'
import ItemPage from './views/itemPage/ItemPage'
import Profile from './components/Profile'
import User from './features/user/User'
import Header from './components/Header'
import Home from './views/home/Home'
import Cart from './views/cart/Cart'
import styled from 'styled-components'
import {
  Routes,
  Route } from 'react-router-dom'

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `

function App() {
  
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ItemPage/:itemId' element={<ItemPage/>}/>
        <Route path='/Cart/' element={<Cart/>}/>
      </Routes>
    </Container>
  );
}

export default App;
