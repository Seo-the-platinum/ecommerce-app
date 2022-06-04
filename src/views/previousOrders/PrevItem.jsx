import React from 'react'
import './previousOrders.css'

const PrevItem = ({item}) => {

  return (
    <div className='prevItemContainer'>
      {
        item !== undefined &&
        <div>
          <img alt='item thumbnail' className='prevItemImg' src={item.source}/>
          <p>{item.label}</p>
        </div>
      }
    </div>
  )
}

export default PrevItem