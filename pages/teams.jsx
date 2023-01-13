import React from 'react'
import TeamInfoDisplayer from '../components/TeamInfoDisplayer'
import { NavBar } from '../styles/pages/LandingPage'
import MenuBar from '../components/MenuBar'
import Link from 'next/link'
import Image from 'next/image'

const teams = () => {
  return (
    <div>
      <NavBar>
        <Link href='/home'>
          <Image
            src='/app-logo/Logo-NBA.png'
            width={100}
            height={57}
            alt='logoNBA'
          />
        </Link>
        <MenuBar teamName='Blazers' />
      </NavBar>
      <TeamInfoDisplayer />
    </div>
  )
}
export default teams
