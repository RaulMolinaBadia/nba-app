import Head from 'next/head'

import Footer from '../components/Footer/index'
import TeamListBar from '../components/TeamListBar'
import NavBar from '../components/NavBar/index'
import ImageGallery from '../components/ImageGallery'

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
      <div>
        <ImageGallery />
      </div>
      <Footer />
    </div>
  )
}
