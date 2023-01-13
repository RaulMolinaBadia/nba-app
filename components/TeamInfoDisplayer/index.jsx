import React, { useState, useEffect } from 'react'
import { Teams, TeamInfo } from './styles'

const TeamInfoDisplayer = () => {
  const [teamsData, setTeamsData] = useState([])

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then(response => response.json())
      .then(data => setTeamsData(data.data))
  }, [])

  return (
    <Teams>
      {teamsData.map((team, i) => (
        <TeamInfo key={i}>
          <div>{team.full_name}</div>
          <div>{team.city}</div>
          <div>{team.division}</div>
          <div>{team.conference}</div>
        </TeamInfo>
      ))}
    </Teams>
  )
}

export default TeamInfoDisplayer
