import {useContext, useState} from 'react'
import FormatInput from 'react-currency-input-field'
import {Flags} from 'components/Flags/Flags'
import {FormContext} from 'components/CurrencyForm/CurrencyForm'
import s from './styles.module.scss'

export const CurrencyInput = ({currencyInput}) => {
  const {code, value} = currencyInput
  const {changeItemInput} = useContext(FormContext)

  const handleFocus = (event) => event.target.select()
  const normalizeValue = Number(Number(value).toFixed(2))

  return (
    <div className={s.line}>
      <div className={s.flag}>
        <Flags {...{name: code}} />
      </div>
      <div className={s.content}>
        <FormatInput
          {...{
            className: s.input,
            name: code,
            placeholder: '0',
            value: normalizeValue,
            defaultValue: '',
            decimalSeparator: '.',
            groupSeparator: ' ',
            type: 'tel',
            onValueChange: (value, name) => {
              changeItemInput(value, code)
            },
          }}
        />
      </div>
    </div>
  )
}
