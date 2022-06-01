import React from 'react'
import PrevItem from './PrevItem'

const PrevOrder = (props) => {
  return (
    <div className="prevOrderContainer">
        <div className="prevOrderHeader">
            <div className="prevOrderDate">
                <h3>ORDER PLACED</h3>
                <p>order date</p>
            </div>
            <div className="prevOrderTotal">
                <h3>TOTAL</h3>
                <p>total will be here</p>
            </div>
            <div className="prevOrderUser">
                <h3>SHIP TO</h3>
                <p>user name to go here</p>
            </div>
        </div>
        <PrevItem/>
    </div>
  )
}

export default PrevOrder