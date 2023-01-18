import React from 'react'
import { Spinner, Circular, Path } from './styles'

const LoadingSpinner = () => {
  return (
    <Spinner>
      <Circular viewBox='25 25 50 50' className='circular'>
        <Path strokeMiterlimit='10' strokeWidth='3' fill='none' r='20' cy='50' cx='50' className='path' />
      </Circular>
    </Spinner>
  )
}

export default LoadingSpinner
