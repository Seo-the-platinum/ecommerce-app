import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Profile from './components/Profile'
import User from './features/user/User'
import Header from './components/Header'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  display: flex;
  width: 100%
`

function App() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
