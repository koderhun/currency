import React from 'react'

export const ErrorMsg = ({ error }) => {
  return (
    <div className='errorMsg'>
      <div className='status'>{error.status}</div>
      <pre className='format'>{JSON.stringify(error.data)}</pre>
    </div>
  )
}
