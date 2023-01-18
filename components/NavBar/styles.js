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
  background-color: #0077c9;
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
`

export const ListMenuItem = styled.li`
  padding: 10px;
  border-radius: 0.5rem;
  &:hover {
    background-color: #ff00ff;
    color: #fff;
  }
`
