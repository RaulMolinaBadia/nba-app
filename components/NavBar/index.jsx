import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import TeamsList from '../../public/nbaLogos'

import {
  MenuBarWrapper,
  NavBarLeft,
  NavBarRight,
  ListMenu,
  ListMenuItem
} from './styles.js'

const NavBar = props => {
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
      <NavBarLeft>
        <Link href='/'>
          <Image
            src='/app-logo/Logo-NBA.png'
            alt='logo NBA'
            width={100}
            height={60}
          />
        </Link>
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
            <div />
            )
          : (
            <Image
              src={`${teamLogo.logo.src}`}
              width={50}
              height={50}
              alt='team logo'
            />
            )}
      </NavBarRight>
    </MenuBarWrapper>
  )
}

export default NavBar
