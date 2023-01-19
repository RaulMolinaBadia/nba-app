import React from 'react'
import cheerio from 'cheerio'
import Image from 'next/image'
const prueba = (props) => {
  return (
    <div>
      {
        props.news.map((newsItem, i) => (
          <div key={i}>
            <h1>{newsItem.title}</h1>
            <Image src={props.imagesUrls[i]} width={800} height={700} alt='newsImages' />
          </div>
        ))
        }
      <img src={props.html} />
    </div>
  )
}

async function getImageUrl (url) {
  const { data } = await fetch(url)
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
  const defaultImageUrl = '/path/to/default-image.jpg'
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

export default prueba
