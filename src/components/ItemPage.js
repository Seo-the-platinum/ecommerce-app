import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useLocation } from 'react-router-dom'
import { products } from '../utils'
import ReactPlayer from 'react-player'
import Review from './Review'
import Order from './Order'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `
  const ItemDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex: 2;
    justify-content: center;
    overflow: hidden;

    `
  const OrderDiv = styled.div`
    border: solid 1px green;
    width: 100%;
  `
  const SmallPicsDiv = styled.div`
    align-items: center;
    border: 2px blue solid;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  `
const ThumbnailDiv = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    object-fit: contain;
  `

  const ReviewsDiv = styled.div`
    align-items: flex-start;
    border: solid 2px blue;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    width: 100%;
  `
  const OtherDiv = styled.div`
    border: solid red 2px;
    display: flex;
    width: 100%;
  `

  const ImagesDiv = styled.div`
    display: flex;
    flex-direction: row;
  `

const ItemPage = ()=> {
  const {img} = useLocation().state
  const [featured, setFeatured] = useState(img)

  
  const Thumbnail = styled.img`
    border: ${(props) => props.src === featured ? 'solid black 2px' :'none'};
    border-radius: 8px;
  `

  
  const { itemId } = useParams()

  const item = products.find(p=> p.id === itemId)

  const handleChange = (e)=> {
    setFeatured(e.target.attributes[0].nodeValue)
  }
  return (
    <Container>
      <ImagesDiv>
        <SmallPicsDiv>
          <ThumbnailDiv>
            <Thumbnail onClick={handleChange} src={item.source}/>
          </ThumbnailDiv>
          { item.altSources.map((s, index)=>
              s.includes('.jpg') ?
                <ThumbnailDiv>
                  <Thumbnail onClick={handleChange} src={s}/>
                </ThumbnailDiv>
              : s.includes('.mp4') ?
                <ThumbnailDiv>
                  <ReactPlayer
                    style={{
                      border: featured.includes('.mp4') ? '2px black solid':'none',
                      borderRadius: '8px',
                    }}
                    onClick={handleChange} height='100%' width='100%' url={s}/>
                </ThumbnailDiv>
              : null)
        }
        </SmallPicsDiv>
        <ItemDiv>
          { featured.includes('.jpg') ? <img style={{ display: 'block' }} src={featured}/> :
            featured.includes('.mp4') ? <ReactPlayer  height='100%' playing={true} style={{objectFit: 'contain'}} url={featured} /> :
            null
          }
        </ItemDiv>
      </ImagesDiv>
      <ReviewsDiv>
        <Review/>
      </ReviewsDiv>
      <div style={{border: 'solid blue 2px', height: '800px', width: '30%', display: 'flex', flexDirection: 'column'}}>
        <OrderDiv>
          <Order label={item.label} price={item.price} count={item.count}/>
        </OrderDiv>
        <OtherDiv>
          <p>some information to go here</p>
        </OtherDiv>
      </div>
    </Container>
  )
}

export default ItemPage
