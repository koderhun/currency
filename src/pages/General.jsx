import { Typography } from 'antd'
import { CurrencyForm } from 'components/CurrencyForm/CurrencyForm'

const { Title } = Typography

export const General = () => {
  return (
    <div className='general'>
      <div className='content'>
        <Title level={4} className='title'>Convertor</Title>
        <CurrencyForm />
      </div>
    </div>
  )
}
