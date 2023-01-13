import Head from 'next/head'
import Image from 'next/image'
import TeamSelector from '../components/TeamSelector'
import MenuBar from '../components/MenuBar/index'
import { NavBar } from '../styles/pages/LandingPage'
import { useState } from 'react'

export default function Home () {
  const [teamName, setTeamName] = useState('Hawks')

  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/Logo-NBA.png' />
        <meta
          name='description'
          content='Generated by create next app'
        />
      </Head>
      <NavBar>
        <Image src='/app-logo/Logo-NBA.png' width={100} height={57} alt='logoNBA' />
        <MenuBar teamName={teamName} />
      </NavBar>
      <TeamSelector setTeamName={setTeamName} />
    </div>
  )
}
