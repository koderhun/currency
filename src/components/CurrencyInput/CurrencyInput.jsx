import { useContext } from 'react'
import { InputNumber } from 'antd'
import { Flags } from 'components/Flags/Flags'
import { FormContext } from 'components/CurrencyForm/CurrencyForm'
import './styles.scss'

export const CurrencyInput = ({ currencyInput }) => {
  const { code, value } = currencyInput

  const { changeItemInput } = useContext(FormContext)

  const handleFocus = (event) => event.target.select()

  return (
    <div className='line'>
      <InputNumber
        {...{
          className: 'currencyInput',
          type: 'tel',
          addonBefore: <Flags {...{ name: code }} />,
          name: code,
          placeholder: '0',
          min: 0,
          onChange: (value) => changeItemInput(value, code),
          onPressEnter: (e) => changeItemInput(e.target.value, code),
          onFocus: handleFocus,
          value: value.toFixed(2),
        }}
      />
    </div>
  )
}
