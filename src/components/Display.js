import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import { useSelector } from 'react-redux'

const Display = ()=> {
  const item = useSelector(state=> state.item.value)
  const Container = styled.div`
    display: flex;
    width: 100%;
  `
  console.log(item.payload)
  return (
    <Container>
      {item.payload}
    </Container>
  )
}

export default Display
