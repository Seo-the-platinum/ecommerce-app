import React from 'react'
import { useSelector } from 'react-redux'
import { getDatabase, ref, child, push, update } from "firebase/database";

const Checkout = () => {
    const order = useSelector(state=> state.order.value)
    const products = useSelector(state=> state.items.value.payload)
    const uid = useSelector(state=> state.user.value)
    const items = order ? order.map(o=> {
        const { amount } = o
        const item = products.find(p=> p.id === o.id)
        return {...item, amount}
    }) : []
    const total = items.reduce((prev, curr)=> prev + (curr.price * curr.amount), 0)

    const updateOrder = (uid, order) =>  {
        const db = getDatabase();
        const newOrderKey = push(child(ref(db), 'orders')).key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        console.log(db)
        const updates = {};
        updates['/orders/' + newOrderKey] = order;
        updates['/users/' + uid + '/orders/' + newOrderKey] = order;
        return update(ref(db), updates).then(data=> {console.log(data)}).catch((err)=> {console.log(err)})
        }
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