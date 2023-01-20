// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const url = 'https://www.balldontlie.io/api/v1/teams'
export default function handler (req, res) {
  axios.get(url).then(response => {
    res.status(200).json(response.data)
  })
}
