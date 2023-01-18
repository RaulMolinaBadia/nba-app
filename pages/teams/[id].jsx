import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from '../../styles/pages/LandingPage'
import MenuBar from '../../components/MenuBar/index'
import TeamListBar from '../../components/TeamListBar'
import Frame from '../../components/Frame'
import TeamsList from '../../public/nbaLogos'

export default function DynamicPage ({ id }) {
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
        news={[]}
        imagesUrls={[]}
      />
    </div>
  )
}

DynamicPage.getInitialProps = async ({ query }) => {
  return { id: query.id }
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
  const response = await fetch('https://nba-latest-news.p.rapidapi.com/articles?source=nba', {
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
    props: { news, imagesUrls },
    revalidate: 10 // rerun after 10 seconds
  }
}
