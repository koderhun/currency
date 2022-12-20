import React from 'react'

export const ErrorMsg = ({ error }) => {
  console.error(error)
  return (
    <div className='errorMsg'>
      <div className='status'>{error.status}</div>
      <div className='format'>{JSON.stringify(error.data)}</div>
    </div>
  )
}
