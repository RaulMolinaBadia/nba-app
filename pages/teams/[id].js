import { useRouter } from 'next/router'

export default function DynamicPage ({ id }) {
  const router = useRouter()
  const { query } = router
  return <h1>El id es {query.id}</h1>
}

DynamicPage.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
