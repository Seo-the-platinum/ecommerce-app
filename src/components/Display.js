import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import { useSelector } from 'react-redux'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
width: 100%;
`

const Display = ()=> {
  const item = useSelector(state=> state.item.value.payload)
  const search = useSelector(state=> state.search.value)
  const items = useSelector(state=> state.items.value.payload)
 
  const filteredSearch = items ? items.filter(p=> {
    if (search !== undefined) {
      if (p.label.toLowerCase().includes(search.payload)) {
        return p
      }
    }
  }) : null
  console.log(items, search, item)
  return (
    <Container>
      { items ?
        filteredSearch.length > 0 ?
        filteredSearch.map(p=> {
         return <Tile product={p}/>})
        :
        items.map(p=> p.type === item ? 
          <Tile product={p}/>
        : item === 'all' ?
        <Tile product={p}/>
        : null
      ): null }
    </Container>
  )
}

export default Display
