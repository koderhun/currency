import React from 'react'
import {Spin} from 'antd'

export const LoaderCustom = React.memo(() => {
  return (
    <div className='LoaderCustom'>
      <Spin tip='Loading...'></Spin>
    </div>
  )
})
