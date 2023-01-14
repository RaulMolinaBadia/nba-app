import React, { useState, useEffect } from 'react'
import { Teams, TeamInfo } from './styles'
import TeamsList from '../../public/nbaLogos'

const TeamInfoDisplayer = () => {
  const [teamsData, setTeamsData] = useState([])

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then(response => response.json())
      .then(data => setTeamsData(data.data))
  }, [])

  return (
    <Teams>
      {teamsData.map((team, i) => {
        const findTeam = TeamsList.find((t) => t.name === team.name)
        return (
          <TeamInfo key={i}>
            {findTeam ? <img src={findTeam.logo.src} alt={team.name} /> : null}
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
