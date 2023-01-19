import Head from 'next/head'
import { useRouter } from 'next/router'
import Frame from '../../components/Frame'
import Footer from '../../components/Footer/index'
import TeamListBar from '../../components/TeamListBar'
import NavBar from '../../components/NavBar'

export default function News ({ id }) {
  const router = useRouter()
  const { query } = router
  let teamSplited = (query.id).split(' ')
  teamSplited = teamSplited[teamSplited.length - 1]

  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/app-logo/Logo-NBA.png' />
        <meta
          name='NBA-App'
          content='Page of nba content'
        />
      </Head>
      <NavBar teamName={teamSplited} />
      <TeamListBar />
      <Frame
        teamName={teamSplited}
        news={[]}
        imagesUrls={[]}
      />
      <Footer />
    </div>
  )
}

News.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
