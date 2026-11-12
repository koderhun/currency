'use client'
import {Flag} from '@/components/Flag'
import FormatInput from 'react-currency-input-field'
import s from './styles.module.scss'

interface PropsType {
  currencyCode: string
  inputValue: string
  changeCurrencyHandler: (args: {fromCode: string; amount: string}) => void
  onRemove?: () => void
  canRemove?: boolean
}

export const InputLine = ({
  currencyCode,
  inputValue,
  changeCurrencyHandler,
  onRemove,
  canRemove = true,
}: PropsType) => {
  return (
    <div className={s.line}>
      <div className={s.flag}>
        <Flag {...{code: currencyCode}} />
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

      <div>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            disabled={!canRemove}
            aria-label={`Удалить ${currencyCode}`}
            className={`${s.removeButton} ${!canRemove ? s.removeButtonDisabled : ''}`}>
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
