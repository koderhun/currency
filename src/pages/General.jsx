import {CurrencyForm} from 'components/CurrencyForm/CurrencyForm'
import s from './styles.module.scss'

export const General = () => {
  return (
    <div className={s.general}>
      <h1 className={s.title}>Converter</h1>
      <CurrencyForm />
    </div>
  )
}
