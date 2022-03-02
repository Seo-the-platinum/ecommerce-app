import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { products } from '../utils'
import ReactPlayer from 'react-player'

const ItemPage = ()=> {
  const [featured, setFeatured] = useState('')

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding-top: 2%;
    width: 100%;
  `
  const ItemDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    `
  const OrderDiv = styled.div`
    border: solid 1px green;
    width: 40%;
  `
  const SmallPicsDiv = styled.div`
    border: solid blue 3px;
    display: flex;
    flex-direction: column;
    height: 400px;
    margin-left: 3%;
    width: 7%;
  `
  const Thumbnail = styled.img`
    border: red 1px solid;
    border-radius: 8px;
    resize-mode: contain;
  `
  const ThumbnailDiv = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin: 5%;
    height: 100%;
    width: 100%;
  `

  const ReviewsDiv = styled.div`
    display: flex;
  `
  const OtherDiv = styled.div`
    display: flex;
  `
  const { itemId } = useParams()
  const item = products.find(p=> p.id === itemId)
  const handleChange = (e)=> {
    setFeatured(e.target.src)
  }
  return (
    <Container>
      <SmallPicsDiv>
        <ThumbnailDiv>
          <Thumbnail onClick={handleChange} src={item.source}/>
        </ThumbnailDiv>
        { item.altSources.map(s=>
            s.includes('.jpg') ?
              <ThumbnailDiv>
                <Thumbnail onClick={handleChange} src={s}/>
              </ThumbnailDiv>
            : s.includes('.mp4') ?
              <ThumbnailDiv>
                <ReactPlayer onClick={handleChange} height='100%' width='100%' url={s}/>
              </ThumbnailDiv>
            : null)
      }
      </SmallPicsDiv>
      <ItemDiv>
        { featured.includes('.jpg') ? <img style={{height: '100%', width: '60%'}} src={featured}/> :
          featured.includes('.mp4') ? <ReactPlayer url={featured} playing={true}/> :
          null
        }
      </ItemDiv>
      <OrderDiv>
        <p>{item.label}</p>
        <p>{item.price}</p>
      </OrderDiv>
      <ReviewsDiv>
      </ReviewsDiv>
      <OtherDiv>
      </OtherDiv>
    </Container>
  )
}

export default ItemPage
