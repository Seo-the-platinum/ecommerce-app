import React, { useEffect, useState } from 'react'
import Tile from './Tile'
import { useSelector } from 'react-redux'
import './components.css'

const Display = ()=> {
  const item = useSelector(state=> state.item.value)
  const search = useSelector(state=> state.search.value)
  const items = useSelector(state=> state.items.value.payload)

  const filteredSearch = items && items.filter(p=> {
    if (search !== undefined) {
      if (p.label.toLowerCase().includes(search.payload)) {
        return p
      }
    }
  })
  console.log('items here:', item)
  return (
    <div className='displayContainer'>
      { items ?
        filteredSearch.length > 0 ?
        filteredSearch.map(p=> {
         return <Tile key={p.id} product={p}/>})
        :
        !items.find(i=> i.type === item) && item !== 'all' ? <h3>Sorry, no products in stock</h3>
        :
        items.map(p=> p.type === item ? 
          <Tile key={p.id} product={p}/>
        : item === 'all' &&
        <Tile key={p.id} product={p}/>
      ) : null
      }
    </div>
  )
}

export default Display
