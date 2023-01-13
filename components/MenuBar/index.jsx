import { MenuBarWrapper, TeamsFrame, NewsFrame, LogoFrame, Logo } from './styles'
import Link from 'next/link'
import TeamsList from '../../public/nbaLogos'
const MenuBar = (props) => {
  const teamLogo = TeamsList.find((team) => team.name === props.teamName)
  return (
    <MenuBarWrapper>
      <TeamsFrame>
        <Link href='/teams'>Teams</Link>
      </TeamsFrame>
      <NewsFrame>
        <Link href='/news'>News</Link>
      </NewsFrame>
      <LogoFrame>
        <Logo src={`${teamLogo.logo.src}`} alt='team logo' />
      </LogoFrame>
    </MenuBarWrapper>
  )
}

export default MenuBar
