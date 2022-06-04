import React from 'react'
import { useSelector } from 'react-redux'
import {  addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { db } from '../../utils/firebase'

const Checkout = () => {
    const order = useSelector(state=> state.order.value)
    console.log(order)
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
    }
    console.log(order)
  return (
    <div>
        {
            items.map(i=> {
                return (
                    <div key={i.id}>
                        <img src={i.source}/>
                        <p>{i.label}</p>
                        <p>{`$${i.price.toFixed(2)}`}</p>
                        <p>{i.amount}</p>
                    </div>
                )
            })
        }
        <h1>{`Total: $${total.toFixed(2)}`}</h1>
        <button onClick={()=> updateOrder(uid, order)}>Checkout</button>
    </div>
  )
}

export default Checkout