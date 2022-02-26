import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import { useSelector } from 'react-redux'
import { products } from '../utils'

const Display = ()=> {
  const item = useSelector(state=> state.item.value)
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `
  return (
    <Container>
      {products.map(p=> p.type === item.payload ?
        <Tile price={p.price} label={p.label} count={p.count} source={p.source}/>
        : item.payload === 'All' ?
        <Tile price={p.price} label={p.label} count={p.count} source={p.source}/>
        : null
      )}
    </Container>
  )
}

export default Display
