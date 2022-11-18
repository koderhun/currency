import { useEffect } from 'react'
import { Layout as LayoutAnt } from 'antd'
import { General } from 'pages/General'
import { Route, Routes } from 'react-router-dom'

const { Content } = LayoutAnt

export const Layout = () => {
  useEffect(() => {
    document.title = 'Converter'
  }, [])
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
