import React from 'react'
import { Teams, TeamInfo } from './styles'
import TeamsList from '../../public/nbaLogos'
import Link from 'next/link'

const TeamInfoDisplayer = (props) => {
  const teams = props.teams.teams.data

  return (
    <Teams>
      {teams.map((team, i) => {
        const teamName = teams[i].name.split(' ')
        const findTeam = TeamsList.find((t) => t.name === teamName[teamName.length - 1])
        return (
          <TeamInfo key={i}>
            <Link href={`/teams/${team}`}>
              {findTeam ? <img src={findTeam.logo.src} alt={team.name} /> : null}
            </Link>
            <div>{team.full_name}</div>
            <div>{team.city} 📍</div>
            <div>Divsion: {team.division}</div>
            <div>Conference: {team.conference}</div>
          </TeamInfo>
        )
      })}
    </Teams>
  )
}

export default TeamInfoDisplayer