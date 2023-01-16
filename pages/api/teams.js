// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const url = 'https://www.balldontlie.io/api/v1/teams'
export default function handler (req, res) {
  // res.status(200).json({ name: "John Doe" });
  axios.get(url).then((response) => {
    res.status(200).json(response.data)
    console.log(response.data)
  })
}
