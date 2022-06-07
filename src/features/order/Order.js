import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, updateItem } from './OrderSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Order = props => {
  const [amount, setAmount] = useState(1)
  const dispatch = useDispatch()
  const {item, order}=props
  const inCart = order.find(o=> item.id === o.id) ? true : false
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  const addToCart= (e)=> {
    e.preventDefault()
    if (inCart) {
      const itemInCart= order.find(o=> o.id === item.id)
      const updatedItem = {...itemInCart}
      updatedItem['amount'] += amount
      dispatch(updateItem(updatedItem))
    } else {
      console.log(item.price)
      dispatch(addItem({
        id: item.id,
        amount: amount,
        price: item.price
      }))
    }
  }

  const ghostArray = Array.from({length: item.quantity}, (v,i)=> i )
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flex: '1', justifyContent: 'space-between', width: '100%'}}>
        <p>{item.label}</p>
        <p>{`$${item.price.toFixed(2)}`}</p>
      </div>
        <FormControl fullWidth>
          <InputLabel id='quantity-label'> Quantity </InputLabel>
          <Select
            id='quantity'
            label='quantity'
            labelId='quantity-label'
            onChange={handleChange}
            defaultValue={1}>
              {
                ghostArray.map((i, index)=> {
                  return <MenuItem key={index} value={i + 1}>{i + 1} </MenuItem>
                })
              }
          </Select>
          <Button type='submit' onClick={addToCart}>
            Add to Cart
            {inCart ? <p style={{color: 'green', marginLeft: '5%'}}>In cart</p> : null}
          </Button>
        </FormControl>
    </div>
  )
}

export default Order