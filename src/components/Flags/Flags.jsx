import React from 'react'
import './styles.scss'

export const Flags = ({name}) => {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
  return (
    <div className='flag'>
      <img src={`${process.env.PUBLIC_URL}/images/flags/${name}.png`} alt={name} />
    </div>
  )
}
