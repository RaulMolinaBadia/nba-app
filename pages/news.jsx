import axios from 'axios'
import cheerio from 'cheerio'
import Head from 'next/head'
import Frame from '../components/Frame'
import Footer from '../components/Footer/index'
import TeamListBar from '../components/TeamListBar'
import NavBar from '../components/NavBar'

export default function News (props) {
  return (
    <div>
      <Head>
        <title>NBA-App</title>
        <link rel='icon' href='/app-logo/Logo-NBA.png' />
        <meta name='NBA-App' content='Page of nba content' />
      </Head>
      <NavBar teamName='Logo-NBA' />
      <TeamListBar />
      <Frame teamName='NEWS' news={props.news} imagesUrls={props.imagesUrls} />
      <Footer />
    </div>
  )
}

async function getImageUrl (url) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  return $('.ArticleContent_article__NBhQ8 img').attr('src')
}

export async function getStaticProps () {
  const headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'X-RapidAPI-Key': 'e8079d9059mshaf2885320dead3bp16650ejsne54672d3a921'
  }
  try {
    const response = await fetch(
      'https://nba-latest-news.p.rapidapi.com/articles?source=nba',
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
      props: { news, imagesUrls },
      revalidate: 10 // rerun after 10 seconds
    }
  } catch (error) {
    console.log(error)
  }
}
