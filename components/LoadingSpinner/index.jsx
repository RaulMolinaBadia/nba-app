import React from 'react'
import Loader from './styles.js'

const LoadingSpinner = () => {
  return (
    <div>
      LOADING LOADING LOADING
      {
        setTimeout(() => {
          window.location.reload()
        })
      }
    </div>
  )
}

export default LoadingSpinner
