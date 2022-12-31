import {General} from 'pages/General'
import {Route, Routes} from 'react-router-dom'
import {withClearCache} from 'HOC/withClearCache'
import s from './styles.module.scss'

const MainApp = () => {
  return (
    <div className={s.main}>
      <Routes>
        <Route path='/' element={<General />} />
      </Routes>
    </div>
  )
}

const ClearCacheComponent = withClearCache(MainApp)

export const Layout = () => {
  return <ClearCacheComponent />
}
