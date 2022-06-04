import React, { useEffect, useState } from 'react'
import PrevOrder from './PrevOrder'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { getOrders, updateOrders } from '../../features/prevOrders/PrevOrdersSlice'

const PreviousOrders = () => {
  const { uid } = useParams()
  const q = query(collection(db, 'orders'), where('user', '==', uid))
  const [orders, setOrders ] = useState([])
  const reduxOrders = useSelector(state=> state.prevOrders.value)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    let ordersList = []
    const getOrders = async ()=> {
      const orders = await getDocs(q)
      orders.forEach(doc=> {
        ordersList.push(doc.data())
      })
      setOrders(ordersList)
    }

    getOrders()
  },[])
  console.log(orders)
  return (
    <div className='prevOrdersContainer'>
      {orders.map(order=> {
        return <PrevOrder order={order}/>
      })}
    </div>
  )
}

export default PreviousOrders