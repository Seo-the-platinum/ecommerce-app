import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import ItemPage from './components/ItemPage'
import Profile from './components/Profile'
import User from './features/user/User'
import Header from './components/Header'
import Home from './components/Home'
import styled from 'styled-components'
import {
  Routes,
  Route } from 'react-router-dom'

function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ItemPage' element={<ItemPage/>}/>
      </Routes>
    </Container>
  );
}

export default App;
