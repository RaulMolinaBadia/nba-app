// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const urlTeam = 'https://www.balldontlie.io/api/v1/teams'

export default function handlerTeam (req, res) {
  axios.get(urlTeam).then(response => {
    res.status(200).json(response.data)
  })
}
