import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer/index'

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />)

    const footerText = screen.getByTestId('footerText')

    expect(footerText).toBeInTheDocument()
  })
})
