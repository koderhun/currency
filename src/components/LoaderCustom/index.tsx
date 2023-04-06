import { memo } from 'react'
import s from './styles.module.scss'

// eslint-disable-next-line react/display-name
export const LoaderCustom = memo(() => {
  return <div className={s.loader}>Loading...</div>
})
