import React, { useEffect, useState } from 'react'
import Tile from './Tile'
import { useSelector } from 'react-redux'
import './components.css'

const Display = ()=> {
  const item = useSelector(state=> state.item.value)
  const search = useSelector(state=> state.search.value)
  const items = useSelector(state=> state.items.value.payload)
  const filteredSearch = items ? items.filter(p=> {
    if (search !== undefined) {
      if (p.label.toLowerCase().includes(search.payload)) {
        return p
      }
    }
  }) : null
  return (
    <div className='displayContainer'>
      { items ?
        filteredSearch.length > 0 ?
        filteredSearch.map(p=> {
         return <Tile key={p.id} product={p}/>})
        :
        items.map(p=> p.type === item ? 
          <Tile key={p.id} product={p}/>
        : item === 'all' ?
        <Tile key={p.id} product={p}/>
        : null
      ): null }
    </div>
  )
}

export default Display
