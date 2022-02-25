import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Profile from './components/Profile'
import User from './features/user/User'
import Header from './components/Header'
import Home from './components/Home'
import styled from 'styled-components'



function App() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
  `
  return (
    <Container>
      <Header/>
      <Home/>
    </Container>
  );
}

export default App;
