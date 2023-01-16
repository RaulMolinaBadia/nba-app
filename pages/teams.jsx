import React from 'react'
import TeamInfoDisplayer from '../components/TeamInfoDisplayer'
import { NavBar } from '../styles/pages/LandingPage'
import MenuBar from '../components/MenuBar'
import Link from 'next/link'
import Image from 'next/image'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const Teams = (teams) => {
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
      <TeamInfoDisplayer teams={teams} />
    </div>
  )
}
export default Teams

export async function getServerSideProps () {
  const response = await fetch(teamsURL)
  const teams = await response.json()
  return {
    props: {
      teams
    }
  }
}
