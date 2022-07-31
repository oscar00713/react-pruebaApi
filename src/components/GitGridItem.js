import React from 'react'

export const GitGridItem = ({id, title, url}) => {

    console.log();
  return (
    <div className='card'>
      <img src={url} alt={title} />
       <p>{title}</p>
    </div>
  )
}
