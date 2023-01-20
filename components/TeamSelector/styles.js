import styled from '@emotion/styled'
export const TeamSelectorContainer = styled.div`
  width: 27%;
  height: 58vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-top: 20rem;
`

export const Select = styled.select`
  appearance: none;
  background-color: #1c1c1c;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  // transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #333;
  }
`

export const TeamOptions = styled.option`
  background-color: #333;
  color: #000;
  font-size: 1rem;
  padding: 10px;
  &:hover {
    background-color: #1c1c1c;
    color: #fff;
  }
`
