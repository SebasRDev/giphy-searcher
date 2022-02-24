import React from 'react'

const GifGridItem = ({title,url}) => {
  console.log('cards')
  return (
    <div className='card animate__animated animate__backInUp'>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem