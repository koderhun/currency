import React from 'react'
import { Menu } from 'antd'

export const Nav = () => {
  return (
    <div className='nav'>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['1']}
        items={[{
          key: 'general',
          label: "Конвертер",
          link: '/'
        }]}
      />
    </div>
  )
}
