'use client'

import {Flag} from '@/components/Flag'
import FormatInput from 'react-currency-input-field'
import {useSettingsStore} from '@/store/settingsStore'

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
  const settingsEnabled = useSettingsStore((e) => e.settingsEnabled)

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
              const safe =
                value === undefined ||
                value === null ||
                Number.isNaN(value as unknown as number)
                  ? ''
                  : String(value)

              changeCurrencyHandler({
                fromCode: currencyCode,
                amount: safe,
              })
            },
            autoComplete: 'off',
          }}
        />
      </div>

      {settingsEnabled && (
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
      )}
    </div>
  )
}
