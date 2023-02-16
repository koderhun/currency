import {useContext, useState} from 'react'
import {Flags} from 'components/Flags/Flags'
import {FormContext} from 'components/CurrencyForm/CurrencyForm'
import s from './styles.module.scss'

export const CurrencyInput = ({currencyInput}) => {
  let {code, value} = currencyInput
  const {changeItemInput} = useContext(FormContext)

  const handleFocus = (event) => event.target.select()
  // console.log('2222', Number(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
  const normalizeValue = Number(Number(value).toFixed(2))
  console.log('333', normalizeValue)
  return (
    <div className={s.line}>
      <div className={s.flag}>
        <Flags {...{name: code}} />
      </div>
      <div className={s.content}>
        <input
          {...{
            className: s.input,
            type: 'tel',
            name: code,
            placeholder: '0',
            min: 0,
            onChange: (e) => changeItemInput(e.target.value, code),
            onKeyDown: (e) => {
              if (e.key === 'Enter') changeItemInput(e.target.value, code)
            },
            onFocus: handleFocus,
            value: normalizeValue
          }}
        />
      </div>
    </div>
  )
}
