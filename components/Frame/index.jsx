import React from 'react'
import { GeneralFrame, FrameWrapper, LeftFrame, MidFrame, RightFrame } from './styles'
import { Header, Logo, TeamName } from './propStyles'
// import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
// import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'

const Frame = (props) => {
  return (
    <GeneralFrame>
      <Header>
        <Logo src={props.teamLogo} alt='' />
        <TeamName>{props.teamName}</TeamName>
      </Header>
      <FrameWrapper>
        <LeftFrame>
          {/* <EasternLeaderboard /> */}
          {/* <WesternLeaderboard /> */}
        </LeftFrame>
        <MidFrame />
        <RightFrame />
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
