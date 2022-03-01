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
      <Routes>
        <Route exact path="/" element={[<Header/>, <Home/>]}/>
        <Route exact path='/Login' element={[<Header/>, <Login/>]}/>
        <Route path='/ItemPage' element={[<Header/>, <ItemPage/>]}/>
      </Routes>
    </Container>
  );
}

export default App;
