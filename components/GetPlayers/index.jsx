import React from 'react'
import { useDataAPI } from '../../api/data'
import { PlayerInfo, Name, Title } from './styles'
import Link from 'next/link'

const playersURL = 'https://www.balldontlie.io/api/v1/players'

const GetPlayers = (team) => {
  const players = useDataAPI(playersURL)
  return (
    <div>
      <Title>LINE-UP</Title>
      {players.map((player, i) => {
        return (
          <PlayerInfo key={i}>
            <Link href={`/players/${player.first_name}${player.last_name}`}>
              <Name>{player.first_name} {player.last_name}</Name>
            </Link>
          </PlayerInfo>
        )
      })}
    </div>
  )
}

export default GetPlayers

// const teamName = players[i].team.name.split(' ')
