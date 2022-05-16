import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { updateItem } from './itemSlice'
import { updateSearch } from '../search/searchSlice'
import './items.css'

const Container = styled.div`
align-items: flex-end;
border-right: solid 2px grey;
border-bottom: solid 2px grey;
display: flex;
width: 100%;
`

const Items = ()=> {
  const item = useSelector(state=> state.item.value)
  const dispatch = useDispatch()

  const itemTypes = [
    'All',
    'Stickers',
    'Pins/Buttons',
    'Tape',
    'Prints',
    'Mousepads'
  ]

  const Section = styled.div`
    align-items:flex-end;
    border-right: ${(props)=> props.dataKey === item.payload ? '2px solid black' : 'none'};
    border-bottom: ${(props)=> props.dataKey === item.payload && props.dataKey === 'All' ? '2px solid black' : 'none'};
    justify-content: center;
    padding: 1%;
  `
  const handleDispatch = (i)=> {
    dispatch(updateItem(i.toLowerCase()))
    dispatch(updateSearch(undefined))
  }
  return (
    <div className='itemsContainer'>
      {
        itemTypes.map(i=> {
          return (
            <Section
              key={i}
              dataKey={i}
              onClick={()=> handleDispatch(i)}>
                <p style={{fontSize: '.75em', margin: 0}}>
                  {i}
                </p>
            </Section>
          )
        })
      }
    </div>
  )
}

export default Items
