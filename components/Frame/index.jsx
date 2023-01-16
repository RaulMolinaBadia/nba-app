import React from 'react'
import { GeneralFrame, FrameWrapper, LeftFrame, MidFrame, RightFrame } from './styles'
import { Header } from './propStyles'
import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
// import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'

const Frame = (props) => {
  return (
    <GeneralFrame>
      <Header>
        {props.teamName}
      </Header>
      <FrameWrapper>
        <LeftFrame>
          {/* <EasternLeaderboard /> */}
          <WesternLeaderboard />
        </LeftFrame>
        <MidFrame />
        <RightFrame />
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
