import axios from 'axios'

const urlNews = 'https://www.balldontlie.io/api/v1/teams'

export default function handlerNews (req, res) {
  axios.get(urlNews).then(response => {
    res.status(200).json(response.data)
  })
}
