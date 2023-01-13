import '../styles/globals.css'
import { NavBar } from '../styles/pages/LandingPage'
import MenuBar from '../components/MenuBar'
import Image from 'next/image'

function MyApp ({ Component, pageProps }) {
  <NavBar>
    <Image src='/app-logo/Logo-NBA.png' width={100} height={57} alt='logoNBA' />
    <MenuBar teamName='Bulls' />
  </NavBar>
  return <Component {...pageProps} />
}

export default MyApp
