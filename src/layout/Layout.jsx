import { Layout as LayoutAnt } from 'antd'
import { Logo } from 'components/Logo'
import { Nav } from 'components/Nav'
import { General } from 'pages/General'
import { Route, Routes } from 'react-router-dom'

const {Header, Content} = LayoutAnt

export const Layout = () => {
  return (
    <LayoutAnt className='layout'>
      {/* <Header className='header'>
        <Logo />
        <Nav />
      </Header> */}
      <Content className='content'>
        <Routes>
          <Route path='/' element={<General />} />
        </Routes>
      </Content>
    </LayoutAnt>
  )
}
