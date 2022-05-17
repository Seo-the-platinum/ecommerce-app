import React from 'react'

const Other = (props) => {
    const {item} = props
  return (
    <div>
        <div>
            <h3>Highlights</h3>
        </div>
        <div>
            <h3>Description</h3>
            {
                item.description ? 
                <p style={{lineHeight: '2em'}}>{item.description}</p> : null
            }
        </div>
    </div>
  )
}

export default Other