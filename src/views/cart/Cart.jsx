import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { removeItem, updateItem } from '../../features/order/OrderSlice'
import { useNavigate } from 'react-router-dom'
import './cart.css'

const Cart = () => {
    const [items, updateItems ]=useState([])
    const order = useSelector(state=> state.order.value)
    const products = useSelector(state=> state.items.value.payload)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=> {
        if (order) {
            const itemsInCart = order.map(obj=> {
                const {amount}= obj
                const item = products.find(p=> p.id === obj.id)
                return {...item, amount}
            })
            updateItems(itemsInCart)
        }
    },[order])

    const handleChange = (e) => {
        const updatedItems = items.find(i=> i.label === e.target.name)
        updatedItems.amount = e.target.value
        dispatch(updateItem(updatedItems))
      }
    const handleDelete = (e)=> {
        console.log('target here:',e.target.value)
        const itemToDelete = e.target.value
        const updatedItems = items.filter(i=> {
            return i.id !== itemToDelete
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
            <div className='item' key={item.id}>
                <img src={item.source}/>
                <p>{item.label}</p>
                <p>{`$${item.price.toFixed(2)}`}</p>
                <FormControl fullWidth>
                    <InputLabel id='quantity-label'> 
                        Quantity 
                    </InputLabel>
                    <Select
                        id={item.id}
                        label='quantity'
                        labelId='quantity-label'
                        onChange={handleChange}
                        name={item.label}
                        value={item.amount ? item.amount: 1}
                        defaultValue={item.amount ? item.amount: 1}>
                        {
                            Array.from({length: item.quantity}, (v,i)=> i).map((i)=> {
                            return <MenuItem key={i} value={i ? i + 1: 1}>{i + 1} </MenuItem>
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