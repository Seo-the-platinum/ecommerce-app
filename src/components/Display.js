import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import { useSelector } from 'react-redux'
import { products } from '../utils'

const Display = ()=> {
  const item = useSelector(state=> state.item.value)
  const search = useSelector(state=> state.search.value)

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
  `

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
        filteredSearch.map(p=> <Tile price={p.price} label={p.label} count={p.count} source={p.source}/>)
        :
        products.map(p=> p.type === item.payload ?
        <Tile
          price={p.price}
          label={p.label}
          count={p.count}
          source={p.source}/>
        : item.payload === 'All' ?
        <Tile price={p.price} label={p.label} count={p.count} source={p.source}/>
        : null
      )}
    </Container>
  )
}

export default Display
