import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import Review from '../../components/Review'
import Order from '../../features/order/Order'
import Other from '../../components/Other'
import './itemPage.css'

const ItemPage = ()=> {
  const {img} = useLocation().state
  const [featured, setFeatured] = useState(img)
  const { itemId } = useParams()
  const item = useSelector(state=> state.items.value.payload.find(i=> i.id === itemId))
  const order = useSelector(state=> state.order.value)
  const itemImages = item.altSources ? [item.source, ...item.altSources] : [item.source]
  const handleChange = (e)=> {
    setFeatured(e.target.getAttribute('src'))
  }
  return (
    <div className='itemPageContainer'>
      <div className='imagesDiv'>
        <div className='itemDiv'>
            { featured.includes('.jpg') ? <img className='featured' src={featured}/> :
              featured.includes('.mp4') ? <ReactPlayer  height='100%' width='100%' playing={true} url={featured} /> :
              null
            }
        </div>
        <div className='smallPicsDiv'>
          { itemImages.map((s, index)=>
              s.includes('.jpg') ?
                <div className='thumbnailDiv'>
                  <img
                    className='thumbnail'
                    onClick={handleChange}
                    src={s}
                    style={{
                      border: itemImages[index] === featured ? 'solid black 2px' :'none',
                      borderRadius:'8px',
                    }}
                  />
                </div>
              : s.includes('.mp4') ?
                <div className='thumbnailDiv'>
                  <ReactPlayer
                    style={{
                      border: featured.includes('.mp4') ? '2px black solid':'none',
                      borderRadius: '8px',
                    }}
                    onClick={handleChange} 
                    height='70px'
                    url={s}
                    width='70px' 
                    />
                </div>
              : null)
        }
        </div>
      </div>
      <div className='bottom-section'>
        <Order item={item} order={order}/>
        <div className="otherDiv">
          <Other item={item}/>
        </div>
      </div>
      <div className='reviewsDiv'>
        <Review/>
      </div>
    </div>
  )
}

export default ItemPage
