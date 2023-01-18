import styled from '@emotion/styled'

export const Spinner = styled.div`
  --red: #d62d20;
  --blue: #0057e7;
  --green: #008744;
  --yellow: #ffa700;
  position: relative;
  width: 60px;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

export const Circular = styled.svg`
  animation: rotate73451 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const Path = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash0175 1.5s ease-in-out infinite, color7123 6s ease-in-out infinite;
  stroke-linecap: round;
`
