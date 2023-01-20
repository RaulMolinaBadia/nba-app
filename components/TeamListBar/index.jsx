import React from 'react'
import Link from 'next/link'
import TeamsList from '../../public/nbaLogos'
import { TeamListBarWrapper, Logo } from './styles'
import Image from 'next/image'

const TeamListBar = () => {
  return (
    <TeamListBarWrapper>
      {TeamsList.map((team) => (
        <div key={team.name}>
          <Link href={`/teams/${team.name}`}>
            {/* <Image src={team.logo.src} alt={team.name} width={50} height={50} sizes='(min-width:35px)' /> */}
            <Logo
              src={team.logo.src} alt={team.name}
            />
          </Link>
        </div>
      ))}
    </TeamListBarWrapper>
  )
}

export default TeamListBar
