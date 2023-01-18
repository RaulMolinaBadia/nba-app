import React from 'react'
import TeamsList from '../../../public/nbaLogos'
import { useDataAPI } from '../../../api/data'
import { ConferenceHeader, TeamContainer, Logo, TeamName, Scoreboard, Record, Leaderboard, Teams, Position } from './styles'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const WesternLeaderboard = () => {
  const teamsData = useDataAPI(teamsURL)
  let position = 1
  return (
    <Leaderboard>
      <ConferenceHeader>WEST CONFERENCE</ConferenceHeader>
      <Teams>
        {teamsData.map((team, i) => {
          if (team.conference === 'West') {
            const teamName = teamsData[i].name.split(' ')
            const findTeam = TeamsList.find((t) => t.name === teamName[teamName.length - 1])
            return (
              <TeamContainer key={i}>
                <Position>
                  {position++}
                </Position>
                {findTeam ? <Logo src={findTeam.logo.src} alt={team.name} /> : null}
                <TeamName>{team.full_name}</TeamName>
              </TeamContainer>
            )
          } else { return null }
        })}
      </Teams>
      <Scoreboard>
        <Record>43-7</Record>
        <Record>40-10</Record>
        <Record>40-10</Record>
        <Record>37-13</Record>
        <Record>35-15</Record>
        <Record>34-16</Record>
        <Record>30-20</Record>
        <Record>29-21</Record>
        <Record>29-21</Record>
        <Record>29-21</Record>
        <Record>24-26</Record>
        <Record>22-28</Record>
        <Record>21-29</Record>
        <Record>19-31</Record>
        <Record>14-36</Record>
      </Scoreboard>
    </Leaderboard>
  )
}

export default WesternLeaderboard
