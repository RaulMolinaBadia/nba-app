import React from 'react'
import { Spinner } from './styles'

const LoadingSpinner = () => {
  return (
    <Spinner>
      <svg viewBox='25 25 50 50' class='circular'>
        <circle stroke-miterlimit='10' stroke-width='3' fill='none' r='20' cy='50' cx='50' class='path' />
      </svg>
    </Spinner>
  )
}

export default LoadingSpinner
