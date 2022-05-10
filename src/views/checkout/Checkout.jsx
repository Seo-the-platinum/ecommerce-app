import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const order = useSelector(state=> state.order.value)
    const products = useSelector(state=> state.items.value.payload)
    console.log('order here:', order)
    const items = order.map(o=> {
        const { amount } = o
        const item = products.find(p=> p.id === o.id)
        return {...item, amount}
    })
    const total = items.reduce((prev, curr)=> prev + (curr.price * curr.amount), 0)

  return (
    <div>
        {
            items.map(i=> {
                return (
                    <div>
                        <img src={i.source}/>
                        <p>{i.label}</p>
                        <p>{`$${i.price.toFixed(2)}`}</p>
                        <p>{i.amount}</p>
                    </div>
                )
            })
        }
        <h1>{`Total: $${total.toFixed(2)}`}</h1>
    </div>
  )
}

export default Checkout