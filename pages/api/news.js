import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://nba-latest-news.p.rapidapi.com/articles',
  headers: {
    'X-RapidAPI-Key': 'e8079d9059mshaf2885320dead3bp16650ejsne54672d3a921',
    'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
  }
}

export default function handlerNews (req, res) {
  axios.get(options.url).then(response => {
    res.status(200).json(response.data)
  })
}
