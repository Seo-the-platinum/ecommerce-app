import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { updateItem } from './itemSlice'
import { updateSearch } from '../search/searchSlice'
import './items.css'

const Items = ()=> {
  const item = useSelector(state=> state.item.value)
  const [ selectedItem, setSelectedItem] = useState('All')
  const dispatch = useDispatch()

  const itemTypes = [
    'All',
    'Stickers',
    'Pins/Buttons',
    'Tape',
    'Prints',
    'Mousepads'
  ]

 
  const handleDispatch = (i)=> {
    dispatch(updateItem(i.toLowerCase()))
    dispatch(updateSearch(undefined))
    setSelectedItem(i)
  }
  return (
    <div className='itemsContainer'>
      {
        itemTypes.map(i=> {
          return (
            <div
              className={selectedItem === i ? 'itemsOption itemSelected' : 'itemsOption'}
              key={i}
              onClick={()=> handleDispatch(i)}>
                <p className='itemP'>
                  {i}
                </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Items
