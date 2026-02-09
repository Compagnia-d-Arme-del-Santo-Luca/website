import { render, screen, fireEvent } from '@testing-library/react'

import CookieConsent from './index.js'

const analytics = { plugins: { enable: vi.fn(), disable: vi.fn() } }

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => analytics,
}))

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    clear: vi.fn(() => {
      store = {}
    }),
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('CookieConsent', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.clear()
  })

  it('renders the cookie consent dialog when no consent is stored', () => {
    render(<CookieConsent />)

    expect(screen.getByText('Cookie Preferences')).toBeInTheDocument()
    expect(screen.getByText(/We use cookies to improve your browsing experience/)).toBeInTheDocument()
    expect(screen.getByText('Accept All')).toBeInTheDocument()
    expect(screen.getByText('Reject All')).toBeInTheDocument()
  })

  it('accepts all cookies when clicking Accept All', () => {
    render(<CookieConsent />)

    fireEvent.click(screen.getByText('Accept All'))

    expect(localStorageMock.setItem).toHaveBeenCalledWith('m-tartari-cookie-consent', JSON.stringify({ analytics: true, necessary: true }))
    expect(analytics.plugins.disable).not.toHaveBeenCalled()
    expect(analytics.plugins.enable).toHaveBeenCalled()
  })

  it('rejects analytics cookies when clicking Reject All', () => {
    render(<CookieConsent />)

    fireEvent.click(screen.getByText('Reject All'))

    expect(localStorageMock.setItem).toHaveBeenCalledWith('m-tartari-cookie-consent', JSON.stringify({ analytics: false, necessary: true }))
    expect(analytics.plugins.enable).not.toHaveBeenCalled()
    expect(analytics.plugins.disable).toHaveBeenCalled()
  })
})
