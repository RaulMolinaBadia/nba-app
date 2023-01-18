import { MenuBarWrapper, ItemMenuFrame } from './styles'
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
    <MenuBarWrapper>
      <ItemMenuFrame>
        <Link href='/teams'>Teams</Link>
      </ItemMenuFrame>
      <ItemMenuFrame>
        <Link href='/news'>News</Link>
      </ItemMenuFrame>
      <ItemMenuFrame>
        {teamLogo === 'Logo-NBA'
          ? (
            <Image
              src='/app-logo/Logo-NBA.png'
              width={100}
              height={57}
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
      </ItemMenuFrame>
    </MenuBarWrapper>
  )
}

export default MenuBar
