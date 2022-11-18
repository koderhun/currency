import React from 'react'
import { Spin } from 'antd'
export const LoaderCustom = () => {
  return (
    <div className='LoaderCustom'>
      <Spin tip='Loading...'></Spin>
    </div>
  )
}
