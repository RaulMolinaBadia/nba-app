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
  background-color: transparent;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  min-height: 795px;
`
export const LeftFrame = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2c2c2c;
  width: 25%;
  min-width: 226px;
  height: 63vh;
  color: white;
  justify-content: center;
  min-height: 795px;
  @media (max-width: 1004px) {
    order: 2;
    width: 50%;
  }
`
export const MidFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: #2c2c2c;
  width: 50%;
  min-width: 340px;
  height: 63vh;
  min-height: 795px;
  color: black;
  overflow: scroll;
  overflow-x: hidden;
  border-top: 1px solid;
  @media (max-width: 1004px) {
    order: 1;
    width: 100%
  }
`
export const RightFrame = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2c2c2c;
  width: 25%;
  min-width: 213px;
  height: 63vh;
  min-height: 795px;
  color: white;
  justify-content: center;
  @media (max-width: 1004px) {
    order: 2;
    width: 50%;
  }
`

export const ImageNews = styled.img`
  width: 90%;
`
export const NewsFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
`

export const ImageNewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  `
