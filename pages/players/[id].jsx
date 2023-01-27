import { useRouter } from 'next/router'
import Head from 'next/head'
import Frame from '../../components/Frame'
import Footer from '../../components/Footer/index'
import TeamListBar from '../../components/TeamListBar'
import NavBar from '../../components/NavBar'

export default function DynamicPage ({ id }) {
  const router = useRouter()
  const { query } = router
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/app-logo/Logo-NBA.png' />
        <meta name='NBA-App' content='Page of nba content' />
      </Head>
      <NavBar teamLogo='Logo-NBA' />
      <TeamListBar />
      <Frame teamName={query.id} news={[]} imagesUrls={[]} />
      <Footer />
    </div>
  )
}

DynamicPage.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
