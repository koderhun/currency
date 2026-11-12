import classnames from 'classnames'
import s from './styles.module.scss'

interface Props {
  code: string
}

export const Flag = ({code = ''}: Props) => {
  const nameISO = code.substring(0, 2).toLowerCase()
  return (
    <div className={s.flag} title={code}>
      <span className={classnames('fi', `fi-${nameISO}`, s.flagImg)}></span>
      <span className={s.name}>{code}</span>
    </div>
  )
}
