import {useEffect, useMemo, useState} from 'react'
import s from './styles.module.scss'

export const InfoBlock = ({date}) => {
  const [version, setVersion] = useState(0)
  const dateFormat = useMemo(() => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
    }

    return date.toLocaleString('ru', options)
  }, [date])

  useEffect(() => {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((data) => {
        setVersion(data.version)
      })
  }, [])

  return (
    <div className={s.InfoBlock}>
      <div className={s.date}>{dateFormat}</div>
      <div className={s.version}>{version}</div>
    </div>
  )
}
