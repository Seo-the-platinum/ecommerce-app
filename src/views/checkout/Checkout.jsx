import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { db } from '../../utils/firebase'
import Button from '@mui/material/Button'
import './checkout.css'

const Checkout = () => {
    const navigate = useNavigate()
    const order = useSelector(state=> state.order.value)
    const products = useSelector(state=> state.items.value.payload)
    const uid = useSelector(state=> state.user.value)
    const items = order ? order.map(o=> {
        const { amount } = o
        const item = products.find(p=> p.id === o.id)
        return {...item, amount,}
    }) : []
    const total = items.reduce((prev, curr)=> prev + (curr.price * curr.amount), 0)

    const updateOrder = async (uid, order) =>  {
        const data  = {...order, user: uid, orderDate: new Date()}
        const docRef = await addDoc(collection(db, 'orders'), data)
        const userOrdersRef = doc(db, `users/${uid}/`)
        await updateDoc(userOrdersRef, {orders: arrayUnion(docRef.id)})
        navigate('/')
    }
  return (
    <div className='checkoutContainer'>
        {
            items.map(i=> {
                return (
                    <div
                        className='checkoutItem'
                        key={i.id}>
                        <img className='checkoutImg' src={i.source}/>
                        <p>{i.label}</p>
                        <div className="checkoutItemPrice">
                            <p>{`$${i.price.toFixed(2)}`}</p>
                            <p>{`amount: ${i.amount}`}</p>
                        </div>
                    </div>
                )
            })
        }
        <div className="checkoutTotal">
            <h1>{`Total: $${total.toFixed(2)}`}</h1>
            <Button className='checkoutButton' onClick={()=> updateOrder(uid, order)}>Checkout</Button>
        </div>
    </div>
  )
}

export default Checkout