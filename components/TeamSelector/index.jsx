import { TeamSelectorContainer, Select } from './styles'
import Router from 'next/router'

const TeamSelector = props => {
  const teams = props.teams.teams.data
  const Redirect = e => {
    props.setTeamName(e.target.value)
    let teamSplited = e.target.value.split(' ')
    teamSplited = teamSplited[teamSplited.length - 1]
    Router.push(`/home/${teamSplited}`)
  }
  return (
    <TeamSelectorContainer>
      <Select
        data-testid='teams'
        onChange={e => {
          Redirect(e)
        }}
        id='teams'
      >
        {teams.map((team, i) => (
          <option key={i}>{team.full_name}</option>
        ))}
      </Select>
    </TeamSelectorContainer>
  )
}

export default TeamSelector
