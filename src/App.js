import './App.css';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateItems } from './features/firebaseItems/firebaseItemsSlice'
import Login from './views/login/Login'
import ItemPage from './views/itemPage/ItemPage'
import Header from './components/Header'
import Home from './views/home/Home'
import Cart from './views/cart/Cart'
import styled from 'styled-components'
import {
  Routes,
  Route } from 'react-router-dom'
import Checkout from './views/checkout/Checkout'
import { db } from "./utils/firebase"
import { collection, getDocs } from 'firebase/firestore'

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `

const App= ()=> {
  const dispatch = useDispatch()
  const itemsCollectionRef = collection(db, 'items')

  useEffect(()=> {
    const getItems = async ()=> {
      const data = await getDocs(itemsCollectionRef)
      dispatch(updateItems((data.docs.map((doc)=> ({...doc.data(), id: doc.id})))))
    }
    getItems()
  },[])
  
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ItemPage/:itemId' element={<ItemPage/>}/>
        <Route path='/Cart/' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
      </Routes>
    </Container>
  );
}

export default App;
