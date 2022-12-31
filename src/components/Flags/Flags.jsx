import React from 'react'
import s from './styles.module.scss'

export const Flags = ({name}) => {
  return (
    <div className={s.flag}>
      <img
        src={`${process.env.PUBLIC_URL}/images/flags/${name}.png`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  )
}
