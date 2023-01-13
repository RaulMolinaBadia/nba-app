import Head from 'next/head'
import MenuBar from '../components/MenuBar/index'

export default function Home () {
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/Logo-NBA.png' />
        <meta
          name='description'
          content='Generated by create next app'
        />
      </Head>
      <MenuBar teamName='Bulls' />
    </div>
  )
}
