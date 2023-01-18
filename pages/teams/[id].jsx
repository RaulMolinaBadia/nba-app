import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from '../../styles/pages/LandingPage'
import MenuBar from '../../components/MenuBar/index'
import TeamListBar from '../../components/TeamListBar'
import Frame from '../../components/Frame'
import TeamsList from '../../public/nbaLogos'
import axios from 'axios'
import cheerio from 'cheerio'

export default function DynamicPage (props) {
  console.log(props)
  const router = useRouter()
  const { query } = router
  const teamSplited = (query.id).split(' ')
  const findTeam = TeamsList.find(team => team.name === query.id)
  return (
    <div>
      <h1 />
      <NavBar>
        <Link href='/'>
          <Image src='/app-logo/Logo-NBA.png' width={100} height={57} alt='logoNBA' priority />
        </Link>
        <MenuBar teamName={teamSplited[teamSplited.length - 1]} />
      </NavBar>
      <TeamListBar />
      <Frame
        teamLogo={findTeam.logo.src}
        teamName={query.id}
        news={props.props.news}
        imagesUrls={props.props.imagesUrls}
      />
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
  // Hay que cambiar para que query id de igual si esta en mayuscula o
  const response = await fetch(`https://nba-latest-news.p.rapidapi.com/articles?source=nba&team=${(query.id).toLowerCase()}`, {
    method: 'GET',
    headers: headersList
  })
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
}
