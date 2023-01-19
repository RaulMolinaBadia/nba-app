import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import { Container } from './styles'

const LoadingPage = () => {
  return (
    <Container>
      <LoadingSpinner />
      <p>Loading...</p>
    </Container>
  )
}

export default LoadingPage
