import { useState, useEffect } from 'react'
import axios from 'axios'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const TeamSelector = () => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get(teamsURL).then(response => {
        console.log(response.data.data)
        setPost(response.data.data)
      })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [teamsURL])

  return (
    <>
      {post
        ? (
          <select name='teams' id=''>
            {post.map((team, i) => (
              <option key={i}>
                {/* <Image
                  src='/nba-logos/bulls-logo.png'
                  width={50}
                  height={50}
                  alt='a'
                /> */}
                {team.full_name}
              </option>
            ))}
          </select>
          )
        : (
          <div>Loading...</div>
          )}
    </>
  )
}

export default TeamSelector
