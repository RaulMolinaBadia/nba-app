import styled from '@emotion/styled'

export const GeneralFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.55);
  color: white;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  background-color: lightgray;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
export const LeftFrame = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 25%;
  min-width: 200px;
  height: 63vh;
  color: black;
  overflow: scroll;
  justify-content: center;
`
export const MidFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: white;
  width: 50%;
  min-width: 340px;
  height: 63vh;
  color: black;
  overflow: scroll;
`
export const RightFrame = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 25%;
  min-width: 200px;
  height: 63vh;
  color: black;
  overflow: scroll;
  justify-content: center;
`

export const ImageNews = styled.img`
  width: 90%;
`
export const NewsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 2rem;
  font-size: 1.5rem;
`
