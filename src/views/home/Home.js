import React from 'react'
import Items from '../../features/item/Items'
import Display from '../../components/Display'
import { useSelector } from 'react-redux'
import './home.css'

const Home = ()=> {
  const userId = useSelector(state=> state.user.value)
  return (
    <div className="container" id='home'>
      <Items/>
      <Display/>
    </div>
  )
}

export default Home
