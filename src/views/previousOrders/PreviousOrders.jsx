import React, { useEffect, useState } from 'react'
import PrevOrder from './PrevOrder'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { updateOrders } from '../../features/prevOrders/PrevOrdersSlice'

const PreviousOrders = () => {
  const { uid } = useParams()
  const q = query(collection(db, 'orders'), where('user', '==', uid))
  const [orders, setOrders ] = useState([])
  const reduxOrders = useSelector(state=> state.prevOrders.value)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    let ordersList = []
    const getOrders = async ()=> {
      if (reduxOrders.length > 0) {
        setOrders(reduxOrders)
      } else {
        const orders = await getDocs(q)
        orders.forEach(doc=> {
          ordersList.push(doc.data())
        })
        
        const formattedOrders = ordersList.map(order=> {
          const orderDate = new Date(order.orderDate.toDate()).toLocaleDateString()
          return {
            ...order, orderDate
          }
        })
        setOrders(formattedOrders)
        dispatch(updateOrders(formattedOrders))
      }
    }
    getOrders()
  },[])
  return (
    <div className='prevOrdersContainer'>
      {orders.map((order, index)=> {
        return <PrevOrder key={index} order={order}/>
      })}
    </div>
  )
}

export default PreviousOrders