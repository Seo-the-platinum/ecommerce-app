import React from 'react'
import styled from 'styled-components'
import Items from '../../features/item/Items'
import Display from '../../components/Display'

const Home = ()=> {
  
  return (
    <div className="container">
      <Items/>
      <Display/>
    </div>
  )
}

export default Home
