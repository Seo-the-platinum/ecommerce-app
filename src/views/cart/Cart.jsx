import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { products } from '../../utils'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { removeItem } from '../../features/order/OrderSlice'
import { useNavigate } from 'react-router-dom'
import './cart.css'

const Cart = () => {
    const [items, updateItems]=useState([])
    const order = useSelector(state=> state.order.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=> {
        const itemsInCart = order.map(obj=> {
            const {amount}= obj
            const item = products.find(p=> p.id === obj.id)
            item['amount']=amount
            return item
        })
        updateItems(itemsInCart)
    },[order])

    const handleChange = (e) => {
       const updatedItems = items.map(i=> {
           if (i.label === e.target.name) {
               i.amount = e.target.value
           }
           return i
       })
        updateItems(updatedItems)
      }
    const handleDelete = (e)=> {
        const updatedItems = items.filter(i=> {
            return i.id !== e.target.value
        })
        updateItems(updatedItems)
        dispatch(removeItem(e.target.value))
    }
    
    const toCheckout = ()=> {
        navigate(`/Checkout`)
    }
  return (
    <div className='container'>
        Cart
        {
        items.map(item => {
            return (
            <div className='item'>
                <img src={item.source}/>
                <p>{item.label}</p>
                <p>{`$${item.price.toFixed(2)}`}</p>
                <FormControl fullWidth>
                    <InputLabel id='quantity-label'> 
                        Quantity 
                    </InputLabel>
                    <Select
                        id='quantity'
                        label='quantity'
                        labelId='quantity-label'
                        onChange={handleChange}
                        name={item.label}
                        value={item.amount ? item.amount: 1}
                        defaultValue={item.amount ? item.amount: 1}>
                        {
                            Array.from({length: item.count}, (v,i)=> i).map((i)=> {
                            return <MenuItem value={i ? i + 1: 1}>{i + 1} </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <div>
                    <Button onClick={handleDelete} value={item.id} >Remove</Button>
                </div>
            </div>
            )
        })
        }
        <div className="checkout">
            <Button onClick={toCheckout}> Checkout </Button>
        </div>
    </div>
  )
}

export default Cart