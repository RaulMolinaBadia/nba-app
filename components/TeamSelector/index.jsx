import { TeamSelectorContainer, Select } from './styles'
import Router from 'next/router'

const TeamSelector = (props) => {
  const teams = props.teams.teams.data

  return (
    <TeamSelectorContainer>
      <Select
        data-testid='teams'
        onChange={e => {
          props.setTeamName(e.target.value)
          Router.push(`/home/${e.target.value}`)
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
