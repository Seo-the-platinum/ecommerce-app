import React from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'

const Tile = (props)=> {
  const navigate = useNavigate()

  const Container = styled.div`
    align-items: center;
    display:flex;
    flex-direction: column;
    height: 50%;
    margin: 1%;
    width: 20%;
    &:hover {
       box-shadow: 0 0 10px #ccc;
       border-radius: 10px;
    }
  `
  const Img = styled.img`
    display: flex;
    margin-top: 5%;
    max-width: 90%;
  `
  const Label = styled.p`
    font-family: 'Courier New', monospace;
    text-align: center;
  `

  const Price = styled.p`
    font-weight: bold;
  `
  const goToItemPage =()=> {
    navigate(`/ItemPage/${props.id}`, {state: {img: props.source}})
  }
  return (
    <Container onClick={goToItemPage}>
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
