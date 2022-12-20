import React from 'react'
import './styles.scss'

export const Flags = ({ name }) => {
  return (
    <div className='flag'>
      <img src={`${process.env.PUBLIC_URL}/images/flags/${name}.png`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  )
}
