import { MenuBarWrapper, TeamsFrame, NewsFrame, LogoFrame } from './styles'
import Link from 'next/link'
import TeamsList from '../../public/nbaLogos'

const MenuBar = (props) => {
  const teamLogo = TeamsList.find(team => team.team === props.teamName).logo
  return (
    <MenuBarWrapper>
      <TeamsFrame>
        <Link href='/'>Teams</Link>
      </TeamsFrame>
      <NewsFrame>
        <Link href='/'>News</Link>
      </NewsFrame>
      <LogoFrame>
        <img src={teamLogo} alt='team logo' />
      </LogoFrame>
    </MenuBarWrapper>
  )
}

export default MenuBar
