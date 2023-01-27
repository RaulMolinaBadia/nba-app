import axios from 'axios'

export default function handlerTeam (req, res) {
  const headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'X-RapidAPI-Key': '8acd110f16msh8ab908907b8a392p1b1f53jsn59199f328434'
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
