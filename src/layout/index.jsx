import {Layout as LayoutAnt} from 'antd'
import {General} from 'pages/General'
import {Route, Routes} from 'react-router-dom'
import {withClearCache} from 'HOC/withClearCache'

const {Content} = LayoutAnt

const MainApp = () => {
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

const ClearCacheComponent = withClearCache(MainApp)

export const Layout = () => {
  return <ClearCacheComponent />
}
