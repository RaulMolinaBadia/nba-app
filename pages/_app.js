import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import '../styles/globals.css'
import LoadingSpinner from '../components/LoadingSpinner'
import nProgress from 'nprogress'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url => {
    console.log('Route is changing...')
    nProgress.start()
    setLoading(true)
  }))
  Router.events.on('routeChangeComplete', (url => {
    console.log('Route is changed.')
    nProgress.done()
    setLoading(false)
  }))
  Router.events.on('routeChangeError', (url => {
    console.log('Route is changed with error.')
    setLoading(false)
  }))
  return(
    <>
    {loading && <LoadingSpinner />}
    <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
