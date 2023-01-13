import React from 'react'
import { FooterContainer } from './styles'
import Image from 'next/image'

const Footer = () => {
  return (
    <FooterContainer>
      <Image
        src='/app-logo/Logo-NBA.png'
        alt='NBA Logo'
        width={88}
        height={50}
      />
      <p> Copyright 2023 &copy; By: Yerai & Raul</p>
    </FooterContainer>
  )
}

export default Footer
