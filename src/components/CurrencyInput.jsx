import { InputNumber } from 'antd'
import { parserNumber, formatterNumber } from 'services'

export const CurrencyInput = ({ currencyInput, changeInputCurrency }) => {
  const { code, value } = currencyInput

  const handleChangeValue = (value) => {
    changeInputCurrency(value, code)
  }

  const handleFocus = (event) => event.target.select()

  return (
    <div className='line'>
      <InputNumber
        size='large'
        type='number'
        value={value}
        formatter={(value) => formatterNumber(value)}
        parser={(value) => parserNumber(value)}
        addonBefore={code}
        name={code}
        placeholder={value}
        min='0'
        onBlur={(e) => handleChangeValue(e.target.value)}
        onPressEnter={(e) => handleChangeValue(e.target.value)}
        onFocus={handleFocus}
      />
    </div>
  )
}
