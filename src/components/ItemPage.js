import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useLocation } from 'react-router-dom'
import { products } from '../utils'
import ReactPlayer from 'react-player'

const ItemPage = ()=> {
  const {img} = useLocation().state
  const [featured, setFeatured] = useState(img)

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
    padding-top: 2%;
    width: 100%;
  `
  const ItemDiv = styled.div`
    display: flex;
    justify-content: center;
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
    display: flex;
    border: solid 2px blue;
    height: 400px;
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
      <div style={{justifyContent: 'center', display: 'flex', flexWrap: 'wrap', width: '60%'}}>
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
        { featured.includes('.jpg') ? <img style={{height: '100%', width: '60%', objectFit: 'contain'}} src={featured}/> :
          featured.includes('.mp4') ? <ReactPlayer url={featured} playing={true} /> :
          null
        }
      </ItemDiv>
      <ReviewsDiv>
      </ReviewsDiv>
      </div>
      <div style={{border: 'solid blue 2px', height: '800px', width: '39%', display: 'flex', flexDirection: 'column',}}>
        <OrderDiv>
          <p>{item.label}</p>
          <p>{item.price}</p>
        </OrderDiv>
        <OtherDiv>
        </OtherDiv>
      </div>
    </Container>
  )
}

export default ItemPage
