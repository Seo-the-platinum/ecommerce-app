import React from 'react'
import styled from 'styled-components'

const Tile = ()=> {
  const Container = styled.div`
    display:flex;
    width: 33%;
  `
  return (
    <Container>
      <text>
        Tile
      </text>
    </Container>
  )
}

export default Tile
