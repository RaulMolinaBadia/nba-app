import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from '../../styles/pages/LandingPage'
import MenuBar from '../../components/MenuBar/index'
import TeamListBar from '../../components/TeamListBar'
import Frame from '../../components/Frame'

export default function DynamicPage ({ id }) {
  const router = useRouter()
  const { query } = router
  return (
    <div>
      <h1 />
      <NavBar>
        <Link href='/'>
          <Image src='/app-logo/Logo-NBA.png' width={100} height={57} alt='logoNBA' priority />
        </Link>
        <MenuBar teamName='Logo-NBA' />
      </NavBar>
      <TeamListBar />
      <Frame
        teamName={query.id}
        news={[]}
        imagesUrls={[]}
      />
    </div>
  )
}

DynamicPage.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
