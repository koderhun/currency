import {useContext} from 'react'
import {IMaskInput} from 'react-imask'
import {Flags} from 'components/Flags/Flags'
import {FormContext} from 'components/CurrencyForm/CurrencyForm'
import s from './styles.module.scss'

export const CurrencyInput = ({currencyInput}) => {
  let {code, value} = currencyInput

  const {changeItemInput} = useContext(FormContext)

  const handleFocus = (event) => event.target.select()

  if (value === 0) {
    value = ''
  }

  return (
    <div className={s.line}>
      <div className={s.flag}>
        <Flags {...{name: code}} />
      </div>
      <div className={s.content}>
        <IMaskInput
          {...{
            className: s.input,
            mask: '000 000 000',
            radix: '.',
            type: 'tel',
            name: code,
            placeholder: '0',
            min: 0,
            onChange: (e) => changeItemInput(e.target.value, code),
            onKeyDown: (e) => {
              if (e.key === 'Enter') changeItemInput(e.target.value, code)
            },
            onFocus: handleFocus,
            value: String(value),
          }}
        />
      </div>
    </div>
  )
}
