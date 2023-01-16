import React from 'react'
import { GeneralFrame, FrameWrapper, LeftFrame, MidFrame, RightFrame } from './styles'

const Frame = () => {
  return (
    <GeneralFrame>
      <FrameWrapper>
        <LeftFrame />
        <MidFrame />
        <RightFrame />
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
