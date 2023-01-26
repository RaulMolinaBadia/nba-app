import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function Loading () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url) => (url !== router.asPath) && setTimeout(() => { setLoading(false) }, 5000)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleComplete)
    router.events.on('routerChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routerChangeComplete', handleComplete)
      router.events.off('routerChangeError', handleComplete)
    }
  })
  return loading && <div>loading...</div>
}

function MyApp ({ Component, pageProps }) {
  return (<><Loading /><Component {...pageProps} /></>)
}

export default MyApp
