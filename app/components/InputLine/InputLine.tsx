'use client'
import {Flag} from '@/components/Flag'
import FormatInput from 'react-currency-input-field'
import s from './styles.module.scss'

interface PropsType {
  currencyCode: string
  inputValue: string
  changeCurrencyHandler: (args: {fromCode: string; amount: string}) => void
}

export const InputLine = ({
  currencyCode,
  inputValue,
  changeCurrencyHandler,
}: PropsType) => {
  return (
    <div className={s.line}>
      <div className={s.flag}>
        <Flag {...{name: currencyCode}} />
      </div>
      <div className={s.content}>
        <FormatInput
          {...{
            className: s.input,
            name: currencyCode,
            placeholder: '0',
            value: inputValue,
            // decimalScale: 2,
            // decimalsLimit: 2,
            // fixedDecimalLength: 2,
            decimalSeparator: '.',
            groupSeparator: ' ',
            type: 'tel',
            onValueChange: (value) => {
              changeCurrencyHandler({
                fromCode: currencyCode,
                amount: String(value),
              })
            },
            autoComplete: 'off',
          }}
        />
      </div>
    </div>
  )
}
