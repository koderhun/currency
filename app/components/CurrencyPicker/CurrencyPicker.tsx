'use client'
import {getEmojiByCurrencyCode} from 'country-currency-emoji-flags'
import s from './styles.module.scss'

export function CurrencyPicker({
  options,
  value,
  onChange,
  onAdd,
  placeholder = 'Select currency',
}: {
  options: {code: string; disabled?: boolean}[]
  value: string
  onChange: (code: string) => void
  onAdd: () => void
  placeholder?: string
}) {
  return (
    <div className={s.container}>
      <select
        id="currency-picker"
        name="currency-picker"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={s.select}>
        <option value="">{placeholder}</option>
        {options.map(({code, disabled}) => (
          <option key={code} value={code} disabled={disabled}>
            {getEmojiByCurrencyCode(code)} {code}
            {disabled ? ' — append' : ''}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={onAdd}
        disabled={!value}
        title="Add selected currency"
        className={s.addButton}>
        Add
      </button>
    </div>
  )
}
