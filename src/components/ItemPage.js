import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useLocation } from 'react-router-dom'
import { products } from '../utils'
import ReactPlayer from 'react-player'
import Review from './Review'
import Order from './Order'

const ItemPage = ()=> {
  const {img} = useLocation().state
  const [featured, setFeatured] = useState(img)

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    padding-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    max-width: 100%;
  `
  const ItemDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex: 1 1 25%;
    justify-content: center;
    height: 75%;
    min-height: 25%;
    width: 80%;
    `
  const OrderDiv = styled.div`
    border: solid 1px green;
    width: 100%;
  `
  const SmallPicsDiv = styled.div`
    align-items: center;
    border: 2px blue solid;
    display: flex;
    flex-direction: column;
    height: 50%;
    margin-left: 3%;
    width: 10%;
  `
  const Thumbnail = styled.img`
    border: ${(props) => props.src === featured ? 'solid black 2px' :'none'};
    border-radius: 8px;
    display: flex;
    height: 100%;
    object-fit: cover;
    width: 100%;
  `
  const ThumbnailDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 7%;
    height: 60px;
    width: 80%;
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
  const { itemId } = useParams()

  const item = products.find(p=> p.id === itemId)

  const handleChange = (e)=> {
    setFeatured(e.target.attributes[0].nodeValue)
  }
  return (
    <Container>
      <div style={{ maxHeight: '700px', justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', width: '50%'}}>
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
        { featured.includes('.jpg') ? <img style={{flex: '1 1 auto', display: 'flex', minHeight: '50%',height: '100%', width: '60%', objectFit: 'contain'}} src={featured}/> :
          featured.includes('.mp4') ? <ReactPlayer  height='100%' playing={true} style={{objectFit: 'contain'}} url={featured} /> :
          null
        }
      </ItemDiv>
      <ReviewsDiv>
        <Review/>
      </ReviewsDiv>
      </div>
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
