import React from 'react'
import TeamsList from '../../../public/nbaLogos'
import { useDataAPI } from '../../../api/data'
import { ConferenceHeader, TeamContainer, Logo, TeamName, Scoreboard, Record, Leaderboard, Teams, Position } from './styles'
const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const EasternLeaderboard = () => {
  const teamsData = useDataAPI(teamsURL)
  let position = 1
  return (
    <Leaderboard>
      <ConferenceHeader>EAST CONFERENCE</ConferenceHeader>
      <Teams>
        {teamsData.map((team, i) => {
          if (team.conference === 'East') {
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
        <Record>41-9</Record>
        <Record>38-12</Record>
        <Record>38-12</Record>
        <Record>37-13</Record>
        <Record>34-16</Record>
        <Record>34-16</Record>
        <Record>33-17</Record>
        <Record>31-19</Record>
        <Record>29-21</Record>
        <Record>26-24</Record>
        <Record>25-25</Record>
        <Record>22-28</Record>
        <Record>18-32</Record>
        <Record>14-36</Record>
        <Record>12-38</Record>
      </Scoreboard>
    </Leaderboard>
  )
}

export default EasternLeaderboard
