import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

  const [images,setImages] = useState([])

  useEffect(()=>{
    getgifs()
  },[])

  const getgifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick adn Morty&limit=10&api_key=7Z6ucrPSnk7VvDbPNeUWiIfHqdMDSAfd`
    const response = await fetch(url)
    const {data} = await response.json()

    const gifs = data.map(img => {
      return{
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    setImages(gifs)  
  }

  return (
    <div>
      <>
        <h3>{category}</h3>
        {images.map(img => {
          return(
            <GifGridItem 
              key={img.id}
              {...img}
            />
          )
        })}
      </>
    </div>
  )
}

export default GifGrid