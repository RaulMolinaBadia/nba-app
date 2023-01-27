import axios from 'axios'

export default function handlerTeam (req, res) {
  const headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'X-RapidAPI-Key': 'ed29ff5a2emsh01ed0acf66f0e2ap1e4afcjsne07b094f28ab'
  }

  axios
    .get('https://nba-latest-news.p.rapidapi.com/articles', {
      method: 'GET',
      headers: headersList
    })
    .then(response => {
      res.status(200).json(response.data)
    })
}
