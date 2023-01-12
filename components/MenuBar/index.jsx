import { MenuBarWrapper, TeamsFrame, NewsFrame, LogoFrame } from './styles'

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <TeamsFrame>
        <p>Teams</p>
      </TeamsFrame>
      <NewsFrame>
        <p>News</p>
      </NewsFrame>
      <LogoFrame>
        <p>Logo</p>
      </LogoFrame>
    </MenuBarWrapper>
  )
}

export default MenuBar
