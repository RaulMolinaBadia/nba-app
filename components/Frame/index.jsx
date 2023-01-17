import React from 'react'
import {
  GeneralFrame,
  FrameWrapper,
  LeftFrame,
  MidFrame,
  RightFrame,
  ImageNews
} from './styles'
import { Header, TeamName } from './propStyles'
import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
import Link from 'next/link'
import Images from 'next/image'
import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'

const Frame = props => {
  console.log(props)
  return (
    <GeneralFrame>
      <Header>
        {props.teamName === 'NEWS' ? <Images src='/app-logo/Logo-NBA.png' width={70} height={70} alt='team logo' /> : <Images src={props.teamLogo} width={70} height={70} alt='team logo' />}
        <TeamName>{props.teamName}</TeamName>
      </Header>
      <FrameWrapper>
        <LeftFrame>
          <EasternLeaderboard />
        </LeftFrame>
        <MidFrame>
          {props.news.map((newsItem, i) => (
            <div key={i}>
              <h1>{newsItem.title}</h1>
              <Link href={newsItem.url}>
                <ImageNews
                  src={props.imagesUrls[i]}
                  alt='newsImages'
                />
              </Link>
            </div>
          ))}
        </MidFrame>
        <RightFrame>
          <WesternLeaderboard />
        </RightFrame>
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
