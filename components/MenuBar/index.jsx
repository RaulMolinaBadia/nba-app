import { MenuBarContainer, ListMenuItem, ListMenu, NavBarRight, NavBarLeft } from './styles'
import Link from 'next/link'
import TeamsList from '../../public/nbaLogos'
import Image from 'next/image'

const MenuBar = props => {
  const teamName = props.teamName.split(' ')
  let teamLogo = ''
  if (teamName[0] === 'Logo-NBA') {
    teamLogo = 'Logo-NBA'
  } else {
    teamLogo = TeamsList.find(
      team => team.name === teamName[teamName.length - 1]
    )
  }

  return (
    <MenuBarContainer>
      <NavBarLeft>
        <Image src='/app-logo/Logo-NBA.png' alt='logo NBA' width={100} height={57} />

      </NavBarLeft>
      <NavBarRight>
        <ListMenu>
          <ListMenuItem>
            <Link href='/teams'>Teams</Link>
          </ListMenuItem>
          <ListMenuItem>
            <Link href='/news'>News</Link>
          </ListMenuItem>
        </ListMenu>
        {teamLogo === 'Logo-NBA'
          ? (
            <Image
              src='/app-logo/Logo-NBA.png'
              width={50}
              height={25}
              alt='NBA logo'
            />
            )
          : (
            <Image
              src={`${teamLogo.logo.src}`}
              width={70}
              height={70}
              alt='team logo'
            />
            )}
      </NavBarRight>
    </MenuBarContainer>
  )
}

export default MenuBar
