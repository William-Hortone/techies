import React from 'react'

const CardImg = ({img, title, link}) => {
  return (
    <div className='w-[500px] h-[300px]'>
        <img src={img} alt="" />
        <h4>{title}</h4>
    </div>
  )
}

export default CardImg