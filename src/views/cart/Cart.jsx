import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { products } from '../../utils'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './cart.css'

const Cart = () => {
    const [items, updateItems]=useState([])
    const order = useSelector(state=> state.order.value)
    const itemsInCart = order.map(obj=> {
        const {amount}= obj
        const item = products.find(p=> p.id === obj.id)
        item['amount']=amount
        return item
    })
    const handleChange = (e) => {
        updateItems({
            value: e.target.value, 
            name: e.target.name
        })
      }
  return (
    <div className='container'>
        Cart
        {
        itemsInCart.map(item => {
            return (
            <div className='item'>
                <img src={item.source}/>
                <p>{item.label}</p>
                <p>{item.price}</p>
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
                        defaultValue={item.amount}>
                        {
                            Array.from({length: item.count}, (v,i)=> i).map((i)=> {
                            return <MenuItem value={i + 1}>{i + 1} </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <div>
                    <Button>Remove</Button>
                </div>
            </div>
            )
        })
        }
        <div className="checkout">
            <Button>
                Checkout
            </Button>
        </div>
    </div>
  )
}

export default Cart