import {useMemo} from 'react'
import s from './styles.module.scss'

export const InfoBlock = ({date}) => {
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

  return (
    <div className={s.InfoBlock}>
      <div className={s.date}>{dateFormat}</div>
      <div className={s.version}>{process.env.REACT_APP_VERSION}</div>
    </div>
  )
}
