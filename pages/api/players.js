import axios from 'axios'

const urlPlayers = 'https://www.balldontlie.io/api/v1/players'

export default function handlerTeam (req, res) {
  axios.get(urlPlayers).then(response => {
    res.status(200).json(response.data)
  })
}
