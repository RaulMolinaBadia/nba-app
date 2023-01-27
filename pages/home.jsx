import Head from 'next/head'

import Footer from '../components/Footer/index'
import Frame from '../components/Frame'
import TeamListBar from '../components/TeamListBar'
import NavBar from '../components/NavBar/index'

export default function Home () {
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/app-logo/Logo-NBA.png' />
        <meta name='NBA-App' content='Page of nba content' />
      </Head>
      <NavBar teamName='Logo-NBA' />
      <TeamListBar />
      <Frame teamName='NEWS' news={[]} imagesUrls={[]} />
      <Footer />
    </div>
  )
}
