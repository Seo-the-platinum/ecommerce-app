import React from 'react'
import Items from '../../features/item/Items'
import Display from '../../components/Display'
import './home.css'

const Home = ()=> {
  
  return (
    <div className="container" id='home'>
      <Items/>
      <Display/>
    </div>
  )
}

export default Home
