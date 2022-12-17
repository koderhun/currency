import { useContext } from 'react'
import { InputNumber } from 'antd'
import { formatterNumber } from 'services'
import { Flags } from 'components/Flags/Flags'
import { FormContext } from 'components/CurrencyForm/CurrencyForm'
import './styles.scss'

export const CurrencyInput = ({ currencyInput, }) => {
  const { code } = currencyInput

  const { changeItemInput } = useContext(FormContext)

  const handleChangeValue = (value) => {
    changeItemInput(value, code)
  }

  const handleFocus = (event) => event.target.select()

  return (
    <div className='line'>
      <InputNumber
        {...{
          className: 'currencyInput',
          type: 'tel',
          formatter: (value) => formatterNumber(value),
          addonBefore: <Flags {...{ name: code }} />,
          name: code,
          placeholder: '0',
          min: 0,
          onChange: (value) => handleChangeValue(value),
          onPressEnter: (e) => handleChangeValue(e.target.value),
          onFocus: handleFocus,
        }}
      />
    </div>
  )
}
