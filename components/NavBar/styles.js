import styled from '@emotion/styled'

export const MenuBarWrapper = styled.div`
  display: flex;
`
export const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const NavBarRight = styled.div`
  flex: 1;
  background: linear-gradient(
    120deg,
    SlateBlue 60%,
    DodgerBlue 88%,
    DodgerBlue 40%,
    DodgerBlue 100%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.5rem 0 0 0.5rem;
`

export const ListMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 5%;
`

export const ListMenuItem = styled.li`
  padding: 10px;
  border-radius: 0.5rem;
  &:hover {
    background-color: #ff00ff;
    color: #fff;
  }
  margin-right: 0.9rem;
`
