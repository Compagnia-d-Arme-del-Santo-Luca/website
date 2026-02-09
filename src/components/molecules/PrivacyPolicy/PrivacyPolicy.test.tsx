import { render, screen } from '@testing-library/react'

import PrivacyPolicy from './index.js'

describe('Privacy Policy', () => {
  it('renders the Privacy Policy page', async () => {
    render(<PrivacyPolicy />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })
})
