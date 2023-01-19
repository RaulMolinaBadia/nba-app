import React from 'react'
import {
  GeneralFrame,
  FrameWrapper,
  LeftFrame,
  MidFrame,
  RightFrame,
  ImageNews,
  NewsFrame
} from './styles'
import { Header, TeamName } from './propStyles'
import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
import Link from 'next/link'
import Images from 'next/image'
import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'

const Frame = props => {
  return (
    <GeneralFrame>
      <Header>
        {props.teamName === 'NEWS'
          ? (
            <div />
            )
          : (
            <Images
              src={props.teamLogo || `/nba-logos/${props.teamName}-logo.png`}
              width={70}
              height={70}
              alt='team logo'
              priority
              quality={100}
            />
            )}
        <TeamName>{props.teamName}</TeamName>
      </Header>
      <FrameWrapper>
        <LeftFrame>
          <WesternLeaderboard />
        </LeftFrame>
        <MidFrame>
          {props.news.length === 0
            ? (
              <NewsFrame>
                No hay noticias disponibles de los {props.teamName}
              </NewsFrame>
              )
            : (
                props.news.map((newsItem, i) => (
                  <NewsFrame key={i}>
                    <h1>{newsItem.title}</h1>
                    <Link href={newsItem.url}>
                      <ImageNews
                        src={
                      props.imagesUrls[i] === 'defaultImage.jpg'
                        ? '/background-images/mjordan.png'
                        : props.imagesUrls[i]
                    }
                        alt='newsImages'
                      />
                    </Link>
                  </NewsFrame>
                ))
              )}
        </MidFrame>

        <RightFrame>
          <EasternLeaderboard />
        </RightFrame>
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
