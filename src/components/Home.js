import React from 'react'
import styled from 'styled-components'
import Items from '../features/item/Items'
import Display from './Display'
const Home = ()=> {

  const Container = styled.div`
    display: flex;
    width: 100%;
  `
  return (
    <Container>
      <Items/>
      <Display/>
    </Container>
  )
}

export default Home
