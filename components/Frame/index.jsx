import React from 'react'
import { GeneralFrame, FrameWrapper, LeftFrame, MidFrame, RightFrame } from './styles'
import { Header, Logo, TeamName, NBALogo } from './propStyles'
import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'

const Frame = (props) => {
  return (
    <GeneralFrame>
      <Header>
        {props.teamName === 'NEWS' ? <NBALogo src='/app-logo/Logo-NBA.png' /> : <Logo src={props.teamLogo} width={70} height={70} alt='team logo' />}
        <TeamName>{props.teamName}</TeamName>
      </Header>
      <FrameWrapper>
        <LeftFrame>
          <EasternLeaderboard />
        </LeftFrame>
        <MidFrame />
        <RightFrame>
          <WesternLeaderboard />
        </RightFrame>
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
