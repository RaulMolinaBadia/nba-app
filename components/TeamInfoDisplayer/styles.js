import styled from '@emotion/styled'

export const Teams = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
  flex-wrap: wrap;
`

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 15.625rem;
  height: 22rem;
  justify-content: center;
  margin: 2rem;
  background: linear-gradient(
    120deg,
    SlateBlue 60%,
    DodgerBlue 88%,
    DodgerBlue 40%,
    DodgerBlue 100%
  );
  color: white;
  border-radius: 10px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`
