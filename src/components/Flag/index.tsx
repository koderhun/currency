import React from 'react'
import classnames from 'classnames'
import s from './styles.module.scss'

interface Props {
  name: string
}

export const Flag = ({ name = '' }: Props) => {
  const nameISO = name.substring(0, 2).toLowerCase()

  return (
    <div className={s.flag} title={name}>
      <span className={classnames('fi', `fi-${nameISO}`, s.flagImg)}></span>
      <span className={s.name}>{name}</span>
    </div>
  )
}
