import React from 'react'
import styled from 'styled-components'

const Tile = (props)=> {
  const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin: 1%;
    width: 20%;
  `
  const Img = styled.img`
    display: flex;
    width: 100%;
  `
  const Label = styled.text`
    font-family: 'Courier New', monospace;
  `

  const Price = styled.text`
    font-weight: bold;
  `

  return (
    <Container>
      <Img src={`${props.source}`}/>
      <Label>
        {props.label}
      </Label>
      <Price>
        {props.price}
      </Price>
    </Container>
  )
}

export default Tile
