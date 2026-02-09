import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import Footer from './index.js'

describe('Footer', () => {
  it('renders the Footer', async () => {
    render(<Footer />)

    expect(screen.getAllByText('Privacy Policy')).toHaveLength(1) // link and dialog
    expect(screen.getAllByText('Cookie Preferences')).toHaveLength(1) // link only
  })

  it('does not show the dialog if the `showCookieConsent` prop is false', () => {
    render(<Footer showCookieConsent={false} />)

    expect(screen.getAllByText('Privacy Policy')).toHaveLength(1) // link only
    expect(screen.getAllByText('Cookie Preferences')).toHaveLength(1) // link only
  })
})
