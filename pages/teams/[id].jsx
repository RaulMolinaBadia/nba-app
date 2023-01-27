import axios from 'axios'
import cheerio from 'cheerio'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Frame from '../../components/Frame'
import Footer from '../../components/Footer/index'
import TeamListBar from '../../components/TeamListBar'
import TeamsList from '../../public/nbaLogos'
import NavBar from '../../components/NavBar'

export default function DynamicPage (props) {
  const router = useRouter()
  const { query } = router
  console.log(props)
  const teamSplited = query.id.split(' ')
  const findTeam = TeamsList.find(team => team.name === query.id)

  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/app-logo/Logo-NBA.png' />
        <meta name='NBA-App' content='Page of nba content' />
      </Head>
      <NavBar teamName={teamSplited[teamSplited.length - 1]} />
      <TeamListBar />
      <Frame
        teamLogo={findTeam.logo.src}
        teamName={query.id}
        news={props.props.news}
        imagesUrls={props.props.imagesUrls}
      />
      <Footer />
    </div>
  )
}
async function getImageUrl (url) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  return $('.ArticleContent_article__NBhQ8 img').attr('src')
}

DynamicPage.getInitialProps = async ({ query }) => {
  const headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'X-RapidAPI-Key': '8acd110f16msh8ab908907b8a392p1b1f53jsn59199f328434'
  }
  try {
    const response = await fetch(
      `https://nba-latest-news.p.rapidapi.com/articles?source=nba&team=${query.id.toLowerCase()}`,
      {
        method: 'GET',
        headers: headersList
      }
    )
    const news = await response.json()
    const imagesUrls = []
    const defaultImageUrl = 'defaultImage.jpg'
    for (const newsItem of news) {
      const imageUrl = await getImageUrl(newsItem.url)
      if (imageUrl) {
        imagesUrls.push(imageUrl)
      } else {
        imagesUrls.push(defaultImageUrl)
      }
    }

    return {
      props: { news, imagesUrls, id: query.id },
      revalidate: 10 // rerun after 10 seconds
    }
  } catch (error) {
    console.log(error)

    return {
      props: {}
    }
  }
}
