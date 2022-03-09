import React from 'react'
import SelectUnstyled from '@mui/base/SelectUnstyled';
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDown = styled(SelectUnstyled)`
  width: 100%;
`
const Order = props => {
  const handleChange = () => {
    console.log('chchchchchchanges')
  }
  return (
    <div>
        <h1>{props.label}</h1>
        <h1>{props.price}</h1>
        <FormControl fullWidth>
          <InputLabel id='quantity-label'> Quantity </InputLabel>
          <Select
            id='quantity'
            label='quantity'
            labelId='quantity-label'
            onChange={handleChange}
            defaultValue={1}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
    </div>
  )
}

export default Order