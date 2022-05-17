import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

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

const Tile = (props)=> {
  const navigate = useNavigate()
  const {product} = props
  const goToItemPage =()=> {
    navigate(`/ItemPage/${product.id}`, {state: {img: product.source}})
  }
  return (
    <div className='tileContainer' onClick={goToItemPage}>
      <Img src={`${product.source}`}/>
      <Label>
        {product.label}
      </Label>
      <Price>
        {`$${product.price.toFixed(2)}`}
      </Price>
    </div>
  )
}

export default Tile
