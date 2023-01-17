import React from 'react'
import cheerio from 'cheerio'
import axios from 'axios'
import { useDataAPI } from '../api/data'
const prueba = (props) => {
  console.log(props)
  //   const a = useDataAPI()
  return (
    <div>
      <img src={props.html} />
    </div>
  )
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

  const { data } = await axios.get('https://www.nba.com/news/lebron-james-scoring-tracker')
  const $ = cheerio.load(data)
  const html = $('.ArticleContent_article__NBhQ8 img').attr('src')
  return {
    props: { html, news },
    revalidate: 10 // rerun after 10 seconds
  }
}
export default prueba
