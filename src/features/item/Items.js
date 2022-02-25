import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { updateItem } from './itemSlice'

const Items = ()=> {
  const item = useSelector(state=>state.item.value)
  const dispatch = useDispatch()

  const itemTypes = [
    'All',
    'Stickers',
    'Pins and Buttons',
    'Washi Tape',
  ]

  const Container = styled.div`
    border-right: solid 2px grey;
    border-bottom: solid 2px grey;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 15%;
  `
  const Section = styled.div`
    border-right: ${(props)=> props.dataKey === item.payload ? '2px solid black' : 'none'};
    border-bottom: ${(props)=> props.dataKey === item.payload && props.dataKey === 'All' ? '2px solid black' : 'none'};
    height: 20%;
    width: 100%;
  `

  return (
    <Container>
      {
        itemTypes.map(i=> {
          return (
            <Section
              key={i}
              dataKey={i}
              onClick={()=> dispatch(updateItem(i))}>
                <p>
                  {i}
                </p>
            </Section>
          )
        })
      }
    </Container>
  )
}

export default Items
