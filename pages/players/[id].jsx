import { useRouter } from 'next/router'
import Frame from '../../components/Frame'
import Footer from '../../components/Footer/index'
import TeamListBar from '../../components/TeamListBar'
import NavBar from '../../components/NavBar'

export default function DynamicPage ({ id }) {
  const router = useRouter()
  const { query } = router
  return (
    <div>
      <NavBar teamLogo='Logo-NBA' />
      <TeamListBar />
      <Frame
        teamName={query.id}
        news={[]}
        imagesUrls={[]}
      />
      <Footer />
    </div>
  )
}

DynamicPage.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
