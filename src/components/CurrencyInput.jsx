import { InputNumber } from 'antd'

export const CurrencyInput = ({ currencyInput, changeInputCurrency }) => {
  const { code, value } = currencyInput

  const onChangeValue = (value) => {
    changeInputCurrency(value, code)
  }

  return (
    <div className='line'>
      <InputNumber
        value={value}
        addonBefore={code}
        name={code}
        placeholder={value}
        min='0'
        step='1'
        // onChange={onChangeValue}
        stringMode
        onBlur={(e) => onChangeValue(e.target.value)}
      />
    </div>
  )
}
