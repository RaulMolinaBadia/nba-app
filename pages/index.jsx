import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TeamSelector from '../components/TeamSelector'
import MenuBar from '../components/MenuBar/index'
import { NavBar } from '../styles/pages/LandingPage'
import { useState } from 'react'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

export default function Home (teams) {
  const [teamName, setTeamName] = useState('Hawks')
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/Logo-NBA.png' />
        <meta name='description' content='Generated by create next app' />
      </Head>
      <NavBar>
        <Link href='/home'>
          <Image src='/app-logo/Logo-NBA.png' width={100} height={57} alt='logoNBA' priority />
        </Link>
        <MenuBar teamName={teamName} />
      </NavBar>
      <TeamSelector setTeamName={setTeamName} teams={teams} />
    </div>
  )
}

export async function getServerSideProps () {
  const response = await fetch(teamsURL)
  const teams = await response.json()
  return {
    props: {
      teams
    }
  }
}
