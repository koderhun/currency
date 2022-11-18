import { Layout as LayoutAnt } from 'antd'
import { General } from 'pages/General'
import { Route, Routes } from 'react-router-dom'

const { Content } = LayoutAnt

export const Layout = () => {
  return (
    <LayoutAnt className='layout'>
      <Content className='content'>
        <Routes>
          <Route path='/' element={<General />} />
        </Routes>
      </Content>
    </LayoutAnt>
  )
}
