import React, { useEffect, useState } from 'react'
import PrevOrder from './PrevOrder'
import { useParams } from 'react-router-dom'
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const PreviousOrders = () => {
  const { uid } = useParams()
  const ordersRef = doc(db, `users/${uid}`)
  const [orders, setOrders ] = useState([])
  
  useEffect(()=> {
    const getOrders = async ()=> {
      const orders = await getDoc(ordersRef)
      const orderIds = orders.data().orders
      let allOrders = []
      orderIds.forEach(async (id)=> {
        const orderRef = doc(db, `orders/${id}`)
        const orderObj = await getDoc(orderRef)
        const fullOrder = orderObj.data()
        allOrders.push(fullOrder)
      })
      console.log(allOrders)
      setOrders(allOrders)
    }
    getOrders()
  },[])
  console.log(orders)
  return (
    <div className='prevOrdersContainer'>

    </div>
  )
}

export default PreviousOrders