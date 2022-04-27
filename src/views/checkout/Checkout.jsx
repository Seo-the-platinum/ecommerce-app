import React from 'react'
import { useSelector } from 'react-redux'
import { products } from '../../utils'

const Checkout = () => {
    const order = useSelector(state=> state.order.value)
    const items = order.map(o=> {
        const item = products.find(p=> p.id === o.id)
        return item
    })
    
  return (
    <div>
        {
            order.map(i=> {
                return (
                    <div>
                        <p>{i.label}</p>
                        <p>{i.price}</p>
                        <p>{i.amount}</p>
                    </div>
                )
            })
        }
        <h1>total:</h1>
    </div>
  )
}

export default Checkout