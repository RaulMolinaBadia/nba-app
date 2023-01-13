import { useState, useEffect } from 'react'
import axios from 'axios'
import { TeamSelectorContainer, Select } from './styles'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const TeamSelector = (props) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get(teamsURL).then(response => {
        setPost(response.data.data)
      })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [teamsURL])
  return (
    <TeamSelectorContainer>
      {post
        ? (
          <Select onChange={(e) => { props.setTeamName(e.target.value) }} id='teams'>
            {post.map((team, i) => (
              <option key={i}>
                {team.full_name}
              </option>
            ))}
          </Select>
          )
        : (
          <div>Loading...</div>
          )}
    </TeamSelectorContainer>
  )
}

export default TeamSelector
