import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { products } from '../../utils'
import ReactPlayer from 'react-player'
import Review from '../../components/Review'
import Order from '../../features/order/Order'
import './itemPage.css'

const ItemPage = ()=> {
  const {img} = useLocation().state
  const [featured, setFeatured] = useState(img)
  const { itemId } = useParams()
  const item = products.find(p=> p.id === itemId)
  const itemImages = item.altSources ? [item.source, ...item.altSources] : [item.source]
  const handleChange = (e)=> {
    setFeatured(e.target.getAttribute('src'))
  }
  return (
    <div className='container'>
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
                    height='75px' 
                    url={s}
                    width='75px' 
                    />
                </div>
              : null)
        }
        </div>
      </div>
      <div className='bottom-section'>
        <Order item={item}/>
        <div className="otherDiv">
          <p>some information to go here</p>
        </div>
      </div>
      <div className='reviewsDiv'>
        <Review/>
      </div>
    </div>
  )
}

export default ItemPage
