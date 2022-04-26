import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import { useSelector } from 'react-redux'
import { products } from '../utils'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
width: 100%;
`

const Display = ()=> {
  const item = useSelector(state=> state.item.value)
  const search = useSelector(state=> state.search.value)
  const filteredSearch = products.filter(p=> {
    if (search !== undefined) {
      if (p.label.toLowerCase().includes(search.payload)) {
        return p
      }
    }
  })
  return (
    <Container>
      {
        filteredSearch.length > 0 ?
        filteredSearch.map(p=> {
         return <Tile product={p}/>})
        :
        products.map(p=> p.type === item.payload ? 
          <Tile product={p}/>
        : item.payload === 'All' ?
        <Tile product={p}/>
        : null
      )}
    </Container>
  )
}

export default Display
