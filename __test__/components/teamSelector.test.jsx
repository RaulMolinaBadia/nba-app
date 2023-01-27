import { render, screen } from '@testing-library/react'
import TeamSelector from '../../components/TeamSelector/index'
import { teams } from '../../mock/teamsMock'
describe('TeamSelector', () => {
  it('renders the dropdown', () => {
    render(<TeamSelector teams={teams} />)
    teams[0].data.forEach(element => {
      const team = screen.getByTestId(element.name)
      expect(team).toBeInTheDocument()
    })
  })
})
