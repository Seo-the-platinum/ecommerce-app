import React, { useEffect, useState } from 'react'
import PrevItem from './PrevItem'
import { useSelector } from 'react-redux'
import './previousOrders.css'

const getItems = (items=[], targetItems = [])=> {
    const purchasedItems = targetItems.map(i=> items.find(item=> item.id === i.id))
    return purchasedItems
}
const getTotal = (purchases=[]) => {
    console.log(purchases)
    if (purchases.length > 0 && purchases !==undefined) {
        const total = purchases.reduce((prev, curr)=> prev + (curr.price * curr.amount), 0)
        return total
    }
}

const PrevOrder = (props) => {
    const { order } = props
    const [ purchases, setPurchases ] = useState([])
    const items = useSelector(state=> state.items.value.payload)

    useEffect(()=> {
        const keys = (order)=> {
            const keysArr = Object.keys(order).filter(k=> k !== 'user' && k !== 'orderDate')
            const products = keysArr.map(k=> order[k])
            console.log(products)
            setPurchases(products)
        }
        keys(order)
    },[])
    const date = order.orderDate.toDate()
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
  return (
    <div className="prevOrderContainer">
        <div className="prevOrderHeader">
            <div className="prevOrderDate">
                <h3>ORDER PLACED</h3>
                <p>{`${month}/${day}/${year}`}</p>
            </div>
            <div className="prevOrderTotal">
                <h3>TOTAL</h3>
                <p>{getTotal(purchases) !== undefined && `$${getTotal(purchases).toFixed(2)}`}</p>
            </div>
            <div className="prevOrderUser">
                <h3>SHIP TO</h3>
                <p>user name to go here</p>
            </div>
        </div>
        <div className="prevItemsContainer">
            {
                getItems(items, purchases) !== undefined && getItems(items, purchases).map(i=> {
                    return (
                        <PrevItem item={i}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PrevOrder