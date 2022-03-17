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
        filteredSearch.map(p=> <Tile
          count={p.count}
          id={p.id}
          label={p.label}
          price={p.price}
          source={p.source}/>)
        :
        products.map(p=> p.type === item.payload ?
        <Tile
          count={p.count}
          id={p.id}
          label={p.label}
          price={p.price}
          source={p.source}/>
        : item.payload === 'All' ?
        <Tile
          count={p.count}
          id={p.id} 
          label={p.label}
          price={p.price}
          source={p.source}/>
        : null
      )}
    </Container>
  )
}

export default Display
