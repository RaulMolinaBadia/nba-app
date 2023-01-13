import Head from 'next/head'
// import Image from 'next/Image'
import TeamSelector from '../components/TeamSelector'

export default function Home () {
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/Logo-NBA.png' />
        <meta name='description' content='Generated by create next app' />
      </Head>
      {/* <Image
        src={`/nba-logos/${bulls}-logo.png`}
        width={50}
        height={50}
        alt='a'
      /> */}
      <TeamSelector />
    </div>
  )
}
