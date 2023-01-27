import { useState, useEffect } from 'react'

export const useDataAPI = apiURL => {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        setPost(data.data)
      })
  }, [!post])

  return post
}
