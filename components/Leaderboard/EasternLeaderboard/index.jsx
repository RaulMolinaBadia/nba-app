import React from 'react'
import TeamsList from '../../../public/nbaLogos'
import { useDataAPI } from '../../../api/data'
import { ConferenceHeader, TeamContainer, Logo, TeamName } from './styles'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const EasternLeaderboard = () => {
  const teamsData = useDataAPI(teamsURL)
  return (
    <div>
      <ConferenceHeader>EAST CONFERENCE</ConferenceHeader>
      {teamsData.map((team, i) => {
        if (team.conference === 'East') {
          const teamName = teamsData[i].name.split(' ')
          const findTeam = TeamsList.find((t) => t.name === teamName[teamName.length - 1])
          return (
            <TeamContainer key={i}>
              {findTeam ? <Logo src={findTeam.logo.src} alt={team.name} /> : null}
              <TeamName>{team.full_name}</TeamName>
            </TeamContainer>
          )
        } else { return null }
      }

      )}
    </div>
  )
}

export default EasternLeaderboard
