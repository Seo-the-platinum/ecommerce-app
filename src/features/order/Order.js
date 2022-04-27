import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './OrderSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Order = props => {
  const [amount, setAmount] = useState(1)
  const dispatch = useDispatch()
  const {item}=props
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  const addToCart= (e)=> {
    e.preventDefault()
    dispatch(addItem({
      id: item.id,
      amount: amount,
    }))
  }
  const ghostArray = Array.from({length: item.count}, (v,i)=> i )
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flex: '1', justifyContent: 'space-between', width: '100%'}}>
        <p>{item.label}</p>
        <p>{item.price}</p>
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
                ghostArray.map((i)=> {
                  return <MenuItem value={i + 1}>{i + 1} </MenuItem>
                })
              }
          </Select>
          <Button type='submit' onClick={addToCart}>
            Add to Cart
          </Button>
        </FormControl>
    </div>
  )
}

export default Order