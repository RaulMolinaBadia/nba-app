import { useState, useEffect } from 'react'
import axios from 'axios'

export const useDataAPI = apiURL => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(apiURL).then(response => {
      setPost(response.data.data)
      // console.log(post)
    })
  }, [apiURL])

  return post
}
