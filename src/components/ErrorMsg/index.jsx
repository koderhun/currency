import React from 'react'

export const ErrorMsg = ({error}) => {
  console.log(error)
  if (!error) return null

  return (
    <div className='errorMsg'>
      <div className='status'>
        {error.status === 'FETCH_ERROR' && 'Нет интернета'}
      </div>
    </div>
  )
}
