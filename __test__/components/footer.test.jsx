import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer/index'

  it('renders the footer', () => {
    render(<Footer />)
    const footerText = screen.getByTestId('footerText')
    expect(footerText).toBeInTheDocument()
  })
