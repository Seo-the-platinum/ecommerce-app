import React from 'react'
import { useSelector } from 'react-redux'
import { products } from '../../utils/utils'

const Checkout = () => {
    const order = useSelector(state=> state.order.value)
    const products = useSelector(state=> state.items.value.payload)
    const items = order.map(o=> {
        const item = products.find(p=> p.id === o.id)
        return item
    })
    const total = items.reduce((prev, curr)=> prev + curr.price, 0)
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