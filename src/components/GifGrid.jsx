import React, { memo} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import PropTypes from 'prop-types' 

const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs( category );
  return (
    <>
      <h3 className='category-title aninate__animated animate__flash'>{category}</h3>
      { loading && <p>Cargando...</p>}
      <div className='card-grid'>
        {images.map(img => {
          return(
            <GifGridItem 
              key={img.id}
              {...img}
            />
          )
        })}
      </div>
    </>
  )
}

export default GifGrid

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}