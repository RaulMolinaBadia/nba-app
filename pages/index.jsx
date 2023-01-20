import Head from 'next/head'
import TeamSelector from '../components/TeamSelector'

import { useState } from 'react'
import NavBar from '../components/NavBar'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

export default function LandingPage (teams) {
  const [teamName, setTeamName] = useState('Hawks')
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/app-logo/Logo-NBA.png' />
        <meta name='NBA-App' content='Page of nba content' />
      </Head>
      <NavBar teamName={teamName} />
      <TeamSelector setTeamName={setTeamName} teams={teams} />
    </div>
  )
}

export async function getServerSideProps () {
  try {
    const response = await fetch(teamsURL)
    const teams = await response.json()
    return {
      props: {
        teams
      }
    }
  } catch (error) {}
}
